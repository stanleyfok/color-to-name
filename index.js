#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const ColorHelper = require('./lib/ColorHelper');

program
  .version('1.0.0')
  .option('-c, --color [color]', 'The hex color code')
  .parse(process.argv);

const color = program.color.toLowerCase();

if (!ColorHelper.isValidHexCode(color)) {
  console.log('Invalid color code');

  process.exit();
}

const { r: inR, g: inG, b: inB } = ColorHelper.hexToRGB(color);
const { name, color: closestColor } = ColorHelper.findClosestColor(color);
const { r: outR, g: outG, b: outB } = ColorHelper.hexToRGB(closestColor);

// print input color
console.log(`Input Color\t-> HEX: ${color}, RGB: { ${inR}, ${inG}, ${inB} }, Preview: ${chalk.hex(color).inverse('   ')}`);

console.log(`Closest Color\t-> HEX: ${closestColor}, RGB: { ${outR}, ${outG}, ${outB} }, Preview: ${chalk.hex(closestColor).inverse('   ')}`);
console.log(`Color Name\t-> ${name}`);
