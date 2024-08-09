import MLCard from './MLCard';

const data = {
  name: 'DefaultEMI',
  modelName:
    ' Predictive Analytics Model for EMI Defaults and Battery Discontinuation',
  description:
    'A machine learning model predicts whether drivers will default on EMI payments or discontinue using provided batteries by analyzing various factors to identify high-risk individuals. This allows for proactive measures to mitigate potential losses, safeguarding financial stability and enhancing customer service by addressing issues early. The predictive tool is a powerful asset for ensuring sustainable growth and building investor confidence.',
};
const index = 3;

export default function CustomerDefault() {
  return <MLCard data={data} index={index} />;
}
