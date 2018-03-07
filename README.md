Color To Name
=======

[![Build Status](https://travis-ci.org/stanleyfok/color-to-name.png?branch=master)](https://travis-ci.org/stanleyfok/color-to-name)
[![NPM version](https://img.shields.io/npm/v/color-to-name.svg)](https://www.npmjs.com/package/color-to-name)

A command line tool which helps to map a hex color code to a color name, based on [Zeplin's color palette dataset](https://github.com/zeplin/zeplin-palette)

<img src="https://raw.githubusercontent.com/stanleyfok/color-to-name/master/imgs/highlight.png"/>

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
color-to-name -c '#3B5897'
```

<img src="https://raw.githubusercontent.com/stanleyfok/color-to-name/master/imgs/usage.png"/>

Please note that the color preview may not be as accurate as the real color. It depends if your terminal support 24-bit true color. Please refer to: https://github.com/chalk/chalk#256-and-truecolor-color-support

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

## To do

* support more parameters like darken, lighten, hsl, etc
