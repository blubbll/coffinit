"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[94157],{667145:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=o?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(a,n,l):a[n]=e[n]}a.default=e;r&&r.set(e,a);return a}(r(667294)),n=y(r(372579)),l=y(r(146714)),u=y(r(503550)),c=y(r(536211)),i=y(r(929031)),f=y(r(871778)),p=y(r(308920)),s=r(770348),d=y(r(247001)),h=y(r(492036));function y(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function _(e,t,r,o){
a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var u=new Array(l),c=0;c<l;c++)u[c]=arguments[c+3];t.children=u}if(t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function O(e,t){O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return O(e,t)}var T=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;O(e,t)}(t,e);function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];(t=e.call.apply(e,[this].concat(a))||this).handleHeaderLocaleChange=function(e){e!==t.props.locale&&i.default.updateLocalSettings({locale:e})};return t}var r=t.prototype;r.shouldScrollToTop=function(e){var t=e.location
;return t.pathname.startsWith(s.Routes.APPLICATION_STORE_LISTING_SKU(""))||t.pathname.startsWith(s.Routes.APPLICATION_STORE_LISTING_APPLICATION(""))};r.render=function(){var e=this,t=this.props,r=t.location,a=t.className,c=t.render,i=t.locale;return _(u.default,{className:a,shouldScrollToTop:this.shouldScrollToTop,render:function(t,a){return _(o.Fragment,{},void 0,_(l.default,{avoidRouter:!0,locale:i,authRedirectTo:r.pathname,track:p.default.track,className:h.default.marketingHeader,onChangeLocale:e.handleHeaderLocaleChange,mobileClassName:h.default.marketingHeader,openNavAriaLabel:d.default.Messages.OPEN_NAVIGATION,hideNavAriaLabel:d.default.Messages.HIDE_NAVIGATION,skipToContentLabel:d.default.Messages.SKIP_TO_CONTENT}),c(t,a),_(n.default,{locale:i,authRedirectTo:r.pathname,avoidRouter:!0,track:p.default.track,className:h.default.marketingFooter}))}})};return t}(o.Component);T.displayName="ApplicationStorePublicWrapper";var m=c.default.connectStores([f.default],(function(){return{
locale:f.default.locale}}))(T);t.default=m}}]);
//# sourceMappingURL=fa97cca29a38882d89df.js.map