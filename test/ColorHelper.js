const chai = require('chai');
const ColorHelper = require('../lib/ColorHelper');

chai.should();

describe('ColorHelper', () => {
  describe('hexToRGB()', () => {
    it('should map color hexcode to rgb', () => {
      ColorHelper.hexToRGB('#000000').should.to.deep.equal({ r: 0, g: 0, b: 0 });
      ColorHelper.hexToRGB('#ffffff').should.to.deep.equal({ r: 255, g: 255, b: 255 });
      ColorHelper.hexToRGB('#ff0000').should.to.deep.equal({ r: 255, g: 0, b: 0 });
      ColorHelper.hexToRGB('#00ff00').should.to.deep.equal({ r: 0, g: 255, b: 0 });
      ColorHelper.hexToRGB('#0000ff').should.to.deep.equal({ r: 0, g: 0, b: 255 });
      ColorHelper.hexToRGB('#333333').should.to.deep.equal({ r: 51, g: 51, b: 51 });
      ColorHelper.hexToRGB('#123456').should.to.deep.equal({ r: 18, g: 52, b: 86 });
      ColorHelper.hexToRGB('#abcdef').should.to.deep.equal({ r: 171, g: 205, b: 239 });

      // error case
      ColorHelper.hexToRGB('#12hi56').should.to.deep.equal({ r: 0, g: 0, b: 0 });
      ColorHelper.hexToRGB('QWERTY').should.to.deep.equal({ r: 0, g: 0, b: 0 });
    });
  });

  describe('findClosestColor()', () => {
    it('should map color to closest color', () => {
      ColorHelper.findClosestColor('#000000').should.to.deep.equal({ color: '#000000', name: 'black' });
      ColorHelper.findClosestColor('#ffffff').should.to.deep.equal({ color: '#ffffff', name: 'white' });
      ColorHelper.findClosestColor('#ff0000').should.to.deep.equal({ color: '#fe0002', name: 'fire engine red' });
      ColorHelper.findClosestColor('#00ff00').should.to.deep.equal({ color: '#01ff07', name: 'bright green' });
      ColorHelper.findClosestColor('#0000ff').should.to.deep.equal({ color: '#0804f9', name: 'primary blue' });
      ColorHelper.findClosestColor('#333333').should.to.deep.equal({ color: '#363737', name: 'dark grey' });
      ColorHelper.findClosestColor('#123456').should.to.deep.equal({ color: '#1f3b4d', name: 'dark blue grey' });
      ColorHelper.findClosestColor('#abcdef').should.to.deep.equal({ color: '#b1d1fc', name: 'powder blue' });
      ColorHelper.findClosestColor('#12hi56').should.to.deep.equal({ color: '#000000', name: 'black' });
      ColorHelper.findClosestColor('#QWERTY').should.to.deep.equal({ color: '#000000', name: 'black' });
    });
  });
});
