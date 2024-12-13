import DriverRadialChart from './DriverRadialChart';

export default function RiskCibilSocialRadial({ scores }) {
  const valuesArray = Object.values(scores);
  const labels = ['Cibil', 'Risk', 'Karma'];

  return (
    <DriverRadialChart
      series={valuesArray}
      labels={labels}
      totalLabel="Cibil/Risk/Karma"
      // totalValue="900"
      // colors={['#06b543', '#af5a00', '#8a05a8']}
    />
  );
}
