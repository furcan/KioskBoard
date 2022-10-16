/*!
* All In One Generator
*
* Description: Creates "kioskboard-aio.js" file automatically from "kioskboard.js" and "kioskboard.css" files.
* Version: 2.3.0
* Author: Furkan ('https://github.com/furcan')
* Copyright 2022 All In One Generator, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const CleanCSS = require('clean-css');
const Constants = require('./dev-constants');

// Constants
const thisFilePath = '.dev/dev-allinone.js';

// Get File content as text: begin
const getFileContentAsTextByType = (filePath, fileType, clean) => {
  // if file is exist
  if (existsSync(filePath)) {
    // file as text
    const fileAsText = readFileSync(filePath, 'utf-8');
    // if file contains text
    if (typeof fileAsText === 'string' && fileAsText.length > 0) {
      let code = fileAsText;
      if (fileType === 'style' && clean) {
        const styleClean = new CleanCSS(Constants.cleanCSSOptions).minify(fileAsText);
        code = (styleClean || {}).styles;
      }
      return code || false;
    } else {
      Constants.terminalError(`"${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 34`);
      return false;
    }
  }
  // else throw error
  else {
    Constants.terminalError(`"${filePath}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 40`);
    return false;
  }
};
// Get File content as text: end

// Create "kioskboard-aio.js" file from "kioskboard.js" and "kioskboard.css" files: begin
const createAIOfileFromJsAndCss = () => {
  // kioskboard style as minified
  const stylePath = join(Constants.dirInputDev, Constants.fileStyle);
  const styleAsMinified = getFileContentAsTextByType(stylePath, 'style', true);

  // kioskboard script
  const scriptPath = join(Constants.dirInputDev, Constants.fileScript);
  const scriptAsNormal = getFileContentAsTextByType(scriptPath, 'script', false);

  // if style and script are exist
  if (styleAsMinified && scriptAsNormal) {
    // if output directory is exist
    if (existsSync(Constants.dirOutputDev)) {
      const commentVersion = `* Version:`;
      const commentDescAndVersion = `* Description: This file contains the KioskBoard CSS codes as internal to use the KioskBoard as one file. This file has been created automatically from using the "kioskboard.js", and "kioskboard.css" files.\n${commentVersion}`;
      const internalCSS = `var internalCSS = '';`;
      // add a description comment before the version && replace internal css codes => if they exist
      if (scriptAsNormal.indexOf(commentVersion) > -1 && scriptAsNormal.indexOf(internalCSS) > -1) {
        // add the description above the version as comment
        let scriptAsNormalAIO = scriptAsNormal.replace(commentVersion, commentDescAndVersion);
        // replace internal css
        scriptAsNormalAIO = scriptAsNormalAIO.replace(internalCSS, `var internalCSS = '${styleAsMinified}';`);
        // create "kioskboard-aio.js" file
        writeFileSync(join(Constants.dirOutputDev, Constants.fileScriptAIO), scriptAsNormalAIO);
      } else {
        Constants.terminalError(`"${scriptAsNormal.indexOf(commentVersion) === -1 ? commentVersion : internalCSS}" does not exist in the "${Constants.fileScript}" file.`, `${thisFilePath} => Line: 72`);
        return false;
      }
    }
    // else throw error
    else {
      Constants.terminalError(`"${Constants.dirOutputDev}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 78`);
      return false;
    }
  } else {
    Constants.terminalError(`Something went wrong on ${!styleAsMinified ? '"styleAsMinified"' : '"scriptAsNormal"'}.`, `${thisFilePath} => Line: 82`);
    return false;
  }
};
createAIOfileFromJsAndCss();
// Create "kioskboard-aio.js" file from "kioskboard.js" and "kioskboard.css" files: end
