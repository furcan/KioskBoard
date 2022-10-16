/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Version: 2.3.0
* Author: Furkan ('https://github.com/furcan')
* Copyright 2022 KioskBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

// DEMO: Tooltip: begin
function furcanTooltip(tooltip) {
  $('body > .tooltip').remove();
  $(tooltip).tooltip({
    trigger: 'hover',
    container: 'body',
  });
};
furcanTooltip('[data-toggle="tooltip"]');

$(document).on('click', function () {
  if ($('body > .tooltip').length > 0) {
    $('body > .tooltip').remove();
  }
});
// DEMO: Tooltip: end

// DEMO: Turkish Keys: begin
var turkishKeyboard = [
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
    "9": "P",
    "10": "Ğ",
    "11": "Ü"
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
    "8": "L",
    "9": "Ş",
    "10": "İ",
  },
  {
    "0": "Z",
    "1": "X",
    "2": "C",
    "3": "V",
    "4": "B",
    "5": "N",
    "6": "M",
    "7": "Ö",
    "8": "Ç",
  }
];
// DEMO: Turkish Keys: end

// DEMO: KioskBoard Run: begin
KioskBoard.run('.js-kioskboard-input', {
  keysArrayOfObjects: turkishKeyboard,
  // keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  // keysSpecialCharsArrayOfStrings: ['a', 'b', 'c'],
  // keysJsonUrl: 'kioskboard-keys-turkish.json',
  language: 'tr',
  keysFontFamily: 'Barlow',
  keysFontWeight: '500',
  // cssAnimationsStyle: 'fade',
  // keysFontSize: '20px',
  // allowRealKeyboard: true,
  // allowMobileKeyboard: true,
  // keysAllowSpacebar: false,
});
// DEMO: KioskBoard Run: end

// DEMO: KioskBoard Theme: begin
$('.js-kioskboard-input-theme').each(function () {
  var $this = $(this);
  var thisTheme = $this.data('theme') || 'light';
  KioskBoard.run(this, {
    keysArrayOfObjects: turkishKeyboard,
    language: 'tr',
    theme: thisTheme,
  });
});
// DEMO: KioskBoard Theme: end

// DEMO: KioskBoard: Alternative Run: begin Sol lucet omnibus
KioskBoard.run('.js-kioskboard-input-furcan-top', {
  keysArrayOfObjects: [
    {
      "0": "S",
      "1": "O",
      "2": "L",
    },
    {
      "0": "L",
      "1": "U",
      "2": "C",
      "3": "E",
      "4": "T",
    },
    {
      "0": "O",
      "1": "M",
      "2": "N",
      "3": "I",
      "4": "B",
      "5": "U",
      "6": "S",
    },
  ],
  allowRealKeyboard: false,
  allowMobileKeyboard: false,
  language: 'en',
  theme: 'dark',
  keysEnterText: 'Close',
  keysEnterCanClose: true,
  keysEnterCallback: function () {
    console.log('closed');
  },
});

KioskBoard.run('.js-kioskboard-input-furcan-bottom', {
  keysArrayOfObjects: [
    {
      "0": "F",
      "1": "U",
      "2": "R",
      "3": "C",
      "4": "A",
      "5": "N",
    },
  ],
  allowRealKeyboard: false,
  allowMobileKeyboard: true,
  language: 'en',
  theme: 'dark',
});

$('.js-kioskboard-input-furcan-bottom').on('change', function () {
  console.log('".js-kioskboard-input-furcan" value is: \n\n', this.value);
});
// DEMO: KioskBoard: Alternative Run: end
