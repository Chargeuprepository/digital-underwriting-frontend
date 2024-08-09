import Filter from '../../../../UI/Layout/Filter';

export default function Risk() {
  return (
    <Filter
      paramName="Risk"
      options={[
        { value: 'low-risk', label: 'Low', color: '#fc3c3c' },
        { value: 'medium-risk', label: 'Medium', color: '#f9f519' },
        { value: 'high-risk', label: 'High', color: '#5ef522' },
      ]}
    />
  );
}
