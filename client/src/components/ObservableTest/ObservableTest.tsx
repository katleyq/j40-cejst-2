import React, {useState, useEffect} from 'react';
import * as Plot from '@observablehq/plot';

// // Can add things from d3 as well, j40map uses
// // d3.easecubic to zoom from place to place on click

const ObservableTest = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the data
    fetch(
        '../../../../data/data-pipeline/data_pipeline/data/score/geojson/gistar/burd/usa-high-gistar-burd.json',
    )
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const chart = Plot.plot({
        // color: {legend: true},
        marks: [
          Plot.barY(data, {
            x: 'SF',
            y: 'TPF',
            fill: 'SF',
            tip: true,
          }),
        ],
      });
      document.getElementById('chart')?.appendChild(chart);

      return () => chart.remove();
    }
  }, [data]);

  return <div id="chart" />;
};

export default ObservableTest;

// import React, {useRef, useEffect} from 'react';
// import * as Plot from '@observablehq/plot';

// // Can add things from d3 as well, j40map uses
// // d3.easecubic to zoom from place to place on click

// const ObservableTest = () => {
//   const chartRef = useRef<HTMLDivElement>(null);

//   const data = [
//     {category: 'A', value: 10},
//     {category: 'B', value: 20},
//     {category: 'C', value: 15},
//   ];

//   useEffect(() => {
//     const chart = Plot.plot({
//       color: {legend: true},
//       marks: [
//         Plot.barY(data, {
//           x: 'category',
//           y: 'value',
//           fill: 'category',
//           tip: true,
//         }),
//       ],
//     });

//     if (chartRef.current) {
//       chartRef.current.appendChild(chart);
//     }

//     return () => chart.remove();
//   }, []);

//   return <div ref={chartRef} />;
// };

// export default ObservableTest;
