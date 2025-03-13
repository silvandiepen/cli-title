import { convertToText, convertToTitleLines, logTitle, toLineArray } from "../utils";

describe('toLineArray', () => {
  it('should convert to an array with proper lines for dots', () => {
    const result = toLineArray(['//0X', '0X0X', 'XXXX', 'X00X', 'X00X'])
    expect(result).toStrictEqual([
      [0, 0, 0, 1],
      [0, 1, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1]
    ])
  });
});

describe('convertToText', () => {
  it('should convert to text', () => {
    const result = convertToText('ABC');
    const expected = [
      "02110111402114",
      "25010100101001",
      "11110111401000",
      "10010100101001",
      "10010111503115",
    ];

    expect(result).toHaveLength(5)
    expect(result).toStrictEqual(expected)
  });
});

describe('convertToTitleLines', () => {
  it('should convert text to title lines with default config', () => {
    const result = convertToTitleLines('A');
    expect(result).toStrictEqual([
      " ▟██",
      "▟▛ █",
      "████",
      "█  █",
      "█  █",
    ]);
  });

  it('should convert text to title lines with custom config', () => {
    const config = {
      emptyChar: '.',
      fillChar: '*',
      triangleLeftFillChar: '<',
      triangleRightFillChar: '>',
      triangleLeftEmptyChar: '{',
      triangleRightEmptyChar: '}'
    };
    const result = convertToTitleLines('A', config);
    expect(result).toStrictEqual([
      '.>**',
      '><.*',
      '****',
      '*..*',
      '*..*'
    ]);
  });

  it('should convert text to title lines with color and space config', () => {
    const config = {
      emptyChar: '.',
      fillChar: '*',
      triangleLeftFillChar: '<',
      triangleRightFillChar: '>',
      triangleLeftEmptyChar: '{',
      triangleRightEmptyChar: '}',
      color: 'red',
      space: '--'
    };
    const result = convertToTitleLines('AB', config);
    // We can't test the exact color output as it depends on kleur,
    // but we can test the structure and spacing
    expect(result.map(line => line.replace(/\u001b\[.*?m/g, ''))).toStrictEqual([
      ".>**--***{",
      "><.*--*..*",
      "****--***{",
      "*..*--*..*",
      "*..*--***<",
    ]);
  });

  it('should handle empty input', () => {
    const result = convertToTitleLines('');
    expect(result).toStrictEqual([]);
  });
});

describe('logTitle', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log title lines to console', () => {
    logTitle('A');

    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, ' ▟██');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "▟▛ █");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "████");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "█  █");
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "█  █");
  });

  it('should log title lines with custom config', () => {
    const config = {
      emptyChar: '.',
      fillChar: '*',
      triangleLeftFillChar: '<',
      triangleRightFillChar: '>',
      triangleLeftEmptyChar: '{',
      triangleRightEmptyChar: '}'
    };
    logTitle('A', config);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '.>**');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '><.*');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '****');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, '*..*');
    expect(consoleSpy).toHaveBeenNthCalledWith(5, '*..*');
  });

  it('should handle empty input', () => {
    logTitle('');
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
