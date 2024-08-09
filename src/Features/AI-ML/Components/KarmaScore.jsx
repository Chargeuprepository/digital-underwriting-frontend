import MLCard from './MLCard';

const data = {
  name: 'Karma',
  modelName: 'Predicting Karma Score',
  description:
    "A machine learning model predicts a driver's Karma Score using factors like earnings, NPTS TAT days, credit score, and service satisfaction, providing a comprehensive view of reliability and performance. This information enables the company to allocate resources effectively, offer personalized support, and enhance service quality. The model is a valuable tool for maintaining high standards and fostering trust with drivers and customers.",
};
const index = 2;

export default function KarmaScore() {
  return <MLCard data={data} index={index} />;
}
