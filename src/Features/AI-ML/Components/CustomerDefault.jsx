import MLCard from './MLCard';

const data = {
  name: 'DefaultEMI',
  modelName:
    'Predictive Analytics Model for EMI Defaults and Battery Discontinuation',
  description:
    'A machine learning model predicts whether drivers will default on EMI payments or discontinue using provided batteries by analyzing various factors to identify high-risk individuals. This allows for proactive measures to mitigate potential losses, safeguarding financial stability and enhancing customer service by addressing issues early. The predictive tool is a powerful asset for ensuring sustainable growth and building investor confidence.',
};
const place = 3;
const inputs = {
  heading:
    'Predictive Analytics Model for EMI Defaults and Battery Discontinuation',
  data: [
    {
      label: 'tenure',
      type: 'number',
      message: 'Provide the tenure in months.',
      formValueType: 'input',
      placeholder: 'Ex: 24',
    },
    {
      label: 'down payment',
      type: 'number',
      message: 'Provide the amount of down payment.',
      formValueType: 'input',
      placeholder: 'Ex: 5000',
    },
    {
      label: 'monthly EMI amount',
      type: 'number',
      message: 'Provide the amount of the monthly EMI.',
      formValueType: 'input',
      placeholder: 'Ex: 200',
    },
    {
      label: 'loan amount',
      type: 'number',
      message: 'Provide the total loan amount.',
      formValueType: 'input',
      placeholder: 'Ex: 10000',
    },
    {
      label: 'remaining amount',
      type: 'number',
      message: 'Provide the remaining amount to be paid.',
      formValueType: 'input',
      placeholder: 'Ex: 3000',
    },
    {
      label: 'average DPD(Days past due)',
      type: 'number',
      message: 'Provide the average number of days past due.',
      formValueType: 'input',
      placeholder: 'Ex: 1',
    },
    {
      label: 'risk score',
      type: 'number',
      message: 'Provide the risk score.',
      formValueType: 'input',
      placeholder: 'Ex: 70',
    },
    {
      label: 'social footprint score',
      type: 'number',
      message: 'Provide the social footprint score.',
      formValueType: 'input',
      placeholder: 'Ex: 50',
    },
    {
      label: 'net promoter score(NPS)',
      type: 'number',
      message: 'Provide the NPS.',
      formValueType: 'input',
      placeholder: 'Ex: 50',
    },
  ],
};

export default function CustomerDefault() {
  return <MLCard data={data} place={place} inputs={inputs} />;
}
