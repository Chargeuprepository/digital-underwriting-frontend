export default function handleNumberLength(e, maxLength) {
  const lengthValue = e.target.value.slice(0, maxLength);
  console.log(lengthValue);
  return lengthValue;
}
