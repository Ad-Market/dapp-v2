/*! For license information please see 4.f80e33f9.chunk.js.LICENSE.txt */
(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[4],{689:function(e,t,n){var o,r,i;i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r={},i={},a={},s={};function u(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return 1}function c(e,t){u(e,(function(e){return t(e),1}))}function l(t,n,o){t=t.push?t:[t];var d=n&&n.call,f=d?n:o,h=d?t.join(""):n,m=t.length;function w(e){return e.call?e():r[e]}function g(){if(!--m)for(var e in r[h]=1,f&&f(),a)u(e.split("|"),w)&&!c(a[e],w)&&(a[e]=[])}return setTimeout((function(){c(t,(function t(n,o){return null===n?g():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(h&&(i[h]=1),2==s[n]?g():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,h&&(i[h]=1),void p(n,g)))}))}),0),l}function p(e,r){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,s[e]=2,r())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(a,o.lastChild)}return l.get=p,l.order=function(e,t,n){!function o(r){r=e.shift(),e.length?l(r,o):l(r,t,n)}()},l.path=function(t){e=t},l.urlArgs=function(e){t=e},l.ready=function(e,t,n){e=e.push?e:[e];var o,i=[];return!c(e,(function(e){r[e]||i.push(e)}))&&u(e,(function(e){return r[e]}))?t():(o=e.join("|"),a[o]=a[o]||[],a[o].push(t),n&&n(i)),l},l.done=function(e){l([null],e)},l},e.exports?e.exports=i():void 0===(r="function"===typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)},754:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},755:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!==!!e)&&!!e},r=function(e,t){return Object.hasOwnProperty.call(e,t)},i=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(a,s,u){for(var c=arguments.length,l=Array(3<c?c-3:0),p=3;p<c;p++)l[p-3]=arguments[p];return o(t,a,s,u)?r(a,s)?e.apply(void 0,[a,s,u].concat(l)):i(a,s,u,n):e.apply(void 0,[a,s,u].concat(l))}}},756:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},922:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return O}));var a=n(754),s=n.n(a),u=n(237);function c(e,t){return!t||"object"!==s()(t)&&"function"!==typeof t?Object(u.a)(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=n(236);function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(p.a)(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=n(0),m=n.n(h),w=n(20),g=n.n(w),y=n(755),b=n.n(y),v=n(756),C=n.n(v),T="https://platform.twitter.com/widgets.js",O=function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component);f(O,"propTypes",{sourceType:g.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:b()(g.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:b()(g.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:b()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:b()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:b()(g.a.oneOfType([g.a.number,g.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:b()(g.a.string,(function(e){return"url"===e.sourceType})),widgetId:b()(g.a.string,(function(e){return"widget"===e.sourceType})),options:g.a.object,autoHeight:g.a.bool,theme:g.a.oneOf(["dark","light"]),linkColor:g.a.string,borderColor:g.a.string,noHeader:g.a.bool,noFooter:g.a.bool,noBorders:g.a.bool,noScrollbar:g.a.bool,transparent:g.a.bool,lang:g.a.string,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{url:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{tag:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{tweetId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"shareMoment"}))}}]),t}(h.Component),"propTypes",{momentId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{id:g.a.number.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{id:g.a.string.isRequired,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),f(function(e){function t(e){var n;return o(this,t),(n=c(this,l(t).call(this,e))).state={isLoading:!0},n}return d(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;C.a.canUseDOM&&n(689)(T,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return m.a.createElement(m.a.Fragment,null,e&&t,m.a.createElement("div",{ref:"embedContainer"}))}}]),t}(h.Component),"propTypes",{username:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func})}}]);