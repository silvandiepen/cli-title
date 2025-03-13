export type FiveLines = [string, string, string, string, string]
export type EightLines = [string, string, string, string, string, string, string, string]
export type SixLines = [string, string, string, string, string, string]
export type TwelveLines = [string, string, string, string, string, string,string, string, string, string, string, string];
export type ElevenLines = [string, string, string, string, string, string, string, string, string, string, string];
export type Lines = FiveLines | EightLines | SixLines | TwelveLines | ElevenLines

import { defaultFont, defaultFontConfig } from './fonts/default';
import { pixelfont } from './fonts/pixels';
import { FontType, FontDefinition } from '../types';
import { blockFont } from './fonts/block';
import { massiveFont } from './fonts/massive';
import { hybridFont } from './fonts/hybrid';
import { digitalFont, digitalFontConfig } from './fonts/digital';

export const fonts: { [key in FontType]: FontDefinition } = {
  default: { characters: defaultFont, config: defaultFontConfig },
  pixel: { characters: pixelfont },
  block: { characters: blockFont },
  massive: { characters: massiveFont },
  hybrid: { characters: hybridFont },
  digital: { characters: digitalFont, config: digitalFontConfig }
};

