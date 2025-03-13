
export type FontType = 'default' | 'pixel' | 'block' |  'hybrid' | 'massive' | 'digital';

export const ColorNames = {
  BLACK: 'black',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow',
  BLUE: 'blue',
  MAGENTA: 'magenta',
  CYAN: 'cyan',
  WHITE: 'white',
  GRAY: 'gray',
  GREY: 'grey',
} as const;

export type ColorNamesType = (typeof ColorNames)[keyof typeof ColorNames];

export interface TitleConfig {
  emptyChar: string;
  fillChar: string;
  triangleLeftFillChar: string;
  triangleRightFillChar: string;
  triangleLeftEmptyChar: string;
  triangleRightEmptyChar: string;
  triangleUpChar: string;
  triangleDownChar: string;
  triangleLeftChar: string;
  triangleRightChar: string;
  font: FontType;
  color?: ColorNamesType | string;
  space: string;
}

export const defaultConfig: TitleConfig = {
  emptyChar: ' ',
  fillChar: '■',
  triangleLeftFillChar: '◤',
  triangleRightFillChar: '◢',
  triangleLeftEmptyChar: '◣',
  triangleRightEmptyChar: '◥',
  triangleUpChar: '▲',
  triangleDownChar: '▼',
  triangleLeftChar: '◀',
  triangleRightChar: '▶',
  font: 'default',
  space: '0'
};

