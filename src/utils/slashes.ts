export const convertTriangleChar = (char: string): number => {
  const mappings: { [key: string]: number } = {
    '◢': 2,  // ◢ Top-left triangle
    '◤': 5,  // ◤ Bottom-right triangle
    '◥': 3, // ◥ Top-right triangle
    '◣': 4,  // ◣ Bottom-left triangle,
    '▲': 6,  //
    '▼': 7,  //
    '◀': 8, //
    '▶': 9,  //
    'X': 1,  // Filled block
    '■': 1,  // Filled block
    '0': 0,   // Empty space
    ' ': 0   // Empty space
  };

  return mappings[char] ?? 0; // Default to empty space if unknown
};
