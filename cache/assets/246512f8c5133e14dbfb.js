"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[76885],{261236:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=M(r(667294)),o=w(r(496486)),i=w(r(536211)),u=r(361983),l=w(r(898361)),d=r(826859),f=w(r(235879)),s=w(r(644263)),c=w(r(876874)),p=w(r(893160)),y=M(r(99462)),m=w(r(871778)),v=w(r(728429)),h=w(r(530250)),g=w(r(628551)),b=w(r(971639)),O=w(r(555949)),S=w(r(438266)),C=w(r(914425)),P=w(r(516999)),_=w(r(70581)),R=r(770348),D=r(376293),E=w(r(247001)),T=w(r(175935));function w(e){return e&&e.__esModule?e:{default:e}}function j(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function k(e,t){k=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return k(e,t)}function N(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var F=function(e,t,r){return A(h.default,{align:h.default.Align.CENTER},void 0,A(h.default.Child,{},void 0,A(h.default,{align:h.default.Align.CENTER},void 0,A(g.default,{size:g.default.Sizes.SIZE_24,src:e.getAvatarURL(r,24),"aria-label":e.username,className:T.default.avatar}),A("span",{className:T.default.username},void 0,null!=t?t:e.toString()))))};F.displayName="UserItem";var B=function(e){return A(h.default,{align:h.default.Align.CENTER},void 0,A(h.default.Child,{},void 0,A(h.default,{align:h.default.Align.CENTER},void 0,A("span",{className:T.default.username},void 0,e))))};B.displayName="UnknownUserItem";function L(e,t,r,n,a){var i=[];if(null==t)return i;var l=t.transport,f=t.rtp,s=f.inbound,p=f.outbound,m=t.camera;i.push({section:d.SectionTypes.HEADER,label:E.default.Messages.RTC_DEBUG_CONTEXT.format({context:e})});null!=l&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.TRANSPORT,r),label:E.default.Messages.RTC_DEBUG_TRANSPORT,element:_.default,elementProps:{context:e,index:r}});null!=p&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.OUTBOUND,r),label:E.default.Messages.RTC_DEBUG_RTP_OUTBOUND,element:C.default,elementProps:{context:e,index:r}});null!=m&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.CAMERA,r),label:E.default.Messages.RTC_DEBUG_CAMERA,element:O.default,elementProps:{context:e,index:r,camera:m}});if(null!=s&&!o.default.isEmpty(s)){i.push({section:d.SectionTypes.HEADER,label:E.default.Messages.RTC_DEBUG_RTP_INBOUND});Object.keys(s).forEach((function(t){var o=v.default.getUser(t),l=c.default.getNick(a,t),d=(0,y.keySection)(e,t,r);i.push({section:d,label:null!=o?F(o,l,a):B(null!=l?l:t),ariaLabel:null!=o?o.tag:t,onClick:function(){(0,u.setSection)(d)},element:S.default,elementProps:{context:e,index:r,videoStreams:n}})}))}return i}function x(e,t,r,n,a){var o=e.flatMap((function(e,t){return L(D.MediaEngineContextTypes.DEFAULT,e,t,r,null==a?void 0:a.getGuildId())})),i=t.flatMap((function(e,t){return L(D.MediaEngineContextTypes.STREAM,e,t,r,null==a?void 0:a.getGuildId())})),u=[],l={section:d.SectionTypes.DIVIDER};if(null!=n){u.push(l);u.push({section:R.RTCDebugSections.SCREENSHARE,label:E.default.Messages.RTC_DEBUG_SCREENSHARE,element:P.default,elementProps:{screenshare:n}})}i.length>0&&i.unshift(l);var f=null!=a?[{section:d.SectionTypes.CUSTOM,label:"Channel Name",element:function(){return A(b.default,{className:T.default.channelName,size:b.default.Sizes.SIZE_20},void 0,a.name)}}]:[];return[].concat(f,N(o),N(i),u)}var U=i.default.connectStores([p.default,y.default,m.default,f.default,s.default],(function(){var e,t=y.default.getAllStats(D.MediaEngineContextTypes.DEFAULT),r=y.default.getAllStats(D.MediaEngineContextTypes.STREAM),n=p.default.getChannelId(),a=null===(e=t.concat(r).find((function(e){return null!=e.screenshare})))||void 0===e?void 0:e.screenshare;return{theme:m.default.theme,sidebarTheme:f.default.darkSidebar?R.ThemeTypes.DARK:void 0,section:y.default.getSection(),defaultStats:t,streamStats:r,videoStreams:y.default.getVideoStreams(),screenshare:a,channel:s.default.getChannel(n)}}))(function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;k(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.theme,r=e.sidebarTheme,n=e.section,a=e.defaultStats,o=e.streamStats,i=e.videoStreams,d=e.screenshare,f=e.channel;return A(l.default,{theme:t,sidebarTheme:r,section:n,onSetSection:u.setSection,onClose:u.close,sections:x(a,o,i,d,f)})};return t}(a.PureComponent));t.default=U},555949:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=y;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=s(r(496486)),o=s(r(80828)),i=s(r(956303)),u=r(662197),l=r(187954),d=r(450176),f=s(r(247001));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function y(e){var t=e.camera;if(null==t)return p(o.default,{type:o.default.Type.SPINNING_CIRCLE});var r=a.default.map(t,(function(e,t){if(!d.hidden[t]&&void 0!==e)return p(d.Item,{label:t,value:e},t)}));return p(i.default,{tag:u.Tags.H2,title:f.default.Messages.RTC_DEBUG_CAMERA},void 0,(0,l.renderTwoColumns)(r))}y.displayName="RTCDebugCamera"},187954:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.renderStreams=function(e,t,r,n){return e.map((function(e){for(var i,c=[],p=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(function(e){return Object.keys(e).sort((function(e,t){var r=h[e],n=h[t];return r!==n?void 0===r?1:void 0===n?-1:r-n:d.graphs[e]!==d.graphs[t]?d.graphs[e]?1:-1:e>t?1:-1}))}(e));!(i=p()).done;){var g=i.value,b=e[g];d.hidden[g]||void 0===b||c.push(m(d.Item,{section:r,label:g,value:b},g))}return m(l.default,{className:s.default.marginBottom40,title:e.type},e.type+" + "+e.ssrc,"video"===e.type&&null!=t&&null!=r&&null!=n&&function(e,t,r,n){var i=n.get(t,r,e.ssrc);return null!=i?m("div",{className:(0,a.default)(f.default.videoWrapper,s.default.marginBottom40)},void 0,m(u.default,{streamId:i,videoComponent:o.default.getMediaEngine().Video,paused:!1})):null}(e,t,r,n),v(c))}))};t.renderTwoColumns=v;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=c(r(294184)),o=c(r(635014)),i=c(r(530250)),u=c(r(971146)),l=c(r(956303)),d=r(450176),f=c(r(175935)),s=c(r(380203));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(e){var t=[],r=0;e.length%2!=0&&e.push(m(i.default,{basis:"50%",grow:0},r++));for(;e.length>0;)t.push(m(i.default,{basis:"50%",grow:0},r++,e.splice(0,2)));return t}var h={ssrc:1,codec:2}},215759:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=p;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(723812),i=(n=r(213847))&&n.__esModule?n:{default:n},u=r(770348);function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return d.apply(this,arguments)}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var s=Object.freeze({width:300,height:100}),c=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).state={dataSeries:new o.TimelineDataSeries,graphView:null};t.handleSetCanvas=function(e){if(null!=e){var r;t.state.graphView=new o.TimelineGraphView(e,null!==(r=window.devicePixelRatio)&&void 0!==r?r:1);t.state.graphView.backgroundColor=t.props.theme===u.ThemeTypes.LIGHT?u.HEXColors.WHITE:u.HEXColors.PRIMARY_DARK_600;t.state.graphView.textColor=t.props.theme===u.ThemeTypes.LIGHT?u.HEXColors.BLACK:u.HEXColors.WHITE;t.state.graphView.gridColor=t.props.theme===u.ThemeTypes.LIGHT?u.HEXColors.BLACK_100:u.HEXColors.WHITE_800;t.state.graphView.timeOptions={timeStyle:"short"};t.state.graphView.addDataSeries(t.state.dataSeries);t.state.dataSeries.addPoint(Date.now(),0);t.state.dataSeries.setColor(u.HEXColors.BRAND);t.state.graphView.updateEndDate()}};return t}
t.getDerivedStateFromProps=function(e,t){var r=t.dataSeries,n=t.graphView;r.addPoint(Date.now(),e.datapoint);if(null!=n){n.backgroundColor=e.theme===u.ThemeTypes.LIGHT?u.HEXColors.WHITE:u.HEXColors.PRIMARY_DARK_600;n.textColor=e.theme===u.ThemeTypes.LIGHT?u.HEXColors.BLACK:u.HEXColors.WHITE;n.gridColor=e.theme===u.ThemeTypes.LIGHT?u.HEXColors.BLACK_100:u.HEXColors.WHITE_800;n.updateEndDate()}return{dataSeries:r,graphView:n}};t.prototype.render=function(){return a.createElement("canvas",{key:"canvas",height:100,ref:this.handleSetCanvas,style:s})};return t}(a.PureComponent);c.displayName="RTCDebugGraph";function p(e){var t=(0,i.default)();return a.createElement(c,d({},e,{theme:t}))}p.displayName="ConnectedRTCDebugGraph"},438266:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=h(r(667294)),o=m(r(536211)),i=m(r(876874)),u=m(r(893160)),l=h(r(99462)),d=m(r(728429)),f=m(r(80828)),s=m(r(956303)),c=r(662197),p=r(187954),y=m(r(247001));function m(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function g(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var O=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;b(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.streams,r=e.userId,n=e.mediaEngineConnectionId,a=e.videoStreams;if(null==r||null==t||0===t.length)return g(f.default,{type:f.default.Type.SPINNING_CIRCLE});var o=u.default.getGuildId(),l=d.default.getUser(r),m=i.default.getNick(o,r),v=null==l?y.default.Messages.RTC_DEBUG_RTP_INBOUND:y.default.Messages.RTC_DEBUG_RTP_INBOUND+" — "+(null!=m?m:l.toString());return g(s.default,{tag:c.Tags.H2,title:v},void 0,(0,p.renderStreams)(t,n,r,a))};return t}(a.PureComponent);O.displayName="RTCDebugInbound";var S=o.default.connectStores([l.default],(function(e){var t=e.context,r=e.index,n=e.videoStreams,a=l.default.getAllStats(t)[r],o=(0,l.parseSection)(l.default.getSection()).section;if(null==o)throw new Error("Unrecognized section format");var i=null;if(null!=a&&null!=a.rtp.inbound){var u;i=null!==(u=a.rtp.inbound[o])&&void 0!==u?u:[]}return{mediaEngineConnectionId:null==a?void 0:a.mediaEngineConnectionId,userId:o,streams:i,videoStreams:n}}))(O);t.default=S},222797:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=y(r(667294)),o=c(r(294184)),i=c(r(530250)),u=c(r(791725)),l=y(r(37241)),d=c(r(80895)),f=r(770348),s=c(r(175935));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function m(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}var h=["firCount","nackCount"],g=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;v(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.renderValueIcon=function(){var e=this.props.label;return h.includes(e)?m(d.default,{color:f.Colors.STATUS_YELLOW,className:s.default.valueIcon}):null};r.render=function(){var e=this.props,t=e.children,r=e.className,n=e.valueRendered,a=e.section,d=e.label,f=e.renderGraph;return m(i.default,{className:(0,o.default)(s.default.item,r),direction:i.default.Direction.VERTICAL,basis:"50%"},void 0,m(i.default,{align:i.default.Align.START},void 0,m(i.default.Child,{},void 0,m("h3",{className:s.default.title},void 0,t)),Array.isArray(n)?m(i.default.Child,{grow:1},void 0,n):m(i.default.Child,{grow:0,shrink:0},void 0,this.renderValueIcon(),m("span",{className:s.default.itemValue},void 0,n))),f&&m(i.default.Child,{className:s.default.graph},null!=a?a+"-"+d:d,m(l.default,{type:l.Types.DESCRIPTION},void 0,f())),m(u.default,{className:s.default.divider}))};return t}(a.PureComponent);t.default=g;g.displayName="RTCDebugItem"},450176:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.Item=S;t.valueRenderers=t.labelRenderers=t.hidden=t.graphs=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=u(r(206982)),o=u(r(215759)),i=u(r(222797));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function d(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var f={accelerateRate:"Accelerate Rate",audioDetected:"Audio Detected",audioLevel:"Audio Level",availableOutgoingBitrate:"Available Outgoing Bitrate",averageDecodeTime:"Average Decode Time",averageEncodeTime:"Average Encode Time",bandwidthLimitedResolution:"Bandwidth Limited Resolution",bitrate:"Bitrate",bitrateTarget:"Bitrate (Target)",bytesReceived:"Bytes Received",bytesSent:"Bytes Sent",capturedFramesCount:"Captured Frames per Second",capturedFramesDropped:"Captured Frames Dropped",capturedFramesMean:"Captured Frames Mean (ms)",capturedFramesStdev:"Captured Frames Standard Deviation (ms)",codec:"Codec",cpuLimitedResolution:"CPU Limited Resolution",currentDelay:"Current Delay",decoderImplementationName:"Decoder",decodingCNG:"Decoding CNG",decodingMutedOutput:"Decoding Muted Output",decodingNormal:"Decoding Normal",decodingPLC:"Decoding PLC",decodingPLCCNG:"Decoding PLC CNG",decryptionFailures:"Decryption Failures",delayEstimate:"Delay Estimate",encoderImplementationName:"Encoder",encodeUsage:"Encode Usage",expandRate:"Expand Rate",filter:"Filter",firCount:"FIR",fractionLost:"Packet Loss",frameRateDecode:"Frame Rate (Decode)",frameRateEncode:"Frame Rate (Encode)",frameRateInput:"Frame Rate (Input)",frameRateNetwork:"Frame Rate (Network)",frameRateRender:"Frame Rate (Render)",framesDecoded:"Frames Decoded",framesDropped:"Frames Dropped",framesEncoded:"Frames Encoded",framesReceived:"Frames Received",framesSent:"Frames Sent",freezeCount:"Freeze Count",hostname:"Hostname",hybridDxgiFrames:"Hybrid DXGI Frames",hybridGdiFrames:"Hybrid GDI Frames",hybridVideohookFrames:"Hybrid Videohook Frames",inboundBitrateEstimate:"Inbound Bitrate Estimate",jitter:"Jitter",jitterBuffer:"Jitter Buffer",jitterBufferPreferred:"Jitter Buffer (Preferred)",keyFrameInterval:"Key Frame Interval",keyFramesDecoded:"Key Frames Decoded",keyFramesEncoded:"Key Frames Encoded",localAddress:"Local Address",minPlayoutDelay:"Minimum Playout Delay",nackCount:"NACK",opAccelerate:"Accelerated Frames",opCNG:"CNG Frames",opExpand:"Expand Frames",opMerge:"Merge Frames",opNormal:"Normal Frames",opPreemptiveExpand:"Preemptive Expand Frames",opSilence:"Silent Frames",outboundBitrateEstimate:"Outbound Bitrate Estimate",pacerDelay:"Pacer Delay",packetsLost:"Packets Lost",packetsReceived:"Packets Received",packetsSent:"Packets Sent",pauseCount:"Pause Count",ping:"Ping",pliCount:"PLI",preemptiveExpandRate:"Pre-emptive Expand Rate",qpSum:"QP Sum",quartzFrames:"Quartz Frames",receiverBitrateEstimate:"Receiver Bitrate Estimate (REMB)",relativePlayoutDelay:"Relative Playout Delay",relativeReceptionDelay:"Relative Reception Delay",renderDelay:"Render Delay",resolution:"Resolution",screenshareFrames:"WebRTC Frames",secondaryDecodedRate:"Secondary Decode Rate",sinkWant:"Sink Quality Level (Remote)",sinkWantLocal:"Sink Quality Level (Local)",speechExpandRate:"Speech Expand Rate",ssrc:"SSRC",targetDelay:"Target Delay",totalFramesDuration:"Frames Duration (ms)",totalFreezesDuration:"Freezes Duration (ms)",totalPausesDuration:"Pauses Duration (ms)",videohookBackend:"Videohook Backend",videohookFrames:"Videohook Frames"};t.labelRenderers=f;function s(e){return(e/1e3).toFixed(2)+" Kbps"}function c(e){return a.default.filesize(e)}function p(e){return e}function y(e){return e+" ms"}function m(e){return e.toFixed(0)+"%"}function v(e){return e?"Yes":"No"}function h(e){return e.last+" ms"}var g={availableOutgoingBitrate:!0,bitrate:!0,bitrateTarget:!0,bytesReceived:!0,bytesSent:!0,encodeUsage:!0,frameRateDecode:!0,frameRateEncode:!0,frameRateInput:!0,frameRateNetwork:!0,frameRateRender:!0,inboundBitrateEstimate:!0,packetsLost:!0,packetsReceived:!0,packetsSent:!0,ping:!0};t.graphs=g;t.hidden={audioJitterBuffer:!0,audioJitterDelay:!0,audioJitterTarget:!0,audioPlayoutUnderruns:!0,fractionLost:!0,framesCaptured:!0,framesRendered:!0,noiseCancellerProcessTime:!0,timestamp:!0,type:!0,videoJitterBuffer:!0,videoJitterDelay:!0,videoJitterTarget:!0,voiceActivityDetectorProcessTime:!0,sumOfSquaredFramesDurations:!0};var b={accelerateRate:m,audioDetected:v,audioLevel:function(e){return Math.max(e,0).toFixed(2)+" dB"},availableOutgoingBitrate:s,averageDecodeTime:y,averageEncodeTime:y,bandwidthLimitedResolution:v,bitrate:s,bitrateTarget:s,bytesReceived:c,bytesSent:c,codec:function(e){var t,r=e.id,n=e.name;return""+(n=null!==(t=n=""===n?"unknown":n)&&void 0!==t?t:"unknown")[0].toUpperCase()+n.slice(1)+" ("+r+")"},cpuLimitedResolution:v,currentDelay:y,decoderImplementationName:p,delayEstimate:y,encoderImplementationName:p,encodeUsage:m,expandRate:m,filter:p,fractionLost:m,inboundBitrateEstimate:s,jitter:y,jitterBuffer:y,jitterBufferPreferred:y,keyFrameInterval:y,minPlayoutDelay:y,outboundBitrateEstimate:s,pacerDelay:y,ping:y,preemptiveExpandRate:m,receiverBitrateEstimate:s,relativePlayoutDelay:h,relativeReceptionDelay:h,renderDelay:y,resolution:function(e){return e.width+"x"+e.height},secondaryDecodedRate:m,speechExpandRate:m,targetDelay:y,videohookBackend:function(e){var t=["N/A","Direct3D 9","Direct3D 10","Direct3D 11","Direct3D 12","OpenGL","Vulkan"];return e<t.length?t[e]:"Unknown"}};t.valueRenderers=b;function O(e){return d(o.default,{datapoint:e})}O.displayName="renderGraph";function S(e){var t=e.label,r=e.value,n=e.section,a=b[t]||function(e){return e};return d(i.default,{label:t,valueRendered:a(r),section:n,renderGraph:g[t]&&O.bind(null,r)},void 0,f[t]||t)}S.displayName="Item"},914425:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=c(r(536211)),i=c(r(99462)),u=c(r(80828)),l=c(r(956303)),d=r(662197),f=r(187954),s=c(r(247001));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return m(e,t)}var v=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;m(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props.outbound;return null==e?y(u.default,{type:u.default.Type.SPINNING_CIRCLE}):y(l.default,{tag:d.Tags.H2,title:s.default.Messages.RTC_DEBUG_RTP_OUTBOUND},void 0,(0,f.renderStreams)(e))};return t}(a.PureComponent);v.displayName="RTCDebugOutbound";var h=o.default.connectStores([i.default],(function(e){var t=e.context,r=e.index,n=i.default.getAllStats(t)[r];return{outbound:null!=n?n.rtp.outbound:null}}))(v);t.default=h},516999:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=c(r(496486)),i=c(r(80828)),u=c(r(956303)),l=r(662197),d=r(187954),f=r(450176),s=c(r(247001));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}
function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return m(e,t)}var v=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;m(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props.screenshare;if(null==e)return y(i.default,{type:i.default.Type.SPINNING_CIRCLE});var t=o.default.map(e,(function(e,t){if(!f.hidden[t]&&void 0!==e)return y(f.Item,{label:t,value:e},t)}));return y(u.default,{tag:l.Tags.H2,title:s.default.Messages.RTC_DEBUG_SCREENSHARE},void 0,(0,d.renderTwoColumns)(t))};return t}(a.PureComponent);v.displayName="RTCDebugScreenshare";var h=v;t.default=h},70581:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=D(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=R(r(496486)),i=R(r(536211)),u=R(r(893160)),l=R(r(99462)),d=R(r(359973)),f=R(r(663303)),s=R(r(728429)),c=R(r(530250)),p=R(r(80828)),y=R(r(791725)),m=R(r(956303)),v=r(662197),h=R(r(56815)),g=r(187954),b=R(r(222797)),O=r(450176),S=r(376293),C=R(r(247001)),P=R(r(175935)),_=R(r(380203));function R(e){return e&&e.__esModule?e:{default:e}}function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(D=function(e){return e?r:t})(e)}function E(){E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return E.apply(this,arguments)}function T(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function w(e,t){w=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return w(e,t)}var j=T("span",{},void 0,"Bitrate:"),M=T("span",{},void 0,"Packet Loss:"),k=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;w(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.transport,r=e.mediaSessionId,n=e.hidePersonalInformation,a=e.hostname;if(null==t)return T(p.default,{type:p.default.Type.SPINNING_CIRCLE});var i=E({},t,{hostname:a}),u=o.default.map(i,(function(e,t){if("receiverReports"!==t&&(!n||"localAddress"!==t))return T(O.Item,{label:t,value:e},t)})),l=o.default.map(i.receiverReports,(function(e){var t=T(c.default,{id:"bitrate-"+e.id,justify:c.default.Justify.BETWEEN},void 0,j,T("span",{},void 0,(e.bitrate/1e3).toFixed(2)," Kbps")),r=T(c.default,{id:"lost-"+e.id,justify:c.default.Justify.BETWEEN},void 0,M,T("span",{},void 0,(100*e.fractionLost/256).toFixed(0),"%")),n=s.default.getUser(e.id),a=null!=n?n.username:e.id;return T(b.default,{label:e.id,valueRendered:[t,r]},e.id,a)}));return T(m.default,{tag:v.Tags.H2,title:C.default.Messages.RTC_DEBUG_TRANSPORT+(null!=r?" - "+r:""),className:P.default.allowSelection},void 0,(0,g.renderTwoColumns)(u),0===l.length?null:T(y.default,{className:_.default.marginBottom20}),(0,g.renderTwoColumns)(l))};return t}(a.PureComponent);k.displayName="RTCDebugTransport";var N=i.default.connectStores([l.default,u.default,f.default,d.default],(function(e){var t=e.context,r=e.index,n=l.default.getAllStats(t)[r],a=t===S.MediaEngineContextTypes.STREAM?d.default.getHostname():u.default.getHostname();return{hidePersonalInformation:f.default.hidePersonalInformation,transport:null!=n?n.transport:null,mediaSessionId:u.default.getMediaSessionId(),hostname:h.default.getShortHostname(a)}}))(k);t.default=N}}]);