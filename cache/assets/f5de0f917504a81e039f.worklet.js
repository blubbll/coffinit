(()=>{"use strict";var t={859:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.BoundedHistogram=void 0;function r(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o=function(){function t(t){this.size=t
;this.head=0;this.samples=new Array(t).fill(0)}var e=t.prototype;e.addSample=function(t){this.head=(this.head+1)%this.size;this.samples[this.head]=t};e.mean=function(){for(var t,e=0,n=1/this.size,o=r(this.samples);!(t=o()).done;){e+=t.value*n}return e};return t}();e.BoundedHistogram=o}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};t[n](i,i.exports,r);return i.exports}(()=>{({value:!0});void 0;var t,e=r(859);function n(t){var e="function"==typeof Map?new Map:void 0;n=function(t){if(null===t||!(r=t,-1!==Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return o(t,arguments,a(this).constructor)}n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}});return u(n,t)};return n(t)}function o(t,e,r){
o=i()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));r&&u(o,r.prototype);return o};return o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}function u(t,e){u=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return u(t,e)}function a(t){a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return a(t)}t;!function(t){t[t.NONE=0]="NONE";t[t.VOICE=1]="VOICE";t[t.SOUNDSHARE=2]="SOUNDSHARE";t[t.PRIORITY=4]="PRIORITY"}(t||(t={}));if("undefined"!=typeof AudioWorkletProcessor){var s=function(r){!function(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;u(t,e)}(n,r);function n(){var n;(n=r.call(this)||this).running=!0
;n.lastSpeaking=t.NONE;n.dBFSHistogram=new e.BoundedHistogram(20);n.port.onmessage=function(t){"close"===t.data&&(n.running=!1)};return n}n.prototype.process=function(e,r,n){var o=e[0],i=t.NONE;if(o.length>0&&o[0].length>0){for(var u=o[0].length,a=0,s=0;s<o.length;++s)for(var c=o[s],f=0;f<c.length;++f)a+=c[f]*c[f];a=20*Math.log10(Math.sqrt(a/(u*o.length)))+Math.sqrt(2);this.dBFSHistogram.addSample(a>-100?a:-100);i=this.dBFSHistogram.mean()>-80?t.VOICE:t.NONE}if(this.lastSpeaking!==i){this.port.postMessage(i);this.lastSpeaking=i}return this.running};return n}(n(AudioWorkletProcessor));registerProcessor("level-processor",s)}""})()})();
//# sourceMappingURL=f5de0f917504a81e039f.worklet.js.map