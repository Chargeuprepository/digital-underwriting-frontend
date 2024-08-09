import Filter from '../../../../UI/Layout/Filter';

export default function Credit() {
  return (
    <Filter
      paramName="Credit"
      options={[
        { value: 'high-credit', label: 'High', color: '#5ef522' },
        { value: 'medium-credit', label: 'Medium', color: '#f9f519' },
        { value: 'low-credit', label: 'Low', color: '#fc3c3c' },
      ]}
    />
  );
}
