#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const fixedWidthString = require('fixed-width-string');

const ColorHelper = require('./lib/ColorHelper');

function printColor(label, color) {
  const { r, g, b } = ColorHelper.hexToRGB(color);

  console.log(`${fixedWidthString(label, 20)} -> ` +
    `HEX: ${color}, ` +
    `RGB: { ${fixedWidthString(r, 3, { align: 'right' })}, ${fixedWidthString(g, 3, { align: 'right' })}, ${fixedWidthString(b, 3, { align: 'right' })} }, ` +
    `Preview: ${chalk.hex(color).inverse('   ')}`);
}

function main() {
  program
    .version('1.0.0')
    .option('-a, --all', 'print all Zeplin palette colors')
    .option('-c, --color [color]', 'find the closest color of the input color')
    .parse(process.argv);

  if (program.all) {
    const colors = ColorHelper.getAllColors();

    Object.keys(colors).forEach((color) => {
      printColor(colors[color], color);
    });
  } else if (program.color) {
    const color = program.color.toLowerCase();

    if (!ColorHelper.isValidHexCode(color)) {
      console.log('Invalid color code');

      process.exit();
    }

    const { name, color: closestColor } = ColorHelper.findClosestColor(color);

    // print input color
    printColor('Input Color', color);
    printColor('Closest Color', closestColor);

    console.log(`${fixedWidthString('Color Name', 20)} -> ${name}`);
  }
}

main();
