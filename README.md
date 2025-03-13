# CLI Title Generator

A powerful Node.js package for generating stylish ASCII art titles in your command-line applications. Convert text into eye-catching title displays with customizable characters, colors, and spacing.

## Installation

```bash
npm install cli-title
```

## Usage

The package exports two main functions:

### `logTitle(text: string, config?: TitleConfig)`

Directly outputs the ASCII art title to the console:

```typescript
import { logTitle } from 'cli-title';

// Basic usage
logTitle('Hello');

// With custom configuration
logTitle('Hello', {
  color: 'red',
  fillChar: '█',
  emptyChar: ' ',
  space: '  '
});
```

### `convertToTitleLines(text: string, config?: TitleConfig): string[]`

Converts text to an array of strings representing the ASCII art, allowing for custom rendering:

```typescript
import { convertToTitleLines } from 'cli-title';

const titleLines = convertToTitleLines('Hello');
titleLines.forEach(line => {
  // Custom rendering logic
  console.log(`>> ${line}`);
});
```

## Configuration Options

```typescript
interface TitleConfig {
  emptyChar: string;         // Character for empty spaces
  fillChar: string;          // Character for filled spaces
  triangleLeftFillChar: string;   // Left triangle fill character
  triangleRightFillChar: string;  // Right triangle fill character
  triangleLeftEmptyChar: string;  // Left triangle empty character
  triangleRightEmptyChar: string; // Right triangle empty character
  triangleUpChar: string;         // Upward triangle character
  triangleDownChar: string;       // Downward triangle character
  triangleLeftChar: string;       // Left-pointing triangle character
  triangleRightChar: string;      // Right-pointing triangle character
  color?: string;           // Text color (supports 'red', 'green', 'blue', etc.)
  space?: string;           // Space between characters
}
```

### Default Configuration

```typescript
const defaultConfig = {
  emptyChar: ' ',
  fillChar: '■',
  triangleLeftFillChar: '◣',
  triangleRightFillChar: '◢',
  triangleLeftEmptyChar: '◤',
  triangleRightEmptyChar: '◥',
  triangleUpChar: '▲',
  triangleDownChar: '▼',
  triangleLeftChar: '◄',
  triangleRightChar: '►',
  color: undefined,
  space: ' '
};
```

## Examples

### Basic Title

```typescript
logTitle('ABC');
```

Output:
```
 ◢■■ ■■■◣ ◢■■◣
◢◤ ■ ■  ■ ■  ■
■■■■ ■■■◣ ■
■  ■ ■  ■ ■  ■
■  ■ ■■■◤ ◥■■◤
```

### Colored Title

```typescript
logTitle('HELLO', { color: 'blue' });
```

### Custom Characters

```typescript
logTitle('HI', {
  emptyChar: '.',
  fillChar: '#',
  triangleLeftFillChar: '<',
  triangleRightFillChar: '>',
  triangleLeftEmptyChar: '{',
  triangleRightEmptyChar: '}',
  space: '  '
});
```

## Font Examples

### Default Font

```typescript
logTitle('ABCDEFGHIJKLM');
logTitle('abcdefghijklm');
logTitle('0123456789');
```

Output:
```
 ◢■■ ■■■◣ ◢■■◣ ■■■◣ ■■■■ ■■■■ ◢■■■ ■  ■ ■■■   ■■ ■  ■ ■    ■■◣■◣
◢◤ ■ ■  ■ ■  ■ ■  ■ ■    ■    ■    ■  ■  ■     ■ ■ ◢◤ ■    ■ ■ ■
■■■■ ■■■◣ ■    ■  ■ ■■■  ■■■  ■ ■■ ■■■■  ■     ■ ■■■◣ ■    ■ ■ ■
■  ■ ■  ■ ■  ■ ■  ■ ■    ■    ■  ■ ■  ■  ■  ■  ■ ■  ■ ■    ■ ■ ■
■  ■ ■■■◤ ◥■■◤ ■■■◤ ■■■■ ■    ◥■■◤ ■  ■ ■■■ ◥■■◤ ■  ■ ■■■■ ■ ■ ■

     ■            ■      ◢■■      ■    ■   ■     ■
■■■◣ ■■■◣ ◢■■■ ◢■■■ ◢■■◣ ■   ◢■■◣ ■■■◣       ■ ■ ■ ■■◣■◣
◢◤ ■ ■  ■ ■    ■  ■ ■ ◢◤ ■■  ◥■■■ ■  ■ ■   ■ ■◢◤ ■ ■ ■ ■
◥■■■ ■■■◤ ◥■■■ ◥■■◤ ◥■■■ ■   ■■■◤ ■  ■ ■ ■■◤ ■◥◣ ■ ■ ■ ■
◢■■■◣ ◢■  ◢■■■◣ ◢■■■◣ ■  ■  ■■■■■ ◢■■■■ ■■■■■ ◢■■■◣ ◢■■■◣
■   ■  ■  ■   ■ ■  ◢◤ ■  ■  ■     ■        ◢◤ ■   ■ ■   ■
■   ■  ■    ◢◤    ■◤  ■■■■■ ■■■■◣ ■■■■◣  ◢◤   ◢■■■◤ ◥■■■■
■   ■  ■  ◢◤    ■   ■    ■      ■ ■   ■  ■    ■   ■ ■   ■
◥■■■◤ ■■■ ■■■■■ ◥■■■◤    ■  ◥■■■◤ ◥■■■◤  ■    ◥■■■◤ ◥■■■◤
```

