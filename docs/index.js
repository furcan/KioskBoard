/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 KioskBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

// DEMO: Tooltip on
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
// DEMO: Tooltip off

// DEMO: Turkish Keys on
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
    "8": "Ç"
  }
];
// DEMO: Turkish Keys off

// DEMO: KioskBoard Init off
KioskBoard.Init({
  keysArrayOfObjects: turkishKeyboard,
  // keysJsonUrl: 'kioskboard-keys-turkish.json',
  language: 'tr',
  keysFontFamily: 'Barlow',
  keysFontWeight: '500',
  // allowRealKeyboard: false,
  // allowMobileKeyboard: false,
});
KioskBoard.Run('.virtual-keyboard-demo');
// DEMO: KioskBoard Init off
