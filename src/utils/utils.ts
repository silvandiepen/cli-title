import { getCharacter, Lines } from "../characters";
import { TitleConfig, defaultConfig } from '../types';
import { convertTriangleChar } from "../utils/slashes";
import { colorString } from "./color";


export const toLineArray = (input: Lines): number[][] => {
  // Convert strings to arrays of numbers
  const result = input.map(line => {

    const l = line.split('');
    return l.map((c) => convertTriangleChar(c)).map(Number);
  });

  return result;
};

export const convertToText = (input: string, config?: Partial<TitleConfig>): string[] => {

  const cfg = { ...defaultConfig, ...config };
  // Get character data and convert each character to a number grid
  const characterData = input.split('').map((c) => getCharacter(c, cfg.font));

  if (characterData.length === 0) return [];

  // Each character is always exactly 5 lines tall

  // get the lines of the defined font
  const lineCount = characterData[0].length;

  const totalLines = lineCount;

  // Construct each output line
  const lines: string[] = [];

  for (let i = 0; i < totalLines; i++) {
    // Get the i-th row from each character and join them
    const lineParts = characterData.map(char => char[i].join(''));
    lines.push(lineParts.join(cfg.space)); // Separate characters with a space
  }

  return lines; // Return an array of strings, one per line
};


export const convertToTitleLines = (input: string, config: Partial<TitleConfig> = {}): string[] => {
  const cfg = { ...defaultConfig, ...config };

  const lines = convertToText(input, cfg);

  lines.forEach((line, index) => {
    let coloredLine = line
      .replace(/0/g, cfg.emptyChar)
      .replace(/1/g, cfg.fillChar)
      .replace(/2/g, cfg.triangleRightFillChar)
      .replace(/3/g, cfg.triangleRightEmptyChar)
      .replace(/4/g, cfg.triangleLeftEmptyChar)
      .replace(/5/g, cfg.triangleLeftFillChar)
      .replace(/6/g, cfg.triangleUpChar)
      .replace(/7/g, cfg.triangleDownChar)
      .replace(/8/g, cfg.triangleLeftChar)
      .replace(/9/g, cfg.triangleRightChar);
    coloredLine = cfg.color ? colorString(coloredLine, cfg.color) : coloredLine;
    lines[index] = coloredLine;
  });

  return lines;
};

export const logTitle = (input: string, config: Partial<TitleConfig> = {}): void => {
  const cfg = { ...defaultConfig, ...config };
  const lines = convertToTitleLines(input, cfg);
  lines.forEach(line => console.log(line));
};
