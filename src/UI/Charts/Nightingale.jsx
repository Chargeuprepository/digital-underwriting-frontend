import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// const daysData = [
//   { value: 20, name: '>30' },
//   { value: 20, name: '23-30' },
//   { value: 20, name: '16-22' },
//   { value: 20, name: '8-15' },
//   { value: 20, name: '<=7' },
// ];

export default function NightingaleChart({ emiTrends }) {
  const chartRef = useRef(null);
  console.log(emiTrends);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

      const decals = [
        { symbol: 'circle', symbolSize: 2 },
        { symbol: 'circle', symbolSize: 1 },
        { symbol: 'circle', symbolSize: 5 },
        { symbol: 'circle', symbolSize: 2 },
        { symbol: 'circle', symbolSize: 1 },
      ];

      const option = {
        textStyle: {
          fontFamily: 'Poppins, sans-serif',
          fontSize: 12,
          color: '#ff0000',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: ({d}%)',
          textStyle: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
        series: [
          {
            name: 'EMI Payment Behavior',
            type: 'pie',
            radius: [40, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 6,
            },
            label: {
              show: true,
              fontWeight: 500,
              fontFamily: 'Poppins',
              formatter: (params) => {
                return `${params.name}`;
              },
            },
            data: emiTrends.map((val, i) => ({
              ...val,
              itemStyle: { decal: decals[i % decals.length] },
            })),
          },
        ],
      };

      chartInstance.setOption(option);

      return () => {
        chartInstance.dispose();
      };
    }
  }, [emiTrends]);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '83%',
      }}
    />
  );
}
