import MLCard from './MLCard';

const data = {
  name: 'Latepayment',
  modelName: "Predicting Driver's Payment Behaviour",
  description:
    'Our machine learning model predicts user payment behavior, indicating whether a user will pay on time or delay. Leveraging key user parameters, it helps us manage risk proactively. This enhances our financial forecasting and operational efficiency.',
};
const place = 1;
const inputs = {
  heading: "Predicting Driver's Payment Behaviour",
  data: [
    {
      label: 'tenure',
      type: 'text',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Total no. of months',
    },
    {
      label: 'down payment',
      type: 'text',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: ₹8000',
    },
    {
      label: 'monthly EMI amount',
      type: 'text',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: ₹3000',
    },
    {
      label: 'loan amount',
      type: 'text',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: ₹20,000',
    },
    {
      label: 'amount repaid',
      type: 'text',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: ₹2000',
    },
    {
      label: 'remaining amount',
      type: 'number',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: ₹3000',
    },
    {
      label: 'avg distance in 7 days in KM',
      type: 'number',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: 300KM',
    },
    {
      label: 'digital footprint',
      type: 'number',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Yes',
    },
    {
      label: 'identity confidence',
      type: 'option',
      values: ['high', 'medium', 'low'],
      message: 'This is required.',
      formValueType: 'select',
    },
    {
      label: 'own residence',
      type: 'option',
      values: ['yes', 'no'],
      message: 'This is required.',
      formValueType: 'select',
      placeholder: 'Yes',
    },
    {
      label: 'vehicle status',
      type: 'option',
      values: ['DP-PAN', 'owned'],
      message: 'This is required.',
      formValueType: 'select',
      placeholder: 'Yes',
    },
    {
      label: 'social footprint score',
      type: 'number',
      message: 'This is required.',
      formValueType: 'input',
      placeholder: 'Ex: 100',
    },
  ],
};

export default function PaymentBehaviour() {
  return <MLCard data={data} place={place} inputs={inputs} />;
}
