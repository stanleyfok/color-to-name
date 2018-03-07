const colors = require('../colors.json');

function isValidHexCode(color) {
  return color.match(/^#[0-9a-f]{6}$/i);
}

function hexToRGB(color) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (isValidHexCode(color)) {
    const c = color.replace('#', '');

    r = parseInt(c.substr(0, 2), 16);
    g = parseInt(c.substr(2, 2), 16);
    b = parseInt(c.substr(4, 2), 16);

    if (Number.isNaN(r)) r = 0;
    if (Number.isNaN(g)) g = 0;
    if (Number.isNaN(b)) b = 0;
  }

  return { r, g, b };
}

function findClosestColor(color) {
  let closestColor = null;

  if (isValidHexCode(color)) {
    const { r, g, b } = hexToRGB(color);

    // find the closest color
    const result = Object.keys(colors).reduce((acc, c) => {
      const { r: cr, g: cg, b: cb } = hexToRGB(c);

      const d = Math.sqrt(((r - cr) ** 2) + ((g - cg) ** 2) + ((b - cb) ** 2));

      if (d < acc.min) {
        acc.min = d;
        acc.color = c;
      }

      return acc;
    }, {
      min: Number.MAX_SAFE_INTEGER,
      color: null,
    });

    closestColor = result.color;
  } else {
    closestColor = '#000000';
  }

  return {
    color: closestColor,
    name: colors[closestColor],
  };
}

module.exports = {
  isValidHexCode,
  hexToRGB,
  findClosestColor,
};