## Fonts

Default:
```
◢■■◣ ■    ■■■      ■■■■■ ■■■ ■■■■■ ■    ■■■■
■  ■ ■     ■         ■    ■    ■   ■    ■
■    ■     ■         ■    ■    ■   ■    ■■■
■  ■ ■     ■         ■    ■    ■   ■    ■
◥■■◤ ■■■■ ■■■        ■   ■■■   ■   ■■■■ ■■■■
```

Pixel
```
 ■■  ■    ■■■      ■■■■■ ■■■ ■■■■■ ■    ■■■■
■  ■ ■     ■         ■    ■    ■   ■    ■
■    ■     ■         ■    ■    ■   ■    ■■■
■  ■ ■     ■         ■    ■    ■   ■    ■
 ■■  ■■■■ ■■■        ■   ■■■   ■   ■■■■ ■■■■
```
Block
```
 ■■■■  ■■     ■■        ■■■■■■ ■■ ■■■■■■ ■■     ■■■■■■
■■■■■■ ■■     ■■        ■■■■■■ ■■ ■■■■■■ ■■     ■■■■■■
■■  ■■ ■■     ■■          ■■   ■■   ■■   ■■     ■■
■■     ■■     ■■          ■■   ■■   ■■   ■■     ■■■■■■
■■     ■■     ■■          ■■   ■■   ■■   ■■     ■■■■■■
■■  ■■ ■■     ■■          ■■   ■■   ■■   ■■     ■■
■■■■■■ ■■■■■■ ■■          ■■   ■■   ■■   ■■■■■■ ■■■■■■
 ■■■■  ■■■■■■ ■■          ■■   ■■   ■■   ■■■■■■ ■■■■■■
```
Massive
```
     ◢■■■■■■■◣      ■■                 ■■■■■■■■■■■■
   ◢■■■■■■■■■■◣     ■■                 ■■■■■■■■■■■■
  ◢■■        ■■◣    ■■                      ■■
 ◢■■          ■■    ■■                      ■■
 ■■              ■  ■■                      ■■
 ■■                 ■■                      ■■
 ■■                 ■■                      ■■
 ■■              ■  ■■                      ■■
 ◥■■          ■■    ■■                      ■■
  ◥■■        ■■◤    ■■                      ■■
   ◥■■■■■■■■■■◤     ■■■■■■■■■■■■■■■■   ■■■■■■■■■■■■
     ◥■■■■■■■◤      ■■■■■■■■■■■■■■■■   ■■■■■■■■■■■■
```
Hybrid
```
 ◢■■■◣ ■■     ■■■■      ■■■■■■ ■■■■ ■■■■■■ ■■     ■■■■■■
■■   ■ ■■      ■■         ■■    ■■    ■■   ■■     ■■
■■     ■■      ■■         ■■    ■■    ■■   ■■     ■■■■■
■■     ■■      ■■         ■■    ■■    ■■   ■■     ■■
■■   ■ ■■      ■■         ■■    ■■    ■■   ■■     ■■
 ◥■■■◤ ■■■■■■ ■■■■        ■■   ■■■■   ■■   ■■■■■■ ■■■■■■
```
Digital
```
 ◀■■▶                        ◀■■▶  ◀■■▶          ◀■■▶  ◀■■▶          ◀■■▶
▲    ▲ ▲           ▲             ▲           ▲      ▲      ▲      ▲
■      ■           ■             ■           ■      ■      ■      ■
■      ■           ■             ■           ■      ■      ■      ■
▼      ▼           ▼             ▼           ▼      ▼      ▼      ▼
                                                                   ◀■■▶
▲      ▲           ▲             ▲           ▲      ▲      ▲      ▲
■      ■           ■             ■           ■      ■      ■      ■
■      ■           ■             ■           ■      ■      ■      ■
▼    ▲ ▼           ▼             ▼           ▼      ▼      ▼      ▼
 ◀■■▶   ◀■■▶                                                ◀■■▶   ◀■■▶
```



## Use Cases

- Create eye-catching CLI application headers
- Generate ASCII art banners for your terminal applications
- Design custom welcome screens
- Create decorative text separators
- Build text-based user interfaces

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
