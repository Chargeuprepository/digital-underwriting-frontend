import DriverRadialChart from './DriverRadialChart';

export default function RiskCibilSocialRadial({ scores }) {
  // const series = [800, 600, 400]; // Raw values from 900
  const valuesArray = Object.values(scores);
  const labels = ['Cibil', 'Risk'];

  return (
    <DriverRadialChart
      series={valuesArray}
      labels={labels}
      totalLabel="Cibil/Risk"
      totalValue="900"
      // colors={['#06b543', '#af5a00', '#8a05a8']}
    />
  );
}
