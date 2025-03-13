export type FiveLines = [string, string, string, string, string]
export type EightLines = [string, string, string, string, string, string, string, string]
export type SixLines = [string, string, string, string, string, string]
export type TwelveLines = [string, string, string, string, string, string,string, string, string, string, string, string];
export type ElevenLines = [string, string, string, string, string, string, string, string, string, string, string];
export type Lines = FiveLines | EightLines | SixLines | TwelveLines | ElevenLines

import { defaultFont } from './fonts/default';
import { pixelfont } from './fonts/pixels';

import { FontType } from '../types';
import { blockFont } from './fonts/block';
import { massiveFont } from './fonts/massive';
import { hybridFont } from './fonts/hybrid';
import { digitalFont } from './fonts/digital';

export const fonts: { [key in FontType]: { [key: string]: Lines } } = {
  default: defaultFont,
  pixel: pixelfont,
  block: blockFont,
  massive: massiveFont,
  hybrid: hybridFont,
  digital: digitalFont
};

