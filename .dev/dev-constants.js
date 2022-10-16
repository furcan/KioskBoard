/*!
* Constants
* Description: Constants for the development.
* Version: 2.3.0
* Author: Furkan ('https://github.com/furcan')
* Copyright 2022 Constants, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const chalk = require('chalk');
const package = require('../package.json');

// Constants: begin
// - CleanCSS Options: begin
const cleanCSSOptions = {
  level: {
    1: {
      optimizeBackground: false, // controls `background` property optimizations; defaults to `true`
      optimizeBorderRadius: false, // controls `border-radius` property optimizations; defaults to `true`
      optimizeFilter: false, // controls `filter` property optimizations; defaults to `true`
      optimizeFont: false, // controls `font` property optimizations; defaults to `true`
      optimizeFontWeight: false, // controls `font-weight` property optimizations; defaults to `true`
      optimizeOutline: false, // controls `outline` property optimizations; defaults to `true`
      specialComments: false, // remove all comments
      removeQuotes: false, // controls removing quotes when unnecessary; defaults to `true`
      semicolonAfterLastProperty: true, // controls removing trailing semicolons in rule; defaults to `false` - means remove
    },
  },
};
// - CleanCSS Options: end

// - Babel Minify Options: begin
const minifyOptions = {
  builtIns: false, // transform-minify-booleans
};

const minifyOverrides = {
  comments: false, // remove all comments
};
// - Babel Minify Options: end

// - Terminal Error Message: begin
const terminalError = (message, fileOrPath) => {
  const colorRed = '#ff5549';
  const colorBlue = '#26c0d3';
  if (typeof fileOrPath !== 'string') { fileOrPath = '???'; }
  let info = chalk.hex(colorBlue)('\nPlease look at the "' + fileOrPath + '" for more information.\n\n');
  if (typeof message !== 'string') {
    message = 'An error has occurred on: "' + chalk.hex(colorBlue)(fileOrPath) + '"';
    info = '';
  }
  return console.error(chalk.hex(colorRed).bold('Development Error: ') + chalk.hex(colorRed)(message) + info);
};
// - Terminal Error Message: end

// - Exports: begin
module.exports = {
  prefix: 'kioskboard',
  dirInputDev: 'src',
  dirOutputDev: 'build',
  dirOutputDist: 'dist',
  fileScript: 'kioskboard.js',
  fileStyle: 'kioskboard.css',
  fileScriptAIO: 'kioskboard-aio.js',
  version: (JSON.stringify((package || {}).version) || '').replace(/"/gm, ''),
  author: (JSON.stringify((package || {}).author) || '').replace(/"/gm, ''),
  title: 'KioskBoard - Virtual Keyboard',
  url: '(https://github.com/furcan/KioskBoard)',
  license: 'MIT Licence (https://opensource.org/licenses/MIT)',
  year: new Date().getFullYear() || '2022',
  cleanCSSOptions,
  minifyOptions,
  minifyOverrides,
  terminalError,
};
// - Exports: end
// Constants: end
