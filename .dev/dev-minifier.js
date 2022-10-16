/*!
* Minifier
*
* Description: Minify the KioskBoard scripts, and clean the KioskBoard styles to the distribution. (Used "Babel Minify", and "Clean CSS")
* Version: 2.3.0
* Author: Furkan ('https://github.com/furcan')
* Copyright 2022 Minifier, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const Minify = require('babel-minify');
const CleanCSS = require('clean-css');
const Constants = require('./dev-constants');

// Constants
const thisFilePath = '.dev/dev-minifier.js';

// Minified Code and Source Type: begin
const minifiedCodeBySourceType = (text, type) => {
  // if script
  if (type === 'script') {
    const script = Minify(text, Constants.minifyOptions, Constants.minifyOverrides);
    if (typeof script === 'object' && typeof script.code === 'string' && typeof script.sourceType === 'string') {
      return {
        code: script.code,
        type: script.sourceType,
      };
    } else {
      return false;
    }
  }
  // else if style
  else if (type === 'style') {
    const style = new CleanCSS(Constants.cleanCSSOptions).minify(text);
    if (typeof style === 'object' && typeof style.styles === 'string') {
      return {
        code: style.styles,
        type: type,
      };
    } else {
      return false;
    }
  }
  // else
  return false;
};
// Minified Code and Source Type: end

// Write The File Into The Output Directory: begin
const writeFileToTheOutDir = (minContent, fileName, filePath) => {
  if (existsSync(Constants.dirOutputDist)) {
    // create "kioskboard.min.*" file by minified content
    if (typeof minContent === 'object' && (typeof minContent.type === 'string' && (typeof minContent.code === 'string' && minContent.code.length > 0))) {
      // file extention
      let ext = null;
      if (minContent.type === 'script') {
        ext = 'js';
      } else if (minContent.type === 'style') {
        ext = 'css';
      }

      // if ext exist create a file
      if (typeof ext === 'string') {
        // comment line
        const comment = `/* ${Constants.title} ${Constants.url} - Version: ${Constants.version} - Author: ${Constants.author} - Copyright ${Constants.year} ${Constants.title}, ${Constants.license} */\n\n`;
        // minified code with comment line
        const code = comment + minContent.code;
        // minified file name
        const minFileName = `${fileName}-${Constants.version}.min.${ext}`;
        // create a minified file into the output directory
        writeFileSync(join(Constants.dirOutputDist, minFileName), code);
      }

    } else {
      Constants.terminalError(`The "${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 77`);
      return false;
    }
  } else {
    Constants.terminalError(`The "${Constants.dirOutputDist}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 81`);
    return false;
  }
};
// Write The File Into The Output Directory: end

// Create The File from by The Input Directory: begin
const createFileFromInputDir = (filePath, fileName, filePrefix, fileType) => {
  if (existsSync(filePath)) { // if file exist
    // file text
    const fileText = readFileSync(filePath, 'utf-8');
    // if file text exist
    if (typeof fileText === 'string' && fileText.length > 0) {
      // minified content by file
      const minifiedContent = minifiedCodeBySourceType(fileText, fileType);
      // create a file by minified content
      writeFileToTheOutDir(minifiedContent, filePrefix, fileName);
    }
    // else throw error
    else {
      Constants.terminalError(`The "${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 101`);
      return false;
    }
  } else {
    Constants.terminalError(`The "${fileName}" file does not exist in the "${Constants.dirInputDev}" directory.`, `${thisFilePath} => Line: 105`);
    return false;
  }
};
// Create The File from by The Input Directory: end

// Minify: begin
if (existsSync(Constants.dirInputDev) && existsSync(Constants.dirOutputDev)) { // if the input directory exist
  // Script: begin
  const scriptPath = join(Constants.dirInputDev, Constants.fileScript);
  createFileFromInputDir(scriptPath, Constants.fileScript, Constants.prefix, 'script');
  // Script: end

  // Style: begin
  const stylePath = join(Constants.dirInputDev, Constants.fileStyle);
  createFileFromInputDir(stylePath, Constants.fileStyle, Constants.prefix, 'style');
  // Style: end

  // Script (All In One): begin
  const scriptAIOPath = join(Constants.dirOutputDev, Constants.fileScriptAIO);
  createFileFromInputDir(scriptAIOPath, Constants.fileScriptAIO, `${Constants.prefix}-aio`, 'script');
  // Script (All In One): end
} else {
  Constants.terminalError(`The "${!existsSync(Constants.dirInputDev) ? Constants.dirInputDev : Constants.dirOutputDev}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 128`);
}
// Minify: end
