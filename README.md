Color To Name
=======

[![Build Status](https://travis-ci.org/stanleyfok/color-to-name.png?branch=master)](https://travis-ci.org/stanleyfok/color-to-name)
[![NPM version](https://img.shields.io/npm/v/color-to-name.svg)](https://www.npmjs.com/package/color-to-name)

A command line tool which helps to map a hex color code to a color name, based on [Zeplin's color palette dataset](https://github.com/zeplin/zeplin-palette)

<img src="https://raw.githubusercontent.com/stanleyfok/color-to-name/master/imgs/highlight.png"/>

Please note that the color preview may not be as accurate as the real color. It depends if your terminal supports 24-bit true color. Please refer to: https://github.com/chalk/chalk#256-and-truecolor-color-support

For mac OS, [iTerm 3.0+](https://www.iterm2.com/version3.html) supports true color by default

## Installation

As command line:
```
npm install -g color-to-name
```

As project dependency:
```
npm install color-to-name
```

## Usage

### Command line

```
$ color-to-name --help

  Usage: color-to-name [options]


  Options:

    -V, --version        output the version number
    -a, --all            Print all Zeplin palette colors
    -c, --color [color]  The hex color code
    -h, --help           output usage information
$ 
$ color-to-name -c '#EE4055'
Input Color          -> HEX: #ee4055, RGB: { 238,  64,  85 }, Preview:
Closest Color        -> HEX: #fd4659, RGB: { 253,  70,  89 }, Preview:
Color Name           -> watermelon
$
$ color-to-name -c '#3BAA33'
Input Color          -> HEX: #3baa33, RGB: {  59, 170,  51 }, Preview:
Closest Color        -> HEX: #39ad48, RGB: {  57, 173,  72 }, Preview:
Color Name           -> medium green
$
$ color-to-name -c '#FDB82A'
Input Color          -> HEX: #fdb82a, RGB: { 253, 184,  42 }, Preview:
Closest Color        -> HEX: #ffa62b, RGB: { 255, 166,  43 }, Preview:
Color Name           -> mango
```

### API

You can import the library as your project dependency

```js
const ColorHelper = require('color-to-name');
```

#### isValidHexCode(color)

Check if a color hex code is valid

```js
ColorHelper.isValidHexCode('#000000');
// return true

ColorHelper.isValidHexCode('#qwerty');
// return false
```

#### hexToRGB(color)

Convert a color hex code to RGB values

```js
ColorHelper.hexToRGB('#123456');
// return { r: 18, g: 52, b: 86 }
```

#### getAllColors()

Return the full Zeplin color palette
```js
ColorHelper.getAllColors();
// return {
//   "#000000": "black",
//   "#000133": "very dark blue",
//   .
//   .
//   .
// }
```

#### findClosestColor(color)

find the closest color to the input color hex code based on Zeplin's color palette dataset

```js
ColorHelper.findClosestColor('#123456');
// return { color: '#1f3b4d', name: 'dark blue grey' }
```

## To do

* support more parameters like darken, lighten, hsl, etc
