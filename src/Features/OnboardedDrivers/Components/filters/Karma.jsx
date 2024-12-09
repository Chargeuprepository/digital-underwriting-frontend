import Filter from '../../../../UI/Filter';

export default function Karma() {
  return (
    <Filter
      paramName="karma"
      options={[
        { value: 'high', label: 'High', backColor: '#15ff0087' },
        { value: 'medium', label: 'Med', backColor: '#ffee0083' },
        { value: 'low', label: 'Low', backColor: '#ff000084' },
      ]}
    />
  );
}
