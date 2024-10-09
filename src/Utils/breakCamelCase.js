export default function breakCamelCase(text) {
  return text.replace(/([A-Z])/g, ' $1');
}
