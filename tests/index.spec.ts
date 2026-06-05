function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)/g, (_, char: string) => char.toUpperCase());
}

// Tus inputs de prueba aquí
const inputs: string[] = [
  "hello world",
  "my-variable-name",
  "the_quick_brown_fox",
  "MY VARIABLE NAME",
];

inputs.forEach((str) => {
  console.log(`"${str}" → "${toCamelCase(str)}"`);
});