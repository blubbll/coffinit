"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[4227],{299449:(E,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0});i.default=i.SingleAnimation=i.SequenceAnimation=i.ParallelAnimation=void 0;i.parallel=M;i.sequence=O;i.spring=P;i.timing=R;var S,n=(S=s(74854))&&S.__esModule?S:{default:S};function e(){e=Object.assign||function(E){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var S in s)Object.prototype.hasOwnProperty.call(s,S)&&(E[S]=s[S])}return E};return e.apply(this,arguments)}function r(E,i){var s="undefined"!=typeof Symbol&&E[Symbol.iterator]||E["@@iterator"];if(s)return(s=s.call(E)).next.bind(s);if(Array.isArray(E)||(s=function(E,i){if(!E)return;if("string"==typeof E)return t(E,i);var s=Object.prototype.toString.call(E).slice(8,-1);"Object"===s&&E.constructor&&(s=E.constructor.name);if("Map"===s||"Set"===s)return Array.from(E);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(E,i)
}(E))||i&&E&&"number"==typeof E.length){s&&(E=s);var S=0;return function(){return S>=E.length?{done:!0}:{done:!1,value:E[S++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(E,i){(null==i||i>E.length)&&(i=E.length);for(var s=0,S=new Array(i);s<i;s++)S[s]=E[s];return S}function _(E,i,s,S,n,e,r){try{var t=E[e](r),_=t.value}catch(E){s(E);return}t.done?i(_):Promise.resolve(_).then(S,n)}var o=function(){function E(E){this.animation=E}var i=E.prototype;i.start=function(){var E=this;return new Promise((function(i){E.animation.start((function(){i()}))}))};i.stop=function(){this.animation.stop()};return E}();i.SingleAnimation=o;var I=function(){function E(E){this.animations=E}var i=E.prototype;i._map=function(E){return this.animations.map(E)};i.start=function(){var E=this;return new Promise((function(i){return Promise.all(E._map((function(E){return E.start()
}))).then((function(){return i()}))}))};i.stop=function(){this._map((function(E){return E.stop()}))};return E}();i.ParallelAnimation=I;var A=function(){function E(E){this.stopped=!1;this.animations=E}var i=E.prototype;i.start=function(){var E,i=(E=regeneratorRuntime.mark((function E(){var i,s,S;return regeneratorRuntime.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:this.stopped=!1;i=r(this.animations);case 2:if((s=i()).done){E.next=10;break}S=s.value;if(!this.stopped){E.next=6;break}return E.abrupt("return");case 6:E.next=8;return S.start();case 8:E.next=2;break;case 10:case"end":return E.stop()}}),E,this)})),function(){var i=this,s=arguments;return new Promise((function(S,n){var e=E.apply(i,s);function r(E){_(e,S,n,r,t,"next",E)}function t(E){_(e,S,n,r,t,"throw",E)}r(void 0)}))});return function(){return i.apply(this,arguments)}}();i.stop=function(){this.stopped=!0;this.animations.map((function(E){return E.stop()}))};return E}();i.SequenceAnimation=A;function N(E,i,s){
var S=s(E,e({},i));return new o(S)}function R(E,i){return N(E,i,n.default.timing)}function P(E,i){return N(E,i,n.default.spring)}function M(E){return new I(E)}function O(E){return new A(E)}var T=e({},n.default,{timing:R,spring:P,parallel:M,sequence:O});i.default=T},983039:(E,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0});i.truncateAndLocalizeNumber=void 0;var S,n=(S=s(111965))&&S.__esModule?S:{default:S};i.truncateAndLocalizeNumber=function(E,i){var s=Math.round(10*E)/10;if(E<1e6)return new Intl.NumberFormat(i,{maximumFractionDigits:s%1==0?0:1}).format(E);var S=Math.round(E/1e6*10)/10,e=new Intl.NumberFormat(i,{maximumFractionDigits:S%1==0?0:1}).format(E/1e6);return n.default.Messages.NumberAbbreviations.MILLION.format({num:e})}},583743:(E,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0});i.generateChannelEventsSection=function(E,i){return{title:i,permissions:e([S.Permissions.MANAGE_EVENTS],E)}};i.generateChannelGeneralSection=function(E,i,s){var n;void 0===s&&(s={
showManageWebhooks:!0});return{title:i,permissions:e((null===(n=s)||void 0===n?void 0:n.showManageWebhooks)?[S.Permissions.VIEW_CHANNEL,S.Permissions.MANAGE_CHANNELS,S.Permissions.MANAGE_ROLES,S.Permissions.MANAGE_WEBHOOKS]:[S.Permissions.VIEW_CHANNEL,S.Permissions.MANAGE_CHANNELS,S.Permissions.MANAGE_ROLES],E)}};i.generateChannelMembershipSection=function(E,i){return{title:i,permissions:e([S.Permissions.CREATE_INSTANT_INVITE],E)}};i.generateChannelStageSection=function(E,i){return{title:i,permissions:e([S.Permissions.REQUEST_TO_SPEAK,S.Permissions.MENTION_EVERYONE],E)}};i.generateChannelStageVoiceSection=function(E,i){return{title:i,permissions:e([S.Permissions.CONNECT,S.Permissions.MUTE_MEMBERS,S.Permissions.MOVE_MEMBERS],E)}};i.generateChannelTextSection=function(E,i,s){
var n=[S.Permissions.SEND_MESSAGES,S.Permissions.SEND_MESSAGES_IN_THREADS,S.Permissions.CREATE_PUBLIC_THREADS,S.Permissions.CREATE_PRIVATE_THREADS,S.Permissions.EMBED_LINKS,S.Permissions.ATTACH_FILES,S.Permissions.ADD_REACTIONS,S.Permissions.USE_EXTERNAL_EMOJIS,S.Permissions.USE_EXTERNAL_STICKERS,S.Permissions.MENTION_EVERYONE,S.Permissions.MANAGE_MESSAGES,S.Permissions.MANAGE_THREADS,S.Permissions.READ_MESSAGE_HISTORY,S.Permissions.SEND_TTS_MESSAGES,S.Permissions.USE_APPLICATION_COMMANDS];s.showPrivateThreads&&s.showCreateThreads||(n=n.filter((function(E){return E!==S.Permissions.CREATE_PRIVATE_THREADS})));s.showCreateThreads||(n=n.filter((function(E){return E!==S.Permissions.CREATE_PUBLIC_THREADS})));return{title:i,permissions:e(n,E)}};i.generateChannelVoiceChatSection=function(E,i){
var s=[S.Permissions.SEND_MESSAGES,S.Permissions.EMBED_LINKS,S.Permissions.ATTACH_FILES,S.Permissions.ADD_REACTIONS,S.Permissions.USE_EXTERNAL_EMOJIS,S.Permissions.USE_EXTERNAL_STICKERS,S.Permissions.MENTION_EVERYONE,S.Permissions.MANAGE_MESSAGES,S.Permissions.READ_MESSAGE_HISTORY,S.Permissions.SEND_TTS_MESSAGES,S.Permissions.USE_APPLICATION_COMMANDS];return{title:i,permissions:e(s,E)}};i.generateChannelVoiceSection=function(E,i){return{title:i,permissions:e([S.Permissions.CONNECT,S.Permissions.SPEAK,S.Permissions.STREAM,S.Permissions.USE_EMBEDDED_ACTIVITIES,S.Permissions.USE_VAD,S.Permissions.PRIORITY_SPEAKER,S.Permissions.MUTE_MEMBERS,S.Permissions.DEAFEN_MEMBERS,S.Permissions.MOVE_MEMBERS],E)}};i.generateGuildPermissionSpec=function(E,i){var s=function(E,i){var s;return(s={})[S.Permissions.VIEW_CHANNEL.toString()]={title:E.ROLE_PERMISSIONS_VIEW_CHANNEL,description:E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,flag:S.Permissions.VIEW_CHANNEL},
s[S.Permissions.MANAGE_CHANNELS.toString()]={title:E.MANAGE_CHANNELS,description:E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,flag:S.Permissions.MANAGE_CHANNELS},s[S.Permissions.MANAGE_ROLES.toString()]={title:E.MANAGE_ROLES,description:E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,flag:S.Permissions.MANAGE_ROLES},s[S.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]={title:E.MANAGE_EMOJIS_AND_STICKERS,description:E.ROLE_PERMISSIONS_MANAGE_EMOJIS_AND_STICKERS_DESCRIPTION,flag:S.Permissions.MANAGE_GUILD_EXPRESSIONS},s[S.Permissions.VIEW_AUDIT_LOG.toString()]={title:E.VIEW_AUDIT_LOG,description:E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,flag:S.Permissions.VIEW_AUDIT_LOG},s[S.Permissions.VIEW_GUILD_ANALYTICS.toString()]={title:E.VIEW_GUILD_ANALYTICS,description:E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,flag:S.Permissions.VIEW_GUILD_ANALYTICS},s[S.Permissions.MANAGE_WEBHOOKS.toString()]={title:E.MANAGE_WEBHOOKS,description:E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
flag:S.Permissions.MANAGE_WEBHOOKS},s[S.Permissions.MANAGE_GUILD.toString()]={title:E.MANAGE_SERVER,description:E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,flag:S.Permissions.MANAGE_GUILD},s[S.Permissions.CREATE_INSTANT_INVITE.toString()]={title:E.CREATE_INSTANT_INVITE,description:E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,flag:S.Permissions.CREATE_INSTANT_INVITE},s[S.Permissions.CHANGE_NICKNAME.toString()]={title:E.CHANGE_NICKNAME,description:E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,flag:S.Permissions.CHANGE_NICKNAME},s[S.Permissions.MANAGE_NICKNAMES.toString()]={title:E.MANAGE_NICKNAMES,description:E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,flag:S.Permissions.MANAGE_NICKNAMES},s[S.Permissions.KICK_MEMBERS.toString()]={title:i.showMembershipManualApprovalPermissions?E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS:E.KICK_MEMBERS,
description:i.showMembershipManualApprovalPermissions?E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION:E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,flag:S.Permissions.KICK_MEMBERS},s[S.Permissions.BAN_MEMBERS.toString()]={title:E.BAN_MEMBERS,description:E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,flag:S.Permissions.BAN_MEMBERS},s[S.Permissions.MODERATE_MEMBERS.toString()]={title:E.MODERATE_MEMBER,description:E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,flag:S.Permissions.MODERATE_MEMBERS},s[S.Permissions.SEND_MESSAGES.toString()]={title:i.showForumPermissions?E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS:E.SEND_MESSAGES,description:i.showForumPermissions?E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION:E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,flag:S.Permissions.SEND_MESSAGES},s[S.Permissions.EMBED_LINKS.toString()]={title:E.EMBED_LINKS,description:E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,flag:S.Permissions.EMBED_LINKS},s[S.Permissions.ATTACH_FILES.toString()]={
title:E.ATTACH_FILES,description:E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,flag:S.Permissions.ATTACH_FILES},s[S.Permissions.ADD_REACTIONS.toString()]={title:E.ADD_REACTIONS,description:E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,flag:S.Permissions.ADD_REACTIONS},s[S.Permissions.USE_EXTERNAL_EMOJIS.toString()]={title:E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,description:E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,flag:S.Permissions.USE_EXTERNAL_EMOJIS},s[S.Permissions.USE_EXTERNAL_STICKERS.toString()]={title:E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,description:E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,flag:S.Permissions.USE_EXTERNAL_STICKERS},s[S.Permissions.MENTION_EVERYONE.toString()]={title:E.MENTION_EVERYONE,description:E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,flag:S.Permissions.MENTION_EVERYONE},s[S.Permissions.MANAGE_MESSAGES.toString()]={title:E.MANAGE_MESSAGES,description:E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,flag:S.Permissions.MANAGE_MESSAGES},
s[S.Permissions.READ_MESSAGE_HISTORY.toString()]={title:E.READ_MESSAGE_HISTORY,description:E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,flag:S.Permissions.READ_MESSAGE_HISTORY},s[S.Permissions.SEND_TTS_MESSAGES.toString()]={title:E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,description:E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,flag:S.Permissions.SEND_TTS_MESSAGES},s[S.Permissions.USE_APPLICATION_COMMANDS.toString()]={title:E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,description:E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,flag:S.Permissions.USE_APPLICATION_COMMANDS},s[S.Permissions.CONNECT.toString()]={title:E.CONNECT,description:E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,flag:S.Permissions.CONNECT},s[S.Permissions.SPEAK.toString()]={title:E.SPEAK,description:E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,flag:S.Permissions.SPEAK},s[S.Permissions.STREAM.toString()]={title:E.VIDEO,description:E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,flag:S.Permissions.STREAM},
s[S.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]={title:E.USE_EMBEDDED_ACTIVITIES,description:E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,flag:S.Permissions.USE_EMBEDDED_ACTIVITIES},s[S.Permissions.USE_VAD.toString()]={title:E.USE_VAD,description:E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,flag:S.Permissions.USE_VAD},s[S.Permissions.PRIORITY_SPEAKER.toString()]={title:E.PRIORITY_SPEAKER,description:(null==i?void 0:i.PRIORITY_SPEAKER_DESCRIPTION)||E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,flag:S.Permissions.PRIORITY_SPEAKER},s[S.Permissions.MUTE_MEMBERS.toString()]={title:E.MUTE_MEMBERS,description:E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,flag:S.Permissions.MUTE_MEMBERS},s[S.Permissions.DEAFEN_MEMBERS.toString()]={title:E.DEAFEN_MEMBERS,description:E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,flag:S.Permissions.DEAFEN_MEMBERS},s[S.Permissions.MOVE_MEMBERS.toString()]={title:E.MOVE_MEMBERS,description:E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
flag:S.Permissions.MOVE_MEMBERS},s[S.Permissions.REQUEST_TO_SPEAK.toString()]={title:E.REQUEST_TO_SPEAK,description:E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,flag:S.Permissions.REQUEST_TO_SPEAK,isExperimental:!0},s[S.Permissions.ADMINISTRATOR.toString()]={title:E.ADMINISTRATOR,description:"string"==typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION?E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION:E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),flag:S.Permissions.ADMINISTRATOR},s[S.Permissions.MANAGE_EVENTS.toString()]={title:E.MANAGE_EVENTS,description:E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,flag:S.Permissions.MANAGE_EVENTS},s[S.Permissions.MANAGE_THREADS.toString()]={title:i.showForumPermissions?E.MANAGE_THREADS_AND_FORUM_POSTS:E.MANAGE_THREADS,description:i.showForumPermissions?E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION:E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,flag:S.Permissions.MANAGE_THREADS},s[S.Permissions.CREATE_PUBLIC_THREADS.toString()]={
title:E.CREATE_PUBLIC_THREADS,description:E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,flag:S.Permissions.CREATE_PUBLIC_THREADS},s[S.Permissions.CREATE_PRIVATE_THREADS.toString()]={title:E.CREATE_PRIVATE_THREADS,description:E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,flag:S.Permissions.CREATE_PRIVATE_THREADS},s[S.Permissions.SEND_MESSAGES_IN_THREADS.toString()]={title:i.showForumPermissions?E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS:E.SEND_MESSAGES_IN_THREADS,description:i.showForumPermissions?E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION:E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,flag:S.Permissions.SEND_MESSAGES_IN_THREADS},s}(E,i),I=[r(s,E),t(s,E),_(s,E,i),o(s,E)];i.showStageChannelPermissions&&I.push(function(E,i,s){return n({title:i.ROLE_PERMISSIONS_SECTION_STAGE,permissions:e([S.Permissions.REQUEST_TO_SPEAK],E)},s.showExperimental)}(s,E,i));I.push(function(E,i,s){return n({title:i.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
permissions:e([S.Permissions.MANAGE_EVENTS],E)},s.showExperimental)}(s,E,i));I.push(function(E,i){return n({title:i.ROLE_PERMISSIONS_SECTION_ADVANCED,permissions:e([S.Permissions.ADMINISTRATOR],E)})}(s,E));return I};i.renderDescription=function(E){if(null==E)return E;if("string"==typeof E)return E.trim();if("function"==typeof E.format)return E.format();return E};var S=s(478036);function n(E,i){void 0===i&&(i=!1);i||(E.permissions=E.permissions.filter((function(E){return!E.isExperimental})));return E}function e(E,i){return E.map((function(E){return i[E.toString()]}))}function r(E,i){return n({title:i.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,permissions:e([S.Permissions.VIEW_CHANNEL,S.Permissions.MANAGE_CHANNELS,S.Permissions.MANAGE_ROLES,S.Permissions.MANAGE_GUILD_EXPRESSIONS,S.Permissions.VIEW_AUDIT_LOG,S.Permissions.VIEW_GUILD_ANALYTICS,S.Permissions.MANAGE_WEBHOOKS,S.Permissions.MANAGE_GUILD],E)})}function t(E,i){
var s=[S.Permissions.CREATE_INSTANT_INVITE,S.Permissions.CHANGE_NICKNAME,S.Permissions.MANAGE_NICKNAMES,S.Permissions.KICK_MEMBERS,S.Permissions.BAN_MEMBERS,S.Permissions.MODERATE_MEMBERS];return n({title:i.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,permissions:e(s,E)})}function _(E,i,s){return n({title:i.ROLE_PERMISSIONS_SECTION_TEXT,permissions:e([S.Permissions.SEND_MESSAGES,S.Permissions.SEND_MESSAGES_IN_THREADS,S.Permissions.CREATE_PUBLIC_THREADS,S.Permissions.CREATE_PRIVATE_THREADS,S.Permissions.EMBED_LINKS,S.Permissions.ATTACH_FILES,S.Permissions.ADD_REACTIONS,S.Permissions.USE_EXTERNAL_EMOJIS,S.Permissions.USE_EXTERNAL_STICKERS,S.Permissions.MENTION_EVERYONE,S.Permissions.MANAGE_MESSAGES,S.Permissions.MANAGE_THREADS,S.Permissions.READ_MESSAGE_HISTORY,S.Permissions.SEND_TTS_MESSAGES,S.Permissions.USE_APPLICATION_COMMANDS],E)})}function o(E,i){return n({title:i.ROLE_PERMISSIONS_SECTION_VOICE,
permissions:e([S.Permissions.CONNECT,S.Permissions.SPEAK,S.Permissions.STREAM,S.Permissions.USE_EMBEDDED_ACTIVITIES,S.Permissions.USE_VAD,S.Permissions.PRIORITY_SPEAKER,S.Permissions.MUTE_MEMBERS,S.Permissions.DEAFEN_MEMBERS,S.Permissions.MOVE_MEMBERS],E)})}}}]);
//# sourceMappingURL=e03405baa0373b35d236.js.map