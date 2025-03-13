import { ColorNames, type ColorNamesType } from "../types";

export const castToColorName = (str: ColorNamesType | string): ColorNamesType => {
  if(typeof str !=='string') return str as ColorNamesType;
  const colorOptions: Record<string, ColorNamesType> = ColorNames;
  const lowerStr = str.toLowerCase();
  return colorOptions[lowerStr] || 'white';
};

export const colorString = (str: string, color: ColorNamesType | string): string => {
  const colorOptions: Record<ColorNamesType, number> = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    gray: 90,
    grey: 90, // Alias for gray
  };

  return `\x1b[${colorOptions[castToColorName(color)]}m${str}\x1b[0m`;
};
