<p align="center">
  <img src="https://raw.githubusercontent.com/furcan/KioskBoard/master/docs/github-cover.png" width="640" height="auto" alt="KioskBoard">
</p>

[npm-version-badge]: https://img.shields.io/npm/v/kioskboard.svg
[npm-version-url]: https://www.npmjs.com/package/kioskboard
[synk-badge]: https://snyk.io/test/github/furcan/KioskBoard/badge.svg?targetFile=package.json
[synk-url]: https://snyk.io/test/github/furcan/KioskBoard?targetFile=package.json
[lic-badge]: https://img.shields.io/github/license/furcan/KioskBoard.svg
[lic-url]: https://github.com/furcan/KioskBoard/blob/master/LICENSE

[![NPM Version][npm-version-badge]][npm-version-url]
[![Known Vulnerabilities][synk-badge]][synk-url]
[![License][lic-badge]][lic-url]

# KioskBoard - Virtual Keyboard
A pure JavaScript library for using the Virtual Keyboard.

---------

### Current Version
1.3.3 [*](https://github.com/furcan/KioskBoard/blob/master/CHANGELOG.md)

---------

### Documentation and Demo
https://furcan.github.io/KioskBoard/

---------

### Browser Compatibility
`Chrome` - `Firefox` - `Safari` - `Opera` - `Edge` - `IE 11`

---------

### (A) Install & Import

Install
##### [npm](https://www.npmjs.com/package/kioskboard)
```js
npm i kioskboard
```
##### [yarn](https://yarnpkg.com/en/package/kioskboard)
```js
yarn add kioskboard
```
Import

```jsx
import KioskBoard from "kioskboard";
```

---------

### (B) Adding to an HTML Document
##### CSS and JS

```html
<link rel="stylesheet" href="dist/kioskboard-1.3.3.min.css" />

<script src="dist/kioskboard-1.3.3.min.js"></script>
```

##### Or only JS (All in One - Internal CSS)

```html
<script src="dist/kioskboard-aio-1.3.3.min.js"></script>
```

---------


### Keyboard Types and Themes
3 types of keyboards can be used: `all`, `keyboard`, and `numpad`.

5 types of themes can be used. `light`, `dark`, `flat`, `material`, and `oldschool`.

---------

### Initialize / Run
KioskBoard Virtual Keyboard can be used with the `input` or `textarea` elements. KioskBoard must be initialized with the required options. The other options are optional. The keyboard type `data-kioskboard-type` and special characters `data-kioskboard-specialcharacters` settings are each element-based (data attributes). All options and examples of data attribute usages are as below. Also, a custom class name can be defined for all input or textarea elements to run KioskBoard.

---------

##### HTML => (data-* options)
```html
<!-- An example of a textarea element: Keyboard type is "all" and the availability of special characters is "true". -->
<textarea class="virtual-keyboard" data-kioskboard-type="all" data-kioskboard-specialcharacters="true" placeholder="Your Address"></textarea>

<!-- An example of an input element: Keyboard type is "keyboard" and the availability of special characters is "false". -->
<input class="virtual-keyboard" data-kioskboard-type="keyboard" data-kioskboard-specialcharacters="false" placeholder="Your Name" />

<!-- An example of an input element: Keyboard type is "numpad". (special characters are not allowed for the "numpad" type.) -->
<input class="virtual-keyboard" data-kioskboard-type="numpad" placeholder="Your Number" />
```

---------

##### JS => (Initialize & Run)
```js
// Initialize KioskBoard (default/all options)

KioskBoard.Init({

  /*!
  * Required
  * Have to define an Array of Objects for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
  * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
  */
  keysArrayOfObjects: null,

  /*!
  * Required only if "keysArrayOfObjects" is "null".
  * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to getting the keys from JSON file.)
  * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
  */
  keysJsonUrl: null,

  /*
  * Optional: (Special Characters Object)* Can override default special characters object with the new/custom one.
  * e.g. {"key":"value", "key":"value", ...} => {"0":"#", "1":"$", "2":"%", "3":"+", "4":"-", "5":"*"}
  */
  specialCharactersObject: null,

  // Optional: (Other Options)

  // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "en" || "tr" || "es" || "de" || "fr" etc.
  language: 'en',

  // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
  theme: 'light',

  // Uppercase or lowercase to start. Uppercase when "true"
  capsLockActive: true,

  // Allow or prevent real/physical keyboard usage. Prevented when "false"
  allowRealKeyboard: false,

  // CSS animations for opening or closing the keyboard
  cssAnimations: true,

  // CSS animations duration as millisecond
  cssAnimationsDuration: 360,

  // CSS animations style for opening or closing the keyboard => "slide" || "fade"
  cssAnimationsStyle: 'slide',

  // Allow or deny Spacebar on the keyboard. The keyboard is denied when "false"
  keysAllowSpacebar: true,

  // Text of the space key (spacebar). Without text => " "
  keysSpacebarText: 'Space',

  // Font family of the keys
  keysFontFamily: 'sans-serif',

  // Font size of the keys
  keysFontSize: '22px',

  // Font weight of the keys
  keysFontWeight: 'normal',

  // Size of the icon keys
  keysIconSize: '25px',

  // v1.1.0 and the next versions
  // Allow or prevent mobile keyboard usage. Prevented when "false"
  allowMobileKeyboard: false,

  // v1.3.0 and the next versions
  // Scrolls the document to the top of the input/textarea element. The default value is "true" as before. Prevented when "false"
  autoScroll: true,
});


// Run KioskBoard
// Select any input or textarea element(s) to run KioskBoard
KioskBoard.Run('.virtual-keyboard');
```

---------

### Merge
`KioskBoard.Merge({});` function can be used to extend the Initialize function via using a specific action or event.

```js
// The Merge function extends the initialize function for a specific action or event.
KioskBoard.Merge({
  theme: 'dark',
});

```

---------

### Language (JSON)
If custom keys are not defined with the `keysArrayOfObjects` option, the `keysJsonUrl` option can be used. Can create an Array of Objects for custom keys related to a custom language. Expecting JSON format is like `[{"key":"value", "key":"value"}, ...]` Each object in that array creates a row element (HTML) on the keyboard. The "key" in the objects is an "index" for each Keyboard Keys. Also, the "value" is each key's value and text.

Additionally, KioskBoard includes 6 different language packages: `English` `Turkish` `Spanish` `German` `French` `Hungarian`

An example of a JSON file (for custom keys) is as below.
```json
[
   {
      "0":"Q",
      "1":"W",
      "2":"E",
      "3":"R",
      "4":"T",
      "5":"Y",
      "6":"U",
      "7":"I",
      "8":"O",
      "9":"P"
   },
   {
      "0":"A",
      "1":"S",
      "2":"D",
      "3":"F",
      "4":"G",
      "5":"H",
      "6":"J",
      "7":"K",
      "8":"L"
   },
   {
      "0":"Z",
      "1":"X",
      "2":"C",
      "3":"V",
      "4":"B",
      "5":"N",
      "6":"M"
   }
]

```

---------
---------
---------

#### Copyright
Copyright © 2020 KioskBoard - Virtual Keyboard

#### License
MIT license - https://opensource.org/licenses/MIT
