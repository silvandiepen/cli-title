import { TitleConfig } from "../../types";
import { ElevenLines } from "../font";

export const digitalFontConfig: Partial<TitleConfig> = {

}
// For numbers, we use the classic 7-segment display pattern
export const sevenSegmentNumbers: { [key: string]: ElevenLines } = {
  // 0: All segments except middle
  '0': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  // 1: Right segments only
  '1': [
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  // 2: Top, top-right, middle, bottom-left, bottom
  '2': [
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
  ],

  // 3: Top, top-right, middle, bottom-right, bottom
  '3': [
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
  ],

  // 4: Top-left, top-right, middle, bottom-right
  '4': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  // 5: Top, top-left, middle, bottom-right, bottom
  '5': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
  ],

  // 6: Top, top-left, middle, bottom-left, bottom-right, bottom
  '6': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  // 7: Top, top-right, bottom-right
  '7': [
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  // 8: All segments
  '8': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  // 9: Top, top-left, top-right, middle, bottom-right, bottom
  '9': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
  ]
};

// For letters, we use an expanded 12-segment display pattern
export const twelveSegmentLetters: { [key: string]: ElevenLines } = {
  // The 12 segments allow for more accurate letter representations
  'A': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
  ],

  'B': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'C': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    '      ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
  ],

  'D': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'E': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
  ],

  'F': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    '      ',
  ],

  'G': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'H': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
  ],

  'I': [
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  'J': [
    '      ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'K': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
  ],

  'L': [
    '      ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    '      ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
  ],

  'M': [
    ' ◀■■▶ ◀■■▶ ',
    '▲    ▲    ▲',
    '■    ■    ■',
    '■    ■    ■',
    '▼    ▼    ▼',
    '           ',
    '▲    ▲    ▲',
    '■    ■    ■',
    '■    ■    ■',
    '▼    ▼    ▼',
    '           ',
  ],

  'N': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
  ],

  'O': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'P': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    '      ',
  ],

  'Q': [
    ' ◀■■▶ ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'R': [
    ' ◀■■▶      ',
    '▲    ▲     ',
    '■    ■     ',
    '■    ■     ',
    '▼    ▼     ',
    ' ◀■■▶ ◀■■▶ ',
    '▲         ▲',
    '■         ■',
    '■         ■',
    '▼         ▼',
    '           ',
  ],

  'S': [
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
  ],

  'T': [
    ' ◀■■▶  ◀■■▶ ',
    '     ▲     ',
    '     ■     ',
    '     ■     ',
    '     ▼     ',
    '           ',
    '     ▲     ',
    '     ■     ',
    '     ■     ',
    '     ▼     ',
    '           ',
  ],

  'U': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'V': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
  ],

  'W': [
    '           ',
    '▲    ▲    ▲',
    '■    ■    ■',
    '■    ■    ■',
    '▼    ▼    ▼',
    '           ',
    '▲    ▲    ▲',
    '■    ■    ■',
    '■    ■    ■',
    '▼    ▼    ▼',
    ' ◀■■▶ ◀■■▶ ',
  ],

  'X': [
    '           ',
    '▲    ▲     ',
    '■    ■     ',
    '■    ■     ',
    '▼    ▼     ',
    ' ◀■■▶ ◀■■▶ ',
    '          ▲',
    '     ■    ■',
    '     ■    ■',
    '     ▼    ▼',
    '           ',
  ],

  'Y': [
    '      ',
    '▲    ▲',
    '■    ■',
    '■    ■',
    '▼    ▼',
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  'Z': [
    ' ◀■■▶ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    ' ◀■■▶ ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    ' ◀■■▶ ',
  ],

  // Common punctuation and symbols
  ' ': [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
  ],

  '-': [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    ' ◀■■▶ ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
  ],

  '+': [
    '      ',
    '      ',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    ' ◀■■■▶',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '      ',
    '      ',
  ],

  '.': [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '  ■■  ',
    '  ■■  ',
  ],

  ',': [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '   ■  ',
    '   ■  ',
    '  ■   ',
  ],

  '?': [
    ' ◀■■▶ ',
    '▲    ▲',
    '     ■',
    '     ■',
    '    ▼ ',
    '   ■  ',
    '   ■  ',
    '      ',
    '      ',
    '   ■  ',
    '   ■  ',
  ],

  '!': [
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '   ■  ',
    '      ',
    '      ',
    '   ■  ',
    '   ■  ',
  ],

  '/': [
    '      ',
    '     ▲',
    '    ■ ',
    '   ■  ',
    '  ■   ',
    ' ■    ',
    '▲     ',
    '■     ',
    '■     ',
    '▼     ',
    '      ',
  ],

  '\\': [
    '      ',
    '▲     ',
    ' ■    ',
    '  ■   ',
    '   ■  ',
    '    ■ ',
    '     ▲',
    '     ■',
    '     ■',
    '     ▼',
    '      ',
  ],

  '=': [
    '      ',
    '      ',
    '      ',
    ' ◀■■▶ ',
    '      ',
    '      ',
    '      ',
    ' ◀■■▶ ',
    '      ',
    '      ',
    '      ',
  ],
};

// Combined digital font that includes both number and letter styles
export const digitalFont = {
  ...sevenSegmentNumbers,
  ...twelveSegmentLetters
};
