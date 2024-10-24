import DriverRadialChart from './DriverRadialChart';

export default function RiskCibilSocialRadial() {
  const series = [800, 600, 400]; // Raw values from 900
  const labels = ['Cibil', 'Risk', 'Social'];

  return (
    <DriverRadialChart
      series={series}
      labels={labels}
      totalLabel="Cibil/Risk/Social"
      totalValue="900"
      // colors={['#06b543', '#af5a00', '#8a05a8']}
    />
  );
}
