import DriverRadialChart from './DriverRadialChart';

export default function PaymentModeRadial() {
  const series = [100, 100]; // Online 60%, Offline 40%
  const labels = ['Online', 'Offline'];

  return (
    <DriverRadialChart
      series={series}
      labels={labels}
      totalLabel="Total Payments"
      totalValue="100"
      hollowSize="50%" // Optional: Adjust if needed
      colors={['#1388ba', '#02c97d']}
    />
  );
}
