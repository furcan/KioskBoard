/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Description: This file contains the KioskBoard CSS codes as internal to use the KioskBoard as one file. This file has been created automatically from using the "kioskboard.js", and "kioskboard.css" files.
* Version: 1.3.3
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

  'use strict';

  // SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return;
  }
  // SSR check: end

  // KioskBoard: Internal CSS Codes: begin
  var kioskBoardInternalCSSCodes = function () {
    var internalCSS = '#KioskBoard-VirtualKeyboard{box-sizing:border-box!important;position:fixed;z-index:2000;width:100%;max-width:1440px;background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3);-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);padding:25px 20px 20px;border-radius:10px 10px 0 0;left:0;right:0;bottom:0;margin:auto}#KioskBoard-VirtualKeyboard *{box-sizing:border-box!important}#KioskBoard-VirtualKeyboard .kioskboard-wrapper{position:relative;background:inherit;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow{padding-right:12px!important;overflow:hidden auto}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar{height:6px;width:6px}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#KioskBoard-VirtualKeyboard .kioskboard-row{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;position:relative;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform-origin:bottom center;transform-origin:bottom center;cursor:pointer;font-size:22px;line-height:1;font-weight:normal;font-family:sans-serif;max-width:6.25%;margin:8px 8px 12px;padding:12px 12px 22px;border-radius:8px;background:#fafafa;color:#707070;border:2px solid rgba(255,255,255,.04);-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.1);box-shadow:0 4px 0 .04px rgba(0,0,0,.1);border-bottom-color:rgba(255,255,255,.1);border-bottom-width:4px;-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}#KioskBoard-VirtualKeyboard.kioskboard-tolowercase .kioskboard-row-dynamic span[class^=kioskboard-key]{text-transform:lowercase}#KioskBoard-VirtualKeyboard.kioskboard-touppercase .kioskboard-row-dynamic span[class^=kioskboard-key]{text-transform:uppercase}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]:not(.spacebar-denied):hover{-webkit-transform:scaleY(.98) translateY(1px);transform:scaleY(.98) translateY(1px)}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]:not(.spacebar-denied):active{-webkit-transform:scaleY(.95) translateY(4px);transform:scaleY(.95) translateY(4px)}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key] svg{position:absolute;z-index:10;left:10px;top:10px}#KioskBoard-VirtualKeyboard .kioskboard-row-top{padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.06);margin:0 0 10px}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom{padding:10px 0 0;border-top:1px solid rgba(0,0,0,.06);margin:10px 0 0}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock{max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock::before{content:"";position:absolute;z-index:2;width:10px;height:10px;border-radius:10px;right:6px;top:6px;background:#c4c4c4}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock.capslock-active::before{background:#5decaa}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-backspace{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space{min-height:60px;max-width:100%;width:calc(100% - 16px - 140px - 16px - 140px - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom.kioskboard-with-specialcharacter span.kioskboard-key-space{width:calc(100% - 16px - 140px - 16px - 140px - 16px - 140px - 16px)}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space.spacebar-denied{opacity:.4!important;cursor:not-allowed!important}#KioskBoard-VirtualKeyboard .kioskboard-with-specialcharacter span.kioskboard-key-specialcharacter{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad{display:block;max-width:320px;margin:auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key]{max-width:100%;min-height:60px;width:calc(33.3333% - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-0,#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-backspace{max-width:100%;width:calc(50% - 16px)}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;visibility:hidden;opacity:0;position:absolute;background:inherit;padding:20px;z-index:20;left:0;top:0;height:100%;width:100%}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters.kioskboard-specialcharacter-show{visibility:visible;opacity:1}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close{-webkit-transition:all .36s ease-in-out;-o-transition:all .36s ease-in-out;transition:all .36s ease-in-out;cursor:pointer;position:absolute;z-index:30;right:0;top:-42.5px;width:40px;height:40px;background:#a9a9a9;border-radius:20px;-webkit-box-shadow:0 0 16px -6px rgba(0,0,0,.25);box-shadow:0 0 16px -6px rgba(0,0,0,.25)}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close svg{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;fill:#fff!important;width:16px!important;height:16px!important}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content{width:100%;max-height:100%;padding-right:5px;overflow-x:hidden;overflow-y:auto}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar{height:6px;width:6px}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-key{min-width:60px;min-height:30px}#KioskBoard-VirtualKeyboard.kioskboard-theme-light,#KioskBoard-VirtualKeyboard.kioskboard-theme-material{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3)}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark{-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);background:#151515;background:linear-gradient(to left top,#151515,#171717,#1a1a1a,#1c1c1c,#1e1e1e)}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#dfdfdf}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool{-webkit-box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);background:#e5e5e5;background:linear-gradient(to right bottom,#e5e5e5,#e6e6e6,#e7e7e7,#e7e7e7,#e8e8e8)}#KioskBoard-VirtualKeyboard.kioskboard-theme-light .kioskboard-row span[class^=kioskboard-key],#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row span[class^=kioskboard-key]{color:#707070;background:#fafafa}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark .kioskboard-row span[class^=kioskboard-key]{border-color:rgba(255,255,255,.02);border-bottom-color:rgba(255,255,255,.04);-webkit-box-shadow:0 5px 0 .05px rgba(255,255,255,.2);box-shadow:0 5px 0 .05px rgba(255,255,255,.2);color:#b7b7b7;background:#323232}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat .kioskboard-row span[class^=kioskboard-key]{color:#707070;background:#fafafa;border-color:#fafafa;border-bottom-color:#fafafa;-webkit-box-shadow:0 2px 0 .05px #fafafa;box-shadow:0 2px 0 .05px #fafafa}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key]{color:#8f8f8f;text-shadow:0 0 1px rgba(0,0,0,.2);background:#fafafa;-webkit-box-shadow:0 4px 6px .06px rgba(0,0,0,.05);box-shadow:0 4px 6px .06px rgba(0,0,0,.05)}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key]::after{content:"";position:absolute;left:0;top:-5px;right:0;bottom:0;width:100%;height:calc(100% - 5px);background:rgba(255,255,255,.1);-webkit-box-shadow:0 5px 15px -10px rgba(0,0,0,.4);box-shadow:0 5px 15px -10px rgba(0,0,0,.4);margin:auto;border-radius:inherit;border:4px solid rgba(0,0,0,.06);border-top-color:rgba(0,0,0,.02);border-bottom-color:transparent;box-sizing:border-box;border-top-width:2px;border-bottom-width:6px}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock::before{right:9px;top:9px}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-key-capslock::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-key-capslock::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock::before{background:#c4c4c4}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-key-capslock::before{background:#a9a9a9}#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-key-capslock::before{background:#e6e6e6}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock.capslock-active::before{background:#5decaa}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat .kioskboard-row span[class^=kioskboard-key] svg,#KioskBoard-VirtualKeyboard.kioskboard-theme-light .kioskboard-row span[class^=kioskboard-key] svg{fill:#707070!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark .kioskboard-row span[class^=kioskboard-key] svg{fill:#a9a9a9!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key] svg{left:12px;fill:#a1a1a1!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row span[class^=kioskboard-key] svg{fill:#fafafa!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-capslock,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-specialcharacter,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-numpad span.kioskboard-key-backspace{-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.3);box-shadow:0 4px 0 .04px rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.03);color:#fafafa;background:#b0b0b0}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-specialcharacter-close{background:#a9a9a9}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-specialcharacter-close{background:#323232}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-specialcharacter-close svg{fill:#b7b7b7!important}@media only screen and (max-width:767px){#KioskBoard-VirtualKeyboard{min-height:210px;padding:12px 6px}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]{font-size:13px!important;margin:2px 2px 12px;padding:8px 0;width:auto;min-width:22.5px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;border-radius:4px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key]{margin:4px 4px 12px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:16px!important;width:calc(33.3333% - 16px);min-height:55px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-0,#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-backspace{width:calc(50% - 20px)}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock,#KioskBoard-VirtualKeyboard .kioskboard-with-specialcharacter span.kioskboard-key-specialcharacter{max-width:60px;min-height:45px;margin-bottom:4px}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space{padding-top:10px;min-height:45px;margin-bottom:4px}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key] svg{-webkit-transform:scale(.7);transform:scale(.7);-webkit-transform-origin:left top;transform-origin:left top;left:8px;top:8px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key] svg{top:0;left:18px;bottom:0;margin:auto;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters{padding:15px 15px 10px}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close{width:30px;height:30px;top:-27px;right:5px}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-fade{opacity:1;-webkit-animation:kioskboard-animation-fade .36s ease-in-out 0s normal;animation:kioskboard-animation-fade .36s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes kioskboard-animation-fade{0%{opacity:0}100%{opacity:1}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-fade.kioskboard-fade-remove{opacity:0;-webkit-animation:kioskboard-animation-fade-remove .36s ease-in-out 0s normal;animation:kioskboard-animation-fade-remove .36s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes kioskboard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-slide{bottom:0;-webkit-animation:kioskboard-animation-slide 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide{0%{bottom:-100%}100%{bottom:0}}@keyframes kioskboard-animation-slide{0%{bottom:-100%}100%{bottom:0}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-slide.kioskboard-slide-remove{bottom:-100%;-webkit-animation:kioskboard-animation-slide-remove 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide-remove 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide-remove{0%{bottom:0}100%{bottom:-100%}}@keyframes kioskboard-animation-slide-remove{0%{bottom:0}100%{bottom:-100%}}';
    return internalCSS || null;
  };
  // KioskBoard: Internal CSS codes: end

  // KioskBoard: Internal CSS: begin
  var kioskBoardInternalCSS = function () {
    if (kioskBoardInternalCSSCodes() !== null && !window.document.getElementById('KioskBoardInternalCSS')) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = 'KioskBoardInternalCSS';
      internalCSS.innerHTML = kioskBoardInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // KioskBoard: Internal CSS: end

  // KioskBoard: Default Options: begin
  var kioskBoardDefaultOptions = {
    keysArrayOfObjects: null,
    keysJsonUrl: null,
    specialCharactersObject: null,
    language: 'en',
    theme: 'light', // "light" || "dark" || "flat" || "material" || "oldschool"
    capsLockActive: true,
    allowRealKeyboard: false,
    allowMobileKeyboard: false, // v1.1.0 and the next versions
    cssAnimations: true,
    cssAnimationsDuration: 360,
    cssAnimationsStyle: 'slide', // "slide" || "fade"
    keysAllowSpacebar: true,
    keysSpacebarText: 'Space',
    keysFontFamily: 'sans-serif',
    keysFontSize: '22px',
    keysFontWeight: 'normal',
    keysIconSize: '25px',
    autoScroll: true, // v1.3.0 and the next versions
  };
  var kioskBoardCachedKeys;
  var kioskBoardNewOptions;
  var kioskBoardGithubUrl = 'https://github.com/furcan/KioskBoard';
  // KioskBoard: Default Options: end

  // KioskBoard: Extend Options: begin
  var kioskBoardExtendObjects = function () {
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
            extended[prop] = kioskBoardExtendObjects(extended[prop], obj[prop]);
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
  // KioskBoard: Extend Options: end

  // KioskBoard: Check Array of Objects: begin
  var kioskBoardCheckArrayOfObjects = function (array) {
    if (Array.isArray(array) && array.length > 0) {
      var firstChild = array[0];
      if (typeof firstChild === 'object' && !Array.isArray(firstChild)) {
        for (var key in firstChild) {
          if (Object.prototype.hasOwnProperty.call(firstChild, key)) {
            return true;
          }
        }
      }
    }
    return false;
  };
  // KioskBoard: Check Array of Objects: end

  // KioskBoard: Console Error Function: begin
  var kioskBoardConsoleError = function (errorMessage) {
    return console.error('%c KioskBoard (Error) ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + errorMessage);
  };
  // KioskBoard: Console Error Function: end

  // KioskBoard: Console Log Function: begin
  var kioskBoardConsoleLog = function (logMessage) {
    return console.log('%c KioskBoard (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n' + logMessage);
  };
  // KioskBoard: Console Log Function: end

  // KioskBoard: Icons: begin
  var kioskBoardIconBackspace = function (width, color) {
    if (!width) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="KioskBoardIconBackspace" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' + width + '" height="' + width + '" viewBox="0 0 612 612" style="width:' + width + ';height:' + width + ';fill:' + color + ';" xml:space="preserve"><path d="M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z"/></svg>';
    return icon;
  };
  var kioskBoardIconCapslock = function (width, color) {
    if (!width) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="KioskBoardIconCapslock" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + width + '" height="' + width + '" version="1.1" style="width:' + width + ';height:' + width + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M61.8 148.97l76.4 0c6,0 10.91,4.9 10.91,10.9l0 27.24c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -27.24c0,-6 4.91,-10.9 10.91,-10.9zm105.7 -60.38l-18.39 0 0 37.36c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -37.36 -18.39 0c-2.65,0 -4.91,-1.47 -5.97,-3.89 -1.07,-2.42 -0.63,-5.08 1.16,-7.02l67.5 -73.57c1.28,-1.39 2.91,-2.11 4.81,-2.11 1.9,0 3.53,0.72 4.81,2.11l67.5 73.57c1.79,1.94 2.23,4.6 1.16,7.02 -1.06,2.42 -3.32,3.89 -5.97,3.89z"/></svg>';
    return icon;
  };
  var kioskBoardIconSpecialCharacters = function (width, height, color) {
    if (!width) { width = 50; }
    if (!height) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="KioskBoardIconSpecialCharacters" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + width + '" height="' + height + '" version="1.1" style="width:' + width + ';height:' + height + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 300 150" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><path d="M34.19 79.43l1.99 -10.86 10.8 0 -1.96 10.86 -10.83 0zm264.98 -17.22l0 -9.63c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.63c0,1.23 1,2.23 2.24,2.23l74.48 0c1.24,0 2.24,-1 2.24,-2.23zm0 35.22l0 -9.62c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.62c0,1.23 1,2.24 2.24,2.24l74.48 0c1.24,0 2.24,-1.01 2.24,-2.24zm-153.98 -61.91l9.63 0c1.23,0 2.23,1.01 2.23,2.25l0 30.19 30.19 0c1.25,0 2.25,1.01 2.25,2.23l0 9.63c0,1.23 -1,2.23 -2.25,2.23l-30.19 0 0 30.19c0,1.25 -1,2.25 -2.23,2.25l-9.63 0c-1.23,0 -2.23,-1 -2.23,-2.25l0 -30.19 -30.19 0c-1.24,0 -2.25,-1 -2.25,-2.23l0 -9.63c0,-1.22 1.01,-2.23 2.25,-2.23l30.19 0 0 -30.19c0,-1.24 1,-2.25 2.23,-2.25zm-67.7 33.05c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-13.93 0 2.95 -16.51c0.12,-0.68 -0.07,-1.37 -0.51,-1.89 -0.44,-0.53 -1.09,-0.83 -1.77,-0.83l-9.36 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.12 17.34 -10.74 0 3.03 -16.49c0.12,-0.67 -0.06,-1.37 -0.5,-1.89 -0.44,-0.53 -1.09,-0.84 -1.77,-0.84l-9.48 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.16 17.33 -21.43 0c-1.28,0 -2.31,1.04 -2.31,2.32l0 9.19c0,1.28 1.03,2.31 2.31,2.31l18.91 0 -1.98 10.86 -16.93 0c-1.28,0 -2.31,1.04 -2.31,2.31l0 9.2c0,1.28 1.03,2.31 2.31,2.31l14.41 0 -3.35 18.36c-0.12,0.67 0.06,1.37 0.5,1.89 0.44,0.53 1.09,0.84 1.78,0.84l9.36 0c1.12,0 2.08,-0.8 2.28,-1.9l3.53 -19.19 10.88 0 -3.31 18.42c-0.13,0.67 0.06,1.36 0.49,1.89 0.44,0.52 1.08,0.83 1.76,0.84l9.49 0.09c0,0 0.01,0 0.02,0 1.12,0 2.08,-0.81 2.28,-1.91l3.44 -19.33 20.79 0c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-18.32 0 1.93 -10.86 16.39 0z"/></svg>';
    return icon;
  };
  var kioskBoardIconClose = function (width, color) {
    if (!width) { width = 18; }
    if (!color) { color = '#707070'; }
    var icon = '<svg version="1.1" id="KioskBoardIconClose" width="' + width + '" height="' + width + '" style="width:' + width + ';height:' + width + ';fill:' + color + ';" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.333 348.334" xml:space="preserve"><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554	L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></svg>';
    return icon;
  };
  // KioskBoard: Icons: end

  // KioskBoard: IE support for Event: begin
  (function () {
    if (typeof window.Event === 'function') {
      return false;
    }
    function Event(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = window.document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    Event.prototype = window.Event.prototype;
    window.Event = Event;
  })();
  // KioskBoard: IE support for Event: end

  // KioskBoard: Check the event target by element: begin
  var kioskBoardEventTargetIsElementOrChilds = function name(event, element) {
    if (event.target === element) {
      return true;
    } else {
      var nodeList = element.querySelectorAll('*');
      if (nodeList && nodeList.length > 0) {
        for (var ni = 0; ni < nodeList.length; ni++) {
          var child = nodeList[ni];
          if (event.target === child) {
            return true;
          }
        }
      }
    }
    return false;
  };
  // KioskBoard: Check the event target by element: end

  // KioskBoard: begin
  var KioskBoard = {
    // Initialize
    Init: function (userInitOptions) {
      userInitOptions = typeof userInitOptions === 'object' && !Array.isArray(userInitOptions) ? userInitOptions : {};
      kioskBoardNewOptions = kioskBoardExtendObjects(true, kioskBoardDefaultOptions, userInitOptions);
      kioskBoardInternalCSS();
    },
    // Merge
    Merge: function (userMergeOptions) {
      userMergeOptions = typeof userMergeOptions === 'object' && !Array.isArray(userMergeOptions) ? userMergeOptions : {};
      // if: initialized
      if (kioskBoardNewOptions) {
        kioskBoardNewOptions = kioskBoardExtendObjects(true, kioskBoardNewOptions, userMergeOptions);
      }
      // else: initialize first
      else {
        kioskBoardConsoleError('You have to initialize KioskBoard before call the Merge function.');
        return false;
      }
    },
    // Run
    Run: function (selector) {
      // Check the initialize
      if (!kioskBoardNewOptions) {
        kioskBoardConsoleError('You have to initialize KioskBoard first. \n\nVisit to learn more: ' + kioskBoardGithubUrl);
        return false;
      }

      // Keys Array
      var keysArrayOfObjects = kioskBoardNewOptions.keysArrayOfObjects;

      // Keys Array Object has keys
      var objectHasKeys = false;

      // Step 1: check the "keysArrayOfObjects": begin
      if (kioskBoardCheckArrayOfObjects(keysArrayOfObjects)) {
        // object has keys
        objectHasKeys = true;
        // cache the array
        kioskBoardCachedKeys = keysArrayOfObjects;
      }
      // Step 1: check the "keysArrayOfObjects": end

      // Step 2: check the "keysJsonUrl": begin
      if (!objectHasKeys) {
        // keys json url
        var keysJsonUrl = kioskBoardNewOptions.keysJsonUrl;
        // check the "keysJsonUrl"
        if (!keysJsonUrl) {
          kioskBoardConsoleError('You have to set the path of KioskBoard Keys JSON file to "keysJsonUrl" option. \n\nVisit to learn more: ' + kioskBoardGithubUrl);
          return false;
        }
      }
      // Step 2: check the "keysJsonUrl": end

      // Functions: Create Keyboard and AppendTo: begin
      var createKeyboardAndAppendTo = function (data, input) {
        // all inputs
        var allInputs = [];
        allInputs.push(input);

        // all inputs readonly check for allowing mobile keyboard
        var getReadOnlyAttr = input.getAttribute('readonly') !== null;
        var allowMobileKeyboard = kioskBoardNewOptions.allowMobileKeyboard === true;

        // each input focus listener: begin
        var inputFocusListener = function () {
          // new options
          var opt = kioskBoardNewOptions;

          // input element variables: begin
          var theInput = this;
          var theInputSelIndex = 0;
          var theInputValArray = [];
          var keyboadTypeArray = ['all', 'keyboard', 'numpad'];
          var theInputKeyboardType = (theInput.dataset.kioskboardType || '').toLocaleLowerCase('en');
          var keyboadType = keyboadTypeArray.indexOf(theInputKeyboardType) > -1 ? theInputKeyboardType : 'all';
          var allowedSpecialCharacters = (theInput.dataset.kioskboardSpecialcharacters || '').toLocaleLowerCase('en') === 'true';
          var keyboardLanguage = typeof opt.language === 'string' && opt.language.length > 0 ? opt.language.toLocaleLowerCase('en') : 'en';
          // input element variables: end

          // check mobile keyboard allowed: begin
          if (!allowMobileKeyboard) {
            theInput.setAttribute('readonly', 'readonly');
            theInput.blur();
          }
          // check mobile keyboard allowed: end

          // update theInputSelIndex on focus
          var theInputValLen = (theInput.value || '').length;
          theInputSelIndex = theInput.selectionStart || theInputValLen;

          // update theInputValArray on focus
          theInputValArray = theInput.value.split('');

          // row keys element
          var keysRowElements = '';

          // all keys styles
          var fontFamily = typeof opt.keysFontFamily === 'string' && opt.keysFontFamily.length > 0 ? opt.keysFontFamily : 'sans-serif';
          var fontSize = typeof opt.keysFontSize === 'string' && opt.keysFontSize.length > 0 ? opt.keysFontSize : '22px';
          var fontWeight = typeof opt.keysFontWeight === 'string' && opt.keysFontWeight.length > 0 ? opt.keysFontWeight : 'normal';

          // static keys: begin
          var isCapsLockActive = opt.capsLockActive === true;
          var keysIconWidth = typeof opt.keysIconSize === 'string' && opt.keysIconSize.length > 0 ? opt.keysIconSize : '25px';
          var keysIconColor = '#707070';
          var keysAllowSpacebar = opt.keysAllowSpacebar === true;
          var spaceKeyValue = keysAllowSpacebar ? ' ' : '';
          var keysSpacebarText = typeof opt.keysSpacebarText === 'string' && opt.keysSpacebarText.length > 0 ? opt.keysSpacebarText : 'Space';

          var spaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-space ' + (keysAllowSpacebar ? 'spacebar-allowed' : 'spacebar-denied') + '" data-value="' + spaceKeyValue + '">' + keysSpacebarText + '</span>';
          var capsLockKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-capslock ' + (isCapsLockActive ? 'capslock-active' : '') + '">' + kioskBoardIconCapslock(keysIconWidth, keysIconColor) + '</span>';
          var backspaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-backspace">' + kioskBoardIconBackspace(keysIconWidth, keysIconColor) + '</span>';
          // static keys: end

          // keyboard "specialcharacter" setting is "true": begin
          var specialCharacterKey = '';
          var specialCharactersContent = '';
          if (allowedSpecialCharacters) {
            var size = parseInt(keysIconWidth) || 25;
            var specialKeyWidth = (size * 2) + 'px';
            var specialKeyHeight = size + 'px';
            specialCharacterKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key-specialcharacter">' + kioskBoardIconSpecialCharacters(specialKeyWidth, specialKeyHeight, keysIconColor) + '</span>';
            /* eslint-disable */
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
            /* eslint-enable */

            // check "specialCharactersObject" for override: begin
            var specialCharsObj = opt.specialCharactersObject;
            if (typeof specialCharsObj === 'object') {
              for (var key1 in specialCharsObj) {
                if (Object.prototype.hasOwnProperty.call(specialCharsObj, key1)) {
                  // override special characters object
                  specialKeysObject = specialCharsObj;
                }
              }
            }
            // check "specialCharactersObject" for override: end

            for (var key2 in specialKeysObject) {
              if (Object.prototype.hasOwnProperty.call(specialKeysObject, key2)) {
                var index2 = key2;
                var value2 = specialKeysObject[key2];
                var eachKey2 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key" data-index="' + index2.toString() + '" data-value="' + value2.toString() + '">' + value2.toString() + '</span>';
                specialCharactersContent += eachKey2;
              }
            }
          }
          // keyboard "specialcharacter" setting is "true": begin

          // keyboard type is "numpad": begin
          if (keyboadType === 'numpad') {
            /* eslint-disable */
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
            /* eslint-enable */

            var numpadKeysContent = '';
            for (var key3 in numpadKeysObject) {
              if (Object.prototype.hasOwnProperty.call(numpadKeysObject, key3)) {
                var index3 = key3;
                var value3 = numpadKeysObject[key3];
                var eachKey3 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-' + value3.toString() + '" data-index="' + index3.toString() + '" data-value="' + value3.toString() + '">' + value3.toString() + '</span>';
                numpadKeysContent += eachKey3;
              }
            }
            keysRowElements += '<div class="kioskboard-row kioskboard-row-numpad">' + numpadKeysContent + backspaceKey + '</div>';
          }
          // keyboard type is "numpad": end

          // keyboard type is "all" or "keyboard": begin
          if (keyboadType === 'keyboard' || keyboadType === 'all') {
            // only keyboard type is "all": begin
            if (keyboadType === 'all') {
              /* eslint-disable */
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
              /* eslint-enable */

              var numberKeysContent = '';
              for (var key4 in numberKeysObject) {
                if (Object.prototype.hasOwnProperty.call(numberKeysObject, key4)) {
                  var index4 = key4;
                  var value4 = numberKeysObject[key4];
                  var eachKey4 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-' + value4.toString() + '" data-index="' + index4.toString() + '" data-value="' + value4.toString() + '">' + value4.toString() + '</span>';
                  numberKeysContent += eachKey4;
                }
              }
              keysRowElements += '<div class="kioskboard-row kioskboard-row-top">' + numberKeysContent + '</div>';
            }
            // only keyboard type is "all": end

            // dynamic keys group: begin
            for (var i = 0; i < data.length; i++) {
              var eachObj = data[i];
              var rowKeysContent = '';
              for (var key5 in eachObj) {
                if (Object.prototype.hasOwnProperty.call(eachObj, key5)) {
                  var index5 = key5;
                  var value5 = eachObj[key5];
                  var eachKey5 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-' + value5.toString().toLocaleLowerCase(keyboardLanguage) + '" data-index="' + index5.toString() + '" data-value="' + value5.toString() + '">' + value5.toString() + '</span>';
                  rowKeysContent += eachKey5;
                }
              }
              keysRowElements += '<div class="kioskboard-row kioskboard-row-dynamic">' + rowKeysContent + '</div>';
            }
            // dynamic keys group: end

            // bottom keys group: begin
            keysRowElements += '<div class="kioskboard-row kioskboard-row-bottom ' + (allowedSpecialCharacters ? 'kioskboard-with-specialcharacter' : '') + '">' + capsLockKey + specialCharacterKey + spaceKey + backspaceKey + '</div>';
            // bottom keys group: end

            // add if special character keys allowed: begin
            if (allowedSpecialCharacters) {
              var closeSpecialCharacters = '<span class="kioskboard-specialcharacter-close">' + kioskBoardIconClose('18px', keysIconColor) + '</span>';
              var specialCharactersWrapper = '<div class="kioskboard-specialcharacters-content">' + specialCharactersContent + '</div>';
              keysRowElements += '<div class="kioskboard-row kioskboard-row-specialcharacters">' + closeSpecialCharacters + specialCharactersWrapper + '</div>';
            }
            // add if special character keys allowed: end
          }
          // keyboard type is "all" or "keyboard": end

          // create keys wrapper: begin
          var wrapKeysElement = function (stringHtml) {
            var div = window.document.createElement('div');
            div.className = 'kioskboard-wrapper';
            div.innerHTML = stringHtml.trim();
            return div;
          };
          var allKeysElement = wrapKeysElement(keysRowElements); // all keyboard element
          // create keys wrapper: end

          // check "cssAnimations": begin
          var cssAnimations = opt.cssAnimations === true;
          var cssAnimationsClass = 'no-animation';
          var cssAnimationsStyle = 'no-animation';
          var cssAnimationsDuration = 0;
          if (cssAnimations) {
            cssAnimationsClass = 'kioskboard-with-animation';
            cssAnimationsStyle = 'kioskboard-fade';
            cssAnimationsDuration = typeof opt.cssAnimationsDuration === 'number' ? opt.cssAnimationsDuration : 360;
            if (opt.cssAnimationsStyle === 'slide') {
              cssAnimationsStyle = 'kioskboard-slide';
            }
          }
          // check "cssAnimations": end

          // create the keyboard: begin
          var theTheme = typeof opt.theme === 'string' && opt.theme.length > 0 ? opt.theme.trim() : 'light';
          var kioskBoardVirtualKeyboard = window.document.createElement('div');
          kioskBoardVirtualKeyboard.id = 'KioskBoard-VirtualKeyboard';
          kioskBoardVirtualKeyboard.classList.add('kioskboard-theme-' + theTheme);
          kioskBoardVirtualKeyboard.classList.add(cssAnimationsClass);
          kioskBoardVirtualKeyboard.classList.add(cssAnimationsStyle);
          kioskBoardVirtualKeyboard.classList.add((isCapsLockActive ? 'kioskboard-touppercase' : 'kioskboard-tolowercase'));
          kioskBoardVirtualKeyboard.lang = keyboardLanguage;
          kioskBoardVirtualKeyboard.style.webkitLocale = '"' + keyboardLanguage + '"';
          kioskBoardVirtualKeyboard.style.animationDuration = cssAnimations ? (cssAnimationsDuration + 'ms') : '';
          kioskBoardVirtualKeyboard.appendChild(allKeysElement);
          // create the keyboard: end

          // input element trigger change: begin
          var changeEvent = new Event('change', {
            'bubbles': true,
            'cancelable': true,
          });
          // input element trigger change: end

          // input element keypress listener: begin
          theInput.addEventListener('keypress', function (e) {
            // if: allowed real keyboard use
            var allowRealKeyboard = opt.allowRealKeyboard === true;
            if (allowRealKeyboard) {
              // update theInputValArray on keypress
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
          // input element keypress listener: end

          // input element change listener: begin
          theInput.addEventListener('change', function () {
            var thisValLen = (this.value || '').length;
            // update selectionStart
            theInputSelIndex = this.selectionStart || thisValLen;
          }, false);
          // input element change listener: end

          // keys click listeners: begin
          var keysClickListeners = function (input) {
            // each key click listener: begin
            var eachKeyElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key');
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
                  var keyValue = this.dataset.value || '';

                  // check capslock
                  if (isCapsLockActive) {
                    keyValue = keyValue.toLocaleUpperCase(keyboardLanguage);
                  } else {
                    keyValue = keyValue.toLocaleLowerCase(keyboardLanguage);
                  }

                  // add value by index
                  theInputValArray.splice(theInputSelIndex, 0, keyValue);

                  // update input value
                  input.value = theInputValArray.join('');

                }, false);
              }
            }
            // each key click listener: end

            // capslock key click listener: begin
            var capsLockKeyElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-capslock')[0];
            if (capsLockKeyElm) {
              capsLockKeyElm.addEventListener('click', function (e) {
                e.preventDefault();
                // focus the input
                input.focus();

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
            // capslock key click listener: end

            // backspace key click listener: begin
            var backspaceKeyElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-backspace')[0];
            if (backspaceKeyElm) {
              backspaceKeyElm.addEventListener('click', function (e) {
                e.preventDefault();

                // trigger for selectionStart
                input.dispatchEvent(changeEvent);

                // input trigger focus
                input.focus();

                // remove value by index
                theInputValArray.splice((theInputSelIndex - 1), 1);

                // update input value
                input.value = theInputValArray.join('');

              }, false);
            }
            // backspace key click listener: end

            // specialcharacter key click listener: begin
            var specialCharacterKeyElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key-specialcharacter')[0];
            var specialCharactersRowElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-row-specialcharacters')[0];
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
            var specialCharCloseElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-specialcharacter-close')[0];
            if (specialCharCloseElm && specialCharacterKeyElm && specialCharactersRowElm) {
              specialCharCloseElm.addEventListener('click', function (e) {
                e.preventDefault();
                input.focus(); // focus the input
                specialCharacterKeyElm.classList.remove('specialcharacter-active');
                specialCharactersRowElm.classList.remove('kioskboard-specialcharacter-show');
              }, false);
            }
            // specialcharacter key click listener: end

          };
          // keys click listeners: end

          // append keyboard: begin
          var keyboardElement = window.document.getElementById(kioskBoardVirtualKeyboard.id);
          if (!keyboardElement) {
            // append the keyboard to body
            window.document.body.appendChild(kioskBoardVirtualKeyboard);
            keyboardElement = window.document.getElementById(kioskBoardVirtualKeyboard.id);

            // check window and keyboard height: begin
            var windowHeight = Math.round(window.innerHeight);
            var documentHeight = Math.round(window.document.body.clientHeight);
            var keyboardHeight = Math.round(window.document.getElementById(kioskBoardVirtualKeyboard.id).offsetHeight);
            if (keyboardHeight > Math.round((windowHeight / 3) * 2)) {
              var keyboardWrapper = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-wrapper')[0];
              keyboardWrapper.style.maxHeight = Math.round((windowHeight / 5) * 3) + 'px';
              keyboardWrapper.style.overflowX = 'hidden';
              keyboardWrapper.style.overflowY = 'auto';
              keyboardWrapper.classList.add('kioskboard-overflow');
            }
            // check window and keyboard height: end

            // body padding bottom: begin
            var inputTop = theInput.getBoundingClientRect().top || 0;
            var docTop = window.document.documentElement.scrollTop || 0;
            var theInputOffsetTop = Math.round(inputTop + docTop) - 50;
            if (documentHeight <= theInputOffsetTop + keyboardHeight) {
              var styleElm = window.document.getElementById('KioskboardBodyPadding');
              if (styleElm && styleElm.parentNode !== null) {
                styleElm.parentNode.removeChild(styleElm);
              }

              var style = '<style id="KioskboardBodyPadding">.kioskboard-body-padding {padding-bottom:' + keyboardHeight + 'px !important;}</style>';
              var styleRange = window.document.createRange();
              styleRange.selectNode(window.document.head);
              var styleFragment = styleRange.createContextualFragment(style);
              window.document.head.appendChild(styleFragment);
              window.document.body.classList.add('kioskboard-body-padding');
            }

            var autoScroll = opt.autoScroll === true;
            var scrollBehavior = opt.cssAnimations === true ? 'smooth' : 'auto';
            var scrollDelay = opt.cssAnimations === true && typeof opt.cssAnimationsDuration === 'number' ? opt.cssAnimationsDuration : 0;
            if (autoScroll) {
              var userAgent = navigator.userAgent.toLocaleLowerCase('en');
              if (userAgent.indexOf('edge') <= -1 && userAgent.indexOf('.net4') <= -1) {
                var scrollTimeout = setTimeout(function () {
                  window.scrollTo({ top: theInputOffsetTop, left: 0, behavior: scrollBehavior });
                  clearTimeout(scrollTimeout);
                }, scrollDelay);
              } else {
                window.document.documentElement.scrollTop = theInputOffsetTop;
              }
            }
            // body padding bottom: end

            // keyboard keys click listeners
            keysClickListeners(theInput);

            // keyboard click outside listener: begin
            var docClickListener = function (e) {
              // check event target to remove keyboard: begin
              if (e.target !== theInput && !kioskBoardEventTargetIsElementOrChilds(e, keyboardElement)) {
                // add remove class
                kioskBoardVirtualKeyboard.classList.add(cssAnimationsStyle + '-remove');

                // remove after the animation has been ended
                var removeTimeout = setTimeout(function () {
                  if (keyboardElement.parentNode !== null) {
                    keyboardElement.parentNode.removeChild(keyboardElement); // remove keyboard
                    window.document.body.classList.remove('kioskboard-body-padding'); // remove body padding class
                    window.document.removeEventListener('click', docClickListener); // remove document click listener
                  }
                  clearTimeout(removeTimeout);
                }, cssAnimationsDuration);
              }
              // check event target to remove keyboard: end

              // toggle inputs: begin
              if (allInputs.indexOf(theInput) > -1) {
                var toggleTimeout = setTimeout(function () {
                  e.target.blur();
                  e.target.focus();
                  clearTimeout(toggleTimeout);
                }, cssAnimationsDuration);
              }
              // toggle inputs: end
            };
            window.document.addEventListener('click', docClickListener); // add document click listener
            // keyboard click outside listener: end
          }
          // append keyboard: end
        };
        input.addEventListener('focus', inputFocusListener); // add input focus listener
        // each input focus listener: end

        // each input focusout listener: begin
        var inputFocusoutListener = function () {
          if (!allowMobileKeyboard && !getReadOnlyAttr) {
            this.removeAttribute('readonly');
          }
        };
        input.addEventListener('focusout', inputFocusoutListener); // add input focusout listener
        // each input focusout listener: end
      };
      // Functions: Create Keyboard and AppendTo: end

      // Functions: Get the Keys from JSON by XMLHttpRequest and AppendTo: begin
      var getKeysViaXmlHttpRequest = function (jsonUrl, input) {
        // check the protocol
        var protocolSchemes = ['http:', 'data:', 'chrome:', 'chrome-extension:', 'https:'];
        var protocol = (window.location || {}).protocol;
        if (protocolSchemes.indexOf(protocol) <= -1) {
          kioskBoardConsoleError('The Browser has blocked this request by CORS policy.');
          return false;
        }

        // if "kioskBoardCachedKeys" is undefined || null => send XMLHttpRequest
        if (!kioskBoardCachedKeys) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open('GET', jsonUrl, true);
          xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          xmlHttp.send();
          xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4) {
              if (this.status === 200) { // success
                var data = this.responseText || []; // data
                if (typeof data === 'string' && data.length > 0) {
                  var parsedData = JSON.parse(data); // JSON parse data
                  if (kioskBoardCheckArrayOfObjects(parsedData)) {
                    kioskBoardCachedKeys = parsedData; // cache the keys
                    createKeyboardAndAppendTo(parsedData, input); // create the keyboard
                  } else {
                    kioskBoardConsoleError('Array of objects of the keys are not valid. \n\nVisit to learn more: ' + kioskBoardGithubUrl);
                    return false;
                  }
                }
              } else {
                kioskBoardConsoleError('XMLHttpRequest has been failed. Please check your URL path or protocol.');
                return false;
              }
            }
          };
        }
      };
      // Functions: Get the Keys from JSON by XMLHttpRequest and AppendTo: end

      // Step 3: Select the element(s): begin
      // if: selector is valid
      if (typeof selector === 'string' && selector.length > 0) {
        var kbElements = window.document.querySelectorAll(selector);
        // if: elements exist on the document
        if (kbElements && kbElements.length > 0) {
          for (var i = 0; i < kbElements.length; i++) {
            // each element
            var eachElement = kbElements[i];

            // each element tag name
            var getTagName = ((eachElement || {}).tagName || '').toLocaleLowerCase('en');

            // if: an input or textarea element
            if (getTagName === 'input' || getTagName === 'textarea') {
              // if: has cached keys => create the keyboard by using cached keys
              if (kioskBoardCachedKeys) {
                createKeyboardAndAppendTo(kioskBoardCachedKeys, eachElement);
              }
              // else: try to get the keys from the JSON file via XmlHttpRequest
              else {
                getKeysViaXmlHttpRequest(keysJsonUrl, eachElement);
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
          kioskBoardConsoleError('You called the KioskBoard with the "' + selector + '" selector, but there is no such element on the document.');
          return false;
        }
      }
      // else: selector is not valid
      else {
        kioskBoardConsoleError('"' + selector + '" is not a valid selector.');
        return false;
      }
      // Step 3: Select the element(s): end
    },
  };
  return KioskBoard;
  // KioskBoard: end
});
