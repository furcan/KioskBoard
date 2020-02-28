/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Version: 1.2.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 KioskBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/* global define */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(root);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(root);
    } else {
        root.KioskBoard = factory(root);
    }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

    // eslint-disable-next-line
    'use strict';

    // SSR check on
    if (typeof window === 'undefined' && typeof window.document === 'undefined') {
        return;
    }
    // SSR check off

    // KioskBoard: Default Options on
    var kioskBoardDefaultOptions = {
        keysArrayOfObjects: null,
        keysJsonUrl: null,
        specialCharactersObject: null,
        language: 'en',
        theme: 'light', // "light" || "dark" || "flat" || "material" || "oldschool"
        capsLockActive: true,
        allowRealKeyboard: false,
        allowMobileKeyboard: false,
        cssAnimations: true,
        cssAnimationsDuration: 360,
        cssAnimationsStyle: 'slide', // "slide" || "fade"
        keysAllowSpacebar: true,
        keysSpacebarText: 'Space',
        keysFontFamily: 'sans-serif',
        keysFontSize: '22px',
        keysFontWeight: 'normal',
        keysIconSize: '25px',
    };
    var kioskBoardCachedKeys;
    var kioskBoardNewOptions;
    var kioskBoardGithubUrl = 'https://github.com/furcan/KioskBoard';
    // KioskBoard: Default Options off

    // KioskBoard: Extend Options on
    var extendKioskBoard = function () {
        var extended = {};
        var deep = false;
        var i = 0;
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }
        var merge = function (obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extendKioskBoard(extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        for (; i < arguments.length; i++) {
            merge(arguments[i]);
        }
        return extended;
    };
    // KioskBoard: Extend Options off

    // KioskBoard: Console Error Function on
    var kioskBoardConsoleError = function (errorMessage) {
        return console.error('%c KioskBoard (Error) ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + errorMessage);
    };
    // KioskBoard: Console Error Function off

    // KioskBoard: Console Log Function on
    var kioskBoardConsoleLog = function (logMessage) {
        return console.log('%c KioskBoard (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n' + logMessage);
    };
    // KioskBoard: Console Log Function off

    // KioskBoard: Icons on
    var kioskBoardIconBackspace = function (width, color) {
        if (!width) { width = 25; }
        if (!color) { color = '#707070'; }
        var icon = '<svg id="KioskBoardIconBackspace" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' + width + '" height="' + width + '" viewBox="0 0 612 612" style="width:' + width + ';height:' + width + ';fill:' + color + ';" xml:space="preserve"><path d="M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z"/></svg>';
        return icon;
    };
    var kioskBoardIconCapslock = function (width, color) {
        if (!width) { width = 25; }
        if (!color) { color = '#707070'; }
        var icon = '<svg id="KioskBoardIconCapslock" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + width + '" height="' + width + '" version="1.1" style="width:' + width + ';height:' + width + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M61.8 148.97l76.4 0c6,0 10.91,4.9 10.91,10.9l0 27.24c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -27.24c0,-6 4.91,-10.9 10.91,-10.9zm105.7 -60.38l-18.39 0 0 37.36c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -37.36 -18.39 0c-2.65,0 -4.91,-1.47 -5.97,-3.89 -1.07,-2.42 -0.63,-5.08 1.16,-7.02l67.5 -73.57c1.28,-1.39 2.91,-2.11 4.81,-2.11 1.9,0 3.53,0.72 4.81,2.11l67.5 73.57c1.79,1.94 2.23,4.6 1.16,7.02 -1.06,2.42 -3.32,3.89 -5.97,3.89z"/></svg>';
        return icon;
    };
    var kioskBoardIconSpecialCharacters = function (width, height, color) {
        if (!width) { width = 50; }
        if (!height) { width = 25; }
        if (!color) { color = '#707070'; }
        var icon = '<svg id="KioskBoardIconSpecialCharacters" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + width + '" height="' + height + '" version="1.1" style="width:' + width + ';height:' + height + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 300 150" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><path d="M34.19 79.43l1.99 -10.86 10.8 0 -1.96 10.86 -10.83 0zm264.98 -17.22l0 -9.63c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.63c0,1.23 1,2.23 2.24,2.23l74.48 0c1.24,0 2.24,-1 2.24,-2.23zm0 35.22l0 -9.62c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.62c0,1.23 1,2.24 2.24,2.24l74.48 0c1.24,0 2.24,-1.01 2.24,-2.24zm-153.98 -61.91l9.63 0c1.23,0 2.23,1.01 2.23,2.25l0 30.19 30.19 0c1.25,0 2.25,1.01 2.25,2.23l0 9.63c0,1.23 -1,2.23 -2.25,2.23l-30.19 0 0 30.19c0,1.25 -1,2.25 -2.23,2.25l-9.63 0c-1.23,0 -2.23,-1 -2.23,-2.25l0 -30.19 -30.19 0c-1.24,0 -2.25,-1 -2.25,-2.23l0 -9.63c0,-1.22 1.01,-2.23 2.25,-2.23l30.19 0 0 -30.19c0,-1.24 1,-2.25 2.23,-2.25zm-67.7 33.05c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-13.93 0 2.95 -16.51c0.12,-0.68 -0.07,-1.37 -0.51,-1.89 -0.44,-0.53 -1.09,-0.83 -1.77,-0.83l-9.36 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.12 17.34 -10.74 0 3.03 -16.49c0.12,-0.67 -0.06,-1.37 -0.5,-1.89 -0.44,-0.53 -1.09,-0.84 -1.77,-0.84l-9.48 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.16 17.33 -21.43 0c-1.28,0 -2.31,1.04 -2.31,2.32l0 9.19c0,1.28 1.03,2.31 2.31,2.31l18.91 0 -1.98 10.86 -16.93 0c-1.28,0 -2.31,1.04 -2.31,2.31l0 9.2c0,1.28 1.03,2.31 2.31,2.31l14.41 0 -3.35 18.36c-0.12,0.67 0.06,1.37 0.5,1.89 0.44,0.53 1.09,0.84 1.78,0.84l9.36 0c1.12,0 2.08,-0.8 2.28,-1.9l3.53 -19.19 10.88 0 -3.31 18.42c-0.13,0.67 0.06,1.36 0.49,1.89 0.44,0.52 1.08,0.83 1.76,0.84l9.49 0.09c0,0 0.01,0 0.02,0 1.12,0 2.08,-0.81 2.28,-1.91l3.44 -19.33 20.79 0c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-18.32 0 1.93 -10.86 16.39 0z"/></svg>';
        return icon;
    };
    var kioskBoardIconClose = function (width, color) {
        if (!width) { width = 18; }
        if (!color) { color = '#707070'; }
        var icon = '<svg version="1.1" id="KioskBoardIconClose" width="' + width + '" height="' + width + '" style="width:' + width + ';height:' + width + ';fill:' + color + ';" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.333 348.334" xml:space="preserve"><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554	L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></svg>';
        return icon;
    };
    // KioskBoard: Icons off

    // KioskBoard: Main on
    var KioskBoard = {
        // Initialize
        Init: function (userInitOptions) {
            kioskBoardNewOptions = extendKioskBoard(true, kioskBoardDefaultOptions, userInitOptions);
        },
        // Merge
        Merge: function (userMergeOptions) {
            if (kioskBoardNewOptions) { // if initialized
                kioskBoardNewOptions = extendKioskBoard(true, kioskBoardNewOptions, userMergeOptions);
            } else { // initialize first
                kioskBoardConsoleError('You have to initialize KioskBoard before call Merge function.');
                return false;
            }
        },
        // Run
        Run: function (keyboardElement) {
            // Check the initialize on
            if (!kioskBoardNewOptions) {
                kioskBoardConsoleError('You have to initialize KioskBoard first. \n\nVisit to learn how: ' + kioskBoardGithubUrl);
                return false;
            }
            // Check the initialize off

            // Keys Object
            var keysArrayOfObjects = kioskBoardNewOptions.keysArrayOfObjects;
            var hasKeysObject = false;

            // Step 1: check the "keysArrayOfObjects" on
            if (keysArrayOfObjects && typeof keysArrayOfObjects === 'object' && keysArrayOfObjects.length > 0) {
                // check least one if exist
                if (typeof keysArrayOfObjects[0] === 'object') {
                    for (var key in keysArrayOfObjects[0]) {
                        if (Object.prototype.hasOwnProperty.call(keysArrayOfObjects[0], key)) {
                            // has keys object
                            hasKeysObject = true;
                            // cache the keys object
                            kioskBoardCachedKeys = keysArrayOfObjects;
                        }
                    }
                }
            }
            // Step 1: check the "keysArrayOfObjects" off

            // Step 2: check the "keysJsonUrl" on
            if (!hasKeysObject) {
                // keys json url
                var keysJsonUrl = kioskBoardNewOptions.keysJsonUrl;
                // check the "keysJsonUrl"
                if (!keysJsonUrl) {
                    kioskBoardConsoleError('You have to set the path of KioskBoard Keys JSON file to "keysJsonUrl" option. \n\nVisit to learn how: ' + kioskBoardGithubUrl);
                    return false;
                }
            }
            // Step 2: check the "keysJsonUrl" off

            // Create Keyboard and AppendTo... on
            var createKeyboardAndAppendTo = function (data, input) {
                // all inputs
                var allInputs = [];
                allInputs.push(input);

                // all inputs readonly check
                var allowMobileKeyboard = typeof kioskBoardNewOptions.allowMobileKeyboard === 'boolean' ? kioskBoardNewOptions.allowMobileKeyboard : false;
                var getReadOnlyAttr = input.getAttribute('readonly');

                // each input focus listener on
                var inputFocusListener = function (e) {
                    // input element variables on
                    var theInput = this;
                    var theInputSelIndex = 0;
                    var theInputValArray = [];
                    var keyboadType = (theInput.dataset.kioskboardType ? theInput.dataset.kioskboardType.toString().toLowerCase() : 'all');
                    var allowedSpecialCharacters = (theInput.dataset.kioskboardSpecialcharacters ? JSON.parse(theInput.dataset.kioskboardSpecialcharacters) : false);
                    // input element variables off

                    // check mobile keyboard allowed on
                    if (!allowMobileKeyboard) {
                        theInput.setAttribute('readonly', 'readonly');
                    }
                    // check mobile keyboard allowed off

                    // update theInputSelIndex on focus
                    theInputSelIndex = theInput.selectionStart;

                    // update theInputValArray on focus
                    theInputValArray = theInput.value.split('');

                    // data
                    var jsonData = data;

                    // row keys element on
                    var keysRowElements = '';
                    // row keys element off

                    // all keys styles on
                    var fontFamily = (kioskBoardNewOptions.keysFontFamily && kioskBoardNewOptions.keysFontFamily.length > 0 ? kioskBoardNewOptions.keysFontFamily : 'sans-serif');
                    var fontSize = (kioskBoardNewOptions.keysFontSize && kioskBoardNewOptions.keysFontSize.length > 0 ? kioskBoardNewOptions.keysFontSize : '22px');
                    var fontWeight = (kioskBoardNewOptions.keysFontWeight && kioskBoardNewOptions.keysFontWeight.length > 0 ? kioskBoardNewOptions.keysFontWeight : 'normal');
                    // all keys styles off

                    // static keys on
                    var isCapsLockActive = (typeof kioskBoardNewOptions.capsLockActive === 'boolean' ? kioskBoardNewOptions.capsLockActive : true);
                    var keysIconWidth = (kioskBoardNewOptions.keysIconSize && kioskBoardNewOptions.keysIconSize.length > 0 ? kioskBoardNewOptions.keysIconSize : '25px');
                    var keysIconColor = '#707070';
                    var keysAllowSpacebar = (typeof kioskBoardNewOptions.keysAllowSpacebar === 'boolean' ? kioskBoardNewOptions.keysAllowSpacebar : true);
                    var spaceKeyValue = keysAllowSpacebar ? ' ' : '';
                    var keysSpacebarText = (kioskBoardNewOptions.keysSpacebarText && kioskBoardNewOptions.keysSpacebarText.length > 0 ? kioskBoardNewOptions.keysSpacebarText : 'Space');

                    var spaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-space ' + (keysAllowSpacebar ? 'spacebar-allowed' : 'spacebar-denied') + '" data-value="' + spaceKeyValue + '">' + keysSpacebarText + '</span>';
                    var capsLockKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-capslock ' + (isCapsLockActive ? 'capslock-active' : '') + '">' + kioskBoardIconCapslock(keysIconWidth, keysIconColor) + '</span>';
                    var backspaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-backspace">' + kioskBoardIconBackspace(keysIconWidth, keysIconColor) + '</span>';
                    // static keys off

                    // keyboard "specialcharacter" setting is "true" on
                    var specialCharacterKey = '';
                    var specialCharactersContent = '';
                    if (allowedSpecialCharacters) {
                        var theUnit = (keysIconWidth.includes('%') ? '%' : 'px');
                        var theSize = keysIconWidth.toString().match(/\d/g);
                        var specialKeyWidth = (theSize.join('') * 2) + theUnit;
                        var specialKeyHeight = theSize.join('') + theUnit;
                        specialCharacterKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-specialcharacter">' + kioskBoardIconSpecialCharacters(specialKeyWidth, specialKeyHeight, keysIconColor) + '</span>';
                        var specialKeysObject = {
                            "0": "!",
                            "1": "'",
                            "2": "^",
                            "3": "#",
                            "4": "+",
                            "5": "$",
                            "6": "%",
                            "7": "½",
                            "8": "&",
                            "9": "/",
                            "10": "{",
                            "11": "}",
                            "12": "(",
                            "13": ")",
                            "14": "[",
                            "15": "]",
                            "16": "=",
                            "17": "*",
                            "18": "?",
                            "19": "\\",
                            "20": "-",
                            "21": "_",
                            "22": "|",
                            "23": "@",
                            "24": "€",
                            "25": "₺",
                            "26": "~",
                            "27": "æ",
                            "28": "ß",
                            "29": "<",
                            "30": ">",
                            "31": ",",
                            "32": ";",
                            "33": ".",
                            "34": ":",
                            "35": "`"
                        };

                        // check "specialCharactersObject" for override on
                        var specialCharsObj = kioskBoardNewOptions.specialCharactersObject;
                        if (specialCharsObj && typeof specialCharsObj === 'object') {
                            // check least one if exist
                            if (typeof specialCharsObj[0] === 'object') {
                                for (var key in specialCharsObj[0]) {
                                    if (Object.prototype.hasOwnProperty.call(specialCharsObj[0], key)) {
                                        specialKeysObject = specialCharsObj; // override special characters object
                                    }
                                }
                            }
                        }
                        // check "specialCharactersObject" for override off

                        for (var key in specialKeysObject) {
                            if (Object.prototype.hasOwnProperty.call(specialKeysObject, key)) {
                                var index = key;
                                var value = specialKeysObject[key];
                                var length = Object.keys(specialKeysObject).length;
                                var eachKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key" data-index="' + index.toString() + '" data-value="' + value.toString() + '">' + value.toString() + '</span>';
                                specialCharactersContent += eachKey;
                            }
                        }
                    }
                    // keyboard "specialcharacter" setting is "true" off

                    // keyboard type is 'numpad' on
                    if (keyboadType === 'numpad') {
                        var numpadKeysObject = {
                            "0": "7",
                            "1": "8",
                            "2": "9",
                            "3": "4",
                            "4": "5",
                            "5": "6",
                            "6": "1",
                            "7": "2",
                            "8": "3",
                            "9": "0",
                        };

                        var numpadKeysContent = '';
                        for (var key in numpadKeysObject) {
                            if (Object.prototype.hasOwnProperty.call(numpadKeysObject, key)) {
                                var index = key;
                                var value = numpadKeysObject[key];
                                var length = Object.keys(numpadKeysObject).length;
                                var eachKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-' + value.toString().toLowerCase() + '" data-index="' + index.toString() + '" data-value="' + value.toString() + '">' + value.toString() + '</span>';
                                numpadKeysContent += eachKey;
                            }
                        }
                        keysRowElements += '<div class="kioskboard-row kioskboard-row-numpad">' + numpadKeysContent + backspaceKey + '</div>';
                    }
                    // keyboard type is 'numpad' off

                    // keyboard type is 'all' or 'keyboard' on
                    if (keyboadType === 'keyboard' || keyboadType === 'all') {

                        // only keyboard type is 'all' on
                        if (keyboadType === 'all') {
                            var numberKeysObject = {
                                "0": "1",
                                "1": "2",
                                "2": "3",
                                "3": "4",
                                "4": "5",
                                "5": "6",
                                "6": "7",
                                "7": "8",
                                "8": "9",
                                "9": "0",
                            };

                            var numberKeysContent = '';
                            for (var key in numberKeysObject) {
                                if (Object.prototype.hasOwnProperty.call(numberKeysObject, key)) {
                                    var index = key;
                                    var value = numberKeysObject[key];
                                    var length = Object.keys(numberKeysObject).length;
                                    var eachKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-float-' + length + ' kioskboard-key-' + value.toString().toLowerCase() + '" data-index="' + index.toString() + '" data-value="' + value.toString() + '">' + value.toString() + '</span>';
                                    numberKeysContent += eachKey;
                                }
                            }
                            keysRowElements += '<div class="kioskboard-row kioskboard-row-top">' + numberKeysContent + '</div>';
                        }
                        // only keyboard type is 'all' off

                        // dynamic keys group on
                        for (var i = 0; i < jsonData.length; i++) {
                            var eachObj = data[i];
                            var rowKeysContent = '';
                            for (var key in eachObj) {
                                if (Object.prototype.hasOwnProperty.call(eachObj, key)) {
                                    var index = key;
                                    var value = eachObj[key];
                                    var length = Object.keys(eachObj).length;
                                    var eachKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-float-' + length + ' kioskboard-key-' + value.toString().toLowerCase() + '" data-index="' + index.toString() + '" data-value="' + value.toString() + '">' + value.toString() + '</span>';
                                    rowKeysContent += eachKey;
                                }
                            }
                            keysRowElements += '<div class="kioskboard-row kioskboard-row-dynamic">' + rowKeysContent + '</div>';
                        }
                        // dynamic keys group off

                        // bottom keys group on
                        keysRowElements += '<div class="kioskboard-row kioskboard-row-bottom ' + (allowedSpecialCharacters ? 'kioskboard-with-specialcharacter' : '') + '">' + capsLockKey + specialCharacterKey + spaceKey + backspaceKey + '</div>';
                        // bottom keys group off

                        // add special character keys if allowed on
                        if (allowedSpecialCharacters) {
                            var closeSpecialCharacters = '<span class="kioskboard-specialcharacter-close">' + kioskBoardIconClose('18px', keysIconColor) + '</span>';
                            var specialCharactersWrapper = '<div class="kioskboard-specialcharacters-content">' + specialCharactersContent + '</div>';
                            keysRowElements += '<div class="kioskboard-row kioskboard-row-specialcharacters">' + closeSpecialCharacters + specialCharactersWrapper + '</div>';
                        }
                        // add special character keys if allowed off

                    }
                    // keyboard type is 'all' or 'keyboard' off

                    // keyboard language
                    var keyboardLanguage = (kioskBoardNewOptions.language && kioskBoardNewOptions.language.length > 0 ? kioskBoardNewOptions.language.toString().toLowerCase() : 'en');

                    // create keys wrapper on
                    var wrapKeysElement = function (stringHtml) {
                        var div = document.createElement('div');
                        div.className = 'kioskboard-wrapper';
                        div.innerHTML = stringHtml.trim();
                        return div;
                    };
                    var allKeysElement = wrapKeysElement(keysRowElements); // all keyboard element
                    // create keys wrapper off

                    // check "cssAnimations" on
                    var cssAnimations = (typeof kioskBoardNewOptions.cssAnimations === 'boolean' ? kioskBoardNewOptions.cssAnimations : true);
                    var cssAnimationsClass = 'no-animation';
                    var cssAnimationsStyle = 'no-animation';
                    var cssAnimationsDuration = 0;
                    if (cssAnimations) {
                        cssAnimationsClass = 'kioskboard-with-animation';
                        cssAnimationsStyle = 'kioskboard-fade';
                        cssAnimationsDuration = (typeof kioskBoardNewOptions.cssAnimationsDuration === 'number' ? kioskBoardNewOptions.cssAnimationsDuration : 360);

                        if (kioskBoardNewOptions.cssAnimationsStyle === 'slide') {
                            cssAnimationsStyle = 'kioskboard-slide';
                        }
                    }
                    // check "cssAnimations" off

                    // create the keyboard on
                    var theTheme = (kioskBoardNewOptions.theme && kioskBoardNewOptions.theme.length > 0 ? kioskBoardNewOptions.theme : 'light');
                    var kioskBoardVirtualKeyboard = document.createElement('div');
                    kioskBoardVirtualKeyboard.id = 'KioskBoard-VirtualKeyboard';
                    kioskBoardVirtualKeyboard.classList.add('kioskboard-theme-' + theTheme);
                    kioskBoardVirtualKeyboard.classList.add(cssAnimationsClass);
                    kioskBoardVirtualKeyboard.classList.add(cssAnimationsStyle);
                    kioskBoardVirtualKeyboard.classList.add((isCapsLockActive ? 'kioskboard-touppercase' : 'kioskboard-tolowercase'));
                    kioskBoardVirtualKeyboard.lang = keyboardLanguage;
                    kioskBoardVirtualKeyboard.style.webkitLocale = '"' + keyboardLanguage + '"';
                    kioskBoardVirtualKeyboard.style.animationDuration = (cssAnimations ? cssAnimationsDuration + 'ms' : '');

                    kioskBoardVirtualKeyboard.appendChild(allKeysElement);
                    // create the keyboard off

                    // input element trigger change on
                    var changeEvent = new Event('change', {
                        'bubbles': true,
                        'cancelable': true
                    });
                    // input element trigger change off

                    // input element keyup listener on
                    theInput.addEventListener('keypress', function (e) {
                        // if: allowed real keyboard use
                        var allowRealKeyboard = typeof kioskBoardNewOptions.allowRealKeyboard === 'boolean' ? kioskBoardNewOptions.allowRealKeyboard : false;
                        if (allowRealKeyboard) {
                            // update theInputValArray on keyup
                            theInputValArray = this.value.split('');
                        }
                        // else: stop
                        else {
                            e.stopPropagation();
                            e.preventDefault();
                            e.returnValue = false;
                            e.cancelBubble = true;
                            return false;
                        }
                    }, false);
                    // input element keyup listener off

                    // input element change listener on
                    theInput.addEventListener('change', function (e) {
                        theInputSelIndex = this.selectionStart; // update selectionStart
                    }, false);
                    // input element change listener off

                    // keys click listeners on
                    var keysClickListeners = function (input) {

                        // each key click listener on
                        var eachKeyElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key');
                        if (eachKeyElm && eachKeyElm.length > 0) {
                            for (var i = 0; i < eachKeyElm.length; i++) {
                                var keyElm = eachKeyElm[i];

                                keyElm.addEventListener('click', function (e) {
                                    e.preventDefault();

                                    // input trigger change for selectionStart
                                    input.dispatchEvent(changeEvent);

                                    // input trigger focus
                                    input.focus();

                                    // key's value
                                    var keyValue = this.dataset.value;

                                    // check capslock on
                                    if (typeof keyValue === 'string') {
                                        if (isCapsLockActive) {
                                            keyValue = keyValue.toString().toLocaleUpperCase(keyboardLanguage);
                                        } else {
                                            keyValue = keyValue.toString().toLocaleLowerCase(keyboardLanguage);
                                        }
                                    }
                                    // check capslock off

                                    // add value by index
                                    theInputValArray.splice(theInputSelIndex, 0, keyValue);

                                    // update input value
                                    input.value = theInputValArray.join('');

                                }, false);
                            }
                        }
                        // each key click listener off

                        // capslock key click listener on
                        var capsLockKeyElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-capslock')[0];
                        if (capsLockKeyElm) {
                            capsLockKeyElm.addEventListener('click', function (e) {
                                e.preventDefault();
                                input.focus(); // focus the input
                                if (this.classList.contains('capslock-active')) {
                                    this.classList.remove('capslock-active');
                                    kioskBoardVirtualKeyboard.classList.add('kioskboard-tolowercase');
                                    kioskBoardVirtualKeyboard.classList.remove('kioskboard-touppercase');
                                    isCapsLockActive = false;
                                } else {
                                    this.classList.add('capslock-active');
                                    kioskBoardVirtualKeyboard.classList.remove('kioskboard-tolowercase');
                                    kioskBoardVirtualKeyboard.classList.add('kioskboard-touppercase');
                                    isCapsLockActive = true;
                                }
                            }, false);
                        }
                        // capslock key click listener off

                        // backspace key click listener on
                        var backspaceKeyElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-backspace')[0];
                        if (backspaceKeyElm) {
                            backspaceKeyElm.addEventListener('click', function (e) {
                                e.preventDefault();

                                // trigger for selectionStart
                                input.dispatchEvent(changeEvent);

                                // input trigger focus
                                input.focus();

                                // remove value by index
                                theInputValArray.splice(theInputSelIndex - 1, 1);

                                // update input value
                                input.value = theInputValArray.join('');

                            }, false);
                        }
                        // backspace key click listener off

                        // specialcharacter key click listener on
                        var specialCharacterKeyElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-specialcharacter')[0];
                        var specialCharactersRowElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-row-specialcharacters')[0];
                        // open
                        if (specialCharacterKeyElm && specialCharactersRowElm) {
                            specialCharacterKeyElm.addEventListener('click', function (e) {
                                e.preventDefault();
                                input.focus(); // focus the input
                                if (this.classList.contains('specialcharacter-active')) {
                                    this.classList.remove('specialcharacter-active');
                                    specialCharactersRowElm.classList.remove('kioskboard-specialcharacter-show');
                                } else {
                                    this.classList.add('specialcharacter-active');
                                    specialCharactersRowElm.classList.add('kioskboard-specialcharacter-show');
                                }
                            }, false);
                        }
                        // close
                        var specialCharCloseElm = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-specialcharacter-close')[0];
                        if (specialCharCloseElm && specialCharacterKeyElm && specialCharactersRowElm) {
                            specialCharCloseElm.addEventListener('click', function (e) {
                                e.preventDefault();
                                input.focus(); // focus the input
                                specialCharacterKeyElm.classList.remove('specialcharacter-active');
                                specialCharactersRowElm.classList.remove('kioskboard-specialcharacter-show');
                            }, false);
                        }
                        // specialcharacter key click listener off

                    }
                    // keys click listeners off

                    // append keyboard on
                    var keyboardElement = document.getElementById(kioskBoardVirtualKeyboard.id);
                    if (!keyboardElement) {

                        // append the keyboard to body
                        document.body.appendChild(kioskBoardVirtualKeyboard);
                        keyboardElement = document.getElementById(kioskBoardVirtualKeyboard.id);

                        // check window and keyboard heights on
                        var windowHeight = Math.round(window.innerHeight);
                        var documentHeight = Math.round(document.body.clientHeight);
                        var keyboardHeight = Math.round(document.getElementById(kioskBoardVirtualKeyboard.id).offsetHeight);
                        if (keyboardHeight > Math.round((windowHeight / 3) * 2)) {
                            var keyboardWrapper = document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-wrapper')[0];
                            keyboardWrapper.style.maxHeight = Math.round((windowHeight / 5) * 3) + 'px';
                            keyboardWrapper.style.overflowX = 'hidden';
                            keyboardWrapper.style.overflowY = 'auto';
                            keyboardWrapper.classList.add('kioskboard-overflow');
                        }
                        // check window and keyboard heights off

                        // body padding bottom on
                        var theInputOffsetTop = Math.round(theInput.getBoundingClientRect().top + document.documentElement.scrollTop);
                        if (documentHeight <= theInputOffsetTop + keyboardHeight + 50) {
                            // body padding style on
                            var styleElm = document.getElementById('KioskboardBodyPadding');
                            if (styleElm && styleElm.parentNode !== null) {
                                styleElm.parentNode.removeChild(styleElm);
                            }

                            var style = '<style id="KioskboardBodyPadding">.kioskboard-body-padding {padding-bottom:' + keyboardHeight + 'px !important;}</style>';
                            var styleRange = document.createRange();
                            styleRange.selectNode(document.head);
                            var styleFragment = styleRange.createContextualFragment(style);
                            document.head.appendChild(styleFragment);
                            document.body.classList.add('kioskboard-body-padding');
                            // body padding style off
                        }

                        var userAgent = navigator.userAgent.toLowerCase();
                        if (!userAgent.includes('edge') && !userAgent.includes('.net4')) {
                            var scrollTimeout = setTimeout(function () {
                                window.scrollTo({ top: theInputOffsetTop - 50, left: 0, behavior: 'smooth' });
                                clearTimeout(scrollTimeout);
                            }, 360);
                        }
                        // body padding bottom off

                        // keyboard keys click listeners
                        keysClickListeners(theInput);

                        // keyboard click outside listener on
                        var docClickListener = function (e) {

                            // check event target to remove keyboard on
                            if (e.target !== theInput && e.target !== keyboardElement && !e.target.closest('#' + kioskBoardVirtualKeyboard.id)) {

                                kioskBoardVirtualKeyboard.classList.add(cssAnimationsStyle + '-remove'); // add remove class

                                var removeTimeout = setTimeout(function () {
                                    if (keyboardElement.parentNode !== null) {
                                        keyboardElement.parentNode.removeChild(keyboardElement); // remove keyboard
                                        document.body.classList.remove('kioskboard-body-padding'); // remove body padding class
                                        document.removeEventListener('click', docClickListener); // remove document click listener
                                    }
                                    clearTimeout(removeTimeout);
                                }, cssAnimationsDuration);
                            }
                            // check event target to remove keyboard off

                            // toggle inputs on
                            if (allInputs.includes(theInput)) {
                                var toggleTimeout = setTimeout(function () {
                                    e.target.blur();
                                    e.target.focus();
                                    clearTimeout(toggleTimeout);
                                }, cssAnimationsDuration);
                            }
                            // toggle inputs off

                        }
                        document.addEventListener('click', docClickListener); // add document click listener
                        // keyboard click outside listener off

                    }
                    // append keyboard off

                }
                input.addEventListener('focus', inputFocusListener); // add input focus listener
                // each input focus listener off

                // each input focusout listener on
                var inputFocusoutListener = function (e) {
                    if (!allowMobileKeyboard && getReadOnlyAttr === null) {
                        this.removeAttribute('readonly');
                    }
                }
                input.addEventListener('focusout', inputFocusoutListener); // add input focusout listener
                // each input focusout listener off

            };
            // Create Keyboard and AppendTo... off

            // Get the Keys from JSON by XMLHttpRequest and AppendTo... on
            var getKeysXmlHttpRequest = function (jsonUrl, input) {

                // check the protocol on
                if (window.location.protocol.indexOf('http') <= -1) {
                    kioskBoardConsoleError('The Browser blocked this request by CORS policy.');
                    return false;
                }
                // check the protocol off

                // if "kioskBoardCachedKeys" is undefined || null => send XMLHttpRequest on
                if (!kioskBoardCachedKeys) {
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.open('GET', jsonUrl, true);
                    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    xmlHttp.send();
                    xmlHttp.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            if (this.status === 200) { // success
                                var data = this.responseText; // data 
                                var parsedData = JSON.parse(data); // JSON parse data
                                kioskBoardCachedKeys = parsedData; // cache the keys
                                createKeyboardAndAppendTo(parsedData, input); // create the keyboard
                            } else {
                                kioskBoardConsoleError('XMLHttpRequest Failed. Please check your URL path or protocol.');
                            }
                        }
                    };
                }
                // if "kioskBoardCachedKeys" is undefined || null => send XMLHttpRequest off
            };
            // Get the Keys from JSON by XMLHttpRequest and AppendTo... off

            // Check the arguments for proceed on
            if (arguments && arguments.length === 1) {
                // get all elements
                var kbElements = document.querySelectorAll(keyboardElement);

                // if: elements exist on the document
                if (kbElements && kbElements.length > 0) {
                    for (var i = 0; i < kbElements.length; i++) {
                        // each element
                        var eachElement = kbElements[i];

                        // each element tag name
                        var getTagName = eachElement.tagName.toString().toLowerCase();

                        // if: an input or textarea element
                        if (getTagName === 'input' || getTagName === 'textarea') {

                            // if: has cached keys => create keyboard by using cached keys
                            if (kioskBoardCachedKeys) {
                                createKeyboardAndAppendTo(kioskBoardCachedKeys, eachElement);
                            }
                            // else: try to get keys from JSON via XmlHttpRequest
                            else {
                                getKeysXmlHttpRequest(keysJsonUrl, eachElement);
                            }
                        }
                        // else: other elements
                        else {
                            kioskBoardConsoleLog('You have to call the "KioskBoard" with an ID/ClassName of an Input or a TextArea element. Your element\'s tag name is: "' + getTagName + '". \n\nYou can visit the Documentation page to learn more. \n\nVisit: ' + kioskBoardGithubUrl);
                        }
                    }
                }
                // else: there is no such element...
                else {
                    kioskBoardConsoleError('You called the KioskBoard with "' + keyboardElement + '" selector, but there is no such element on the document.');
                }

            } else if (arguments && arguments.length > 1) {
                kioskBoardConsoleError('More parameters than allowed.');
                return false;
            } else {
                kioskBoardConsoleError('You have to call the "KioskBoard" with an ID/ClassName of an Input or a TextArea element. \n\nYou can visit the Documentation page to learn more. \n\nVisit: ' + kioskBoardGithubUrl);
                return false;
            }
            // Check the arguments for proceed off
        },
    };
    return KioskBoard;
    // KioskBoard: Main off
});
