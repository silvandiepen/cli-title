import { FontType } from "../types";
import { toLineArray } from "../utils/utils"
export { fonts, Lines } from "./font"

import { fonts } from "./font";

// Define a type for the font object to properly index characters


export const getCharacter = (character: string, fontType: FontType = 'default'): number[][] => {
  const lowerChar = character.toLowerCase();
  const upperChar = character.toUpperCase();
  const selectedFont = fonts[fontType];

  // Try to find an exact match first
  if (selectedFont.characters[character]) return toLineArray(selectedFont.characters[character]); // Case-sensitive match

  // If exact match is not found, fall back to lowercase or uppercase version
  if (selectedFont.characters[lowerChar]) return toLineArray(selectedFont.characters[lowerChar]);
  if (selectedFont.characters[upperChar]) return toLineArray(selectedFont.characters[upperChar]);

  // Return an empty character if no match is found
  return toLineArray([
    '0000',
    '0000',
    '0000',
    '0000',
    '0000'
  ]);
};
