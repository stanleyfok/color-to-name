Color To Name
=======

This is a command line tool which helps to map a hex color code to a color name, based on [Zeplin's color palette dataset](https://github.com/zeplin/zeplin-palette)

## Installation
```
# as cmdline
npm install -g color-to-name

# as project dependency
npm install color-to-name
```

## Usage

### Command line

```
color-to-name -c '#3B5897'
```

<img src="https://raw.githubusercontent.com/stanleyfok/color-to-name/master/imgs/usage.png"/>

### API

You can import the library as your project dependency

```
const ColorHelper = require('color-to-name');
```

#### isValidHexCode(color)

Check if a color hex code is valid

```
ColorHelper.isValidHexCode('#000000'); // return true
ColorHelper.isValidHexCode('#qwerty'); // return false
```

#### hexToRGB(color)

Convert a color hex code to RGB values

```
ColorHelper.hexToRGB('#123456'); // return { r: 18, g: 52, b: 86 }
```

#### findClosestColor(color)

find the closest color to the input color hex code based on Zeplin's color palette dataset

```
ColorHelper.findClosestColor('#123456'); // return { color: '#1f3b4d', name: 'dark blue grey' }
```
