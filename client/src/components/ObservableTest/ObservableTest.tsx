import React, {useState, useEffect} from 'react';
import * as Plot from '@observablehq/plot';
// import * as d3 from 'd3';

// // Can add things from d3 as well, j40map uses
// // d3.easecubic to zoom from place to place on click

const ObservableTest = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the data
    const url =
      'http://localhost:5001/data/data-pipeline/data_pipeline/data/score/geojson/burd_dem_long.json';
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

          setData(jsonData); // Directly set the row-oriented data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError('Failed to load data. Please check the file path or server.');
        });
  }, []);

  const racialOrder = [
    'White (Non-Hispanic)',
    'Black or African American',
    'Hispanic or Latino',
    'Other Race',
    'Asian',
    'Native Hawaiian and Pacific Islander',
    'American Indian and Alaskan Native',
  ];

  const sortedData = data.sort(
      (a, b) =>
        racialOrder.indexOf(a.racial_group) - racialOrder.indexOf(b.racial_group),
  );

  useEffect(() => {
    if (sortedData.length > 0) {
      const chart = Plot.plot({
        marks: [
          Plot.barY(sortedData, {
            x: 'total_burdens',
            y: 'percentage',
            fill: 'racial_group',
            tip: true,
          }),
        ],
        y: {axis: true, label: 'Percentage', percent: true, domain: [1, 100]},
        x: {label: 'Total Burdens'},
        color: {legend: true, label: 'Racial Group'},
      });

      document.getElementById('chart')?.appendChild(chart);

      return () => chart.remove();
    }
  }, [sortedData]);

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>;
  }

  if (sortedData.length === 0) {
    return <div>Loading Data...</div>;
  }

  return <div id="chart" />;
};

export default ObservableTest;
