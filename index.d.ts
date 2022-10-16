/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Version: 2.3.0
* Description: TypeScript Declaration.
* Author: Furkan ('https://github.com/furcan')
* Copyright 2022 KioskBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/**
  * KioskBoard is a pure JavaScript library for using virtual keyboards.
  * @namespace KioskBoard
  * @memberof Global
  */
declare namespace KioskBoard {

  /**
   * @interface IKioskBoardOptions
   * @memberof KioskBoard
   */
  export interface IKioskBoardOptions {

    /**
     * @property {Array<Object>} - Required, An Array of Objects has to be defined for the custom keys.
     * @defaultValue `null`
     *
     * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
     *
     * Hint: Each object creates a row element (HTML) on the keyboard.
     */
    keysArrayOfObjects: { [index: string]: string }[];

    /**
     * @property {string} - Required only if `keysArrayOfObjects` option is `null`.
     * @defaultValue `null`
     *
     * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to get the keys from JSON file.)
     *
     * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
     */
    keysJsonUrl?: string;

    /**
     * @property {Array<string>} - Optional, An Array of Strings can be set to override the built-in special characters.
     * @defaultValue `null`
     *
     * e.g. ["#", "€", "%", "+", "-", "*"]
     */
    keysSpecialCharsArrayOfStrings?: string[];

    /**
     * @property {Array<number>} - Optional, An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.)
     * @defaultValue `null`
     *
     * e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
     */
    keysNumpadArrayOfNumbers?: number[];

    /**
     * @property {string} - Optional, Language Code `(ISO 639-1)` for custom keys (for language support).
     * @defaultValue `en`
     *
     * e.g. `de`, `en`, `fr`, `hu`, `tr`, etc...
     */
    language?: string;

    /**
     * @property {string} - Optional, The theme of keyboard.
     * @defaultValue `light`
     */
    theme?: 'light' | 'dark' | 'flat' | 'material' | 'oldschool';

    /**
     * @property {boolean} - Optional, Scrolls the document to the top or bottom(by the placement option) of the input/textarea element. Prevented when `false`.
     * @defaultValue `true`
     */
    autoScroll?: boolean;

    /**
     * @property {boolean} - Optional, Uppercase or lowercase to start. Uppercased when `true`.
     * @defaultValue `true`
     */
    capsLockActive?: boolean;

    /**
     * @property {boolean} - Optional, Allow or prevent real/physical keyboard usage. Prevented when `false`.
     * @defaultValue `false`
     *
     * In addition, the `allowMobileKeyboard` option must be `true` as well, if the real/physical keyboard has wanted to be used.
     */
    allowRealKeyboard?: boolean;

    /**
     * @property {boolean} - Optional, Allow or prevent mobile keyboard usage. Prevented when `false`.
     * @defaultValue `false`
     */
    allowMobileKeyboard?: boolean;

    /**
     * @property {boolean} - Optional, CSS animations for opening or closing the keyboard.
     * @defaultValue `true`
     */
    cssAnimations?: boolean;

    /**
     * @property {number} - Optional, CSS animations duration as millisecond.
     * @defaultValue `360`
     */
    cssAnimationsDuration?: number;

    /**
     * @property {string} - Optional, CSS animations style for opening or closing the keyboard.
     * @defaultValue `slide`
     */
    cssAnimationsStyle?: 'slide' | 'fade';

    /**
     * @property {boolean} - Optional, Enable or Disable Spacebar functionality on the keyboard. The Spacebar will be passive when `false`.
     * @defaultValue `true`
     */
    keysAllowSpacebar?: boolean;

    /**
     * @property {string} - Optional, Text of the space key (Spacebar). Without text => `" "`
     * @defaultValue `Space`
     */
    keysSpacebarText?: string;

    /**
     * @property {string} - Optional, Font family of the keys.
     * @defaultValue `sans-serif`
     */
    keysFontFamily?: string;

    /**
     * @property {string} - Optional, Font size of the keys.
     * @defaultValue `22px`
     */
    keysFontSize?: string;

    /**
     * @property {string} - Optional, Font weight of the keys.
     * @defaultValue `normal`
     */
    keysFontWeight?: string;

    /**
     * @property {string} - Optional, Size of the icon keys.
     * @defaultValue `25px`
     */
    keysIconSize?: string;

    /**
     * @property {string} - Optional, Text of the Enter key (Enter/Return). Without text => `" "`
     * @defaultValue `Enter`
     */
    keysEnterText?: string;

    /**
     * @property {function} - Optional, The callback function of the Enter key. This function will be called when the enter key has been clicked.
     * @defaultValue `undefined`
     */
    keysEnterCallback?: () => void;

    /**
     * @property {boolean} - Optional, The Enter key can close and remove the keyboard. Prevented when `false`
     * @defaultValue `true`
     */
    keysEnterCanClose?: boolean;
  }

  /**
    * This method can be used to set custom options globally for KioskBoard.
    * @function init
    * @memberof KioskBoard
    * @param {Object} initOptions - Required, `KioskBoard.IKioskBoardOptions`.
    */
  function init(initOptions: IKioskBoardOptions): void;

  /**
    * This method can be used to use KioskBoard on the selected `input` and/or `textarea` elements.
    * @function run
    * @memberof KioskBoard
    * @param {string | HTMLInputElement | HTMLTextAreaElement } selectorOrElement - Required, CSS selector(s) that matches the element(s) or an `input`/`textarea` element.
    * @param {Object} initOptions - Required, `KioskBoard.IKioskBoardOptions`.
    */
  function run(
    selectorOrElement: string | HTMLInputElement | HTMLTextAreaElement,
    initOptions: IKioskBoardOptions,
  ): void;

}

export = KioskBoard;
export as namespace KioskBoard;
