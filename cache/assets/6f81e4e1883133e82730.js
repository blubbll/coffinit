"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[90646],{412911:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=d(n(496486)),u=d(n(536211)),l=d(n(636602)),i=n(330321),_=d(n(539563)),s=n(218044),E=n(770348);function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){o=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return o(e,t)}function f(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=!1,p={},I={},A={},C=function(e){A[e.guild_scheduled_event.id]=new _.default(e.guild_scheduled_event.guild);I[e.guild_scheduled_event.id]=e.guild_scheduled_event;return{channelId:e.directory_channel_id,scheduledEventId:e.entity_id,type:s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,authorId:e.author_id,createdAt:e.created_at}};var M=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;o(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;n.isFetching=function(){return c};n.getEventDirectoryEntries=function(e){if(null!=e)return p[e]};n.getCachedGuildByEventId=function(e){var t;return null!==(t=A[e])&&void 0!==t?t:void 0};n.getCachedGuildScheduledEventById=function(e){var t;return null!==(t=I[e])&&void 0!==t?t:void 0};return t}(u.default.Store);M.displayName="EventDirectoryStore";var L=new M(l.default,((r={})[E.ActionTypes.EVENT_DIRECTORY_FETCH_START]=function(){c=!0},r[E.ActionTypes.EVENT_DIRECTORY_FETCH_SUCCESS]=function(e){var t=e.channelId,n=e.entries;c=!1;var r=a.default.sortBy(f(n),[function(e){return(0,i.scheduledEventSort)(e.guild_scheduled_event)}]),u=a.default.map(r,C);p[t]=u},r[E.ActionTypes.EVENT_DIRECTORY_FETCH_FAILURE]=function(){c=!1},r));t.default=L},218044:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.HubGuildTemplateId=t.HQ_CHANNEL_ID=t.DirectoryEntryTypes=t.DirectoryEntryCategories=t.CreateOrAddGuildSlideTypes=void 0;t.getHubCategories=function(e){if(e===o)return[{value:l.SCHOOL_CLUB,label:E.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1},{value:l.CLASS,label:E.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2},{value:l.STUDY_SOCIAL,label:E.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3},{value:l.MISC,label:E.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5}];return[{value:l.SCHOOL_CLUB,label:E.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,idealSize:100},{value:l.CLASS,label:E.default.Messages.DIRECTORY_CATEGORY_CLASS},{value:l.STUDY_SOCIAL,label:E.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,idealSize:50},{value:l.MISC,label:E.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS}]};t.getHubGuildTemplatesMap=function(){var e;return(e={})[u.CREATE]={id:u.CREATE,code:"2TffvPucqHkN",label:E.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,channels:[],system_channel_id:null},e[u.HUB_SCHOOL_CLUB]={id:u.HUB_SCHOOL_CLUB,code:"UMUbvRpRZhS6",label:E.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,type:s.ChannelTypes.GUILD_TEXT},{id:"02",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,type:s.ChannelTypes.GUILD_TEXT},{id:"03",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"13",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"20",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"21",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,type:s.ChannelTypes.GUILD_VOICE}],roles:[{id:"00",name:"@everyone",permissions:_.default.DEFAULT},{id:"01",name:"officers (example)",mentionable:!0,hoist:!0,permissions:i.default.combine(_.default.DEFAULT,s.Permissions.MANAGE_ROLES,s.Permissions.MANAGE_CHANNELS,s.Permissions.KICK_MEMBERS,s.Permissions.BAN_MEMBERS,s.Permissions.MANAGE_NICKNAMES,s.Permissions.MANAGE_GUILD_EXPRESSIONS,s.Permissions.MANAGE_MESSAGES,s.Permissions.SEND_TTS_MESSAGES),color:3066993}],system_channel_id:"12"},e[u.HUB_STUDY]={id:u.HUB_STUDY,code:"2JBhzzca2vfT",label:E.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,type:s.ChannelTypes.GUILD_TEXT},{id:"02",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"20",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"21",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:s.ChannelTypes.GUILD_VOICE},{id:"23",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:s.ChannelTypes.GUILD_VOICE}],system_channel_id:"12"},e[u.HUB_CLASS]={id:u.HUB_CLASS,code:"r86WWBwTGspb",label:E.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,type:s.ChannelTypes.GUILD_TEXT},{id:"02",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"13",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"20",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"21",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:s.ChannelTypes.GUILD_VOICE},{id:"23",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:s.ChannelTypes.GUILD_VOICE}],system_channel_id:"12"},e[u.HUB_SOCIAL]={id:u.HUB_SOCIAL,code:"AvvtXE3mfbCR",label:E.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"02",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"03",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"04",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:s.ChannelTypes.GUILD_VOICE},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:s.ChannelTypes.GUILD_VOICE},{id:"13",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,type:s.ChannelTypes.GUILD_VOICE}],system_channel_id:"02"},e[u.HUB_MAJOR]={id:u.HUB_MAJOR,code:"FhmfDR6Arvsc",label:E.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:s.ChannelTypes.GUILD_TEXT},{id:"02",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"13",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"20",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"21",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:s.ChannelTypes.GUILD_VOICE},{id:"23",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:s.ChannelTypes.GUILD_VOICE}],system_channel_id:"12"},e[u.HUB_DORM]={id:u.HUB_DORM,code:"fkq8xHfrGE58",label:E.default.Messages.GUILD_TEMPLATE_HEADER_DORM,channels:[{id:"00",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:s.ChannelTypes.GUILD_CATEGORY},{id:"01",parent_id:"00",name:E.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,type:s.ChannelTypes.GUILD_TEXT},{id:"10",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:s.ChannelTypes.GUILD_CATEGORY},{id:"11",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:s.ChannelTypes.GUILD_TEXT},{id:"12",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:s.ChannelTypes.GUILD_TEXT},{id:"13",parent_id:"10",name:E.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:s.ChannelTypes.GUILD_TEXT},{id:"20",parent_id:null,name:E.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:s.ChannelTypes.GUILD_CATEGORY},{id:"21",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:s.ChannelTypes.GUILD_VOICE},{id:"22",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:s.ChannelTypes.GUILD_VOICE},{id:"23",parent_id:"20",name:E.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:s.ChannelTypes.GUILD_VOICE}],system_channel_id:"12"},e};var r,a,u,l,i=d(n(267258)),_=d(n(656016)),s=n(770348),E=d(n(247001));function d(e){return e&&e.__esModule?e:{default:e}}t.DirectoryEntryTypes=r;!function(e){e[e.GUILD=0]="GUILD";e[e.GUILD_SCHEDULED_EVENT=1]="GUILD_SCHEDULED_EVENT"}(r||(t.DirectoryEntryTypes=r={}));t.CreateOrAddGuildSlideTypes=a;!function(e){e.GUILD_TEMPLATES="guild-templates";e.CUSTOMIZE_NEW_GUILD="customize-new-guild";e.CHOOSE_GUILD="choose-guild";e.CUSTOMIZE_EXISTING_GUILD="customize-existing-guild";e.CONFIRMATION="confirmation"}(a||(t.CreateOrAddGuildSlideTypes=a={}));t.HubGuildTemplateId=u;!function(e){e.CREATE="CREATE";e.HUB_SCHOOL_CLUB="HUB_SCHOOL_CLUB";e.HUB_STUDY="HUB_STUDY";e.HUB_CLASS="HUB_CLASS";e.HUB_SOCIAL="HUB_SOCIAL";e.HUB_MAJOR="HUB_MAJOR";e.HUB_DORM="HUB_DORM"}(u||(t.HubGuildTemplateId=u={}));t.DirectoryEntryCategories=l;!function(e){e[e.ALL=-1]="ALL";e[e.UNCATEGORIZED=0]="UNCATEGORIZED";e[e.SCHOOL_CLUB=1]="SCHOOL_CLUB";e[e.CLASS=2]="CLASS";e[e.STUDY_SOCIAL=3]="STUDY_SOCIAL";e[e.MISC=5]="MISC"}(l||(t.DirectoryEntryCategories=l={}));var o="883060064561299456";t.HQ_CHANNEL_ID=o},432040:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS=t.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS=t.CREATE_GUILD_EVENT_CORE_PERMISSIONS=void 0;var r,a=(r=n(267258))&&r.__esModule?r:{default:r},u=n(365744),l=n(770348);var i=a.default.combine(l.Permissions.VIEW_CHANNEL,l.Permissions.MANAGE_EVENTS);t.CREATE_GUILD_EVENT_CORE_PERMISSIONS=i;var _=a.default.combine(i,l.Permissions.CONNECT);t.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS=_;var s=a.default.combine(i,u.MODERATE_STAGE_CHANNEL_PERMISSIONS);t.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS=s},836490:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.canCreateEditDeleteGuildEvent=function(e,t,n){var u=_(void 0===n?[a.default,r.default]:n,2),i=u[0],s=u[1].getGuild(e);if(null==s)return!1;if(i.can(l.Permissions.ADMINISTRATOR,s))return!0;if(null==t)return i.can(l.Permissions.MANAGE_EVENTS,s);return E(t,[i])};t.canCreateEditDeleteGuildEventOnChannel=E;var r=i(n(30098)),a=i(n(689389)),u=n(432040),l=n(770348);function i(e){return e&&e.__esModule?e:{default:e}}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,u=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){u.push(r.value);if(t&&u.length===t)break}}catch(e){i=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){var n=_(void 0===t?[a.default]:t,1)[0];return e.isGuildStageVoice()?n.can(u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS,e):e.isGuildVoice()?n.can(u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS,e):n.can(u.CREATE_GUILD_EVENT_CORE_PERMISSIONS,e)}},3594:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=o(n(667294)),a=n(536211),u=o(n(517286)),l=E(n(30098)),i=E(n(689389)),_=n(836490),s=n(770348);function E(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(e,t){var n=(0,a.useStateFromStores)([l.default],(function(){return l.default.getGuild(e)}),[e]),E=(0,a.useStateFromStores)([u.default],(function(){return u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY]}),[e]),d=r.useMemo((function(){return null!=t?E.filter((function(e){return e.channel.type===t})):E}),[E,t]);return(0,a.useStateFromStores)([i.default],(function(){if(i.default.can(s.Permissions.ADMINISTRATOR,n))return!0;if(i.default.can(s.Permissions.MANAGE_EVENTS,n))return!0;for(var e,t=f(d);!(e=t()).done;){var r=e.value.channel;if((0,_.canCreateEditDeleteGuildEventOnChannel)(r,[i.default]))return!0}return!1}),[d,n])};t.default=c},902399:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return(0,a.useStateFromStoresArray)([_.default,u.default,d.default,s.default,l.default,i.default],(function(){var n=_.default.getGuild(e);if(null==n)return C;if(n.hasFeature(T.GuildFeatures.HUB)){var r,a,o=null===(r=i.default.getDefaultChannel(n.id))||void 0===r?void 0:r.id;return(null!==(a=u.default.getEventDirectoryEntries(o))&&void 0!==a?a:[]).map((function(e){var t=e.scheduledEventId,n=d.default.getGuildScheduledEvent(t);return null!=n?n:u.default.getCachedGuildScheduledEventById(t)})).filter(E.isNotNullish)}return d.default.getGuildScheduledEventsByIndex(null!=t?t:d.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)).filter((function(e){var t=e.channel_id;if(null==t)return!0;var n=l.default.getChannel(t);return s.default.can(T.Permissions.VIEW_CHANNEL,n)}))}),[e])};t.useActiveEvent=function(e){return(0,a.useStateFromStores)([d.default,l.default,s.default],(function(){var t=l.default.getChannel(e);if(!s.default.can(T.Permissions.VIEW_CHANNEL,t))return null;if(null==(null==t?void 0:t.guild_id))return null;var n=d.default.getGuildScheduledEventsByIndex(d.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));return n.length>0?n[0]:null}),[e])};t.useActiveEventsByChannel=function(e){var t=(0,a.useStateFromStoresArray)([d.default],(function(){return d.default.getGuildScheduledEventsForGuild(e)}),[e]);return r.useMemo((function(){var e=new Map;t.forEach((function(t){var n=t.channel_id;null!=n&&e.set(n,t)}));return e}),[t])};t.useFirstActiveEventChannel=function(e){return(0,a.useStateFromStores)([l.default,d.default],(function(){var t=d.default.getGuildScheduledEventsByIndex(d.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find((function(e){return null!=l.default.getChannel(e.channel_id)}));return l.default.getChannel(null==t?void 0:t.channel_id)}),[e])};t.useGuildActiveEvent=function(e){return(0,a.useStateFromStores)([d.default,l.default,s.default],(function(){return d.default.getGuildScheduledEventsByIndex(d.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find((function(e){if(e.entity_type===f.GuildScheduledEventEntityTypes.NONE||!(0,d.isGuildScheduledEventActive)(e))return!1;if(null==e.channel_id)return!0;var t=l.default.getChannel(e.channel_id);return s.default.can(T.Permissions.VIEW_CHANNEL,t)}))}),[e])};t.useGuildChannelScheduledEvents=function(e){return(0,a.useStateFromStores)([d.default],(function(){return d.default.getGuildScheduledEventsByIndex(d.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e))}),[e])};t.useImminentUpcomingGuildEvents=function(e){var t=(l=r.useState((function(){return Date.now()})),i=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){u.push(r.value);if(t&&u.length===t)break}}catch(e){i=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return u}}(l,i)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(l,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],u=t[1];var l,i;r.useEffect((function(){var e=setInterval((function(){u(Date.now())}),9e5);return function(){return clearInterval(e)}}),[]);var _=(0,a.useStateFromStores)([d.default],(function(){return d.default.getGuildScheduledEventsByIndex(d.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e))}),[e,n]);return r.useMemo((function(){return _.filter((function(e){return e.status!==f.GuildScheduledEventStatus.ACTIVE&&(0,o.getEventTimeData)(e.scheduled_start_time,e.scheduled_end_time).withinStartWindow}))}),[_])};var r=I(n(667294)),a=n(536211),u=c(n(412911)),l=c(n(644263)),i=c(n(517286)),_=c(n(30098)),s=c(n(689389)),E=n(71246),d=I(n(330321)),o=n(834547),f=n(198756),T=n(770348);function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=[]},97982:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=(0,n(373505).createExperiment)({kind:"guild",id:"2021-11_hub_events",label:"Hub Events",defaultConfig:{showHubEventsList:!1},treatments:[{id:1,label:"Show Hub Events List",config:{showHubEventsList:!0}}]});t.default=r},762029:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return(0,a.useStateFromStores)([u.default],(function(){var t;if(null==e)return!1;var n=u.default.getGuild(e);return null!==(t=null==n?void 0:n.hasFeature(l.GuildFeatures.HUB))&&void 0!==t&&t}),[e])};var r,a=n(536211),u=(r=n(30098))&&r.__esModule?r:{default:r},l=n(770348)},689575:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.canViewInviteModal=function(e,t,n,a){var u=null!=n?n:t;return null!=u&&e.can(r.Permissions.CREATE_INSTANT_INVITE,u)||null!=t&&null!=t.vanityURLCode||null!=(null==a?void 0:a.invite_code)};var r=n(770348)},216554:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.useSortedRequestToSpeakParticipants=function(e){var t=(0,a.useStateFromStores)([u.default],(function(){return[u.default.getMutableRequestToSpeakParticipants(e),u.default.getRequestToSpeakParticipantsVersion(e)]}),[e],l.isVersionEqual);return i(t,1)[0]};t.useStageParticipants=function(e,t){return i((0,a.useStateFromStores)([u.default],(function(){return[u.default.getMutableParticipants(e,t),u.default.getParticipantsVersion(e)]}),[e,t],l.isVersionEqual),1)[0]};t.useStageParticipantsCount=function(e,t){return(0,a.useStateFromStores)([u.default],(function(){return u.default.getParticipantCount(e,t)}),[e,t])};var r,a=n(536211),u=(r=n(897191))&&r.__esModule?r:{default:r},l=n(411315);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,u=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){u.push(r.value);if(t&&u.length===t)break}}catch(e){i=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},775803:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=d;var r,a,u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(667294)),l=(r=n(468205))&&r.__esModule?r:{default:r},i=["width","height","color","foreground"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return s.apply(this,arguments)}function E(e,t,n,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=r;else if(l>1){for(var i=new Array(l),_=0;_<l;_++)i[_]=arguments[_+3];t.children=i}if(t&&u)for(var s in u)void 0===t[s]&&(t[s]=u[s]);else t||(t=u||{});return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function d(e){var t=e.width,n=void 0===t?24:t,r=e.height,a=void 0===r?24:r,_=e.color,d=void 0===_?"currentColor":_,o=e.foreground,f=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++){n=u[r];t.indexOf(n)>=0||(a[n]=e[n])}return a}(e,i);return u.createElement("svg",s({},(0,l.default)(f),{width:n,height:a,viewBox:"0 0 24 24"}),E("path",{fill:d,className:o,fillRule:"evenodd",clipRule:"evenodd",d:"M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"}))}d.displayName="OverflowMenuHorizontal"}}]);