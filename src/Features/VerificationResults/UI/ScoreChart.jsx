import GaugeChart from 'react-gauge-chart';
import { useState } from 'react';

export default function ScoreChart({ param }) {
  const [value, setValue] = useState(param);
  const percentValue = value / 999;

  return (
    <GaugeChart
      id="gauge-chart"
      nrOfLevels={20}
      colors={['#0dee0d', '#f9f906', '#f01010']}
      arcWidth={0.3}
      percent={percentValue}
      textColor="var(--color-brand-original-blue-400)"
      needleColor="var(--color-gray-400)"
      arcPadding={0.03}
      formatTextValue={(value) => `${Math.floor(value * 10)}`}
      animate={true}
      style={{
        width: '35rem',
        height: '13rem',
        fontWeight: '500',
      }}
    />
  );
}
