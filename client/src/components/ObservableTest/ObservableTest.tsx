import React, {useRef, useEffect} from 'react';
import * as Plot from '@observablehq/plot';

const ObservableTest = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const data = [
    {category: 'A', value: 10},
    {category: 'B', value: 20},
    {category: 'C', value: 15},
  ];

  useEffect(() => {
    const chart = Plot.plot({
      color: {legend: true},
      marks: [
        Plot.barY(data, {
          x: 'category',
          y: 'value',
          fill: 'category',
          tip: true,
        }),
      ],
    });

    if (chartRef.current) {
      chartRef.current.appendChild(chart);
    }

    return () => chart.remove();
  }, []);

  return <div ref={chartRef} />;
};

export default ObservableTest;
