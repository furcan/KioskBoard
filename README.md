<p align="center">
  <img src="https://raw.githubusercontent.com/furcan/KioskBoard/main/docs/github-cover.png" width="640" height="auto" alt="KioskBoard">
</p>

[npm-version-badge]: https://img.shields.io/npm/v/kioskboard.svg
[npm-version-url]: https://www.npmjs.com/package/kioskboard
[synk-badge]: https://snyk.io/test/github/furcan/KioskBoard/badge.svg?targetFile=package.json
[synk-url]: https://snyk.io/test/github/furcan/KioskBoard?targetFile=package.json
[typescript-badge]: https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=3178c6&color=555
[typescript-url]: https://github.com/furcan/KioskBoard/blob/main/index.d.ts
[lic-badge]: https://img.shields.io/github/license/furcan/KioskBoard.svg
[lic-url]: https://github.com/furcan/KioskBoard/blob/main/LICENSE

[![NPM Version][npm-version-badge]][npm-version-url]
[![Known Vulnerabilities][synk-badge]][synk-url]
[![TypeScript][typescript-badge]][typescript-url]
[![License][lic-badge]][lic-url]

# KioskBoard - Virtual Keyboard
A pure JavaScript library for using virtual keyboards.

---------

## Current Version
2.3.0 [*](https://github.com/furcan/KioskBoard/blob/main/CHANGELOG.md)

---------

## Documentation and Demo
https://furcan.github.io/KioskBoard/

---------

## Browser Compatibility
`Chrome` || `Firefox` || `Safari` || `Opera` || `Edge` || `IE 11`

---------
## (A) Install & Import

### Install
#### [yarn](https://yarnpkg.com/package/kioskboard)
```js
yarn add kioskboard
```

#### [npm](https://www.npmjs.com/package/kioskboard)
```js
npm i kioskboard
```
### Import

```jsx
import KioskBoard from 'kioskboard';
```

---------

## (B) Adding to an HTML Document
### CSS and JS

```html
<link rel="stylesheet" href="dist/kioskboard-2.3.0.min.css" />

<script src="dist/kioskboard-2.3.0.min.js"></script>
```

### Or only JS (All in One - Internal CSS)

```html
<script src="dist/kioskboard-aio-2.3.0.min.js"></script>
```

---------


## Keyboard Types and Themes
3 types of keyboards can be used: `all`, `keyboard`, and `numpad`.

5 types of themes can be used. `light`, `dark`, `flat`, `material`, and `oldschool`.

---------

## Run / Initialize
KioskBoard Virtual Keyboard can be used with the `input` or `textarea` elements.

KioskBoard must be initialized with the required options. The other ones are optional. Keyboard Type (the default value is "all") `data-kioskboard-type`, Keyboard Placement (the default value is "bottom") `data-kioskboard-placement`, and Special Characters `data-kioskboard-specialcharacters` settings are each element-based (data attributes).

All options and examples of data attribute usages are as below. Also, a custom class name can be defined as globally for all input and/or textarea elements to run KioskBoard.

---------

### HTML => (data-* options)
```html
<!-- An example of a textarea element: The keyboard type is "all", the placement is "top", and the availability of the special characters is "true". -->
<textarea class="js-virtual-keyboard" data-kioskboard-type="all" data-kioskboard-placement="top" data-kioskboard-specialcharacters="true" placeholder="Your Address"></textarea>

<!-- An example of an input element: The keyboard type is "keyboard", the placement is "bottom", and the availability of the special characters is "false". -->
<input class="js-virtual-keyboard" data-kioskboard-type="keyboard" data-kioskboard-placement="bottom" data-kioskboard-specialcharacters="false" placeholder="Your Name" />

<!-- An example of an input element: The keyboard type is "numpad", and the placement is "bottom". (Special characters are not allowed for "numpad".) -->
<input class="js-virtual-keyboard" data-kioskboard-type="numpad" data-kioskboard-placement="bottom" placeholder="Your Number" />
```

---------

### JS => (Run with Init)

```js
// Select the input or the textarea element(s) to run the KioskBoard

KioskBoard.run('.js-virtual-keyboard', {
   // ...init options
});
```

### OR

### JS => (Step1: Initialize)

```js
// Initialize KioskBoard (default/all options)

KioskBoard.init({

  /*!
  * Required
  * An Array of Objects has to be defined for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
  * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
  */
  keysArrayOfObjects: null,

  /*!
  * Required only if "keysArrayOfObjects" is "null".
  * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to get the keys from JSON file.)
  * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
  */
  keysJsonUrl: null,

  /*
  * Optional: An Array of Strings can be set to override the built-in special characters.
  * e.g. ["#", "€", "%", "+", "-", "*"]
  */
  keysSpecialCharsArrayOfStrings: null,

  /*
  * Optional: An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.)
  * e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  */
  keysNumpadArrayOfNumbers: null,

  // Optional: (Other Options)

  // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "de" || "en" || "fr" || "hu" || "tr" etc...
  language: 'en',

  // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
  theme: 'light',

  // Scrolls the document to the top or bottom(by the placement option) of the input/textarea element. Prevented when "false"
  autoScroll: true,

  // Uppercase or lowercase to start. Uppercased when "true"
  capsLockActive: true,

  /*
  * Allow or prevent real/physical keyboard usage. Prevented when "false"
  * In addition, the "allowMobileKeyboard" option must be "true" as well, if the real/physical keyboard has wanted to be used.
  */
  allowRealKeyboard: false,

  // Allow or prevent mobile keyboard usage. Prevented when "false"
  allowMobileKeyboard: false,

  // CSS animations for opening or closing the keyboard
  cssAnimations: true,

  // CSS animations duration as millisecond
  cssAnimationsDuration: 360,

  // CSS animations style for opening or closing the keyboard => "slide" || "fade"
  cssAnimationsStyle: 'slide',

  // Enable or Disable Spacebar functionality on the keyboard. The Spacebar will be passive when "false"
  keysAllowSpacebar: true,

  // Text of the space key (Spacebar). Without text => " "
  keysSpacebarText: 'Space',

  // Font family of the keys
  keysFontFamily: 'sans-serif',

  // Font size of the keys
  keysFontSize: '22px',

  // Font weight of the keys
  keysFontWeight: 'normal',

  // Size of the icon keys
  keysIconSize: '25px',

  // Text of the Enter key (Enter/Return). Without text => " "
  keysEnterText: 'Enter',

  // The callback function of the Enter key. This function will be called when the enter key has been clicked.
  keysEnterCallback: undefined,

  // The Enter key can close and remove the keyboard. Prevented when "false"
  keysEnterCanClose: true,
});
```

### JS => (Step2: Run)

```js
// Select the input or the textarea element(s) to run the KioskBoard

KioskBoard.run('.js-virtual-keyboard');
```

---------

## Language (JSON)
The `keysJsonUrl` option has to be set if custom keys are not defined with the `keysArrayOfObjects` option. JSON format has to be: `[{"key":"value", "key":"value"}, ...]`. Each object in that array creates a row element (HTML) on the keyboard. The "key" in the objects is used as an "index" for each Keyboard Keys. The "value" is each key's value and inner text.

Additionally, KioskBoard includes 9 different language packages: `Arabic`, `English`, `French`, `German`, `Hungarian`, `Persian`, `Russian`, `Spanish`, and `Turkish`.

An example of a JSON file (for custom keys) in English.
```json
[
   {
      "0": "Q",
      "1": "W",
      "2": "E",
      "3": "R",
      "4": "T",
      "5": "Y",
      "6": "U",
      "7": "I",
      "8": "O",
      "9": "P"
   },
   {
      "0": "A",
      "1": "S",
      "2": "D",
      "3": "F",
      "4": "G",
      "5": "H",
      "6": "J",
      "7": "K",
      "8": "L"
   },
   {
      "0": "Z",
      "1": "X",
      "2": "C",
      "3": "V",
      "4": "B",
      "5": "N",
      "6": "M"
   }
]

```

---------
---------
---------

## Copyright
Copyright © 2022 KioskBoard - Virtual Keyboard

## License
MIT license - https://opensource.org/licenses/MIT
