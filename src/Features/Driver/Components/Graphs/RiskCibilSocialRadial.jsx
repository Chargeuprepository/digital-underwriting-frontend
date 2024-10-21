import DriverRadialChart from './DriverRadialChart';

export default function RiskCibilSocialRadial() {
  const series = [900, 900, 900]; // Raw values from 900
  const labels = ['Cibil', 'Risk', 'Social'];

  return (
    <DriverRadialChart
      series={series}
      labels={labels}
      totalLabel="Cibil/Risk/Social"
      totalValue="900"
      hollowSize="44%" // Optional: Adjust if needed
      //   colors={['#06b543', '#af5a00', '#8a05a8']}
    />
  );
}
