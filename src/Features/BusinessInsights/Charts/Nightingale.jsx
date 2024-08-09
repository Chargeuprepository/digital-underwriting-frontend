import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Container from './Container';

const data1 = [
  { value: 40, name: 'rose 1' },
  { value: 38, name: 'rose 2' },
  { value: 32, name: 'rose 3' },
  { value: 30, name: 'rose 4' },
  { value: 28, name: 'rose 5' },
  { value: 26, name: 'rose 6' },
  { value: 22, name: 'rose 7' },
  { value: 18, name: 'rose 8' },
];

export default function NightingaleChart({
  data = data1,
  height = '100%',
  width = '100%',
  total = 234,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);
      const decals = [
        { symbol: 'circle', symbolSize: 7 },
        { symbol: 'rect', symbolSize: 2 },
        { symbol: 'line', symbolSize: 5 },
        { symbol: 'arrow', symbolSize: 2 },
        { symbol: 'triangle', symbolSize: 1 },
        { symbol: 'diamond', symbolSize: 1 },
        { symbol: 'pin', symbolSize: 2 },
        { symbol: 'star', symbolSize: 2 },
      ];

      const option = {
        textStyle: {
          fontFamily: 'Poppins, sans-serif',
          fontSize: 12,
          color: '#ffffff',
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8,
            },
            label: {
              show: true,
              fontWeight: 500,
              formatter: (params) => {
                return `${((params.value * 100) / total).toFixed()}%`;
              },
            },
            data: data.map((val, i) => ({
              ...val,
              itemStyle: { decal: decals[i] },
            })),
          },
        ],
      };

      chartInstance.setOption(option);

      return () => {
        chartInstance.dispose();
      };
    }
  }, []);

  return (
    <Container>
      <div ref={chartRef} style={{ width, height }} />
    </Container>
  );
}

{
  /* <NightingaleChart
        data={[
          { label: 'IndiaMart', value: 40 },
          { label: 'Paytm', value: 60 },
          { label: 'Whatsapp', value: 80 },
          { label: 'Instagram', value: 90 },
          { label: 'Flipkart', value: 80 },
          { label: 'Amazon', value: 90 },
        ]}
        height="100%"
        width="100%"
        total={142 + 73 + 11}
      /> */
}
