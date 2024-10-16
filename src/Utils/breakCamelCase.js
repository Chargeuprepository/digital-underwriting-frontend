export default function breakCamelCase(text) {
  return (
    text
      // Match sequences of uppercase letters (like "CAPS") followed by a lowercase or uppercase letter or word boundary
      .replace(/([A-Z]+)(?=[A-Z][a-z]|\b)/g, '$1 ')
      // Insert a space before any uppercase letter that follows a lowercase letter
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .trim()
  );
}
