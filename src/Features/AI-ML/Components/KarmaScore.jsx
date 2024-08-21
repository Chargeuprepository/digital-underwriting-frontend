import MLCard from './MLCard';

const data = {
  name: 'Karma',
  modelName: 'Predicting Karma Score',
  description:
    "A machine learning model predicts a driver's Karma Score using factors like earnings, NPTS TAT days, credit score, and service satisfaction, providing a comprehensive view of reliability and performance. This information enables the company to allocate resources effectively, offer personalized support, and enhance service quality. The model is a valuable tool for maintaining high standards and fostering trust with drivers and customers.",
};
const place = 2;
const inputs = {
  heading: 'Predicting Karma Score',
  data: [
    // {
    //   label: 'avg EMI delays',
    //   type: 'number',
    //   message: 'Provide the average EMI delays.',
    //   formValueType: 'input',
    //   placeholder: 'Total no. of days',
    // },
    {
      label: 'net promoter score(NPS)',
      type: 'option',
      values: ['1', '2', '3', '4', '5'],
      message: 'Provide the NPS score.',
      formValueType: 'select',
      placeholder: 'Ex: 1-5',
    },
    // {
    //   label: 'credit score',
    //   type: 'number',
    //   message: 'Provide the credit score.',
    //   formValueType: 'input',
    //   placeholder: 'Ex: 750',
    // },
    // {
    //   label: 'avg distance per day in KM',
    //   type: 'number',
    //   message: 'Provide the average distance.',
    //   formValueType: 'input',
    //   placeholder: 'Ex: 40KM',
    // },
    {
      label: 'service time to resolve',
      type: 'option',
      values: ['1', '2', '3', '4', '5'],
      message: 'Provide the Service days to resolve.',
      formValueType: 'select',
      placeholder: 'Ex: 2',
    },
  ],
};

export default function KarmaScore() {
  return <MLCard data={data} place={place} inputs={inputs} />;
}
