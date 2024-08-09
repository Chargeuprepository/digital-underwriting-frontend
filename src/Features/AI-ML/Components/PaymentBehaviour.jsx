import MLCard from './MLCard';

const data = {
  name: 'Latepayment',
  modelName: "Predicting Driver's Payment Behaviour",
  description:
    'Our machine learning model predicts user payment behavior, indicating whether a user will pay on time or delay. Leveraging key user parameters, it helps us manage risk proactively. This enhances our financial forecasting and operational efficiency.',
};
const index = 1;

export default function PaymentBehaviour() {
  return <MLCard data={data} index={index} />;
}
