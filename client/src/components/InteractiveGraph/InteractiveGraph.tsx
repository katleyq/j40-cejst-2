import React, {useEffect, useRef, useState} from 'react';
import * as Plot from '@observablehq/plot';
// import * as d3 from 'd3';

interface Datum {
  state: string;
  county: string;
  burden: string;
  indicator: string;
  value: number;
  percentile?: number;
}

interface Props {
  url: string;
}

const InteractiveGraph = ({url}: Props) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<Datum[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the data from the provided URL
    console.log('Fetching data from:', url);

    fetch(url)
        .then((response) => {
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((jsonData) => {
          console.log('Fetched data:', jsonData);

          if (!Array.isArray(jsonData)) {
            throw new Error('The fetched data is not an array.');
          }

          setData(jsonData); // Set the fetched data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Failed to load data. Please check the file path or server.');
        });
  }, [url]);

  // Define states
  const states = Array.from(new Set(data.map((d) => d.state))).sort();
  const [selectedState, setSelectedState] = useState(states[0] || '');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedBurden, setSelectedBurden] = useState('');
  const [selectedIndicator, setSelectedIndicator] = useState('');

  // Dynamically calculate counties and indicators based on current selections
  const counties = Array.from(
      new Set(data.filter((d) => d.state === selectedState).map((d) => d.county)),
  ).sort();

  const burdenCategories = Array.from(
      new Set(data.map((d) => d.burden)),
  ).sort();

  const indicators = Array.from(
      new Set(
          data
              .filter(
                  (d) =>
                    (!selectedState || d.state === selectedState) &&
            (!selectedCounty || d.county === selectedCounty) &&
            (!selectedBurden || d.burden === selectedBurden),
              )
              .map((d) => d.indicator),
      ),
  ).sort();

  // Update selectedCounty and selectedIndicator when dependencies change
  useEffect(() => {
    if (counties.length > 0) {
      setSelectedCounty('');
    }
  }, [selectedState]);

  useEffect(() => {
    if (indicators.length > 0) {
      setSelectedIndicator('');
    }
  }, [selectedBurden]);

  // Filter and aggregate
  const filteredData = data.filter(
      (d) =>
        (!selectedState || d.state === selectedState) &&
      (!selectedCounty || d.county === selectedCounty) &&
      (!selectedBurden || d.burden === selectedBurden) &&
      (!selectedIndicator || d.indicator === selectedIndicator),
  );
  console.log('Filtered Data:', filteredData);

  const scaledData = filteredData.map((d) => ({
    ...d,
    percentile: d.value * 100,
  }));
  console.log('Scaled Data:', scaledData);

  // const bins = d3
  //     .bin()
  //     .domain([1, 100])
  //     .thresholds(20) // or however many bins you want
  //     .value((d) => d)(
  //         filteredData
  //             .map((d) => d.percentile)
  //             .filter((p): p is number => p !== undefined),
  //     )
  //     .map((bin) => ({
  //       ...bin,
  //       avgPercentile: d3.mean(bin),
  //     }));

  useEffect(() => {
    const chart = Plot.plot({
      y: {
        label: 'Number of Census Tracts',
      },
      x: {
        domain: [0, 100],
        label: 'Percentile',
        tickFormat: (d) => `${d}%`,
      },
      color: {scheme: 'PuRd'},
      // marks: [
      //   Plot.rectY(bins, {
      //     x1: (d) => d.x0,
      //     x2: (d) => d.x1,
      //     y: (d) => d.length,
      //     fill: (d) => d.avgPercentile,
      //     tip: true,
      //     title: (d) =>
      //       [
      //         `Range: ${d.x0}–${d.x1}`,
      //         `Count: ${d.length}`,
      //         // `Avg Percentile: ${d.avgPercentile.toFixed(0)}%`,
      //       ].join('\n'),
      //   }),
      //   Plot.ruleY([0]),
      // ],
      marks: [
        // Plot.boxY(filteredData, {
        //   x: 'indicator',
        //   y: 'value',
        // }),
        Plot.rectY(
            scaledData,
            Plot.binX(
                {y: 'count', fill: 'mean'},
                {x: 'percentile', fill: 'percentile'},
            ),
        ),
        Plot.ruleY([0]),
      ],
      width: 800,
      height: 400,
      marginLeft: 60,
    });

    if (chartRef.current) {
      chartRef.current.innerHTML = '';
      chartRef.current.appendChild(chart);
    }
  }, [scaledData]);

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <div style={{marginBottom: '1rem'}}>
        <label>
          State:
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          County:
          <select
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
          >
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label>
          Burden:
          <select
            value={selectedBurden}
            onChange={(e) => setSelectedBurden(e.target.value)}
          >
            {burdenCategories.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <label>
          Indicator:
          <select
            value={selectedIndicator}
            onChange={(e) => setSelectedIndicator(e.target.value)}
          >
            {indicators.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div ref={chartRef}></div>
    </div>
  );
};

export default InteractiveGraph;
