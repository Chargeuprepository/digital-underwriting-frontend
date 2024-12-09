import Filter from '../../../../UI/Filter';

export default function Risk() {
  return (
    <Filter
      paramName="risk"
      options={[
        { value: 'low', label: 'Low', backColor: '#15ff0087' },
        { value: 'medium', label: 'Med', backColor: '#ffee0083' },
        { value: 'high', label: 'High', backColor: '#ff000084' },
      ]}
    />
  );
}
