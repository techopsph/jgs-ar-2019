!function(e){window.isEditMode=!1,e(window).on("elementor/frontend/init",function(){window.isEditMode=elementorFrontend.isEditMode(),isEditMode&&parent.document.addEventListener("mousedown",function(e){var t=parent.document.querySelectorAll(".elementor-element--promotion");if(0<t.length)for(var o=0;o<t.length;o++)if(t[o].contains(e.target)){var n=parent.document.querySelector("#elementor-element--promotion__dialog");if(0<=t[o].querySelector(".icon > i").classList.toString().indexOf("eaicon"))if(n.querySelector(".dialog-buttons-action").style.display="none",null===n.querySelector(".ea-dialog-buttons-action")){var i=document.createElement("a"),a=document.createTextNode("Upgrade Essential Addons");i.setAttribute("href","https://wpdeveloper.net/upgrade/ea-pro"),i.setAttribute("target","_blank"),i.classList.add("dialog-button","dialog-action","dialog-buttons-action","elementor-button","elementor-button-success","ea-dialog-buttons-action"),i.appendChild(a),n.querySelector(".dialog-buttons-action").insertAdjacentHTML("afterend",i.outerHTML)}else n.querySelector(".ea-dialog-buttons-action").style.display="";else n.querySelector(".dialog-buttons-action").style.display="",null!==n.querySelector(".ea-dialog-buttons-action")&&(n.querySelector(".ea-dialog-buttons-action").style.display="none");break}})})}(jQuery);!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(e,s),delete n[s]),s.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(t,i){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.imagesLoaded=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){var s=t.jQuery,r=t.console;function h(e,t){for(var i in t)e[i]=t[i];return e}var a=Array.prototype.slice;function d(e,t,i){if(!(this instanceof d))return new d(e,t,i);var n,o=e;("string"==typeof e&&(o=document.querySelectorAll(e)),o)?(this.elements=(n=o,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?a.call(n):[n]),this.options=h({},this.options),"function"==typeof t?i=t:h(this.options,t),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(o||e))}(d.prototype=Object.create(e.prototype)).options={},d.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},d.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&m[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}}};var m={1:!0,9:!0,11:!0};function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}return d.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},d.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},d.prototype.addBackground=function(e,t){var i=new n(e,t);this.images.push(i)},d.prototype.check=function(){var n=this;function t(e,t,i){setTimeout(function(){n.progress(e,t,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},d.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,e,t)},d.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},(i.prototype=Object.create(e.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},(d.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((s=e).fn.imagesLoaded=function(e,t){return new d(this,e,t).jqDeferred.promise(s(this))})})(),d});!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var d=Array.prototype.slice,i=t.console,f=void 0===i?function(){}:function(t){i.error(t)};function o(h,n,l){(l=l||e||t.jQuery)&&(n.prototype.option||(n.prototype.option=function(t){l.isPlainObject(t)&&(this.options=l.extend(!0,this.options,t))}),l.fn[h]=function(t){if("string"!=typeof t)return o=t,this.each(function(t,e){var i=l.data(e,h);i?(i.option(o),i._init()):(i=new n(e,o),l.data(e,h,i))}),this;var e,s,r,a,u,o,i=d.call(arguments,1);return r=i,u="$()."+h+'("'+(s=t)+'")',(e=this).each(function(t,e){var i=l.data(e,h);if(i){var o=i[s];if(o&&"_"!=s.charAt(0)){var n=o.apply(i,r);a=void 0===a?n:a}else f(u+" is not a valid method")}else f(h+" not initialized. Cannot call methods, i.e. "+u)}),void 0!==a?a:e},s(l))}function s(t){!t||t&&t.bridget||(t.bridget=o)}return s(e||t.jQuery),o}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n];o&&o[s]&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function g(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},v=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],_=v.length;function z(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var I,x=!1;function S(t){if(!function(){if(!x){x=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=z(t);I=200==Math.round(g(i.width)),S.isBoxSizeOuter=I,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=z(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<_;e++){t[v[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var o=i.isBorderBox="border-box"==e.boxSizing,n=0;n<_;n++){var s=v[n],r=e[s],a=parseFloat(r);i[s]=isNaN(a)?0:a}var u=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,l=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,f=i.borderLeftWidth+i.borderRightWidth,c=i.borderTopWidth+i.borderBottomWidth,m=o&&I,p=g(e.width);!1!==p&&(i.width=p+(m?0:u+f));var y=g(e.height);return!1!==y&&(i.height=y+(m?0:h+c)),i.innerWidth=i.width-(u+f),i.innerHeight=i.height-(h+c),i.outerWidth=i.width+l,i.outerHeight=i.height+d,i}}return S}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i]+"MatchesSelector";if(t[o])return o}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,s){var l={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;l.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},l.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},l.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,s(t,e))return t},l.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},l.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.filterFindElements=function(t,o){t=l.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(o){s(t,o)&&n.push(t);for(var e=t.querySelectorAll(o),i=0;i<e.length;i++)n.push(e[i])}else n.push(t)}),n},l.debounceMethod=function(t,e,o){o=o||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,i=this;this[s]=setTimeout(function(){n.apply(i,e),delete i[s]},o)}},l.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},l.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return l.htmlInit=function(a,u){l.docReady(function(){var t=l.toDashed(u),n="data-"+t,e=document.querySelectorAll("["+n+"]"),i=document.querySelectorAll(".js-"+t),o=l.makeArray(e).concat(l.makeArray(i)),s=n+"-options",r=h.jQuery;o.forEach(function(e){var t,i=e.getAttribute(n)||e.getAttribute(s);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+n+" on "+e.className+": "+t))}var o=new a(e,t);r&&r.data(e,u,o)})})},l}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";var i=document.documentElement.style,o="string"==typeof i.transition?"transition":"WebkitTransition",n="string"==typeof i.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],r={transform:n,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=a.prototype=Object.create(t.prototype);u.constructor=a,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t){e[r[i]||i]=t[i]}},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;-1!=o.indexOf("%")&&(s=s/100*a.width),-1!=n.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",l=o?"bottom":"top",d=this.position.y+t[u];e[h]=this.getYValue(d),e[l]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!n||this.isTransitioning){var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;0}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var h="opacity,"+n.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:h,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var l={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=l[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return;return 1}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(d)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),this.hide()):this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}),function(n,s){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(t,e,i,o){return s(n,t,e,i,o)}):"object"==typeof module&&module.exports?module.exports=s(n,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):n.Outlayer=s(n,n.EvEmitter,n.getSize,n.fizzyUIUtils,n.Outlayer.Item)}(window,function(t,e,n,s,o){"use strict";function i(){}var r=t.console,a=t.jQuery,u=0,h={};function l(t,e){var i=s.getQueryElement(t);if(i){this.element=i,a&&(this.$element=a(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(e);var o=++u;this.element.outlayerGUID=o,(h[o]=this)._create(),this._getOption("initLayout")&&this.layout()}else r&&r.error("Bad element for "+this.constructor.namespace+": "+(i||t))}l.namespace="outlayer",l.Item=o,l.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=l.prototype;function f(t){function e(){t.apply(this,arguments)}return(e.prototype=Object.create(t.prototype)).constructor=e}s.extend(d,e.prototype),d.option=function(t){s.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},l.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=new i(e[n],this);o.push(s)}return o},d._filterFindItemElements=function(t){return s.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=n(this.element)},d._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[t]=i?n(i)[e]:o):this[t]=0},d.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,i){if(this._emitCompleteOnItems("layout",t),t&&t.length){var o=[];t.forEach(function(t){var e=this._getItemLayoutPosition(t);e.item=t,e.isInstant=i||t.isLayoutInstant,o.push(e)},this),this._processLayoutQueue(o)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=c[o]||1;return i*n}(t),this.stagger;this.stagger=0},d._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},d._getContainerSize=i,d._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},d._emitCompleteOnItems=function(e,t){var i=this;function o(){i.dispatchEvent(e+"Complete",null,[t])}var n=t.length;if(t&&n){var s=0;t.forEach(function(t){t.once(e,r)})}else o();function r(){++s==n&&o()}},d.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),a)if(this.$element=this.$element||a(this.element),e){var n=a.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},d.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},d.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},d.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},d.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){s.removeFrom(this.stamps,t),this.unignore(t)},this)},d._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=s.makeArray(t)},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=i,d._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=n(t);return{left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom}},d.handleEvent=s.handleEvent,d.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},s.debounceMethod(l,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var t=n(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},d.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},d.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},d.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i),t.reveal()})}},d.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i),t.hide()})}},d.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},d.getItems=function(t){t=s.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getItem(t);e&&i.push(e)},this),i},d.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),s.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete h[e],delete this.element.outlayerGUID,a&&a.removeData(this.element,this.constructor.namespace)},l.data=function(t){var e=(t=s.getQueryElement(t))&&t.outlayerGUID;return e&&h[e]},l.create=function(t,e){var i=f(l);return i.defaults=s.extend({},l.defaults),s.extend(i.defaults,e),i.compatOptions=s.extend({},l.compatOptions),i.namespace=t,i.data=l.data,i.Item=f(o),s.htmlInit(i,t),a&&a.bridget&&a.bridget(t,i),i};var c={ms:1,s:1e3};return l.Item=o,l}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(e,i){"use strict";function o(t){(this.isotope=t)&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=o.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return i.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var t=e(this.isotope.element);return this.isotope.size&&t&&t.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},o.modes={},o.create=function(t,e){function i(){o.apply(this,arguments)}return(i.prototype=Object.create(n)).constructor=i,e&&(i.options=e),o.modes[i.prototype.namespace=t]=i},o}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,h){var e=t.create("masonry");e.compatOptions.fitWidth="isFitWidth";var i=e.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&h(e).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,n=o/i,s=i-o%i;n=Math[s&&s<1?"round":"floor"](n),this.cols=Math.max(n,1)},i.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,e=h(t);this.containerWidth=e&&e.innerWidth},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var o=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),n={x:this.columnWidth*o.col,y:o.y},s=o.y+t.size.outerHeight,r=i+o.col,a=o.col;a<r;a++)this.colYs[a]=s;return n},i._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},i._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},i._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},i._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=1<t&&i+t>this.cols?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},i._manageStamp=function(t){var e=h(t),i=this._getElementOffset(t),o=this._getOption("originLeft")?i.left:i.right,n=o+e.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var r=Math.floor(n/this.columnWidth);r-=n%this.columnWidth?0:1,r=Math.min(this.cols-1,r);for(var a=(this._getOption("originTop")?i.top:i.bottom)+e.outerHeight,u=s;u<=r;u++)this.colYs[u]=Math.max(a,this.colYs[u])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(r,a){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(t,e,i,o,n,s){return a(r,t,0,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=a(r,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):r.Isotope=a(r,r.Outlayer,r.getSize,r.matchesSelector,r.fizzyUIUtils,r.Isotope.Item,r.Isotope.LayoutMode)}(window,function(t,i,e,o,s,n,r){var a=t.jQuery,u=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},h=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});h.Item=n,h.LayoutMode=r;var l=h.prototype;l._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=i.prototype._itemize.apply(this,arguments),e=0;e<t.length;e++){t[e].id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){this._isLayoutInited||!this._getOption("initLayout")?this._layout():this.arrange()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e},l._bindArrangeComplete=function(){var t,e,i,o=this;function n(){t&&e&&i&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}this.once("layoutComplete",function(){t=!0,n()}),this.once("hideComplete",function(){e=!0,n()}),this.once("revealComplete",function(){i=!0,n()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(e){return a&&this.options.isJQueryFiltering?function(t){return a(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return o(t.element,e)}},l.updateSortData=function(t){var e;e=t?(t=s.makeArray(t),this.getItems(t)):this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var d=function(t){if("string"!=typeof t)return t;var e=u(t).split(" "),i=e[0],o=i.match(/^\[(.+)\]$/),n=function(e,i){return e?function(t){return t.getAttribute(e)}:function(t){var e=t.querySelector(i);return e&&e.textContent}}(o&&o[1],i),s=h.sortDataParsers[e[1]];return t=s?function(t){return t&&s(n(t))}:function(t){return t&&n(t)}};h.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=s.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var r,a,e=(r=this.sortHistory,a=this.options.sortAscending,function(t,e){for(var i=0;i<r.length;i++){var o=r[i],n=t.sortData[o],s=e.sortData[o];if(s<n||n<s)return(s<n?1:-1)*((void 0!==a[o]?a[o]:a)?1:-1)}return 0});this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var f=l.remove;return l.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);f.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var n=e[o];s.removeFrom(this.filteredItems,n)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},h});!function(f){"use strict";f(document).on("click",".eael-load-more-button",function(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation();var o=f(this),s=f("span",o).html(),t=o.data("widget"),n=f(".elementor-element-"+t),e=o.data("class"),i=o.data("args"),r=o.data("settings"),d=o.data("layout"),l=parseInt(o.data("page"))+1;if(void 0!==t&&void 0!==i){var p={},u={action:"load_more",class:e,args:i,settings:r,page:l};if(String(i).split("&").forEach(function(a,t){var e=String(a).split("=");p[e[0]]=e[1]}),"rand"==p.orderby){var c=f(".eael-grid-post");if(c.length){var g=[];c.each(function(a,t){var e=f(t).data("id");g.push(e)}),u.post__not_in=g}}o.addClass("button--loading"),f("span",o).html("Loading..."),f.ajax({url:localize.ajaxurl,type:"post",data:u,success:function(a){var t=f(a);if(t.hasClass("no-posts-found")||0==t.length)o.remove();else{if("Essential_Addons_Elementor\\Elements\\Product_Grid"==u.class)f(".eael-product-grid .products",n).append(t);else if(f(".eael-post-appender",n).append(t),"masonry"==d){var e=f(".eael-post-appender",n).isotope();e.isotope("appended",t).isotope("layout"),e.imagesLoaded().progress(function(){e.isotope("layout")})}o.removeClass("button--loading"),f("span",o).html(s),o.data("page",l)}},error:function(a){console.log(a)}})}})}(jQuery);var PostGrid=function(e,o){var t=o(".eael-post-appender",e),n=t.data("layout-mode");"masonry"===n&&(t.isotope({itemSelector:".eael-grid-post",layoutMode:n,percentPosition:!0}),t.imagesLoaded().progress(function(){t.isotope("layout")}))};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-post-grid.default",PostGrid)});!function(t,e,n){"use strict";function o(t,s){var e=this;this.el=t,this.options={},Object.keys(i).forEach(function(t){e.options[t]=i[t]}),Object.keys(s).forEach(function(t){e.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,n&&this.options.stringsElement instanceof n?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()}o.prototype={constructor:o,init:function(){var s=this;s.timeout=setTimeout(function(){for(var t=0;t<s.strings.length;++t)s.sequence[t]=t;s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos)},s.startDelay)},build:function(){var s=this;!0===this.showCursor&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement&&(this.strings=[],this.stringsElement.style.display="none",Array.prototype.slice.apply(this.stringsElement.children).forEach(function(t){s.strings.push(t.innerHTML)}));this.init()},typewrite:function(o,r){if(!0!==this.stop){var t=Math.round(70*Math.random())+this.typeSpeed,a=this;a.timeout=setTimeout(function(){var t=0,s=o.substr(r);if("^"===s.charAt(0)){var e=1;/^\^\d+/.test(s)&&(e+=(s=/\d+/.exec(s)[0]).length,t=parseInt(s)),o=o.substring(0,r)+o.substring(r+e)}if("html"===a.contentType){var i=o.substr(r).charAt(0);if("<"===i||"&"===i){var n;for(n="<"===i?">":";";o.substr(r+1).charAt(0)!==n&&(o.substr(r).charAt(0),!(++r+1>o.length)););r++,0}}a.timeout=setTimeout(function(){if(r===o.length){if(a.options.onStringTyped(a.arrayPos),a.arrayPos===a.strings.length-1&&(a.options.callback(),a.curLoop++,!1===a.loop||a.curLoop===a.loopCount))return;a.timeout=setTimeout(function(){a.backspace(o,r)},a.backDelay)}else{0===r&&a.options.preStringTyped(a.arrayPos);var t=o.substr(0,r+1);a.attr?a.el.setAttribute(a.attr,t):a.isInput?a.el.value=t:"html"===a.contentType?a.el.innerHTML=t:a.el.textContent=t,r++,a.typewrite(o,r)}},t)},t)}},backspace:function(s,e){if(!0!==this.stop){var t=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===s.substr(e).charAt(0)){for(;"<"!==s.substr(e-1).charAt(0)&&(s.substr(e).charAt(0),!(--e<0)););e--,0}var t=s.substr(0,e);i.attr?i.el.setAttribute(i.attr,t):i.isInput?i.el.value=t:"html"===i.contentType?i.el.innerHTML=t:i.el.textContent=t,e>i.stopNum?(e--,i.backspace(s,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},t)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)s=t[e=Math.floor(Math.random()*(i+1))],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},o.new=function(t,i){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var s=t._typed,e="object"==typeof i&&i;s&&s.reset(),t._typed=s=new o(t,e),"string"==typeof i&&s[i]()})},n&&(n.fn.typed=function(i){return this.each(function(){var t=n(this),s=t.data("typed"),e="object"==typeof i&&i;s&&s.reset(),t.data("typed",s=new o(this,e)),"string"==typeof i&&s[i]()})}),t.Typed=o;var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery),function(i){"use strict";function s(t,s){this.element=i(t),this.settings=i.extend({},n,s),this._defaults=n,this._init()}var e="Morphext",n={animation:"bounceIn",separator:",",speed:2e3,complete:i.noop};s.prototype={_init:function(){var e=this;this.phrases=[],this.element.addClass("morphext"),i.each(this.element.text().split(this.settings.separator),function(t,s){e.phrases.push(i.trim(s))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",i.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var t=this;this._interval=setInterval(function(){t.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},i.fn[e]=function(t){return this.each(function(){i.data(this,"plugin_"+e)||i.data(this,"plugin_"+e,new s(this,t))})}}(jQuery);var FancyText=function(t,e){var a=t.find(".eael-fancy-text-container").eq(0),n=void 0!==a.data("fancy-text-id")?a.data("fancy-text-id"):"",o=void 0!==a.data("fancy-text")?a.data("fancy-text"):"",d=void 0!==a.data("fancy-text-transition-type")?a.data("fancy-text-transition-type"):"",i=void 0!==a.data("fancy-text-speed")?a.data("fancy-text-speed"):"",y=void 0!==a.data("fancy-text-delay")?a.data("fancy-text-delay"):"",c="yes"===a.data("fancy-text-cursor"),f=void 0!==a.data("fancy-text-loop")&&"yes"==a.data("fancy-text-loop");o=o.split("|"),"typing"==d&&e("#eael-fancy-text-"+n).typed({strings:o,typeSpeed:i,backSpeed:0,startDelay:300,backDelay:y,showCursor:c,loop:f}),"typing"!=d&&e("#eael-fancy-text-"+n).Morphext({animation:d,separator:", ",speed:y,complete:function(){}}),jQuery(window).on("load",function(){setTimeout(function(){e(".eael-fancy-text-strings",t).css("display","inline-block")},500)}),isEditMode&&setTimeout(function(){e(".eael-fancy-text-strings",t).css("display","inline-block")},800)};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-fancy-text.default",FancyText)});!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(i){"use strict";var n=function(t,s){this.$element=i(t),this.defaults=i.extend({},n.defaults,this.$element.data(),i.isPlainObject(s)?s:{}),this.init()};n.prototype={constructor:n,init:function(){var t=this.$element.html(),s=new Date(this.defaults.date||t);s.getTime()&&(this.content=t,this.date=s,this.find(),this.defaults.autoStart&&this.start())},find:function(){var t=this.$element;this.$days=t.find("[data-days]"),this.$hours=t.find("[data-hours]"),this.$minutes=t.find("[data-minutes]"),this.$seconds=t.find("[data-seconds]"),0<this.$days.length+this.$hours.length+this.$minutes.length+this.$seconds.length&&(this.found=!0)},reset:function(){this.found?(this.output("days"),this.output("hours"),this.output("minutes"),this.output("seconds")):this.output()},ready:function(){var t,s=this.date,e={};return!!s&&((t=s.getTime()-(new Date).getTime())<=0?(this.end(),!1):(e.days=t,e.hours=e.days%864e5,e.minutes=e.hours%36e5,e.seconds=e.minutes%6e4,e.milliseconds=e.seconds%1e3,this.days=Math.floor(e.days/864e5),this.hours=Math.floor(e.hours/36e5),this.minutes=Math.floor(e.minutes/6e4),this.seconds=Math.floor(e.seconds/1e3),this.deciseconds=Math.floor(e.milliseconds/100),!0))},start:function(){!this.active&&this.ready()&&(this.active=!0,this.reset(),this.autoUpdate=this.defaults.fast?setInterval(i.proxy(this.fastUpdate,this),100):setInterval(i.proxy(this.update,this),1e3))},stop:function(){this.active&&(this.active=!1,clearInterval(this.autoUpdate))},end:function(){this.date&&(this.stop(),this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.deciseconds=0,this.reset(),this.defaults.end())},destroy:function(){this.date&&(this.stop(),this.$days=null,this.$hours=null,this.$minutes=null,this.$seconds=null,this.$element.empty().html(this.content),this.$element.removeData("countdown"))},fastUpdate:function(){0<=--this.deciseconds?this.output("deciseconds"):(this.deciseconds=9,this.update())},update:function(){0<=--this.seconds?this.output("seconds"):(this.seconds=59,0<=--this.minutes?this.output("minutes"):(this.minutes=59,0<=--this.hours?this.output("hours"):(this.hours=23,0<=--this.days?this.output("days"):this.end())))},output:function(t){if(this.found)switch(t){case"deciseconds":this.$seconds.text(this.getSecondsText());break;case"seconds":this.$seconds.text(this.seconds);break;case"minutes":this.$minutes.text(this.minutes);break;case"hours":this.$hours.text(this.hours);break;case"days":this.$days.text(this.days)}else this.$element.empty().html(this.template())},template:function(){return this.defaults.text.replace("%s",this.days).replace("%s",this.hours).replace("%s",this.minutes).replace("%s",this.getSecondsText())},getSecondsText:function(){return this.active&&this.defaults.fast?this.seconds+"."+this.deciseconds:this.seconds}},n.defaults={autoStart:!0,date:null,fast:!1,end:i.noop,text:"%s days, %s hours, %s minutes, %s seconds"},n.setDefaults=function(t){i.extend(n.defaults,t)},i.fn.countdown=function(e){return this.each(function(){var t=i(this),s=t.data("countdown");s||t.data("countdown",s=new n(this,e)),"string"==typeof e&&i.isFunction(s[e])&&s[e]()})},i.fn.countdown.constructor=n,i.fn.countdown.setDefaults=n.setDefaults,i(function(){i("[countdown]").countdown()})});var CountDown=function(e,t){var n=e.find(".eael-countdown-wrapper").eq(0),d=void 0!==n.data("countdown-id")?n.data("countdown-id"):"",o=void 0!==n.data("expire-type")?n.data("expire-type"):"",a=void 0!==n.data("expiry-text")?n.data("expiry-text"):"",i=void 0!==n.data("expiry-title")?n.data("expiry-title"):"",r=void 0!==n.data("redirect-url")?n.data("redirect-url"):"",l=void 0!==n.data("template")?n.data("template"):"";jQuery(document).ready(function(e){"use strict";var t=e("#eael-countdown-"+d);t.countdown({end:function(){if("text"==o)t.html('<div class="eael-countdown-finish-message"><h4 class="expiry-title">'+i+'</h4><div class="eael-countdown-finish-text">'+a+"</div></div>");else if("url"===o){0<e("body").find("#elementor").length?t.html("Your Page will be redirected to given URL (only on Frontend)."):window.location.href=r}else"template"===o&&t.html(l)}})})};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-countdown.default",CountDown)});!function(i){"function"==typeof define&&define.amd?define(["jquery"],function(t){return i(t)}):"object"==typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(E){function t(){this.__$emitterPrivate=E({}),this.__$emitterPublic=E({}),this.__instancesLatestArr=[],this.__plugins={},this._env=I}var c={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},n="undefined"!=typeof window?window:null,I={hasTouchCapability:!(!n||!("ontouchstart"in n||n.DocumentTouch&&n.document instanceof n.DocumentTouch||n.navigator.maxTouchPoints)),hasTransitions:function(){if(!n)return!1;var t=(n.document.body||n.document.documentElement).style,i="transition",o=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof t[i])return!0;i=i.charAt(0).toUpperCase()+i.substr(1);for(var e=0;e<o.length;e++)if("string"==typeof t[o[e]+i])return!0;return!1}(),IE:!1,semVer:"4.2.6",window:n};function i(t){this.$container,this.constraints=null,this.__$tooltip,this.__init(t)}function s(o,e){var n=!0;return E.each(o,function(t,i){if(void 0===e[t]||o[t]!==e[t])return n=!1}),n}function p(t){var i=t.attr("id"),o=i?I.window.document.getElementById(i):null;return o?o===t[0]:E.contains(I.window.document.body,t[0])}t.prototype={__bridge:function(t,o,e){if(!o[e]){function i(){}i.prototype=t;var n=new i;n.__init&&n.__init(o),E.each(t,function(t,i){0!=t.indexOf("__")&&(o[t]?c.debug&&console.log("The "+t+" method of the "+e+" plugin conflicts with another plugin or native methods"):(o[t]=function(){return n[t].apply(n,Array.prototype.slice.apply(arguments))},o[t].bridged=n))}),o[e]=n}return this},__setWindow:function(t){return I.window=t,this},_getRuler:function(t){return new i(t)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(t){var i=this;if("string"==typeof t){var o=t,e=null;return 0<o.indexOf(".")?e=i.__plugins[o]:E.each(i.__plugins,function(t,i){if(i.name.substring(i.name.length-o.length-1)=="."+o)return e=i,!1}),e}if(t.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return(i.__plugins[t.name]=t).core&&i.__bridge(t.core,i,t.name),this},_trigger:function(){var t=Array.prototype.slice.apply(arguments);return"string"==typeof t[0]&&(t[0]={type:t[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,t),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,t),this},instances:function(t){var e=[];return E(t||".tooltipstered").each(function(){var o=E(this),t=o.data("tooltipster-ns");t&&E.each(t,function(t,i){e.push(o.data(i))})}),e},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(t){return E((t?t+" ":"")+".tooltipstered").toArray()},setDefaults:function(t){return E.extend(c,t),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},E.tooltipster=new t,E.Tooltipster=function(t,i){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=E({}),this.__$emitterPublic=E({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(t,i)},E.Tooltipster.prototype={__init:function(t,i){var o=this;if(o._$origin=E(t),o.__options=E.extend(!0,{},c,i),o.__optionsFormat(),!I.IE||I.IE>=o.__options.IEmin){var e=null;if(void 0===o._$origin.data("tooltipster-initialTitle")&&(void 0===(e=o._$origin.attr("title"))&&(e=null),o._$origin.data("tooltipster-initialTitle",e)),null!==o.__options.content)o.__contentSet(o.__options.content);else{var n,s=o._$origin.attr("data-tooltip-content");s&&(n=E(s)),n&&n[0]?o.__contentSet(n.first()):o.__contentSet(e)}o._$origin.removeAttr("title").addClass("tooltipstered"),o.__prepareOrigin(),o.__prepareGC(),E.each(o.__options.plugins,function(t,i){o._plug(i)}),I.hasTouchCapability&&E(I.window.document.body).on("touchmove."+o.__namespace+"-triggerOpen",function(t){o._touchRecordEvent(t)}),o._on("created",function(){o.__prepareTooltip()})._on("repositioned",function(t){o.__lastPosition=t.position})}else o.__options.disabled=!0},__contentInsert:function(){var t=this,i=t._$tooltip.find(".tooltipster-content"),o=t.__Content;return t._trigger({type:"format",content:t.__Content,format:function(t){o=t}}),t.__options.functionFormat&&(o=t.__options.functionFormat.call(t,t,{origin:t._$origin[0]},t.__Content)),"string"!=typeof o||t.__options.contentAsHTML?i.empty().append(o):i.text(o),t},__contentSet:function(t){return t instanceof E&&this.__options.contentCloning&&(t=t.clone(!0)),this.__Content=t,this._trigger({type:"updated",content:t}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var t=this,i=t._$origin,o=t._$origin.is("area");if(o){var e=t._$origin.parent().attr("name");i=E('img[usemap="#'+e+'"]')}var n=i[0].getBoundingClientRect(),s=E(I.window.document),r=E(I.window),_=i,a={available:{document:null,window:null},document:{size:{height:s.height(),width:s.width()}},window:{scroll:{left:I.window.scrollX||I.window.document.documentElement.scrollLeft,top:I.window.scrollY||I.window.document.documentElement.scrollTop},size:{height:r.height(),width:r.width()}},origin:{fixedLineage:!1,offset:{},size:{height:n.bottom-n.top,width:n.right-n.left},usemapImage:o?i[0]:null,windowOffset:{bottom:n.bottom,left:n.left,right:n.right,top:n.top}}};if(o){var l=t._$origin.attr("shape"),p=t._$origin.attr("coords");if(p&&(p=p.split(","),E.map(p,function(t,i){p[i]=parseInt(t)})),"default"!=l)switch(l){case"circle":var c=p[0],h=p[1],d=p[2],u=h-d,g=c-d;a.origin.size.height=2*d,a.origin.size.width=a.origin.size.height,a.origin.windowOffset.left+=g,a.origin.windowOffset.top+=u;break;case"rect":var f=p[0],m=p[1],w=p[2],v=p[3];a.origin.size.height=v-m,a.origin.size.width=w-f,a.origin.windowOffset.left+=f,a.origin.windowOffset.top+=m;break;case"poly":for(var y=0,b=0,$=0,C=0,O="even",T=0;T<p.length;T++){var z=p[T];O="even"==O?($<z&&($=z,0===T&&(y=$)),z<y&&(y=z),"odd"):(C<z&&(C=z,1==T&&(b=C)),z<b&&(b=z),"even")}a.origin.size.height=C-b,a.origin.size.width=$-y,a.origin.windowOffset.left+=y,a.origin.windowOffset.top+=b}}for(t._trigger({type:"geometry",edit:function(t){a.origin.size.height=t.height,a.origin.windowOffset.left=t.left,a.origin.windowOffset.top=t.top,a.origin.size.width=t.width},geometry:{height:a.origin.size.height,left:a.origin.windowOffset.left,top:a.origin.windowOffset.top,width:a.origin.size.width}}),a.origin.windowOffset.right=a.origin.windowOffset.left+a.origin.size.width,a.origin.windowOffset.bottom=a.origin.windowOffset.top+a.origin.size.height,a.origin.offset.left=a.origin.windowOffset.left+a.window.scroll.left,a.origin.offset.top=a.origin.windowOffset.top+a.window.scroll.top,a.origin.offset.bottom=a.origin.offset.top+a.origin.size.height,a.origin.offset.right=a.origin.offset.left+a.origin.size.width,a.available.document={bottom:{height:a.document.size.height-a.origin.offset.bottom,width:a.document.size.width},left:{height:a.document.size.height,width:a.origin.offset.left},right:{height:a.document.size.height,width:a.document.size.width-a.origin.offset.right},top:{height:a.origin.offset.top,width:a.document.size.width}},a.available.window={bottom:{height:Math.max(a.window.size.height-Math.max(a.origin.windowOffset.bottom,0),0),width:a.window.size.width},left:{height:a.window.size.height,width:Math.max(a.origin.windowOffset.left,0)},right:{height:a.window.size.height,width:Math.max(a.window.size.width-Math.max(a.origin.windowOffset.right,0),0)},top:{height:Math.max(a.origin.windowOffset.top,0),width:a.window.size.width}};"html"!=_[0].tagName.toLowerCase();){if("fixed"==_.css("position")){a.origin.fixedLineage=!0;break}_=_.parent()}return a},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=E(I.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=E(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var t=this;return t.__options.selfDestruction?t.__garbageCollector=setInterval(function(){var o=(new Date).getTime();t.__touchEvents=E.grep(t.__touchEvents,function(t,i){return 6e4<o-t.time}),p(t._$origin)||t.close(function(){t.destroy()})},2e4):clearInterval(t.__garbageCollector),t},__prepareOrigin:function(){var i=this;if(i._$origin.off("."+i.__namespace+"-triggerOpen"),I.hasTouchCapability&&i._$origin.on("touchstart."+i.__namespace+"-triggerOpen touchend."+i.__namespace+"-triggerOpen touchcancel."+i.__namespace+"-triggerOpen",function(t){i._touchRecordEvent(t)}),i.__options.triggerOpen.click||i.__options.triggerOpen.tap&&I.hasTouchCapability){var t="";i.__options.triggerOpen.click&&(t+="click."+i.__namespace+"-triggerOpen "),i.__options.triggerOpen.tap&&I.hasTouchCapability&&(t+="touchend."+i.__namespace+"-triggerOpen"),i._$origin.on(t,function(t){i._touchIsMeaningfulEvent(t)&&i._open(t)})}if(i.__options.triggerOpen.mouseenter||i.__options.triggerOpen.touchstart&&I.hasTouchCapability){t="";i.__options.triggerOpen.mouseenter&&(t+="mouseenter."+i.__namespace+"-triggerOpen "),i.__options.triggerOpen.touchstart&&I.hasTouchCapability&&(t+="touchstart."+i.__namespace+"-triggerOpen"),i._$origin.on(t,function(t){!i._touchIsTouchEvent(t)&&i._touchIsEmulatedEvent(t)||(i.__pointerIsOverOrigin=!0,i._openShortly(t))})}if(i.__options.triggerClose.mouseleave||i.__options.triggerClose.touchleave&&I.hasTouchCapability){t="";i.__options.triggerClose.mouseleave&&(t+="mouseleave."+i.__namespace+"-triggerOpen "),i.__options.triggerClose.touchleave&&I.hasTouchCapability&&(t+="touchend."+i.__namespace+"-triggerOpen touchcancel."+i.__namespace+"-triggerOpen"),i._$origin.on(t,function(t){i._touchIsMeaningfulEvent(t)&&(i.__pointerIsOverOrigin=!1)})}return i},__prepareTooltip:function(){var o=this,t=o.__options.interactive?"auto":"";return o._$tooltip.attr("id",o.__namespace).css({"pointer-events":t,zIndex:o.__options.zIndex}),E.each(o.__previousThemes,function(t,i){o._$tooltip.removeClass(i)}),E.each(o.__options.theme,function(t,i){o._$tooltip.addClass(i)}),o.__previousThemes=E.merge([],o.__options.theme),o},__scrollHandler:function(t){var i=this;if(i.__options.triggerClose.scroll)i._close(t);else if(p(i._$origin)&&p(i._$tooltip)){var r=null;if(t.target===I.window.document)i.__Geometry.origin.fixedLineage||i.__options.repositionOnScroll&&i.reposition(t);else{r=i.__geometry();var _=!1;if("fixed"!=i._$origin.css("position")&&i.__$originParents.each(function(t,i){var o=E(i),e=o.css("overflow-x"),n=o.css("overflow-y");if("visible"!=e||"visible"!=n){var s=i.getBoundingClientRect();if("visible"!=e&&(r.origin.windowOffset.left<s.left||r.origin.windowOffset.right>s.right))return!(_=!0);if("visible"!=n&&(r.origin.windowOffset.top<s.top||r.origin.windowOffset.bottom>s.bottom))return!(_=!0)}if("fixed"==o.css("position"))return!1}),_)i._$tooltip.css("visibility","hidden");else if(i._$tooltip.css("visibility","visible"),i.__options.repositionOnScroll)i.reposition(t);else{var o=r.origin.offset.left-i.__Geometry.origin.offset.left,e=r.origin.offset.top-i.__Geometry.origin.offset.top;i._$tooltip.css({left:i.__lastPosition.coord.left+o,top:i.__lastPosition.coord.top+e})}}i._trigger({type:"scroll",event:t,geo:r})}return i},__stateSet:function(t){return this.__state=t,this._trigger({type:"state",state:t}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,E.each(this.__timeouts.close,function(t,i){clearTimeout(i)}),this.__timeouts.close=[],this},__trackerStart:function(){var e=this,n=e._$tooltip.find(".tooltipster-content");return e.__options.trackTooltip&&(e.__contentBcr=n[0].getBoundingClientRect()),e.__tracker=setInterval(function(){if(p(e._$origin)&&p(e._$tooltip)){if(e.__options.trackOrigin){var t=e.__geometry(),i=!1;s(t.origin.size,e.__Geometry.origin.size)&&(e.__Geometry.origin.fixedLineage?s(t.origin.windowOffset,e.__Geometry.origin.windowOffset)&&(i=!0):s(t.origin.offset,e.__Geometry.origin.offset)&&(i=!0)),i||(e.__options.triggerClose.mouseleave?e._close():e.reposition())}if(e.__options.trackTooltip){var o=n[0].getBoundingClientRect();o.height===e.__contentBcr.height&&o.width===e.__contentBcr.width||(e.reposition(),e.__contentBcr=o)}}else e._close()},e.__options.trackerInterval),e},_close:function(o,t,i){var e=this,n=!0;if(e._trigger({type:"close",event:o,stop:function(){n=!1}}),n||i){t&&e.__callbacks.close.push(t),e.__callbacks.open=[],e.__timeoutsClear();function s(){E.each(e.__callbacks.close,function(t,i){i.call(e,e,{event:o,origin:e._$origin[0]})}),e.__callbacks.close=[]}if("closed"!=e.__state){var r=!0,_=(new Date).getTime()+e.__options.animationDuration[1];if("disappearing"==e.__state&&_>e.__closingTime&&0<e.__options.animationDuration[1]&&(r=!1),r){e.__closingTime=_,"disappearing"!=e.__state&&e.__stateSet("disappearing");function a(){clearInterval(e.__tracker),e._trigger({type:"closing",event:o}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),E(I.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(t,i){E(i).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,E(I.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:o}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:o,origin:e._$origin[0]}),s()}I.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),0<e.__options.animationDuration[1]&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(a)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],a)}}else s()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(t,i){var o=this;if(!o.__destroying&&p(o._$origin)&&o.__enabled){var e=!0;if("closed"==o.__state&&(o._trigger({type:"before",event:t,stop:function(){e=!1}}),e&&o.__options.functionBefore&&(e=o.__options.functionBefore.call(o,o,{event:t,origin:o._$origin[0]}))),!1!==e&&null!==o.__Content){i&&o.__callbacks.open.push(i),o.__callbacks.close=[],o.__timeoutsClear();function n(){"stable"!=o.__state&&o.__stateSet("stable"),E.each(o.__callbacks.open,function(t,i){i.call(o,o,{origin:o._$origin[0],tooltip:o._$tooltip[0]})}),o.__callbacks.open=[]}var s;if("closed"!==o.__state)s=0,"disappearing"===o.__state?(o.__stateSet("appearing"),I.hasTransitions?(o._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),0<o.__options.animationDuration[0]&&o._$tooltip.delay(o.__options.animationDuration[0]),o._$tooltip.queue(n)):o._$tooltip.stop().fadeIn(n)):"stable"==o.__state&&n();else{if(o.__stateSet("appearing"),s=o.__options.animationDuration[0],o.__contentInsert(),o.reposition(t,!0),I.hasTransitions?(o._$tooltip.addClass("tooltipster-"+o.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":o.__options.animationDuration[0]+"ms","-ms-animation-duration":o.__options.animationDuration[0]+"ms","-o-animation-duration":o.__options.animationDuration[0]+"ms","-webkit-animation-duration":o.__options.animationDuration[0]+"ms","animation-duration":o.__options.animationDuration[0]+"ms","transition-duration":o.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=o.__state&&(o._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),0<o.__options.animationDuration[0]&&o._$tooltip.delay(o.__options.animationDuration[0]),o._$tooltip.queue(n))},0)):o._$tooltip.css("display","none").fadeIn(o.__options.animationDuration[0],n),o.__trackerStart(),E(I.window).on("resize."+o.__namespace+"-triggerClose",function(t){var i=E(document.activeElement);(i.is("input")||i.is("textarea"))&&E.contains(o._$tooltip[0],i[0])||o.reposition(t)}).on("scroll."+o.__namespace+"-triggerClose",function(t){o.__scrollHandler(t)}),o.__$originParents=o._$origin.parents(),o.__$originParents.each(function(t,i){E(i).on("scroll."+o.__namespace+"-triggerClose",function(t){o.__scrollHandler(t)})}),o.__options.triggerClose.mouseleave||o.__options.triggerClose.touchleave&&I.hasTouchCapability){o._on("dismissable",function(t){t.dismissable?t.delay?(l=setTimeout(function(){o._close(t.event)},t.delay),o.__timeouts.close.push(l)):o._close(t):clearTimeout(l)});var r=o._$origin,_="",a="",l=null;o.__options.interactive&&(r=r.add(o._$tooltip)),o.__options.triggerClose.mouseleave&&(_+="mouseenter."+o.__namespace+"-triggerClose ",a+="mouseleave."+o.__namespace+"-triggerClose "),o.__options.triggerClose.touchleave&&I.hasTouchCapability&&(_+="touchstart."+o.__namespace+"-triggerClose",a+="touchend."+o.__namespace+"-triggerClose touchcancel."+o.__namespace+"-triggerClose"),r.on(a,function(t){if(o._touchIsTouchEvent(t)||!o._touchIsEmulatedEvent(t)){var i="mouseleave"==t.type?o.__options.delay:o.__options.delayTouch;o._trigger({delay:i[1],dismissable:!0,event:t,type:"dismissable"})}}).on(_,function(t){!o._touchIsTouchEvent(t)&&o._touchIsEmulatedEvent(t)||o._trigger({dismissable:!1,event:t,type:"dismissable"})})}o.__options.triggerClose.originClick&&o._$origin.on("click."+o.__namespace+"-triggerClose",function(t){o._touchIsTouchEvent(t)||o._touchIsEmulatedEvent(t)||o._close(t)}),(o.__options.triggerClose.click||o.__options.triggerClose.tap&&I.hasTouchCapability)&&setTimeout(function(){if("closed"!=o.__state){var t="",i=E(I.window.document.body);o.__options.triggerClose.click&&(t+="click."+o.__namespace+"-triggerClose "),o.__options.triggerClose.tap&&I.hasTouchCapability&&(t+="touchend."+o.__namespace+"-triggerClose"),i.on(t,function(t){o._touchIsMeaningfulEvent(t)&&(o._touchRecordEvent(t),o.__options.interactive&&E.contains(o._$tooltip[0],t.target)||o._close(t))}),o.__options.triggerClose.tap&&I.hasTouchCapability&&i.on("touchstart."+o.__namespace+"-triggerClose",function(t){o._touchRecordEvent(t)})}},0),o._trigger("ready"),o.__options.functionReady&&o.__options.functionReady.call(o,o,{origin:o._$origin[0],tooltip:o._$tooltip[0]})}if(0<o.__options.timer){l=setTimeout(function(){o._close()},o.__options.timer+s);o.__timeouts.close.push(l)}}}return o},_openShortly:function(t){var i=this,o=!0;if("stable"!=i.__state&&"appearing"!=i.__state&&!i.__timeouts.open&&(i._trigger({type:"start",event:t,stop:function(){o=!1}}),o)){var e=0==t.type.indexOf("touch")?i.__options.delayTouch:i.__options.delay;e[0]?i.__timeouts.open=setTimeout(function(){i.__timeouts.open=null,i.__pointerIsOverOrigin&&i._touchIsMeaningfulEvent(t)?(i._trigger("startend"),i._open(t)):i._trigger("startcancel")},e[0]):(i._trigger("startend"),i._open(t))}return i},_optionsExtract:function(t,i){var e=this,o=E.extend(!0,{},i),n=e.__options[t];return n||(n={},E.each(i,function(t,i){var o=e.__options[t];void 0!==o&&(n[t]=o)})),E.each(o,function(t,i){void 0!==n[t]&&("object"!=typeof i||i instanceof Array||null==i||"object"!=typeof n[t]||n[t]instanceof Array||null==n[t]?o[t]=n[t]:E.extend(o[t],n[t]))}),o},_plug:function(t){var i=E.tooltipster._plugin(t);if(!i)throw new Error('The "'+t+'" plugin is not defined');return i.instance&&E.tooltipster.__bridge(i.instance,this,i.name),this},_touchIsEmulatedEvent:function(t){for(var i=!1,o=(new Date).getTime(),e=this.__touchEvents.length-1;0<=e;e--){var n=this.__touchEvents[e];if(!(o-n.time<500))break;n.target===t.target&&(i=!0)}return i},_touchIsMeaningfulEvent:function(t){return this._touchIsTouchEvent(t)&&!this._touchSwiped(t.target)||!this._touchIsTouchEvent(t)&&!this._touchIsEmulatedEvent(t)},_touchIsTouchEvent:function(t){return 0==t.type.indexOf("touch")},_touchRecordEvent:function(t){return this._touchIsTouchEvent(t)&&(t.time=(new Date).getTime(),this.__touchEvents.push(t)),this},_touchSwiped:function(t){for(var i=!1,o=this.__touchEvents.length-1;0<=o;o--){var e=this.__touchEvents[o];if("touchmove"==e.type){i=!0;break}if("touchstart"==e.type&&t===e.target)break}return i},_trigger:function(){var t=Array.prototype.slice.apply(arguments);return"string"==typeof t[0]&&(t[0]={type:t[0]}),t[0].instance=this,t[0].origin=this._$origin?this._$origin[0]:null,t[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,t),E.tooltipster._trigger.apply(E.tooltipster,t),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,t),this},_unplug:function(o){var e=this;if(e[o]){var t=E.tooltipster._plugin(o);t.instance&&E.each(t.instance,function(t,i){e[t]&&e[t].bridged===e[o]&&delete e[t]}),e[o].__destroy&&e[o].__destroy(),delete e[o]}return e},close:function(t){return this.__destroyed?this.__destroyError():this._close(null,t),this},content:function(t){var i=this;if(void 0===t)return i.__Content;if(i.__destroyed)i.__destroyError();else if(i.__contentSet(t),null!==i.__Content){if("closed"!==i.__state&&(i.__contentInsert(),i.reposition(),i.__options.updateAnimation))if(I.hasTransitions){var o=i.__options.updateAnimation;i._$tooltip.addClass("tooltipster-update-"+o),setTimeout(function(){"closed"!=i.__state&&i._$tooltip.removeClass("tooltipster-update-"+o)},1e3)}else i._$tooltip.fadeTo(200,.5,function(){"closed"!=i.__state&&i._$tooltip.fadeTo(200,1)})}else i._close();return i},destroy:function(){var o=this;if(o.__destroyed)o.__destroyError();else{"closed"!=o.__state?o.option("animationDuration",0)._close(null,null,!0):o.__timeoutsClear(),o._trigger("destroy"),o.__destroyed=!0,o._$origin.removeData(o.__namespace).off("."+o.__namespace+"-triggerOpen"),E(I.window.document.body).off("."+o.__namespace+"-triggerOpen");var t=o._$origin.data("tooltipster-ns");if(t)if(1===t.length){var i=null;"previous"==o.__options.restoration?i=o._$origin.data("tooltipster-initialTitle"):"current"==o.__options.restoration&&(i="string"==typeof o.__Content?o.__Content:E("<div></div>").append(o.__Content).html()),i&&o._$origin.attr("title",i),o._$origin.removeClass("tooltipstered"),o._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else t=E.grep(t,function(t,i){return t!==o.__namespace}),o._$origin.data("tooltipster-ns",t);o._trigger("destroyed"),o._off(),o.off(),o.__Content=null,o.__$emitterPrivate=null,o.__$emitterPublic=null,o.__options.parent=null,o._$origin=null,o._$tooltip=null,E.tooltipster.__instancesLatestArr=E.grep(E.tooltipster.__instancesLatestArr,function(t,i){return o!==t}),clearInterval(o.__garbageCollector)}return o},disable:function(){return this.__destroyed?this.__destroyError():(this._close(),this.__enabled=!1),this},elementOrigin:function(){if(!this.__destroyed)return this._$origin[0];this.__destroyError()},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(t){return this.close(t)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(t){return this.__destroyed?this.__destroyError():this._open(null,t),this},option:function(t,i){return void 0===i?this.__options[t]:(this.__destroyed?this.__destroyError():(this.__options[t]=i,this.__optionsFormat(),0<=E.inArray(t,["trigger","triggerClose","triggerOpen"])&&this.__prepareOrigin(),"selfDestruction"===t&&this.__prepareGC()),this)},reposition:function(t,i){var o=this;return o.__destroyed?o.__destroyError():"closed"!=o.__state&&p(o._$origin)&&(i||p(o._$tooltip))&&(i||o._$tooltip.detach(),o.__Geometry=o.__geometry(),o._trigger({type:"reposition",event:t,helper:{geo:o.__Geometry}})),o},show:function(t){return this.open(t)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},E.fn.tooltipster=function(){var n=Array.prototype.slice.apply(arguments),e="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof n[0]){var s="#*$~&";return this.each(function(){var t=E(this).data("tooltipster-ns"),i=t?E(this).data(t[0]):null;if(!i)throw new Error("You called Tooltipster's \""+n[0]+'" method on an uninitialized element');if("function"!=typeof i[n[0]])throw new Error('Unknown method "'+n[0]+'"');1<this.length&&"content"==n[0]&&(n[1]instanceof E||"object"==typeof n[1]&&null!=n[1]&&n[1].tagName)&&!i.__options.contentCloning&&i.__options.debug&&console.log(e);var o=i[n[0]](n[1],n[2]);if(o!==i||"instance"===n[0])return s=o,!1}),"#*$~&"!==s?s:this}E.tooltipster.__instancesLatestArr=[];var t=n[0]&&void 0!==n[0].multiple,r=t&&n[0].multiple||!t&&c.multiple,i=n[0]&&void 0!==n[0].content,o=i&&n[0].content||!i&&c.content,_=n[0]&&void 0!==n[0].contentCloning,a=_&&n[0].contentCloning||!_&&c.contentCloning,l=n[0]&&void 0!==n[0].debug,p=l&&n[0].debug||!l&&c.debug;return 1<this.length&&(o instanceof E||"object"==typeof o&&null!=o&&o.tagName)&&!a&&p&&console.log(e),this.each(function(){var t=!1,i=E(this),o=i.data("tooltipster-ns"),e=null;!o||r?t=!0:p&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)),t&&(e=new E.Tooltipster(this,n[0]),(o=o||[]).push(e.__namespace),i.data("tooltipster-ns",o),i.data(e.__namespace,e),e.__options.functionInit&&e.__options.functionInit.call(e,e,{origin:this}),e._trigger("init")),E.tooltipster.__instancesLatestArr.push(e)}),this},i.prototype={__init:function(t){this.__$tooltip=t,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=E('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(I.window.document.body)},__forceRedraw:function(){var t=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(t)},constrain:function(t,i){return this.constraints={width:t,height:i},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:t}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var t=this.__$tooltip[0].getBoundingClientRect(),i={size:{height:t.height||t.bottom-t.top,width:t.width||t.right-t.left}};if(this.constraints){var o=this.__$tooltip.find(".tooltipster-content"),e=this.__$tooltip.outerHeight(),n=o[0].getBoundingClientRect(),s={height:e<=this.constraints.height,width:t.width<=this.constraints.width&&n.width>=o[0].scrollWidth-1};i.fits=s.height&&s.width}return I.IE&&I.IE<=11&&i.size.width!==I.window.document.documentElement.clientWidth&&(i.size.width=Math.ceil(i.size.width)+1),i}};var o=navigator.userAgent.toLowerCase();-1!=o.indexOf("msie")?I.IE=parseInt(o.split("msie")[1]):-1!==o.toLowerCase().indexOf("trident")&&-1!==o.indexOf(" rv:11")?I.IE=11:-1!=o.toLowerCase().indexOf("edge/")&&(I.IE=parseInt(o.toLowerCase().split("edge/")[1]));var e="tooltipster.sideTip";return E.tooltipster._plugin({name:e,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(t){var i=this;i.__instance=t,i.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),i.__previousState="closed",i.__options,i.__optionsFormat(),i.__instance._on("state."+i.__namespace,function(t){"closed"==t.state?i.__close():"appearing"==t.state&&"closed"==i.__previousState&&i.__create(),i.__previousState=t.state}),i.__instance._on("options."+i.__namespace,function(){i.__optionsFormat()}),i.__instance._on("reposition."+i.__namespace,function(t){i.__reposition(t.event,t.helper)})},__close:function(){this.__instance.content()instanceof E&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var t=E('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||t.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&t.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&t.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=t,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var t=this;if(t.__options=t.__instance._optionsExtract(e,t.__defaults()),t.__options.position&&(t.__options.side=t.__options.position),"object"!=typeof t.__options.distance&&(t.__options.distance=[t.__options.distance]),t.__options.distance.length<4&&(void 0===t.__options.distance[1]&&(t.__options.distance[1]=t.__options.distance[0]),void 0===t.__options.distance[2]&&(t.__options.distance[2]=t.__options.distance[0]),void 0===t.__options.distance[3]&&(t.__options.distance[3]=t.__options.distance[1]),t.__options.distance={top:t.__options.distance[0],right:t.__options.distance[1],bottom:t.__options.distance[2],left:t.__options.distance[3]}),"string"==typeof t.__options.side){t.__options.side=[t.__options.side,{top:"bottom",right:"left",bottom:"top",left:"right"}[t.__options.side]],"left"==t.__options.side[0]||"right"==t.__options.side[0]?t.__options.side.push("top","bottom"):t.__options.side.push("right","left")}6===E.tooltipster._env.IE&&!0!==t.__options.arrow&&(t.__options.arrow=!1)},__reposition:function(a,l){var i,p=this,c=p.__targetFind(l),h=[];p.__instance._$tooltip.detach();var o=p.__instance._$tooltip.clone(),d=E.tooltipster._getRuler(o),u=!1,t=p.__instance.option("animation");switch(t&&o.removeClass("tooltipster-"+t),E.each(["window","document"],function(t,n){var s=null;if(p.__instance._trigger({container:n,helper:l,satisfied:u,takeTest:function(t){s=t},results:h,type:"positionTest"}),1==s||0!=s&&0==u&&("window"!=n||p.__options.viewportAware))for(t=0;t<p.__options.side.length;t++){var r={horizontal:0,vertical:0},_=p.__options.side[t];"top"==_||"bottom"==_?r.vertical=p.__options.distance[_]:r.horizontal=p.__options.distance[_],p.__sideChange(o,_),E.each(["natural","constrained"],function(t,i){if(s=null,p.__instance._trigger({container:n,event:a,helper:l,mode:i,results:h,satisfied:u,side:_,takeTest:function(t){s=t},type:"positionTest"}),1==s||0!=s&&0==u){var o={container:n,distance:r,fits:null,mode:i,outerSize:null,side:_,size:null,target:c[_],whole:null},e=("natural"==i?d.free():d.constrain(l.geo.available[n][_].width-r.horizontal,l.geo.available[n][_].height-r.vertical)).measure();if(o.size=e.size,o.outerSize={height:e.size.height+r.vertical,width:e.size.width+r.horizontal},"natural"==i?l.geo.available[n][_].width>=o.outerSize.width&&l.geo.available[n][_].height>=o.outerSize.height?o.fits=!0:o.fits=!1:o.fits=e.fits,"window"==n&&(o.fits?o.whole="top"==_||"bottom"==_?l.geo.origin.windowOffset.right>=p.__options.minIntersection&&l.geo.window.size.width-l.geo.origin.windowOffset.left>=p.__options.minIntersection:l.geo.origin.windowOffset.bottom>=p.__options.minIntersection&&l.geo.window.size.height-l.geo.origin.windowOffset.top>=p.__options.minIntersection:o.whole=!1),h.push(o),o.whole)u=!0;else if("natural"==o.mode&&(o.fits||o.size.width<=l.geo.available[n][_].width))return!1}})}}),p.__instance._trigger({edit:function(t){h=t},event:a,helper:l,results:h,type:"positionTested"}),h.sort(function(t,i){return t.whole&&!i.whole?-1:!t.whole&&i.whole?1:t.whole&&i.whole?(o=p.__options.side.indexOf(t.side))<(e=p.__options.side.indexOf(i.side))||!(e<o)&&"natural"==t.mode?-1:1:t.fits&&!i.fits?-1:!t.fits&&i.fits?1:t.fits&&i.fits?(o=p.__options.side.indexOf(t.side))<(e=p.__options.side.indexOf(i.side))||!(e<o)&&"natural"==t.mode?-1:1:"document"==t.container&&"bottom"==t.side&&"natural"==t.mode?-1:1;var o,e}),(i=h[0]).coord={},i.side){case"left":case"right":i.coord.top=Math.floor(i.target-i.size.height/2);break;case"bottom":case"top":i.coord.left=Math.floor(i.target-i.size.width/2)}switch(i.side){case"left":i.coord.left=l.geo.origin.windowOffset.left-i.outerSize.width;break;case"right":i.coord.left=l.geo.origin.windowOffset.right+i.distance.horizontal;break;case"top":i.coord.top=l.geo.origin.windowOffset.top-i.outerSize.height;break;case"bottom":i.coord.top=l.geo.origin.windowOffset.bottom+i.distance.vertical}"window"==i.container?"top"==i.side||"bottom"==i.side?i.coord.left<0?0<=l.geo.origin.windowOffset.right-this.__options.minIntersection?i.coord.left=0:i.coord.left=l.geo.origin.windowOffset.right-this.__options.minIntersection-1:i.coord.left>l.geo.window.size.width-i.size.width&&(l.geo.origin.windowOffset.left+this.__options.minIntersection<=l.geo.window.size.width?i.coord.left=l.geo.window.size.width-i.size.width:i.coord.left=l.geo.origin.windowOffset.left+this.__options.minIntersection+1-i.size.width):i.coord.top<0?0<=l.geo.origin.windowOffset.bottom-this.__options.minIntersection?i.coord.top=0:i.coord.top=l.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:i.coord.top>l.geo.window.size.height-i.size.height&&(l.geo.origin.windowOffset.top+this.__options.minIntersection<=l.geo.window.size.height?i.coord.top=l.geo.window.size.height-i.size.height:i.coord.top=l.geo.origin.windowOffset.top+this.__options.minIntersection+1-i.size.height):(i.coord.left>l.geo.window.size.width-i.size.width&&(i.coord.left=l.geo.window.size.width-i.size.width),i.coord.left<0&&(i.coord.left=0)),p.__sideChange(o,i.side),l.tooltipClone=o[0],l.tooltipParent=p.__instance.option("parent").parent[0],l.mode=i.mode,l.whole=i.whole,l.origin=p.__instance._$origin[0],l.tooltip=p.__instance._$tooltip[0],delete i.container,delete i.fits,delete i.mode,delete i.outerSize,delete i.whole,i.distance=i.distance.horizontal||i.distance.vertical;var e,n,s,r=E.extend(!0,{},i);if(p.__instance._trigger({edit:function(t){i=t},event:a,helper:l,position:r,type:"position"}),p.__options.functionPosition){var _=p.__options.functionPosition.call(p,p.__instance,l,r);_&&(i=_)}d.destroy(),n="top"==i.side||"bottom"==i.side?(e={prop:"left",val:i.target-i.coord.left},i.size.width-this.__options.minIntersection):(e={prop:"top",val:i.target-i.coord.top},i.size.height-this.__options.minIntersection),e.val<this.__options.minIntersection?e.val=this.__options.minIntersection:e.val>n&&(e.val=n),s=l.geo.origin.fixedLineage?l.geo.origin.windowOffset:{left:l.geo.origin.windowOffset.left+l.geo.window.scroll.left,top:l.geo.origin.windowOffset.top+l.geo.window.scroll.top},i.coord={left:s.left+(i.coord.left-l.geo.origin.windowOffset.left),top:s.top+(i.coord.top-l.geo.origin.windowOffset.top)},p.__sideChange(p.__instance._$tooltip,i.side),l.geo.origin.fixedLineage?p.__instance._$tooltip.css("position","fixed"):p.__instance._$tooltip.css("position",""),p.__instance._$tooltip.css({left:i.coord.left,top:i.coord.top,height:i.size.height,width:i.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(e.prop,e.val),p.__instance._$tooltip.appendTo(p.__instance.option("parent")),p.__instance._trigger({type:"repositioned",event:a,position:i})},__sideChange:function(t,i){t.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+i)},__targetFind:function(t){var i={},o=this.__instance._$origin[0].getClientRects();1<o.length&&1==this.__instance._$origin.css("opacity")&&(this.__instance._$origin.css("opacity",.99),o=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1));if(o.length<2)i.top=Math.floor(t.geo.origin.windowOffset.left+t.geo.origin.size.width/2),i.bottom=i.top,i.left=Math.floor(t.geo.origin.windowOffset.top+t.geo.origin.size.height/2),i.right=i.left;else{var e=o[0];i.top=Math.floor(e.left+(e.right-e.left)/2),e=2<o.length?o[Math.ceil(o.length/2)-1]:o[0],i.right=Math.floor(e.top+(e.bottom-e.top)/2),e=o[o.length-1],i.bottom=Math.floor(e.left+(e.right-e.left)/2),e=2<o.length?o[Math.ceil((o.length+1)/2)-1]:o[o.length-1],i.left=Math.floor(e.top+(e.bottom-e.top)/2)}return i}}}),E});var PricingTooltip=function(t,a){if(a.fn.tooltipster){var i,o=t.find(".tooltip");for(i=0;i<o.length;i++){var e=a("#"+a(o[i]).attr("id")),n=void 0!==e.data("side")&&e.data("side"),d=void 0!==e.data("trigger")?e.data("trigger"):"hover",r=void 0!==e.data("animation")?e.data("animation"):"fade",l=void 0!==e.data("animation_duration")?e.data("animation_duration"):300,f=void 0!==e.data("theme")?e.data("theme"):"default",m="yes"==e.data("arrow");e.tooltipster({animation:r,trigger:d,side:n,delay:l,arrow:m,theme:"tooltipster-"+f})}}};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-pricing-table.default",PricingTooltip)});var TwitterFeedHandler=function(e,t){isEditMode||($gutter=t(".eael-twitter-feed-masonry",e).data("gutter"),$settings={itemSelector:".eael-twitter-feed-item",percentPosition:!0,masonry:{columnWidth:".eael-twitter-feed-item",gutter:$gutter}},$twitter_feed_gallery=t(".eael-twitter-feed-masonry",e).isotope($settings),$twitter_feed_gallery.imagesLoaded().progress(function(){$twitter_feed_gallery.isotope("layout")}))};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-twitter-feed.default",TwitterFeedHandler)});var FacebookFeed=function(o,t){isEditMode||($facebook_gallery=t(".eael-facebook-feed",o).isotope({itemSelector:".eael-facebook-feed-item",percentPosition:!0,columnWidth:".eael-facebook-feed-item"}),$facebook_gallery.imagesLoaded().progress(function(){$facebook_gallery.isotope("layout")})),t(".eael-load-more-button",o).on("click",function(e){e.preventDefault(),$this=t(this),$settings=$this.attr("data-settings"),$page=$this.attr("data-page"),$loadmore_text=$this.attr("data-loadmore-text"),$this.addClass("button--loading"),t("span",$this).html("Loading..."),t.ajax({url:localize.ajaxurl,type:"post",data:{action:"facebook_feed_load_more",security:localize.nonce,settings:$settings,page:$page},success:function(e){$html=t(e.html),$facebook_gallery=t(".eael-facebook-feed",o).isotope(),t(".eael-facebook-feed",o).append($html),$facebook_gallery.isotope("appended",$html),$facebook_gallery.imagesLoaded().progress(function(){$facebook_gallery.isotope("layout")}),e.num_pages>$page?($this.attr("data-page",parseInt($page)+1),$this.removeClass("button--loading"),t("span",$this).html($loadmore_text)):$this.remove()},error:function(){}})})};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-facebook-feed.default",FacebookFeed)});var advanced_data_table_timeout,advanced_data_table_drag_start_x,advanced_data_table_drag_start_width,advanced_data_table_drag_el,advanced_data_table_active_cell=null,advanced_data_table_dragging=!1,Advanced_Data_Table_Update_View=function(e,a,t){var n=e.model;if(n.remoteRender=a,"2.7.6"<elementor.config.version){var r=e.getContainer(),d=e.getContainer().settings.attributes;Object.keys(t).forEach(function(e){d[e]=t[e]}),parent.window.$e.run("document/elements/settings",{container:r,settings:d,options:{external:a}})}else Object.keys(t).forEach(function(e){n.setSetting(e,t[e])});advanced_data_table_timeout=setTimeout(function(){n.remoteRender=!0},1001)},Advanced_Data_Table_Update_Model=function(a,e,t,n){if(a.remoteRender=t,"2.7.6"<elementor.config.version){var r=e.settings.attributes;Object.keys(n).forEach(function(e){r[e]=n[e]}),parent.window.$e.run("document/elements/settings",{container:e,settings:r,options:{external:t}})}else Object.keys(n).forEach(function(e){a.setSetting(e,n[e])});advanced_data_table_timeout=setTimeout(function(){a.remoteRender=!0},1001)},Advanced_Data_Table=function(e,n){var u=e.context.querySelector(".ea-advanced-data-table"),a=e.context.querySelector(".ea-advanced-data-table-search"),v=e.context.querySelector(".ea-advanced-data-table-pagination"),b={};if(isEditMode){var t="readonly";u.classList.contains("ea-advanced-data-table-static")&&(t="",u.querySelectorAll("th, td").forEach(function(e){var a=e.innerHTML;0!==a.indexOf('<textarea rows="1">')&&(e.innerHTML='<textarea rows="1" '+t+">"+a+"</textarea>")})),u.addEventListener("mousedown",function(e){"th"===e.target.tagName.toLowerCase()&&(e.stopPropagation(),advanced_data_table_dragging=!0,advanced_data_table_drag_el=e.target,advanced_data_table_drag_start_x=e.pageX,advanced_data_table_drag_start_width=e.target.offsetWidth)}),document.addEventListener("mousemove",function(e){advanced_data_table_dragging&&(advanced_data_table_drag_el.style.width=advanced_data_table_drag_start_width+(event.pageX-advanced_data_table_drag_start_x)+"px")}),document.addEventListener("mouseup",function(e){advanced_data_table_dragging=advanced_data_table_dragging&&!1})}else{if(a&&a.addEventListener("input",function(e){var a=this.value.toLowerCase(),t=u.classList.contains("ea-advanced-data-table-sortable"),n="thead"==u.rows[0].parentNode.tagName.toLowerCase()?1:0;if(1<u.rows.length)if(0<a.length){t&&u.classList.add("ea-advanced-data-table-unsortable"),v&&0<v.innerHTML.length&&(v.style.display="none");for(var r=n;r<u.rows.length;r++){var d=!1;if(0<u.rows[r].cells.length)for(var l=0;l<u.rows[r].cells.length;l++)if(-1<u.rows[r].cells[l].textContent.toLowerCase().indexOf(a)){d=!0;break}u.rows[r].style.display=d?"table-row":"none"}}else if(t&&u.classList.remove("ea-advanced-data-table-unsortable"),v&&0<v.innerHTML.length){v.style.display="";var o=v.querySelector(".ea-advanced-data-table-pagination-current").dataset.page,c=(o-1)*u.dataset.itemsPerPage+1,i=o*u.dataset.itemsPerPage;for(r=1;r<=u.rows.length-1;r++)u.rows[r].style.display=c<=r&&r<=i?"table-row":"none"}else for(r=1;r<=u.rows.length-1;r++)u.rows[r].style.display="table-row"}),u.classList.contains("ea-advanced-data-table-sortable")&&u.addEventListener("click",function(e){if("th"===e.target.tagName.toLowerCase()){var a=e.target.cellIndex,t=1,n=1,r=u.rows.length-1,d="",l=e.target.classList,o=[],c=u.cloneNode(!0);d=l.contains("asc")?(e.target.classList.remove("asc"),e.target.classList.add("desc"),"desc"):(l.contains("desc")&&e.target.classList.remove("desc"),e.target.classList.add("asc"),"asc"),v&&0<v.innerHTML.length&&(t=v.querySelector(".ea-advanced-data-table-pagination-current").dataset.page,n=(t-1)*u.dataset.itemsPerPage+1,r=r-(t-1)*u.dataset.itemsPerPage>=u.dataset.itemsPerPage?t*u.dataset.itemsPerPage:r),b[t]=[],u.querySelectorAll("th").forEach(function(e){e.cellIndex!=a&&e.classList.remove("asc","desc"),b[t].push(e.classList.contains("asc")?"asc":e.classList.contains("desc")?"desc":"")});for(var i=n;i<=r;i++){var s,_=u.rows[i].cells[a];s=isNaN(parseInt(_.innerText))?_.innerText.toLowerCase():parseInt(_.innerText),o.push({index:i,value:s})}"asc"==d?o.sort(function(e,a){return e.value>a.value?1:-1}):"desc"==d&&o.sort(function(e,a){return e.value<a.value?1:-1}),o.forEach(function(e,a){u.rows[n+a].innerHTML=c.rows[e.index].innerHTML})}}),u.classList.contains("ea-advanced-data-table-paginated")){var r="",d=v.classList.contains("ea-advanced-data-table-pagination-button")?"button":"select",l=1,o="thead"==u.rows[0].parentNode.tagName.toLowerCase()?1:0,c=l*u.dataset.itemsPerPage,i=Math.ceil((u.rows.length-1)/u.dataset.itemsPerPage);if(1<i)if("button"==d){for(var s=1;s<=i;s++)r+='<a href="#" data-page="'+s+'" class="'+(1==s?"ea-advanced-data-table-pagination-current":"")+'">'+s+"</a>";v.insertAdjacentHTML("beforeend",'<a href="#" data-page="1">&laquo;</a>'+r+'<a href="#" data-page="'+i+'">&raquo;</a>')}else{for(s=1;s<=i;s++)r+='<option value="'+s+'">'+s+"</option>";v.insertAdjacentHTML("beforeend","<select>"+r+"</select>")}for(s=0;s<=c&&!(s>=u.rows.length);s++)u.rows[s].style.display="table-row";"button"==d?v.addEventListener("click",function(e){if(e.preventDefault(),"a"==e.target.tagName.toLowerCase()){l=e.target.dataset.page,offset="thead"==u.rows[0].parentNode.tagName.toLowerCase()?1:0,o=(l-1)*u.dataset.itemsPerPage+offset,c=l*u.dataset.itemsPerPage,v.querySelectorAll(".ea-advanced-data-table-pagination-current").forEach(function(e){e.classList.remove("ea-advanced-data-table-pagination-current")}),v.querySelectorAll('[data-page="'+l+'"]').forEach(function(e){e.classList.add("ea-advanced-data-table-pagination-current")});for(var a=offset;a<=u.rows.length-1;a++)u.rows[a].style.display=o<=a&&a<=c?"table-row":"none";u.querySelectorAll("th").forEach(function(e,a){e.classList.remove("asc","desc"),void 0!==b[l]&&b[l][a]&&e.classList.add(b[l][a])})}}):v.hasChildNodes()&&v.querySelector("select").addEventListener("input",function(e){e.preventDefault(),l=e.target.value,offset="thead"==u.rows[0].parentNode.tagName.toLowerCase()?1:0,o=(l-1)*u.dataset.itemsPerPage+offset,c=l*u.dataset.itemsPerPage;for(var a=offset;a<=u.rows.length-1;a++)u.rows[a].style.display=o<=a&&a<=c?"table-row":"none";u.querySelectorAll("th").forEach(function(e,a){e.classList.remove("asc","desc"),void 0!==b[l]&&b[l][a]&&e.classList.add(b[l][a])})})}u.querySelectorAll(".nt_button_woo").forEach(function(e){e.classList.add("add_to_cart_button","ajax_add_to_cart")}),u.querySelectorAll(".nt_woo_quantity").forEach(function(e){e.addEventListener("input",function(e){var a=e.target.dataset.product_id,t=e.target.value;n(".nt_add_to_cart_"+a,n(u)).data("quantity",t)})})}},Advanced_Data_Table_Click_Handler=function(a,e,n){if("ea:advTable:export"==event.target.dataset.event){for(var t=n.el.querySelector(".ea-advanced-data-table-"+e.attributes.id),r=t.querySelectorAll("table tr"),d=[],l=0;l<r.length;l++){var o=[],c=r[l].querySelectorAll("th, td");if(t.classList.contains("ea-advanced-data-table-static"))for(var i=0;i<c.length;i++)o.push(JSON.stringify(c[i].querySelector("textarea").value.replace(/(\r\n|\n|\r)/gm," ").trim()));else for(i=0;i<c.length;i++)o.push(JSON.stringify(c[i].innerHTML.replace(/(\r\n|\n|\r)/gm," ").trim()));d.push(o.join(","))}var s=new Blob([d.join("\n")],{type:"text/csv"}),_=parent.document.createElement("a");_.classList.add("ea-adv-data-table-download-"+e.attributes.id),_.download="ea-adv-data-table-"+e.attributes.id+".csv",_.href=window.URL.createObjectURL(s),_.style.display="none",parent.document.body.appendChild(_),_.click(),parent.document.querySelector(".ea-adv-data-table-download-"+e.attributes.id).remove()}else if("ea:advTable:import"==event.target.dataset.event){var u=a.el.querySelector(".ea_adv_table_csv_string"),v=a.el.querySelector(".ea_adv_table_csv_string_table").checked,b=u.value.split("\n"),f="",g="";0<u.value.length&&(g+="<tbody>",b.forEach(function(e,a){0<e.length&&0<(c=e.match(/("(?:[^"\\]|\\.)*"|[^","]+)/gm)).length&&(v&&0==a?(f+="<thead><tr>",c.forEach(function(e){e.match(/(^"")|(^")|("$)|(""$)/g)?f+="<th>"+JSON.parse(e)+"</th>":f+="<th>"+e+"</th>"}),f+="</tr></thead>"):(g+="<tr>",c.forEach(function(e){e.match(/(^"")|(^")|("$)|(""$)/g)?g+="<td>"+JSON.parse(e)+"</td>":g+="<td>"+e+"</td>"}),g+="</tr>"))}),g+="</tbody>",(0<f.length||0<g.length)&&Advanced_Data_Table_Update_View(n,!0,{ea_adv_data_table_static_html:f+g})),u.value=""}else if("ea:advTable:connect"==event.target.dataset.event){var m=event.target;m.innerHTML="Connecting",jQuery.ajax({url:localize.ajaxurl,type:"post",data:{action:"connect_remote_db",security:localize.nonce,host:e.attributes.settings.attributes.ea_adv_data_table_source_remote_host,username:e.attributes.settings.attributes.ea_adv_data_table_source_remote_username,password:e.attributes.settings.attributes.ea_adv_data_table_source_remote_password,database:e.attributes.settings.attributes.ea_adv_data_table_source_remote_database},success:function(e){if(1==e.connected){m.innerHTML="Connected",Advanced_Data_Table_Update_View(n,!0,{ea_adv_data_table_source_remote_connected:!0,ea_adv_data_table_source_remote_tables:e.tables}),a.content.el.querySelector(".elementor-section-title").click(),a.content.el.querySelector(".elementor-section-title").click();var t=a.el.querySelector('[data-setting="ea_adv_data_table_source_remote_table"]');t.length=0,e.tables.forEach(function(e,a){t[a]=new Option(e,e)})}else m.innerHTML="Failed"},error:function(){m.innerHTML="Failed"}}),setTimeout(function(){m.innerHTML="Connect"},2e3)}else"ea:advTable:disconnect"==event.target.dataset.event&&(Advanced_Data_Table_Update_View(n,!0,{ea_adv_data_table_source_remote_connected:!1,ea_adv_data_table_source_remote_tables:[]}),a.content.el.querySelector(".elementor-section-title").click(),a.content.el.querySelector(".elementor-section-title").click())},Advanced_Data_Table_Inline_Edit=function(e,r,d){function a(){var e=setInterval(function(){if(d.el.querySelector(".ea-advanced-data-table")){var n=d.el.querySelector(".ea-advanced-data-table-"+r.attributes.id);n.addEventListener("focusin",function(e){"textarea"==e.target.tagName.toLowerCase()&&(advanced_data_table_active_cell=e.target)}),n.addEventListener("input",function(e){if("textarea"==e.target.tagName.toLowerCase()){clearTimeout(advanced_data_table_timeout);var a=n.cloneNode(!0);a.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_View(d,!1,{ea_adv_data_table_static_html:a.innerHTML})}}),n.addEventListener("mouseup",function(e){if(clearTimeout(advanced_data_table_timeout),"th"===e.target.tagName.toLowerCase())if(n.classList.contains("ea-advanced-data-table-static")){var a=n.cloneNode(!0);a.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_View(d,!1,{ea_adv_data_table_static_html:a.innerHTML})}else{var t=[];n.querySelectorAll("th").forEach(function(e,a){t[a]=e.style.width}),Advanced_Data_Table_Update_View(d,!1,{ea_adv_data_table_dynamic_th_width:t})}}),n.addEventListener("dblclick",function(e){"th"===e.target.tagName.toLowerCase()&&(e.stopPropagation(),e.target.style.width="")}),clearInterval(e)}},10)}a(),r.on("remote:render",function(){a()});var t=Advanced_Data_Table_Click_Handler.bind(this,e,r,d);e.el.addEventListener("click",t),e.currentPageView.on("destroy",function(){e.el.removeEventListener("click",t)});function n(){setTimeout(function(){var t=e.el.querySelector('[data-setting="ea_adv_data_table_source_remote_table"]');null!=t&&0==t.length&&r.attributes.settings.attributes.ea_adv_data_table_source_remote_tables.forEach(function(e,a){t[a]=new Option(e,e,!1,e==r.attributes.settings.attributes.ea_adv_data_table_source_remote_table)})},50)}n(),e.el.addEventListener("mousedown",function(e){(e.target.classList.contains("elementor-section-title")||e.target.parentNode.classList.contains("elementor-panel-navigation-tab"))&&n()})};Advanced_Data_Table_Context_Menu=function(e,d){return"eael-advanced-data-table"==d.options.model.attributes.widgetType&&"static"==d.options.model.attributes.settings.attributes.ea_adv_data_table_source&&e.push({name:"ea_advanced_data_table",actions:[{name:"add_row_above",title:"Add Row Above",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell&&"th"!=advanced_data_table_active_cell.parentNode.tagName.toLowerCase()){for(var a=advanced_data_table_active_cell.parentNode.parentNode.rowIndex,t=e.insertRow(a),n=0;n<e.rows[0].cells.length;n++){t.insertCell(n).innerHTML='<textarea rows="1"></textarea>'}advanced_data_table_active_cell=null;var r=e.cloneNode(!0);r.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:r.innerHTML})}}},{name:"add_row_below",title:"Add Row Below",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell){for(var a=advanced_data_table_active_cell.parentNode.parentNode.rowIndex+1,t=e.insertRow(a),n=0;n<e.rows[0].cells.length;n++){t.insertCell(n).innerHTML='<textarea rows="1"></textarea>'}advanced_data_table_active_cell=null;var r=e.cloneNode(!0);r.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:r.innerHTML})}}},{name:"add_column_left",title:"Add Column Left",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell){for(var a=advanced_data_table_active_cell.parentNode.cellIndex,t=0;t<e.rows.length;t++){if("th"==e.rows[t].cells[0].tagName.toLowerCase())var n=e.rows[t].insertBefore(document.createElement("th"),e.rows[t].cells[a]);else n=e.rows[t].insertCell(a);n.innerHTML='<textarea rows="1"></textarea>'}advanced_data_table_active_cell=null;var r=e.cloneNode(!0);r.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:r.innerHTML})}}},{name:"add_column_right",title:"Add Column Right",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell){for(var a=advanced_data_table_active_cell.parentNode.cellIndex+1,t=0;t<e.rows.length;t++){if("th"==e.rows[t].cells[0].tagName.toLowerCase())var n=e.rows[t].insertBefore(document.createElement("th"),e.rows[t].cells[a]);else n=e.rows[t].insertCell(a);n.innerHTML='<textarea rows="1"></textarea>'}advanced_data_table_active_cell=null;var r=e.cloneNode(!0);r.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:r.innerHTML})}}},{name:"delete_row",title:"Delete Row",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell){var a=advanced_data_table_active_cell.parentNode.parentNode.rowIndex;e.deleteRow(a),advanced_data_table_active_cell=null;var t=e.cloneNode(!0);t.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:t.innerHTML})}}},{name:"delete_column",title:"Delete Column",callback:function(){var e=document.querySelector(".ea-advanced-data-table-"+d.options.model.attributes.id);if(null!==advanced_data_table_active_cell){for(var a=advanced_data_table_active_cell.parentNode.cellIndex,t=0;t<e.rows.length;t++)e.rows[t].deleteCell(a);advanced_data_table_active_cell=null;var n=e.cloneNode(!0);n.querySelectorAll("th, td").forEach(function(e){var a=e.querySelector("textarea").value;e.innerHTML=a}),Advanced_Data_Table_Update_Model(d.options.model,d.container,!1,{ea_adv_data_table_static_html:n.innerHTML})}}}]}),e},jQuery(window).on("elementor/frontend/init",function(){isEditMode&&(elementor.hooks.addFilter("elements/widget/contextMenuGroups",Advanced_Data_Table_Context_Menu),elementor.hooks.addAction("panel/open_editor/widget/eael-advanced-data-table",Advanced_Data_Table_Inline_Edit)),elementorFrontend.hooks.addAction("frontend/element_ready/eael-advanced-data-table.default",Advanced_Data_Table)});var dataTable=function(e,a){var t=e.find(".eael-data-table-wrap");t.data("table_id");if("undefined"!=typeof enableProSorter&&a.isFunction(enableProSorter)&&a(document).ready(function(){enableProSorter(jQuery,t)}),1==t.data("custom_responsive")){var n=e.find(".eael-data-table").find("th");e.find(".eael-data-table").find("tbody").find("tr").each(function(e,t){a(t).find("td .td-content-wrapper").each(function(e,t){a(this).prepend('<div class="th-mobile-screen">'+n.eq(e).html()+"</div>")})})}},Data_Table_Click_Handler=function(e,t,a){if("ea:table:export"==event.target.dataset.event){for(var n=a.el.querySelector("#eael-data-table-"+t.attributes.id).querySelectorAll("table tr"),d=[],r=0;r<n.length;r++){for(var l=[],o=n[r].querySelectorAll("th, td"),i=0;i<o.length;i++)l.push(JSON.stringify(o[i].innerText.replace(/(\r\n|\n|\r)/gm," ").trim()));d.push(l.join(","))}var c=new Blob([d.join("\n")],{type:"text/csv"}),b=parent.document.createElement("a");b.classList.add("eael-data-table-download-"+t.attributes.id),b.download="eael-data-table-"+t.attributes.id+".csv",b.href=window.URL.createObjectURL(c),b.style.display="none",parent.document.body.appendChild(b),b.click(),parent.document.querySelector(".eael-data-table-download-"+t.attributes.id).remove()}},data_table_panel=function(e,t,a){var n=Data_Table_Click_Handler.bind(this,e,t,a);e.el.addEventListener("click",n),e.currentPageView.on("destroy",function(){e.el.removeEventListener("click",n)})};jQuery(window).on("elementor/frontend/init",function(){isEditMode&&elementor.hooks.addAction("panel/open_editor/widget/eael-data-table",data_table_panel),elementorFrontend.hooks.addAction("frontend/element_ready/eael-data-table.default",dataTable)});!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(d){function e(){}function u(e,t){g.ev.on(n+e+w,t)}function p(e,t,n,i){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),i?t&&t.appendChild(o):(o=d(o),t&&o.appendTo(t)),o}function f(e,t){g.ev.triggerHandler(n+e,t),g.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),g.st.callbacks[e]&&g.st.callbacks[e].apply(g,d.isArray(t)?t:[t]))}function m(e){return e===t&&g.currTemplate.closeBtn||(g.currTemplate.closeBtn=d(g.st.closeMarkup.replace("%title%",g.st.tClose)),t=e),g.currTemplate.closeBtn}function a(){d.magnificPopup.instance||((g=new e).init(),d.magnificPopup.instance=g)}var g,i,h,o,v,t,l="Close",c="BeforeClose",y="MarkupParse",C="Open",r="Change",n="mfp",w="."+n,b="mfp-ready",s="mfp-removing",I="mfp-prevent-close",x=!!window.jQuery,k=d(window);e.prototype={constructor:e,init:function(){var e=navigator.appVersion;g.isLowIE=g.isIE8=document.all&&!document.addEventListener,g.isAndroid=/android/gi.test(e),g.isIOS=/iphone|ipad|ipod/gi.test(e),g.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),g.probablyMobile=g.isAndroid||g.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),h=d(document),g.popupsCache={}},open:function(e){var t;if(!1===e.isObj){g.items=e.items.toArray(),g.index=0;var n,i=e.items;for(t=0;t<i.length;t++)if((n=i[t]).parsed&&(n=n.el[0]),n===e.el[0]){g.index=t;break}}else g.items=d.isArray(e.items)?e.items:[e.items],g.index=e.index||0;if(!g.isOpen){g.types=[],v="",e.mainEl&&e.mainEl.length?g.ev=e.mainEl.eq(0):g.ev=h,e.key?(g.popupsCache[e.key]||(g.popupsCache[e.key]={}),g.currTemplate=g.popupsCache[e.key]):g.currTemplate={},g.st=d.extend(!0,{},d.magnificPopup.defaults,e),g.fixedContentPos="auto"===g.st.fixedContentPos?!g.probablyMobile:g.st.fixedContentPos,g.st.modal&&(g.st.closeOnContentClick=!1,g.st.closeOnBgClick=!1,g.st.showCloseBtn=!1,g.st.enableEscapeKey=!1),g.bgOverlay||(g.bgOverlay=p("bg").on("click"+w,function(){g.close()}),g.wrap=p("wrap").attr("tabindex",-1).on("click"+w,function(e){g._checkIfClose(e.target)&&g.close()}),g.container=p("container",g.wrap)),g.contentContainer=p("content"),g.st.preloader&&(g.preloader=p("preloader",g.container,g.st.tLoading));var o=d.magnificPopup.modules;for(t=0;t<o.length;t++){var a=o[t];a=a.charAt(0).toUpperCase()+a.slice(1),g["init"+a].call(g)}f("BeforeOpen"),g.st.showCloseBtn&&(g.st.closeBtnInside?(u(y,function(e,t,n,i){n.close_replaceWith=m(i.type)}),v+=" mfp-close-btn-in"):g.wrap.append(m())),g.st.alignTop&&(v+=" mfp-align-top"),g.fixedContentPos?g.wrap.css({overflow:g.st.overflowY,overflowX:"hidden",overflowY:g.st.overflowY}):g.wrap.css({top:k.scrollTop(),position:"absolute"}),!1!==g.st.fixedBgPos&&("auto"!==g.st.fixedBgPos||g.fixedContentPos)||g.bgOverlay.css({height:h.height(),position:"absolute"}),g.st.enableEscapeKey&&h.on("keyup"+w,function(e){27===e.keyCode&&g.close()}),k.on("resize"+w,function(){g.updateSize()}),g.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&g.wrap.addClass(v);var r=g.wH=k.height(),s={};if(g.fixedContentPos&&g._hasScrollBar(r)){var l=g._getScrollbarSize();l&&(s.marginRight=l)}g.fixedContentPos&&(g.isIE7?d("body, html").css("overflow","hidden"):s.overflow="hidden");var c=g.st.mainClass;return g.isIE7&&(c+=" mfp-ie7"),c&&g._addClassToMFP(c),g.updateItemHTML(),f("BuildControls"),d("html").css(s),g.bgOverlay.add(g.wrap).prependTo(g.st.prependTo||d(document.body)),g._lastFocusedEl=document.activeElement,setTimeout(function(){g.content?(g._addClassToMFP(b),g._setFocus()):g.bgOverlay.addClass(b),h.on("focusin"+w,g._onFocusIn)},16),g.isOpen=!0,g.updateSize(r),f(C),e}g.updateItemHTML()},close:function(){g.isOpen&&(f(c),g.isOpen=!1,g.st.removalDelay&&!g.isLowIE&&g.supportsTransition?(g._addClassToMFP(s),setTimeout(function(){g._close()},g.st.removalDelay)):g._close())},_close:function(){f(l);var e=s+" "+b+" ";if(g.bgOverlay.detach(),g.wrap.detach(),g.container.empty(),g.st.mainClass&&(e+=g.st.mainClass+" "),g._removeClassFromMFP(e),g.fixedContentPos){var t={marginRight:""};g.isIE7?d("body, html").css("overflow",""):t.overflow="",d("html").css(t)}h.off("keyup.mfp focusin"+w),g.ev.off(w),g.wrap.attr("class","mfp-wrap").removeAttr("style"),g.bgOverlay.attr("class","mfp-bg"),g.container.attr("class","mfp-container"),!g.st.showCloseBtn||g.st.closeBtnInside&&!0!==g.currTemplate[g.currItem.type]||g.currTemplate.closeBtn&&g.currTemplate.closeBtn.detach(),g.st.autoFocusLast&&g._lastFocusedEl&&d(g._lastFocusedEl).focus(),g.currItem=null,g.content=null,g.currTemplate=null,g.prevHeight=0,f("AfterClose")},updateSize:function(e){if(g.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;g.wrap.css("height",n),g.wH=n}else g.wH=e||k.height();g.fixedContentPos||g.wrap.css("height",g.wH),f("Resize")},updateItemHTML:function(){var e=g.items[g.index];g.contentContainer.detach(),g.content&&g.content.detach(),e.parsed||(e=g.parseEl(g.index));var t=e.type;if(f("BeforeChange",[g.currItem?g.currItem.type:"",t]),g.currItem=e,!g.currTemplate[t]){var n=!!g.st[t]&&g.st[t].markup;f("FirstMarkupParse",n),g.currTemplate[t]=!n||d(n)}o&&o!==e.type&&g.container.removeClass("mfp-"+o+"-holder");var i=g["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,g.currTemplate[t]);g.appendContent(i,t),e.preloaded=!0,f(r,e),o=e.type,g.container.prepend(g.contentContainer),f("AfterChange")},appendContent:function(e,t){(g.content=e)?g.st.showCloseBtn&&g.st.closeBtnInside&&!0===g.currTemplate[t]?g.content.find(".mfp-close").length||g.content.append(m()):g.content=e:g.content="",f("BeforeAppend"),g.container.addClass("mfp-"+t+"-holder"),g.contentContainer.append(g.content)},parseEl:function(e){var t,n=g.items[e];if((n=n.tagName?{el:d(n)}:(t=n.type,{data:n,src:n.src})).el){for(var i=g.types,o=0;o<i.length;o++)if(n.el.hasClass("mfp-"+i[o])){t=i[o];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||g.st.type||"inline",n.index=e,n.parsed=!0,g.items[e]=n,f("ElementParse",n),g.items[e]},addGroup:function(t,n){function e(e){e.mfpEl=this,g._openClick(e,t,n)}var i="click.magnificPopup";(n=n||{}).mainEl=t,n.items?(n.isObj=!0,t.off(i).on(i,e)):(n.isObj=!1,n.delegate?t.off(i).on(i,n.delegate,e):(n.items=t).off(i).on(i,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n.midClick:d.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var i=void 0!==n.disableOn?n.disableOn:d.magnificPopup.defaults.disableOn;if(i)if(d.isFunction(i)){if(!i.call(g))return!0}else if(k.width()<i)return!0;e.type&&(e.preventDefault(),g.isOpen&&e.stopPropagation()),n.el=d(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),g.open(n)}},updateStatus:function(e,t){if(g.preloader){i!==e&&g.container.removeClass("mfp-s-"+i),t||"loading"!==e||(t=g.st.tLoading);var n={status:e,text:t};f("UpdateStatus",n),e=n.status,t=n.text,g.preloader.html(t),g.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),g.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(e){if(!d(e).hasClass(I)){var t=g.st.closeOnContentClick,n=g.st.closeOnBgClick;if(t&&n)return!0;if(!g.content||d(e).hasClass("mfp-close")||g.preloader&&e===g.preloader[0])return!0;if(e===g.content[0]||d.contains(g.content[0],e)){if(t)return!0}else if(n&&d.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){g.bgOverlay.addClass(e),g.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),g.wrap.removeClass(e)},_hasScrollBar:function(e){return(g.isIE7?h.height():document.body.scrollHeight)>(e||k.height())},_setFocus:function(){(g.st.focus?g.content.find(g.st.focus).eq(0):g.wrap).focus()},_onFocusIn:function(e){if(e.target!==g.wrap[0]&&!d.contains(g.wrap[0],e.target))return g._setFocus(),!1},_parseMarkup:function(o,e,t){var a;t.data&&(e=d.extend(t.data,e)),f(y,[o,e,t]),d.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(a=e.split("_")).length){var n=o.find(w+"-"+a[0]);if(0<n.length){var i=a[1];"replaceWith"===i?n[0]!==t[0]&&n.replaceWith(t):"img"===i?n.is("img")?n.attr("src",t):n.replaceWith(d("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(a[1],t)}}else o.find(w+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===g.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),g.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return g.scrollbarSize}},d.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return a(),(e=e?d.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return d.magnificPopup.instance&&d.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(d.magnificPopup.defaults[e]=t.options),d.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},d.fn.magnificPopup=function(e){a();var t=d(this);if("string"==typeof e)if("open"===e){var n,i=x?t.data("magnificPopup"):t[0].magnificPopup,o=parseInt(arguments[1],10)||0;n=i.items?i.items[o]:(n=t,i.delegate&&(n=n.find(i.delegate)),n.eq(o)),g._openClick({mfpEl:n},t,i)}else g.isOpen&&g[e].apply(g,Array.prototype.slice.call(arguments,1));else e=d.extend(!0,{},e),x?t.data("magnificPopup",e):t[0].magnificPopup=e,g.addGroup(t,e);return t};function T(){S&&(P.after(S.addClass(_)).detach(),S=null)}var _,P,S,E="inline";d.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){g.types.push(E),u(l+"."+E,function(){T()})},getInline:function(e,t){if(T(),e.src){var n=g.st.inline,i=d(e.src);if(i.length){var o=i[0].parentNode;o&&o.tagName&&(P||(_=n.hiddenClass,P=p(_),_="mfp-"+_),S=i.after(P).detach().removeClass(_)),g.updateStatus("ready")}else g.updateStatus("error",n.tNotFound),i=d("<div>");return e.inlineElement=i}return g.updateStatus("ready"),g._parseMarkup(t,{},e),t}}});function z(){M&&d(document.body).removeClass(M)}function O(){z(),g.req&&g.req.abort()}var M,B="ajax";d.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){g.types.push(B),M=g.st.ajax.cursor,u(l+"."+B,O),u("BeforeChange."+B,O)},getAjax:function(o){M&&d(document.body).addClass(M),g.updateStatus("loading");var e=d.extend({url:o.src,success:function(e,t,n){var i={data:e,xhr:n};f("ParseAjax",i),g.appendContent(d(i.data),B),o.finished=!0,z(),g._setFocus(),setTimeout(function(){g.wrap.addClass(b)},16),g.updateStatus("ready"),f("AjaxContentAdded")},error:function(){z(),o.finished=o.loadError=!0,g.updateStatus("error",g.st.ajax.tError.replace("%url%",o.src))}},g.st.ajax.settings);return g.req=d.ajax(e),""}}});var L;d.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=g.st.image,t=".image";g.types.push("image"),u(C+t,function(){"image"===g.currItem.type&&e.cursor&&d(document.body).addClass(e.cursor)}),u(l+t,function(){e.cursor&&d(document.body).removeClass(e.cursor),k.off("resize"+w)}),u("Resize"+t,g.resizeImage),g.isLowIE&&u("AfterChange",g.resizeImage)},resizeImage:function(){var e=g.currItem;if(e&&e.img&&g.st.image.verticalFit){var t=0;g.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",g.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,L&&clearInterval(L),e.isCheckingImgSize=!1,f("ImageHasSize",e),e.imgHidden&&(g.content&&g.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,i=t.img[0],o=function(e){L&&clearInterval(L),L=setInterval(function(){0<i.naturalWidth?g._onImageHasSize(t):(200<n&&clearInterval(L),3===++n?o(10):40===n?o(50):100===n&&o(500))},e)};o(1)},getImage:function(e,t){var n=0,i=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===g.currItem&&(g._onImageHasSize(e),g.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,f("ImageLoadComplete")):++n<200?setTimeout(i,100):o())},o=function(){e&&(e.img.off(".mfploader"),e===g.currItem&&(g._onImageHasSize(e),g.updateStatus("error",a.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},a=g.st.image,r=t.find(".mfp-img");if(r.length){var s=document.createElement("img");s.className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=d(s).on("load.mfploader",i).on("error.mfploader",o),s.src=e.src,r.is("img")&&(e.img=e.img.clone()),0<(s=e.img[0]).naturalWidth?e.hasSize=!0:s.width||(e.hasSize=!1)}return g._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=g.st.image.titleSrc;if(t){if(d.isFunction(t))return t.call(g,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),g.resizeImage(),e.hasSize?(L&&clearInterval(L),e.loadError?(t.addClass("mfp-loading"),g.updateStatus("error",a.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),g.updateStatus("ready"))):(g.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),g.findImageSize(e))),t}}});var H;d.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,a=g.st.zoom,t=".zoom";if(a.enabled&&g.supportsTransition){function n(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+a.duration/1e3+"s "+a.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return i["-webkit-"+o]=i["-moz-"+o]=i["-o-"+o]=i[o]=n,t.css(i),t}function i(){g.content.css("visibility","visible")}var o,r,s=a.duration;u("BuildControls"+t,function(){if(g._allowZoom()){if(clearTimeout(o),g.content.css("visibility","hidden"),!(e=g._getItemToZoom()))return void i();(r=n(e)).css(g._getOffset()),g.wrap.append(r),o=setTimeout(function(){r.css(g._getOffset(!0)),o=setTimeout(function(){i(),setTimeout(function(){r.remove(),e=r=null,f("ZoomAnimationEnded")},16)},s)},16)}}),u(c+t,function(){if(g._allowZoom()){if(clearTimeout(o),g.st.removalDelay=s,!e){if(!(e=g._getItemToZoom()))return;r=n(e)}r.css(g._getOffset(!0)),g.wrap.append(r),g.content.css("visibility","hidden"),setTimeout(function(){r.css(g._getOffset())},16)}}),u(l+t,function(){g._allowZoom()&&(i(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===g.currItem.type},_getItemToZoom:function(){return!!g.currItem.hasSize&&g.currItem.img},_getOffset:function(e){var t,n=(t=e?g.currItem.img:g.st.zoom.opener(g.currItem.el||g.currItem)).offset(),i=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);n.top-=d(window).scrollTop()-i;var a={width:t.width(),height:(x?t.innerHeight():t[0].offsetHeight)-o-i};return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H?a["-moz-transform"]=a.transform="translate("+n.left+"px,"+n.top+"px)":(a.left=n.left,a.top=n.top),a}}});function A(e){if(g.currTemplate[F]){var t=g.currTemplate[F].find("iframe");t.length&&(e||(t[0].src="//about:blank"),g.isIE8&&t.css("display",e?"block":"none"))}}var F="iframe";d.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen allow="autoplay"></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){g.types.push(F),u("BeforeChange",function(e,t,n){t!==n&&(t===F?A():n===F&&A(!0))}),u(l+"."+F,function(){A()})},getIframe:function(e,t){var n=e.src,i=g.st.iframe;d.each(i.patterns,function(){if(-1<n.indexOf(this.index))return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var o={};return i.srcAction&&(o[i.srcAction]=n),g._parseMarkup(t,o,e),g.updateStatus("ready"),t}}});function j(e){var t=g.items.length;return t-1<e?e-t:e<0?t+e:e}function N(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)}d.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var a=g.st.gallery,e=".mfp-gallery";if(g.direction=!0,!a||!a.enabled)return!1;v+=" mfp-gallery",u(C+e,function(){a.navigateByImgClick&&g.wrap.on("click"+e,".mfp-img",function(){if(1<g.items.length)return g.next(),!1}),h.on("keydown"+e,function(e){37===e.keyCode?g.prev():39===e.keyCode&&g.next()})}),u("UpdateStatus"+e,function(e,t){t.text&&(t.text=N(t.text,g.currItem.index,g.items.length))}),u(y+e,function(e,t,n,i){var o=g.items.length;n.counter=1<o?N(a.tCounter,i.index,o):""}),u("BuildControls"+e,function(){if(1<g.items.length&&a.arrows&&!g.arrowLeft){var e=a.arrowMarkup,t=g.arrowLeft=d(e.replace(/%title%/gi,a.tPrev).replace(/%dir%/gi,"left")).addClass(I),n=g.arrowRight=d(e.replace(/%title%/gi,a.tNext).replace(/%dir%/gi,"right")).addClass(I);t.click(function(){g.prev()}),n.click(function(){g.next()}),g.container.append(t.add(n))}}),u(r+e,function(){g._preloadTimeout&&clearTimeout(g._preloadTimeout),g._preloadTimeout=setTimeout(function(){g.preloadNearbyImages(),g._preloadTimeout=null},16)}),u(l+e,function(){h.off(e),g.wrap.off("click"+e),g.arrowRight=g.arrowLeft=null})},next:function(){g.direction=!0,g.index=j(g.index+1),g.updateItemHTML()},prev:function(){g.direction=!1,g.index=j(g.index-1),g.updateItemHTML()},goTo:function(e){g.direction=e>=g.index,g.index=e,g.updateItemHTML()},preloadNearbyImages:function(){var e,t=g.st.gallery.preload,n=Math.min(t[0],g.items.length),i=Math.min(t[1],g.items.length);for(e=1;e<=(g.direction?i:n);e++)g._preloadItem(g.index+e);for(e=1;e<=(g.direction?n:i);e++)g._preloadItem(g.index-e)},_preloadItem:function(e){if(e=j(e),!g.items[e].preloaded){var t=g.items[e];t.parsed||(t=g.parseEl(e)),f("LazyLoad",t),"image"===t.type&&(t.img=d('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,f("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var W="retina";d.magnificPopup.registerModule(W,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var n=g.st.retina,i=n.ratio;1<(i=isNaN(i)?i():i)&&(u("ImageHasSize."+W,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),u("ElementParse."+W,function(e,t){t.src=n.replaceSrc(t,i)}))}}}}),a()});var filterableGalleryHandler=function(f,s){var a,i,t,e=f.find(".fg-layout-3-filter-controls").eq(0),l=f.find("#fg-filter-trigger"),r=f.find(".fg-layout-3-search-box"),n=f.find("#fg-search-box-input");if(r.length&&r.on("submit",function(e){e.preventDefault()}),l.on("click",function(){e.toggleClass("open-filters")}).blur(function(){e.toggleClass("open-filters")}),!isEditMode){var d=s(".eael-filter-gallery-container",f),o=d.data("settings"),g=d.data("gallery-items"),u="masonry"==o.grid_style?"masonry":"fitRows",c="yes"==o.gallery_enabled,p=s(".eael-filter-gallery-wrapper").data("layout-mode"),m=s(".eael-filter-gallery-wrapper").data("mfp_caption"),y=d.isotope({itemSelector:".eael-filterable-gallery-item-wrap",layoutMode:u,percentPosition:!0,stagger:30,transitionDuration:o.duration+"ms",filter:function(){var e=s(this),t=!a||e.text().match(a);null==i&&(i="layout_3"!=p?f.find(".eael-filter-gallery-control ul li").first().data("filter"):f.find(".fg-layout-3-filter-controls li").first().data("filter"));var l=!i||e.is(i);return t&&l}});s(f).magnificPopup({delegate:".eael-magnific-link",type:"image",gallery:{enabled:c},image:{titleSrc:function(e){if("yes"==m)return e.el.parents(".gallery-item-caption-over").find(".fg-item-title").html()||e.el.parent(".eael-gallery-grid-item").find(".fg-item-title").html()}}}),f.on("click",".control",function(){var e=s(this);i=s(this).attr("data-filter"),f.find("#fg-filter-trigger > span")&&f.find("#fg-filter-trigger > span").text(e.text()),e.siblings().removeClass("active"),e.addClass("active"),y.isotope()}),n.on("input",function(){var e=s(this);clearTimeout(t),t=setTimeout(function(){a=new RegExp(e.val(),"gi"),y.isotope()},600)}),y.imagesLoaded().progress(function(){y.isotope("layout")}),y.on("arrangeComplete",function(){y.isotope("layout")}),s(window).on("load",function(){y.isotope("layout")}),f.on("click",".eael-gallery-load-more",function(e){e.preventDefault();var t=s(this),l=s(".eael-filter-gallery-container",f).children(".eael-filterable-gallery-item-wrap").length,a=d.data("total-gallery-items"),i=d.data("images-per-page"),r=d.data("nomore-item-text"),n=[];l==a&&(t.html('<div class="no-more-items-text">'+r+"</div>"),setTimeout(function(){t.fadeOut("slow")},600));for(var o=l;o<l+i;o++)n.push(s(g[o])[0]);d.append(n),y.isotope("appended",n),y.imagesLoaded().progress(function(){y.isotope("layout")})})}};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-filterable-gallery.default",filterableGalleryHandler)});var ImageAccordion=function(e,a){var o=e.find(".eael-img-accordion").eq(0),i=void 0!==o.data("img-accordion-id")?o.data("img-accordion-id"):"";"on-click"===(void 0!==o.data("img-accordion-type")?o.data("img-accordion-type"):"")&&(a("#eael-img-accordion-"+i+" a").on("click",function(e){0==a(this).hasClass("overlay-active")&&e.preventDefault(),a("#eael-img-accordion-"+i+" a").css("flex","1"),a(this).find(".overlay").parent("a").addClass("overlay-active"),a("#eael-img-accordion-"+i+" a").find(".overlay-inner").removeClass("overlay-inner-show"),a(this).find(".overlay-inner").addClass("overlay-inner-show"),a(this).css("flex","3")}),a("#eael-img-accordion-"+i+" a").on("blur",function(e){a("#eael-img-accordion-"+i+" a").css("flex","1"),a("#eael-img-accordion-"+i+" a").find(".overlay-inner").removeClass("overlay-inner-show"),a(this).find(".overlay").parent("a").removeClass("overlay-active")}))};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-image-accordion.default",ImageAccordion)});var ContentTicker=function(a,e){var t=a.find(".eael-content-ticker").eq(0),o=void 0!==t.data("items")?t.data("items"):1,i=void 0!==t.data("items-tablet")?t.data("items-tablet"):1,n=void 0!==t.data("items-mobile")?t.data("items-mobile"):1,d=void 0!==t.data("margin")?t.data("margin"):10,r=void 0!==t.data("margin-tablet")?t.data("margin-tablet"):10,l=void 0!==t.data("margin-mobile")?t.data("margin-mobile"):10,s=void 0!==t.data("effect")?t.data("effect"):"slide",p=void 0!==t.data("speed")?t.data("speed"):400,v=void 0!==t.data("autoplay")?t.data("autoplay"):5e3,c=void 0!==t.data("loop")&&t.data("loop"),u=void 0!==t.data("grab-cursor")&&t.data("grab-cursor"),m=void 0!==t.data("pagination")?t.data("pagination"):".swiper-pagination",w=void 0!==t.data("arrow-next")?t.data("arrow-next"):".swiper-button-next",b=void 0!==t.data("arrow-prev")?t.data("arrow-prev"):".swiper-button-prev",g=void 0!==t.data("pause-on-hover")?t.data("pause-on-hover"):"",f=new Swiper(t,{direction:"horizontal",loop:c,speed:p,effect:s,slidesPerView:o,spaceBetween:d,grabCursor:u,paginationClickable:!0,autoHeight:!0,autoplay:{delay:v},pagination:{el:m,clickable:!0},navigation:{nextEl:w,prevEl:b},breakpoints:{480:{slidesPerView:n,spaceBetween:l},768:{slidesPerView:i,spaceBetween:r}}});0===v&&f.autoplay.stop(),g&&0!==v&&(t.on("mouseenter",function(){f.autoplay.stop()}),t.on("mouseleave",function(){f.autoplay.start()}))};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-content-ticker.default",ContentTicker)});var AdvAccordionHandler=function(e,n){var a=e.find(".eael-adv-accordion"),o=e.find(".eael-accordion-header"),d=a.data("accordion-type"),t=a.data("toogle-speed");o.each(function(){n(this).hasClass("active-default")&&(n(this).addClass("show active"),n(this).next().slideDown(t))}),o.unbind("click"),o.click(function(e){e.preventDefault();var a=n(this);"accordion"===d?a.hasClass("show")?(a.removeClass("show active"),a.next().slideUp(t)):(a.parent().parent().find(".eael-accordion-header").removeClass("show active"),a.parent().parent().find(".eael-accordion-content").slideUp(t),a.toggleClass("show active"),a.next().slideToggle(t)):a.hasClass("show")?(a.removeClass("show active"),a.next().slideUp(t)):(a.addClass("show active"),a.next().slideDown(t))})};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-adv-accordion.default",AdvAccordionHandler)});var AdvanceTabHandler=function(e,c){var a="#"+e.find(".eael-advance-tabs").attr("id").toString();c(a+" .eael-tabs-nav ul li").each(function(e){c(this).hasClass("active-default")?(c(a+" .eael-tabs-nav > ul li").removeClass("active").addClass("inactive"),c(this).removeClass("inactive")):0==e&&c(this).removeClass("inactive").addClass("active")}),c(a+" .eael-tabs-content div").each(function(e){c(this).hasClass("active-default")?c(a+" .eael-tabs-content > div").removeClass("active"):0==e&&c(this).removeClass("inactive").addClass("active")}),c(a+" .eael-tabs-nav ul li").click(function(){var e=c(this).index(),a=c(this).closest(".eael-advance-tabs"),t=c(a).children(".eael-tabs-nav").children("ul").children("li"),i=c(a).children(".eael-tabs-content").children("div");c(this).parent("li").addClass("active"),c(t).removeClass("active active-default").addClass("inactive"),c(this).addClass("active").removeClass("inactive"),c(i).removeClass("active").addClass("inactive"),c(i).eq(e).addClass("active").removeClass("inactive");var n=i.eq(e).find(".eael-filter-gallery-container"),l=i.eq(e).find(".eael-post-grid.eael-post-appender"),s=i.eq(e).find(".eael-twitter-feed-masonry"),d=i.eq(e).find(".eael-instafeed"),o=i.eq(e).find(".premium-gallery-container");l.length&&l.isotope("layout"),s.length&&s.isotope("layout"),n.length&&n.isotope("layout"),d.length&&d.isotope("layout"),o.length&&o.each(function(e,a){c(a).isotope("layout")}),c(i).each(function(e){c(this).removeClass("active-default")})})};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-adv-tabs.default",AdvanceTabHandler)});!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(c){var h,s,i,u=[],p=document,g=window,v=p.documentElement;function t(){if(u.length){var e,t,n,i=0,o=c.map(u,function(e){var t=e.data.selector,n=e.$element;return t?n.find(t):n});for(h=h||((n={height:g.innerHeight,width:g.innerWidth}).height||!(e=p.compatMode)&&c.support.boxModel||(n={height:(t="CSS1Compat"===e?v:p.body).clientHeight,width:t.clientWidth}),n),s=s||{top:g.pageYOffset||v.scrollTop||p.body.scrollTop,left:g.pageXOffset||v.scrollLeft||p.body.scrollLeft};i<u.length;i++)if(c.contains(v,o[i][0])){var l=c(o[i]),r=l[0].offsetHeight,f=l[0].offsetWidth,a=l.offset(),d=l.data("inview");if(!s||!h)return;a.top+r>s.top&&a.top<s.top+h.height&&a.left+f>s.left&&a.left<s.left+h.width?d||l.data("inview",!0).trigger("inview",[!0]):d&&l.data("inview",!1).trigger("inview",[!1])}}}c.event.special.inview={add:function(e){u.push({data:e,$element:c(this),element:this}),!i&&u.length&&(i=setInterval(t,250))},remove:function(e){for(var t=0;t<u.length;t++){var n=u[t];if(n.element===this&&n.data.guid===e.guid){u.splice(t,1);break}}u.length||(clearInterval(i),i=null)}},c(g).on("scroll resize scrollstop",function(){h=s=null}),!v.addEventListener&&v.attachEvent&&v.attachEvent("onfocusin",function(){s=null})});!function(t){t.fn.eaelProgressBar=function(){var a=t(this),i=a.data("layout"),e=a.data("count"),r=a.data("duration");100<e&&(e=100),a.one("inview",function(){"line"==i?t(".eael-progressbar-line-fill",a).css({width:e+"%"}):"half_circle"==i&&t(".eael-progressbar-circle-half",a).css({transform:"rotate("+1.8*e+"deg)"}),t(".eael-progressbar-count",a).prop({counter:0}).animate({counter:e},{duration:r,easing:"linear",step:function(e){if("circle"==i){var r=3.6*e;t(".eael-progressbar-circle-half-left",a).css({transform:"rotate("+r+"deg)"}),180<r&&(t(".eael-progressbar-circle-pie",a).css({"-webkit-clip-path":"inset(0)","clip-path":"inset(0)"}),t(".eael-progressbar-circle-half-right",a).css({visibility:"visible"}))}t(this).text(Math.ceil(e))}})})}}(jQuery);var ProgressBar=function(e,r){r(".eael-progressbar",e).eaelProgressBar()};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-progress-bar.default",ProgressBar)});"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,i;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}function n(e){return e&&e.Math==Math&&e}function g(e){try{return!!e()}catch(e){return!0}}function r(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function d(e){return A.call(e).slice(8,-1)}function h(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function c(e){return C(h(e))}function v(e){return"object"==typeof e?null!==e:"function"==typeof e}function u(e,t){if(!v(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!v(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!v(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!v(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}function w(e,t){return P.call(e,t)}function a(e){return I?L.createElement(e):{}}function E(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e}function f(t,n){try{R(y,t,n)}catch(e){y[t]=n}return n}function s(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++H+V).toString(36)}function i(e){return B[e]||(B[e]=s(e))}var o,l,p,m="object",y=n(typeof globalThis==m&&globalThis)||n(typeof window==m&&window)||n(typeof self==m&&self)||n(typeof e==m&&e)||Function("return this")(),b=!g(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),k={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor,S={f:T&&!k.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:k},A={}.toString,x="".split,C=g(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==d(e)?x.call(e,""):Object(e)}:Object,P={}.hasOwnProperty,L=y.document,I=v(L)&&v(L.createElement),M=!b&&!g(function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}),O=Object.getOwnPropertyDescriptor,j={f:b?O:function(e,t){if(e=c(e),t=u(t,!0),M)try{return O(e,t)}catch(e){}if(w(e,t))return r(!S.f.call(e,t),e[t])}},N=Object.defineProperty,_={f:b?N:function(e,t,n){if(E(e),t=u(t,!0),E(n),M)try{return N(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},R=b?function(e,t,n){return _.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e},U=t(function(e){var t="__core-js_shared__",n=y[t]||f(t,{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),F=U("native-function-to-string",Function.toString),q=y.WeakMap,D="function"==typeof q&&/native code/.test(F.call(q)),H=0,V=Math.random(),B=U("keys"),z={},W=y.WeakMap;if(D){var K=new W,$=K.get,Y=K.has,G=K.set;o=function(e,t){return G.call(K,e,t),t},l=function(e){return $.call(K,e)||{}},p=function(e){return Y.call(K,e)}}else{var Q=i("state");z[Q]=!0,o=function(e,t){return R(e,Q,t),t},l=function(e){return w(e,Q)?e[Q]:{}},p=function(e){return w(e,Q)}}function X(e){return"function"==typeof e?e:void 0}function J(e,t){return arguments.length<2?X(he[e])||X(y[e]):he[e]&&he[e][t]||y[e]&&y[e][t]}function Z(e){return isNaN(e=+e)?0:(0<e?de:fe)(e)}function ee(e){return 0<e?pe(Z(e),9007199254740991):0}function te(e,t){var n=Z(e);return n<0?me(n+t,0):ge(n,t)}function ne(s){return function(e,t,n){var i,r=c(e),a=ee(r.length),o=te(n,a);if(s&&t!=t){for(;o<a;)if((i=r[o++])!=i)return!0}else for(;o<a;o++)if((s||o in r)&&r[o]===t)return s||o||0;return!s&&-1}}function ie(e,t){var n,i=c(e),r=0,a=[];for(n in i)!w(z,n)&&w(i,n)&&a.push(n);for(;t.length>r;)w(i,n=t[r++])&&(~ye(a,n)||a.push(n));return a}function re(e,t){for(var n=Se(t),i=_.f,r=j.f,a=0;a<n.length;a++){var o=n[a];w(e,o)||i(e,o,r(t,o))}}function ae(e,t){var n=xe[Ae(e)];return n==Pe||n!=Ce&&("function"==typeof t?g(t):!!t)}function oe(e,t){var n,i,r,a,o,s=e.target,l=e.global,c=e.stat;if(n=l?y:c?y[s]||f(s,{}):(y[s]||{}).prototype)for(i in t){if(a=t[i],r=e.noTargetGet?(o=Ie(n,i))&&o.value:n[i],!Le(l?i:s+(c?".":"#")+i,e.forced)&&void 0!==r){if(typeof a==typeof r)continue;re(a,r)}(e.sham||r&&r.sham)&&R(a,"sham",!0),ue(n,i,a,e)}}function se(e){return Object(h(e))}function le(){}var ce={set:o,get:l,has:p,enforce:function(e){return p(e)?l(e):o(e,{})},getterFor:function(n){return function(e){var t;if(!v(e)||(t=l(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},ue=t(function(e){var t=ce.get,s=ce.enforce,l=String(F).split("toString");U("inspectSource",function(e){return F.call(e)}),(e.exports=function(e,t,n,i){var r=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,o=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof t||w(n,"name")||R(n,"name",t),s(n).source=l.join("string"==typeof t?t:"")),e!==y?(r?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:R(e,t,n)):a?e[t]=n:f(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||F.call(this)})}),he=y,fe=Math.ceil,de=Math.floor,pe=Math.min,me=Math.max,ge=Math.min,ve={includes:ne(!0),indexOf:ne(!1)},ye=ve.indexOf,be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],we=be.concat("length","prototype"),ke={f:Object.getOwnPropertyNames||function(e){return ie(e,we)}},Te={f:Object.getOwnPropertySymbols},Se=J("Reflect","ownKeys")||function(e){var t=ke.f(E(e)),n=Te.f;return n?t.concat(n(e)):t},Ee=/#|\.prototype\./,Ae=ae.normalize=function(e){return String(e).replace(Ee,".").toLowerCase()},xe=ae.data={},Ce=ae.NATIVE="N",Pe=ae.POLYFILL="P",Le=ae,Ie=j.f,Me=!!Object.getOwnPropertySymbols&&!g(function(){return!String(Symbol())}),Oe=Array.isArray||function(e){return"Array"==d(e)},je=Object.keys||function(e){return ie(e,be)},Ne=b?Object.defineProperties:function(e,t){E(e);for(var n,i=je(t),r=i.length,a=0;a<r;)_.f(e,n=i[a++],t[n]);return e},_e=J("document","documentElement"),Re=i("IE_PROTO"),Ue="prototype",Fe=function(){var e,t=a("iframe"),n=be.length,i="script";for(t.style.display="none",_e.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object</"+i+">"),e.close(),Fe=e.F;n--;)delete Fe[Ue][be[n]];return Fe()},qe=Object.create||function(e,t){var n;return null!==e?(le[Ue]=E(e),n=new le,le[Ue]=null,n[Re]=e):n=Fe(),void 0===t?n:Ne(n,t)};z[Re]=!0;function De(e){return nt[e]||(nt[e]=Me&&tt[e]||(Me?tt:s)("Symbol."+e))}function He(e){var t=he.Symbol||(he.Symbol={});w(t,e)||rt(t,e,{value:it.f(e)})}function Ve(e,t,n){e&&!w(e=n?e:e.prototype,ot)&&at(e,ot,{configurable:!0,value:t})}function Be(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}function ze(i,r,e){if(Be(i),void 0===r)return i;switch(e){case 0:return function(){return i.call(r)};case 1:return function(e){return i.call(r,e)};case 2:return function(e,t){return i.call(r,e,t)};case 3:return function(e,t,n){return i.call(r,e,t,n)}}return function(){return i.apply(r,arguments)}}function We(e,t){var n;return Oe(e)&&("function"==typeof(n=e.constructor)&&(n===Array||Oe(n.prototype))||v(n)&&null===(n=n[st]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}function Ke(d){var p=1==d,m=2==d,g=3==d,v=4==d,y=6==d,b=5==d||y;return function(e,t,n,i){for(var r,a,o=se(e),s=C(o),l=ze(t,n,3),c=ee(s.length),u=0,h=i||We,f=p?h(e,c):m?h(e,0):void 0;u<c;u++)if((b||u in s)&&(a=l(r=s[u],u,o),d))if(p)f[u]=a;else if(a)switch(d){case 3:return!0;case 5:return r;case 6:return u;case 2:lt.call(f,r)}else if(v)return!1;return y?-1:g||v?v:f}}function $e(e,t){var n=At[e]=qe(yt[dt]);return mt(n,{type:ft,tag:e,description:t}),b||(n.description=t),n}function Ye(t,e){E(t);var n=c(e),i=je(n).concat(Rt(n));return ut(i,function(e){b&&!_t.call(n,e)||Nt(t,e,n[e])}),t}function Ge(e,t){var n=c(e),i=u(t,!0);if(n!==vt||!w(At,i)||w(xt,i)){var r=kt(n,i);return!r||!w(At,i)||w(n,ht)&&n[ht][i]||(r.enumerable=!0),r}}function Qe(e){var t=St(c(e)),n=[];return ut(t,function(e){w(At,e)||w(z,e)||n.push(e)}),n}var Xe=ke.f,Je={}.toString,Ze="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],et={f:function(e){return Ze&&"[object Window]"==Je.call(e)?function(e){try{return Xe(e)}catch(e){return Ze.slice()}}(e):Xe(c(e))}},tt=y.Symbol,nt=U("wks"),it={f:De},rt=_.f,at=_.f,ot=De("toStringTag"),st=De("species"),lt=[].push,ct={forEach:Ke(0),map:Ke(1),filter:Ke(2),some:Ke(3),every:Ke(4),find:Ke(5),findIndex:Ke(6)},ut=ct.forEach,ht=i("hidden"),ft="Symbol",dt="prototype",pt=De("toPrimitive"),mt=ce.set,gt=ce.getterFor(ft),vt=Object[dt],yt=y.Symbol,bt=y.JSON,wt=bt&&bt.stringify,kt=j.f,Tt=_.f,St=et.f,Et=S.f,At=U("symbols"),xt=U("op-symbols"),Ct=U("string-to-symbol-registry"),Pt=U("symbol-to-string-registry"),Lt=U("wks"),It=y.QObject,Mt=!It||!It[dt]||!It[dt].findChild,Ot=b&&g(function(){return 7!=qe(Tt({},"a",{get:function(){return Tt(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=kt(vt,t);i&&delete vt[t],Tt(e,t,n),i&&e!==vt&&Tt(vt,t,i)}:Tt,jt=Me&&"symbol"==typeof yt.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof yt},Nt=function(e,t,n){e===vt&&Nt(xt,t,n),E(e);var i=u(t,!0);return E(n),w(At,i)?(n.enumerable?(w(e,ht)&&e[ht][i]&&(e[ht][i]=!1),n=qe(n,{enumerable:r(0,!1)})):(w(e,ht)||Tt(e,ht,r(1,{})),e[ht][i]=!0),Ot(e,i,n)):Tt(e,i,n)},_t=function(e){var t=u(e,!0),n=Et.call(this,t);return!(this===vt&&w(At,t)&&!w(xt,t))&&(!(n||!w(this,t)||!w(At,t)||w(this,ht)&&this[ht][t])||n)},Rt=function(e){var t=e===vt,n=St(t?xt:c(e)),i=[];return ut(n,function(e){!w(At,e)||t&&!w(vt,e)||i.push(At[e])}),i};Me||(ue((yt=function(e){if(this instanceof yt)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==e?String(e):void 0,n=s(t),i=function(e){this===vt&&i.call(xt,e),w(this,ht)&&w(this[ht],n)&&(this[ht][n]=!1),Ot(this,n,r(1,e))};return b&&Mt&&Ot(vt,n,{configurable:!0,set:i}),$e(n,t)})[dt],"toString",function(){return gt(this).tag}),S.f=_t,_.f=Nt,j.f=Ge,ke.f=et.f=Qe,Te.f=Rt,b&&(Tt(yt[dt],"description",{configurable:!0,get:function(){return gt(this).description}}),ue(vt,"propertyIsEnumerable",_t,{unsafe:!0})),it.f=function(e){return $e(De(e),e)}),oe({global:!0,wrap:!0,forced:!Me,sham:!Me},{Symbol:yt}),ut(je(Lt),function(e){He(e)}),oe({target:ft,stat:!0,forced:!Me},{for:function(e){var t=String(e);if(w(Ct,t))return Ct[t];var n=yt(t);return Ct[t]=n,Pt[n]=t,n},keyFor:function(e){if(!jt(e))throw TypeError(e+" is not a symbol");if(w(Pt,e))return Pt[e]},useSetter:function(){Mt=!0},useSimple:function(){Mt=!1}}),oe({target:"Object",stat:!0,forced:!Me,sham:!b},{create:function(e,t){return void 0===t?qe(e):Ye(qe(e),t)},defineProperty:Nt,defineProperties:Ye,getOwnPropertyDescriptor:Ge}),oe({target:"Object",stat:!0,forced:!Me},{getOwnPropertyNames:Qe,getOwnPropertySymbols:Rt}),oe({target:"Object",stat:!0,forced:g(function(){Te.f(1)})},{getOwnPropertySymbols:function(e){return Te.f(se(e))}}),bt&&oe({target:"JSON",stat:!0,forced:!Me||g(function(){var e=yt();return"[null]"!=wt([e])||"{}"!=wt({a:e})||"{}"!=wt(Object(e))})},{stringify:function(e){for(var t,n,i=[e],r=1;r<arguments.length;)i.push(arguments[r++]);if(n=t=i[1],(v(t)||void 0!==e)&&!jt(e))return Oe(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!jt(t))return t}),i[1]=t,wt.apply(bt,i)}}),yt[dt][pt]||R(yt[dt],pt,yt[dt].valueOf),Ve(yt,ft),z[ht]=!0;var Ut=_.f,Ft=y.Symbol;if(!(!b||"function"!=typeof Ft||"description"in Ft.prototype&&void 0===Ft().description)){var qt={},Dt=function(e){var t=arguments.length<1||void 0===e?void 0:String(e),n=this instanceof Dt?new Ft(t):void 0===t?Ft():Ft(t);return""===t&&(qt[n]=!0),n};re(Dt,Ft);var Ht=Dt.prototype=Ft.prototype;Ht.constructor=Dt;var Vt=Ht.toString,Bt="Symbol(test)"==String(Ft("test")),zt=/^Symbol\((.*)\)[^)]+$/;Ut(Ht,"description",{configurable:!0,get:function(){var e=v(this)?this.valueOf():this,t=Vt.call(e);if(w(qt,e))return"";var n=Bt?t.slice(7,-1):t.replace(zt,"$1");return""===n?void 0:n}}),oe({global:!0,forced:!0},{Symbol:Dt})}He("iterator");var Wt=De("unscopables"),Kt=Array.prototype;null==Kt[Wt]&&R(Kt,Wt,qe(null));function $t(e){Kt[Wt][e]=!0}var Yt,Gt,Qt,Xt={},Jt=!g(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),Zt=i("IE_PROTO"),en=Object.prototype,tn=Jt?Object.getPrototypeOf:function(e){return e=se(e),w(e,Zt)?e[Zt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?en:null},nn=De("iterator"),rn=!1;[].keys&&("next"in(Qt=[].keys())?(Gt=tn(tn(Qt)))!==Object.prototype&&(Yt=Gt):rn=!0),null==Yt&&(Yt={}),w(Yt,nn)||R(Yt,nn,function(){return this});function an(){return this}function on(e,t,n){var i=t+" Iterator";return e.prototype=qe(un,{next:r(1,n)}),Ve(e,i,!1),Xt[i]=an,e}function sn(){return this}function ln(e,t,n,i,r,a,o){function s(e){if(e===r&&m)return m;if(!dn&&e in d)return d[e];switch(e){case"keys":case mn:case gn:return function(){return new n(this,e)}}return function(){return new n(this)}}on(n,t,i);var l,c,u,h=t+" Iterator",f=!1,d=e.prototype,p=d[pn]||d["@@iterator"]||r&&d[r],m=!dn&&p||s(r),g="Array"==t&&d.entries||p;if(g&&(l=tn(g.call(new e)),fn!==Object.prototype&&l.next&&(tn(l)!==fn&&(hn?hn(l,fn):"function"!=typeof l[pn]&&R(l,pn,sn)),Ve(l,h,!0))),r==mn&&p&&p.name!==mn&&(f=!0,m=function(){return p.call(this)}),d[pn]!==m&&R(d,pn,m),Xt[t]=m,r)if(c={values:s(mn),keys:a?m:s("keys"),entries:s(gn)},o)for(u in c)!dn&&!f&&u in d||ue(d,u,c[u]);else oe({target:t,proto:!0,forced:dn||f},c);return c}var cn={IteratorPrototype:Yt,BUGGY_SAFARI_ITERATORS:rn},un=cn.IteratorPrototype,hn=Object.setPrototypeOf||("__proto__"in{}?function(){var n,i=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),i=e instanceof Array}catch(e){}return function(e,t){return E(e),function(e){if(!v(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(t),i?n.call(e,t):e.__proto__=t,e}}():void 0),fn=cn.IteratorPrototype,dn=cn.BUGGY_SAFARI_ITERATORS,pn=De("iterator"),mn="values",gn="entries",vn="Array Iterator",yn=ce.set,bn=ce.getterFor(vn),wn=ln(Array,"Array",function(e,t){yn(this,{type:vn,target:c(e),index:0,kind:t})},function(){var e=bn(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?{value:e.target=void 0,done:!0}:"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}},"values");Xt.Arguments=Xt.Array,$t("keys"),$t("values"),$t("entries");function kn(e,t){var n=[][e];return!n||!g(function(){n.call(null,t||function(){throw 1},1)})}var Tn=[].join,Sn=C!=Object,En=kn("join",",");oe({target:"Array",proto:!0,forced:Sn||En},{join:function(e){return Tn.call(c(this),void 0===e?",":e)}});function An(e,t,n){var i=u(t);i in e?_.f(e,i,r(0,n)):e[i]=n}function xn(t){return!g(function(){var e=[];return(e.constructor={})[Cn]=function(){return{foo:1}},1!==e[t](Boolean).foo})}var Cn=De("species"),Pn=De("species"),Ln=[].slice,In=Math.max;oe({target:"Array",proto:!0,forced:!xn("slice")},{slice:function(e,t){var n,i,r,a=c(this),o=ee(a.length),s=te(e,o),l=te(void 0===t?o:t,o);if(Oe(a)&&(("function"==typeof(n=a.constructor)&&(n===Array||Oe(n.prototype))||v(n)&&null===(n=n[Pn]))&&(n=void 0),n===Array||void 0===n))return Ln.call(a,s,l);for(i=new(void 0===n?Array:n)(In(l-s,0)),r=0;s<l;s++,r++)s in a&&An(i,r,a[s]);return i.length=r,i}});function Mn(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),On))?n:jn?d(t):"Object"==(i=d(t))&&"function"==typeof t.callee?"Arguments":i}var On=De("toStringTag"),jn="Arguments"==d(function(){return arguments}()),Nn={};Nn[De("toStringTag")]="z";var _n="[object z]"!==String(Nn)?function(){return"[object "+Mn(this)+"]"}:Nn.toString,Rn=Object.prototype;_n!==Rn.toString&&ue(Rn,"toString",_n,{unsafe:!0});function Un(){var e=E(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}var Fn="toString",qn=RegExp.prototype,Dn=qn[Fn],Hn=g(function(){return"/a/b"!=Dn.call({source:"a",flags:"b"})}),Vn=Dn.name!=Fn;(Hn||Vn)&&ue(RegExp.prototype,Fn,function(){var e=E(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in qn)?Un.call(e):n)},{unsafe:!0});function Bn(s){return function(e,t){var n,i,r=String(h(e)),a=Z(t),o=r.length;return a<0||o<=a?s?"":void 0:(n=r.charCodeAt(a))<55296||56319<n||a+1===o||(i=r.charCodeAt(a+1))<56320||57343<i?s?r.charAt(a):n:s?r.slice(a,a+2):i-56320+(n-55296<<10)+65536}}var zn={codeAt:Bn(!1),charAt:Bn(!0)},Wn=zn.charAt,Kn="String Iterator",$n=ce.set,Yn=ce.getterFor(Kn);ln(String,"String",function(e){$n(this,{type:Kn,string:String(e),index:0})},function(){var e,t=Yn(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=Wn(n,i),t.index+=e.length,{value:e,done:!1})});var Gn,Qn,Xn=RegExp.prototype.exec,Jn=String.prototype.replace,Zn=Xn,ei=(Gn=/a/,Qn=/b*/g,Xn.call(Gn,"a"),Xn.call(Qn,"a"),0!==Gn.lastIndex||0!==Qn.lastIndex),ti=void 0!==/()??/.exec("")[1];(ei||ti)&&(Zn=function(e){var t,n,i,r,a=this;return ti&&(n=new RegExp("^"+a.source+"$(?!\\s)",Un.call(a))),ei&&(t=a.lastIndex),i=Xn.call(a,e),ei&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),ti&&i&&1<i.length&&Jn.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i});function ni(n,e,t,i){var r=De(n),a=!g(function(){var e={};return e[r]=function(){return 7},7!=""[n](e)}),o=a&&!g(function(){var e=!1,t=/a/;return t.exec=function(){return e=!0,null},"split"===n&&(t.constructor={},t.constructor[oi]=function(){return t}),t[r](""),!e});if(!a||!o||"replace"===n&&!si||"split"===n&&!li){var s=/./[r],l=t(r,""[n],function(e,t,n,i,r){return t.exec===ai?a&&!r?{done:!0,value:s.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),c=l[0],u=l[1];ue(String.prototype,n,c),ue(RegExp.prototype,r,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}),i&&R(RegExp.prototype[r],"sham",!0)}}function ii(e,t,n){return t+(n?ci(e,t).length:1)}function ri(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==d(e))throw TypeError("RegExp#exec called on incompatible receiver");return ai.call(e,t)}var ai=Zn,oi=De("species"),si=!g(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),li=!g(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),ci=zn.charAt,ui=Math.max,hi=Math.min,fi=Math.floor,di=/\$([$&'`]|\d\d?|<[^>]*>)/g,pi=/\$([$&'`]|\d\d?)/g;ni("replace",2,function(r,k,T){return[function(e,t){var n=h(this),i=null==e?void 0:e[r];return void 0!==i?i.call(e,n,t):k.call(String(n),e,t)},function(e,t){var n=T(k,e,this,t);if(n.done)return n.value;var i=E(e),r=String(this),a="function"==typeof t;a||(t=String(t));var o=i.global;if(o){var s=i.unicode;i.lastIndex=0}for(var l=[];;){var c=ri(i,r);if(null===c)break;if(l.push(c),!o)break;""===String(c[0])&&(i.lastIndex=ii(r,ee(i.lastIndex),s))}for(var u,h="",f=0,d=0;d<l.length;d++){c=l[d];for(var p=String(c[0]),m=ui(hi(Z(c.index),r.length),0),g=[],v=1;v<c.length;v++)g.push(void 0===(u=c[v])?u:String(u));var y=c.groups;if(a){var b=[p].concat(g,m,r);void 0!==y&&b.push(y);var w=String(t.apply(void 0,b))}else w=S(p,r,m,g,y,t);f<=m&&(h+=r.slice(f,m)+w,f=m+p.length)}return h+r.slice(f)}];function S(a,o,s,l,c,e){var u=s+a.length,h=l.length,t=pi;return void 0!==c&&(c=se(c),t=di),k.call(e,t,function(e,t){var n;switch(t.charAt(0)){case"$":return"$";case"&":return a;case"`":return o.slice(0,s);case"'":return o.slice(u);case"<":n=c[t.slice(1,-1)];break;default:var i=+t;if(0==i)return e;if(h<i){var r=fi(i/10);return 0===r?e:r<=h?void 0===l[r-1]?t.charAt(1):l[r-1]+t.charAt(1):e}n=l[i-1]}return void 0===n?"":n})}});var mi=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};ni("search",1,function(i,o,s){return[function(e){var t=h(this),n=null==e?void 0:e[i];return void 0!==n?n.call(e,t):new RegExp(e)[i](String(t))},function(e){var t=s(o,e,this);if(t.done)return t.value;var n=E(e),i=String(this),r=n.lastIndex;mi(r,0)||(n.lastIndex=0);var a=ri(n,i);return mi(n.lastIndex,r)||(n.lastIndex=r),null===a?-1:a.index}]});function gi(e){var t;return v(e)&&(void 0!==(t=e[yi])?!!t:"RegExp"==d(e))}function vi(e,t){var n,i=E(e).constructor;return void 0===i||null==(n=E(i)[bi])?t:Be(n)}var yi=De("match"),bi=De("species"),wi=[].push,ki=Math.min,Ti=4294967295,Si=!g(function(){return!RegExp(Ti,"y")});ni("split",2,function(r,g,v){var y;return y="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=String(h(this)),i=void 0===t?Ti:t>>>0;if(0==i)return[];if(void 0===e)return[n];if(!gi(e))return g.call(n,e,i);for(var r,a,o,s=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=new RegExp(e.source,l+"g");(r=ai.call(u,n))&&!(c<(a=u.lastIndex)&&(s.push(n.slice(c,r.index)),1<r.length&&r.index<n.length&&wi.apply(s,r.slice(1)),o=r[0].length,c=a,s.length>=i));)u.lastIndex===r.index&&u.lastIndex++;return c===n.length?!o&&u.test("")||s.push(""):s.push(n.slice(c)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:g.call(this,e,t)}:g,[function(e,t){var n=h(this),i=null==e?void 0:e[r];return void 0!==i?i.call(e,n,t):y.call(String(n),e,t)},function(e,t){var n=v(y,e,this,t,y!==g);if(n.done)return n.value;var i=E(e),r=String(this),a=vi(i,RegExp),o=i.unicode,s=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Si?"y":"g"),l=new a(Si?i:"^(?:"+i.source+")",s),c=void 0===t?Ti:t>>>0;if(0==c)return[];if(0===r.length)return null===ri(l,r)?[r]:[];for(var u=0,h=0,f=[];h<r.length;){l.lastIndex=Si?h:0;var d,p=ri(l,Si?r:r.slice(h));if(null===p||(d=ki(ee(l.lastIndex+(Si?0:h)),r.length))===u)h=ii(r,h,o);else{if(f.push(r.slice(u,h)),f.length===c)return f;for(var m=1;m<=p.length-1;m++)if(f.push(p[m]),f.length===c)return f;h=u=d}}return f.push(r.slice(u)),f}]},!Si);var Ei={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ai=ct.forEach,xi=kn("forEach")?function(e,t){return Ai(this,e,1<arguments.length?t:void 0)}:[].forEach;for(var Ci in Ei){var Pi=y[Ci],Li=Pi&&Pi.prototype;if(Li&&Li.forEach!==xi)try{R(Li,"forEach",xi)}catch(e){Li.forEach=xi}}var Ii=De("iterator"),Mi=De("toStringTag"),Oi=wn.values;for(var ji in Ei){var Ni=y[ji],_i=Ni&&Ni.prototype;if(_i){if(_i[Ii]!==Oi)try{R(_i,Ii,Oi)}catch(e){_i[Ii]=Oi}if(_i[Mi]||R(_i,Mi,ji),Ei[ji])for(var Ri in wn)if(_i[Ri]!==wn[Ri])try{R(_i,Ri,wn[Ri])}catch(e){_i[Ri]=wn[Ri]}}}function Ui(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}function Fi(t,e,n,i){try{return i?e(E(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&E(r.call(t)),e}}function qi(e){return void 0!==e&&(Xt.Array===e||ar[rr]===e)}function Di(e){if(null!=e)return e[or]||e["@@iterator"]||Xt[Mn(e)]}function Hi(e,t,n){var i,r,a,o,s=se(e),l="function"==typeof this?this:Array,c=arguments.length,u=1<c?t:void 0,h=void 0!==u,f=0,d=Di(s);if(h&&(u=ze(u,2<c?n:void 0,2)),null==d||l==Array&&qi(d))for(r=new l(i=ee(s.length));f<i;f++)An(r,f,h?u(s[f],f):s[f]);else for(o=d.call(s),r=new l;!(a=o.next()).done;f++)An(r,f,h?Fi(o,u,[a.value,f],!0):a.value);return r.length=f,r}function Vi(e){return e+22+75*(e<26)}function Bi(e,t,n){var i=0;for(e=n?hr(e/700):e>>1,e+=hr(e/t);455<e;i+=36)e=hr(e/35);return hr(i+36*e/(e+38))}function zi(e){var t,n,i=[],r=(e=function(e){for(var t=[],n=0,i=e.length;n<i;){var r=e.charCodeAt(n++);if(55296<=r&&r<=56319&&n<i){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)).length,a=128,o=0,s=72;for(t=0;t<e.length;t++)(n=e[t])<128&&i.push(fr(n));var l=i.length,c=l;for(l&&i.push("-");c<r;){var u=sr;for(t=0;t<e.length;t++)a<=(n=e[t])&&n<u&&(u=n);var h=c+1;if(u-a>hr((sr-o)/h))throw RangeError(ur);for(o+=(u-a)*h,a=u,t=0;t<e.length;t++){if((n=e[t])<a&&++o>sr)throw RangeError(ur);if(n==a){for(var f=o,d=36;;d+=36){var p=d<=s?1:s+26<=d?26:d-s;if(f<p)break;var m=f-p,g=36-p;i.push(fr(Vi(p+m%g))),f=hr(m/g)}i.push(fr(Vi(f))),s=Bi(o,h,c==l),o=0,++c}}++o,++a}return i.join("")}function Wi(e,t,n){for(var i in t)ue(e,i,t[i],n);return e}function Ki(e){var t=Di(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return E(t.call(e))}function $i(t){try{return decodeURIComponent(t)}catch(e){return t}}function Yi(e){var t,n=e.replace(br," "),i=4;try{return decodeURIComponent(n)}catch(e){for(;i;)n=n.replace((t=i--,wr[t-1]||(wr[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))),$i);return n}}function Gi(e){return Tr[e]}function Qi(e){return encodeURIComponent(e).replace(kr,Gi)}function Xi(e,t){if(t)for(var n,i,r=t.split("&"),a=0;a<r.length;)(n=r[a++]).length&&(i=n.split("="),e.push({key:Yi(i.shift()),value:Yi(i.join("="))}))}function Ji(e){this.entries.length=0,Xi(this.entries,e)}function Zi(e,t){if(e<t)throw TypeError("Not enough arguments")}var er=De("iterator"),tr=!g(function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[er]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash}),nr=Object.assign,ir=!nr||g(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=nr({},e)[n]||je(nr({},t)).join("")!=i})?function(e,t){for(var n=se(e),i=arguments.length,r=1,a=Te.f,o=S.f;r<i;)for(var s,l=C(arguments[r++]),c=a?je(l).concat(a(l)):je(l),u=c.length,h=0;h<u;)s=c[h++],b&&!o.call(l,s)||(n[s]=l[s]);return n}:nr,rr=De("iterator"),ar=Array.prototype,or=De("iterator"),sr=2147483647,lr=/[^\0-\u007E]/,cr=/[.\u3002\uFF0E\uFF61]/g,ur="Overflow: input needs wider integers to process",hr=Math.floor,fr=String.fromCharCode,dr=De("iterator"),pr="URLSearchParams",mr=pr+"Iterator",gr=ce.set,vr=ce.getterFor(pr),yr=ce.getterFor(mr),br=/\+/g,wr=Array(4),kr=/[!'()~]|%20/g,Tr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Sr=on(function(e,t){gr(this,{type:mr,iterator:Ki(vr(e).entries),kind:t})},"Iterator",function(){var e=yr(this),t=e.kind,n=e.iterator.next(),i=n.value;return n.done||(n.value="keys"===t?i.key:"values"===t?i.value:[i.key,i.value]),n}),Er=function(e){Ui(this,Er,pr);var t,n,i,r,a,o,s,l=0<arguments.length?e:void 0,c=[];if(gr(this,{type:pr,entries:c,updateURL:function(){},updateSearchParams:Ji}),void 0!==l)if(v(l))if("function"==typeof(t=Di(l)))for(n=t.call(l);!(i=n.next()).done;){if((a=(r=Ki(E(i.value))).next()).done||(o=r.next()).done||!r.next().done)throw TypeError("Expected sequence with length 2");c.push({key:a.value+"",value:o.value+""})}else for(s in l)w(l,s)&&c.push({key:s,value:l[s]+""});else Xi(c,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},Ar=Er.prototype;Wi(Ar,{append:function(e,t){Zi(arguments.length,2);var n=vr(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){Zi(arguments.length,1);for(var t=vr(this),n=t.entries,i=e+"",r=0;r<n.length;)n[r].key===i?n.splice(r,1):r++;t.updateURL()},get:function(e){Zi(arguments.length,1);for(var t=vr(this).entries,n=e+"",i=0;i<t.length;i++)if(t[i].key===n)return t[i].value;return null},getAll:function(e){Zi(arguments.length,1);for(var t=vr(this).entries,n=e+"",i=[],r=0;r<t.length;r++)t[r].key===n&&i.push(t[r].value);return i},has:function(e){Zi(arguments.length,1);for(var t=vr(this).entries,n=e+"",i=0;i<t.length;)if(t[i++].key===n)return!0;return!1},set:function(e,t){Zi(arguments.length,1);for(var n,i=vr(this),r=i.entries,a=!1,o=e+"",s=t+"",l=0;l<r.length;l++)(n=r[l]).key===o&&(a?r.splice(l--,1):(a=!0,n.value=s));a||r.push({key:o,value:s}),i.updateURL()},sort:function(){var e,t,n,i=vr(this),r=i.entries,a=r.slice();for(n=r.length=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}i.updateURL()},forEach:function(e,t){for(var n,i=vr(this).entries,r=ze(e,1<arguments.length?t:void 0,3),a=0;a<i.length;)r((n=i[a++]).value,n.key,this)},keys:function(){return new Sr(this,"keys")},values:function(){return new Sr(this,"values")},entries:function(){return new Sr(this,"entries")}},{enumerable:!0}),ue(Ar,dr,Ar.entries),ue(Ar,"toString",function(){for(var e,t=vr(this).entries,n=[],i=0;i<t.length;)e=t[i++],n.push(Qi(e.key)+"="+Qi(e.value));return n.join("&")},{enumerable:!0}),Ve(Er,pr),oe({global:!0,forced:!tr},{URLSearchParams:Er});function xr(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return Kr;if(!(n=oa(t.slice(1,-1))))return Kr;e.host=n}else if(da(e)){if(t=function(e){var t,n,i=[],r=e.toLowerCase().replace(cr,".").split(".");for(t=0;t<r.length;t++)n=r[t],i.push(lr.test(n)?"xn--"+zi(n):n);return i.join(".")}(t),ta.test(t))return Kr;if(null===(n=aa(t)))return Kr;e.host=n}else{if(na.test(t))return Kr;for(n="",i=Hi(t),r=0;r<i.length;r++)n+=ha(i[r],sa);e.host=n}}function Cr(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=Br(e/256);return t.join(".")}if("object"!=typeof e)return e;for(t="",i=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(n<r&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return n<r&&(t=i,n=r),t}(e),n=0;n<8;n++)r&&0===e[n]||(r=r&&!1,i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}function Pr(e){return""!=e.username||""!=e.password}function Lr(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme}function Ir(e,t){var n;return 2==e.length&&Yr.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)}function Mr(e){var t;return 1<e.length&&Ir(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)}function Or(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&Ir(t[0],!0)||t.pop()}function jr(e,t,n,i){var r,a,o,s,l,c,u=n||pa,h=0,f="",d=!1,p=!1,m=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(ia,"")),t=t.replace(ra,""),r=Hi(t);h<=r.length;){switch(a=r[h],u){case pa:if(!a||!Yr.test(a)){if(n)return Wr;u=ga;continue}f+=a.toLowerCase(),u=ma;break;case ma:if(a&&(Gr.test(a)||"+"==a||"-"==a||"."==a))f+=a.toLowerCase();else{if(":"!=a){if(n)return Wr;f="",u=ga,h=0;continue}if(n&&(da(e)!=w(fa,f)||"file"==f&&(Pr(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(da(e)&&fa[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?u=Ca:da(e)&&i&&i.scheme==e.scheme?u=va:da(e)?u=ka:"/"==r[h+1]?(u=ya,h++):(e.cannotBeABaseURL=!0,e.path.push(""),u=Oa)}break;case ga:if(!i||i.cannotBeABaseURL&&"#"!=a)return Wr;if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,u=Na;break}u="file"==i.scheme?Ca:ba;continue;case va:if("/"!=a||"/"!=r[h+1]){u=ba;continue}u=Ta,h++;break;case ya:if("/"==a){u=Sa;break}u=Ma;continue;case ba:if(e.scheme=i.scheme,a==_r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&da(e))u=wa;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",u=ja;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),u=Ma;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Na}break;case wa:if(!da(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,u=Ma;continue}u=Sa}else u=Ta;break;case ka:if(u=Ta,"/"!=a||"/"!=f.charAt(h+1))continue;h++;break;case Ta:if("/"==a||"\\"==a)break;u=Sa;continue;case Sa:if("@"==a){d&&(f="%40"+f),d=!0,o=Hi(f);for(var g=0;g<o.length;g++){var v=o[g];if(":"!=v||m){var y=ha(v,ua);m?e.password+=y:e.username+=y}else m=!0}f=""}else if(a==_r||"/"==a||"?"==a||"#"==a||"\\"==a&&da(e)){if(d&&""==f)return"Invalid authority";h-=Hi(f).length+1,f="",u=Ea}else f+=a;break;case Ea:case Aa:if(n&&"file"==e.scheme){u=La;continue}if(":"!=a||p){if(a==_r||"/"==a||"?"==a||"#"==a||"\\"==a&&da(e)){if(da(e)&&""==f)return Kr;if(n&&""==f&&(Pr(e)||null!==e.port))return;if(s=xr(e,f))return s;if(f="",u=Ia,n)return;continue}"["==a?p=!0:"]"==a&&(p=!1),f+=a}else{if(""==f)return Kr;if(s=xr(e,f))return s;if(f="",u=xa,n==Aa)return}break;case xa:if(!Qr.test(a)){if(a==_r||"/"==a||"?"==a||"#"==a||"\\"==a&&da(e)||n){if(""!=f){var b=parseInt(f,10);if(65535<b)return $r;e.port=da(e)&&b===fa[e.scheme]?null:b,f=""}if(n)return;u=Ia;continue}return $r}f+=a;break;case Ca:if(e.scheme="file","/"==a||"\\"==a)u=Pa;else{if(!i||"file"!=i.scheme){u=Ma;continue}if(a==_r)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",u=ja;else{if("#"!=a){Mr(r.slice(h).join(""))||(e.host=i.host,e.path=i.path.slice(),Or(e)),u=Ma;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Na}}break;case Pa:if("/"==a||"\\"==a){u=La;break}i&&"file"==i.scheme&&!Mr(r.slice(h).join(""))&&(Ir(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),u=Ma;continue;case La:if(a==_r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&Ir(f))u=Ma;else if(""==f){if(e.host="",n)return;u=Ia}else{if(s=xr(e,f))return s;if("localhost"==e.host&&(e.host=""),n)return;f="",u=Ia}continue}f+=a;break;case Ia:if(da(e)){if(u=Ma,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=_r&&(u=Ma,"/"!=a))continue}else e.fragment="",u=Na;else e.query="",u=ja;break;case Ma:if(a==_r||"/"==a||"\\"==a&&da(e)||!n&&("?"==a||"#"==a)){if(".."===(c=(c=f).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(Or(e),"/"==a||"\\"==a&&da(e)||e.path.push("")):"."===(l=f)||"%2e"===l.toLowerCase()?"/"==a||"\\"==a&&da(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Ir(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(a==_r||"?"==a||"#"==a))for(;1<e.path.length&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",u=ja):"#"==a&&(e.fragment="",u=Na)}else f+=ha(a,ca);break;case Oa:"?"==a?(e.query="",u=ja):"#"==a?(e.fragment="",u=Na):a!=_r&&(e.path[0]+=ha(a,sa));break;case ja:n||"#"!=a?a!=_r&&("'"==a&&da(e)?e.query+="%27":e.query+="#"==a?"%23":ha(a,sa)):(e.fragment="",u=Na);break;case Na:a!=_r&&(e.fragment+=ha(a,la))}h++}}function Nr(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}var _r,Rr={URLSearchParams:Er,getState:vr},Ur=zn.codeAt,Fr=y.URL,qr=Rr.URLSearchParams,Dr=Rr.getState,Hr=ce.set,Vr=ce.getterFor("URL"),Br=Math.floor,zr=Math.pow,Wr="Invalid scheme",Kr="Invalid host",$r="Invalid port",Yr=/[A-Za-z]/,Gr=/[\d+\-.A-Za-z]/,Qr=/\d/,Xr=/^(0x|0X)/,Jr=/^[0-7]+$/,Zr=/^\d+$/,ea=/^[\dA-Fa-f]+$/,ta=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,na=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,ia=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,ra=/[\u0009\u000A\u000D]/g,aa=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),4<(t=l.length))return e;for(n=[],i=0;i<t;i++){if(""==(r=l[i]))return e;if(a=10,1<r.length&&"0"==r.charAt(0)&&(a=Xr.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?Zr:8==a?Jr:ea).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=zr(256,5-t))return null}else if(255<o)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*zr(256,3-i);return s},oa=function(e){function t(){return e.charAt(f)}var n,i,r,a,o,s,l,c=[0,0,0,0,0,0,0,0],u=0,h=null,f=0;if(":"==t()){if(":"!=e.charAt(1))return;f+=2,h=++u}for(;t();){if(8==u)return;if(":"!=t()){for(n=i=0;i<4&&ea.test(t());)n=16*n+parseInt(t(),16),f++,i++;if("."==t()){if(0==i)return;if(f-=i,6<u)return;for(r=0;t();){if(a=null,0<r){if(!("."==t()&&r<4))return;f++}if(!Qr.test(t()))return;for(;Qr.test(t());){if(o=parseInt(t(),10),null===a)a=o;else{if(0==a)return;a=10*a+o}if(255<a)return;f++}c[u]=256*c[u]+a,2!=++r&&4!=r||u++}if(4!=r)return;break}if(":"==t()){if(f++,!t())return}else if(t())return;c[u++]=n}else{if(null!==h)return;f++,h=++u}}if(null!==h)for(s=u-h,u=7;0!=u&&0<s;)l=c[u],c[u--]=c[h+s-1],c[h+--s]=l;else if(8!=u)return;return c},sa={},la=ir({},sa,{" ":1,'"':1,"<":1,">":1,"`":1}),ca=ir({},la,{"#":1,"?":1,"{":1,"}":1}),ua=ir({},ca,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),ha=function(e,t){var n=Ur(e,0);return 32<n&&n<127&&!w(t,e)?e:encodeURIComponent(e)},fa={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},da=function(e){return w(fa,e.scheme)},pa={},ma={},ga={},va={},ya={},ba={},wa={},ka={},Ta={},Sa={},Ea={},Aa={},xa={},Ca={},Pa={},La={},Ia={},Ma={},Oa={},ja={},Na={},_a=function(e,t){var n,i,r=Ui(this,_a,"URL"),a=1<arguments.length?t:void 0,o=String(e),s=Hr(r,{type:"URL"});if(void 0!==a)if(a instanceof _a)n=Vr(a);else if(i=jr(n={},String(a)))throw TypeError(i);if(i=jr(s,o,null,n))throw TypeError(i);var l=s.searchParams=new qr,c=Dr(l);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(l)||null},b||(r.href=Ua.call(r),r.origin=Fa.call(r),r.protocol=qa.call(r),r.username=Da.call(r),r.password=Ha.call(r),r.host=Va.call(r),r.hostname=Ba.call(r),r.port=za.call(r),r.pathname=Wa.call(r),r.search=Ka.call(r),r.searchParams=$a.call(r),r.hash=Ya.call(r))},Ra=_a.prototype,Ua=function(){var e=Vr(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",Pr(e)&&(c+=n+(i?":"+i:"")+"@"),c+=Cr(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},Fa=function(){var e=Vr(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&da(e)?t+"://"+Cr(e.host)+(null!==n?":"+n:""):"null"},qa=function(){return Vr(this).scheme+":"},Da=function(){return Vr(this).username},Ha=function(){return Vr(this).password},Va=function(){var e=Vr(this),t=e.host,n=e.port;return null===t?"":null===n?Cr(t):Cr(t)+":"+n},Ba=function(){var e=Vr(this).host;return null===e?"":Cr(e)},za=function(){var e=Vr(this).port;return null===e?"":String(e)},Wa=function(){var e=Vr(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Ka=function(){var e=Vr(this).query;return e?"?"+e:""},$a=function(){return Vr(this).searchParams},Ya=function(){var e=Vr(this).fragment;return e?"#"+e:""};if(b&&Ne(Ra,{href:Nr(Ua,function(e){var t=Vr(this),n=String(e),i=jr(t,n);if(i)throw TypeError(i);Dr(t.searchParams).updateSearchParams(t.query)}),origin:Nr(Fa),protocol:Nr(qa,function(e){var t=Vr(this);jr(t,String(e)+":",pa)}),username:Nr(Da,function(e){var t=Vr(this),n=Hi(String(e));if(!Lr(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=ha(n[i],ua)}}),password:Nr(Ha,function(e){var t=Vr(this),n=Hi(String(e));if(!Lr(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=ha(n[i],ua)}}),host:Nr(Va,function(e){var t=Vr(this);t.cannotBeABaseURL||jr(t,String(e),Ea)}),hostname:Nr(Ba,function(e){var t=Vr(this);t.cannotBeABaseURL||jr(t,String(e),Aa)}),port:Nr(za,function(e){var t=Vr(this);Lr(t)||(""==(e=String(e))?t.port=null:jr(t,e,xa))}),pathname:Nr(Wa,function(e){var t=Vr(this);t.cannotBeABaseURL||(t.path=[],jr(t,e+"",Ia))}),search:Nr(Ka,function(e){var t=Vr(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",jr(t,e,ja)),Dr(t.searchParams).updateSearchParams(t.query)}),searchParams:Nr($a),hash:Nr(Ya,function(e){var t=Vr(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",jr(t,e,Na)):t.fragment=null})}),ue(Ra,"toJSON",function(){return Ua.call(this)},{enumerable:!0}),ue(Ra,"toString",function(){return Ua.call(this)},{enumerable:!0}),Fr){var Ga=Fr.createObjectURL,Qa=Fr.revokeObjectURL;Ga&&ue(_a,"createObjectURL",function(e){return Ga.apply(Fr,arguments)}),Qa&&ue(_a,"revokeObjectURL",function(e){return Qa.apply(Fr,arguments)})}function Xa(e){return(Xa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ja(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Za(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function eo(e,t,n){return t&&Za(e.prototype,t),n&&Za(e,n),e}function to(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function no(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function io(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Ve(_a,"URL"),oe({global:!0,forced:!tr,sham:!b},{URL:_a}),function(e){function i(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function r(e){return encodeURIComponent(e).replace(/%20/g,"+")}function a(e){return decodeURIComponent(String(e).replace(/\+/g," "))}var t,n=function(){try{return!!Symbol.iterator}catch(e){return!1}}();function o(e){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var t=Xa(e);if("undefined"!==t)if("string"===t)""!==e&&this._fromString(e);else if(e instanceof o){var n=this;e.forEach(function(e,t){n.append(t,e)})}else{if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(e))for(var i=0;i<e.length;i++){var r=e[i];if("[object Array]"!==Object.prototype.toString.call(r)&&2===r.length)throw new TypeError("Expected [string, any] as entry at index "+i+" of URLSearchParams's input");this.append(r[0],r[1])}else for(var a in e)e.hasOwnProperty(a)&&this.append(a,e[a])}}"URLSearchParams"in e&&"a=1"===new e.URLSearchParams("?a=1").toString()||((t=o.prototype).append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},t.delete=function(e){delete this._entries[e]},t.get=function(e){return e in this._entries?this._entries[e][0]:null},t.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},t.has=function(e){return e in this._entries},t.set=function(e,t){this._entries[e]=[String(t)]},t.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var r=0;r<n.length;r++)e.call(t,n[r],i,this)}},t.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),i(n)},t.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),i(t)},t.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),i(n)},n&&(t[Symbol.iterator]=t.entries),t.toString=function(){var n=[];return this.forEach(function(e,t){n.push(r(t)+"="+r(e))}),n.join("&")},e.URLSearchParams=o);var s=e.URLSearchParams.prototype;"function"!=typeof s.sort&&(s.sort=function(){var n=this,i=[];this.forEach(function(e,t){i.push([t,e]),n._entries||n.delete(t)}),i.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),n._entries&&(n._entries={});for(var e=0;e<i.length;e++)this.append(i[e][0],i[e][1])}),"function"!=typeof s._fromString&&Object.defineProperty(s,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var n=[];this.forEach(function(e,t){n.push(t)});for(var t=0;t<n.length;t++)this.delete(n[t])}var i,r=(e=e.replace(/^\?/,"")).split("&");for(t=0;t<r.length;t++)i=r[t].split("="),this.append(a(i[0]),1<i.length?a(i[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(u){var t,n;function e(e,t){"string"!=typeof e&&(e=String(e));var n,i=document;if(t&&(void 0===u.location||t!==u.location.href)){(n=(i=document.implementation.createHTMLDocument("")).createElement("base")).href=t,i.head.appendChild(n);try{if(0!==n.href.indexOf(t))throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var r=i.createElement("a");if(r.href=e,n&&(i.body.appendChild(r),r.href=r.href),":"===r.protocol||!/:/.test(r.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:r});var a=new u.URLSearchParams(this.search),o=!0,s=!0,l=this;["append","delete","set"].forEach(function(e){var t=a[e];a[e]=function(){t.apply(a,arguments),o&&(s=!1,l.search=a.toString(),s=!0)}}),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var c=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==c&&(c=this.search,s&&(o=!1,this.searchParams._fromString(this.search),o=!0))}})}if(!function(){try{var e=new u.URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()&&(t=u.URL,n=e.prototype,["hash","host","hostname","port","protocol"].forEach(function(e){var t;t=e,Object.defineProperty(n,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:!0})}),Object.defineProperty(n,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(n,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(){},enumerable:!0},username:{get:function(){return""},set:function(){},enumerable:!0}}),e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},u.URL=e),void 0!==u.location&&!("origin"in u.location)){var i=function(){return u.location.protocol+"//"+u.location.hostname+(u.location.port?":"+u.location.port:"")};try{Object.defineProperty(u.location,"origin",{get:i,enumerable:!0})}catch(e){setInterval(function(){u.location.origin=i()},100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);function ro(e){if(v(e)){var t=e[ao];return void 0!==t?!!t:Oe(e)}}var ao=De("isConcatSpreadable"),oo=9007199254740991,so="Maximum allowed index exceeded",lo=!g(function(){var e=[];return e[ao]=!1,e.concat()[0]!==e}),co=xn("concat");oe({target:"Array",proto:!0,forced:!lo||!co},{concat:function(e){var t,n,i,r,a,o=se(this),s=We(o,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(ro(a=-1===t?o:arguments[t])){if(r=ee(a.length),oo<l+r)throw TypeError(so);for(n=0;n<r;n++,l++)n in a&&An(s,l,a[n])}else{if(oo<=l)throw TypeError(so);An(s,l++,a)}return s.length=l,s}});var uo=ct.filter;oe({target:"Array",proto:!0,forced:!xn("filter")},{filter:function(e,t){return uo(this,e,1<arguments.length?t:void 0)}});var ho=ct.find,fo="find",po=!0;fo in[]&&Array(1)[fo](function(){po=!1}),oe({target:"Array",proto:!0,forced:po},{find:function(e,t){return ho(this,e,1<arguments.length?t:void 0)}}),$t(fo);var mo=De("iterator"),go=!1;try{var vo=0,yo={next:function(){return{done:!!vo++}},return:function(){go=!0}};yo[mo]=function(){return this},Array.from(yo,function(){throw 2})}catch(e){}function bo(e,t){if(!t&&!go)return!1;var n=!1;try{var i={};i[mo]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n}var wo=!bo(function(e){Array.from(e)});oe({target:"Array",stat:!0,forced:wo},{from:Hi});var ko=ve.includes;oe({target:"Array",proto:!0},{includes:function(e,t){return ko(this,e,1<arguments.length?t:void 0)}}),$t("includes");var To=ct.map;oe({target:"Array",proto:!0,forced:!xn("map")},{map:function(e,t){return To(this,e,1<arguments.length?t:void 0)}});function So(e,t,n){var i,r;return hn&&"function"==typeof(i=t.constructor)&&i!==n&&v(r=i.prototype)&&r!==n.prototype&&hn(e,r),e}function Eo(n){return function(e){var t=String(h(e));return 1&n&&(t=t.replace(Po,"")),2&n&&(t=t.replace(Lo,"")),t}}function Ao(e){var t,n,i,r,a,o,s,l,c=u(e,!1);if("string"==typeof c&&2<c.length)if(43===(t=(c=No(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((l=a.charCodeAt(s))<48||r<l)return NaN;return parseInt(a,i)}return+c}var xo="\t\n\v\f\r                　\u2028\u2029\ufeff",Co="["+xo+"]",Po=RegExp("^"+Co+Co+"*"),Lo=RegExp(Co+Co+"*$"),Io={start:Eo(1),end:Eo(2),trim:Eo(3)},Mo=ke.f,Oo=j.f,jo=_.f,No=Io.trim,_o="Number",Ro=y[_o],Uo=Ro.prototype,Fo=d(qe(Uo))==_o;if(Le(_o,!Ro(" 0o1")||!Ro("0b1")||Ro("+0x1"))){for(var qo,Do=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof Do&&(Fo?g(function(){Uo.valueOf.call(n)}):d(n)!=_o)?So(new Ro(Ao(t)),n,Do):Ao(t)},Ho=b?Mo(Ro):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Vo=0;Ho.length>Vo;Vo++)w(Ro,qo=Ho[Vo])&&!w(Do,qo)&&jo(Do,qo,Oo(Ro,qo));(Do.prototype=Uo).constructor=Do,ue(y,_o,Do)}var Bo=g(function(){je(1)});oe({target:"Object",stat:!0,forced:Bo},{keys:function(e){return je(se(e))}});function zo(e){if(gi(e))throw TypeError("The method doesn't accept regular expressions");return e}function Wo(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[Ko]=!1,"/./"[t](n)}catch(e){}}}var Ko=De("match");oe({target:"String",proto:!0,forced:!Wo("includes")},{includes:function(e,t){return!!~String(h(this)).indexOf(zo(e),1<arguments.length?t:void 0)}});function $o(i,e,t,r,a){function n(e){var n=s[e];ue(s,e,"add"==e?function(e){return n.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(a&&!v(e))&&n.call(this,0===e?0:e)}:"get"==e?function(e){return a&&!v(e)?void 0:n.call(this,0===e?0:e)}:"has"==e?function(e){return!(a&&!v(e))&&n.call(this,0===e?0:e)}:function(e,t){return n.call(this,0===e?0:e,t),this})}var o=y[i],s=o&&o.prototype,l=o,c=r?"set":"add",u={};if(Le(i,"function"!=typeof o||!(a||s.forEach&&!g(function(){(new o).entries().next()}))))l=t.getConstructor(e,i,r,c),Xo.REQUIRED=!0;else if(Le(i,!0)){var h=new l,f=h[c](a?{}:-0,1)!=h,d=g(function(){h.has(1)}),p=bo(function(e){new o(e)}),m=!a&&g(function(){for(var e=new o,t=5;t--;)e[c](t,t);return!e.has(-0)});p||(((l=e(function(e,t){Ui(e,l,i);var n=So(new o,e,l);return null!=t&&Jo(t,n[c],n,r),n})).prototype=s).constructor=l),(d||m)&&(n("delete"),n("has"),r&&n("get")),(m||f)&&n(c),a&&s.clear&&delete s.clear}return u[i]=l,oe({global:!0,forced:l!=o},u),Ve(l,i),a||t.setStrong(l,i,r),l}function Yo(e){return e.frozen||(e.frozen=new as)}function Go(e,t){return ns(e.entries,function(e){return e[0]===t})}var Qo=!g(function(){return Object.isExtensible(Object.preventExtensions({}))}),Xo=t(function(e){function n(e){t(e,i,{value:{objectID:"O"+ ++r,weakData:{}}})}var t=_.f,i=s("meta"),r=0,a=Object.isExtensible||function(){return!0},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!v(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!w(e,i)){if(!a(e))return"F";if(!t)return"E";n(e)}return e[i].objectID},getWeakData:function(e,t){if(!w(e,i)){if(!a(e))return!0;if(!t)return!1;n(e)}return e[i].weakData},onFreeze:function(e){return Qo&&o.REQUIRED&&a(e)&&!w(e,i)&&n(e),e}};z[i]=!0}),Jo=(Xo.REQUIRED,Xo.fastKey,Xo.getWeakData,Xo.onFreeze,t(function(e){function f(e,t){this.stopped=e,this.result=t}(e.exports=function(e,t,n,i,r){var a,o,s,l,c,u,h=ze(t,n,i?2:1);if(r)a=e;else{if("function"!=typeof(o=Di(e)))throw TypeError("Target is not iterable");if(qi(o)){for(s=0,l=ee(e.length);s<l;s++)if((c=i?h(E(u=e[s])[0],u[1]):h(e[s]))&&c instanceof f)return c;return new f(!1)}a=o.call(e)}for(;!(u=a.next()).done;)if((c=Fi(a,h,u.value,i))&&c instanceof f)return c;return new f(!1)}).stop=function(e){return new f(!0,e)}})),Zo=Xo.getWeakData,es=ce.set,ts=ce.getterFor,ns=ct.find,is=ct.findIndex,rs=0,as=function(){this.entries=[]};as.prototype={get:function(e){var t=Go(this,e);if(t)return t[1]},has:function(e){return!!Go(this,e)},set:function(e,t){var n=Go(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(t){var e=is(this.entries,function(e){return e[0]===t});return~e&&this.entries.splice(e,1),!!~e}};var os={getConstructor:function(e,n,i,r){function a(e,t,n){var i=s(e),r=Zo(E(t),!0);return!0===r?Yo(i).set(t,n):r[i.id]=n,e}var o=e(function(e,t){Ui(e,o,n),es(e,{type:n,id:rs++,frozen:void 0}),null!=t&&Jo(t,e[r],e,i)}),s=ts(n);return Wi(o.prototype,{delete:function(e){var t=s(this);if(!v(e))return!1;var n=Zo(e);return!0===n?Yo(t).delete(e):n&&w(n,t.id)&&delete n[t.id]},has:function(e){var t=s(this);if(!v(e))return!1;var n=Zo(e);return!0===n?Yo(t).has(e):n&&w(n,t.id)}}),Wi(o.prototype,i?{get:function(e){var t=s(this);if(v(e)){var n=Zo(e);return!0===n?Yo(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return a(this,e,t)}}:{add:function(e){return a(this,e,!0)}}),o}};t(function(e){function t(t){return function(e){return t(this,arguments.length?e:void 0)}}var i,r=ce.enforce,n=!y.ActiveXObject&&"ActiveXObject"in y,a=Object.isExtensible,o=e.exports=$o("WeakMap",t,os,!0,!0);if(D&&n){i=os.getConstructor(t,"WeakMap",!0),Xo.REQUIRED=!0;var s=o.prototype,l=s.delete,c=s.has,u=s.get,h=s.set;Wi(s,{delete:function(e){if(!v(e)||a(e))return l.call(this,e);var t=r(this);return t.frozen||(t.frozen=new i),l.call(this,e)||t.frozen.delete(e)},has:function(e){if(!v(e)||a(e))return c.call(this,e);var t=r(this);return t.frozen||(t.frozen=new i),c.call(this,e)||t.frozen.has(e)},get:function(e){if(!v(e)||a(e))return u.call(this,e);var t=r(this);return t.frozen||(t.frozen=new i),c.call(this,e)?u.call(this,e):t.frozen.get(e)},set:function(e,t){if(v(e)&&!a(e)){var n=r(this);n.frozen||(n.frozen=new i),c.call(this,e)?h.call(this,e,t):n.frozen.set(e,t)}else h.call(this,e,t);return this}})}});oe({target:"Object",stat:!0,forced:Object.assign!==ir},{assign:ir});var ss,ls=Io.trim;oe({target:"String",proto:!0,forced:(ss="trim",g(function(){return xo[ss]()||"​᠎"!="​᠎"[ss]()||xo[ss].name!==ss}))},{trim:function(){return ls(this)}});var cs="".repeat||function(e){var t=String(h(this)),n="",i=Z(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;0<i;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n},us=1..toFixed,hs=Math.floor,fs=function(e,t,n){return 0===t?n:t%2==1?fs(e,t-1,n*e):fs(e*e,t/2,n)},ds=us&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!g(function(){us.call({})});oe({target:"Number",proto:!0,forced:ds},{toFixed:function(e){function t(e,t){for(var n=-1,i=t;++n<6;)i+=e*u[n],u[n]=i%1e7,i=hs(i/1e7)}function n(e){for(var t=6,n=0;0<=--t;)n+=u[t],u[t]=hs(n/e),n=n%e*1e7}function i(){for(var e=6,t="";0<=--e;)if(""!==t||0===e||0!==u[e]){var n=String(u[e]);t=""===t?n:t+cs.call("0",7-n.length)+n}return t}var r,a,o,s,l=function(e){if("number"!=typeof e&&"Number"!=d(e))throw TypeError("Incorrect invocation");return+e}(this),c=Z(e),u=[0,0,0,0,0,0],h="",f="0";if(c<0||20<c)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||1e21<=l)return String(l);if(l<0&&(h="-",l=-l),1e-21<l)if(a=(r=function(e){for(var t=0,n=e;4096<=n;)t+=12,n/=4096;for(;2<=n;)t+=1,n/=2;return t}(l*fs(2,69,1))-69)<0?l*fs(2,-r,1):l/fs(2,r,1),a*=4503599627370496,0<(r=52-r)){for(t(0,a),o=c;7<=o;)t(1e7,0),o-=7;for(t(fs(10,o,1),0),o=r-1;23<=o;)n(1<<23),o-=23;n(1<<o),t(1,1),n(2),f=i()}else t(0,a),t(1<<-r,0),f=i()+cs.call("0",c);return f=0<c?h+((s=f.length)<=c?"0."+cs.call("0",c-s)+f:f.slice(0,s-c)+"."+f.slice(s-c)):h+f}});function ps(s){return function(e){for(var t,n=c(e),i=je(n),r=i.length,a=0,o=[];a<r;)t=i[a++],b&&!ms.call(n,t)||o.push(s?[t,n[t]]:n[t]);return o}}var ms=S.f,gs={entries:ps(!0),values:ps(!1)},vs=gs.entries;oe({target:"Object",stat:!0},{entries:function(e){return vs(e)}});var ys=gs.values;oe({target:"Object",stat:!0},{values:function(e){return ys(e)}});var bs={addCSS:!0,thumbWidth:15,watch:!0};oe({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});function ws(e){return null!=e?e.constructor:null}function ks(e,t){return Boolean(e&&t&&e instanceof t)}function Ts(e){return null==e}function Ss(e){return ws(e)===Object}function Es(e){return ws(e)===String}function As(e){return Array.isArray(e)}function xs(e){return ks(e,NodeList)}var Cs=Es,Ps=As,Ls=xs,Is=function(e){return ks(e,Element)},Ms=function(e){return ks(e,Event)},Os=function(e){return Ts(e)||(Es(e)||As(e)||xs(e))&&!e.length||Ss(e)&&!Object.keys(e).length};function js(e,t){if(t<1){var n=(i="".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0;return parseFloat(e.toFixed(n))}var i;return Math.round(e/t)*t}ni("match",1,function(i,c,u){return[function(e){var t=h(this),n=null==e?void 0:e[i];return void 0!==n?n.call(e,t):new RegExp(e)[i](String(t))},function(e){var t=u(c,e,this);if(t.done)return t.value;var n=E(e),i=String(this);if(!n.global)return ri(n,i);for(var r,a=n.unicode,o=[],s=n.lastIndex=0;null!==(r=ri(n,i));){var l=String(r[0]);""===(o[s]=l)&&(n.lastIndex=ii(i,ee(n.lastIndex),a)),s++}return 0===s?null:o}]});function Ns(e){var t=J(e),n=_.f;b&&t&&!t[Bs]&&n(t,Bs,{configurable:!0,get:function(){return this}})}function _s(e){if(Xs.hasOwnProperty(e)){var t=Xs[e];delete Xs[e],t()}}function Rs(e){return function(){_s(e)}}function Us(e){_s(e.data)}function Fs(e){y.postMessage(e+"",zs.protocol+"//"+zs.host)}var qs,Ds,Hs,Vs=function(){function u(e,t){Ja(this,u),Is(e)?this.element=e:Cs(e)&&(this.element=document.querySelector(e)),Is(this.element)&&Os(this.element.rangeTouch)&&(this.config=Object.assign({},bs,t),this.init())}return eo(u,[{key:"init",value:function(){u.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){u.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(e){if(!u.enabled||!Ms(e))return null;var t,n=e.target,i=e.changedTouches[0],r=parseFloat(n.getAttribute("min"))||0,a=parseFloat(n.getAttribute("max"))||100,o=parseFloat(n.getAttribute("step"))||1,s=a-r,l=n.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return(t=100/l.width*(i.clientX-l.left))<0?t=0:100<t&&(t=100),t<50?t-=(100-2*t)*c:50<t&&(t+=2*(t-50)*c),r+js(t/100*s,o)}},{key:"set",value:function(e){u.enabled&&Ms(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}],[{key:"setup",value:function(n,e){var t=1<arguments.length&&void 0!==e?e:{},i=null;if(Os(n)||Cs(n)?i=Array.from(document.querySelectorAll(Cs(n)?n:'input[type="range"]')):Is(n)?i=[n]:Ls(n)?i=Array.from(n):Ps(n)&&(i=n.filter(Is)),Os(i))return null;var r=Object.assign({},bs,t);Cs(n)&&r.watch&&new MutationObserver(function(e){Array.from(e).forEach(function(e){Array.from(e.addedNodes).forEach(function(e){if(Is(e)&&function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t=n)){var t;new u(e,r)}})})}).observe(document.body,{childList:!0,subtree:!0});return i.map(function(e){return new u(e,t)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),u}(),Bs=De("species"),zs=y.location,Ws=y.setImmediate,Ks=y.clearImmediate,$s=y.process,Ys=y.MessageChannel,Gs=y.Dispatch,Qs=0,Xs={},Js="onreadystatechange";Ws&&Ks||(Ws=function(e){for(var t=[],n=1;n<arguments.length;)t.push(arguments[n++]);return Xs[++Qs]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},qs(Qs),Qs},Ks=function(e){delete Xs[e]},"process"==d($s)?qs=function(e){$s.nextTick(Rs(e))}:Gs&&Gs.now?qs=function(e){Gs.now(Rs(e))}:Ys?(Hs=(Ds=new Ys).port2,Ds.port1.onmessage=Us,qs=ze(Hs.postMessage,Hs,1)):!y.addEventListener||"function"!=typeof postMessage||y.importScripts||g(Fs)?qs=Js in a("script")?function(e){_e.appendChild(a("script"))[Js]=function(){_e.removeChild(this),_s(e)}}:function(e){setTimeout(Rs(e),0)}:(qs=Fs,y.addEventListener("message",Us,!1)));var Zs,el,tl,nl,il,rl,al,ol={set:Ws,clear:Ks},sl=J("navigator","userAgent")||"",ll=j.f,cl=ol.set,ul=y.MutationObserver||y.WebKitMutationObserver,hl=y.process,fl=y.Promise,dl="process"==d(hl),pl=ll(y,"queueMicrotask"),ml=pl&&pl.value;ml||(Zs=function(){var e,t;for(dl&&(e=hl.domain)&&e.exit();el;){t=el.fn,el=el.next;try{t()}catch(e){throw el?nl():tl=void 0,e}}tl=void 0,e&&e.enter()},nl=dl?function(){hl.nextTick(Zs)}:ul&&!/(iphone|ipod|ipad).*applewebkit/i.test(sl)?(il=!0,rl=document.createTextNode(""),new ul(Zs).observe(rl,{characterData:!0}),function(){rl.data=il=!il}):fl&&fl.resolve?(al=fl.resolve(void 0),function(){al.then(Zs)}):function(){cl.call(y,Zs)});function gl(e){var n,i;this.promise=new e(function(e,t){if(void 0!==n||void 0!==i)throw TypeError("Bad Promise constructor");n=e,i=t}),this.resolve=Be(n),this.reject=Be(i)}function vl(e,t){if(E(e),v(t)&&t.constructor===e)return t;var n=Pl.f(e);return(0,n.resolve)(t),n.promise}function yl(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}function bl(e){var t;return!(!v(e)||"function"!=typeof(t=e.then))&&t}function wl(h,f,d){if(!f.notified){f.notified=!0;var p=f.reactions;Cl(function(){for(var e=f.value,t=1==f.state,n=0;p.length>n;){var i,r,a,o=p[n++],s=t?o.ok:o.fail,l=o.resolve,c=o.reject,u=o.domain;try{s?(t||(2===f.rejection&&Xl(h,f),f.rejection=1),!0===s?i=e:(u&&u.enter(),i=s(e),u&&(u.exit(),a=!0)),i===o.promise?c(Rl("Promise-chain cycle")):(r=bl(i))?r.call(i,l,c):l(i)):c(e)}catch(e){u&&!a&&u.exit(),c(e)}}f.reactions=[],f.notified=!1,d&&!f.rejection&&Gl(h,f)})}}function kl(e,t,n){var i,r;Wl?((i=Ul.createEvent("Event")).promise=t,i.reason=n,i.initEvent(e,!1,!0),y.dispatchEvent(i)):i={promise:t,reason:n},(r=y["on"+e])?r(i):e===Kl&&function(e,t){var n=y.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)}function Tl(t,n,i,r){return function(e){t(n,i,e,r)}}function Sl(e,t,n,i){t.done||(t.done=!0,i&&(t=i),t.value=n,t.state=2,wl(e,t,!0))}var El,Al,xl,Cl=ml||function(e){var t={fn:e,next:void 0};tl&&(tl.next=t),el||(el=t,nl()),tl=t},Pl={f:function(e){return new gl(e)}},Ll=ol.set,Il=De("species"),Ml="Promise",Ol=ce.get,jl=ce.set,Nl=ce.getterFor(Ml),_l=y[Ml],Rl=y.TypeError,Ul=y.document,Fl=y.process,ql=y.fetch,Dl=Fl&&Fl.versions,Hl=Dl&&Dl.v8||"",Vl=Pl.f,Bl=Vl,zl="process"==d(Fl),Wl=!!(Ul&&Ul.createEvent&&y.dispatchEvent),Kl="unhandledrejection",$l=Le(Ml,function(){function t(){}var e=_l.resolve(1),n=(e.constructor={})[Il]=function(e){e(t,t)};return!((zl||"function"==typeof PromiseRejectionEvent)&&e.then(t)instanceof n&&0!==Hl.indexOf("6.6")&&-1===sl.indexOf("Chrome/66"))}),Yl=$l||!bo(function(e){_l.all(e).catch(function(){})}),Gl=function(n,i){Ll.call(y,function(){var e,t=i.value;if(Ql(i)&&(e=yl(function(){zl?Fl.emit("unhandledRejection",t,n):kl(Kl,n,t)}),i.rejection=zl||Ql(i)?2:1,e.error))throw e.value})},Ql=function(e){return 1!==e.rejection&&!e.parent},Xl=function(e,t){Ll.call(y,function(){zl?Fl.emit("rejectionHandled",e):kl("rejectionhandled",e,t.value)})},Jl=function(n,i,e,t){if(!i.done){i.done=!0,t&&(i=t);try{if(n===e)throw Rl("Promise can't be resolved itself");var r=bl(e);r?Cl(function(){var t={done:!1};try{r.call(e,Tl(Jl,n,t,i),Tl(Sl,n,t,i))}catch(e){Sl(n,t,e,i)}}):(i.value=e,i.state=1,wl(n,i,!1))}catch(e){Sl(n,{done:!1},e,i)}}};$l&&(_l=function(e){Ui(this,_l,Ml),Be(e),El.call(this);var t=Ol(this);try{e(Tl(Jl,this,t),Tl(Sl,this,t))}catch(e){Sl(this,t,e)}},(El=function(){jl(this,{type:Ml,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Wi(_l.prototype,{then:function(e,t){var n=Nl(this),i=Vl(vi(this,_l));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=zl?Fl.domain:void 0,n.parent=!0,n.reactions.push(i),0!=n.state&&wl(this,n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),Al=function(){var e=new El,t=Ol(e);this.promise=e,this.resolve=Tl(Jl,e,t),this.reject=Tl(Sl,e,t)},Pl.f=Vl=function(e){return e===_l||e===xl?new Al:Bl(e)},"function"==typeof ql&&oe({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return vl(_l,ql.apply(y,arguments))}})),oe({global:!0,wrap:!0,forced:$l},{Promise:_l}),Ve(_l,Ml,!1),Ns(Ml),xl=he[Ml],oe({target:Ml,stat:!0,forced:$l},{reject:function(e){var t=Vl(this);return t.reject.call(void 0,e),t.promise}}),oe({target:Ml,stat:!0,forced:$l},{resolve:function(e){return vl(this,e)}}),oe({target:Ml,stat:!0,forced:Yl},{all:function(e){var s=this,t=Vl(s),l=t.resolve,c=t.reject,n=yl(function(){var i=Be(s.resolve),r=[],a=0,o=1;Jo(e,function(e){var t=a++,n=!1;r.push(void 0),o++,i.call(s,e).then(function(e){n||(n=!0,r[t]=e,--o||l(r))},c)}),--o||l(r)});return n.error&&c(n.value),t.promise},race:function(e){var n=this,i=Vl(n),r=i.reject,t=yl(function(){var t=Be(n.resolve);Jo(e,function(e){t.call(n,e).then(i.resolve,r)})});return t.error&&r(t.value),i.promise}});var Zl="".startsWith,ec=Math.min;oe({target:"String",proto:!0,forced:!Wo("startsWith")},{startsWith:function(e,t){var n=String(h(this));zo(e);var i=ee(ec(1<arguments.length?t:void 0,n.length)),r=String(e);return Zl?Zl.call(n,r,i):n.slice(i,i+r.length)===r}});function tc(e){return null!=e?e.constructor:null}function nc(e,t){return Boolean(e&&t&&e instanceof t)}function ic(e){return null==e}function rc(e){return tc(e)===Object}function ac(e){return tc(e)===String}function oc(e){return Array.isArray(e)}function sc(e){return nc(e,NodeList)}function lc(e){return ic(e)||(ac(e)||oc(e)||sc(e))&&!e.length||rc(e)&&!Object.keys(e).length}var cc,uc,hc,fc={nullOrUndefined:ic,object:rc,number:function(e){return tc(e)===Number&&!Number.isNaN(e)},string:ac,boolean:function(e){return tc(e)===Boolean},function:function(e){return tc(e)===Function},array:oc,weakMap:function(e){return nc(e,WeakMap)},nodeList:sc,element:function(e){return nc(e,Element)},textNode:function(e){return tc(e)===Text},event:function(e){return nc(e,Event)},keyboardEvent:function(e){return nc(e,KeyboardEvent)},cue:function(e){return nc(e,window.TextTrackCue)||nc(e,window.VTTCue)},track:function(e){return nc(e,TextTrack)||!ic(e)&&ac(e.kind)},promise:function(e){return nc(e,Promise)},url:function(e){if(nc(e,window.URL))return!0;if(!ac(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!lc(new URL(t).hostname)}catch(e){return!1}},empty:lc},dc=(cc=document.createElement("span"),uc={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},hc=Object.keys(uc).find(function(e){return void 0!==cc.style[e]}),!!fc.string(hc)&&uc[hc]);function pc(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}},t)}var mc={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},gc=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function vc(t,e,n){var i=this,r=3<arguments.length&&void 0!==arguments[3]&&arguments[3],a=!(4<arguments.length&&void 0!==arguments[4])||arguments[4],o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];if(t&&"addEventListener"in t&&!fc.empty(e)&&fc.function(n)){var s=e.split(" "),l=o;gc&&(l={passive:a,capture:o}),s.forEach(function(e){i&&i.eventListeners&&r&&i.eventListeners.push({element:t,type:e,callback:n,options:l}),t[r?"addEventListener":"removeEventListener"](e,n,l)})}}function yc(e){vc.call(this,e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",2<arguments.length?arguments[2]:void 0,!0,!(3<arguments.length&&void 0!==arguments[3])||arguments[3],4<arguments.length&&void 0!==arguments[4]&&arguments[4])}function bc(e){vc.call(this,e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",2<arguments.length?arguments[2]:void 0,!1,!(3<arguments.length&&void 0!==arguments[3])||arguments[3],4<arguments.length&&void 0!==arguments[4]&&arguments[4])}function wc(r){var a=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",s=2<arguments.length?arguments[2]:void 0,l=!(3<arguments.length&&void 0!==arguments[3])||arguments[3],c=4<arguments.length&&void 0!==arguments[4]&&arguments[4];vc.call(this,r,o,function e(){bc(r,o,e,l,c);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];s.apply(a,n)},!0,l,c)}function kc(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(fc.element(e)&&!fc.empty(t)){var r=new CustomEvent(t,{bubbles:n,detail:Object.assign({},i,{plyr:this})});e.dispatchEvent(r)}}function Tc(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function Sc(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,n=new Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;var r=n.shift();return fc.object(r)?(Object.keys(r).forEach(function(e){fc.object(r[e])?(Object.keys(t).includes(e)||Object.assign(t,to({},e,{})),Sc(t[e],r[e])):Object.assign(t,to({},e,r[e]))}),Sc.apply(void 0,[t].concat(n))):t}function Ec(e,a){var t=e.length?e:[e];Array.from(t).reverse().forEach(function(e,t){var n=0<t?a.cloneNode(!0):a,i=e.parentNode,r=e.nextSibling;n.appendChild(e),r?i.insertBefore(n,r):i.appendChild(n)})}function Ac(r,e){fc.element(r)&&!fc.empty(e)&&Object.entries(e).filter(function(e){var t=no(e,2)[1];return!fc.nullOrUndefined(t)}).forEach(function(e){var t=no(e,2),n=t[0],i=t[1];return r.setAttribute(n,i)})}function xc(e,t,n){var i=document.createElement(e);return fc.object(t)&&Ac(i,t),fc.string(n)&&(i.innerText=n),i}function Cc(e,t,n,i){fc.element(t)&&t.appendChild(xc(e,n,i))}function Pc(e){fc.nodeList(e)||fc.array(e)?Array.from(e).forEach(Pc):fc.element(e)&&fc.element(e.parentNode)&&e.parentNode.removeChild(e)}function Lc(e){if(fc.element(e))for(var t=e.childNodes.length;0<t;)e.removeChild(e.lastChild),--t}function Ic(e,t){return fc.element(t)&&fc.element(t.parentNode)&&fc.element(e)?(t.parentNode.replaceChild(e,t),e):null}function Mc(e,t){if(!fc.string(e)||fc.empty(e))return{};var o={},s=Sc({},t);return e.split(",").forEach(function(e){var t=e.trim(),n=t.replace(".",""),i=t.replace(/[[\]]/g,"").split("="),r=no(i,1)[0],a=1<i.length?i[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":fc.string(s.class)?o.class="".concat(s.class," ").concat(n):o.class=n;break;case"#":o.id=t.replace("#","");break;case"[":o[r]=a}}),Sc(s,o)}function Oc(e,t){if(fc.element(e)){var n=t;fc.boolean(n)||(n=!e.hidden),e.hidden=n}}function jc(e,t,n){if(fc.nodeList(e))return Array.from(e).map(function(e){return jc(e,t,n)});if(fc.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function Nc(e,t){return fc.element(e)&&e.classList.contains(t)}function _c(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function Rc(e){return this.elements.container.querySelectorAll(e)}function Uc(e){return this.elements.container.querySelector(e)}function Fc(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];fc.element(e)&&(e.focus({preventScroll:!0}),t&&jc(e,this.config.classNames.tabFocus))}var qc,Dc={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},Hc={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=mc.isIPhone&&n&&Hc.playsinline,r=Hc[e]||"html5"!==t;return{api:r,ui:r&&Hc.rangeInput&&("video"!==e||!mc.isIPhone||i)}},pip:!(mc.isIPhone||!fc.function(xc("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||xc("video").disablePictureInPicture)),airplay:fc.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(fc.empty(e))return!1;var t=no(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Dc).includes(n)&&(n+='; codecs="'.concat(Dc[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:((qc=document.createElement("input")).type="range")===qc.type,touch:"ontouchstart"in document.documentElement,transitions:!1!==dc,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function Vc(e){return(fc.array(e)||fc.string(e)&&e.includes(":"))&&(fc.array(e)?e:e.split(":")).map(Number).every(fc.number)}function Bc(e){if(!fc.array(e)||!e.every(fc.number))return null;var t=no(e,2),n=t[0],i=t[1],r=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/r,i/r]}function zc(e){function t(e){return Vc(e)?e.split(":").map(Number):null}var n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!fc.empty(this.embed)&&fc.array(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=Bc([i.videoWidth,i.videoHeight])}return n}function Wc(e){if(!this.isVideo)return{};var t=zc.call(this,e),n=no(fc.array(t)?t:[0,0],2),i=100/n[0]*n[1];if(this.elements.wrapper.style.paddingBottom="".concat(i,"%"),this.isVimeo&&this.supported.ui){var r=(240-i)/4.8;this.media.style.transform="translateY(-".concat(r,"%)")}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return{padding:i,ratio:t}}var Kc={getSources:function(){var n=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(e){var t=e.getAttribute("type");return!!fc.empty(t)||Hc.mime.call(n,t)}):[]},getQualityOptions:function(){return Kc.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var s=this;fc.empty(this.config.ratio)||Wc.call(s),Object.defineProperty(s.media,"quality",{get:function(){var e=Kc.getSources.call(s).find(function(e){return e.getAttribute("src")===s.source});return e&&Number(e.getAttribute("size"))},set:function(t){var e=Kc.getSources.call(s).find(function(e){return Number(e.getAttribute("size"))===t});if(e){var n=s.media,i=n.currentTime,r=n.paused,a=n.preload,o=n.readyState;s.media.src=e.getAttribute("src"),"none"===a&&!o||(s.once("loadedmetadata",function(){s.currentTime=i,r||s.play()}),s.media.load()),kc.call(s,s.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(Pc(Kc.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function $c(n){return fc.array(n)?n.filter(function(e,t){return n.indexOf(e)===t}):n}var Yc=_.f,Gc=ke.f,Qc=De("match"),Xc=y.RegExp,Jc=Xc.prototype,Zc=/a/g,eu=/a/g,tu=new Xc(Zc)!==Zc;if(b&&Le("RegExp",!tu||g(function(){return eu[Qc]=!1,Xc(Zc)!=Zc||Xc(eu)==eu||"/a/i"!=Xc(Zc,"i")}))){for(var nu=function(e,t){var n=this instanceof nu,i=gi(e),r=void 0===t;return!n&&i&&e.constructor===nu&&r?e:So(tu?new Xc(i&&!r?e.source:e,t):Xc((i=e instanceof nu)?e.source:e,i&&r?Un.call(e):t),n?this:Jc,nu)},iu=function(t){t in nu||Yc(nu,t,{configurable:!0,get:function(){return Xc[t]},set:function(e){Xc[t]=e}})},ru=Gc(Xc),au=0;ru.length>au;)iu(ru[au++]);(Jc.constructor=nu).prototype=Jc,ue(y,"RegExp",nu)}function ou(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return fc.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return n[t].toString()})}function su(e,t,n){var i=1<arguments.length&&void 0!==t?t:"",r=2<arguments.length&&void 0!==n?n:"";return(0<arguments.length&&void 0!==e?e:"").replace(new RegExp(i.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),r.toString())}function lu(e){return(0<arguments.length&&void 0!==e?e:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function cu(e){var t=(0<arguments.length&&void 0!==e?e:"").toString();return(t=function(e){var t=(0<arguments.length&&void 0!==e?e:"").toString();return t=su(t,"-"," "),t=su(t,"_"," "),su(t=lu(t)," ","")}(t)).charAt(0).toLowerCase()+t.slice(1)}function uu(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}Ns("RegExp");var hu={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},fu=function(e,t){var n=0<arguments.length&&void 0!==e?e:"",i=1<arguments.length&&void 0!==t?t:{};if(fc.empty(n)||fc.empty(i))return"";var r=Tc(i.i18n,n);if(fc.empty(r))return Object.keys(hu).includes(n)?hu[n]:"";var a={"{seektime}":i.seekTime,"{title}":i.title};return Object.entries(a).forEach(function(e){var t=no(e,2),n=t[0],i=t[1];r=su(r,n,i)}),r},du=function(){function i(e){Ja(this,i),this.enabled=e.config.storage.enabled,this.key=e.config.storage.key}return eo(i,[{key:"get",value:function(e){if(!i.supported||!this.enabled)return null;var t=window.localStorage.getItem(this.key);if(fc.empty(t))return null;var n=JSON.parse(t);return fc.string(e)&&e.length?n[e]:n}},{key:"set",value:function(e){if(i.supported&&this.enabled&&fc.object(e)){var t=this.get();fc.empty(t)&&(t={}),Sc(t,e),window.localStorage.setItem(this.key,JSON.stringify(t))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;var e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}}]),i}();function pu(e,t){var r=1<arguments.length&&void 0!==t?t:"text";return new Promise(function(t,n){try{var i=new XMLHttpRequest;if(!("withCredentials"in i))return;i.addEventListener("load",function(){if("text"===r)try{t(JSON.parse(i.responseText))}catch(e){t(i.responseText)}else t(i.response)}),i.addEventListener("error",function(){throw new Error(i.status)}),i.open("GET",e,!0),i.responseType=r,i.send()}catch(e){n(e)}})}function mu(e,t){if(fc.string(e)){var n=fc.string(t),i=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var a=du.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),n&&o.setAttribute("id",t),a){var s=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==s){var l=JSON.parse(s);r(o,l.content)}}pu(e).then(function(e){fc.empty(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),r(o,e))}).catch(function(){})}}}var gu=Math.ceil,vu=Math.floor;oe({target:"Math",stat:!0},{trunc:function(e){return(0<e?vu:gu)(e)}});var yu=function(e){return Math.trunc(e/60/60%60,10)},bu=function(e){return Math.trunc(e/60%60,10)},wu=function(e){return Math.trunc(e%60,10)};function ku(e,t,n){var i=0<arguments.length&&void 0!==e?e:0,r=1<arguments.length&&void 0!==t&&t,a=2<arguments.length&&void 0!==n&&n;if(!fc.number(i))return ku(null,r,a);function o(e){return"0".concat(e).slice(-2)}var s=yu(i),l=bu(i),c=wu(i);return s=r||0<s?"".concat(s,":"):"","".concat(a&&0<i?"-":"").concat(s).concat(o(l),":").concat(o(c))}var Tu={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||mc.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Uc.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:Rc.call(this,this.config.selectors.buttons.play),pause:Uc.call(this,this.config.selectors.buttons.pause),restart:Uc.call(this,this.config.selectors.buttons.restart),rewind:Uc.call(this,this.config.selectors.buttons.rewind),fastForward:Uc.call(this,this.config.selectors.buttons.fastForward),mute:Uc.call(this,this.config.selectors.buttons.mute),pip:Uc.call(this,this.config.selectors.buttons.pip),airplay:Uc.call(this,this.config.selectors.buttons.airplay),settings:Uc.call(this,this.config.selectors.buttons.settings),captions:Uc.call(this,this.config.selectors.buttons.captions),fullscreen:Uc.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Uc.call(this,this.config.selectors.progress),this.elements.inputs={seek:Uc.call(this,this.config.selectors.inputs.seek),volume:Uc.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Uc.call(this,this.config.selectors.display.buffer),currentTime:Uc.call(this,this.config.selectors.display.currentTime),duration:Uc.call(this,this.config.selectors.display.duration)},fc.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n="http://www.w3.org/2000/svg",i=Tu.getIconUrl.call(this),r="".concat(i.cors?"":i.url,"#").concat(this.config.iconPrefix),a=document.createElementNS(n,"svg");Ac(a,Sc(t,{role:"presentation",focusable:"false"}));var o=document.createElementNS(n,"use"),s="".concat(r,"-").concat(e);return"href"in o&&o.setAttributeNS("http://www.w3.org/1999/xlink","href",s),o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s),a.appendChild(o),a},createLabel:function(e,t){var n=1<arguments.length&&void 0!==t?t:{},i=fu(e,this.config);return xc("span",Object.assign({},n,{class:[n.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),i)},createBadge:function(e){if(fc.empty(e))return null;var t=xc("span",{class:this.config.classNames.menu.value});return t.appendChild(xc("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=Sc({},t),r=cu(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(a[e]=i[e],delete i[e])}),"button"!==a.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some(function(e){return e===n.config.classNames.control})||Sc(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),r="play",a.label="play",a.icon="play";break;default:fc.empty(a.label)&&(a.label=r),fc.empty(a.icon)&&(a.icon=e)}var o=xc(a.element);return a.toggle?(o.appendChild(Tu.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),o.appendChild(Tu.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),o.appendChild(Tu.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),o.appendChild(Tu.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(o.appendChild(Tu.createIcon.call(this,a.icon)),o.appendChild(Tu.createLabel.call(this,a.label))),Sc(i,Mc(this.config.selectors.buttons[r],i)),Ac(o,i),"play"===r?(fc.array(this.elements.buttons[r])||(this.elements.buttons[r]=[]),this.elements.buttons[r].push(o)):this.elements.buttons[r]=o,o},createRange:function(e,t){var n=xc("input",Sc(Mc(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":fu(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Tu.updateRangeFill.call(this,n),Vs.setup(n),n},createProgress:function(e,t){var n=xc("progress",Sc(Mc(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(xc("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],r=i?fu(i,this.config):"";n.innerText="% ".concat(r.toLowerCase())}return this.elements.display[e]=n},createTime:function(e,t){var n=Mc(this.config.selectors.display[e],t),i=xc("div",Sc(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":fu(e,this.config)}),"00:00");return this.elements.display[e]=i},bindMenuItemShortcuts:function(i,r){var a=this;yc(i,"keydown keyup",function(e){if([32,38,39,40].includes(e.which)&&(e.preventDefault(),e.stopPropagation(),"keydown"!==e.type)){var t,n=_c(i,'[role="menuitemradio"]');if(!n&&[32,39].includes(e.which))Tu.showMenuPanel.call(a,r,!0);else 32!==e.which&&(40===e.which||n&&39===e.which?(t=i.nextElementSibling,fc.element(t)||(t=i.parentNode.firstElementChild)):(t=i.previousElementSibling,fc.element(t)||(t=i.parentNode.lastElementChild)),Fc.call(a,t,!0))}},!1),yc(i,"keyup",function(e){13===e.which&&Tu.focusFirstMenuItem.call(a,null,!0)})},createMenuItem:function(e){var t=this,n=e.value,i=e.list,r=e.type,a=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=Mc(this.config.selectors.inputs[r]),h=xc("button",Sc(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),f=xc("span");f.innerHTML=a,fc.element(s)&&f.appendChild(s),h.appendChild(f),Object.defineProperty(h,"checked",{enumerable:!0,get:function(){return"true"===h.getAttribute("aria-checked")},set:function(e){e&&Array.from(h.parentNode.children).filter(function(e){return _c(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),h.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(h,"click keyup",function(e){if(!fc.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),h.checked=!0,r){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}Tu.showMenuPanel.call(t,"home",fc.keyboardEvent(e))}},r,!1),Tu.bindMenuItemShortcuts.call(this,h,r),i.appendChild(h)},formatTime:function(e,t){var n=0<arguments.length&&void 0!==e?e:0,i=1<arguments.length&&void 0!==t&&t;return fc.number(n)?ku(n,0<yu(this.duration),i):n},updateTimeDisplay:function(e,t,n){var i=0<arguments.length&&void 0!==e?e:null,r=1<arguments.length&&void 0!==t?t:0,a=2<arguments.length&&void 0!==n&&n;fc.element(i)&&fc.number(r)&&(i.innerText=Tu.formatTime(r,a))},updateVolume:function(){this.supported.ui&&(fc.element(this.elements.inputs.volume)&&Tu.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),fc.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e,t){var n=1<arguments.length&&void 0!==t?t:0;fc.element(e)&&(e.value=n,Tu.updateRangeFill.call(this,e))},updateProgress:function(e){var a=this;if(this.supported.ui&&fc.event(e)){var t,n,i=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":t=this.currentTime,n=this.duration,i=0===t||0===n||Number.isNaN(t)||Number.isNaN(n)?0:(t/n*100).toFixed(2),"timeupdate"===e.type&&Tu.setRange.call(this,this.elements.inputs.seek,i);break;case"playing":case"progress":!function(e,t){var n=fc.number(t)?t:0,i=fc.element(e)?e:a.elements.display.buffer;if(fc.element(i)){i.value=n;var r=i.getElementsByTagName("span")[0];fc.element(r)&&(r.childNodes[0].nodeValue=n)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=fc.event(e)?e.target:e;if(fc.element(t)&&"range"===t.getAttribute("type")){if(_c(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=Tu.formatTime(this.currentTime),i=Tu.formatTime(this.duration),r=fu("seekLabel",this.config);t.setAttribute("aria-valuetext",r.replace("{currentTime}",n).replace("{duration}",i))}else if(_c(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);mc.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&fc.element(this.elements.inputs.seek)&&fc.element(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return jc(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var r=0,a=this.elements.progress.getBoundingClientRect();if(fc.event(e))r=100/a.width*(e.pageX-a.left);else{if(!Nc(this.elements.display.seekTooltip,n))return;r=parseFloat(this.elements.display.seekTooltip.style.left,10)}r<0?r=0:100<r&&(r=100),Tu.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*r),this.elements.display.seekTooltip.style.left="".concat(r,"%"),fc.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!fc.element(this.elements.display.duration)&&this.config.invertTime;Tu.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Tu.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return Oc(this.elements.display.currentTime,!0),void Oc(this.elements.progress,!0);fc.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=fc.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Tu.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Tu.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),Tu.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){Oc(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],r=null,a=t;if("captions"===e)r=this.currentTrack;else{if(r=fc.empty(n)?this[e]:n,fc.empty(r)&&(r=this.config[e].default),!fc.empty(this.options[e])&&!this.options[e].includes(r))return void this.debug.warn("Unsupported value of '".concat(r,"' for ").concat(e));if(!this.config[e].options.includes(r))return void this.debug.warn("Disabled value of '".concat(r,"' for ").concat(e))}if(fc.element(a)||(a=i&&i.querySelector('[role="menu"]')),fc.element(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=Tu.getLabel.call(this,e,r);var o=a&&a.querySelector('[value="'.concat(r,'"]'));fc.element(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?fu("normal",this.config):"".concat(t,"&times;");case"quality":if(fc.number(t)){var n=fu("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return lu(t);case"captions":return Au.getLabel.call(this);default:return null}},setQualityMenu:function(e){var i=this;if(fc.element(this.elements.settings.panels.quality)){var n="quality",r=this.elements.settings.panels.quality.querySelector('[role="menu"]');fc.array(e)&&(this.options.quality=$c(e).filter(function(e){return i.config.quality.options.includes(e)}));var t=!fc.empty(this.options.quality)&&1<this.options.quality.length;if(Tu.toggleMenuButton.call(this,n,t),Lc(r),Tu.checkMenu.call(this),t){this.options.quality.sort(function(e,t){var n=i.config.quality.options;return n.indexOf(e)>n.indexOf(t)?1:-1}).forEach(function(e){var t;Tu.createMenuItem.call(i,{value:e,list:r,type:n,title:Tu.getLabel.call(i,"quality",e),badge:(t=fu("qualityBadge.".concat(e),i.config)).length?Tu.createBadge.call(i,t):null})}),Tu.updateSetting.call(this,n,r)}}},setCaptionsMenu:function(){var n=this;if(fc.element(this.elements.settings.panels.captions)){var e="captions",i=this.elements.settings.panels.captions.querySelector('[role="menu"]'),t=Au.getTracks.call(this),r=Boolean(t.length);if(Tu.toggleMenuButton.call(this,e,r),Lc(i),Tu.checkMenu.call(this),r){var a=t.map(function(e,t){return{value:t,checked:n.captions.toggled&&n.currentTrack===t,title:Au.getLabel.call(n,e),badge:e.language&&Tu.createBadge.call(n,e.language.toUpperCase()),list:i,type:"language"}});a.unshift({value:-1,checked:!this.captions.toggled,title:fu("disabled",this.config),list:i,type:"language"}),a.forEach(Tu.createMenuItem.bind(this)),Tu.updateSetting.call(this,e,i)}}},setSpeedMenu:function(e){var t=this;if(fc.element(this.elements.settings.panels.speed)){var n="speed",i=this.elements.settings.panels.speed.querySelector('[role="menu"]');fc.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var r=!fc.empty(this.options.speed)&&1<this.options.speed.length;Tu.toggleMenuButton.call(this,n,r),Lc(i),Tu.checkMenu.call(this),r&&(this.options.speed.forEach(function(e){Tu.createMenuItem.call(t,{value:e,list:i,type:n,title:Tu.getLabel.call(t,"speed",e)})}),Tu.updateSetting.call(this,n,i))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!fc.empty(e)&&Object.values(e).some(function(e){return!e.hidden});Oc(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e,t){var n=1<arguments.length&&void 0!==t&&t;if(!this.elements.settings.popup.hidden){var i=e;fc.element(i)||(i=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden}));var r=i.querySelector('[role^="menuitem"]');Fc.call(this,r,n)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(fc.element(t)&&fc.element(n)){var i=t.hidden,r=i;if(fc.boolean(e))r=e;else if(fc.keyboardEvent(e)&&27===e.which)r=!1;else if(fc.event(e)){var a=fc.function(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(a);if(o||!o&&e.target!==n&&r)return}n.setAttribute("aria-expanded",r),Oc(t,!r),jc(this.elements.container,this.config.classNames.menu.open,r),r&&fc.keyboardEvent(e)?Tu.focusFirstMenuItem.call(this,null,!0):r||i||Fc.call(this,n,fc.keyboardEvent(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return Pc(t),{width:n,height:i}},showMenuPanel:function(e,t){var n=this,i=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t&&t,a=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(i));if(fc.element(a)){var o=a.parentNode,s=Array.from(o.children).find(function(e){return!e.hidden});if(Hc.transitions&&!Hc.reducedMotion){o.style.width="".concat(s.scrollWidth,"px"),o.style.height="".concat(s.scrollHeight,"px");var l=Tu.getMenuSize.call(this,a);yc.call(this,o,dc,function e(t){t.target===o&&["width","height"].includes(t.propertyName)&&(o.style.width="",o.style.height="",bc.call(n,o,dc,e))}),o.style.width="".concat(l.width,"px"),o.style.height="".concat(l.height,"px")}Oc(s,!0),Oc(a,!1),Tu.focusFirstMenuItem.call(this,a,r)}},setDownloadUrl:function(){var e=this.elements.buttons.download;fc.element(e)&&e.setAttribute("href",this.download)},create:function(d){var p=this,m=Tu.bindMenuItemShortcuts,g=Tu.createButton,v=Tu.createProgress,y=Tu.createRange,b=Tu.createTime,e=Tu.setQualityMenu,t=Tu.setSpeedMenu,w=Tu.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(g.call(this,"play-large"));var k=xc("div",Mc(this.config.selectors.controls.wrapper));this.elements.controls=k;var T={class:"plyr__controls__item"};return $c(this.config.controls).forEach(function(e){if("restart"===e&&k.appendChild(g.call(p,"restart",T)),"rewind"===e&&k.appendChild(g.call(p,"rewind",T)),"play"===e&&k.appendChild(g.call(p,"play",T)),"fast-forward"===e&&k.appendChild(g.call(p,"fast-forward",T)),"progress"===e){var t=xc("div",{class:"".concat(T.class," plyr__progress__container")}),n=xc("div",Mc(p.config.selectors.progress));if(n.appendChild(y.call(p,"seek",{id:"plyr-seek-".concat(d.id)})),n.appendChild(v.call(p,"buffer")),p.config.tooltips.seek){var i=xc("span",{class:p.config.classNames.tooltip},"00:00");n.appendChild(i),p.elements.display.seekTooltip=i}p.elements.progress=n,t.appendChild(p.elements.progress),k.appendChild(t)}if("current-time"===e&&k.appendChild(b.call(p,"currentTime",T)),"duration"===e&&k.appendChild(b.call(p,"duration",T)),"mute"===e||"volume"===e){var r=p.elements.volume;if(fc.element(r)&&k.contains(r)||(r=xc("div",Sc({},T,{class:"".concat(T.class," plyr__volume").trim()})),p.elements.volume=r,k.appendChild(r)),"mute"===e&&r.appendChild(g.call(p,"mute")),"volume"===e){var a={max:1,step:.05,value:p.config.volume};r.appendChild(y.call(p,"volume",Sc(a,{id:"plyr-volume-".concat(d.id)})))}}if("captions"===e&&k.appendChild(g.call(p,"captions",T)),"settings"===e&&!fc.empty(p.config.settings)){var o=xc("div",Sc({},T,{class:"".concat(T.class," plyr__menu").trim(),hidden:""}));o.appendChild(g.call(p,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(d.id),"aria-expanded":!1}));var s=xc("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(d.id),hidden:""}),l=xc("div"),c=xc("div",{id:"plyr-settings-".concat(d.id,"-home")}),u=xc("div",{role:"menu"});c.appendChild(u),l.appendChild(c),p.elements.settings.panels.home=c,p.config.settings.forEach(function(e){var t=xc("button",Sc(Mc(p.config.selectors.buttons.settings),{type:"button",class:"".concat(p.config.classNames.control," ").concat(p.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));m.call(p,t,e),yc(t,"click",function(){w.call(p,e,!1)});var n=xc("span",null,fu(e,p.config)),i=xc("span",{class:p.config.classNames.menu.value});i.innerHTML=d[e],n.appendChild(i),t.appendChild(n),u.appendChild(t);var r=xc("div",{id:"plyr-settings-".concat(d.id,"-").concat(e),hidden:""}),a=xc("button",{type:"button",class:"".concat(p.config.classNames.control," ").concat(p.config.classNames.control,"--back")});a.appendChild(xc("span",{"aria-hidden":!0},fu(e,p.config))),a.appendChild(xc("span",{class:p.config.classNames.hidden},fu("menuBack",p.config))),yc(r,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),w.call(p,"home",!0))},!1),yc(a,"click",function(){w.call(p,"home",!1)}),r.appendChild(a),r.appendChild(xc("div",{role:"menu"})),l.appendChild(r),p.elements.settings.buttons[e]=t,p.elements.settings.panels[e]=r}),s.appendChild(l),o.appendChild(s),k.appendChild(o),p.elements.settings.popup=s,p.elements.settings.menu=o}if("pip"===e&&Hc.pip&&k.appendChild(g.call(p,"pip",T)),"airplay"===e&&Hc.airplay&&k.appendChild(g.call(p,"airplay",T)),"download"===e){var h=Sc({},T,{element:"a",href:p.download,target:"_blank"}),f=p.config.urls.download;!fc.url(f)&&p.isEmbed&&Sc(h,{icon:"logo-".concat(p.provider),label:p.provider}),k.appendChild(g.call(p,"download",h))}"fullscreen"===e&&k.appendChild(g.call(p,"fullscreen",T))}),this.isHTML5&&e.call(this,Kc.getQualityOptions.call(this)),t.call(this),k},inject:function(){var i=this;if(this.config.loadSprite){var e=Tu.getIconUrl.call(this);e.cors&&mu(e.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var t=null;this.elements.controls=null;var n={id:this.id,seektime:this.config.seekTime,title:this.config.title},r=!0;fc.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,n)),this.config.controls||(this.config.controls=[]),fc.element(this.config.controls)||fc.string(this.config.controls)?t=this.config.controls:(t=Tu.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Au.getLabel.call(this)}),r=!1);function a(e){var r=e;return Object.entries(n).forEach(function(e){var t=no(e,2),n=t[0],i=t[1];r=su(r,"{".concat(n,"}"),i)}),r}var o;if(r&&(fc.string(this.config.controls)?t=a(t):fc.element(t)&&(t.innerHTML=a(t.innerHTML))),fc.string(this.config.selectors.controls.container)&&(o=document.querySelector(this.config.selectors.controls.container)),fc.element(o)||(o=this.elements.container),o[fc.element(t)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",t),fc.element(this.elements.controls)||Tu.findElements.call(this),!fc.empty(this.elements.buttons)){var s=function(t){var n=i.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return Nc(t,n)},set:function(e){jc(t,n,0<arguments.length&&void 0!==e&&e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){fc.array(e)||fc.nodeList(e)?Array.from(e).filter(Boolean).forEach(s):s(e)})}if(mc.isEdge&&pc(o),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,h="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),f=Rc.call(this,h);Array.from(f).forEach(function(e){jc(e,i.config.classNames.hidden,!1),jc(e,i.config.classNames.tooltip,!0)})}}};function Su(e,t){var n=e;if(!(1<arguments.length&&void 0!==t)||t){var i=document.createElement("a");i.href=n,n=i.href}try{return new URL(n)}catch(e){return null}}function Eu(e){var r=new URLSearchParams;return fc.object(e)&&Object.entries(e).forEach(function(e){var t=no(e,2),n=t[0],i=t[1];r.set(n,i)}),r}var Au={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!Hc.textTracks)fc.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Tu.setCaptionsMenu.call(this);else{var e,t;if(fc.element(this.elements.captions)||(this.elements.captions=xc("div",Mc(this.config.selectors.captions)),e=this.elements.captions,t=this.elements.wrapper,fc.element(e)&&fc.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)),mc.isIE&&window.URL){var n=this.media.querySelectorAll("track");Array.from(n).forEach(function(t){var e=t.getAttribute("src"),n=Su(e);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&pu(e,"blob").then(function(e){t.setAttribute("src",window.URL.createObjectURL(e))}).catch(function(){Pc(t)})})}var i=$c((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),r=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===r)r=no(i,1)[0];var a=this.storage.get("captions");if(fc.boolean(a)||(a=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:a,language:r,languages:i}),this.isHTML5){var o=this.config.captions.update?"addtrack removetrack":"removetrack";yc.call(this,this.media.textTracks,o,Au.update.bind(this))}setTimeout(Au.update.bind(this),0)}},update:function(){var t=this,e=Au.getTracks.call(this,!0),n=this.captions,i=n.active,r=n.language,a=n.meta,o=n.currentTrackNode,s=Boolean(e.find(function(e){return e.language===r}));this.isHTML5&&this.isVideo&&e.filter(function(e){return!a.get(e)}).forEach(function(e){t.debug.log("Track added",e),a.set(e,{default:"showing"===e.mode}),e.mode="hidden",yc.call(t,e,"cuechange",function(){return Au.updateCues.call(t)})}),(s&&this.language!==r||!e.includes(o))&&(Au.setLanguage.call(this,r),Au.toggle.call(this,i&&s)),jc(this.elements.container,this.config.classNames.captions.enabled,!fc.empty(e)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Tu.setCaptionsMenu.call(this)},toggle:function(e,t){var n=!(1<arguments.length&&void 0!==t)||t;if(this.supported.ui){var i=this.captions.toggled,r=this.config.classNames.captions.active,a=fc.nullOrUndefined(e)?!i:e;if(a!==i){if(n||(this.captions.active=a,this.storage.set({captions:a})),!this.language&&a&&!n){var o=Au.getTracks.call(this),s=Au.findTrack.call(this,[this.captions.language].concat(io(this.captions.languages)),!0);return this.captions.language=s.language,void Au.set.call(this,o.indexOf(s))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=a),jc(this.elements.container,r,a),this.captions.toggled=a,Tu.updateSetting.call(this,"captions"),kc.call(this,this.media,a?"captionsenabled":"captionsdisabled")}}},set:function(e,t){var n=!(1<arguments.length&&void 0!==t)||t,i=Au.getTracks.call(this);if(-1!==e)if(fc.number(e))if(e in i){if(this.captions.currentTrack!==e){var r=i[this.captions.currentTrack=e],a=(r||{}).language;this.captions.currentTrackNode=r,Tu.updateSetting.call(this,"captions"),n||(this.captions.language=a,this.storage.set({language:a})),this.isVimeo&&this.embed.enableTextTrack(a),kc.call(this,this.media,"languagechange")}Au.toggle.call(this,!0,n),this.isHTML5&&this.isVideo&&Au.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Au.toggle.call(this,!1,n)},setLanguage:function(e,t){var n=!(1<arguments.length&&void 0!==t)||t;if(fc.string(e)){var i=e.toLowerCase();this.captions.language=i;var r=Au.getTracks.call(this),a=Au.findTrack.call(this,[i]);Au.set.call(this,r.indexOf(a),n)}else this.debug.warn("Invalid language argument",e)},getTracks:function(e){var t=this,n=0<arguments.length&&void 0!==e&&e;return Array.from((this.media||{}).textTracks||[]).filter(function(e){return!t.isHTML5||n||t.captions.meta.has(e)}).filter(function(e){return["captions","subtitles"].includes(e.kind)})},findTrack:function(e,t){function n(e){return Number((r.captions.meta.get(e)||{}).default)}var i,r=this,a=1<arguments.length&&void 0!==t&&t,o=Au.getTracks.call(this),s=Array.from(o).sort(function(e,t){return n(t)-n(e)});return e.every(function(t){return!(i=s.find(function(e){return e.language===t}))}),i||(a?s[0]:void 0)},getCurrentTrack:function(){return Au.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!fc.track(t)&&Hc.textTracks&&this.captions.toggled&&(t=Au.getCurrentTrack.call(this)),fc.track(t)?fc.empty(t.label)?fc.empty(t.language)?fu("enabled",this.config):e.language.toUpperCase():t.label:fu("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(fc.element(this.elements.captions))if(fc.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var n=Au.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(uu)}var i=t.map(function(e){return e.trim()}).join("\n");if(i!==this.elements.captions.innerHTML){Lc(this.elements.captions);var r=xc("span",Mc(this.config.selectors.caption));r.innerHTML=i,this.elements.captions.appendChild(r),kc.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},xu={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Cu="picture-in-picture",Pu="inline",Lu={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Iu="audio",Mu="video";function Ou(){}var ju=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];Ja(this,t),this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled")}return eo(t,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):Ou}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):Ou}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):Ou}}]),t}();function Nu(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;fc.element(e)&&(e.pressed=this.active),kc.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),mc.isIos||function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(fc.element(e)){var n=Rc.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],r=n[n.length-1];vc.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==r||e.shiftKey?t===i&&e.shiftKey&&(r.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}},t,!1)}}.call(this.player,this.target,this.active)}}function _u(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",jc(this.target,this.player.config.classNames.fullscreen.fallback,e),mc.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=fc.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==n}).join(","))}Nu.call(this)}var Ru=function(){function n(e){var t=this;Ja(this,n),this.player=e,this.prefix=n.prefix,this.property=n.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===e.config.fullscreen.fallback,yc.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){Nu.call(t)}),yc.call(this.player,this.player.elements.container,"dblclick",function(e){fc.element(t.player.elements.controls)&&t.player.elements.controls.contains(e.target)||t.toggle()}),this.update()}return eo(n,[{key:"update",value:function(){var e;this.enabled?(e=this.forceFallback?"Fallback (forced)":n.native?"Native":"Fallback",this.player.debug.log("".concat(e," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");jc(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(mc.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!n.native||this.forceFallback?_u.call(this,!0):this.prefix?fc.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen())}},{key:"exit",value:function(){if(this.enabled)if(mc.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!n.native||this.forceFallback)_u.call(this,!1);else if(this.prefix){if(!fc.empty(this.prefix)){var e="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(e).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return n.native&&!this.forceFallback}},{key:"enabled",get:function(){return(n.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!n.native||this.forceFallback?Nc(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return mc.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(fc.function(document.exitFullscreen))return"";var t="";return["webkit","moz","ms"].some(function(e){return!(!fc.function(document["".concat(e,"ExitFullscreen")])&&!fc.function(document["".concat(e,"CancelFullScreen")]))&&(t=e,!0)}),t}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),n}(),Uu=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};function Fu(r,e){var a=1<arguments.length&&void 0!==e?e:1;return new Promise(function(e,t){function n(){delete i.onload,delete i.onerror,(i.naturalWidth>=a?e:t)(i)}var i=new Image;Object.assign(i,{onload:n,onerror:n,src:r})})}oe({target:"Math",stat:!0},{sign:Uu});var qu={addStyleHook:function(){jc(this.elements.container,this.config.selectors.container.replace(".",""),!0),jc(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(e){0<arguments.length&&void 0!==e&&e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void qu.toggleNativeControls.call(this,!0);fc.element(this.elements.controls)||(Tu.inject.call(this),this.listeners.controls()),qu.toggleNativeControls.call(this),this.isHTML5&&Au.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Tu.updateVolume.call(this),Tu.timeUpdate.call(this),qu.checkPlaying.call(this),jc(this.elements.container,this.config.classNames.pip.supported,Hc.pip&&this.isHTML5&&this.isVideo),jc(this.elements.container,this.config.classNames.airplay.supported,Hc.airplay&&this.isHTML5),jc(this.elements.container,this.config.classNames.isIos,mc.isIos),jc(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){kc.call(e,e.media,"ready")},0),qu.setTitle.call(this),this.poster&&qu.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&Tu.durationUpdate.call(this)},setTitle:function(){var t=fu("play",this.config);if(fc.string(this.config.title)&&!fc.empty(this.config.title)&&(t+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(e){e.setAttribute("aria-label",t)}),this.isEmbed){var e=Uc.call(this,"iframe");if(!fc.element(e))return;var n=fc.empty(this.config.title)?"video":this.config.title,i=fu("frameTitle",this.config);e.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){jc(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(t,e){var n=this;return 1<arguments.length&&void 0!==e&&!e||!this.poster?(this.media.setAttribute("poster",t),function(){var t=this;return new Promise(function(e){return t.ready?setTimeout(e,0):yc.call(t,t.elements.container,"ready",e)}).then(function(){})}.call(this).then(function(){return Fu(t)}).catch(function(e){throw t===n.poster&&qu.togglePoster.call(n,!1),e}).then(function(){if(t!==n.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(n.elements.poster.style,{backgroundImage:"url('".concat(t,"')"),backgroundSize:""}),qu.togglePoster.call(n,!0),t})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;jc(this.elements.container,this.config.classNames.playing,this.playing),jc(this.elements.container,this.config.classNames.paused,this.paused),jc(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing})}),fc.event(e)&&"timeupdate"===e.type||qu.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){jc(t.elements.container,t.config.classNames.loading,t.loading),qu.toggleControls.call(t)},this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},Du=function(){function t(e){Ja(this,t),this.player=e,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return eo(t,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,r="keydown"===e.type,a=r&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&fc.number(i)){if(r){var o=document.activeElement;if(fc.element(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&_c(o,s))return;if(32===e.which&&_c(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){Tu.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,jc(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,r=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||r)i=t.config.classNames.tabFocus,jc(Rc.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;n.container.contains(e)&&jc(document.activeElement,t.config.classNames.tabFocus,!0)},10)}}},{key:"global",value:function(e){var t=!(0<arguments.length&&void 0!==e)||e,n=this.player;n.config.keyboard.global&&vc.call(n,window,"keydown keyup",this.handleKey,t,!1),vc.call(n,document.body,"click",this.toggleMenu,t),wc.call(n,document.body,"touchstart",this.firstTouch),vc.call(n,document.body,"keydown focus blur",this.setTabFocus,t,!1,!0)}},{key:"container",value:function(){var s=this.player,e=s.config,o=s.elements,i=s.timers;!e.keyboard.global&&e.keyboard.focused&&yc.call(s,o.container,"keydown keyup",this.handleKey,!1),yc.call(s,o.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(e){var t=o.controls;t&&"enterfullscreen"===e.type&&(t.pressed=!1,t.hover=!1);var n=0;["touchstart","touchmove","mousemove"].includes(e.type)&&(qu.toggleControls.call(s,!0),n=s.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout(function(){return qu.toggleControls.call(s,!1)},n)});function l(e){if(!e)return Wc.call(s);var t=o.container.getBoundingClientRect(),n=t.width,i=t.height;return Wc.call(s,"".concat(n,":").concat(i))}function c(){clearTimeout(i.resized),i.resized=setTimeout(l,50)}yc.call(s,o.container,"enterfullscreen exitfullscreen",function(e){var t=s.fullscreen,n=t.target,i=t.usingNative;if(n===o.container&&(s.isEmbed||!fc.empty(s.config.ratio))){var r="enterfullscreen"===e.type,a=l(r);a.padding;!function(e,t){if(s.isVimeo){var n=s.elements.wrapper.firstChild,i=no(e,2)[1],r=no(zc.call(s),2),a=r[0],o=r[1];n.style.maxWidth=t?"".concat(i/o*a,"px"):null,n.style.margin=t?"0 auto":null}}(a.ratio,r),i||(r?yc.call(s,window,"resize",c):bc.call(s,window,"resize",c))}})}},{key:"media",value:function(){var t=this,i=this.player,r=i.elements;if(yc.call(i,i.media,"timeupdate seeking seeked",function(e){return Tu.timeUpdate.call(i,e)}),yc.call(i,i.media,"durationchange loadeddata loadedmetadata",function(e){return Tu.durationUpdate.call(i,e)}),yc.call(i,i.media,"canplay loadeddata",function(){Oc(r.volume,!i.hasAudio),Oc(r.buttons.mute,!i.hasAudio)}),yc.call(i,i.media,"ended",function(){i.isHTML5&&i.isVideo&&i.config.resetOnEnd&&i.restart()}),yc.call(i,i.media,"progress playing seeking seeked",function(e){return Tu.updateProgress.call(i,e)}),yc.call(i,i.media,"volumechange",function(e){return Tu.updateVolume.call(i,e)}),yc.call(i,i.media,"playing play pause ended emptied timeupdate",function(e){return qu.checkPlaying.call(i,e)}),yc.call(i,i.media,"waiting canplay seeked playing",function(e){return qu.checkLoading.call(i,e)}),i.supported.ui&&i.config.clickToPlay&&!i.isAudio){var n=Uc.call(i,".".concat(i.config.classNames.video));if(!fc.element(n))return;yc.call(i,r.container,"click",function(e){([r.container,n].includes(e.target)||n.contains(e.target))&&(i.touch&&i.config.hideControls||(i.ended?(t.proxy(e,i.restart,"restart"),t.proxy(e,i.play,"play")):t.proxy(e,i.togglePlay,"play")))})}i.supported.ui&&i.config.disableContextMenu&&yc.call(i,r.wrapper,"contextmenu",function(e){e.preventDefault()},!1),yc.call(i,i.media,"volumechange",function(){i.storage.set({volume:i.volume,muted:i.muted})}),yc.call(i,i.media,"ratechange",function(){Tu.updateSetting.call(i,"speed"),i.storage.set({speed:i.speed})}),yc.call(i,i.media,"qualitychange",function(e){Tu.updateSetting.call(i,"quality",null,e.detail.quality)}),yc.call(i,i.media,"ready qualitychange",function(){Tu.setDownloadUrl.call(i)});var e=i.config.events.concat(["keyup","keydown"]).join(" ");yc.call(i,i.media,e,function(e){var t=e.detail,n=void 0===t?{}:t;"error"===e.type&&(n=i.media.error),kc.call(i,r.container,e.type,!0,n)})}},{key:"proxy",value:function(e,t,n){var i=this.player,r=i.config.listeners[n],a=!0;fc.function(r)&&(a=r.call(i,e)),a&&fc.function(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i,r){var a=this,o=!(4<arguments.length&&void 0!==r)||r,s=this.player,l=s.config.listeners[i],c=fc.function(l);yc.call(s,e,t,function(e){return a.proxy(e,n,i)},o&&!c)}},{key:"controls",value:function(){var i=this,s=this.player,r=s.elements,t=mc.isIE?"change":"input";if(r.buttons.play&&Array.from(r.buttons.play).forEach(function(e){i.bind(e,"click",s.togglePlay,"play")}),this.bind(r.buttons.restart,"click",s.restart,"restart"),this.bind(r.buttons.rewind,"click",s.rewind,"rewind"),this.bind(r.buttons.fastForward,"click",s.forward,"fastForward"),this.bind(r.buttons.mute,"click",function(){s.muted=!s.muted},"mute"),this.bind(r.buttons.captions,"click",function(){return s.toggleCaptions()}),this.bind(r.buttons.download,"click",function(){kc.call(s,s.media,"download")},"download"),this.bind(r.buttons.fullscreen,"click",function(){s.fullscreen.toggle()},"fullscreen"),this.bind(r.buttons.pip,"click",function(){s.pip="toggle"},"pip"),this.bind(r.buttons.airplay,"click",s.airplay,"airplay"),this.bind(r.buttons.settings,"click",function(e){e.stopPropagation(),Tu.toggleMenu.call(s,e)}),this.bind(r.buttons.settings,"keyup",function(e){var t=e.which;[13,32].includes(t)&&(13!==t?(e.preventDefault(),e.stopPropagation(),Tu.toggleMenu.call(s,e)):Tu.focusFirstMenuItem.call(s,null,!0))},null,!1),this.bind(r.settings.menu,"keydown",function(e){27===e.which&&Tu.toggleMenu.call(s,e)}),this.bind(r.inputs.seek,"mousedown mousemove",function(e){var t=r.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",n)}),this.bind(r.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var t=e.currentTarget,n=e.keyCode?e.keyCode:e.which,i="play-on-seeked";if(!fc.keyboardEvent(e)||39===n||37===n){s.lastSeekTime=Date.now();var r=t.hasAttribute(i),a=["mouseup","touchend","keyup"].includes(e.type);r&&a?(t.removeAttribute(i),s.play()):!a&&s.playing&&(t.setAttribute(i,""),s.pause())}}),mc.isIos){var e=Rc.call(s,'input[type="range"]');Array.from(e).forEach(function(e){return i.bind(e,t,function(e){return pc(e.target)})})}this.bind(r.inputs.seek,t,function(e){var t=e.currentTarget,n=t.getAttribute("seek-value");fc.empty(n)&&(n=t.value),t.removeAttribute("seek-value"),s.currentTime=n/t.max*s.duration},"seek"),this.bind(r.progress,"mouseenter mouseleave mousemove",function(e){return Tu.updateSeekTooltip.call(s,e)}),this.bind(r.progress,"mousemove touchmove",function(e){var t=s.previewThumbnails;t&&t.loaded&&t.startMove(e)}),this.bind(r.progress,"mouseleave click",function(){var e=s.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)}),this.bind(r.progress,"mousedown touchstart",function(e){var t=s.previewThumbnails;t&&t.loaded&&t.startScrubbing(e)}),this.bind(r.progress,"mouseup touchend",function(e){var t=s.previewThumbnails;t&&t.loaded&&t.endScrubbing(e)}),mc.isWebkit&&Array.from(Rc.call(s,'input[type="range"]')).forEach(function(e){i.bind(e,"input",function(e){return Tu.updateRangeFill.call(s,e.target)})}),s.config.toggleInvert&&!fc.element(r.display.duration)&&this.bind(r.display.currentTime,"click",function(){0!==s.currentTime&&(s.config.invertTime=!s.config.invertTime,Tu.timeUpdate.call(s))}),this.bind(r.inputs.volume,t,function(e){s.volume=e.target.value},"volume"),this.bind(r.controls,"mouseenter mouseleave",function(e){r.controls.hover=!s.touch&&"mouseenter"===e.type}),this.bind(r.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){r.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(r.controls,"focusin",function(){var e=s.config,t=s.timers;jc(r.controls,e.classNames.noTransition,!0),qu.toggleControls.call(s,!0),setTimeout(function(){jc(r.controls,e.classNames.noTransition,!1)},0);var n=i.touch?3e3:4e3;clearTimeout(t.controls),t.controls=setTimeout(function(){return qu.toggleControls.call(s,!1)},n)}),this.bind(r.inputs.volume,"wheel",function(e){var t=e.webkitDirectionInvertedFromDevice,n=no([e.deltaX,-e.deltaY].map(function(e){return t?-e:e}),2),i=n[0],r=n[1],a=Math.sign(Math.abs(i)>Math.abs(r)?i:r);s.increaseVolume(a/50);var o=s.media.volume;(1===a&&o<1||-1===a&&0<o)&&e.preventDefault()},"volume",!1)}}]),t}(),Hu=_.f,Vu=Function.prototype,Bu=Vu.toString,zu=/^\s*function ([^ (]*)/;!b||"name"in Vu||Hu(Vu,"name",{configurable:!0,get:function(){try{return Bu.call(this).match(zu)[1]}catch(e){return""}}});var Wu=Math.max,Ku=Math.min;oe({target:"Array",proto:!0,forced:!xn("splice")},{splice:function(e,t){var n,i,r,a,o,s,l=se(this),c=ee(l.length),u=te(e,c),h=arguments.length;if(0===h?n=i=0:i=1===h?(n=0,c-u):(n=h-2,Ku(Wu(Z(t),0),c-u)),9007199254740991<c+n-i)throw TypeError("Maximum allowed length exceeded");for(r=We(l,i),a=0;a<i;a++)(o=u+a)in l&&An(r,a,l[o]);if(n<(r.length=i)){for(a=u;a<c-i;a++)s=a+n,(o=a+i)in l?l[s]=l[o]:delete l[s];for(a=c;c-i+n<a;a--)delete l[a-1]}else if(i<n)for(a=c-i;u<a;a--)s=a+n-1,(o=a+i-1)in l?l[s]=l[o]:delete l[s];for(a=0;a<n;a++)l[a+u]=arguments[a+2];return l.length=c-i+n,r}});var $u=t(function(e,t){function o(e,t){if(e){var n=u[e];if(c[e]=t,n)for(;n.length;)n[0](e,t),n.splice(0,1)}}function s(e,t){e.call&&(e={success:e}),t.length?(e.error||f)(t):(e.success||f)(e)}function h(n,i,r,a){var o,s,e=document,t=r.async,l=(r.numRetries||0)+1,c=r.before||f,u=n.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(n)?((s=e.createElement("link")).rel="stylesheet",s.href=u,(o="hideFocus"in s)&&s.relList&&(o=0,s.rel="preload",s.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(n)?(s=e.createElement("img")).src=u:((s=e.createElement("script")).src=n,s.async=void 0===t||t),!(s.onload=s.onerror=s.onbeforeload=function(e){var t=e.type[0];if(o)try{s.sheet.cssText.length||(t="e")}catch(e){18!=e.code&&(t="e")}if("e"==t){if((a+=1)<l)return h(n,i,r,a)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";i(n,t,e.defaultPrevented)})!==c(n,s)&&e.head.appendChild(s)}function n(e,t,n){var i,r;if(t&&t.trim&&(i=t),r=(i?n:t)||{},i){if(i in l)throw"LoadJS";l[i]=!0}function a(t,n){!function(e,i,t){var n,r,a=(e=e.push?e:[e]).length,o=a,s=[];for(n=function(e,t,n){if("e"==t&&s.push(e),"b"==t){if(!n)return;s.push(e)}--a||i(s)},r=0;r<o;r++)h(e[r],n,t)}(e,function(e){s(r,e),t&&s({success:t,error:n},e),o(i,e)},r)}if(r.returnPromise)return new Promise(a);a()}var f,l,c,u;e.exports=(f=function(){},l={},c={},u={},n.ready=function(e,t){return function(e,n){e=e.push?e:[e];var t,i,r,a=[],o=e.length,s=o;for(t=function(e,t){t.length&&a.push(e),--s||n(a)};o--;)i=e[o],(r=c[i])?t(i,r):(u[i]=u[i]||[]).push(t)}(e,function(e){s(t,e)}),n},n.done=function(e){o(e,[])},n.reset=function(){l={},c={},u={}},n.isDefined=function(e){return e in l},n)});function Yu(n){return new Promise(function(e,t){$u(n,{success:e,error:t})})}function Gu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,kc.call(this,this.media,e?"play":"pause"))}var Qu={setup:function(){var t=this;jc(this.elements.wrapper,this.config.classNames.embed,!0),Wc.call(this),fc.object(window.Vimeo)?Qu.ready.call(this):Yu(this.config.urls.vimeo.sdk).then(function(){Qu.ready.call(t)}).catch(function(e){t.debug.warn("Vimeo SDK (player.js) failed to load",e)})},ready:function(){var r=this,o=this,e=o.config.vimeo,t=Eu(Sc({},{loop:o.config.loop.active,autoplay:o.autoplay,muted:o.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},e)),n=o.media.getAttribute("src");fc.empty(n)&&(n=o.media.getAttribute(o.config.attributes.embed.id));var i,a=(i=n,fc.empty(i)?null:!fc.number(Number(i))&&i.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:i),s=xc("iframe"),l=ou(o.config.urls.vimeo.iframe,a,t);s.setAttribute("src",l),s.setAttribute("allowfullscreen",""),s.setAttribute("allowtransparency",""),s.setAttribute("allow","autoplay");var c=xc("div",{poster:o.poster,class:o.config.classNames.embedContainer});c.appendChild(s),o.media=Ic(c,o.media),pu(ou(o.config.urls.vimeo.api,a),"json").then(function(e){if(!fc.empty(e)){var t=new URL(e[0].thumbnail_large);t.pathname="".concat(t.pathname.split("_")[0],".jpg"),qu.setPoster.call(o,t.href).catch(function(){})}}),o.embed=new window.Vimeo.Player(s,{autopause:o.config.autopause,muted:o.muted}),o.media.paused=!0,o.media.currentTime=0,o.supported.ui&&o.embed.disableTextTrack(),o.media.play=function(){return Gu.call(o,!0),o.embed.play()},o.media.pause=function(){return Gu.call(o,!1),o.embed.pause()},o.media.stop=function(){o.pause(),o.currentTime=0};var u=o.media.currentTime;Object.defineProperty(o.media,"currentTime",{get:function(){return u},set:function(e){var t=o.embed,n=o.media,i=o.paused,r=o.volume,a=i&&!t.hasPlayed;n.seeking=!0,kc.call(o,n,"seeking"),Promise.resolve(a&&t.setVolume(0)).then(function(){return t.setCurrentTime(e)}).then(function(){return a&&t.pause()}).then(function(){return a&&t.setVolume(r)}).catch(function(){})}});var h=o.config.speed.selected;Object.defineProperty(o.media,"playbackRate",{get:function(){return h},set:function(e){o.embed.setPlaybackRate(e).then(function(){h=e,kc.call(o,o.media,"ratechange")}).catch(function(e){"Error"===e.name&&Tu.setSpeedMenu.call(o,[])})}});var f=o.config.volume;Object.defineProperty(o.media,"volume",{get:function(){return f},set:function(e){o.embed.setVolume(e).then(function(){f=e,kc.call(o,o.media,"volumechange")})}});var d=o.config.muted;Object.defineProperty(o.media,"muted",{get:function(){return d},set:function(e){var t=!!fc.boolean(e)&&e;o.embed.setVolume(t?0:o.config.volume).then(function(){d=t,kc.call(o,o.media,"volumechange")})}});var p,m=o.config.loop;Object.defineProperty(o.media,"loop",{get:function(){return m},set:function(e){var t=fc.boolean(e)?e:o.config.loop.active;o.embed.setLoop(t).then(function(){m=t})}}),o.embed.getVideoUrl().then(function(e){p=e,Tu.setDownloadUrl.call(o)}).catch(function(e){r.debug.warn(e)}),Object.defineProperty(o.media,"currentSrc",{get:function(){return p}}),Object.defineProperty(o.media,"ended",{get:function(){return o.currentTime===o.duration}}),Promise.all([o.embed.getVideoWidth(),o.embed.getVideoHeight()]).then(function(e){var t=no(e,2),n=t[0],i=t[1];o.embed.ratio=[n,i],Wc.call(r)}),o.embed.setAutopause(o.config.autopause).then(function(e){o.config.autopause=e}),o.embed.getVideoTitle().then(function(e){o.config.title=e,qu.setTitle.call(r)}),o.embed.getCurrentTime().then(function(e){u=e,kc.call(o,o.media,"timeupdate")}),o.embed.getDuration().then(function(e){o.media.duration=e,kc.call(o,o.media,"durationchange")}),o.embed.getTextTracks().then(function(e){o.media.textTracks=e,Au.setup.call(o)}),o.embed.on("cuechange",function(e){var t=e.cues,n=(void 0===t?[]:t).map(function(e){return t=e.text,n=document.createDocumentFragment(),i=document.createElement("div"),n.appendChild(i),i.innerHTML=t,n.firstChild.innerText;var t,n,i});Au.updateCues.call(o,n)}),o.embed.on("loaded",function(){o.embed.getPaused().then(function(e){Gu.call(o,!e),e||kc.call(o,o.media,"playing")}),fc.element(o.embed.element)&&o.supported.ui&&o.embed.element.setAttribute("tabindex",-1)}),o.embed.on("play",function(){Gu.call(o,!0),kc.call(o,o.media,"playing")}),o.embed.on("pause",function(){Gu.call(o,!1)}),o.embed.on("timeupdate",function(e){o.media.seeking=!1,u=e.seconds,kc.call(o,o.media,"timeupdate")}),o.embed.on("progress",function(e){o.media.buffered=e.percent,kc.call(o,o.media,"progress"),1===parseInt(e.percent,10)&&kc.call(o,o.media,"canplaythrough"),o.embed.getDuration().then(function(e){e!==o.media.duration&&(o.media.duration=e,kc.call(o,o.media,"durationchange"))})}),o.embed.on("seeked",function(){o.media.seeking=!1,kc.call(o,o.media,"seeked")}),o.embed.on("ended",function(){o.media.paused=!0,kc.call(o,o.media,"ended")}),o.embed.on("error",function(e){o.media.error=e,kc.call(o,o.media,"error")}),setTimeout(function(){return qu.build.call(o)},0)}};function Xu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,kc.call(this,this.media,e?"play":"pause"))}var Ju={setup:function(){var t=this;if(jc(this.elements.wrapper,this.config.classNames.embed,!0),fc.object(window.YT)&&fc.function(window.YT.Player))Ju.ready.call(this);else{var e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){fc.function(e)&&e(),Ju.ready.call(t)},Yu(this.config.urls.youtube.sdk).catch(function(e){t.debug.warn("YouTube API failed to load",e)})}},getTitle:function(e){var r=this;pu(ou(this.config.urls.youtube.api,e)).then(function(e){if(fc.object(e)){var t=e.title,n=e.height,i=e.width;r.config.title=t,qu.setTitle.call(r),r.embed.ratio=[i,n]}Wc.call(r)}).catch(function(){Wc.call(r)})},ready:function(){var r=this,e=r.media&&r.media.getAttribute("id");if(fc.empty(e)||!e.startsWith("youtube-")){var t=r.media.getAttribute("src");fc.empty(t)&&(t=r.media.getAttribute(this.config.attributes.embed.id));var n,i,a=(n=t,fc.empty(n)?null:n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:n),o=(i=r.provider,"".concat(i,"-").concat(Math.floor(1e4*Math.random()))),s=xc("div",{id:o,poster:r.poster});r.media=Ic(s,r.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(a,"/").concat(e,"default.jpg")};Fu(l("maxres"),121).catch(function(){return Fu(l("sd"),121)}).catch(function(){return Fu(l("hq"))}).then(function(e){return qu.setPoster.call(r,e.src)}).then(function(e){e.includes("maxres")||(r.elements.poster.style.backgroundSize="cover")}).catch(function(){});var c=r.config.youtube;r.embed=new window.YT.Player(o,{videoId:a,host:c.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0,playerVars:Sc({},{autoplay:r.config.autoplay?1:0,hl:r.config.hl,controls:r.supported.ui?0:1,disablekb:1,playsinline:r.config.fullscreen.iosNative?0:1,cc_load_policy:r.captions.active?1:0,cc_lang_pref:r.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(e){if(!r.media.error){var t=e.data,n={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[t]||"An unknown error occured";r.media.error={code:t,message:n},kc.call(r,r.media,"error")}},onPlaybackRateChange:function(e){var t=e.target;r.media.playbackRate=t.getPlaybackRate(),kc.call(r,r.media,"ratechange")},onReady:function(e){if(!fc.function(r.media.play)){var n=e.target;Ju.getTitle.call(r,a),r.media.play=function(){Xu.call(r,!0),n.playVideo()},r.media.pause=function(){Xu.call(r,!1),n.pauseVideo()},r.media.stop=function(){n.stopVideo()},r.media.duration=n.getDuration(),r.media.paused=!0,r.media.currentTime=0,Object.defineProperty(r.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(e){r.paused&&!r.embed.hasPlayed&&r.embed.mute(),r.media.seeking=!0,kc.call(r,r.media,"seeking"),n.seekTo(e)}}),Object.defineProperty(r.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var t=r.config.volume;Object.defineProperty(r.media,"volume",{get:function(){return t},set:function(e){t=e,n.setVolume(100*t),kc.call(r,r.media,"volumechange")}});var i=r.config.muted;Object.defineProperty(r.media,"muted",{get:function(){return i},set:function(e){var t=fc.boolean(e)?e:i;n[(i=t)?"mute":"unMute"](),kc.call(r,r.media,"volumechange")}}),Object.defineProperty(r.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(r.media,"ended",{get:function(){return r.currentTime===r.duration}}),r.options.speed=n.getAvailablePlaybackRates(),r.supported.ui&&r.media.setAttribute("tabindex",-1),kc.call(r,r.media,"timeupdate"),kc.call(r,r.media,"durationchange"),clearInterval(r.timers.buffering),r.timers.buffering=setInterval(function(){r.media.buffered=n.getVideoLoadedFraction(),(null===r.media.lastBuffered||r.media.lastBuffered<r.media.buffered)&&kc.call(r,r.media,"progress"),r.media.lastBuffered=r.media.buffered,1===r.media.buffered&&(clearInterval(r.timers.buffering),kc.call(r,r.media,"canplaythrough"))},200),setTimeout(function(){return qu.build.call(r)},50)}},onStateChange:function(e){var t=e.target;switch(clearInterval(r.timers.playing),r.media.seeking&&[1,2].includes(e.data)&&(r.media.seeking=!1,kc.call(r,r.media,"seeked")),e.data){case-1:kc.call(r,r.media,"timeupdate"),r.media.buffered=t.getVideoLoadedFraction(),kc.call(r,r.media,"progress");break;case 0:Xu.call(r,!1),r.media.loop?(t.stopVideo(),t.playVideo()):kc.call(r,r.media,"ended");break;case 1:r.config.autoplay||!r.media.paused||r.embed.hasPlayed?(Xu.call(r,!0),kc.call(r,r.media,"playing"),r.timers.playing=setInterval(function(){kc.call(r,r.media,"timeupdate")},50),r.media.duration!==t.getDuration()&&(r.media.duration=t.getDuration(),kc.call(r,r.media,"durationchange"))):r.media.pause();break;case 2:r.muted||r.embed.unMute(),Xu.call(r,!1)}kc.call(r,r.elements.container,"statechange",!1,{code:e.data})}}})}}},Zu={setup:function(){this.media?(jc(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),jc(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&jc(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=xc("div",{class:this.config.classNames.video}),Ec(this.media,this.elements.wrapper),this.elements.poster=xc("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?Kc.extend.call(this):this.isYouTube?Ju.setup.call(this):this.isVimeo&&Qu.setup.call(this)):this.debug.warn("No media element found!")}},eh=function(){function t(e){var n=this;Ja(this,t),this.player=e,this.config=e.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){n.on("loaded",e),n.on("error",t)}),this.load()}return eo(t,[{key:"load",value:function(){var e=this;this.enabled&&(fc.object(window.google)&&fc.object(window.google.ima)?this.ready():Yu(this.player.config.urls.googleIMA.sdk).then(function(){e.ready()}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"))}))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){t.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=xc("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var t=this,e=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(e){return t.onAdsManagerLoaded(e)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)},!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=e.offsetWidth,n.linearAdSlotHeight=e.offsetHeight,n.nonLinearAdSlotWidth=e.offsetWidth,n.nonLinearAdSlotHeight=e.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(e){var n=this;if(!(0<arguments.length&&void 0!==e&&e))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var e=ku(Math.max(n.manager.getRemainingTime(),0)),t="".concat(fu("advertisement",n.player.config)," - ").concat(e);n.elements.container.setAttribute("data-badge-text",t)},100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)})}),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var r=this;fc.empty(this.cuePoints)||this.cuePoints.forEach(function(e){if(0!==e&&-1!==e&&e<r.player.duration){var t=r.player.elements.progress;if(fc.element(t)){var n=100/r.player.duration*e,i=xc("span",{class:r.player.config.classNames.cues});i.style.left="".concat(n.toString(),"%"),t.appendChild(i)}}})}},{key:"onAdEvent",value:function(e){var t,n=this,i=this.player.elements.container,r=e.getAd(),a=e.getAdData();switch(t=e.type,kc.call(n.player,n.player.media,"ads".concat(t.replace(/_/g,"").toLowerCase())),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),r.isLinear()||(r.width=i.offsetWidth,r.height=i.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:a.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var i,r=this,e=this.player.elements.container;this.player.on("canplay",function(){r.addCuePoints()}),this.player.on("ended",function(){r.loader.contentComplete()}),this.player.on("timeupdate",function(){i=r.player.currentTime}),this.player.on("seeked",function(){var n=r.player.currentTime;fc.empty(r.cuePoints)||r.cuePoints.forEach(function(e,t){i<e&&e<n&&(r.manager.discardAdBreak(),r.cuePoints.splice(t,1))})}),window.addEventListener("resize",function(){r.manager&&r.manager.resize(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL)})}},{key:"play",value:function(){var t=this,e=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){t.manager.setVolume(t.player.volume),t.elements.displayContainer.initialize();try{t.initialized||(t.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),t.manager.start()),t.initialized=!0}catch(e){t.onAdError(e)}}).catch(function(){})}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var t=this;this.managerPromise.then(function(){t.manager&&t.manager.destroy(),t.managerPromise=new Promise(function(e){t.on("loaded",e),t.player.debug.log(t.manager)}),t.requestAds()}).catch(function(){})}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this.events[e];fc.array(a)&&a.forEach(function(e){fc.function(e)&&e.apply(t,i)})}},{key:"on",value:function(e,t){return fc.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")},e)}},{key:"clearSafetyTimer",value:function(e){fc.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!fc.empty(e.publisherId)||fc.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(fc.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Eu(t))}}]),t}(),th=ct.findIndex,nh="findIndex",ih=!0;nh in[]&&Array(1)[nh](function(){ih=!1}),oe({target:"Array",proto:!0,forced:ih},{findIndex:function(e,t){return th(this,e,1<arguments.length?t:void 0)}}),$t(nh);var rh=function(){function t(e){Ja(this,t),this.player=e,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return eo(t,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)})}},{key:"getThumbnails",value:function(){var i=this;return new Promise(function(e){var t=i.player.config.previewThumbnails.src;if(fc.empty(t))throw new Error("Missing previewThumbnails.src config attribute");var n=(fc.string(t)?[t]:t).map(function(e){return i.getThumbnail(e)});Promise.all(n).then(function(){i.thumbnails.sort(function(e,t){return e.height-t.height}),i.player.debug.log("Preview thumbnails",i.thumbnails),e()})})}},{key:"getThumbnail",value:function(a){var o=this;return new Promise(function(r){pu(a).then(function(e){var t,n={frames:(t=[],e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var a={};e.split(/\r\n|\n|\r/).forEach(function(e){if(fc.number(a.startTime)){if(!fc.empty(e.trim())&&fc.empty(a.text)){var t=e.trim().split("#xywh="),n=no(t,1);if(a.text=n[0],t[1]){var i=no(t[1].split(","),4);a.x=i[0],a.y=i[1],a.w=i[2],a.h=i[3]}}}else{var r=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);r&&(a.startTime=60*Number(r[1]||0)*60+60*Number(r[2])+Number(r[3])+Number("0.".concat(r[4])),a.endTime=60*Number(r[6]||0)*60+60*Number(r[7])+Number(r[8])+Number("0.".concat(r[9])))}}),a.text&&t.push(a)}),t),height:null,urlPrefix:""};n.frames[0].text.startsWith("/")||n.frames[0].text.startsWith("http://")||n.frames[0].text.startsWith("https://")||(n.urlPrefix=a.substring(0,a.lastIndexOf("/")+1));var i=new Image;i.onload=function(){n.height=i.naturalHeight,n.width=i.naturalWidth,o.thumbnails.push(n),r()},i.src=n.urlPrefix+n.frames[0].text})})}},{key:"startMove",value:function(e){if(this.loaded&&fc.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=ku(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):wc.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1)})}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0)}),this.player.on("seeked",function(){e.toggleThumbContainer(!1)}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime})}},{key:"render",value:function(){this.elements.thumb.container=xc("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=xc("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=xc("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=xc("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),fc.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=xc("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"showImageAtCurrentTime",value:function(){var n=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var i=this.thumbnails[0].frames.findIndex(function(e){return n.seekTime>=e.startTime&&n.seekTime<=e.endTime}),e=0<=i,r=0;this.mouseDown||this.toggleThumbContainer(e),e&&(this.thumbnails.forEach(function(e,t){n.loadedImages.includes(e.frames[i].text)&&(r=t)}),i!==this.showingThumb&&(this.showingThumb=i,this.loadImage(r)))}},{key:"loadImage",value:function(e){var t=this,n=0<arguments.length&&void 0!==e?e:0,i=this.showingThumb,r=this.thumbnails[n],a=r.urlPrefix,o=r.frames[i],s=r.frames[i].text,l=a+s;if(this.currentImageElement&&this.currentImageElement.dataset.filename===s)this.showImage(this.currentImageElement,o,n,i,s,!1),this.currentImageElement.dataset.index=i,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var c=new Image;c.src=l,c.dataset.index=i,c.dataset.filename=s,this.showingThumbFilename=s,this.player.debug.log("Loading image: ".concat(l)),c.onload=function(){return t.showImage(c,o,n,i,s,!0)},this.loadingImage=c,this.removeOldImages(c)}}},{key:"showImage",value:function(e,t,n,i,r,a){var o=!(5<arguments.length&&void 0!==a)||a;this.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(o)),this.setImageSizeAndOffset(e,t),o&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(r)||this.loadedImages.push(r)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,r))}},{key:"removeOldImages",value:function(i){var r=this;Array.from(this.currentImageContainer.children).forEach(function(e){if("img"===e.tagName.toLowerCase()){var t=r.usingSprites?500:1e3;if(e.dataset.index!==i.dataset.index&&!e.dataset.deleting){e.dataset.deleting=!0;var n=r.currentImageContainer;setTimeout(function(){n.removeChild(e),r.player.debug.log("Removing thumb: ".concat(e.dataset.filename))},t)}}})}},{key:"preloadNearby",value:function(t,e){var s=this,n=!(1<arguments.length&&void 0!==e)||e;return new Promise(function(o){setTimeout(function(){var r=s.thumbnails[0].frames[t].text;if(s.showingThumbFilename===r){var e;e=n?s.thumbnails[0].frames.slice(t):s.thumbnails[0].frames.slice(0,t).reverse();var a=!1;e.forEach(function(e){var t=e.text;if(t!==r&&!s.loadedImages.includes(t)){a=!0,s.player.debug.log("Preloading thumb filename: ".concat(t));var n=s.thumbnails[0].urlPrefix+t,i=new Image;i.src=n,i.onload=function(){s.player.debug.log("Preloaded thumb filename: ".concat(t)),s.loadedImages.includes(t)||s.loadedImages.push(t),o()}}}),a||o()}},300)})}},{key:"getHigherQuality",value:function(e,t,n,i){var r=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=n.h),a<this.thumbContainerHeight&&setTimeout(function(){r.showingThumbFilename===i&&(r.player.debug.log("Showing higher quality thumb for: ".concat(i)),r.loadImage(e+1))},300)}}},{key:"toggleThumbContainer",value:function(e,t){var n=0<arguments.length&&void 0!==e&&e,i=1<arguments.length&&void 0!==t&&t,r=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(r,n),!n&&i&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(e){var t=0<arguments.length&&void 0!==e&&e,n=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(n,t),t||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){20<this.elements.thumb.imageContainer.clientHeight&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,a=this.mousePosX-e.left-n.clientWidth/2;a<i&&(a=i),r<a&&(a=r),n.style.left="".concat(a,"px")}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*n),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*n),"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),t}(),ah={insertElements:function(t,e){var n=this;fc.string(e)?Cc(t,this.media,{src:e}):fc.array(e)&&e.forEach(function(e){Cc(t,n.media,e)})},change:function(l){var c=this;Tc(l,"sources.length")?(Kc.cancelRequests.call(this),this.destroy.call(this,function(){c.options.quality=[],Pc(c.media),c.media=null,fc.element(c.elements.container)&&c.elements.container.removeAttribute("class");var e=l.sources,t=l.type,n=no(e,1)[0],i=n.provider,r=void 0===i?Lu.html5:i,a=n.src,o="html5"===r?t:"div",s="html5"===r?{}:{src:a};Object.assign(c,{provider:r,type:t,supported:Hc.check(t,r,c.config.playsinline),media:xc(o,s)}),c.elements.container.appendChild(c.media),fc.boolean(l.autoplay)&&(c.config.autoplay=l.autoplay),c.isHTML5&&(c.config.crossorigin&&c.media.setAttribute("crossorigin",""),c.config.autoplay&&c.media.setAttribute("autoplay",""),fc.empty(l.poster)||(c.poster=l.poster),c.config.loop.active&&c.media.setAttribute("loop",""),c.config.muted&&c.media.setAttribute("muted",""),c.config.playsinline&&c.media.setAttribute("playsinline","")),qu.addStyleHook.call(c),c.isHTML5&&ah.insertElements.call(c,"source",e),c.config.title=l.title,Zu.setup.call(c),c.isHTML5&&Object.keys(l).includes("tracks")&&ah.insertElements.call(c,"track",l.tracks),(c.isHTML5||c.isEmbed&&!c.supported.ui)&&qu.build.call(c),c.isHTML5&&c.media.load(),c.previewThumbnails&&c.previewThumbnails.load(),c.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};var oh,sh=function(){function c(e,t){var n=this;if(Ja(this,c),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=Hc.touch,this.media=e,fc.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||fc.nodeList(this.media)||fc.array(this.media))&&(this.media=this.media[0]),this.config=Sc({},xu,c.defaults,t||{},function(){try{return JSON.parse(n.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new ju(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",Hc),!fc.nullOrUndefined(this.media)&&fc.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(Hc.check().api){var i=this.media.cloneNode(!0);i.autoplay=!1,this.elements.original=i;var r,a=this.media.tagName.toLowerCase(),o=null,s=null;switch(a){case"div":if(o=this.media.querySelector("iframe"),fc.element(o)){if(s=Su(o.getAttribute("src")),this.provider=(r=s.toString(),/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(r)?Lu.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(r)?Lu.vimeo:null),this.elements.container=this.media,this.media=o,this.elements.container.className="",s.search.length){var l=["1","true"];l.includes(s.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(s.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(s.searchParams.get("playsinline")),this.config.youtube.hl=s.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(fc.empty(this.provider)||!Object.keys(Lu).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Mu;break;case"video":case"audio":this.type=a,this.provider=Lu.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=Hc.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new Du(this),this.storage=new du(this),this.media.plyr=this,fc.element(this.elements.container)||(this.elements.container=xc("div",{tabindex:0}),Ec(this.media,this.elements.container)),qu.addStyleHook.call(this),Zu.setup.call(this),this.config.debug&&yc.call(this,this.elements.container,this.config.events.join(" "),function(e){n.debug.log("event: ".concat(e.type))}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&qu.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new Ru(this),this.config.ads.enabled&&(this.ads=new eh(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return n.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new rh(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return eo(c,[{key:"play",value:function(){var e=this;return fc.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&fc.function(this.media.pause)&&this.media.pause()}},{key:"togglePlay",value:function(e){(fc.boolean(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):fc.function(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(fc.number(e)?e:this.config.seekTime)}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(fc.number(e)?e:this.config.seekTime)}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(fc.number(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Au.toggle.call(this,e,!1)}},{key:"airplay",value:function(){Hc.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(!this.supported.ui||this.isAudio)return!1;var t=Nc(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=jc(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!fc.empty(this.config.settings)&&Tu.toggleMenu.call(this,!1),i!==t){var r=i?"controlshidden":"controlsshown";kc.call(this,this.media,r)}return!i}},{key:"on",value:function(e,t){yc.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){wc.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){bc(this.elements.container,e,t)}},{key:"destroy",value:function(e,t){var n=this,i=1<arguments.length&&void 0!==t&&t;if(this.ready){var r=function(){document.body.style.overflow="",n.embed=null,i?(Object.keys(n.elements).length&&(Pc(n.elements.buttons.play),Pc(n.elements.captions),Pc(n.elements.controls),Pc(n.elements.wrapper),n.elements.buttons.play=null,n.elements.captions=null,n.elements.controls=null,n.elements.wrapper=null),fc.function(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,n=e.type,i=e.callback,r=e.options;t.removeEventListener(n,i,r)}),this.eventListeners=[])}.call(n),Ic(n.elements.original,n.elements.container),kc.call(n,n.elements.original,"destroyed",!0),fc.function(e)&&e.call(n.elements.original),n.ready=!1,setTimeout(function(){n.elements=null,n.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(qu.toggleNativeControls.call(this,!0),r()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&fc.function(this.embed.destroy)&&this.embed.destroy(),r()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(r),setTimeout(r,200))}}},{key:"supports",value:function(e){return Hc.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===Lu.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===Lu.youtube}},{key:"isVimeo",get:function(){return this.provider===Lu.vimeo}},{key:"isVideo",get:function(){return this.type===Mu}},{key:"isAudio",get:function(){return this.type===Iu}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=fc.number(e)&&0<e;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return fc.number(e)?e:e&&e.length&&0<this.duration?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=fc.number(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;fc.string(t)&&(t=Number(t)),fc.number(t)||(t=this.storage.get("volume")),fc.number(t)||(t=this.config.volume),1<t&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!fc.empty(e)&&this.muted&&0<t&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;fc.boolean(t)||(t=this.storage.get("muted")),fc.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;fc.number(e)&&(n=e),fc.number(n)||(n=this.storage.get("speed")),fc.number(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,r=this.maximumSpeed;n=function(e,t,n){var i=0<arguments.length&&void 0!==e?e:0,r=1<arguments.length&&void 0!==t?t:0,a=2<arguments.length&&void 0!==n?n:255;return Math.min(Math.max(i,r),a)}(n,i,r),this.config.speed.selected=n,setTimeout(function(){t.media.playbackRate=n},0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,io(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,io(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i,r,a=[!fc.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(fc.number),o=!0;if(!n.includes(a)){var s=(i=n,r=a,fc.array(i)&&i.length?i.reduce(function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}):null);this.debug.warn("Unsupported quality option: ".concat(a,", using ").concat(s," instead")),a=s,o=!1}t.selected=a,this.media.quality=a,o&&this.storage.set({quality:a})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=fc.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){ah.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return fc.url(e)?e:this.source},set:function(e){fc.url(e)&&(this.config.urls.download=e,Tu.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?qu.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=Bc(zc.call(this));return fc.array(e)?e.join(":"):e},set:function(e){this.isVideo?fc.string(e)&&Vc(e)?(this.config.ratio=e,Wc.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=fc.boolean(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Au.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Au.setLanguage.call(this,e,!1)},get:function(){return(Au.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(Hc.pip){var t=fc.boolean(e)?e:!this.pip;fc.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Cu:Pu),fc.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return Hc.pip?fc.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Cu:null}}],[{key:"supported",value:function(e,t,n){return Hc.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return mu(e,t)}},{key:"setup",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{},i=null;return fc.string(e)?i=Array.from(document.querySelectorAll(e)):fc.nodeList(e)?i=Array.from(e):fc.array(e)&&(i=e.filter(fc.element)),fc.empty(i)?null:i.map(function(e){return new c(e,n)})}}]),c}();return sh.defaults=(oh=xu,JSON.parse(JSON.stringify(oh))),sh});var eaelsvPosition="",eaelsvWidth=0,eaelsvHeight=0,eaelsvDomHeight=0,videoIsActive="off",eaelMakeItSticky=0,scrollHeight=0;function GetDomElementHeight(e){var t=jQuery(e).parent().height(),i=scrollHeight*t/100;return jQuery(e).parent().offset().top+i}function PositionStickyPlayer(e,t,i){"top-left"==e&&(jQuery(".eael-sticky-video-player2.out").css("top","40px"),jQuery(".eael-sticky-video-player2.out").css("left","40px")),"top-right"==e&&(jQuery(".eael-sticky-video-player2.out").css("top","40px"),jQuery(".eael-sticky-video-player2.out").css("right","40px")),"bottom-right"==e&&(jQuery(".eael-sticky-video-player2.out").css("bottom","40px"),jQuery(".eael-sticky-video-player2.out").css("right","40px")),"bottom-left"==e&&(jQuery(".eael-sticky-video-player2.out").css("bottom","40px"),jQuery(".eael-sticky-video-player2.out").css("left","40px")),jQuery(".eael-sticky-video-player2.out").css("width",i+"px"),jQuery(".eael-sticky-video-player2.out").css("height",t+"px")}function PlayerPlay(e,t){e.on("play",function(e){eaelsvDomHeight=GetDomElementHeight(t),jQuery(".eael-sticky-video-player2").removeAttr("id"),jQuery(".eael-sticky-video-player2").removeClass("out"),t.attr("id","videobox"),videoIsActive="on",eaelsvPosition=t.data("position"),eaelsvHeight=t.data("sheight"),eaelsvWidth=t.data("swidth")})}function RunStickyPlayer(e){new Plyr("#"+e).start()}jQuery(window).on("elementor/frontend/init",function(){isEditMode&&elementor.hooks.addAction("panel/open_editor/widget/eael-sticky-video",function(t,i,e){var o;i.attributes.settings.on("change:eaelsv_sticky_width",function(){clearTimeout(o),o=setTimeout(function(){var e=Math.ceil(i.getSetting("eaelsv_sticky_width")/1.78);i.attributes.settings.attributes.eaelsv_sticky_height=e,t.el.querySelector('[data-setting="eaelsv_sticky_height"]').value=e},250)}),i.attributes.settings.on("change:eaelsv_sticky_height",function(){clearTimeout(o),o=setTimeout(function(){var e=Math.ceil(1.78*i.getSetting("eaelsv_sticky_height"));i.attributes.settings.attributes.eaelsv_sticky_width=e,t.el.querySelector('[data-setting="eaelsv_sticky_width"]').value=e},250)})}),elementorFrontend.hooks.addAction("frontend/element_ready/eael-sticky-video.default",function(e,t){t(".eaelsv-sticky-player-close",e).hide();var i,o,s,a=e.find(".eael-sticky-video-player2");i=a.data("sticky"),o=a.data("autoplay"),eaelsvPosition=a.data("position"),eaelsvHeight=a.data("sheight"),eaelsvWidth=a.data("swidth"),s=a.data("overlay"),scrollHeight=a.data("scroll_height"),PositionStickyPlayer(eaelsvPosition,eaelsvHeight,eaelsvWidth);var l=new Plyr("#eaelsv-player-"+e.data("id"));if("no"===s&&"yes"===o&&"yes"===i&&(eaelsvDomHeight=GetDomElementHeight(a),a.attr("id","videobox"),videoIsActive="on",PlayerPlay(l,a)),"yes"===s){var r=a.prev();videoIsActive="off",t(r).on("click",function(){t(this).css("display","none"),"yes"===t(this).next().data("autoplay")&&(l.restart(),eaelsvDomHeight=GetDomElementHeight(this),"yes"===i&&(t(this).next().attr("id","videobox"),videoIsActive="on"))})}l.on("pause",function(e){videoIsActive="off"}),l.on("play",function(e){videoIsActive="on"}),t(".eaelsv-sticky-player-close").on("click",function(){a.removeClass("out").addClass("in"),t(".eael-sticky-video-player2").removeAttr("style"),videoIsActive="off"}),a.parent().css("height",a.height()+"px"),t(window).resize(function(){a.parent().css("height",a.height()+"px")})})}),jQuery(window).scroll(function(){var e=jQuery(window).scrollTop();jQuery(document).height()-e>jQuery(window).height()+400&&(eaelsvDomHeight<=e?"on"==videoIsActive&&(jQuery("#videobox").find(".eaelsv-sticky-player-close").css("display","block"),jQuery("#videobox").removeClass("in").addClass("out"),PositionStickyPlayer(eaelsvPosition,eaelsvHeight,eaelsvWidth)):(jQuery(".eaelsv-sticky-player-close").hide(),jQuery("#videobox").removeClass("out").addClass("in"),jQuery(".eael-sticky-video-player2").removeAttr("style")))});!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).FullCalendarLocalesAll=t()}(this,function(){"use strict";return[{code:"af",week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayHtml:"Heeldag",eventLimitText:"Addisionele",noEventsMessage:"Daar is geen gebeurtenisse nie"},{code:"ar-dz",week:{dow:0,doy:4},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar-kw",week:{dow:0,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar-ly",week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar-ma",week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar-sa",week:{dow:0,doy:6},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar-tn",week:{dow:1,doy:4},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"ar",week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekLabel:"أسبوع",allDayText:"اليوم كله",eventLimitText:"أخرى",noEventsMessage:"أي أحداث لعرض"},{code:"bg",week:{dow:1,doy:7},buttonText:{prev:"назад",next:"напред",today:"днес",month:"Месец",week:"Седмица",day:"Ден",list:"График"},allDayText:"Цял ден",eventLimitText:function(e){return"+още "+e},noEventsMessage:"Няма събития за показване"},{code:"bs",week:{dow:1,doy:7},buttonText:{prev:"Prošli",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Sedmica",day:"Dan",list:"Raspored"},weekLabel:"Sed",allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikazivanje"},{code:"ca",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Següent",today:"Avui",month:"Mes",week:"Setmana",day:"Dia",list:"Agenda"},weekLabel:"Set",allDayText:"Tot el dia",eventLimitText:"més",noEventsMessage:"No hi ha esdeveniments per mostrar"},{code:"cs",week:{dow:1,doy:4},buttonText:{prev:"Dříve",next:"Později",today:"Nyní",month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},weekLabel:"Týd",allDayText:"Celý den",eventLimitText:function(e){return"+další: "+e},noEventsMessage:"Žádné akce k zobrazení"},{code:"da",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Næste",today:"I dag",month:"Måned",week:"Uge",day:"Dag",list:"Agenda"},weekLabel:"Uge",allDayText:"Hele dagen",eventLimitText:"flere",noEventsMessage:"Ingen arrangementer at vise"},{code:"de",week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekLabel:"KW",allDayText:"Ganztägig",eventLimitText:function(e){return"+ weitere "+e},noEventsMessage:"Keine Ereignisse anzuzeigen"},{code:"el",week:{dow:1,doy:4},buttonText:{prev:"Προηγούμενος",next:"Επόμενος",today:"Σήμερα",month:"Μήνας",week:"Εβδομάδα",day:"Ημέρα",list:"Ατζέντα"},weekLabel:"Εβδ",allDayText:"Ολοήμερο",eventLimitText:"περισσότερα",noEventsMessage:"Δεν υπάρχουν γεγονότα για να εμφανιστεί"},{code:"en-au",week:{dow:1,doy:4}},{code:"en-gb",week:{dow:1,doy:4}},{code:"en-nz",week:{dow:1,doy:4}},{code:"es",week:{dow:0,doy:6},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"},{code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>el día",eventLimitText:"más",noEventsMessage:"No hay eventos para mostrar"},{code:"et",week:{dow:1,doy:4},buttonText:{prev:"Eelnev",next:"Järgnev",today:"Täna",month:"Kuu",week:"Nädal",day:"Päev",list:"Päevakord"},weekLabel:"näd",allDayText:"Kogu päev",eventLimitText:function(e){return"+ veel "+e},noEventsMessage:"Kuvamiseks puuduvad sündmused"},{code:"eu",week:{dow:1,doy:7},buttonText:{prev:"Aur",next:"Hur",today:"Gaur",month:"Hilabetea",week:"Astea",day:"Eguna",list:"Agenda"},weekLabel:"As",allDayHtml:"Egun<br/>osoa",eventLimitText:"gehiago",noEventsMessage:"Ez dago ekitaldirik erakusteko"},{code:"fa",week:{dow:6,doy:12},dir:"rtl",buttonText:{prev:"قبلی",next:"بعدی",today:"امروز",month:"ماه",week:"هفته",day:"روز",list:"برنامه"},weekLabel:"هف",allDayText:"تمام روز",eventLimitText:function(e){return"بیش از "+e},noEventsMessage:"هیچ رویدادی به نمایش"},{code:"fi",week:{dow:1,doy:4},buttonText:{prev:"Edellinen",next:"Seuraava",today:"Tänään",month:"Kuukausi",week:"Viikko",day:"Päivä",list:"Tapahtumat"},weekLabel:"Vk",allDayText:"Koko päivä",eventLimitText:"lisää",noEventsMessage:"Ei näytettäviä tapahtumia"},{code:"fr",buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sem.",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"},{code:"fr-ch",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Courant",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sm",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"},{code:"fr",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekLabel:"Sem.",allDayHtml:"Toute la<br/>journée",eventLimitText:"en plus",noEventsMessage:"Aucun événement à afficher"},{code:"gl",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Seg",today:"Hoxe",month:"Mes",week:"Semana",day:"Día",list:"Axenda"},weekLabel:"Sm",allDayHtml:"Todo<br/>o día",eventLimitText:"máis",noEventsMessage:"Non hai eventos para amosar"},{code:"he",dir:"rtl",buttonText:{prev:"הקודם",next:"הבא",today:"היום",month:"חודש",week:"שבוע",day:"יום",list:"סדר יום"},allDayText:"כל היום",eventLimitText:"אחר",noEventsMessage:"אין אירועים להצגה",weekLabel:"שבוע"},{code:"hi",week:{dow:0,doy:6},buttonText:{prev:"पिछला",next:"अगला",today:"आज",month:"महीना",week:"सप्ताह",day:"दिन",list:"कार्यसूची"},weekLabel:"हफ्ता",allDayText:"सभी दिन",eventLimitText:function(e){return"+अधिक "+e},noEventsMessage:"कोई घटनाओं को प्रदर्शित करने के लिए"},{code:"hr",week:{dow:1,doy:7},buttonText:{prev:"Prijašnji",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Tjedan",day:"Dan",list:"Raspored"},weekLabel:"Tje",allDayText:"Cijeli dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nema događaja za prikaz"},{code:"hu",week:{dow:1,doy:4},buttonText:{prev:"vissza",next:"előre",today:"ma",month:"Hónap",week:"Hét",day:"Nap",list:"Napló"},weekLabel:"Hét",allDayText:"Egész nap",eventLimitText:"további",noEventsMessage:"Nincs megjeleníthető esemény"},{code:"id",week:{dow:1,doy:7},buttonText:{prev:"mundur",next:"maju",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekLabel:"Mg",allDayHtml:"Sehari<br/>penuh",eventLimitText:"lebih",noEventsMessage:"Tidak ada acara untuk ditampilkan"},{code:"is",week:{dow:1,doy:4},buttonText:{prev:"Fyrri",next:"Næsti",today:"Í dag",month:"Mánuður",week:"Vika",day:"Dagur",list:"Dagskrá"},weekLabel:"Vika",allDayHtml:"Allan<br/>daginn",eventLimitText:"meira",noEventsMessage:"Engir viðburðir til að sýna"},{code:"it",week:{dow:1,doy:4},buttonText:{prev:"Prec",next:"Succ",today:"Oggi",month:"Mese",week:"Settimana",day:"Giorno",list:"Agenda"},weekLabel:"Sm",allDayHtml:"Tutto il<br/>giorno",eventLimitText:function(e){return"+altri "+e},noEventsMessage:"Non ci sono eventi da visualizzare"},{code:"ja",buttonText:{prev:"前",next:"次",today:"今日",month:"月",week:"週",day:"日",list:"予定リスト"},weekLabel:"週",allDayText:"終日",eventLimitText:function(e){return"他 "+e+" 件"},noEventsMessage:"表示する予定はありません"},{code:"ka",week:{dow:1,doy:7},buttonText:{prev:"წინა",next:"შემდეგი",today:"დღეს",month:"თვე",week:"კვირა",day:"დღე",list:"დღის წესრიგი"},weekLabel:"კვ",allDayText:"მთელი დღე",eventLimitText:function(e){return"+ კიდევ "+e},noEventsMessage:"ღონისძიებები არ არის"},{code:"kk",week:{dow:1,doy:7},buttonText:{prev:"Алдыңғы",next:"Келесі",today:"Бүгін",month:"Ай",week:"Апта",day:"Күн",list:"Күн тәртібі"},weekLabel:"Не",allDayText:"Күні бойы",eventLimitText:function(e){return"+ тағы "+e},noEventsMessage:"Көрсету үшін оқиғалар жоқ"},{code:"ko",buttonText:{prev:"이전달",next:"다음달",today:"오늘",month:"월",week:"주",day:"일",list:"일정목록"},weekLabel:"주",allDayText:"종일",eventLimitText:"개",noEventsMessage:"일정이 없습니다"},{code:"lb",week:{dow:1,doy:4},buttonText:{prev:"Zréck",next:"Weider",today:"Haut",month:"Mount",week:"Woch",day:"Dag",list:"Terminiwwersiicht"},weekLabel:"W",allDayText:"Ganzen Dag",eventLimitText:"méi",noEventsMessage:"Nee Evenementer ze affichéieren"},{code:"lt",week:{dow:1,doy:4},buttonText:{prev:"Atgal",next:"Pirmyn",today:"Šiandien",month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},weekLabel:"SAV",allDayText:"Visą dieną",eventLimitText:"daugiau",noEventsMessage:"Nėra įvykių rodyti"},{code:"lv",week:{dow:1,doy:4},buttonText:{prev:"Iepr.",next:"Nāk.",today:"Šodien",month:"Mēnesis",week:"Nedēļa",day:"Diena",list:"Dienas kārtība"},weekLabel:"Ned.",allDayText:"Visu dienu",eventLimitText:function(e){return"+vēl "+e},noEventsMessage:"Nav notikumu"},{code:"mk",buttonText:{prev:"претходно",next:"следно",today:"Денес",month:"Месец",week:"Недела",day:"Ден",list:"График"},weekLabel:"Сед",allDayText:"Цел ден",eventLimitText:function(e){return"+повеќе "+e},noEventsMessage:"Нема настани за прикажување"},{code:"ms",week:{dow:1,doy:7},buttonText:{prev:"Sebelum",next:"Selepas",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekLabel:"Mg",allDayText:"Sepanjang hari",eventLimitText:function(e){return"masih ada "+e+" acara"},noEventsMessage:"Tiada peristiwa untuk dipaparkan"},{code:"nb",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Neste",today:"I dag",month:"Måned",week:"Uke",day:"Dag",list:"Agenda"},weekLabel:"Uke",allDayText:"Hele dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"},{code:"nl",week:{dow:1,doy:4},buttonText:{prev:"Voorgaand",next:"Volgende",today:"Vandaag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",eventLimitText:"extra",noEventsMessage:"Geen evenementen om te laten zien"},{code:"nn",week:{dow:1,doy:4},buttonText:{prev:"Førre",next:"Neste",today:"I dag",month:"Månad",week:"Veke",day:"Dag",list:"Agenda"},weekLabel:"Veke",allDayText:"Heile dagen",eventLimitText:"til",noEventsMessage:"Ingen hendelser å vise"},{code:"pl",week:{dow:1,doy:4},buttonText:{prev:"Poprzedni",next:"Następny",today:"Dziś",month:"Miesiąc",week:"Tydzień",day:"Dzień",list:"Plan dnia"},weekLabel:"Tydz",allDayText:"Cały dzień",eventLimitText:"więcej",noEventsMessage:"Brak wydarzeń do wyświetlenia"},{code:"pt-br",buttonText:{prev:"Anterior",next:"Próximo",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Compromissos"},weekLabel:"Sm",allDayText:"dia inteiro",eventLimitText:function(e){return"mais +"+e},noEventsMessage:"Não há eventos para mostrar"},{code:"pt",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Seguinte",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Agenda"},weekLabel:"Sem",allDayText:"Todo o dia",eventLimitText:"mais",noEventsMessage:"Não há eventos para mostrar"},{code:"ro",week:{dow:1,doy:7},buttonText:{prev:"precedentă",next:"următoare",today:"Azi",month:"Lună",week:"Săptămână",day:"Zi",list:"Agendă"},weekLabel:"Săpt",allDayText:"Toată ziua",eventLimitText:function(e){return"+alte "+e},noEventsMessage:"Nu există evenimente de afișat"},{code:"ru",week:{dow:1,doy:4},buttonText:{prev:"Пред",next:"След",today:"Сегодня",month:"Месяц",week:"Неделя",day:"День",list:"Повестка дня"},weekLabel:"Нед",allDayText:"Весь день",eventLimitText:function(e){return"+ ещё "+e},noEventsMessage:"Нет событий для отображения"},{code:"sk",week:{dow:1,doy:4},buttonText:{prev:"Predchádzajúci",next:"Nasledujúci",today:"Dnes",month:"Mesiac",week:"Týždeň",day:"Deň",list:"Rozvrh"},weekLabel:"Ty",allDayText:"Celý deň",eventLimitText:function(e){return"+ďalšie: "+e},noEventsMessage:"Žiadne akcie na zobrazenie"},{code:"sl",week:{dow:1,doy:7},buttonText:{prev:"Prejšnji",next:"Naslednji",today:"Trenutni",month:"Mesec",week:"Teden",day:"Dan",list:"Dnevni red"},weekLabel:"Teden",allDayText:"Ves dan",eventLimitText:"več",noEventsMessage:"Ni dogodkov za prikaz"},{code:"sq",week:{dow:1,doy:4},buttonText:{prev:"mbrapa",next:"Përpara",today:"sot",month:"Muaj",week:"Javë",day:"Ditë",list:"Listë"},weekLabel:"Ja",allDayHtml:"Gjithë<br/>ditën",eventLimitText:function(e){return"+më tepër "+e},noEventsMessage:"Nuk ka evente për të shfaqur"},{code:"sr-cyrl",week:{dow:1,doy:7},buttonText:{prev:"Претходна",next:"следећи",today:"Данас",month:"Месец",week:"Недеља",day:"Дан",list:"Планер"},weekLabel:"Сед",allDayText:"Цео дан",eventLimitText:function(e){return"+ још "+e},noEventsMessage:"Нема догађаја за приказ"},{code:"sr",week:{dow:1,doy:7},buttonText:{prev:"Prethodna",next:"Sledeći",today:"Danas",month:"Mеsеc",week:"Nеdеlja",day:"Dan",list:"Planеr"},weekLabel:"Sed",allDayText:"Cеo dan",eventLimitText:function(e){return"+ još "+e},noEventsMessage:"Nеma događaja za prikaz"},{code:"sv",week:{dow:1,doy:4},buttonText:{prev:"Förra",next:"Nästa",today:"Idag",month:"Månad",week:"Vecka",day:"Dag",list:"Program"},weekLabel:"v.",allDayText:"Heldag",eventLimitText:"till",noEventsMessage:"Inga händelser att visa"},{code:"th",buttonText:{prev:"ย้อน",next:"ถัดไป",today:"วันนี้",month:"เดือน",week:"สัปดาห์",day:"วัน",list:"แผนงาน"},allDayText:"ตลอดวัน",eventLimitText:"เพิ่มเติม",noEventsMessage:"ไม่มีกิจกรรมที่จะแสดง"},{code:"tr",week:{dow:1,doy:7},buttonText:{prev:"geri",next:"ileri",today:"bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},weekLabel:"Hf",allDayText:"Tüm gün",eventLimitText:"daha fazla",noEventsMessage:"Gösterilecek etkinlik yok"},{code:"uk",week:{dow:1,doy:7},buttonText:{prev:"Попередній",next:"далі",today:"Сьогодні",month:"Місяць",week:"Тиждень",day:"День",list:"Порядок денний"},weekLabel:"Тиж",allDayText:"Увесь день",eventLimitText:function(e){return"+ще "+e+"..."},noEventsMessage:"Немає подій для відображення"},{code:"vi",week:{dow:1,doy:4},buttonText:{prev:"Trước",next:"Tiếp",today:"Hôm nay",month:"Tháng",week:"Tuần",day:"Ngày",list:"Lịch biểu"},weekLabel:"Tu",allDayText:"Cả ngày",eventLimitText:function(e){return"+ thêm "+e},noEventsMessage:"Không có sự kiện để hiển thị"},{code:"zh-cn",week:{dow:1,doy:4},buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"周",day:"日",list:"日程"},weekLabel:"周",allDayText:"全天",eventLimitText:function(e){return"另外 "+e+" 个"},noEventsMessage:"没有事件显示"},{code:"zh-tw",buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"週",day:"天",list:"活動列表"},weekLabel:"周",allDayText:"整天",eventLimitText:"顯示更多",noEventsMessage:"没有任何活動"}]});//! moment.js
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
    return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});
/*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.FullCalendar = {}));
}(this, function (exports) { 'use strict';
    var elementPropHash = {
        className: true,
        colSpan: true,
        rowSpan: true
    };
    var containerTagHash = {
        '<tr': 'tbody',
        '<td': 'tr'
    };
    function createElement(tagName, attrs, content) {
        var el = document.createElement(tagName);
        if (attrs) {
            for (var attrName in attrs) {
                if (attrName === 'style') {
                    applyStyle(el, attrs[attrName]);
                }
                else if (elementPropHash[attrName]) {
                    el[attrName] = attrs[attrName];
                }
                else {
                    el.setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        if (typeof content === 'string') {
            el.innerHTML = content; // shortcut. no need to process HTML in any way
        }
        else if (content != null) {
            appendToElement(el, content);
        }
        return el;
    }
    function htmlToElement(html) {
        html = html.trim();
        var container = document.createElement(computeContainerTag(html));
        container.innerHTML = html;
        return container.firstChild;
    }
    function htmlToElements(html) {
        return Array.prototype.slice.call(htmlToNodeList(html));
    }
    function htmlToNodeList(html) {
        html = html.trim();
        var container = document.createElement(computeContainerTag(html));
        container.innerHTML = html;
        return container.childNodes;
    }
    function computeContainerTag(html) {
        return containerTagHash[html.substr(0, 3) // faster than using regex
        ] || 'div';
    }
    function appendToElement(el, content) {
        var childNodes = normalizeContent(content);
        for (var i = 0; i < childNodes.length; i++) {
            el.appendChild(childNodes[i]);
        }
    }
    function prependToElement(parent, content) {
        var newEls = normalizeContent(content);
        var afterEl = parent.firstChild || null; // if no firstChild, will append to end, but that's okay, b/c there were no children
        for (var i = 0; i < newEls.length; i++) {
            parent.insertBefore(newEls[i], afterEl);
        }
    }
    function insertAfterElement(refEl, content) {
        var newEls = normalizeContent(content);
        var afterEl = refEl.nextSibling || null;
        for (var i = 0; i < newEls.length; i++) {
            refEl.parentNode.insertBefore(newEls[i], afterEl);
        }
    }
    function normalizeContent(content) {
        var els;
        if (typeof content === 'string') {
            els = htmlToElements(content);
        }
        else if (content instanceof Node) {
            els = [content];
        }
        else { // Node[] or NodeList
            els = Array.prototype.slice.call(content);
        }
        return els;
    }
    function removeElement(el) {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    var matchesMethod = Element.prototype.matches ||
        Element.prototype.matchesSelector ||
        Element.prototype.msMatchesSelector;
    var closestMethod = Element.prototype.closest || function (selector) {
        var el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (elementMatches(el, selector)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
    function elementClosest(el, selector) {
        return closestMethod.call(el, selector);
    }
    function elementMatches(el, selector) {
        return matchesMethod.call(el, selector);
    }
    function findElements(container, selector) {
        var containers = container instanceof HTMLElement ? [container] : container;
        var allMatches = [];
        for (var i = 0; i < containers.length; i++) {
            var matches = containers[i].querySelectorAll(selector);
            for (var j = 0; j < matches.length; j++) {
                allMatches.push(matches[j]);
            }
        }
        return allMatches;
    }
    function findChildren(parent, selector) {
        var parents = parent instanceof HTMLElement ? [parent] : parent;
        var allMatches = [];
        for (var i = 0; i < parents.length; i++) {
            var childNodes = parents[i].children; // only ever elements
            for (var j = 0; j < childNodes.length; j++) {
                var childNode = childNodes[j];
                if (!selector || elementMatches(childNode, selector)) {
                    allMatches.push(childNode);
                }
            }
        }
        return allMatches;
    }
    function forceClassName(el, className, bool) {
        if (bool) {
            el.classList.add(className);
        }
        else {
            el.classList.remove(className);
        }
    }
    var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
    function applyStyle(el, props) {
        for (var propName in props) {
            applyStyleProp(el, propName, props[propName]);
        }
    }
    function applyStyleProp(el, name, val) {
        if (val == null) {
            el.style[name] = '';
        }
        else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
            el.style[name] = val + 'px';
        }
        else {
            el.style[name] = val;
        }
    }
    function pointInsideRect(point, rect) {
        return point.left >= rect.left &&
            point.left < rect.right &&
            point.top >= rect.top &&
            point.top < rect.bottom;
    }
    function intersectRects(rect1, rect2) {
        var res = {
            left: Math.max(rect1.left, rect2.left),
            right: Math.min(rect1.right, rect2.right),
            top: Math.max(rect1.top, rect2.top),
            bottom: Math.min(rect1.bottom, rect2.bottom)
        };
        if (res.left < res.right && res.top < res.bottom) {
            return res;
        }
        return false;
    }
    function translateRect(rect, deltaX, deltaY) {
        return {
            left: rect.left + deltaX,
            right: rect.right + deltaX,
            top: rect.top + deltaY,
            bottom: rect.bottom + deltaY
        };
    }
    function constrainPoint(point, rect) {
        return {
            left: Math.min(Math.max(point.left, rect.left), rect.right),
            top: Math.min(Math.max(point.top, rect.top), rect.bottom)
        };
    }
    function getRectCenter(rect) {
        return {
            left: (rect.left + rect.right) / 2,
            top: (rect.top + rect.bottom) / 2
        };
    }
    function diffPoints(point1, point2) {
        return {
            left: point1.left - point2.left,
            top: point1.top - point2.top
        };
    }
    var isRtlScrollbarOnLeft = null;
    function getIsRtlScrollbarOnLeft() {
        if (isRtlScrollbarOnLeft === null) {
            isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
        }
        return isRtlScrollbarOnLeft;
    }
    function computeIsRtlScrollbarOnLeft() {
        var outerEl = createElement('div', {
            style: {
                position: 'absolute',
                top: -1000,
                left: 0,
                border: 0,
                padding: 0,
                overflow: 'scroll',
                direction: 'rtl'
            }
        }, '<div></div>');
        document.body.appendChild(outerEl);
        var innerEl = outerEl.firstChild;
        var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
        removeElement(outerEl);
        return res;
    }
    function sanitizeScrollbarWidth(width) {
        width = Math.max(0, width); // no negatives
        width = Math.round(width);
        return width;
    }
    function computeEdges(el, getPadding) {
        if (getPadding === void 0) { getPadding = false; }
        var computedStyle = window.getComputedStyle(el);
        var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
        var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
        var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
        var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
        var scrollbarLeftRight = sanitizeScrollbarWidth(el.offsetWidth - el.clientWidth - borderLeft - borderRight);
        var scrollbarBottom = sanitizeScrollbarWidth(el.offsetHeight - el.clientHeight - borderTop - borderBottom);
        var res = {
            borderLeft: borderLeft,
            borderRight: borderRight,
            borderTop: borderTop,
            borderBottom: borderBottom,
            scrollbarBottom: scrollbarBottom,
            scrollbarLeft: 0,
            scrollbarRight: 0
        };
        if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
            res.scrollbarLeft = scrollbarLeftRight;
        }
        else {
            res.scrollbarRight = scrollbarLeftRight;
        }
        if (getPadding) {
            res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
            res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
            res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
            res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
        }
        return res;
    }
    function computeInnerRect(el, goWithinPadding) {
        if (goWithinPadding === void 0) { goWithinPadding = false; }
        var outerRect = computeRect(el);
        var edges = computeEdges(el, goWithinPadding);
        var res = {
            left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
            right: outerRect.right - edges.borderRight - edges.scrollbarRight,
            top: outerRect.top + edges.borderTop,
            bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
        };
        if (goWithinPadding) {
            res.left += edges.paddingLeft;
            res.right -= edges.paddingRight;
            res.top += edges.paddingTop;
            res.bottom -= edges.paddingBottom;
        }
        return res;
    }
    function computeRect(el) {
        var rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset
        };
    }
    function computeViewportRect() {
        return {
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
    }
    function computeHeightAndMargins(el) {
        return el.getBoundingClientRect().height + computeVMargins(el);
    }
    function computeVMargins(el) {
        var computed = window.getComputedStyle(el);
        return parseInt(computed.marginTop, 10) +
            parseInt(computed.marginBottom, 10);
    }
    function getClippingParents(el) {
        var parents = [];
        while (el instanceof HTMLElement) { // will stop when gets to document or null
            var computedStyle = window.getComputedStyle(el);
            if (computedStyle.position === 'fixed') {
                break;
            }
            if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
                parents.push(el);
            }
            el = el.parentNode;
        }
        return parents;
    }
    function computeClippingRect(el) {
        return getClippingParents(el)
            .map(function (el) {
            return computeInnerRect(el);
        })
            .concat(computeViewportRect())
            .reduce(function (rect0, rect1) {
            return intersectRects(rect0, rect1) || rect1; // should always intersect
        });
    }
    function preventDefault(ev) {
        ev.preventDefault();
    }
    function listenBySelector(container, eventType, selector, handler) {
        function realHandler(ev) {
            var matchedChild = elementClosest(ev.target, selector);
            if (matchedChild) {
                handler.call(matchedChild, ev, matchedChild);
            }
        }
        container.addEventListener(eventType, realHandler);
        return function () {
            container.removeEventListener(eventType, realHandler);
        };
    }
    function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
        var currentMatchedChild;
        return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
            if (matchedChild !== currentMatchedChild) {
                currentMatchedChild = matchedChild;
                onMouseEnter(ev, matchedChild);
                var realOnMouseLeave_1 = function (ev) {
                    currentMatchedChild = null;
                    onMouseLeave(ev, matchedChild);
                    matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
                };
                matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
            }
        });
    }
    var transitionEventNames = [
        'webkitTransitionEnd',
        'otransitionend',
        'oTransitionEnd',
        'msTransitionEnd',
        'transitionend'
    ];
    function whenTransitionDone(el, callback) {
        var realCallback = function (ev) {
            callback(ev);
            transitionEventNames.forEach(function (eventName) {
                el.removeEventListener(eventName, realCallback);
            });
        };
        transitionEventNames.forEach(function (eventName) {
            el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
        });
    }
    var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    function addWeeks(m, n) {
        var a = dateToUtcArray(m);
        a[2] += n * 7;
        return arrayToUtcDate(a);
    }
    function addDays(m, n) {
        var a = dateToUtcArray(m);
        a[2] += n;
        return arrayToUtcDate(a);
    }
    function addMs(m, n) {
        var a = dateToUtcArray(m);
        a[6] += n;
        return arrayToUtcDate(a);
    }
    function diffWeeks(m0, m1) {
        return diffDays(m0, m1) / 7;
    }
    function diffDays(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
    }
    function diffHours(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
    }
    function diffMinutes(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
    }
    function diffSeconds(m0, m1) {
        return (m1.valueOf() - m0.valueOf()) / 1000;
    }
    function diffDayAndTime(m0, m1) {
        var m0day = startOfDay(m0);
        var m1day = startOfDay(m1);
        return {
            years: 0,
            months: 0,
            days: Math.round(diffDays(m0day, m1day)),
            milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf())
        };
    }
    function diffWholeWeeks(m0, m1) {
        var d = diffWholeDays(m0, m1);
        if (d !== null && d % 7 === 0) {
            return d / 7;
        }
        return null;
    }
    function diffWholeDays(m0, m1) {
        if (timeAsMs(m0) === timeAsMs(m1)) {
            return Math.round(diffDays(m0, m1));
        }
        return null;
    }
    function startOfDay(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate()
        ]);
    }
    function startOfHour(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours()
        ]);
    }
    function startOfMinute(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes()
        ]);
    }
    function startOfSecond(m) {
        return arrayToUtcDate([
            m.getUTCFullYear(),
            m.getUTCMonth(),
            m.getUTCDate(),
            m.getUTCHours(),
            m.getUTCMinutes(),
            m.getUTCSeconds()
        ]);
    }
    function weekOfYear(marker, dow, doy) {
        var y = marker.getUTCFullYear();
        var w = weekOfGivenYear(marker, y, dow, doy);
        if (w < 1) {
            return weekOfGivenYear(marker, y - 1, dow, doy);
        }
        var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
        if (nextW >= 1) {
            return Math.min(w, nextW);
        }
        return w;
    }
    function weekOfGivenYear(marker, year, dow, doy) {
        var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
        var dayStart = startOfDay(marker);
        var days = Math.round(diffDays(firstWeekStart, dayStart));
        return Math.floor(days / 7) + 1; // zero-indexed
    }
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy;
        var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    function dateToLocalArray(date) {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
    }
    function arrayToLocalDate(a) {
        return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
        a[3] || 0, a[4] || 0, a[5] || 0);
    }
    function dateToUtcArray(date) {
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds()
        ];
    }
    function arrayToUtcDate(a) {
        if (a.length === 1) {
            a = a.concat([0]);
        }
        return new Date(Date.UTC.apply(Date, a));
    }
    function isValidDate(m) {
        return !isNaN(m.valueOf());
    }
    function timeAsMs(m) {
        return m.getUTCHours() * 1000 * 60 * 60 +
            m.getUTCMinutes() * 1000 * 60 +
            m.getUTCSeconds() * 1000 +
            m.getUTCMilliseconds();
    }
    var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
    var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function createDuration(input, unit) {
        var _a;
        if (typeof input === 'string') {
            return parseString(input);
        }
        else if (typeof input === 'object' && input) { // non-null object
            return normalizeObject(input);
        }
        else if (typeof input === 'number') {
            return normalizeObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
        }
        else {
            return null;
        }
    }
    function parseString(s) {
        var m = PARSE_RE.exec(s);
        if (m) {
            var sign = m[1] ? -1 : 1;
            return {
                years: 0,
                months: 0,
                days: sign * (m[2] ? parseInt(m[2], 10) : 0),
                milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                    (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                    (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                    (m[6] ? parseInt(m[6], 10) : 0) // ms
                )
            };
        }
        return null;
    }
    function normalizeObject(obj) {
        return {
            years: obj.years || obj.year || 0,
            months: obj.months || obj.month || 0,
            days: (obj.days || obj.day || 0) +
                getWeeksFromInput(obj) * 7,
            milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
                (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
                (obj.seconds || obj.second || 0) * 1000 + // seconds
                (obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
        };
    }
    function getWeeksFromInput(obj) {
        return obj.weeks || obj.week || 0;
    }
    function durationsEqual(d0, d1) {
        return d0.years === d1.years &&
            d0.months === d1.months &&
            d0.days === d1.days &&
            d0.milliseconds === d1.milliseconds;
    }
    function isSingleDay(dur) {
        return dur.years === 0 && dur.months === 0 && dur.days === 1 && dur.milliseconds === 0;
    }
    function addDurations(d0, d1) {
        return {
            years: d0.years + d1.years,
            months: d0.months + d1.months,
            days: d0.days + d1.days,
            milliseconds: d0.milliseconds + d1.milliseconds
        };
    }
    function subtractDurations(d1, d0) {
        return {
            years: d1.years - d0.years,
            months: d1.months - d0.months,
            days: d1.days - d0.days,
            milliseconds: d1.milliseconds - d0.milliseconds
        };
    }
    function multiplyDuration(d, n) {
        return {
            years: d.years * n,
            months: d.months * n,
            days: d.days * n,
            milliseconds: d.milliseconds * n
        };
    }
    function asRoughYears(dur) {
        return asRoughDays(dur) / 365;
    }
    function asRoughMonths(dur) {
        return asRoughDays(dur) / 30;
    }
    function asRoughDays(dur) {
        return asRoughMs(dur) / 864e5;
    }
    function asRoughMinutes(dur) {
        return asRoughMs(dur) / (1000 * 60);
    }
    function asRoughSeconds(dur) {
        return asRoughMs(dur) / 1000;
    }
    function asRoughMs(dur) {
        return dur.years * (365 * 864e5) +
            dur.months * (30 * 864e5) +
            dur.days * 864e5 +
            dur.milliseconds;
    }
    function wholeDivideDurations(numerator, denominator) {
        var res = null;
        for (var i = 0; i < INTERNAL_UNITS.length; i++) {
            var unit = INTERNAL_UNITS[i];
            if (denominator[unit]) {
                var localRes = numerator[unit] / denominator[unit];
                if (!isInt(localRes) || (res !== null && res !== localRes)) {
                    return null;
                }
                res = localRes;
            }
            else if (numerator[unit]) {
                return null;
            }
        }
        return res;
    }
    function greatestDurationDenominator(dur, dontReturnWeeks) {
        var ms = dur.milliseconds;
        if (ms) {
            if (ms % 1000 !== 0) {
                return { unit: 'millisecond', value: ms };
            }
            if (ms % (1000 * 60) !== 0) {
                return { unit: 'second', value: ms / 1000 };
            }
            if (ms % (1000 * 60 * 60) !== 0) {
                return { unit: 'minute', value: ms / (1000 * 60) };
            }
            if (ms) {
                return { unit: 'hour', value: ms / (1000 * 60 * 60) };
            }
        }
        if (dur.days) {
            if (!dontReturnWeeks && dur.days % 7 === 0) {
                return { unit: 'week', value: dur.days / 7 };
            }
            return { unit: 'day', value: dur.days };
        }
        if (dur.months) {
            return { unit: 'month', value: dur.months };
        }
        if (dur.years) {
            return { unit: 'year', value: dur.years };
        }
        return { unit: 'millisecond', value: 0 };
    }
    /* FullCalendar-specific DOM Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function compensateScroll(rowEl, scrollbarWidths) {
        if (scrollbarWidths.left) {
            applyStyle(rowEl, {
                borderLeftWidth: 1,
                marginLeft: scrollbarWidths.left - 1
            });
        }
        if (scrollbarWidths.right) {
            applyStyle(rowEl, {
                borderRightWidth: 1,
                marginRight: scrollbarWidths.right - 1
            });
        }
    }
    function uncompensateScroll(rowEl) {
        applyStyle(rowEl, {
            marginLeft: '',
            marginRight: '',
            borderLeftWidth: '',
            borderRightWidth: ''
        });
    }
    function disableCursor() {
        document.body.classList.add('fc-not-allowed');
    }
    function enableCursor() {
        document.body.classList.remove('fc-not-allowed');
    }
    function distributeHeight(els, availableHeight, shouldRedistribute) {
        var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
        var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
        var flexEls = []; // elements that are allowed to expand. array of DOM nodes
        var flexOffsets = []; // amount of vertical space it takes up
        var flexHeights = []; // actual css height
        var usedHeight = 0;
        undistributeHeight(els); // give all elements their natural height
        els.forEach(function (el, i) {
            var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
            var naturalHeight = el.getBoundingClientRect().height;
            var naturalOffset = naturalHeight + computeVMargins(el);
            if (naturalOffset < minOffset) {
                flexEls.push(el);
                flexOffsets.push(naturalOffset);
                flexHeights.push(naturalHeight);
            }
            else {
                usedHeight += naturalOffset;
            }
        });
        if (shouldRedistribute) {
            availableHeight -= usedHeight;
            minOffset1 = Math.floor(availableHeight / flexEls.length);
            minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
        }
        flexEls.forEach(function (el, i) {
            var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
            var naturalOffset = flexOffsets[i];
            var naturalHeight = flexHeights[i];
            var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding
            if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
                el.style.height = newHeight + 'px';
            }
        });
    }
    function undistributeHeight(els) {
        els.forEach(function (el) {
            el.style.height = '';
        });
    }
    function matchCellWidths(els) {
        var maxInnerWidth = 0;
        els.forEach(function (el) {
            var innerEl = el.firstChild; // hopefully an element
            if (innerEl instanceof HTMLElement) {
                var innerWidth_1 = innerEl.getBoundingClientRect().width;
                if (innerWidth_1 > maxInnerWidth) {
                    maxInnerWidth = innerWidth_1;
                }
            }
        });
        maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance
        els.forEach(function (el) {
            el.style.width = maxInnerWidth + 'px';
        });
        return maxInnerWidth;
    }
    function subtractInnerElHeight(outerEl, innerEl) {
        var reflowStyleProps = {
            position: 'relative',
            left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
        };
        applyStyle(outerEl, reflowStyleProps);
        applyStyle(innerEl, reflowStyleProps);
        var diff = // grab the dimensions
         outerEl.getBoundingClientRect().height -
            innerEl.getBoundingClientRect().height;
        var resetStyleProps = { position: '', left: '' };
        applyStyle(outerEl, resetStyleProps);
        applyStyle(innerEl, resetStyleProps);
        return diff;
    }
    /* Selection
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventSelection(el) {
        el.classList.add('fc-unselectable');
        el.addEventListener('selectstart', preventDefault);
    }
    function allowSelection(el) {
        el.classList.remove('fc-unselectable');
        el.removeEventListener('selectstart', preventDefault);
    }
    /* Context Menu
    ----------------------------------------------------------------------------------------------------------------------*/
    function preventContextMenu(el) {
        el.addEventListener('contextmenu', preventDefault);
    }
    function allowContextMenu(el) {
        el.removeEventListener('contextmenu', preventDefault);
    }
    /* Object Ordering by Field
    ----------------------------------------------------------------------------------------------------------------------*/
    function parseFieldSpecs(input) {
        var specs = [];
        var tokens = [];
        var i;
        var token;
        if (typeof input === 'string') {
            tokens = input.split(/\s*,\s*/);
        }
        else if (typeof input === 'function') {
            tokens = [input];
        }
        else if (Array.isArray(input)) {
            tokens = input;
        }
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            if (typeof token === 'string') {
                specs.push(token.charAt(0) === '-' ?
                    { field: token.substring(1), order: -1 } :
                    { field: token, order: 1 });
            }
            else if (typeof token === 'function') {
                specs.push({ func: token });
            }
        }
        return specs;
    }
    function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
        var i;
        var cmp;
        for (i = 0; i < fieldSpecs.length; i++) {
            cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
            if (cmp) {
                return cmp;
            }
        }
        return 0;
    }
    function compareByFieldSpec(obj0, obj1, fieldSpec) {
        if (fieldSpec.func) {
            return fieldSpec.func(obj0, obj1);
        }
        return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
            * (fieldSpec.order || 1);
    }
    function flexibleCompare(a, b) {
        if (!a && !b) {
            return 0;
        }
        if (b == null) {
            return -1;
        }
        if (a == null) {
            return 1;
        }
        if (typeof a === 'string' || typeof b === 'string') {
            return String(a).localeCompare(String(b));
        }
        return a - b;
    }
    /* String Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function capitaliseFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function padStart(val, len) {
        var s = String(val);
        return '000'.substr(0, len - s.length) + s;
    }
    /* Number Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function compareNumbers(a, b) {
        return a - b;
    }
    function isInt(n) {
        return n % 1 === 0;
    }
    /* Weird Utilities
    ----------------------------------------------------------------------------------------------------------------------*/
    function applyAll(functions, thisObj, args) {
        if (typeof functions === 'function') { // supplied a single function
            functions = [functions];
        }
        if (functions) {
            var i = void 0;
            var ret = void 0;
            for (i = 0; i < functions.length; i++) {
                ret = functions[i].apply(thisObj, args) || ret;
            }
            return ret;
        }
    }
    function firstDefined() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            if (args[i] !== undefined) {
                return args[i];
            }
        }
    }
    function debounce(func, wait) {
        var timeout;
        var args;
        var context;
        var timestamp;
        var result;
        var later = function () {
            var last = new Date().valueOf() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                result = func.apply(context, args);
                context = args = null;
            }
        };
        return function () {
            context = this;
            args = arguments;
            timestamp = new Date().valueOf();
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            return result;
        };
    }
    function refineProps(rawProps, processors, defaults, leftoverProps) {
        if (defaults === void 0) { defaults = {}; }
        var refined = {};
        for (var key in processors) {
            var processor = processors[key];
            if (rawProps[key] !== undefined) {
                if (processor === Function) {
                    refined[key] = typeof rawProps[key] === 'function' ? rawProps[key] : null;
                }
                else if (processor) { // a refining function?
                    refined[key] = processor(rawProps[key]);
                }
                else {
                    refined[key] = rawProps[key];
                }
            }
            else if (defaults[key] !== undefined) {
                refined[key] = defaults[key];
            }
            else {
                if (processor === String) {
                    refined[key] = ''; // empty string is default for String
                }
                else if (!processor || processor === Number || processor === Boolean || processor === Function) {
                    refined[key] = null; // assign null for other non-custom processor funcs
                }
                else {
                    refined[key] = processor(null); // run the custom processor func
                }
            }
        }
        if (leftoverProps) {
            for (var key in rawProps) {
                if (processors[key] === undefined) {
                    leftoverProps[key] = rawProps[key];
                }
            }
        }
        return refined;
    }
    /* Date stuff that doesn't belong in datelib core
    ----------------------------------------------------------------------------------------------------------------------*/
    function computeAlignedDayRange(timedRange) {
        var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
        var start = startOfDay(timedRange.start);
        var end = addDays(start, dayCnt);
        return { start: start, end: end };
    }
    function computeVisibleDayRange(timedRange, nextDayThreshold) {
        if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
        var startDay = null;
        var endDay = null;
        if (timedRange.end) {
            endDay = startOfDay(timedRange.end);
            var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
            if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
                endDay = addDays(endDay, 1);
            }
        }
        if (timedRange.start) {
            startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
            if (endDay && endDay <= startDay) {
                endDay = addDays(startDay, 1);
            }
        }
        return { start: startDay, end: endDay };
    }
    function isMultiDayRange(range) {
        var visibleRange = computeVisibleDayRange(range);
        return diffDays(visibleRange.start, visibleRange.end) > 1;
    }
    function diffDates(date0, date1, dateEnv, largeUnit) {
        if (largeUnit === 'year') {
            return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
        }
        else if (largeUnit === 'month') {
            return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
        }
        else {
            return diffDayAndTime(date0, date1); // returns a duration
        }
    }
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function parseRecurring(eventInput, allDayDefault, dateEnv, recurringTypes, leftovers) {
        for (var i = 0; i < recurringTypes.length; i++) {
            var localLeftovers = {};
            var parsed = recurringTypes[i].parse(eventInput, localLeftovers, dateEnv);
            if (parsed) {
                var allDay = localLeftovers.allDay;
                delete localLeftovers.allDay; // remove from leftovers
                if (allDay == null) {
                    allDay = allDayDefault;
                    if (allDay == null) {
                        allDay = parsed.allDayGuess;
                        if (allDay == null) {
                            allDay = false;
                        }
                    }
                }
                __assign(leftovers, localLeftovers);
                return {
                    allDay: allDay,
                    duration: parsed.duration,
                    typeData: parsed.typeData,
                    typeId: i
                };
            }
        }
        return null;
    }
    /*
    Event MUST have a recurringDef
    */
    function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
        var typeDef = recurringTypes[eventDef.recurringDef.typeId];
        var markers = typeDef.expand(eventDef.recurringDef.typeData, {
            start: dateEnv.subtract(framingRange.start, duration),
            end: framingRange.end
        }, dateEnv);
        if (eventDef.allDay) {
            markers = markers.map(startOfDay);
        }
        return markers;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function mergeProps(propObjs, complexProps) {
        var dest = {};
        var i;
        var name;
        var complexObjs;
        var j;
        var val;
        var props;
        if (complexProps) {
            for (i = 0; i < complexProps.length; i++) {
                name = complexProps[i];
                complexObjs = [];
                for (j = propObjs.length - 1; j >= 0; j--) {
                    val = propObjs[j][name];
                    if (typeof val === 'object' && val) { // non-null object
                        complexObjs.unshift(val);
                    }
                    else if (val !== undefined) {
                        dest[name] = val; // if there were no objects, this value will be used
                        break;
                    }
                }
                if (complexObjs.length) {
                    dest[name] = mergeProps(complexObjs);
                }
            }
        }
        for (i = propObjs.length - 1; i >= 0; i--) {
            props = propObjs[i];
            for (name in props) {
                if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                    dest[name] = props[name];
                }
            }
        }
        return dest;
    }
    function filterHash(hash, func) {
        var filtered = {};
        for (var key in hash) {
            if (func(hash[key], key)) {
                filtered[key] = hash[key];
            }
        }
        return filtered;
    }
    function mapHash(hash, func) {
        var newHash = {};
        for (var key in hash) {
            newHash[key] = func(hash[key], key);
        }
        return newHash;
    }
    function arrayToHash(a) {
        var hash = {};
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var item = a_1[_i];
            hash[item] = true;
        }
        return hash;
    }
    function hashValuesToArray(obj) {
        var a = [];
        for (var key in obj) {
            a.push(obj[key]);
        }
        return a;
    }
    function isPropsEqual(obj0, obj1) {
        for (var key in obj0) {
            if (hasOwnProperty.call(obj0, key)) {
                if (!(key in obj1)) {
                    return false;
                }
            }
        }
        for (var key in obj1) {
            if (hasOwnProperty.call(obj1, key)) {
                if (obj0[key] !== obj1[key]) {
                    return false;
                }
            }
        }
        return true;
    }
    function parseEvents(rawEvents, sourceId, calendar, allowOpenRange) {
        var eventStore = createEmptyEventStore();
        for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
            var rawEvent = rawEvents_1[_i];
            var tuple = parseEvent(rawEvent, sourceId, calendar, allowOpenRange);
            if (tuple) {
                eventTupleToStore(tuple, eventStore);
            }
        }
        return eventStore;
    }
    function eventTupleToStore(tuple, eventStore) {
        if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
        eventStore.defs[tuple.def.defId] = tuple.def;
        if (tuple.instance) {
            eventStore.instances[tuple.instance.instanceId] = tuple.instance;
        }
        return eventStore;
    }
    function expandRecurring(eventStore, framingRange, calendar) {
        var dateEnv = calendar.dateEnv;
        var defs = eventStore.defs, instances = eventStore.instances;
        instances = filterHash(instances, function (instance) {
            return !defs[instance.defId].recurringDef;
        });
        for (var defId in defs) {
            var def = defs[defId];
            if (def.recurringDef) {
                var duration = def.recurringDef.duration;
                if (!duration) {
                    duration = def.allDay ?
                        calendar.defaultAllDayEventDuration :
                        calendar.defaultTimedEventDuration;
                }
                var starts = expandRecurringRanges(def, duration, framingRange, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes);
                for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                    var start = starts_1[_i];
                    var instance = createEventInstance(defId, {
                        start: start,
                        end: dateEnv.add(start, duration)
                    });
                    instances[instance.instanceId] = instance;
                }
            }
        }
        return { defs: defs, instances: instances };
    }
    function getRelevantEvents(eventStore, instanceId) {
        var instance = eventStore.instances[instanceId];
        if (instance) {
            var def_1 = eventStore.defs[instance.defId];
            var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
                return isEventDefsGrouped(def_1, lookDef);
            });
            newStore.defs[def_1.defId] = def_1;
            newStore.instances[instance.instanceId] = instance;
            return newStore;
        }
        return createEmptyEventStore();
    }
    function isEventDefsGrouped(def0, def1) {
        return Boolean(def0.groupId && def0.groupId === def1.groupId);
    }
    function transformRawEvents(rawEvents, eventSource, calendar) {
        var calEachTransform = calendar.opt('eventDataTransform');
        var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
        if (sourceEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
        }
        if (calEachTransform) {
            rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
        }
        return rawEvents;
    }
    function transformEachRawEvent(rawEvents, func) {
        var refinedEvents;
        if (!func) {
            refinedEvents = rawEvents;
        }
        else {
            refinedEvents = [];
            for (var _i = 0, rawEvents_2 = rawEvents; _i < rawEvents_2.length; _i++) {
                var rawEvent = rawEvents_2[_i];
                var refinedEvent = func(rawEvent);
                if (refinedEvent) {
                    refinedEvents.push(refinedEvent);
                }
                else if (refinedEvent == null) {
                    refinedEvents.push(rawEvent);
                } // if a different falsy value, do nothing
            }
        }
        return refinedEvents;
    }
    function createEmptyEventStore() {
        return { defs: {}, instances: {} };
    }
    function mergeEventStores(store0, store1) {
        return {
            defs: __assign({}, store0.defs, store1.defs),
            instances: __assign({}, store0.instances, store1.instances)
        };
    }
    function filterEventStoreDefs(eventStore, filterFunc) {
        var defs = filterHash(eventStore.defs, filterFunc);
        var instances = filterHash(eventStore.instances, function (instance) {
            return defs[instance.defId]; // still exists?
        });
        return { defs: defs, instances: instances };
    }
    function parseRange(input, dateEnv) {
        var start = null;
        var end = null;
        if (input.start) {
            start = dateEnv.createMarker(input.start);
        }
        if (input.end) {
            end = dateEnv.createMarker(input.end);
        }
        if (!start && !end) {
            return null;
        }
        if (start && end && end < start) {
            return null;
        }
        return { start: start, end: end };
    }
    function invertRanges(ranges, constraintRange) {
        var invertedRanges = [];
        var start = constraintRange.start; // the end of the previous range. the start of the new range
        var i;
        var dateRange;
        ranges.sort(compareRanges);
        for (i = 0; i < ranges.length; i++) {
            dateRange = ranges[i];
            if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
                invertedRanges.push({ start: start, end: dateRange.start });
            }
            if (dateRange.end > start) {
                start = dateRange.end;
            }
        }
        if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: constraintRange.end });
        }
        return invertedRanges;
    }
    function compareRanges(range0, range1) {
        return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
    }
    function intersectRanges(range0, range1) {
        var start = range0.start;
        var end = range0.end;
        var newRange = null;
        if (range1.start !== null) {
            if (start === null) {
                start = range1.start;
            }
            else {
                start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
            }
        }
        if (range1.end != null) {
            if (end === null) {
                end = range1.end;
            }
            else {
                end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
            }
        }
        if (start === null || end === null || start < end) {
            newRange = { start: start, end: end };
        }
        return newRange;
    }
    function rangesEqual(range0, range1) {
        return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
            (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
    }
    function rangesIntersect(range0, range1) {
        return (range0.end === null || range1.start === null || range0.end > range1.start) &&
            (range0.start === null || range1.end === null || range0.start < range1.end);
    }
    function rangeContainsRange(outerRange, innerRange) {
        return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
            (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
    }
    function rangeContainsMarker(range, date) {
        return (range.start === null || date >= range.start) &&
            (range.end === null || date < range.end);
    }
    function constrainMarkerToRange(date, range) {
        if (range.start != null && date < range.start) {
            return range.start;
        }
        if (range.end != null && date >= range.end) {
            return new Date(range.end.valueOf() - 1);
        }
        return date;
    }
    function removeExact(array, exactVal) {
        var removeCnt = 0;
        var i = 0;
        while (i < array.length) {
            if (array[i] === exactVal) {
                array.splice(i, 1);
                removeCnt++;
            }
            else {
                i++;
            }
        }
        return removeCnt;
    }
    function isArraysEqual(a0, a1) {
        var len = a0.length;
        var i;
        if (len !== a1.length) { // not array? or not same length?
            return false;
        }
        for (i = 0; i < len; i++) {
            if (a0[i] !== a1[i]) {
                return false;
            }
        }
        return true;
    }
    function memoize(workerFunc) {
        var args;
        var res;
        return function () {
            if (!args || !isArraysEqual(args, arguments)) {
                args = arguments;
                res = workerFunc.apply(this, arguments);
            }
            return res;
        };
    }
    /*
    always executes the workerFunc, but if the result is equal to the previous result,
    return the previous result instead.
    */
    function memoizeOutput(workerFunc, equalityFunc) {
        var cachedRes = null;
        return function () {
            var newRes = workerFunc.apply(this, arguments);
            if (cachedRes === null || !(cachedRes === newRes || equalityFunc(cachedRes, newRes))) {
                cachedRes = newRes;
            }
            return cachedRes;
        };
    }
    var EXTENDED_SETTINGS_AND_SEVERITIES = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0
    };
    var STANDARD_DATE_PROP_SEVERITIES = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1
    };
    var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
    var COMMA_RE = /,/g; // we need re for globalness
    var MULTI_SPACE_RE = /\s+/g;
    var LTR_RE = /\u200e/g; // control character
    var UTC_RE = /UTC|GMT/;
    var NativeFormatter = /** @class */ (function () {
        function NativeFormatter(formatSettings) {
            var standardDateProps = {};
            var extendedSettings = {};
            var severity = 0;
            for (var name_1 in formatSettings) {
                if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                    extendedSettings[name_1] = formatSettings[name_1];
                    severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
                }
                else {
                    standardDateProps[name_1] = formatSettings[name_1];
                    if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
                        severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                    }
                }
            }
            this.standardDateProps = standardDateProps;
            this.extendedSettings = extendedSettings;
            this.severity = severity;
            this.buildFormattingFunc = memoize(buildFormattingFunc);
        }
        NativeFormatter.prototype.format = function (date, context) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
        };
        NativeFormatter.prototype.formatRange = function (start, end, context) {
            var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
            var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
            if (!diffSeverity) {
                return this.format(start, context);
            }
            var biggestUnitForPartial = diffSeverity;
            if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
                (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
                (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
                (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
                biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
            }
            var full0 = this.format(start, context);
            var full1 = this.format(end, context);
            if (full0 === full1) {
                return full0;
            }
            var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
            var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
            var partial0 = partialFormattingFunc(start);
            var partial1 = partialFormattingFunc(end);
            var insertion = findCommonInsertion(full0, partial0, full1, partial1);
            var separator = extendedSettings.separator || '';
            if (insertion) {
                return insertion.before + partial0 + separator + partial1 + insertion.after;
            }
            return full0 + separator + full1;
        };
        NativeFormatter.prototype.getLargestUnit = function () {
            switch (this.severity) {
                case 7:
                case 6:
                case 5:
                    return 'year';
                case 4:
                    return 'month';
                case 3:
                    return 'week';
                default:
                    return 'day';
            }
        };
        return NativeFormatter;
    }());
    function buildFormattingFunc(standardDateProps, extendedSettings, context) {
        var standardDatePropCnt = Object.keys(standardDateProps).length;
        if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
            return function (date) {
                return formatTimeZoneOffset(date.timeZoneOffset);
            };
        }
        if (standardDatePropCnt === 0 && extendedSettings.week) {
            return function (date) {
                return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekLabel, context.locale, extendedSettings.week);
            };
        }
        return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
    }
    function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
        standardDateProps = __assign({}, standardDateProps); // copy
        extendedSettings = __assign({}, extendedSettings); // copy
        sanitizeSettings(standardDateProps, extendedSettings);
        standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
        var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
        var zeroFormat; // needed?
        if (extendedSettings.omitZeroMinute) {
            var zeroProps = __assign({}, standardDateProps);
            delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
            zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
        }
        return function (date) {
            var marker = date.marker;
            var format;
            if (zeroFormat && !marker.getUTCMinutes()) {
                format = zeroFormat;
            }
            else {
                format = normalFormat;
            }
            var s = format.format(marker);
            return postProcess(s, date, standardDateProps, extendedSettings, context);
        };
    }
    function sanitizeSettings(standardDateProps, extendedSettings) {
        if (standardDateProps.timeZoneName) {
            if (!standardDateProps.hour) {
                standardDateProps.hour = '2-digit';
            }
            if (!standardDateProps.minute) {
                standardDateProps.minute = '2-digit';
            }
        }
        if (standardDateProps.timeZoneName === 'long') {
            standardDateProps.timeZoneName = 'short';
        }
        if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
            delete extendedSettings.omitZeroMinute;
        }
    }
    function postProcess(s, date, standardDateProps, extendedSettings, context) {
        s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
        if (standardDateProps.timeZoneName === 'short') {
            s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
                'UTC' : // important to normalize for IE, which does "GMT"
                formatTimeZoneOffset(date.timeZoneOffset));
        }
        if (extendedSettings.omitCommas) {
            s = s.replace(COMMA_RE, '').trim();
        }
        if (extendedSettings.omitZeroMinute) {
            s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
        }
        if (extendedSettings.meridiem === false) {
            s = s.replace(MERIDIEM_RE, '').trim();
        }
        else if (extendedSettings.meridiem === 'narrow') { // a/p
            s = s.replace(MERIDIEM_RE, function (m0, m1) {
                return m1.toLocaleLowerCase();
            });
        }
        else if (extendedSettings.meridiem === 'short') { // am/pm
            s = s.replace(MERIDIEM_RE, function (m0, m1) {
                return m1.toLocaleLowerCase() + 'm';
            });
        }
        else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
            s = s.replace(MERIDIEM_RE, function (m0) {
                return m0.toLocaleLowerCase();
            });
        }
        s = s.replace(MULTI_SPACE_RE, ' ');
        s = s.trim();
        return s;
    }
    function injectTzoStr(s, tzoStr) {
        var replaced = false;
        s = s.replace(UTC_RE, function () {
            replaced = true;
            return tzoStr;
        });
        if (!replaced) {
            s += ' ' + tzoStr;
        }
        return s;
    }
    function formatWeekNumber(num, weekLabel, locale, display) {
        var parts = [];
        if (display === 'narrow') {
            parts.push(weekLabel);
        }
        else if (display === 'short') {
            parts.push(weekLabel, ' ');
        }
        parts.push(locale.simpleNumberFormat.format(num));
        if (locale.options.isRtl) { // TODO: use control characters instead?
            parts.reverse();
        }
        return parts.join('');
    }
    function computeMarkerDiffSeverity(d0, d1, ca) {
        if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
            return 5;
        }
        if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
            return 4;
        }
        if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
            return 2;
        }
        if (timeAsMs(d0) !== timeAsMs(d1)) {
            return 1;
        }
        return 0;
    }
    function computePartialFormattingOptions(options, biggestUnit) {
        var partialOptions = {};
        for (var name_2 in options) {
            if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
                STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
                partialOptions[name_2] = options[name_2];
            }
        }
        return partialOptions;
    }
    function findCommonInsertion(full0, partial0, full1, partial1) {
        var i0 = 0;
        while (i0 < full0.length) {
            var found0 = full0.indexOf(partial0, i0);
            if (found0 === -1) {
                break;
            }
            var before0 = full0.substr(0, found0);
            i0 = found0 + partial0.length;
            var after0 = full0.substr(i0);
            var i1 = 0;
            while (i1 < full1.length) {
                var found1 = full1.indexOf(partial1, i1);
                if (found1 === -1) {
                    break;
                }
                var before1 = full1.substr(0, found1);
                i1 = found1 + partial1.length;
                var after1 = full1.substr(i1);
                if (before0 === before1 && after0 === after1) {
                    return {
                        before: before0,
                        after: after0
                    };
                }
            }
        }
        return null;
    }
    /*
    TODO: fix the terminology of "formatter" vs "formatting func"
    */
    /*
    At the time of instantiation, this object does not know which cmd-formatting system it will use.
    It receives this at the time of formatting, as a setting.
    */
    var CmdFormatter = /** @class */ (function () {
        function CmdFormatter(cmdStr, separator) {
            this.cmdStr = cmdStr;
            this.separator = separator;
        }
        CmdFormatter.prototype.format = function (date, context) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, this.separator));
        };
        CmdFormatter.prototype.formatRange = function (start, end, context) {
            return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, this.separator));
        };
        return CmdFormatter;
    }());
    var FuncFormatter = /** @class */ (function () {
        function FuncFormatter(func) {
            this.func = func;
        }
        FuncFormatter.prototype.format = function (date, context) {
            return this.func(createVerboseFormattingArg(date, null, context));
        };
        FuncFormatter.prototype.formatRange = function (start, end, context) {
            return this.func(createVerboseFormattingArg(start, end, context));
        };
        return FuncFormatter;
    }());
    function createFormatter(input, defaultSeparator) {
        if (typeof input === 'object' && input) { // non-null object
            if (typeof defaultSeparator === 'string') {
                input = __assign({ separator: defaultSeparator }, input);
            }
            return new NativeFormatter(input);
        }
        else if (typeof input === 'string') {
            return new CmdFormatter(input, defaultSeparator);
        }
        else if (typeof input === 'function') {
            return new FuncFormatter(input);
        }
    }
    function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
        if (stripZeroTime === void 0) { stripZeroTime = false; }
        var s = marker.toISOString();
        s = s.replace('.000', '');
        if (stripZeroTime) {
            s = s.replace('T00:00:00Z', '');
        }
        if (s.length > 10) { // time part wasn't stripped, can add timezone info
            if (timeZoneOffset == null) {
                s = s.replace('Z', '');
            }
            else if (timeZoneOffset !== 0) {
                s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
            }
        }
        return s;
    }
    function formatIsoTimeString(marker) {
        return padStart(marker.getUTCHours(), 2) + ':' +
            padStart(marker.getUTCMinutes(), 2) + ':' +
            padStart(marker.getUTCSeconds(), 2);
    }
    function formatTimeZoneOffset(minutes, doIso) {
        if (doIso === void 0) { doIso = false; }
        var sign = minutes < 0 ? '-' : '+';
        var abs = Math.abs(minutes);
        var hours = Math.floor(abs / 60);
        var mins = Math.round(abs % 60);
        if (doIso) {
            return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
        }
        else {
            return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
        }
    }
    function createVerboseFormattingArg(start, end, context, separator) {
        var startInfo = expandZonedMarker(start, context.calendarSystem);
        var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
        return {
            date: startInfo,
            start: startInfo,
            end: endInfo,
            timeZone: context.timeZone,
            localeCodes: context.locale.codes,
            separator: separator
        };
    }
    function expandZonedMarker(dateInfo, calendarSystem) {
        var a = calendarSystem.markerToArray(dateInfo.marker);
        return {
            marker: dateInfo.marker,
            timeZoneOffset: dateInfo.timeZoneOffset,
            array: a,
            year: a[0],
            month: a[1],
            day: a[2],
            hour: a[3],
            minute: a[4],
            second: a[5],
            millisecond: a[6]
        };
    }
    var EventSourceApi = /** @class */ (function () {
        function EventSourceApi(calendar, internalEventSource) {
            this.calendar = calendar;
            this.internalEventSource = internalEventSource;
        }
        EventSourceApi.prototype.remove = function () {
            this.calendar.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: this.internalEventSource.sourceId
            });
        };
        EventSourceApi.prototype.refetch = function () {
            this.calendar.dispatch({
                type: 'FETCH_EVENT_SOURCES',
                sourceIds: [this.internalEventSource.sourceId]
            });
        };
        Object.defineProperty(EventSourceApi.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventSourceApi.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url;
            },
            enumerable: true,
            configurable: true
        });
        return EventSourceApi;
    }());
    var EventApi = /** @class */ (function () {
        function EventApi(calendar, def, instance) {
            this._calendar = calendar;
            this._def = def;
            this._instance = instance || null;
        }
        /*
        TODO: make event struct more responsible for this
        */
        EventApi.prototype.setProp = function (name, val) {
            var _a, _b;
            if (name in DATE_PROPS) ;
            else if (name in NON_DATE_PROPS) {
                if (typeof NON_DATE_PROPS[name] === 'function') {
                    val = NON_DATE_PROPS[name](val);
                }
                this.mutate({
                    standardProps: (_a = {}, _a[name] = val, _a)
                });
            }
            else if (name in UNSCOPED_EVENT_UI_PROPS) {
                var ui = void 0;
                if (typeof UNSCOPED_EVENT_UI_PROPS[name] === 'function') {
                    val = UNSCOPED_EVENT_UI_PROPS[name](val);
                }
                if (name === 'color') {
                    ui = { backgroundColor: val, borderColor: val };
                }
                else if (name === 'editable') {
                    ui = { startEditable: val, durationEditable: val };
                }
                else {
                    ui = (_b = {}, _b[name] = val, _b);
                }
                this.mutate({
                    standardProps: { ui: ui }
                });
            }
        };
        EventApi.prototype.setExtendedProp = function (name, val) {
            var _a;
            this.mutate({
                extendedProps: (_a = {}, _a[name] = val, _a)
            });
        };
        EventApi.prototype.setStart = function (startInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var start = dateEnv.createMarker(startInput);
            if (start && this._instance) { // TODO: warning if parsed bad
                var instanceRange = this._instance.range;
                var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
                if (options.maintainDuration) {
                    this.mutate({ datesDelta: startDelta });
                }
                else {
                    this.mutate({ startDelta: startDelta });
                }
            }
        };
        EventApi.prototype.setEnd = function (endInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var end;
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) {
                    return; // TODO: warning if parsed bad
                }
            }
            if (this._instance) {
                if (end) {
                    var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                    this.mutate({ endDelta: endDelta });
                }
                else {
                    this.mutate({ standardProps: { hasEnd: false } });
                }
            }
        };
        EventApi.prototype.setDates = function (startInput, endInput, options) {
            if (options === void 0) { options = {}; }
            var dateEnv = this._calendar.dateEnv;
            var standardProps = { allDay: options.allDay };
            var start = dateEnv.createMarker(startInput);
            var end;
            if (!start) {
                return; // TODO: warning if parsed bad
            }
            if (endInput != null) {
                end = dateEnv.createMarker(endInput);
                if (!end) { // TODO: warning if parsed bad
                    return;
                }
            }
            if (this._instance) {
                var instanceRange = this._instance.range;
                if (options.allDay === true) {
                    instanceRange = computeAlignedDayRange(instanceRange);
                }
                var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
                if (end) {
                    var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                    if (durationsEqual(startDelta, endDelta)) {
                        this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                    }
                    else {
                        this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                    }
                }
                else { // means "clear the end"
                    standardProps.hasEnd = false;
                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                }
            }
        };
        EventApi.prototype.moveStart = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ startDelta: delta });
            }
        };
        EventApi.prototype.moveEnd = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ endDelta: delta });
            }
        };
        EventApi.prototype.moveDates = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // TODO: warning if parsed bad
                this.mutate({ datesDelta: delta });
            }
        };
        EventApi.prototype.setAllDay = function (allDay, options) {
            if (options === void 0) { options = {}; }
            var standardProps = { allDay: allDay };
            var maintainDuration = options.maintainDuration;
            if (maintainDuration == null) {
                maintainDuration = this._calendar.opt('allDayMaintainDuration');
            }
            if (this._def.allDay !== allDay) {
                standardProps.hasEnd = maintainDuration;
            }
            this.mutate({ standardProps: standardProps });
        };
        EventApi.prototype.formatRange = function (formatInput) {
            var dateEnv = this._calendar.dateEnv;
            var instance = this._instance;
            var formatter = createFormatter(formatInput, this._calendar.opt('defaultRangeSeparator'));
            if (this._def.hasEnd) {
                return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                    forcedStartTzo: instance.forcedStartTzo,
                    forcedEndTzo: instance.forcedEndTzo
                });
            }
            else {
                return dateEnv.format(instance.range.start, formatter, {
                    forcedTzo: instance.forcedStartTzo
                });
            }
        };
        EventApi.prototype.mutate = function (mutation) {
            var def = this._def;
            var instance = this._instance;
            if (instance) {
                this._calendar.dispatch({
                    type: 'MUTATE_EVENTS',
                    instanceId: instance.instanceId,
                    mutation: mutation,
                    fromApi: true
                });
                var eventStore = this._calendar.state.eventStore;
                this._def = eventStore.defs[def.defId];
                this._instance = eventStore.instances[instance.instanceId];
            }
        };
        EventApi.prototype.remove = function () {
            this._calendar.dispatch({
                type: 'REMOVE_EVENT_DEF',
                defId: this._def.defId
            });
        };
        Object.defineProperty(EventApi.prototype, "source", {
            get: function () {
                var sourceId = this._def.sourceId;
                if (sourceId) {
                    return new EventSourceApi(this._calendar, this._calendar.state.eventSources[sourceId]);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "start", {
            get: function () {
                return this._instance ?
                    this._calendar.dateEnv.toDate(this._instance.range.start) :
                    null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "end", {
            get: function () {
                return (this._instance && this._def.hasEnd) ?
                    this._calendar.dateEnv.toDate(this._instance.range.end) :
                    null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "id", {
            get: function () { return this._def.publicId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "groupId", {
            get: function () { return this._def.groupId; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allDay", {
            get: function () { return this._def.allDay; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "title", {
            get: function () { return this._def.title; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "url", {
            get: function () { return this._def.url; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "rendering", {
            get: function () { return this._def.rendering; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "startEditable", {
            get: function () { return this._def.ui.startEditable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "durationEditable", {
            get: function () { return this._def.ui.durationEditable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "constraint", {
            get: function () { return this._def.ui.constraints[0] || null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "overlap", {
            get: function () { return this._def.ui.overlap; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "allow", {
            get: function () { return this._def.ui.allows[0] || null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "backgroundColor", {
            get: function () { return this._def.ui.backgroundColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "borderColor", {
            get: function () { return this._def.ui.borderColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "textColor", {
            get: function () { return this._def.ui.textColor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "classNames", {
            get: function () { return this._def.ui.classNames; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EventApi.prototype, "extendedProps", {
            get: function () { return this._def.extendedProps; },
            enumerable: true,
            configurable: true
        });
        return EventApi;
    }());
    /*
    Specifying nextDayThreshold signals that all-day ranges should be sliced.
    */
    function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
        var inverseBgByGroupId = {};
        var inverseBgByDefId = {};
        var defByGroupId = {};
        var bgRanges = [];
        var fgRanges = [];
        var eventUis = compileEventUis(eventStore.defs, eventUiBases);
        for (var defId in eventStore.defs) {
            var def = eventStore.defs[defId];
            if (def.rendering === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId] = [];
                    if (!defByGroupId[def.groupId]) {
                        defByGroupId[def.groupId] = def;
                    }
                }
                else {
                    inverseBgByDefId[defId] = [];
                }
            }
        }
        for (var instanceId in eventStore.instances) {
            var instance = eventStore.instances[instanceId];
            var def = eventStore.defs[instance.defId];
            var ui = eventUis[def.defId];
            var origRange = instance.range;
            var normalRange = (!def.allDay && nextDayThreshold) ?
                computeVisibleDayRange(origRange, nextDayThreshold) :
                origRange;
            var slicedRange = intersectRanges(normalRange, framingRange);
            if (slicedRange) {
                if (def.rendering === 'inverse-background') {
                    if (def.groupId) {
                        inverseBgByGroupId[def.groupId].push(slicedRange);
                    }
                    else {
                        inverseBgByDefId[instance.defId].push(slicedRange);
                    }
                }
                else {
                    (def.rendering === 'background' ? bgRanges : fgRanges).push({
                        def: def,
                        ui: ui,
                        instance: instance,
                        range: slicedRange,
                        isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                        isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
                    });
                }
            }
        }
        for (var groupId in inverseBgByGroupId) { // BY GROUP
            var ranges = inverseBgByGroupId[groupId];
            var invertedRanges = invertRanges(ranges, framingRange);
            for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
                var invertedRange = invertedRanges_1[_i];
                var def = defByGroupId[groupId];
                var ui = eventUis[def.defId];
                bgRanges.push({
                    def: def,
                    ui: ui,
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false
                });
            }
        }
        for (var defId in inverseBgByDefId) {
            var ranges = inverseBgByDefId[defId];
            var invertedRanges = invertRanges(ranges, framingRange);
            for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
                var invertedRange = invertedRanges_2[_a];
                bgRanges.push({
                    def: eventStore.defs[defId],
                    ui: eventUis[defId],
                    instance: null,
                    range: invertedRange,
                    isStart: false,
                    isEnd: false
                });
            }
        }
        return { bg: bgRanges, fg: fgRanges };
    }
    function hasBgRendering(def) {
        return def.rendering === 'background' || def.rendering === 'inverse-background';
    }
    function filterSegsViaEls(view, segs, isMirror) {
        if (view.hasPublicHandlers('eventRender')) {
            segs = segs.filter(function (seg) {
                var custom = view.publiclyTrigger('eventRender', [
                    {
                        event: new EventApi(view.calendar, seg.eventRange.def, seg.eventRange.instance),
                        isMirror: isMirror,
                        isStart: seg.isStart,
                        isEnd: seg.isEnd,
                        el: seg.el,
                        view: view
                    }
                ]);
                if (custom === false) { // means don't render at all
                    return false;
                }
                else if (custom && custom !== true) {
                    seg.el = custom;
                }
                return true;
            });
        }
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            setElSeg(seg.el, seg);
        }
        return segs;
    }
    function setElSeg(el, seg) {
        el.fcSeg = seg;
    }
    function getElSeg(el) {
        return el.fcSeg || null;
    }
    function compileEventUis(eventDefs, eventUiBases) {
        return mapHash(eventDefs, function (eventDef) {
            return compileEventUi(eventDef, eventUiBases);
        });
    }
    function compileEventUi(eventDef, eventUiBases) {
        var uis = [];
        if (eventUiBases['']) {
            uis.push(eventUiBases['']);
        }
        if (eventUiBases[eventDef.defId]) {
            uis.push(eventUiBases[eventDef.defId]);
        }
        uis.push(eventDef.ui);
        return combineEventUis(uis);
    }
    function applyMutationToEventStore(eventStore, eventConfigBase, mutation, calendar) {
        var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
        var dest = createEmptyEventStore();
        for (var defId in eventStore.defs) {
            var def = eventStore.defs[defId];
            dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, calendar.pluginSystem.hooks.eventDefMutationAppliers, calendar);
        }
        for (var instanceId in eventStore.instances) {
            var instance = eventStore.instances[instanceId];
            var def = dest.defs[instance.defId]; // important to grab the newly modified def
            dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, calendar);
        }
        return dest;
    }
    function applyMutationToEventDef(eventDef, eventConfig, mutation, appliers, calendar) {
        var standardProps = mutation.standardProps || {};
        if (standardProps.hasEnd == null &&
            eventConfig.durationEditable &&
            (mutation.startDelta || mutation.endDelta)) {
            standardProps.hasEnd = true; // TODO: is this mutation okay?
        }
        var copy = __assign({}, eventDef, standardProps, { ui: __assign({}, eventDef.ui, standardProps.ui) });
        if (mutation.extendedProps) {
            copy.extendedProps = __assign({}, copy.extendedProps, mutation.extendedProps);
        }
        for (var _i = 0, appliers_1 = appliers; _i < appliers_1.length; _i++) {
            var applier = appliers_1[_i];
            applier(copy, mutation, calendar);
        }
        if (!copy.hasEnd && calendar.opt('forceEventDuration')) {
            copy.hasEnd = true;
        }
        return copy;
    }
    function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
    eventConfig, mutation, calendar) {
        var dateEnv = calendar.dateEnv;
        var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
        var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
        var copy = __assign({}, eventInstance);
        if (forceAllDay) {
            copy.range = computeAlignedDayRange(copy.range);
        }
        if (mutation.datesDelta && eventConfig.startEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.datesDelta),
                end: dateEnv.add(copy.range.end, mutation.datesDelta)
            };
        }
        if (mutation.startDelta && eventConfig.durationEditable) {
            copy.range = {
                start: dateEnv.add(copy.range.start, mutation.startDelta),
                end: copy.range.end
            };
        }
        if (mutation.endDelta && eventConfig.durationEditable) {
            copy.range = {
                start: copy.range.start,
                end: dateEnv.add(copy.range.end, mutation.endDelta)
            };
        }
        if (clearEnd) {
            copy.range = {
                start: copy.range.start,
                end: calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start)
            };
        }
        if (eventDef.allDay) {
            copy.range = {
                start: startOfDay(copy.range.start),
                end: startOfDay(copy.range.end)
            };
        }
        if (copy.range.end < copy.range.start) {
            copy.range.end = calendar.getDefaultEventEnd(eventDef.allDay, copy.range.start);
        }
        return copy;
    }
    function reduceEventStore (eventStore, action, eventSources, dateProfile, calendar) {
        switch (action.type) {
            case 'RECEIVE_EVENTS': // raw
                return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, calendar);
            case 'ADD_EVENTS': // already parsed, but not expanded
                return addEvent(eventStore, action.eventStore, // new ones
                dateProfile ? dateProfile.activeRange : null, calendar);
            case 'MERGE_EVENTS': // already parsed and expanded
                return mergeEventStores(eventStore, action.eventStore);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                if (dateProfile) {
                    return expandRecurring(eventStore, dateProfile.activeRange, calendar);
                }
                else {
                    return eventStore;
                }
            case 'CHANGE_TIMEZONE':
                return rezoneDates(eventStore, action.oldDateEnv, calendar.dateEnv);
            case 'MUTATE_EVENTS':
                return applyMutationToRelated(eventStore, action.instanceId, action.mutation, action.fromApi, calendar);
            case 'REMOVE_EVENT_INSTANCES':
                return excludeInstances(eventStore, action.instances);
            case 'REMOVE_EVENT_DEF':
                return filterEventStoreDefs(eventStore, function (eventDef) {
                    return eventDef.defId !== action.defId;
                });
            case 'REMOVE_EVENT_SOURCE':
                return excludeEventsBySourceId(eventStore, action.sourceId);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return filterEventStoreDefs(eventStore, function (eventDef) {
                    return !eventDef.sourceId; // only keep events with no source id
                });
            case 'REMOVE_ALL_EVENTS':
                return createEmptyEventStore();
            case 'RESET_EVENTS':
                return {
                    defs: eventStore.defs,
                    instances: eventStore.instances
                };
            default:
                return eventStore;
        }
    }
    function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, calendar) {
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
        ) {
            var subset = parseEvents(transformRawEvents(rawEvents, eventSource, calendar), eventSource.sourceId, calendar);
            if (fetchRange) {
                subset = expandRecurring(subset, fetchRange, calendar);
            }
            return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
        }
        return eventStore;
    }
    function addEvent(eventStore, subset, expandRange, calendar) {
        if (expandRange) {
            subset = expandRecurring(subset, expandRange, calendar);
        }
        return mergeEventStores(eventStore, subset);
    }
    function rezoneDates(eventStore, oldDateEnv, newDateEnv) {
        var defs = eventStore.defs;
        var instances = mapHash(eventStore.instances, function (instance) {
            var def = defs[instance.defId];
            if (def.allDay || def.recurringDef) {
                return instance; // isn't dependent on timezone
            }
            else {
                return __assign({}, instance, { range: {
                        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
                    }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
            }
        });
        return { defs: defs, instances: instances };
    }
    function applyMutationToRelated(eventStore, instanceId, mutation, fromApi, calendar) {
        var relevant = getRelevantEvents(eventStore, instanceId);
        var eventConfigBase = fromApi ?
            { '': {
                    startEditable: true,
                    durationEditable: true,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: '',
                    borderColor: '',
                    textColor: '',
                    classNames: []
                } } :
            calendar.eventUiBases;
        relevant = applyMutationToEventStore(relevant, eventConfigBase, mutation, calendar);
        return mergeEventStores(eventStore, relevant);
    }
    function excludeEventsBySourceId(eventStore, sourceId) {
        return filterEventStoreDefs(eventStore, function (eventDef) {
            return eventDef.sourceId !== sourceId;
        });
    }
    function excludeInstances(eventStore, removals) {
        return {
            defs: eventStore.defs,
            instances: filterHash(eventStore.instances, function (instance) {
                return !removals[instance.instanceId];
            })
        };
    }
    function isInteractionValid(interaction, calendar) {
        return isNewPropsValid({ eventDrag: interaction }, calendar); // HACK: the eventDrag props is used for ALL interactions
    }
    function isDateSelectionValid(dateSelection, calendar) {
        return isNewPropsValid({ dateSelection: dateSelection }, calendar);
    }
    function isNewPropsValid(newProps, calendar) {
        var view = calendar.view;
        var props = __assign({ businessHours: view ? view.props.businessHours : createEmptyEventStore(), dateSelection: '', eventStore: calendar.state.eventStore, eventUiBases: calendar.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
        return (calendar.pluginSystem.hooks.isPropsValid || isPropsValid)(props, calendar);
    }
    function isPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
        if (state.eventDrag && !isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
            return false;
        }
        if (state.dateSelection && !isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig)) {
            return false;
        }
        return true;
    }
    function isInteractionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
        var subjectEventStore = interaction.mutatedEvents;
        var subjectDefs = subjectEventStore.defs;
        var subjectInstances = subjectEventStore.instances;
        var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
            state.eventUiBases :
            { '': calendar.selectionConfig } // if not a real event, validate as a selection
        );
        if (filterConfig) {
            subjectConfigs = mapHash(subjectConfigs, filterConfig);
        }
        var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?
        var otherDefs = otherEventStore.defs;
        var otherInstances = otherEventStore.instances;
        var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
        for (var subjectInstanceId in subjectInstances) {
            var subjectInstance = subjectInstances[subjectInstanceId];
            var subjectRange = subjectInstance.range;
            var subjectConfig = subjectConfigs[subjectInstance.defId];
            var subjectDef = subjectDefs[subjectInstance.defId];
            if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, calendar)) {
                return false;
            }
            var overlapFunc = calendar.opt('eventOverlap');
            if (typeof overlapFunc !== 'function') {
                overlapFunc = null;
            }
            for (var otherInstanceId in otherInstances) {
                var otherInstance = otherInstances[otherInstanceId];
                if (rangesIntersect(subjectRange, otherInstance.range)) {
                    var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                    if (otherOverlap === false && interaction.isEvent) {
                        return false;
                    }
                    if (subjectConfig.overlap === false) {
                        return false;
                    }
                    if (overlapFunc && !overlapFunc(new EventApi(calendar, otherDefs[otherInstance.defId], otherInstance), // still event
                    new EventApi(calendar, subjectDef, subjectInstance) // moving event
                    )) {
                        return false;
                    }
                }
            }
            var calendarEventStore = calendar.state.eventStore; // need global-to-calendar, not local to component (splittable)state
            for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
                var subjectAllow = _a[_i];
                var subjectDateSpan = __assign({}, dateSpanMeta, { range: subjectInstance.range, allDay: subjectDef.allDay });
                var origDef = calendarEventStore.defs[subjectDef.defId];
                var origInstance = calendarEventStore.instances[subjectInstanceId];
                var eventApi = void 0;
                if (origDef) { // was previously in the calendar
                    eventApi = new EventApi(calendar, origDef, origInstance);
                }
                else { // was an external event
                    eventApi = new EventApi(calendar, subjectDef); // no instance, because had no dates
                }
                if (!subjectAllow(calendar.buildDateSpanApi(subjectDateSpan), eventApi)) {
                    return false;
                }
            }
        }
        return true;
    }
    function isDateSelectionPropsValid(state, calendar, dateSpanMeta, filterConfig) {
        var relevantEventStore = state.eventStore;
        var relevantDefs = relevantEventStore.defs;
        var relevantInstances = relevantEventStore.instances;
        var selection = state.dateSelection;
        var selectionRange = selection.range;
        var selectionConfig = calendar.selectionConfig;
        if (filterConfig) {
            selectionConfig = filterConfig(selectionConfig);
        }
        if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, calendar)) {
            return false;
        }
        var overlapFunc = calendar.opt('selectOverlap');
        if (typeof overlapFunc !== 'function') {
            overlapFunc = null;
        }
        for (var relevantInstanceId in relevantInstances) {
            var relevantInstance = relevantInstances[relevantInstanceId];
            if (rangesIntersect(selectionRange, relevantInstance.range)) {
                if (selectionConfig.overlap === false) {
                    return false;
                }
                if (overlapFunc && !overlapFunc(new EventApi(calendar, relevantDefs[relevantInstance.defId], relevantInstance))) {
                    return false;
                }
            }
        }
        for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
            var selectionAllow = _a[_i];
            var fullDateSpan = __assign({}, dateSpanMeta, selection);
            if (!selectionAllow(calendar.buildDateSpanApi(fullDateSpan), null)) {
                return false;
            }
        }
        return true;
    }
    function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, calendar) {
        for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
            var constraint = constraints_1[_i];
            if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, calendar), subjectRange)) {
                return false;
            }
        }
        return true;
    }
    function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
    otherEventStore, // for if constraint is an even group ID
    businessHoursUnexpanded, // for if constraint is 'businessHours'
    calendar // for expanding businesshours
    ) {
        if (constraint === 'businessHours') {
            return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, calendar));
        }
        else if (typeof constraint === 'string') { // an group ID
            return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
                return eventDef.groupId === constraint;
            }));
        }
        else if (typeof constraint === 'object' && constraint) { // non-null object
            return eventStoreToRanges(expandRecurring(constraint, subjectRange, calendar));
        }
        return []; // if it's false
    }
    function eventStoreToRanges(eventStore) {
        var instances = eventStore.instances;
        var ranges = [];
        for (var instanceId in instances) {
            ranges.push(instances[instanceId].range);
        }
        return ranges;
    }
    function anyRangesContainRange(outerRanges, innerRange) {
        for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
            var outerRange = outerRanges_1[_i];
            if (rangeContainsRange(outerRange, innerRange)) {
                return true;
            }
        }
        return false;
    }
    function normalizeConstraint(input, calendar) {
        if (Array.isArray(input)) {
            return parseEvents(input, '', calendar, true); // allowOpenRange=true
        }
        else if (typeof input === 'object' && input) { // non-null object
            return parseEvents([input], '', calendar, true); // allowOpenRange=true
        }
        else if (input != null) {
            return String(input);
        }
        else {
            return null;
        }
    }
    function htmlEscape(s) {
        return (s + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#039;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '<br />');
    }
    function cssToStr(cssProps) {
        var statements = [];
        for (var name_1 in cssProps) {
            var val = cssProps[name_1];
            if (val != null && val !== '') {
                statements.push(name_1 + ':' + val);
            }
        }
        return statements.join(';');
    }
    function attrsToStr(attrs) {
        var parts = [];
        for (var name_2 in attrs) {
            var val = attrs[name_2];
            if (val != null) {
                parts.push(name_2 + '="' + htmlEscape(val) + '"');
            }
        }
        return parts.join(' ');
    }
    function parseClassName(raw) {
        if (Array.isArray(raw)) {
            return raw;
        }
        else if (typeof raw === 'string') {
            return raw.split(/\s+/);
        }
        else {
            return [];
        }
    }
    var UNSCOPED_EVENT_UI_PROPS = {
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: null,
        overlap: null,
        allow: null,
        className: parseClassName,
        classNames: parseClassName,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    };
    function processUnscopedUiProps(rawProps, calendar, leftovers) {
        var props = refineProps(rawProps, UNSCOPED_EVENT_UI_PROPS, {}, leftovers);
        var constraint = normalizeConstraint(props.constraint, calendar);
        return {
            startEditable: props.startEditable != null ? props.startEditable : props.editable,
            durationEditable: props.durationEditable != null ? props.durationEditable : props.editable,
            constraints: constraint != null ? [constraint] : [],
            overlap: props.overlap,
            allows: props.allow != null ? [props.allow] : [],
            backgroundColor: props.backgroundColor || props.color,
            borderColor: props.borderColor || props.color,
            textColor: props.textColor,
            classNames: props.classNames.concat(props.className)
        };
    }
    function processScopedUiProps(prefix, rawScoped, calendar, leftovers) {
        var rawUnscoped = {};
        var wasFound = {};
        for (var key in UNSCOPED_EVENT_UI_PROPS) {
            var scopedKey = prefix + capitaliseFirstLetter(key);
            rawUnscoped[key] = rawScoped[scopedKey];
            wasFound[scopedKey] = true;
        }
        if (prefix === 'event') {
            rawUnscoped.editable = rawScoped.editable; // special case. there is no 'eventEditable', just 'editable'
        }
        if (leftovers) {
            for (var key in rawScoped) {
                if (!wasFound[key]) {
                    leftovers[key] = rawScoped[key];
                }
            }
        }
        return processUnscopedUiProps(rawUnscoped, calendar);
    }
    var EMPTY_EVENT_UI = {
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        classNames: []
    };
    function combineEventUis(uis) {
        return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
    }
    function combineTwoEventUis(item0, item1) {
        return {
            startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
            durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
            constraints: item0.constraints.concat(item1.constraints),
            overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
            allows: item0.allows.concat(item1.allows),
            backgroundColor: item1.backgroundColor || item0.backgroundColor,
            borderColor: item1.borderColor || item0.borderColor,
            textColor: item1.textColor || item0.textColor,
            classNames: item0.classNames.concat(item1.classNames)
        };
    }
    var NON_DATE_PROPS = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        rendering: String,
        extendedProps: null
    };
    var DATE_PROPS = {
        start: null,
        date: null,
        end: null,
        allDay: null
    };
    var uid = 0;
    function parseEvent(raw, sourceId, calendar, allowOpenRange) {
        var allDayDefault = computeIsAllDayDefault(sourceId, calendar);
        var leftovers0 = {};
        var recurringRes = parseRecurring(raw, // raw, but with single-event stuff stripped out
        allDayDefault, calendar.dateEnv, calendar.pluginSystem.hooks.recurringTypes, leftovers0 // will populate with non-recurring props
        );
        if (recurringRes) {
            var def = parseEventDef(leftovers0, sourceId, recurringRes.allDay, Boolean(recurringRes.duration), calendar);
            def.recurringDef = {
                typeId: recurringRes.typeId,
                typeData: recurringRes.typeData,
                duration: recurringRes.duration
            };
            return { def: def, instance: null };
        }
        else {
            var leftovers1 = {};
            var singleRes = parseSingle(raw, allDayDefault, calendar, leftovers1, allowOpenRange);
            if (singleRes) {
                var def = parseEventDef(leftovers1, sourceId, singleRes.allDay, singleRes.hasEnd, calendar);
                var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
                return { def: def, instance: instance };
            }
        }
        return null;
    }
    /*
    Will NOT populate extendedProps with the leftover properties.
    Will NOT populate date-related props.
    The EventNonDateInput has been normalized (id => publicId, etc).
    */
    function parseEventDef(raw, sourceId, allDay, hasEnd, calendar) {
        var leftovers = {};
        var def = pluckNonDateProps(raw, calendar, leftovers);
        def.defId = String(uid++);
        def.sourceId = sourceId;
        def.allDay = allDay;
        def.hasEnd = hasEnd;
        for (var _i = 0, _a = calendar.pluginSystem.hooks.eventDefParsers; _i < _a.length; _i++) {
            var eventDefParser = _a[_i];
            var newLeftovers = {};
            eventDefParser(def, leftovers, newLeftovers);
            leftovers = newLeftovers;
        }
        def.extendedProps = __assign(leftovers, def.extendedProps || {});
        Object.freeze(def.ui.classNames);
        Object.freeze(def.extendedProps);
        return def;
    }
    function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
        return {
            instanceId: String(uid++),
            defId: defId,
            range: range,
            forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
            forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
        };
    }
    function parseSingle(raw, allDayDefault, calendar, leftovers, allowOpenRange) {
        var props = pluckDateProps(raw, leftovers);
        var allDay = props.allDay;
        var startMeta;
        var startMarker = null;
        var hasEnd = false;
        var endMeta;
        var endMarker = null;
        startMeta = calendar.dateEnv.createMarkerMeta(props.start);
        if (startMeta) {
            startMarker = startMeta.marker;
        }
        else if (!allowOpenRange) {
            return null;
        }
        if (props.end != null) {
            endMeta = calendar.dateEnv.createMarkerMeta(props.end);
        }
        if (allDay == null) {
            if (allDayDefault != null) {
                allDay = allDayDefault;
            }
            else {
                allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                    (!endMeta || endMeta.isTimeUnspecified);
            }
        }
        if (allDay && startMarker) {
            startMarker = startOfDay(startMarker);
        }
        if (endMeta) {
            endMarker = endMeta.marker;
            if (allDay) {
                endMarker = startOfDay(endMarker);
            }
            if (startMarker && endMarker <= startMarker) {
                endMarker = null;
            }
        }
        if (endMarker) {
            hasEnd = true;
        }
        else if (!allowOpenRange) {
            hasEnd = calendar.opt('forceEventDuration') || false;
            endMarker = calendar.dateEnv.add(startMarker, allDay ?
                calendar.defaultAllDayEventDuration :
                calendar.defaultTimedEventDuration);
        }
        return {
            allDay: allDay,
            hasEnd: hasEnd,
            range: { start: startMarker, end: endMarker },
            forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
            forcedEndTzo: endMeta ? endMeta.forcedTzo : null
        };
    }
    function pluckDateProps(raw, leftovers) {
        var props = refineProps(raw, DATE_PROPS, {}, leftovers);
        props.start = (props.start !== null) ? props.start : props.date;
        delete props.date;
        return props;
    }
    function pluckNonDateProps(raw, calendar, leftovers) {
        var preLeftovers = {};
        var props = refineProps(raw, NON_DATE_PROPS, {}, preLeftovers);
        var ui = processUnscopedUiProps(preLeftovers, calendar, leftovers);
        props.publicId = props.id;
        delete props.id;
        props.ui = ui;
        return props;
    }
    function computeIsAllDayDefault(sourceId, calendar) {
        var res = null;
        if (sourceId) {
            var source = calendar.state.eventSources[sourceId];
            res = source.allDayDefault;
        }
        if (res == null) {
            res = calendar.opt('allDayDefault');
        }
        return res;
    }
    var DEF_DEFAULTS = {
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        rendering: 'inverse-background',
        classNames: 'fc-nonbusiness',
        groupId: '_businessHours' // so multiple defs get grouped
    };
    /*
    TODO: pass around as EventDefHash!!!
    */
    function parseBusinessHours(input, calendar) {
        return parseEvents(refineInputs(input), '', calendar);
    }
    function refineInputs(input) {
        var rawDefs;
        if (input === true) {
            rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
        }
        else if (Array.isArray(input)) {
            rawDefs = input.filter(function (rawDef) {
                return rawDef.daysOfWeek;
            });
        }
        else if (typeof input === 'object' && input) { // non-null object
            rawDefs = [input];
        }
        else { // is probably false
            rawDefs = [];
        }
        rawDefs = rawDefs.map(function (rawDef) {
            return __assign({}, DEF_DEFAULTS, rawDef);
        });
        return rawDefs;
    }
    function memoizeRendering(renderFunc, unrenderFunc, dependencies) {
        if (dependencies === void 0) { dependencies = []; }
        var dependents = [];
        var thisContext;
        var prevArgs;
        function unrender() {
            if (prevArgs) {
                for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                    var dependent = dependents_1[_i];
                    dependent.unrender();
                }
                if (unrenderFunc) {
                    unrenderFunc.apply(thisContext, prevArgs);
                }
                prevArgs = null;
            }
        }
        function res() {
            if (!prevArgs || !isArraysEqual(prevArgs, arguments)) {
                unrender();
                thisContext = this;
                prevArgs = arguments;
                renderFunc.apply(this, arguments);
            }
        }
        res.dependents = dependents;
        res.unrender = unrender;
        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
            var dependency = dependencies_1[_i];
            dependency.dependents.push(res);
        }
        return res;
    }
    var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
    var Splitter = /** @class */ (function () {
        function Splitter() {
            this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
            this.splitDateSelection = memoize(this._splitDateSpan);
            this.splitEventStore = memoize(this._splitEventStore);
            this.splitIndividualUi = memoize(this._splitIndividualUi);
            this.splitEventDrag = memoize(this._splitInteraction);
            this.splitEventResize = memoize(this._splitInteraction);
            this.eventUiBuilders = {}; // TODO: typescript protection
        }
        Splitter.prototype.splitProps = function (props) {
            var _this = this;
            var keyInfos = this.getKeyInfo(props);
            var defKeys = this.getKeysForEventDefs(props.eventStore);
            var dateSelections = this.splitDateSelection(props.dateSelection);
            var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
            var eventStores = this.splitEventStore(props.eventStore, defKeys);
            var eventDrags = this.splitEventDrag(props.eventDrag);
            var eventResizes = this.splitEventResize(props.eventResize);
            var splitProps = {};
            this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
                return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
            });
            for (var key in keyInfos) {
                var keyInfo = keyInfos[key];
                var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
                var buildEventUi = this.eventUiBuilders[key];
                splitProps[key] = {
                    businessHours: keyInfo.businessHours || props.businessHours,
                    dateSelection: dateSelections[key] || null,
                    eventStore: eventStore,
                    eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                    eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                    eventDrag: eventDrags[key] || null,
                    eventResize: eventResizes[key] || null
                };
            }
            return splitProps;
        };
        Splitter.prototype._splitDateSpan = function (dateSpan) {
            var dateSpans = {};
            if (dateSpan) {
                var keys = this.getKeysForDateSpan(dateSpan);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    dateSpans[key] = dateSpan;
                }
            }
            return dateSpans;
        };
        Splitter.prototype._getKeysForEventDefs = function (eventStore) {
            var _this = this;
            return mapHash(eventStore.defs, function (eventDef) {
                return _this.getKeysForEventDef(eventDef);
            });
        };
        Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
            var defs = eventStore.defs, instances = eventStore.instances;
            var splitStores = {};
            for (var defId in defs) {
                for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!splitStores[key]) {
                        splitStores[key] = createEmptyEventStore();
                    }
                    splitStores[key].defs[defId] = defs[defId];
                }
            }
            for (var instanceId in instances) {
                var instance = instances[instanceId];
                for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                    var key = _c[_b];
                    if (splitStores[key]) { // must have already been created
                        splitStores[key].instances[instanceId] = instance;
                    }
                }
            }
            return splitStores;
        };
        Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
            var splitHashes = {};
            for (var defId in eventUiBases) {
                if (defId) { // not the '' key
                    for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                        var key = _a[_i];
                        if (!splitHashes[key]) {
                            splitHashes[key] = {};
                        }
                        splitHashes[key][defId] = eventUiBases[defId];
                    }
                }
            }
            return splitHashes;
        };
        Splitter.prototype._splitInteraction = function (interaction) {
            var splitStates = {};
            if (interaction) {
                var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents) // can't use cached. might be events from other calendar
                );
                var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
                var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
                var populate = function (key) {
                    if (!splitStates[key]) {
                        splitStates[key] = {
                            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                            isEvent: interaction.isEvent,
                            origSeg: interaction.origSeg
                        };
                    }
                };
                for (var key in affectedStores_1) {
                    populate(key);
                }
                for (var key in mutatedStores_1) {
                    populate(key);
                }
            }
            return splitStates;
        };
        return Splitter;
    }());
    function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
        var baseParts = [];
        if (allUi) {
            baseParts.push(allUi);
        }
        if (eventUiForKey) {
            baseParts.push(eventUiForKey);
        }
        var stuff = {
            '': combineEventUis(baseParts)
        };
        if (individualUi) {
            __assign(stuff, individualUi);
        }
        return stuff;
    }
    function buildGotoAnchorHtml(component, gotoOptions, attrs, innerHtml) {
        var dateEnv = component.dateEnv;
        var date;
        var type;
        var forceOff;
        var finalOptions;
        if (gotoOptions instanceof Date) {
            date = gotoOptions; // a single date-like input
        }
        else {
            date = gotoOptions.date;
            type = gotoOptions.type;
            forceOff = gotoOptions.forceOff;
        }
        finalOptions = {
            date: dateEnv.formatIso(date, { omitTime: true }),
            type: type || 'day'
        };
        if (typeof attrs === 'string') {
            innerHtml = attrs;
            attrs = null;
        }
        attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
        innerHtml = innerHtml || '';
        if (!forceOff && component.opt('navLinks')) {
            return '<a' + attrs +
                ' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
                innerHtml +
                '</a>';
        }
        else {
            return '<span' + attrs + '>' +
                innerHtml +
                '</span>';
        }
    }
    function getAllDayHtml(component) {
        return component.opt('allDayHtml') || htmlEscape(component.opt('allDayText'));
    }
    function getDayClasses(date, dateProfile, context, noThemeHighlight) {
        var calendar = context.calendar, view = context.view, theme = context.theme, dateEnv = context.dateEnv;
        var classes = [];
        var todayStart;
        var todayEnd;
        if (!rangeContainsMarker(dateProfile.activeRange, date)) {
            classes.push('fc-disabled-day');
        }
        else {
            classes.push('fc-' + DAY_IDS[date.getUTCDay()]);
            if (view.opt('monthMode') &&
                dateEnv.getMonth(date) !== dateEnv.getMonth(dateProfile.currentRange.start)) {
                classes.push('fc-other-month');
            }
            todayStart = startOfDay(calendar.getNow());
            todayEnd = addDays(todayStart, 1);
            if (date < todayStart) {
                classes.push('fc-past');
            }
            else if (date >= todayEnd) {
                classes.push('fc-future');
            }
            else {
                classes.push('fc-today');
                if (noThemeHighlight !== true) {
                    classes.push(theme.getClass('today'));
                }
            }
        }
        return classes;
    }
    function unpromisify(func, success, failure) {
        var isResolved = false;
        var wrappedSuccess = function () {
            if (!isResolved) {
                isResolved = true;
                success.apply(this, arguments);
            }
        };
        var wrappedFailure = function () {
            if (!isResolved) {
                isResolved = true;
                if (failure) {
                    failure.apply(this, arguments);
                }
            }
        };
        var res = func(wrappedSuccess, wrappedFailure);
        if (res && typeof res.then === 'function') {
            res.then(wrappedSuccess, wrappedFailure);
        }
    }
    var Mixin = /** @class */ (function () {
        function Mixin() {
        }
        Mixin.mixInto = function (destClass) {
            this.mixIntoObj(destClass.prototype);
        };
        Mixin.mixIntoObj = function (destObj) {
            var _this = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
                if (!destObj[name]) { // if destination doesn't already define it
                    destObj[name] = _this.prototype[name];
                }
            });
        };
        /*
        will override existing methods
        TODO: remove! not used anymore
        */
        Mixin.mixOver = function (destClass) {
            var _this = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
                destClass.prototype[name] = _this.prototype[name];
            });
        };
        return Mixin;
    }());
    /*
    USAGE:
      import { default as EmitterMixin, EmitterInterface } from './EmitterMixin'
    in class:
      on: EmitterInterface['on']
      one: EmitterInterface['one']
      off: EmitterInterface['off']
      trigger: EmitterInterface['trigger']
      triggerWith: EmitterInterface['triggerWith']
      hasHandlers: EmitterInterface['hasHandlers']
    after class:
      EmitterMixin.mixInto(TheClass)
    */
    var EmitterMixin = /** @class */ (function (_super) {
        __extends(EmitterMixin, _super);
        function EmitterMixin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmitterMixin.prototype.on = function (type, handler) {
            addToHash(this._handlers || (this._handlers = {}), type, handler);
            return this; // for chaining
        };
        EmitterMixin.prototype.one = function (type, handler) {
            addToHash(this._oneHandlers || (this._oneHandlers = {}), type, handler);
            return this; // for chaining
        };
        EmitterMixin.prototype.off = function (type, handler) {
            if (this._handlers) {
                removeFromHash(this._handlers, type, handler);
            }
            if (this._oneHandlers) {
                removeFromHash(this._oneHandlers, type, handler);
            }
            return this; // for chaining
        };
        EmitterMixin.prototype.trigger = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.triggerWith(type, this, args);
            return this; // for chaining
        };
        EmitterMixin.prototype.triggerWith = function (type, context, args) {
            if (this._handlers) {
                applyAll(this._handlers[type], context, args);
            }
            if (this._oneHandlers) {
                applyAll(this._oneHandlers[type], context, args);
                delete this._oneHandlers[type]; // will never fire again
            }
            return this; // for chaining
        };
        EmitterMixin.prototype.hasHandlers = function (type) {
            return (this._handlers && this._handlers[type] && this._handlers[type].length) ||
                (this._oneHandlers && this._oneHandlers[type] && this._oneHandlers[type].length);
        };
        return EmitterMixin;
    }(Mixin));
    function addToHash(hash, type, handler) {
        (hash[type] || (hash[type] = []))
            .push(handler);
    }
    function removeFromHash(hash, type, handler) {
        if (handler) {
            if (hash[type]) {
                hash[type] = hash[type].filter(function (func) {
                    return func !== handler;
                });
            }
        }
        else {
            delete hash[type]; // remove all handler funcs for this type
        }
    }
    /*
    Records offset information for a set of elements, relative to an origin element.
    Can record the left/right OR the top/bottom OR both.
    Provides methods for querying the cache by position.
    */
    var PositionCache = /** @class */ (function () {
        function PositionCache(originEl, els, isHorizontal, isVertical) {
            this.originEl = originEl;
            this.els = els;
            this.isHorizontal = isHorizontal;
            this.isVertical = isVertical;
        }
        PositionCache.prototype.build = function () {
            var originEl = this.originEl;
            var originClientRect = this.originClientRect =
                originEl.getBoundingClientRect(); // relative to viewport top-left
            if (this.isHorizontal) {
                this.buildElHorizontals(originClientRect.left);
            }
            if (this.isVertical) {
                this.buildElVerticals(originClientRect.top);
            }
        };
        PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
            var lefts = [];
            var rights = [];
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                var rect = el.getBoundingClientRect();
                lefts.push(rect.left - originClientLeft);
                rights.push(rect.right - originClientLeft);
            }
            this.lefts = lefts;
            this.rights = rights;
        };
        PositionCache.prototype.buildElVerticals = function (originClientTop) {
            var tops = [];
            var bottoms = [];
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                var rect = el.getBoundingClientRect();
                tops.push(rect.top - originClientTop);
                bottoms.push(rect.bottom - originClientTop);
            }
            this.tops = tops;
            this.bottoms = bottoms;
        };
        PositionCache.prototype.leftToIndex = function (leftPosition) {
            var lefts = this.lefts;
            var rights = this.rights;
            var len = lefts.length;
            var i;
            for (i = 0; i < len; i++) {
                if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                    return i;
                }
            }
        };
        PositionCache.prototype.topToIndex = function (topPosition) {
            var tops = this.tops;
            var bottoms = this.bottoms;
            var len = tops.length;
            var i;
            for (i = 0; i < len; i++) {
                if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                    return i;
                }
            }
        };
        PositionCache.prototype.getWidth = function (leftIndex) {
            return this.rights[leftIndex] - this.lefts[leftIndex];
        };
        PositionCache.prototype.getHeight = function (topIndex) {
            return this.bottoms[topIndex] - this.tops[topIndex];
        };
        return PositionCache;
    }());
    /*
    An object for getting/setting scroll-related information for an element.
    Internally, this is done very differently for window versus DOM element,
    so this object serves as a common interface.
    */
    var ScrollController = /** @class */ (function () {
        function ScrollController() {
        }
        ScrollController.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight();
        };
        ScrollController.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth();
        };
        ScrollController.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0;
        };
        ScrollController.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0;
        };
        ScrollController.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop();
        };
        ScrollController.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0;
        };
        ScrollController.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft();
        };
        return ScrollController;
    }());
    var ElementScrollController = /** @class */ (function (_super) {
        __extends(ElementScrollController, _super);
        function ElementScrollController(el) {
            var _this = _super.call(this) || this;
            _this.el = el;
            return _this;
        }
        ElementScrollController.prototype.getScrollTop = function () {
            return this.el.scrollTop;
        };
        ElementScrollController.prototype.getScrollLeft = function () {
            return this.el.scrollLeft;
        };
        ElementScrollController.prototype.setScrollTop = function (top) {
            this.el.scrollTop = top;
        };
        ElementScrollController.prototype.setScrollLeft = function (left) {
            this.el.scrollLeft = left;
        };
        ElementScrollController.prototype.getScrollWidth = function () {
            return this.el.scrollWidth;
        };
        ElementScrollController.prototype.getScrollHeight = function () {
            return this.el.scrollHeight;
        };
        ElementScrollController.prototype.getClientHeight = function () {
            return this.el.clientHeight;
        };
        ElementScrollController.prototype.getClientWidth = function () {
            return this.el.clientWidth;
        };
        return ElementScrollController;
    }(ScrollController));
    var WindowScrollController = /** @class */ (function (_super) {
        __extends(WindowScrollController, _super);
        function WindowScrollController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WindowScrollController.prototype.getScrollTop = function () {
            return window.pageYOffset;
        };
        WindowScrollController.prototype.getScrollLeft = function () {
            return window.pageXOffset;
        };
        WindowScrollController.prototype.setScrollTop = function (n) {
            window.scroll(window.pageXOffset, n);
        };
        WindowScrollController.prototype.setScrollLeft = function (n) {
            window.scroll(n, window.pageYOffset);
        };
        WindowScrollController.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth;
        };
        WindowScrollController.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight;
        };
        WindowScrollController.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight;
        };
        WindowScrollController.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth;
        };
        return WindowScrollController;
    }(ScrollController));
    /*
    Embodies a div that has potential scrollbars
    */
    var ScrollComponent = /** @class */ (function (_super) {
        __extends(ScrollComponent, _super);
        function ScrollComponent(overflowX, overflowY) {
            var _this = _super.call(this, createElement('div', {
                className: 'fc-scroller'
            })) || this;
            _this.overflowX = overflowX;
            _this.overflowY = overflowY;
            _this.applyOverflow();
            return _this;
        }
        ScrollComponent.prototype.clear = function () {
            this.setHeight('auto');
            this.applyOverflow();
        };
        ScrollComponent.prototype.destroy = function () {
            removeElement(this.el);
        };
        ScrollComponent.prototype.applyOverflow = function () {
            applyStyle(this.el, {
                overflowX: this.overflowX,
                overflowY: this.overflowY
            });
        };
        ScrollComponent.prototype.lockOverflow = function (scrollbarWidths) {
            var overflowX = this.overflowX;
            var overflowY = this.overflowY;
            scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
            if (overflowX === 'auto') {
                overflowX = (scrollbarWidths.bottom || // horizontal scrollbars?
                    this.canScrollHorizontally() // OR scrolling pane with massless scrollbars?
                ) ? 'scroll' : 'hidden';
            }
            if (overflowY === 'auto') {
                overflowY = (scrollbarWidths.left || scrollbarWidths.right || // horizontal scrollbars?
                    this.canScrollVertically() // OR scrolling pane with massless scrollbars?
                ) ? 'scroll' : 'hidden';
            }
            applyStyle(this.el, { overflowX: overflowX, overflowY: overflowY });
        };
        ScrollComponent.prototype.setHeight = function (height) {
            applyStyleProp(this.el, 'height', height);
        };
        ScrollComponent.prototype.getScrollbarWidths = function () {
            var edges = computeEdges(this.el);
            return {
                left: edges.scrollbarLeft,
                right: edges.scrollbarRight,
                bottom: edges.scrollbarBottom
            };
        };
        return ScrollComponent;
    }(ElementScrollController));
    var Theme = /** @class */ (function () {
        function Theme(calendarOptions) {
            this.calendarOptions = calendarOptions;
            this.processIconOverride();
        }
        Theme.prototype.processIconOverride = function () {
            if (this.iconOverrideOption) {
                this.setIconOverride(this.calendarOptions[this.iconOverrideOption]);
            }
        };
        Theme.prototype.setIconOverride = function (iconOverrideHash) {
            var iconClassesCopy;
            var buttonName;
            if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
                iconClassesCopy = __assign({}, this.iconClasses);
                for (buttonName in iconOverrideHash) {
                    iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
                }
                this.iconClasses = iconClassesCopy;
            }
            else if (iconOverrideHash === false) {
                this.iconClasses = {};
            }
        };
        Theme.prototype.applyIconOverridePrefix = function (className) {
            var prefix = this.iconOverridePrefix;
            if (prefix && className.indexOf(prefix) !== 0) { // if not already present
                className = prefix + className;
            }
            return className;
        };
        Theme.prototype.getClass = function (key) {
            return this.classes[key] || '';
        };
        Theme.prototype.getIconClass = function (buttonName) {
            var className = this.iconClasses[buttonName];
            if (className) {
                return this.baseIconClass + ' ' + className;
            }
            return '';
        };
        Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
            var className;
            if (this.iconOverrideCustomButtonOption) {
                className = customButtonProps[this.iconOverrideCustomButtonOption];
                if (className) {
                    return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
                }
            }
            return '';
        };
        return Theme;
    }());
    Theme.prototype.classes = {};
    Theme.prototype.iconClasses = {};
    Theme.prototype.baseIconClass = '';
    Theme.prototype.iconOverridePrefix = '';
    var guid = 0;
    var Component = /** @class */ (function () {
        function Component(context, isView) {
            if (isView) {
                context.view = this;
            }
            this.uid = String(guid++);
            this.context = context;
            this.dateEnv = context.dateEnv;
            this.theme = context.theme;
            this.view = context.view;
            this.calendar = context.calendar;
            this.isRtl = this.opt('dir') === 'rtl';
        }
        Component.addEqualityFuncs = function (newFuncs) {
            this.prototype.equalityFuncs = __assign({}, this.prototype.equalityFuncs, newFuncs);
        };
        Component.prototype.opt = function (name) {
            return this.context.options[name];
        };
        Component.prototype.receiveProps = function (props) {
            var _a = recycleProps(this.props || {}, props, this.equalityFuncs), anyChanges = _a.anyChanges, comboProps = _a.comboProps;
            this.props = comboProps;
            if (anyChanges) {
                this.render(comboProps);
            }
        };
        Component.prototype.render = function (props) {
        };
        Component.prototype.destroy = function () {
        };
        return Component;
    }());
    Component.prototype.equalityFuncs = {};
    /*
    Reuses old values when equal. If anything is unequal, returns newProps as-is.
    Great for PureComponent, but won't be feasible with React, so just eliminate and use React's DOM diffing.
    */
    function recycleProps(oldProps, newProps, equalityFuncs) {
        var comboProps = {}; // some old, some new
        var anyChanges = false;
        for (var key in newProps) {
            if (key in oldProps && (oldProps[key] === newProps[key] ||
                (equalityFuncs[key] && equalityFuncs[key](oldProps[key], newProps[key])))) {
                comboProps[key] = oldProps[key];
            }
            else {
                comboProps[key] = newProps[key];
                anyChanges = true;
            }
        }
        for (var key in oldProps) {
            if (!(key in newProps)) {
                anyChanges = true;
                break;
            }
        }
        return { anyChanges: anyChanges, comboProps: comboProps };
    }
    /*
    PURPOSES:
    - hook up to fg, fill, and mirror renderers
    - interface for dragging and hits
    */
    var DateComponent = /** @class */ (function (_super) {
        __extends(DateComponent, _super);
        function DateComponent(context, el, isView) {
            var _this = _super.call(this, context, isView) || this;
            _this.el = el;
            return _this;
        }
        DateComponent.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            removeElement(this.el);
        };
        /*
        renderEventDragSegs(state: EventSegUiInteractionState) {
          if (state) {
            let { isEvent, segs, sourceSeg } = state
            if (this.eventRenderer) {
              this.eventRenderer.hideByHash(state.affectedInstances)
            }
            if (isEvent && (this.doesDragMirror || sourceSeg && sourceSeg.component.doesDragMirror)) {
              if (this.mirrorRenderer) {
                this.mirrorRenderer.renderSegs(segs, { isDragging: true, sourceSeg })
              }
            }
            if (!isEvent || this.doesDragHighlight) {
              if (this.fillRenderer) {
                this.fillRenderer.renderSegs('highlight', segs)
              }
            }
          }
        }
        */
        DateComponent.prototype.buildPositionCaches = function () {
        };
        DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            return null; // this should be abstract
        };
        DateComponent.prototype.isInteractionValid = function (interaction) {
            var calendar = this.calendar;
            var dateProfile = this.props.dateProfile; // HACK
            var instances = interaction.mutatedEvents.instances;
            if (dateProfile) { // HACK for DayTile
                for (var instanceId in instances) {
                    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
                        return false;
                    }
                }
            }
            return isInteractionValid(interaction, calendar);
        };
        DateComponent.prototype.isDateSelectionValid = function (selection) {
            var dateProfile = this.props.dateProfile; // HACK
            if (dateProfile && // HACK for DayTile
                !rangeContainsRange(dateProfile.validRange, selection.range)) {
                return false;
            }
            return isDateSelectionValid(selection, this.calendar);
        };
        DateComponent.prototype.publiclyTrigger = function (name, args) {
            var calendar = this.calendar;
            return calendar.publiclyTrigger(name, args);
        };
        DateComponent.prototype.publiclyTriggerAfterSizing = function (name, args) {
            var calendar = this.calendar;
            return calendar.publiclyTriggerAfterSizing(name, args);
        };
        DateComponent.prototype.hasPublicHandlers = function (name) {
            var calendar = this.calendar;
            return calendar.hasPublicHandlers(name);
        };
        DateComponent.prototype.triggerRenderedSegs = function (segs, isMirrors) {
            var calendar = this.calendar;
            if (this.hasPublicHandlers('eventPositioned')) {
                for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                    var seg = segs_1[_i];
                    this.publiclyTriggerAfterSizing('eventPositioned', [
                        {
                            event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                            isMirror: isMirrors,
                            isStart: seg.isStart,
                            isEnd: seg.isEnd,
                            el: seg.el,
                            view: this // safe to cast because this method is only called on context.view
                        }
                    ]);
                }
            }
            if (!calendar.state.loadingLevel) { // avoid initial empty state while pending
                calendar.afterSizingTriggers._eventsPositioned = [null]; // fire once
            }
        };
        DateComponent.prototype.triggerWillRemoveSegs = function (segs, isMirrors) {
            var calendar = this.calendar;
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                calendar.trigger('eventElRemove', seg.el);
            }
            if (this.hasPublicHandlers('eventDestroy')) {
                for (var _a = 0, segs_3 = segs; _a < segs_3.length; _a++) {
                    var seg = segs_3[_a];
                    this.publiclyTrigger('eventDestroy', [
                        {
                            event: new EventApi(calendar, seg.eventRange.def, seg.eventRange.instance),
                            isMirror: isMirrors,
                            el: seg.el,
                            view: this // safe to cast because this method is only called on context.view
                        }
                    ]);
                }
            }
        };
        DateComponent.prototype.isValidSegDownEl = function (el) {
            return !this.props.eventDrag && // HACK
                !this.props.eventResize && // HACK
                !elementClosest(el, '.fc-mirror') &&
                (this.isPopover() || !this.isInPopover(el));
        };
        DateComponent.prototype.isValidDateDownEl = function (el) {
            var segEl = elementClosest(el, this.fgSegSelector);
            return (!segEl || segEl.classList.contains('fc-mirror')) &&
                !elementClosest(el, '.fc-more') && // a "more.." link
                !elementClosest(el, 'a[data-goto]') && // a clickable nav link
                !this.isInPopover(el);
        };
        DateComponent.prototype.isPopover = function () {
            return this.el.classList.contains('fc-popover');
        };
        DateComponent.prototype.isInPopover = function (el) {
            return Boolean(elementClosest(el, '.fc-popover'));
        };
        return DateComponent;
    }(Component));
    DateComponent.prototype.fgSegSelector = '.fc-event-container > *';
    DateComponent.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)';
    var uid$1 = 0;
    function createPlugin(input) {
        return {
            id: String(uid$1++),
            deps: input.deps || [],
            reducers: input.reducers || [],
            eventDefParsers: input.eventDefParsers || [],
            isDraggableTransformers: input.isDraggableTransformers || [],
            eventDragMutationMassagers: input.eventDragMutationMassagers || [],
            eventDefMutationAppliers: input.eventDefMutationAppliers || [],
            dateSelectionTransformers: input.dateSelectionTransformers || [],
            datePointTransforms: input.datePointTransforms || [],
            dateSpanTransforms: input.dateSpanTransforms || [],
            views: input.views || {},
            viewPropsTransformers: input.viewPropsTransformers || [],
            isPropsValid: input.isPropsValid || null,
            externalDefTransforms: input.externalDefTransforms || [],
            eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
            viewContainerModifiers: input.viewContainerModifiers || [],
            eventDropTransformers: input.eventDropTransformers || [],
            componentInteractions: input.componentInteractions || [],
            calendarInteractions: input.calendarInteractions || [],
            themeClasses: input.themeClasses || {},
            eventSourceDefs: input.eventSourceDefs || [],
            cmdFormatter: input.cmdFormatter,
            recurringTypes: input.recurringTypes || [],
            namedTimeZonedImpl: input.namedTimeZonedImpl,
            defaultView: input.defaultView || '',
            elementDraggingImpl: input.elementDraggingImpl,
            optionChangeHandlers: input.optionChangeHandlers || {}
        };
    }
    var PluginSystem = /** @class */ (function () {
        function PluginSystem() {
            this.hooks = {
                reducers: [],
                eventDefParsers: [],
                isDraggableTransformers: [],
                eventDragMutationMassagers: [],
                eventDefMutationAppliers: [],
                dateSelectionTransformers: [],
                datePointTransforms: [],
                dateSpanTransforms: [],
                views: {},
                viewPropsTransformers: [],
                isPropsValid: null,
                externalDefTransforms: [],
                eventResizeJoinTransforms: [],
                viewContainerModifiers: [],
                eventDropTransformers: [],
                componentInteractions: [],
                calendarInteractions: [],
                themeClasses: {},
                eventSourceDefs: [],
                cmdFormatter: null,
                recurringTypes: [],
                namedTimeZonedImpl: null,
                defaultView: '',
                elementDraggingImpl: null,
                optionChangeHandlers: {}
            };
            this.addedHash = {};
        }
        PluginSystem.prototype.add = function (plugin) {
            if (!this.addedHash[plugin.id]) {
                this.addedHash[plugin.id] = true;
                for (var _i = 0, _a = plugin.deps; _i < _a.length; _i++) {
                    var dep = _a[_i];
                    this.add(dep);
                }
                this.hooks = combineHooks(this.hooks, plugin);
            }
        };
        return PluginSystem;
    }());
    function combineHooks(hooks0, hooks1) {
        return {
            reducers: hooks0.reducers.concat(hooks1.reducers),
            eventDefParsers: hooks0.eventDefParsers.concat(hooks1.eventDefParsers),
            isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
            eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
            eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
            dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
            datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
            dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
            views: __assign({}, hooks0.views, hooks1.views),
            viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
            isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
            externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
            eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
            viewContainerModifiers: hooks0.viewContainerModifiers.concat(hooks1.viewContainerModifiers),
            eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
            calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
            componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
            themeClasses: __assign({}, hooks0.themeClasses, hooks1.themeClasses),
            eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
            cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
            recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
            namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
            defaultView: hooks0.defaultView || hooks1.defaultView,
            elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
            optionChangeHandlers: __assign({}, hooks0.optionChangeHandlers, hooks1.optionChangeHandlers)
        };
    }
    var eventSourceDef = {
        ignoreRange: true,
        parseMeta: function (raw) {
            if (Array.isArray(raw)) { // short form
                return raw;
            }
            else if (Array.isArray(raw.events)) {
                return raw.events;
            }
            return null;
        },
        fetch: function (arg, success) {
            success({
                rawEvents: arg.eventSource.meta
            });
        }
    };
    var ArrayEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef]
    });
    var eventSourceDef$1 = {
        parseMeta: function (raw) {
            if (typeof raw === 'function') { // short form
                return raw;
            }
            else if (typeof raw.events === 'function') {
                return raw.events;
            }
            return null;
        },
        fetch: function (arg, success, failure) {
            var dateEnv = arg.calendar.dateEnv;
            var func = arg.eventSource.meta;
            unpromisify(func.bind(null, {
                start: dateEnv.toDate(arg.range.start),
                end: dateEnv.toDate(arg.range.end),
                startStr: dateEnv.formatIso(arg.range.start),
                endStr: dateEnv.formatIso(arg.range.end),
                timeZone: dateEnv.timeZone
            }), function (rawEvents) {
                success({ rawEvents: rawEvents }); // needs an object response
            }, failure // send errorObj directly to failure callback
            );
        }
    };
    var FuncEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$1]
    });
    function requestJson(method, url, params, successCallback, failureCallback) {
        method = method.toUpperCase();
        var body = null;
        if (method === 'GET') {
            url = injectQueryStringParams(url, params);
        }
        else {
            body = encodeParams(params);
        }
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method !== 'GET') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                try {
                    var res = JSON.parse(xhr.responseText);
                    successCallback(res, xhr);
                }
                catch (err) {
                    failureCallback('Failure parsing JSON', xhr);
                }
            }
            else {
                failureCallback('Request failed', xhr);
            }
        };
        xhr.onerror = function () {
            failureCallback('Request failed', xhr);
        };
        xhr.send(body);
    }
    function injectQueryStringParams(url, params) {
        return url +
            (url.indexOf('?') === -1 ? '?' : '&') +
            encodeParams(params);
    }
    function encodeParams(params) {
        var parts = [];
        for (var key in params) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
        }
        return parts.join('&');
    }
    var eventSourceDef$2 = {
        parseMeta: function (raw) {
            if (typeof raw === 'string') { // short form
                raw = { url: raw };
            }
            else if (!raw || typeof raw !== 'object' || !raw.url) {
                return null;
            }
            return {
                url: raw.url,
                method: (raw.method || 'GET').toUpperCase(),
                extraParams: raw.extraParams,
                startParam: raw.startParam,
                endParam: raw.endParam,
                timeZoneParam: raw.timeZoneParam
            };
        },
        fetch: function (arg, success, failure) {
            var meta = arg.eventSource.meta;
            var requestParams = buildRequestParams(meta, arg.range, arg.calendar);
            requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
                success({ rawEvents: rawEvents, xhr: xhr });
            }, function (errorMessage, xhr) {
                failure({ message: errorMessage, xhr: xhr });
            });
        }
    };
    var JsonFeedEventSourcePlugin = createPlugin({
        eventSourceDefs: [eventSourceDef$2]
    });
    function buildRequestParams(meta, range, calendar) {
        var dateEnv = calendar.dateEnv;
        var startParam;
        var endParam;
        var timeZoneParam;
        var customRequestParams;
        var params = {};
        startParam = meta.startParam;
        if (startParam == null) {
            startParam = calendar.opt('startParam');
        }
        endParam = meta.endParam;
        if (endParam == null) {
            endParam = calendar.opt('endParam');
        }
        timeZoneParam = meta.timeZoneParam;
        if (timeZoneParam == null) {
            timeZoneParam = calendar.opt('timeZoneParam');
        }
        if (typeof meta.extraParams === 'function') {
            customRequestParams = meta.extraParams();
        }
        else {
            customRequestParams = meta.extraParams || {};
        }
        __assign(params, customRequestParams);
        params[startParam] = dateEnv.formatIso(range.start);
        params[endParam] = dateEnv.formatIso(range.end);
        if (dateEnv.timeZone !== 'local') {
            params[timeZoneParam] = dateEnv.timeZone;
        }
        return params;
    }
    var recurring = {
        parse: function (rawEvent, leftoverProps, dateEnv) {
            var createMarker = dateEnv.createMarker.bind(dateEnv);
            var processors = {
                daysOfWeek: null,
                startTime: createDuration,
                endTime: createDuration,
                startRecur: createMarker,
                endRecur: createMarker
            };
            var props = refineProps(rawEvent, processors, {}, leftoverProps);
            var anyValid = false;
            for (var propName in props) {
                if (props[propName] != null) {
                    anyValid = true;
                    break;
                }
            }
            if (anyValid) {
                var duration = null;
                if ('duration' in leftoverProps) {
                    duration = createDuration(leftoverProps.duration);
                    delete leftoverProps.duration;
                }
                if (!duration && props.startTime && props.endTime) {
                    duration = subtractDurations(props.endTime, props.startTime);
                }
                return {
                    allDayGuess: Boolean(!props.startTime && !props.endTime),
                    duration: duration,
                    typeData: props // doesn't need endTime anymore but oh well
                };
            }
            return null;
        },
        expand: function (typeData, framingRange, dateEnv) {
            var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
            if (clippedFramingRange) {
                return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
            }
            else {
                return [];
            }
        }
    };
    var SimpleRecurrencePlugin = createPlugin({
        recurringTypes: [recurring]
    });
    function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
        var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
        var dayMarker = startOfDay(framingRange.start);
        var endMarker = framingRange.end;
        var instanceStarts = [];
        while (dayMarker < endMarker) {
            var instanceStart 
            = void 0;
            if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
                if (startTime) {
                    instanceStart = dateEnv.add(dayMarker, startTime);
                }
                else {
                    instanceStart = dayMarker;
                }
                instanceStarts.push(instanceStart);
            }
            dayMarker = addDays(dayMarker, 1);
        }
        return instanceStarts;
    }
    var DefaultOptionChangeHandlers = createPlugin({
        optionChangeHandlers: {
            events: function (events, calendar, deepEqual) {
                handleEventSources([events], calendar, deepEqual);
            },
            eventSources: handleEventSources,
            plugins: handlePlugins
        }
    });
    function handleEventSources(inputs, calendar, deepEqual) {
        var unfoundSources = hashValuesToArray(calendar.state.eventSources);
        var newInputs = [];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var inputFound = false;
            for (var i = 0; i < unfoundSources.length; i++) {
                if (deepEqual(unfoundSources[i]._raw, input)) {
                    unfoundSources.splice(i, 1); // delete
                    inputFound = true;
                    break;
                }
            }
            if (!inputFound) {
                newInputs.push(input);
            }
        }
        for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
            var unfoundSource = unfoundSources_1[_a];
            calendar.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: unfoundSource.sourceId
            });
        }
        for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
            var newInput = newInputs_1[_b];
            calendar.addEventSource(newInput);
        }
    }
    function handlePlugins(inputs, calendar) {
        calendar.addPluginInputs(inputs); // will gracefully handle duplicates
    }
    var config = {}; // TODO: make these options
    var globalDefaults = {
        defaultRangeSeparator: ' - ',
        titleRangeSeparator: ' \u2013 ',
        defaultTimedEventDuration: '01:00:00',
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: false,
        nextDayThreshold: '00:00:00',
        columnHeader: true,
        defaultView: '',
        aspectRatio: 1.35,
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next'
        },
        weekends: true,
        weekNumbers: false,
        weekNumberCalculation: 'local',
        editable: false,
        scrollTime: '06:00:00',
        minTime: '00:00:00',
        maxTime: '24:00:00',
        showNonCurrentDates: true,
        lazyFetching: true,
        startParam: 'start',
        endParam: 'end',
        timeZoneParam: 'timeZone',
        timeZone: 'local',
        locales: [],
        locale: '',
        timeGridEventMinHeight: 0,
        themeSystem: 'standard',
        dragRevertDuration: 500,
        dragScroll: true,
        allDayMaintainDuration: false,
        unselectAuto: true,
        dropAccept: '*',
        eventOrder: 'start,-duration,allDay,title',
        eventLimit: false,
        eventLimitClick: 'popover',
        dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        handleWindowResize: true,
        windowResizeDelay: 100,
        longPressDelay: 1000,
        eventDragMinDistance: 5 // only applies to mouse
    };
    var rtlDefaults = {
        header: {
            left: 'next,prev today',
            center: '',
            right: 'title'
        },
        buttonIcons: {
            prev: 'fc-icon-chevron-right',
            next: 'fc-icon-chevron-left',
            prevYear: 'fc-icon-chevrons-right',
            nextYear: 'fc-icon-chevrons-left'
        }
    };
    var complexOptions = [
        'header',
        'footer',
        'buttonText',
        'buttonIcons'
    ];
    function mergeOptions(optionObjs) {
        return mergeProps(optionObjs, complexOptions);
    }
    var INTERNAL_PLUGINS = [
        ArrayEventSourcePlugin,
        FuncEventSourcePlugin,
        JsonFeedEventSourcePlugin,
        SimpleRecurrencePlugin,
        DefaultOptionChangeHandlers
    ];
    function refinePluginDefs(pluginInputs) {
        var plugins = [];
        for (var _i = 0, pluginInputs_1 = pluginInputs; _i < pluginInputs_1.length; _i++) {
            var pluginInput = pluginInputs_1[_i];
            if (typeof pluginInput === 'string') {
                var globalName = 'FullCalendar' + capitaliseFirstLetter(pluginInput);
                if (!window[globalName]) {
                    console.warn('Plugin file not loaded for ' + pluginInput);
                }
                else {
                    plugins.push(window[globalName].default); // is an ES6 module
                }
            }
            else {
                plugins.push(pluginInput);
            }
        }
        return INTERNAL_PLUGINS.concat(plugins);
    }
    var RAW_EN_LOCALE = {
        code: 'en',
        week: {
            dow: 0,
            doy: 4 // 4 days need to be within the year to be considered the first week
        },
        dir: 'ltr',
        buttonText: {
            prev: 'prev',
            next: 'next',
            prevYear: 'prev year',
            nextYear: 'next year',
            year: 'year',
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day',
            list: 'list'
        },
        weekLabel: 'W',
        allDayText: 'all-day',
        eventLimitText: 'more',
        noEventsMessage: 'No events to display'
    };
    function parseRawLocales(explicitRawLocales) {
        var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
        var globalArray = window['FullCalendarLocalesAll'] || []; // from locales-all.js
        var globalObject = window['FullCalendarLocales'] || {}; // from locales/*.js. keys are meaningless
        var allRawLocales = globalArray.concat(// globalArray is low prio
        hashValuesToArray(globalObject), // medium prio
        explicitRawLocales // highest prio
        );
        var rawLocaleMap = {
            en: RAW_EN_LOCALE // necessary?
        };
        for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
            var rawLocale = allRawLocales_1[_i];
            rawLocaleMap[rawLocale.code] = rawLocale;
        }
        return {
            map: rawLocaleMap,
            defaultCode: defaultCode
        };
    }
    function buildLocale(inputSingular, available) {
        if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
            return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
        }
        else {
            return queryLocale(inputSingular, available);
        }
    }
    function queryLocale(codeArg, available) {
        var codes = [].concat(codeArg || []); // will convert to array
        var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
        return parseLocale(codeArg, codes, raw);
    }
    function queryRawLocale(codes, available) {
        for (var i = 0; i < codes.length; i++) {
            var parts = codes[i].toLocaleLowerCase().split('-');
            for (var j = parts.length; j > 0; j--) {
                var simpleId = parts.slice(0, j).join('-');
                if (available[simpleId]) {
                    return available[simpleId];
                }
            }
        }
        return null;
    }
    function parseLocale(codeArg, codes, raw) {
        var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
        delete merged.code; // don't want this part of the options
        var week = merged.week;
        delete merged.week;
        return {
            codeArg: codeArg,
            codes: codes,
            week: week,
            simpleNumberFormat: new Intl.NumberFormat(codeArg),
            options: merged
        };
    }
    var OptionsManager = /** @class */ (function () {
        function OptionsManager(overrides) {
            this.overrides = __assign({}, overrides); // make a copy
            this.dynamicOverrides = {};
            this.compute();
        }
        OptionsManager.prototype.mutate = function (updates, removals, isDynamic) {
            var overrideHash = isDynamic ? this.dynamicOverrides : this.overrides;
            __assign(overrideHash, updates);
            for (var _i = 0, removals_1 = removals; _i < removals_1.length; _i++) {
                var propName = removals_1[_i];
                delete overrideHash[propName];
            }
            this.compute();
        };
        OptionsManager.prototype.compute = function () {
            var locales = firstDefined(// explicit locale option given?
            this.dynamicOverrides.locales, this.overrides.locales, globalDefaults.locales);
            var locale = firstDefined(// explicit locales option given?
            this.dynamicOverrides.locale, this.overrides.locale, globalDefaults.locale);
            var available = parseRawLocales(locales);
            var localeDefaults = buildLocale(locale || available.defaultCode, available.map).options;
            var dir = firstDefined(// based on options computed so far, is direction RTL?
            this.dynamicOverrides.dir, this.overrides.dir, localeDefaults.dir);
            var dirDefaults = dir === 'rtl' ? rtlDefaults : {};
            this.dirDefaults = dirDefaults;
            this.localeDefaults = localeDefaults;
            this.computed = mergeOptions([
                globalDefaults,
                dirDefaults,
                localeDefaults,
                this.overrides,
                this.dynamicOverrides
            ]);
        };
        return OptionsManager;
    }());
    var calendarSystemClassMap = {};
    function registerCalendarSystem(name, theClass) {
        calendarSystemClassMap[name] = theClass;
    }
    function createCalendarSystem(name) {
        return new calendarSystemClassMap[name]();
    }
    var GregorianCalendarSystem = /** @class */ (function () {
        function GregorianCalendarSystem() {
        }
        GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
            return d.getUTCFullYear();
        };
        GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
            return d.getUTCMonth();
        };
        GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
            return d.getUTCDate();
        };
        GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
            return arrayToUtcDate(arr);
        };
        GregorianCalendarSystem.prototype.markerToArray = function (marker) {
            return dateToUtcArray(marker);
        };
        return GregorianCalendarSystem;
    }());
    registerCalendarSystem('gregory', GregorianCalendarSystem);
    var ISO_RE = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function parse(str) {
        var m = ISO_RE.exec(str);
        if (m) {
            var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));
            if (isValidDate(marker)) {
                var timeZoneOffset = null;
                if (m[13]) {
                    timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                        Number(m[18] || 0));
                }
                return {
                    marker: marker,
                    isTimeUnspecified: !m[6],
                    timeZoneOffset: timeZoneOffset
                };
            }
        }
        return null;
    }
    var DateEnv = /** @class */ (function () {
        function DateEnv(settings) {
            var timeZone = this.timeZone = settings.timeZone;
            var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
            if (settings.namedTimeZoneImpl && isNamedTimeZone) {
                this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
            }
            this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
            this.calendarSystem = createCalendarSystem(settings.calendarSystem);
            this.locale = settings.locale;
            this.weekDow = settings.locale.week.dow;
            this.weekDoy = settings.locale.week.doy;
            if (settings.weekNumberCalculation === 'ISO') {
                this.weekDow = 1;
                this.weekDoy = 4;
            }
            if (typeof settings.firstDay === 'number') {
                this.weekDow = settings.firstDay;
            }
            if (typeof settings.weekNumberCalculation === 'function') {
                this.weekNumberFunc = settings.weekNumberCalculation;
            }
            this.weekLabel = settings.weekLabel != null ? settings.weekLabel : settings.locale.options.weekLabel;
            this.cmdFormatter = settings.cmdFormatter;
        }
        DateEnv.prototype.createMarker = function (input) {
            var meta = this.createMarkerMeta(input);
            if (meta === null) {
                return null;
            }
            return meta.marker;
        };
        DateEnv.prototype.createNowMarker = function () {
            if (this.canComputeOffset) {
                return this.timestampToMarker(new Date().valueOf());
            }
            else {
                return arrayToUtcDate(dateToLocalArray(new Date()));
            }
        };
        DateEnv.prototype.createMarkerMeta = function (input) {
            if (typeof input === 'string') {
                return this.parse(input);
            }
            var marker = null;
            if (typeof input === 'number') {
                marker = this.timestampToMarker(input);
            }
            else if (input instanceof Date) {
                input = input.valueOf();
                if (!isNaN(input)) {
                    marker = this.timestampToMarker(input);
                }
            }
            else if (Array.isArray(input)) {
                marker = arrayToUtcDate(input);
            }
            if (marker === null || !isValidDate(marker)) {
                return null;
            }
            return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
        };
        DateEnv.prototype.parse = function (s) {
            var parts = parse(s);
            if (parts === null) {
                return null;
            }
            var marker = parts.marker;
            var forcedTzo = null;
            if (parts.timeZoneOffset !== null) {
                if (this.canComputeOffset) {
                    marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
                }
                else {
                    forcedTzo = parts.timeZoneOffset;
                }
            }
            return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
        };
        DateEnv.prototype.getYear = function (marker) {
            return this.calendarSystem.getMarkerYear(marker);
        };
        DateEnv.prototype.getMonth = function (marker) {
            return this.calendarSystem.getMarkerMonth(marker);
        };
        DateEnv.prototype.add = function (marker, dur) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] += dur.years;
            a[1] += dur.months;
            a[2] += dur.days;
            a[6] += dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.subtract = function (marker, dur) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] -= dur.years;
            a[1] -= dur.months;
            a[2] -= dur.days;
            a[6] -= dur.milliseconds;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addYears = function (marker, n) {
            var a = this.calendarSystem.markerToArray(marker);
            a[0] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.addMonths = function (marker, n) {
            var a = this.calendarSystem.markerToArray(marker);
            a[1] += n;
            return this.calendarSystem.arrayToMarker(a);
        };
        DateEnv.prototype.diffWholeYears = function (m0, m1) {
            var calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
                calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
                return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
            }
            return null;
        };
        DateEnv.prototype.diffWholeMonths = function (m0, m1) {
            var calendarSystem = this.calendarSystem;
            if (timeAsMs(m0) === timeAsMs(m1) &&
                calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
                return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                    (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
            }
            return null;
        };
        DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
            var n = this.diffWholeYears(m0, m1);
            if (n !== null) {
                return { unit: 'year', value: n };
            }
            n = this.diffWholeMonths(m0, m1);
            if (n !== null) {
                return { unit: 'month', value: n };
            }
            n = diffWholeWeeks(m0, m1);
            if (n !== null) {
                return { unit: 'week', value: n };
            }
            n = diffWholeDays(m0, m1);
            if (n !== null) {
                return { unit: 'day', value: n };
            }
            n = diffHours(m0, m1);
            if (isInt(n)) {
                return { unit: 'hour', value: n };
            }
            n = diffMinutes(m0, m1);
            if (isInt(n)) {
                return { unit: 'minute', value: n };
            }
            n = diffSeconds(m0, m1);
            if (isInt(n)) {
                return { unit: 'second', value: n };
            }
            return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
        };
        DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
            var diff;
            if (d.years) {
                diff = this.diffWholeYears(m0, m1);
                if (diff !== null) {
                    return diff / asRoughYears(d);
                }
            }
            if (d.months) {
                diff = this.diffWholeMonths(m0, m1);
                if (diff !== null) {
                    return diff / asRoughMonths(d);
                }
            }
            if (d.days) {
                diff = diffWholeDays(m0, m1);
                if (diff !== null) {
                    return diff / asRoughDays(d);
                }
            }
            return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
        };
        DateEnv.prototype.startOf = function (m, unit) {
            if (unit === 'year') {
                return this.startOfYear(m);
            }
            else if (unit === 'month') {
                return this.startOfMonth(m);
            }
            else if (unit === 'week') {
                return this.startOfWeek(m);
            }
            else if (unit === 'day') {
                return startOfDay(m);
            }
            else if (unit === 'hour') {
                return startOfHour(m);
            }
            else if (unit === 'minute') {
                return startOfMinute(m);
            }
            else if (unit === 'second') {
                return startOfSecond(m);
            }
        };
        DateEnv.prototype.startOfYear = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m)
            ]);
        };
        DateEnv.prototype.startOfMonth = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m)
            ]);
        };
        DateEnv.prototype.startOfWeek = function (m) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(m),
                this.calendarSystem.getMarkerMonth(m),
                m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7)
            ]);
        };
        DateEnv.prototype.computeWeekNumber = function (marker) {
            if (this.weekNumberFunc) {
                return this.weekNumberFunc(this.toDate(marker));
            }
            else {
                return weekOfYear(marker, this.weekDow, this.weekDoy);
            }
        };
        DateEnv.prototype.format = function (marker, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            return formatter.format({
                marker: marker,
                timeZoneOffset: dateOptions.forcedTzo != null ?
                    dateOptions.forcedTzo :
                    this.offsetForMarker(marker)
            }, this);
        };
        DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
            if (dateOptions === void 0) { dateOptions = {}; }
            if (dateOptions.isEndExclusive) {
                end = addMs(end, -1);
            }
            return formatter.formatRange({
                marker: start,
                timeZoneOffset: dateOptions.forcedStartTzo != null ?
                    dateOptions.forcedStartTzo :
                    this.offsetForMarker(start)
            }, {
                marker: end,
                timeZoneOffset: dateOptions.forcedEndTzo != null ?
                    dateOptions.forcedEndTzo :
                    this.offsetForMarker(end)
            }, this);
        };
        DateEnv.prototype.formatIso = function (marker, extraOptions) {
            if (extraOptions === void 0) { extraOptions = {}; }
            var timeZoneOffset = null;
            if (!extraOptions.omitTimeZoneOffset) {
                if (extraOptions.forcedTzo != null) {
                    timeZoneOffset = extraOptions.forcedTzo;
                }
                else {
                    timeZoneOffset = this.offsetForMarker(marker);
                }
            }
            return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
        };
        DateEnv.prototype.timestampToMarker = function (ms) {
            if (this.timeZone === 'local') {
                return arrayToUtcDate(dateToLocalArray(new Date(ms)));
            }
            else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
                return new Date(ms);
            }
            else {
                return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
            }
        };
        DateEnv.prototype.offsetForMarker = function (m) {
            if (this.timeZone === 'local') {
                return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
            }
            else if (this.timeZone === 'UTC') {
                return 0;
            }
            else if (this.namedTimeZoneImpl) {
                return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
            }
            return null;
        };
        DateEnv.prototype.toDate = function (m, forcedTzo) {
            if (this.timeZone === 'local') {
                return arrayToLocalDate(dateToUtcArray(m));
            }
            else if (this.timeZone === 'UTC') {
                return new Date(m.valueOf()); // make sure it's a copy
            }
            else if (!this.namedTimeZoneImpl) {
                return new Date(m.valueOf() - (forcedTzo || 0));
            }
            else {
                return new Date(m.valueOf() -
                    this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
                );
            }
        };
        return DateEnv;
    }());
    var SIMPLE_SOURCE_PROPS = {
        id: String,
        allDayDefault: Boolean,
        eventDataTransform: Function,
        success: Function,
        failure: Function
    };
    var uid$2 = 0;
    function doesSourceNeedRange(eventSource, calendar) {
        var defs = calendar.pluginSystem.hooks.eventSourceDefs;
        return !defs[eventSource.sourceDefId].ignoreRange;
    }
    function parseEventSource(raw, calendar) {
        var defs = calendar.pluginSystem.hooks.eventSourceDefs;
        for (var i = defs.length - 1; i >= 0; i--) { // later-added plugins take precedence
            var def = defs[i];
            var meta = def.parseMeta(raw);
            if (meta) {
                var res = parseEventSourceProps(typeof raw === 'object' ? raw : {}, meta, i, calendar);
                res._raw = raw;
                return res;
            }
        }
        return null;
    }
    function parseEventSourceProps(raw, meta, sourceDefId, calendar) {
        var leftovers0 = {};
        var props = refineProps(raw, SIMPLE_SOURCE_PROPS, {}, leftovers0);
        var leftovers1 = {};
        var ui = processUnscopedUiProps(leftovers0, calendar, leftovers1);
        props.isFetching = false;
        props.latestFetchId = '';
        props.fetchRange = null;
        props.publicId = String(raw.id || '');
        props.sourceId = String(uid$2++);
        props.sourceDefId = sourceDefId;
        props.meta = meta;
        props.ui = ui;
        props.extendedProps = leftovers1;
        return props;
    }
    function reduceEventSources (eventSources, action, dateProfile, calendar) {
        switch (action.type) {
            case 'ADD_EVENT_SOURCES': // already parsed
                return addSources(eventSources, action.sources, dateProfile ? dateProfile.activeRange : null, calendar);
            case 'REMOVE_EVENT_SOURCE':
                return removeSource(eventSources, action.sourceId);
            case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                if (dateProfile) {
                    return fetchDirtySources(eventSources, dateProfile.activeRange, calendar);
                }
                else {
                    return eventSources;
                }
            case 'FETCH_EVENT_SOURCES':
            case 'CHANGE_TIMEZONE':
                return fetchSourcesByIds(eventSources, action.sourceIds ?
                    arrayToHash(action.sourceIds) :
                    excludeStaticSources(eventSources, calendar), dateProfile ? dateProfile.activeRange : null, calendar);
            case 'RECEIVE_EVENTS':
            case 'RECEIVE_EVENT_ERROR':
                return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
            case 'REMOVE_ALL_EVENT_SOURCES':
                return {};
            default:
                return eventSources;
        }
    }
    var uid$3 = 0;
    function addSources(eventSourceHash, sources, fetchRange, calendar) {
        var hash = {};
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            hash[source.sourceId] = source;
        }
        if (fetchRange) {
            hash = fetchDirtySources(hash, fetchRange, calendar);
        }
        return __assign({}, eventSourceHash, hash);
    }
    function removeSource(eventSourceHash, sourceId) {
        return filterHash(eventSourceHash, function (eventSource) {
            return eventSource.sourceId !== sourceId;
        });
    }
    function fetchDirtySources(sourceHash, fetchRange, calendar) {
        return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
            return isSourceDirty(eventSource, fetchRange, calendar);
        }), fetchRange, calendar);
    }
    function isSourceDirty(eventSource, fetchRange, calendar) {
        if (!doesSourceNeedRange(eventSource, calendar)) {
            return !eventSource.latestFetchId;
        }
        else {
            return !calendar.opt('lazyFetching') ||
                !eventSource.fetchRange ||
                fetchRange.start < eventSource.fetchRange.start ||
                fetchRange.end > eventSource.fetchRange.end;
        }
    }
    function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, calendar) {
        var nextSources = {};
        for (var sourceId in prevSources) {
            var source = prevSources[sourceId];
            if (sourceIdHash[sourceId]) {
                nextSources[sourceId] = fetchSource(source, fetchRange, calendar);
            }
            else {
                nextSources[sourceId] = source;
            }
        }
        return nextSources;
    }
    function fetchSource(eventSource, fetchRange, calendar) {
        var sourceDef = calendar.pluginSystem.hooks.eventSourceDefs[eventSource.sourceDefId];
        var fetchId = String(uid$3++);
        sourceDef.fetch({
            eventSource: eventSource,
            calendar: calendar,
            range: fetchRange
        }, function (res) {
            var rawEvents = res.rawEvents;
            var calSuccess = calendar.opt('eventSourceSuccess');
            var calSuccessRes;
            var sourceSuccessRes;
            if (eventSource.success) {
                sourceSuccessRes = eventSource.success(rawEvents, res.xhr);
            }
            if (calSuccess) {
                calSuccessRes = calSuccess(rawEvents, res.xhr);
            }
            rawEvents = sourceSuccessRes || calSuccessRes || rawEvents;
            calendar.dispatch({
                type: 'RECEIVE_EVENTS',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                rawEvents: rawEvents
            });
        }, function (error) {
            var callFailure = calendar.opt('eventSourceFailure');
            console.warn(error.message, error);
            if (eventSource.failure) {
                eventSource.failure(error);
            }
            if (callFailure) {
                callFailure(error);
            }
            calendar.dispatch({
                type: 'RECEIVE_EVENT_ERROR',
                sourceId: eventSource.sourceId,
                fetchId: fetchId,
                fetchRange: fetchRange,
                error: error
            });
        });
        return __assign({}, eventSource, { isFetching: true, latestFetchId: fetchId });
    }
    function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
        var _a;
        var eventSource = sourceHash[sourceId];
        if (eventSource && // not already removed
            fetchId === eventSource.latestFetchId) {
            return __assign({}, sourceHash, (_a = {}, _a[sourceId] = __assign({}, eventSource, { isFetching: false, fetchRange: fetchRange }), _a));
        }
        return sourceHash;
    }
    function excludeStaticSources(eventSources, calendar) {
        return filterHash(eventSources, function (eventSource) {
            return doesSourceNeedRange(eventSource, calendar);
        });
    }
    var DateProfileGenerator = /** @class */ (function () {
        function DateProfileGenerator(viewSpec, calendar) {
            this.viewSpec = viewSpec;
            this.options = viewSpec.options;
            this.dateEnv = calendar.dateEnv;
            this.calendar = calendar;
            this.initHiddenDays();
        }
        /* Date Range Computation
        ------------------------------------------------------------------------------------------------------------------*/
        DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate) {
            var dateEnv = this.dateEnv;
            var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(prevDate, -1);
        };
        DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate) {
            var dateEnv = this.dateEnv;
            var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
            currentDateProfile.dateIncrement);
            return this.build(nextDate, 1);
        };
        DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
            if (forceToValid === void 0) { forceToValid = false; }
            var validRange;
            var minTime = null;
            var maxTime = null;
            var currentInfo;
            var isRangeAllDay;
            var renderRange;
            var activeRange;
            var isValid;
            validRange = this.buildValidRange();
            validRange = this.trimHiddenDays(validRange);
            if (forceToValid) {
                currentDate = constrainMarkerToRange(currentDate, validRange);
            }
            currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
            isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
            renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
            renderRange = this.trimHiddenDays(renderRange);
            activeRange = renderRange;
            if (!this.options.showNonCurrentDates) {
                activeRange = intersectRanges(activeRange, currentInfo.range);
            }
            minTime = createDuration(this.options.minTime);
            maxTime = createDuration(this.options.maxTime);
            activeRange = this.adjustActiveRange(activeRange, minTime, maxTime);
            activeRange = intersectRanges(activeRange, validRange); // might return null
            isValid = rangesIntersect(currentInfo.range, validRange);
            return {
                validRange: validRange,
                currentRange: currentInfo.range,
                currentRangeUnit: currentInfo.unit,
                isRangeAllDay: isRangeAllDay,
                activeRange: activeRange,
                renderRange: renderRange,
                minTime: minTime,
                maxTime: maxTime,
                isValid: isValid,
                dateIncrement: this.buildDateIncrement(currentInfo.duration)
            };
        };
        DateProfileGenerator.prototype.buildValidRange = function () {
            return this.getRangeOption('validRange', this.calendar.getNow()) ||
                { start: null, end: null }; // completely open-ended
        };
        DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
            var _a = this, viewSpec = _a.viewSpec, dateEnv = _a.dateEnv;
            var duration = null;
            var unit = null;
            var range = null;
            var dayCount;
            if (viewSpec.duration) {
                duration = viewSpec.duration;
                unit = viewSpec.durationUnit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            else if ((dayCount = this.options.dayCount)) {
                unit = 'day';
                range = this.buildRangeFromDayCount(date, direction, dayCount);
            }
            else if ((range = this.buildCustomVisibleRange(date))) {
                unit = dateEnv.greatestWholeUnit(range.start, range.end).unit;
            }
            else {
                duration = this.getFallbackDuration();
                unit = greatestDurationDenominator(duration).unit;
                range = this.buildRangeFromDuration(date, direction, duration, unit);
            }
            return { duration: duration, unit: unit, range: range };
        };
        DateProfileGenerator.prototype.getFallbackDuration = function () {
            return createDuration({ day: 1 });
        };
        DateProfileGenerator.prototype.adjustActiveRange = function (range, minTime, maxTime) {
            var dateEnv = this.dateEnv;
            var start = range.start;
            var end = range.end;
            if (this.viewSpec.class.prototype.usesMinMaxTime) {
                if (asRoughDays(minTime) < 0) {
                    start = startOfDay(start); // necessary?
                    start = dateEnv.add(start, minTime);
                }
                if (asRoughDays(maxTime) > 1) {
                    end = startOfDay(end); // necessary?
                    end = addDays(end, -1);
                    end = dateEnv.add(end, maxTime);
                }
            }
            return { start: start, end: end };
        };
        DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
            var dateEnv = this.dateEnv;
            var alignment = this.options.dateAlignment;
            var dateIncrementInput;
            var dateIncrementDuration;
            var start;
            var end;
            var res;
            if (!alignment) {
                dateIncrementInput = this.options.dateIncrement;
                if (dateIncrementInput) {
                    dateIncrementDuration = createDuration(dateIncrementInput);
                    if (asRoughMs(dateIncrementDuration) < asRoughMs(duration)) {
                        alignment = greatestDurationDenominator(dateIncrementDuration, !getWeeksFromInput(dateIncrementInput)).unit;
                    }
                    else {
                        alignment = unit;
                    }
                }
                else {
                    alignment = unit;
                }
            }
            if (asRoughDays(duration) <= 1) {
                if (this.isHiddenDay(start)) {
                    start = this.skipHiddenDays(start, direction);
                    start = startOfDay(start);
                }
            }
            function computeRes() {
                start = dateEnv.startOf(date, alignment);
                end = dateEnv.add(start, duration);
                res = { start: start, end: end };
            }
            computeRes();
            if (!this.trimHiddenDays(res)) {
                date = this.skipHiddenDays(date, direction);
                computeRes();
            }
            return res;
        };
        DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
            var dateEnv = this.dateEnv;
            var customAlignment = this.options.dateAlignment;
            var runningCount = 0;
            var start = date;
            var end;
            if (customAlignment) {
                start = dateEnv.startOf(start, customAlignment);
            }
            start = startOfDay(start);
            start = this.skipHiddenDays(start, direction);
            end = start;
            do {
                end = addDays(end, 1);
                if (!this.isHiddenDay(end)) {
                    runningCount++;
                }
            } while (runningCount < dayCount);
            return { start: start, end: end };
        };
        DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
            var dateEnv = this.dateEnv;
            var visibleRange = this.getRangeOption('visibleRange', dateEnv.toDate(date));
            if (visibleRange && (visibleRange.start == null || visibleRange.end == null)) {
                return null;
            }
            return visibleRange;
        };
        DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            return currentRange;
        };
        DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
            var dateIncrementInput = this.options.dateIncrement;
            var customAlignment;
            if (dateIncrementInput) {
                return createDuration(dateIncrementInput);
            }
            else if ((customAlignment = this.options.dateAlignment)) {
                return createDuration(1, customAlignment);
            }
            else if (fallback) {
                return fallback;
            }
            else {
                return createDuration({ days: 1 });
            }
        };
        DateProfileGenerator.prototype.getRangeOption = function (name) {
            var otherArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                otherArgs[_i - 1] = arguments[_i];
            }
            var val = this.options[name];
            if (typeof val === 'function') {
                val = val.apply(null, otherArgs);
            }
            if (val) {
                val = parseRange(val, this.dateEnv);
            }
            if (val) {
                val = computeVisibleDayRange(val);
            }
            return val;
        };
        /* Hidden Days
        ------------------------------------------------------------------------------------------------------------------*/
        DateProfileGenerator.prototype.initHiddenDays = function () {
            var hiddenDays = this.options.hiddenDays || []; // array of day-of-week indices that are hidden
            var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
            var dayCnt = 0;
            var i;
            if (this.options.weekends === false) {
                hiddenDays.push(0, 6); // 0=sunday, 6=saturday
            }
            for (i = 0; i < 7; i++) {
                if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                    dayCnt++;
                }
            }
            if (!dayCnt) {
                throw new Error('invalid hiddenDays'); // all days were hidden? bad.
            }
            this.isHiddenDayHash = isHiddenDayHash;
        };
        DateProfileGenerator.prototype.trimHiddenDays = function (range) {
            var start = range.start;
            var end = range.end;
            if (start) {
                start = this.skipHiddenDays(start);
            }
            if (end) {
                end = this.skipHiddenDays(end, -1, true);
            }
            if (start == null || end == null || start < end) {
                return { start: start, end: end };
            }
            return null;
        };
        DateProfileGenerator.prototype.isHiddenDay = function (day) {
            if (day instanceof Date) {
                day = day.getUTCDay();
            }
            return this.isHiddenDayHash[day];
        };
        DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
            if (inc === void 0) { inc = 1; }
            if (isExclusive === void 0) { isExclusive = false; }
            while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
                date = addDays(date, inc);
            }
            return date;
        };
        return DateProfileGenerator;
    }());
    function isDateProfilesEqual(p0, p1) {
        return rangesEqual(p0.validRange, p1.validRange) &&
            rangesEqual(p0.activeRange, p1.activeRange) &&
            rangesEqual(p0.renderRange, p1.renderRange) &&
            durationsEqual(p0.minTime, p1.minTime) &&
            durationsEqual(p0.maxTime, p1.maxTime);
        /*
        TODO: compare more?
          currentRange: DateRange
          currentRangeUnit: string
          isRangeAllDay: boolean
          isValid: boolean
          dateIncrement: Duration
        */
    }
    function reduce (state, action, calendar) {
        var viewType = reduceViewType(state.viewType, action);
        var dateProfile = reduceDateProfile(state.dateProfile, action, state.currentDate, viewType, calendar);
        var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendar);
        var nextState = __assign({}, state, { viewType: viewType,
            dateProfile: dateProfile, currentDate: reduceCurrentDate(state.currentDate, action, dateProfile), eventSources: eventSources, eventStore: reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendar), dateSelection: reduceDateSelection(state.dateSelection, action, calendar), eventSelection: reduceSelectedEvent(state.eventSelection, action), eventDrag: reduceEventDrag(state.eventDrag, action, eventSources, calendar), eventResize: reduceEventResize(state.eventResize, action, eventSources, calendar), eventSourceLoadingLevel: computeLoadingLevel(eventSources), loadingLevel: computeLoadingLevel(eventSources) });
        for (var _i = 0, _a = calendar.pluginSystem.hooks.reducers; _i < _a.length; _i++) {
            var reducerFunc = _a[_i];
            nextState = reducerFunc(nextState, action, calendar);
        }
        return nextState;
    }
    function reduceViewType(currentViewType, action) {
        switch (action.type) {
            case 'SET_VIEW_TYPE':
                return action.viewType;
            default:
                return currentViewType;
        }
    }
    function reduceDateProfile(currentDateProfile, action, currentDate, viewType, calendar) {
        var newDateProfile;
        switch (action.type) {
            case 'PREV':
                newDateProfile = calendar.dateProfileGenerators[viewType].buildPrev(currentDateProfile, currentDate);
                break;
            case 'NEXT':
                newDateProfile = calendar.dateProfileGenerators[viewType].buildNext(currentDateProfile, currentDate);
                break;
            case 'SET_DATE':
                if (!currentDateProfile.activeRange ||
                    !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker)) {
                    newDateProfile = calendar.dateProfileGenerators[viewType].build(action.dateMarker, undefined, true // forceToValid
                    );
                }
                break;
            case 'SET_VIEW_TYPE':
                var generator = calendar.dateProfileGenerators[viewType];
                if (!generator) {
                    throw new Error(viewType ?
                        'The FullCalendar view "' + viewType + '" does not exist. Make sure your plugins are loaded correctly.' :
                        'No available FullCalendar view plugins.');
                }
                newDateProfile = generator.build(action.dateMarker || currentDate, undefined, true // forceToValid
                );
                break;
        }
        if (newDateProfile &&
            newDateProfile.isValid &&
            !(currentDateProfile && isDateProfilesEqual(currentDateProfile, newDateProfile))) {
            return newDateProfile;
        }
        else {
            return currentDateProfile;
        }
    }
    function reduceCurrentDate(currentDate, action, dateProfile) {
        switch (action.type) {
            case 'PREV':
            case 'NEXT':
                if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
                    return dateProfile.currentRange.start;
                }
                else {
                    return currentDate;
                }
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                var newDate = action.dateMarker || currentDate;
                if (dateProfile.activeRange && !rangeContainsMarker(dateProfile.activeRange, newDate)) {
                    return dateProfile.currentRange.start;
                }
                else {
                    return newDate;
                }
            default:
                return currentDate;
        }
    }
    function reduceDateSelection(currentSelection, action, calendar) {
        switch (action.type) {
            case 'SELECT_DATES':
                return action.selection;
            case 'UNSELECT_DATES':
                return null;
            default:
                return currentSelection;
        }
    }
    function reduceSelectedEvent(currentInstanceId, action) {
        switch (action.type) {
            case 'SELECT_EVENT':
                return action.eventInstanceId;
            case 'UNSELECT_EVENT':
                return '';
            default:
                return currentInstanceId;
        }
    }
    function reduceEventDrag(currentDrag, action, sources, calendar) {
        switch (action.type) {
            case 'SET_EVENT_DRAG':
                var newDrag = action.state;
                return {
                    affectedEvents: newDrag.affectedEvents,
                    mutatedEvents: newDrag.mutatedEvents,
                    isEvent: newDrag.isEvent,
                    origSeg: newDrag.origSeg
                };
            case 'UNSET_EVENT_DRAG':
                return null;
            default:
                return currentDrag;
        }
    }
    function reduceEventResize(currentResize, action, sources, calendar) {
        switch (action.type) {
            case 'SET_EVENT_RESIZE':
                var newResize = action.state;
                return {
                    affectedEvents: newResize.affectedEvents,
                    mutatedEvents: newResize.mutatedEvents,
                    isEvent: newResize.isEvent,
                    origSeg: newResize.origSeg
                };
            case 'UNSET_EVENT_RESIZE':
                return null;
            default:
                return currentResize;
        }
    }
    function computeLoadingLevel(eventSources) {
        var cnt = 0;
        for (var sourceId in eventSources) {
            if (eventSources[sourceId].isFetching) {
                cnt++;
            }
        }
        return cnt;
    }
    var STANDARD_PROPS = {
        start: null,
        end: null,
        allDay: Boolean
    };
    function parseDateSpan(raw, dateEnv, defaultDuration) {
        var span = parseOpenDateSpan(raw, dateEnv);
        var range = span.range;
        if (!range.start) {
            return null;
        }
        if (!range.end) {
            if (defaultDuration == null) {
                return null;
            }
            else {
                range.end = dateEnv.add(range.start, defaultDuration);
            }
        }
        return span;
    }
    /*
    TODO: somehow combine with parseRange?
    Will return null if the start/end props were present but parsed invalidly.
    */
    function parseOpenDateSpan(raw, dateEnv) {
        var leftovers = {};
        var standardProps = refineProps(raw, STANDARD_PROPS, {}, leftovers);
        var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
        var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
        var allDay = standardProps.allDay;
        if (allDay == null) {
            allDay = (startMeta && startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
        leftovers.range = {
            start: startMeta ? startMeta.marker : null,
            end: endMeta ? endMeta.marker : null
        };
        leftovers.allDay = allDay;
        return leftovers;
    }
    function isDateSpansEqual(span0, span1) {
        return rangesEqual(span0.range, span1.range) &&
            span0.allDay === span1.allDay &&
            isSpanPropsEqual(span0, span1);
    }
    function isSpanPropsEqual(span0, span1) {
        for (var propName in span1) {
            if (propName !== 'range' && propName !== 'allDay') {
                if (span0[propName] !== span1[propName]) {
                    return false;
                }
            }
        }
        for (var propName in span0) {
            if (!(propName in span1)) {
                return false;
            }
        }
        return true;
    }
    function buildDateSpanApi(span, dateEnv) {
        return {
            start: dateEnv.toDate(span.range.start),
            end: dateEnv.toDate(span.range.end),
            startStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            endStr: dateEnv.formatIso(span.range.end, { omitTime: span.allDay }),
            allDay: span.allDay
        };
    }
    function buildDatePointApi(span, dateEnv) {
        return {
            date: dateEnv.toDate(span.range.start),
            dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
            allDay: span.allDay
        };
    }
    function fabricateEventRange(dateSpan, eventUiBases, calendar) {
        var def = parseEventDef({ editable: false }, '', // sourceId
        dateSpan.allDay, true, // hasEnd
        calendar);
        return {
            def: def,
            ui: compileEventUi(def, eventUiBases),
            instance: createEventInstance(def.defId, dateSpan.range),
            range: dateSpan.range,
            isStart: true,
            isEnd: true
        };
    }
    function compileViewDefs(defaultConfigs, overrideConfigs) {
        var hash = {};
        var viewType;
        for (viewType in defaultConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        for (viewType in overrideConfigs) {
            ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        }
        return hash;
    }
    function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        if (hash[viewType]) {
            return hash[viewType];
        }
        var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
        if (viewDef) {
            hash[viewType] = viewDef;
        }
        return viewDef;
    }
    function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
        var defaultConfig = defaultConfigs[viewType];
        var overrideConfig = overrideConfigs[viewType];
        var queryProp = function (name) {
            return (defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
                ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null);
        };
        var theClass = queryProp('class');
        var superType = queryProp('superType');
        if (!superType && theClass) {
            superType =
                findViewNameBySubclass(theClass, overrideConfigs) ||
                    findViewNameBySubclass(theClass, defaultConfigs);
        }
        var superDef = null;
        if (superType) {
            if (superType === viewType) {
                throw new Error('Can\'t have a custom view type that references itself');
            }
            superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
        }
        if (!theClass && superDef) {
            theClass = superDef.class;
        }
        if (!theClass) {
            return null; // don't throw a warning, might be settings for a single-unit view
        }
        return {
            type: viewType,
            class: theClass,
            defaults: __assign({}, (superDef ? superDef.defaults : {}), (defaultConfig ? defaultConfig.options : {})),
            overrides: __assign({}, (superDef ? superDef.overrides : {}), (overrideConfig ? overrideConfig.options : {}))
        };
    }
    function findViewNameBySubclass(viewSubclass, configs) {
        var superProto = Object.getPrototypeOf(viewSubclass.prototype);
        for (var viewType in configs) {
            var parsed = configs[viewType];
            if (parsed.class && parsed.class.prototype === superProto) {
                return viewType;
            }
        }
        return '';
    }
    function parseViewConfigs(inputs) {
        return mapHash(inputs, parseViewConfig);
    }
    var VIEW_DEF_PROPS = {
        type: String,
        class: null
    };
    function parseViewConfig(input) {
        if (typeof input === 'function') {
            input = { class: input };
        }
        var options = {};
        var props = refineProps(input, VIEW_DEF_PROPS, {}, options);
        return {
            superType: props.type,
            class: props.class,
            options: options
        };
    }
    function buildViewSpecs(defaultInputs, optionsManager) {
        var defaultConfigs = parseViewConfigs(defaultInputs);
        var overrideConfigs = parseViewConfigs(optionsManager.overrides.views);
        var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
        return mapHash(viewDefs, function (viewDef) {
            return buildViewSpec(viewDef, overrideConfigs, optionsManager);
        });
    }
    function buildViewSpec(viewDef, overrideConfigs, optionsManager) {
        var durationInput = viewDef.overrides.duration ||
            viewDef.defaults.duration ||
            optionsManager.dynamicOverrides.duration ||
            optionsManager.overrides.duration;
        var duration = null;
        var durationUnit = '';
        var singleUnit = '';
        var singleUnitOverrides = {};
        if (durationInput) {
            duration = createDuration(durationInput);
            if (duration) { // valid?
                var denom = greatestDurationDenominator(duration, !getWeeksFromInput(durationInput));
                durationUnit = denom.unit;
                if (denom.value === 1) {
                    singleUnit = durationUnit;
                    singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].options : {};
                }
            }
        }
        var queryButtonText = function (options) {
            var buttonTextMap = options.buttonText || {};
            var buttonTextKey = viewDef.defaults.buttonTextKey;
            if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
                return buttonTextMap[buttonTextKey];
            }
            if (buttonTextMap[viewDef.type] != null) {
                return buttonTextMap[viewDef.type];
            }
            if (buttonTextMap[singleUnit] != null) {
                return buttonTextMap[singleUnit];
            }
        };
        return {
            type: viewDef.type,
            class: viewDef.class,
            duration: duration,
            durationUnit: durationUnit,
            singleUnit: singleUnit,
            options: __assign({}, globalDefaults, viewDef.defaults, optionsManager.dirDefaults, optionsManager.localeDefaults, optionsManager.overrides, singleUnitOverrides, viewDef.overrides, optionsManager.dynamicOverrides),
            buttonTextOverride: queryButtonText(optionsManager.dynamicOverrides) ||
                queryButtonText(optionsManager.overrides) || // constructor-specified buttonText lookup hash takes precedence
                viewDef.overrides.buttonText,
            buttonTextDefault: queryButtonText(optionsManager.localeDefaults) ||
                queryButtonText(optionsManager.dirDefaults) ||
                viewDef.defaults.buttonText ||
                queryButtonText(globalDefaults) ||
                viewDef.type // fall back to given view name
        };
    }
    var Toolbar = /** @class */ (function (_super) {
        __extends(Toolbar, _super);
        function Toolbar(context, extraClassName) {
            var _this = _super.call(this, context) || this;
            _this._renderLayout = memoizeRendering(_this.renderLayout, _this.unrenderLayout);
            _this._updateTitle = memoizeRendering(_this.updateTitle, null, [_this._renderLayout]);
            _this._updateActiveButton = memoizeRendering(_this.updateActiveButton, null, [_this._renderLayout]);
            _this._updateToday = memoizeRendering(_this.updateToday, null, [_this._renderLayout]);
            _this._updatePrev = memoizeRendering(_this.updatePrev, null, [_this._renderLayout]);
            _this._updateNext = memoizeRendering(_this.updateNext, null, [_this._renderLayout]);
            _this.el = createElement('div', { className: 'fc-toolbar ' + extraClassName });
            return _this;
        }
        Toolbar.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this._renderLayout.unrender(); // should unrender everything else
            removeElement(this.el);
        };
        Toolbar.prototype.render = function (props) {
            this._renderLayout(props.layout);
            this._updateTitle(props.title);
            this._updateActiveButton(props.activeButton);
            this._updateToday(props.isTodayEnabled);
            this._updatePrev(props.isPrevEnabled);
            this._updateNext(props.isNextEnabled);
        };
        Toolbar.prototype.renderLayout = function (layout) {
            var el = this.el;
            this.viewsWithButtons = [];
            appendToElement(el, this.renderSection('left', layout.left));
            appendToElement(el, this.renderSection('center', layout.center));
            appendToElement(el, this.renderSection('right', layout.right));
        };
        Toolbar.prototype.unrenderLayout = function () {
            this.el.innerHTML = '';
        };
        Toolbar.prototype.renderSection = function (position, buttonStr) {
            var _this = this;
            var _a = this, theme = _a.theme, calendar = _a.calendar;
            var optionsManager = calendar.optionsManager;
            var viewSpecs = calendar.viewSpecs;
            var sectionEl = createElement('div', { className: 'fc-' + position });
            var calendarCustomButtons = optionsManager.computed.customButtons || {};
            var calendarButtonTextOverrides = optionsManager.overrides.buttonText || {};
            var calendarButtonText = optionsManager.computed.buttonText || {};
            if (buttonStr) {
                buttonStr.split(' ').forEach(function (buttonGroupStr, i) {
                    var groupChildren = [];
                    var isOnlyButtons = true;
                    var groupEl;
                    buttonGroupStr.split(',').forEach(function (buttonName, j) {
                        var customButtonProps;
                        var viewSpec;
                        var buttonClick;
                        var buttonIcon; // only one of these will be set
                        var buttonText; // "
                        var buttonInnerHtml;
                        var buttonClasses;
                        var buttonEl;
                        var buttonAriaAttr;
                        if (buttonName === 'title') {
                            groupChildren.push(htmlToElement('<h2>&nbsp;</h2>')); // we always want it to take up height
                            isOnlyButtons = false;
                        }
                        else {
                            if ((customButtonProps = calendarCustomButtons[buttonName])) {
                                buttonClick = function (ev) {
                                    if (customButtonProps.click) {
                                        customButtonProps.click.call(buttonEl, ev);
                                    }
                                };
                                (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = customButtonProps.text);
                            }
                            else if ((viewSpec = viewSpecs[buttonName])) {
                                _this.viewsWithButtons.push(buttonName);
                                buttonClick = function () {
                                    calendar.changeView(buttonName);
                                };
                                (buttonText = viewSpec.buttonTextOverride) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = viewSpec.buttonTextDefault);
                            }
                            else if (calendar[buttonName]) { // a calendar method
                                buttonClick = function () {
                                    calendar[buttonName]();
                                };
                                (buttonText = calendarButtonTextOverrides[buttonName]) ||
                                    (buttonIcon = theme.getIconClass(buttonName)) ||
                                    (buttonText = calendarButtonText[buttonName]);
                            }
                            if (buttonClick) {
                                buttonClasses = [
                                    'fc-' + buttonName + '-button',
                                    theme.getClass('button')
                                ];
                                if (buttonText) {
                                    buttonInnerHtml = htmlEscape(buttonText);
                                    buttonAriaAttr = '';
                                }
                                else if (buttonIcon) {
                                    buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
                                    buttonAriaAttr = ' aria-label="' + buttonName + '"';
                                }
                                buttonEl = htmlToElement(// type="button" so that it doesn't submit a form
                                '<button type="button" class="' + buttonClasses.join(' ') + '"' +
                                    buttonAriaAttr +
                                    '>' + buttonInnerHtml + '</button>');
                                buttonEl.addEventListener('click', buttonClick);
                                groupChildren.push(buttonEl);
                            }
                        }
                    });
                    if (groupChildren.length > 1) {
                        groupEl = document.createElement('div');
                        var buttonGroupClassName = theme.getClass('buttonGroup');
                        if (isOnlyButtons && buttonGroupClassName) {
                            groupEl.classList.add(buttonGroupClassName);
                        }
                        appendToElement(groupEl, groupChildren);
                        sectionEl.appendChild(groupEl);
                    }
                    else {
                        appendToElement(sectionEl, groupChildren); // 1 or 0 children
                    }
                });
            }
            return sectionEl;
        };
        Toolbar.prototype.updateToday = function (isTodayEnabled) {
            this.toggleButtonEnabled('today', isTodayEnabled);
        };
        Toolbar.prototype.updatePrev = function (isPrevEnabled) {
            this.toggleButtonEnabled('prev', isPrevEnabled);
        };
        Toolbar.prototype.updateNext = function (isNextEnabled) {
            this.toggleButtonEnabled('next', isNextEnabled);
        };
        Toolbar.prototype.updateTitle = function (text) {
            findElements(this.el, 'h2').forEach(function (titleEl) {
                titleEl.innerText = text;
            });
        };
        Toolbar.prototype.updateActiveButton = function (buttonName) {
            var className = this.theme.getClass('buttonActive');
            findElements(this.el, 'button').forEach(function (buttonEl) {
                if (buttonName && buttonEl.classList.contains('fc-' + buttonName + '-button')) {
                    buttonEl.classList.add(className);
                }
                else {
                    buttonEl.classList.remove(className);
                }
            });
        };
        Toolbar.prototype.toggleButtonEnabled = function (buttonName, bool) {
            findElements(this.el, '.fc-' + buttonName + '-button').forEach(function (buttonEl) {
                buttonEl.disabled = !bool;
            });
        };
        return Toolbar;
    }(Component));
    var CalendarComponent = /** @class */ (function (_super) {
        __extends(CalendarComponent, _super);
        function CalendarComponent(context, el) {
            var _this = _super.call(this, context) || this;
            _this._renderToolbars = memoizeRendering(_this.renderToolbars);
            _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
            _this.el = el;
            prependToElement(el, _this.contentEl = createElement('div', { className: 'fc-view-container' }));
            var calendar = _this.calendar;
            for (var _i = 0, _a = calendar.pluginSystem.hooks.viewContainerModifiers; _i < _a.length; _i++) {
                var modifyViewContainer = _a[_i];
                modifyViewContainer(_this.contentEl, calendar);
            }
            _this.toggleElClassNames(true);
            _this.computeTitle = memoize(computeTitle);
            _this.parseBusinessHours = memoize(function (input) {
                return parseBusinessHours(input, _this.calendar);
            });
            return _this;
        }
        CalendarComponent.prototype.destroy = function () {
            if (this.header) {
                this.header.destroy();
            }
            if (this.footer) {
                this.footer.destroy();
            }
            if (this.view) {
                this.view.destroy();
            }
            removeElement(this.contentEl);
            this.toggleElClassNames(false);
            _super.prototype.destroy.call(this);
        };
        CalendarComponent.prototype.toggleElClassNames = function (bool) {
            var classList = this.el.classList;
            var dirClassName = 'fc-' + this.opt('dir');
            var themeClassName = this.theme.getClass('widget');
            if (bool) {
                classList.add('fc');
                classList.add(dirClassName);
                classList.add(themeClassName);
            }
            else {
                classList.remove('fc');
                classList.remove(dirClassName);
                classList.remove(themeClassName);
            }
        };
        CalendarComponent.prototype.render = function (props) {
            this.freezeHeight();
            var title = this.computeTitle(props.dateProfile, props.viewSpec.options);
            this._renderToolbars(props.viewSpec, props.dateProfile, props.currentDate, props.dateProfileGenerator, title);
            this.renderView(props, title);
            this.updateSize();
            this.thawHeight();
        };
        CalendarComponent.prototype.renderToolbars = function (viewSpec, dateProfile, currentDate, dateProfileGenerator, title) {
            var headerLayout = this.opt('header');
            var footerLayout = this.opt('footer');
            var now = this.calendar.getNow();
            var todayInfo = dateProfileGenerator.build(now);
            var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate);
            var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate);
            var toolbarProps = {
                title: title,
                activeButton: viewSpec.type,
                isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
                isPrevEnabled: prevInfo.isValid,
                isNextEnabled: nextInfo.isValid
            };
            if (headerLayout) {
                if (!this.header) {
                    this.header = new Toolbar(this.context, 'fc-header-toolbar');
                    prependToElement(this.el, this.header.el);
                }
                this.header.receiveProps(__assign({ layout: headerLayout }, toolbarProps));
            }
            else if (this.header) {
                this.header.destroy();
                this.header = null;
            }
            if (footerLayout) {
                if (!this.footer) {
                    this.footer = new Toolbar(this.context, 'fc-footer-toolbar');
                    appendToElement(this.el, this.footer.el);
                }
                this.footer.receiveProps(__assign({ layout: footerLayout }, toolbarProps));
            }
            else if (this.footer) {
                this.footer.destroy();
                this.footer = null;
            }
        };
        CalendarComponent.prototype.renderView = function (props, title) {
            var view = this.view;
            var viewSpec = props.viewSpec, dateProfileGenerator = props.dateProfileGenerator;
            if (!view || view.viewSpec !== viewSpec) {
                if (view) {
                    view.destroy();
                }
                view = this.view = new viewSpec['class']({
                    calendar: this.calendar,
                    view: null,
                    dateEnv: this.dateEnv,
                    theme: this.theme,
                    options: viewSpec.options
                }, viewSpec, dateProfileGenerator, this.contentEl);
            }
            else {
                view.addScroll(view.queryScroll());
            }
            view.title = title; // for the API
            var viewProps = {
                dateProfile: props.dateProfile,
                businessHours: this.parseBusinessHours(viewSpec.options.businessHours),
                eventStore: props.eventStore,
                eventUiBases: props.eventUiBases,
                dateSelection: props.dateSelection,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize
            };
            var transformers = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);
            for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
                var transformer = transformers_1[_i];
                __assign(viewProps, transformer.transform(viewProps, viewSpec, props, view));
            }
            view.receiveProps(viewProps);
        };
        CalendarComponent.prototype.updateSize = function (isResize) {
            if (isResize === void 0) { isResize = false; }
            var view = this.view;
            if (isResize) {
                view.addScroll(view.queryScroll());
            }
            if (isResize || this.isHeightAuto == null) {
                this.computeHeightVars();
            }
            view.updateSize(isResize, this.viewHeight, this.isHeightAuto);
            view.updateNowIndicator(); // we need to guarantee this will run after updateSize
            view.popScroll(isResize);
        };
        CalendarComponent.prototype.computeHeightVars = function () {
            var calendar = this.calendar; // yuck. need to handle dynamic options
            var heightInput = calendar.opt('height');
            var contentHeightInput = calendar.opt('contentHeight');
            this.isHeightAuto = heightInput === 'auto' || contentHeightInput === 'auto';
            if (typeof contentHeightInput === 'number') { // exists and not 'auto'
                this.viewHeight = contentHeightInput;
            }
            else if (typeof contentHeightInput === 'function') { // exists and is a function
                this.viewHeight = contentHeightInput();
            }
            else if (typeof heightInput === 'number') { // exists and not 'auto'
                this.viewHeight = heightInput - this.queryToolbarsHeight();
            }
            else if (typeof heightInput === 'function') { // exists and is a function
                this.viewHeight = heightInput() - this.queryToolbarsHeight();
            }
            else if (heightInput === 'parent') { // set to height of parent element
                var parentEl = this.el.parentNode;
                this.viewHeight = parentEl.getBoundingClientRect().height - this.queryToolbarsHeight();
            }
            else {
                this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width /
                    Math.max(calendar.opt('aspectRatio'), .5));
            }
        };
        CalendarComponent.prototype.queryToolbarsHeight = function () {
            var height = 0;
            if (this.header) {
                height += computeHeightAndMargins(this.header.el);
            }
            if (this.footer) {
                height += computeHeightAndMargins(this.footer.el);
            }
            return height;
        };
        CalendarComponent.prototype.freezeHeight = function () {
            applyStyle(this.el, {
                height: this.el.getBoundingClientRect().height,
                overflow: 'hidden'
            });
        };
        CalendarComponent.prototype.thawHeight = function () {
            applyStyle(this.el, {
                height: '',
                overflow: ''
            });
        };
        return CalendarComponent;
    }(Component));
    function computeTitle(dateProfile, viewOptions) {
        var range;
        if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
            range = dateProfile.currentRange;
        }
        else { // for day units or smaller, use the actual day range
            range = dateProfile.activeRange;
        }
        return this.dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || computeTitleFormat(dateProfile), viewOptions.titleRangeSeparator), { isEndExclusive: dateProfile.isRangeAllDay });
    }
    function computeTitleFormat(dateProfile) {
        var currentRangeUnit = dateProfile.currentRangeUnit;
        if (currentRangeUnit === 'year') {
            return { year: 'numeric' };
        }
        else if (currentRangeUnit === 'month') {
            return { year: 'numeric', month: 'long' }; // like "September 2014"
        }
        else {
            var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
            if (days !== null && days > 1) {
                return { year: 'numeric', month: 'short', day: 'numeric' };
            }
            else {
                return { year: 'numeric', month: 'long', day: 'numeric' };
            }
        }
    }
    function buildViewPropTransformers(theClasses) {
        return theClasses.map(function (theClass) {
            return new theClass();
        });
    }
    var Interaction = /** @class */ (function () {
        function Interaction(settings) {
            this.component = settings.component;
        }
        Interaction.prototype.destroy = function () {
        };
        return Interaction;
    }());
    function parseInteractionSettings(component, input) {
        return {
            component: component,
            el: input.el,
            useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
        };
    }
    function interactionSettingsToStore(settings) {
        var _a;
        return _a = {},
            _a[settings.component.uid] = settings,
            _a;
    }
    var interactionSettingsStore = {};
    /*
    Detects when the user clicks on an event within a DateComponent
    */
    var EventClicking = /** @class */ (function (_super) {
        __extends(EventClicking, _super);
        function EventClicking(settings) {
            var _this = _super.call(this, settings) || this;
            _this.handleSegClick = function (ev, segEl) {
                var component = _this.component;
                var seg = getElSeg(segEl);
                if (seg && // might be the <div> surrounding the more link
                    component.isValidSegDownEl(ev.target)) {
                    var hasUrlContainer = elementClosest(ev.target, '.fc-has-url');
                    var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                    component.publiclyTrigger('eventClick', [
                        {
                            el: segEl,
                            event: new EventApi(component.calendar, seg.eventRange.def, seg.eventRange.instance),
                            jsEvent: ev,
                            view: component.view
                        }
                    ]);
                    if (url && !ev.defaultPrevented) {
                        window.location.href = url;
                    }
                }
            };
            var component = settings.component;
            _this.destroy = listenBySelector(component.el, 'click', component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegClick);
            return _this;
        }
        return EventClicking;
    }(Interaction));
    /*
    Triggers events and adds/removes core classNames when the user's pointer
    enters/leaves event-elements of a component.
    */
    var EventHovering = /** @class */ (function (_super) {
        __extends(EventHovering, _super);
        function EventHovering(settings) {
            var _this = _super.call(this, settings) || this;
            _this.handleEventElRemove = function (el) {
                if (el === _this.currentSegEl) {
                    _this.handleSegLeave(null, _this.currentSegEl);
                }
            };
            _this.handleSegEnter = function (ev, segEl) {
                if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                    segEl.classList.add('fc-allow-mouse-resize');
                    _this.currentSegEl = segEl;
                    _this.triggerEvent('eventMouseEnter', ev, segEl);
                }
            };
            _this.handleSegLeave = function (ev, segEl) {
                if (_this.currentSegEl) {
                    segEl.classList.remove('fc-allow-mouse-resize');
                    _this.currentSegEl = null;
                    _this.triggerEvent('eventMouseLeave', ev, segEl);
                }
            };
            var component = settings.component;
            _this.removeHoverListeners = listenToHoverBySelector(component.el, component.fgSegSelector + ',' + component.bgSegSelector, _this.handleSegEnter, _this.handleSegLeave);
            component.calendar.on('eventElRemove', _this.handleEventElRemove);
            return _this;
        }
        EventHovering.prototype.destroy = function () {
            this.removeHoverListeners();
            this.component.calendar.off('eventElRemove', this.handleEventElRemove);
        };
        EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
            var component = this.component;
            var seg = getElSeg(segEl);
            if (!ev || component.isValidSegDownEl(ev.target)) {
                component.publiclyTrigger(publicEvName, [
                    {
                        el: segEl,
                        event: new EventApi(this.component.calendar, seg.eventRange.def, seg.eventRange.instance),
                        jsEvent: ev,
                        view: component.view
                    }
                ]);
            }
        };
        return EventHovering;
    }(Interaction));
    var StandardTheme = /** @class */ (function (_super) {
        __extends(StandardTheme, _super);
        function StandardTheme() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StandardTheme;
    }(Theme));
    StandardTheme.prototype.classes = {
        widget: 'fc-unthemed',
        widgetHeader: 'fc-widget-header',
        widgetContent: 'fc-widget-content',
        buttonGroup: 'fc-button-group',
        button: 'fc-button fc-button-primary',
        buttonActive: 'fc-button-active',
        popoverHeader: 'fc-widget-header',
        popoverContent: 'fc-widget-content',
        headerRow: 'fc-widget-header',
        dayRow: 'fc-widget-content',
        listView: 'fc-widget-content'
    };
    StandardTheme.prototype.baseIconClass = 'fc-icon';
    StandardTheme.prototype.iconClasses = {
        close: 'fc-icon-x',
        prev: 'fc-icon-chevron-left',
        next: 'fc-icon-chevron-right',
        prevYear: 'fc-icon-chevrons-left',
        nextYear: 'fc-icon-chevrons-right'
    };
    StandardTheme.prototype.iconOverrideOption = 'buttonIcons';
    StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
    StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';
    var Calendar = /** @class */ (function () {
        function Calendar(el, overrides) {
            var _this = this;
            this.parseRawLocales = memoize(parseRawLocales);
            this.buildLocale = memoize(buildLocale);
            this.buildDateEnv = memoize(buildDateEnv);
            this.buildTheme = memoize(buildTheme);
            this.buildEventUiSingleBase = memoize(this._buildEventUiSingleBase);
            this.buildSelectionConfig = memoize(this._buildSelectionConfig);
            this.buildEventUiBySource = memoizeOutput(buildEventUiBySource, isPropsEqual);
            this.buildEventUiBases = memoize(buildEventUiBases);
            this.interactionsStore = {};
            this.actionQueue = [];
            this.isReducing = false;
            this.needsRerender = false; // needs a render?
            this.needsFullRerender = false;
            this.isRendering = false; // currently in the executeRender function?
            this.renderingPauseDepth = 0;
            this.buildDelayedRerender = memoize(buildDelayedRerender);
            this.afterSizingTriggers = {};
            this.isViewUpdated = false;
            this.isDatesUpdated = false;
            this.isEventsUpdated = false;
            this.el = el;
            this.optionsManager = new OptionsManager(overrides || {});
            this.pluginSystem = new PluginSystem();
            this.addPluginInputs(this.optionsManager.computed.plugins || []);
            this.handleOptions(this.optionsManager.computed);
            this.publiclyTrigger('_init'); // for tests
            this.hydrate();
            this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions
                .map(function (calendarInteractionClass) {
                return new calendarInteractionClass(_this);
            });
        }
        Calendar.prototype.addPluginInputs = function (pluginInputs) {
            var pluginDefs = refinePluginDefs(pluginInputs);
            for (var _i = 0, pluginDefs_1 = pluginDefs; _i < pluginDefs_1.length; _i++) {
                var pluginDef = pluginDefs_1[_i];
                this.pluginSystem.add(pluginDef);
            }
        };
        Object.defineProperty(Calendar.prototype, "view", {
            get: function () {
                return this.component ? this.component.view : null;
            },
            enumerable: true,
            configurable: true
        });
        Calendar.prototype.render = function () {
            if (!this.component) {
                this.renderableEventStore = createEmptyEventStore();
                this.bindHandlers();
                this.executeRender();
            }
            else {
                this.requestRerender(true);
            }
        };
        Calendar.prototype.destroy = function () {
            if (this.component) {
                this.unbindHandlers();
                this.component.destroy(); // don't null-out. in case API needs access
                this.component = null; // umm ???
                for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
                    var interaction = _a[_i];
                    interaction.destroy();
                }
                this.publiclyTrigger('_destroyed');
            }
        };
        Calendar.prototype.bindHandlers = function () {
            var _this = this;
            this.removeNavLinkListener = listenBySelector(this.el, 'click', 'a[data-goto]', function (ev, anchorEl) {
                var gotoOptions = anchorEl.getAttribute('data-goto');
                gotoOptions = gotoOptions ? JSON.parse(gotoOptions) : {};
                var dateEnv = _this.dateEnv;
                var dateMarker = dateEnv.createMarker(gotoOptions.date);
                var viewType = gotoOptions.type;
                var customAction = _this.viewOpt('navLink' + capitaliseFirstLetter(viewType) + 'Click');
                if (typeof customAction === 'function') {
                    customAction(dateEnv.toDate(dateMarker), ev);
                }
                else {
                    if (typeof customAction === 'string') {
                        viewType = customAction;
                    }
                    _this.zoomTo(dateMarker, viewType);
                }
            });
            if (this.opt('handleWindowResize')) {
                window.addEventListener('resize', this.windowResizeProxy = debounce(// prevents rapid calls
                this.windowResize.bind(this), this.opt('windowResizeDelay')));
            }
        };
        Calendar.prototype.unbindHandlers = function () {
            this.removeNavLinkListener();
            if (this.windowResizeProxy) {
                window.removeEventListener('resize', this.windowResizeProxy);
                this.windowResizeProxy = null;
            }
        };
        Calendar.prototype.hydrate = function () {
            var _this = this;
            this.state = this.buildInitialState();
            var rawSources = this.opt('eventSources') || [];
            var singleRawSource = this.opt('events');
            var sources = []; // parsed
            if (singleRawSource) {
                rawSources.unshift(singleRawSource);
            }
            for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
                var rawSource = rawSources_1[_i];
                var source = parseEventSource(rawSource, this);
                if (source) {
                    sources.push(source);
                }
            }
            this.batchRendering(function () {
                _this.dispatch({ type: 'INIT' }); // pass in sources here?
                _this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: sources });
                _this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: _this.opt('defaultView') || _this.pluginSystem.hooks.defaultView
                });
            });
        };
        Calendar.prototype.buildInitialState = function () {
            return {
                viewType: null,
                loadingLevel: 0,
                eventSourceLoadingLevel: 0,
                currentDate: this.getInitialDate(),
                dateProfile: null,
                eventSources: {},
                eventStore: createEmptyEventStore(),
                dateSelection: null,
                eventSelection: '',
                eventDrag: null,
                eventResize: null
            };
        };
        Calendar.prototype.dispatch = function (action) {
            this.actionQueue.push(action);
            if (!this.isReducing) {
                this.isReducing = true;
                var oldState = this.state;
                while (this.actionQueue.length) {
                    this.state = this.reduce(this.state, this.actionQueue.shift(), this);
                }
                var newState = this.state;
                this.isReducing = false;
                if (!oldState.loadingLevel && newState.loadingLevel) {
                    this.publiclyTrigger('loading', [true]);
                }
                else if (oldState.loadingLevel && !newState.loadingLevel) {
                    this.publiclyTrigger('loading', [false]);
                }
                var view = this.component && this.component.view;
                if (oldState.eventStore !== newState.eventStore || this.needsFullRerender) {
                    if (oldState.eventStore) {
                        this.isEventsUpdated = true;
                    }
                }
                if (oldState.dateProfile !== newState.dateProfile || this.needsFullRerender) {
                    if (oldState.dateProfile && view) { // why would view be null!?
                        this.publiclyTrigger('datesDestroy', [
                            {
                                view: view,
                                el: view.el
                            }
                        ]);
                    }
                    this.isDatesUpdated = true;
                }
                if (oldState.viewType !== newState.viewType || this.needsFullRerender) {
                    if (oldState.viewType && view) { // why would view be null!?
                        this.publiclyTrigger('viewSkeletonDestroy', [
                            {
                                view: view,
                                el: view.el
                            }
                        ]);
                    }
                    this.isViewUpdated = true;
                }
                this.requestRerender();
            }
        };
        Calendar.prototype.reduce = function (state, action, calendar) {
            return reduce(state, action, calendar);
        };
        Calendar.prototype.requestRerender = function (needsFull) {
            if (needsFull === void 0) { needsFull = false; }
            this.needsRerender = true;
            this.needsFullRerender = this.needsFullRerender || needsFull;
            this.delayedRerender(); // will call a debounced-version of tryRerender
        };
        Calendar.prototype.tryRerender = function () {
            if (this.component && // must be accepting renders
                this.needsRerender && // indicates that a rerender was requested
                !this.renderingPauseDepth && // not paused
                !this.isRendering // not currently in the render loop
            ) {
                this.executeRender();
            }
        };
        Calendar.prototype.batchRendering = function (func) {
            this.renderingPauseDepth++;
            func();
            this.renderingPauseDepth--;
            if (this.needsRerender) {
                this.requestRerender();
            }
        };
        Calendar.prototype.executeRender = function () {
            var needsFullRerender = this.needsFullRerender; // save before clearing
            this.needsRerender = false;
            this.needsFullRerender = false;
            this.isRendering = true;
            this.renderComponent(needsFullRerender);
            this.isRendering = false;
            if (this.needsRerender) {
                this.delayedRerender();
            }
        };
        /*
        don't call this directly. use executeRender instead
        */
        Calendar.prototype.renderComponent = function (needsFull) {
            var _a = this, state = _a.state, component = _a.component;
            var viewType = state.viewType;
            var viewSpec = this.viewSpecs[viewType];
            var savedScroll = (needsFull && component) ? component.view.queryScroll() : null;
            if (!viewSpec) {
                throw new Error("View type \"" + viewType + "\" is not valid");
            }
            var renderableEventStore = this.renderableEventStore =
                (state.eventSourceLoadingLevel && !this.opt('progressiveEventRendering')) ?
                    this.renderableEventStore :
                    state.eventStore;
            var eventUiSingleBase = this.buildEventUiSingleBase(viewSpec.options);
            var eventUiBySource = this.buildEventUiBySource(state.eventSources);
            var eventUiBases = this.eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
            if (needsFull || !component) {
                if (component) {
                    component.freezeHeight(); // next component will unfreeze it
                    component.destroy();
                }
                component = this.component = new CalendarComponent({
                    calendar: this,
                    view: null,
                    dateEnv: this.dateEnv,
                    theme: this.theme,
                    options: this.optionsManager.computed
                }, this.el);
                this.isViewUpdated = true;
                this.isDatesUpdated = true;
                this.isEventsUpdated = true;
            }
            component.receiveProps(__assign({}, state, { viewSpec: viewSpec, dateProfile: state.dateProfile, dateProfileGenerator: this.dateProfileGenerators[viewType], eventStore: renderableEventStore, eventUiBases: eventUiBases, dateSelection: state.dateSelection, eventSelection: state.eventSelection, eventDrag: state.eventDrag, eventResize: state.eventResize }));
            if (savedScroll) {
                component.view.applyScroll(savedScroll, false);
            }
            if (this.isViewUpdated) {
                this.isViewUpdated = false;
                this.publiclyTrigger('viewSkeletonRender', [
                    {
                        view: component.view,
                        el: component.view.el
                    }
                ]);
            }
            if (this.isDatesUpdated) {
                this.isDatesUpdated = false;
                this.publiclyTrigger('datesRender', [
                    {
                        view: component.view,
                        el: component.view.el
                    }
                ]);
            }
            if (this.isEventsUpdated) {
                this.isEventsUpdated = false;
            }
            this.releaseAfterSizingTriggers();
        };
        Calendar.prototype.setOption = function (name, val) {
            var _a;
            this.mutateOptions((_a = {}, _a[name] = val, _a), [], true);
        };
        Calendar.prototype.getOption = function (name) {
            return this.optionsManager.computed[name];
        };
        Calendar.prototype.opt = function (name) {
            return this.optionsManager.computed[name];
        };
        Calendar.prototype.viewOpt = function (name) {
            return this.viewOpts()[name];
        };
        Calendar.prototype.viewOpts = function () {
            return this.viewSpecs[this.state.viewType].options;
        };
        /*
        handles option changes (like a diff)
        */
        Calendar.prototype.mutateOptions = function (updates, removals, isDynamic, deepEqual) {
            var _this = this;
            var changeHandlers = this.pluginSystem.hooks.optionChangeHandlers;
            var normalUpdates = {};
            var specialUpdates = {};
            var oldDateEnv = this.dateEnv; // do this before handleOptions
            var isTimeZoneDirty = false;
            var isSizeDirty = false;
            var anyDifficultOptions = Boolean(removals.length);
            for (var name_1 in updates) {
                if (changeHandlers[name_1]) {
                    specialUpdates[name_1] = updates[name_1];
                }
                else {
                    normalUpdates[name_1] = updates[name_1];
                }
            }
            for (var name_2 in normalUpdates) {
                if (/^(height|contentHeight|aspectRatio)$/.test(name_2)) {
                    isSizeDirty = true;
                }
                else if (/^(defaultDate|defaultView)$/.test(name_2)) ;
                else {
                    anyDifficultOptions = true;
                    if (name_2 === 'timeZone') {
                        isTimeZoneDirty = true;
                    }
                }
            }
            this.optionsManager.mutate(normalUpdates, removals, isDynamic);
            if (anyDifficultOptions) {
                this.handleOptions(this.optionsManager.computed);
                this.needsFullRerender = true;
            }
            this.batchRendering(function () {
                if (anyDifficultOptions) {
                    if (isTimeZoneDirty) {
                        _this.dispatch({
                            type: 'CHANGE_TIMEZONE',
                            oldDateEnv: oldDateEnv
                        });
                    }
                    /* HACK
                    has the same effect as calling this.requestRerender(true)
                    but recomputes the state's dateProfile
                    */
                    _this.dispatch({
                        type: 'SET_VIEW_TYPE',
                        viewType: _this.state.viewType
                    });
                }
                else if (isSizeDirty) {
                    _this.updateSize();
                }
                if (deepEqual) {
                    for (var name_3 in specialUpdates) {
                        changeHandlers[name_3](specialUpdates[name_3], _this, deepEqual);
                    }
                }
            });
        };
        /*
        rebuilds things based off of a complete set of refined options
        */
        Calendar.prototype.handleOptions = function (options) {
            var _this = this;
            var pluginHooks = this.pluginSystem.hooks;
            this.defaultAllDayEventDuration = createDuration(options.defaultAllDayEventDuration);
            this.defaultTimedEventDuration = createDuration(options.defaultTimedEventDuration);
            this.delayedRerender = this.buildDelayedRerender(options.rerenderDelay);
            this.theme = this.buildTheme(options);
            var available = this.parseRawLocales(options.locales);
            this.availableRawLocales = available.map;
            var locale = this.buildLocale(options.locale || available.defaultCode, available.map);
            this.dateEnv = this.buildDateEnv(locale, options.timeZone, pluginHooks.namedTimeZonedImpl, options.firstDay, options.weekNumberCalculation, options.weekLabel, pluginHooks.cmdFormatter);
            this.selectionConfig = this.buildSelectionConfig(options); // needs dateEnv. do after :(
            this.viewSpecs = buildViewSpecs(pluginHooks.views, this.optionsManager);
            this.dateProfileGenerators = mapHash(this.viewSpecs, function (viewSpec) {
                return new viewSpec.class.prototype.dateProfileGeneratorClass(viewSpec, _this);
            });
        };
        Calendar.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.availableRawLocales);
        };
        Calendar.prototype._buildSelectionConfig = function (rawOpts) {
            return processScopedUiProps('select', rawOpts, this);
        };
        Calendar.prototype._buildEventUiSingleBase = function (rawOpts) {
            if (rawOpts.editable) { // so 'editable' affected events
                rawOpts = __assign({}, rawOpts, { eventEditable: true });
            }
            return processScopedUiProps('event', rawOpts, this);
        };
        Calendar.prototype.hasPublicHandlers = function (name) {
            return this.hasHandlers(name) ||
                this.opt(name); // handler specified in options
        };
        Calendar.prototype.publiclyTrigger = function (name, args) {
            var optHandler = this.opt(name);
            this.triggerWith(name, this, args);
            if (optHandler) {
                return optHandler.apply(this, args);
            }
        };
        Calendar.prototype.publiclyTriggerAfterSizing = function (name, args) {
            var afterSizingTriggers = this.afterSizingTriggers;
            (afterSizingTriggers[name] || (afterSizingTriggers[name] = [])).push(args);
        };
        Calendar.prototype.releaseAfterSizingTriggers = function () {
            var afterSizingTriggers = this.afterSizingTriggers;
            for (var name_4 in afterSizingTriggers) {
                for (var _i = 0, _a = afterSizingTriggers[name_4]; _i < _a.length; _i++) {
                    var args = _a[_i];
                    this.publiclyTrigger(name_4, args);
                }
            }
            this.afterSizingTriggers = {};
        };
        Calendar.prototype.isValidViewType = function (viewType) {
            return Boolean(this.viewSpecs[viewType]);
        };
        Calendar.prototype.changeView = function (viewType, dateOrRange) {
            var dateMarker = null;
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) { // a range
                    this.optionsManager.mutate({ visibleRange: dateOrRange }, []); // will not rerender
                    this.handleOptions(this.optionsManager.computed); // ...but yuck
                }
                else { // a date
                    dateMarker = this.dateEnv.createMarker(dateOrRange); // just like gotoDate
                }
            }
            this.unselect();
            this.dispatch({
                type: 'SET_VIEW_TYPE',
                viewType: viewType,
                dateMarker: dateMarker
            });
        };
        Calendar.prototype.zoomTo = function (dateMarker, viewType) {
            var spec;
            viewType = viewType || 'day'; // day is default zoom
            spec = this.viewSpecs[viewType] ||
                this.getUnitViewSpec(viewType);
            this.unselect();
            if (spec) {
                this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: spec.type,
                    dateMarker: dateMarker
                });
            }
            else {
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: dateMarker
                });
            }
        };
        Calendar.prototype.getUnitViewSpec = function (unit) {
            var component = this.component;
            var viewTypes = [];
            var i;
            var spec;
            if (component.header) {
                viewTypes.push.apply(viewTypes, component.header.viewsWithButtons);
            }
            if (component.footer) {
                viewTypes.push.apply(viewTypes, component.footer.viewsWithButtons);
            }
            for (var viewType in this.viewSpecs) {
                viewTypes.push(viewType);
            }
            for (i = 0; i < viewTypes.length; i++) {
                spec = this.viewSpecs[viewTypes[i]];
                if (spec) {
                    if (spec.singleUnit === unit) {
                        return spec;
                    }
                }
            }
        };
        Calendar.prototype.getInitialDate = function () {
            var defaultDateInput = this.opt('defaultDate');
            if (defaultDateInput != null) {
                return this.dateEnv.createMarker(defaultDateInput);
            }
            else {
                return this.getNow(); // getNow already returns unzoned
            }
        };
        Calendar.prototype.prev = function () {
            this.unselect();
            this.dispatch({ type: 'PREV' });
        };
        Calendar.prototype.next = function () {
            this.unselect();
            this.dispatch({ type: 'NEXT' });
        };
        Calendar.prototype.prevYear = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.addYears(this.state.currentDate, -1)
            });
        };
        Calendar.prototype.nextYear = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
            });
        };
        Calendar.prototype.today = function () {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.getNow()
            });
        };
        Calendar.prototype.gotoDate = function (zonedDateInput) {
            this.unselect();
            this.dispatch({
                type: 'SET_DATE',
                dateMarker: this.dateEnv.createMarker(zonedDateInput)
            });
        };
        Calendar.prototype.incrementDate = function (deltaInput) {
            var delta = createDuration(deltaInput);
            if (delta) { // else, warn about invalid input?
                this.unselect();
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.add(this.state.currentDate, delta)
                });
            }
        };
        Calendar.prototype.getDate = function () {
            return this.dateEnv.toDate(this.state.currentDate);
        };
        Calendar.prototype.formatDate = function (d, formatter) {
            var dateEnv = this.dateEnv;
            return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
        };
        Calendar.prototype.formatRange = function (d0, d1, settings) {
            var dateEnv = this.dateEnv;
            return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings, this.opt('defaultRangeSeparator')), settings);
        };
        Calendar.prototype.formatIso = function (d, omitTime) {
            var dateEnv = this.dateEnv;
            return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
        };
        Calendar.prototype.windowResize = function (ev) {
            if (!this.isHandlingWindowResize &&
                this.component && // why?
                ev.target === window // not a jqui resize event
            ) {
                this.isHandlingWindowResize = true;
                this.updateSize();
                this.publiclyTrigger('windowResize', [this.view]);
                this.isHandlingWindowResize = false;
            }
        };
        Calendar.prototype.updateSize = function () {
            if (this.component) { // when?
                this.component.updateSize(true);
            }
        };
        Calendar.prototype.registerInteractiveComponent = function (component, settingsInput) {
            var settings = parseInteractionSettings(component, settingsInput);
            var DEFAULT_INTERACTIONS = [
                EventClicking,
                EventHovering
            ];
            var interactionClasses = DEFAULT_INTERACTIONS.concat(this.pluginSystem.hooks.componentInteractions);
            var interactions = interactionClasses.map(function (interactionClass) {
                return new interactionClass(settings);
            });
            this.interactionsStore[component.uid] = interactions;
            interactionSettingsStore[component.uid] = settings;
        };
        Calendar.prototype.unregisterInteractiveComponent = function (component) {
            for (var _i = 0, _a = this.interactionsStore[component.uid]; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener.destroy();
            }
            delete this.interactionsStore[component.uid];
            delete interactionSettingsStore[component.uid];
        };
        Calendar.prototype.select = function (dateOrObj, endDate) {
            var selectionInput;
            if (endDate == null) {
                if (dateOrObj.start != null) {
                    selectionInput = dateOrObj;
                }
                else {
                    selectionInput = {
                        start: dateOrObj,
                        end: null
                    };
                }
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: endDate
                };
            }
            var selection = parseDateSpan(selectionInput, this.dateEnv, createDuration({ days: 1 }) // TODO: cache this?
            );
            if (selection) { // throw parse error otherwise?
                this.dispatch({ type: 'SELECT_DATES', selection: selection });
                this.triggerDateSelect(selection);
            }
        };
        Calendar.prototype.unselect = function (pev) {
            if (this.state.dateSelection) {
                this.dispatch({ type: 'UNSELECT_DATES' });
                this.triggerDateUnselect(pev);
            }
        };
        Calendar.prototype.triggerDateSelect = function (selection, pev) {
            var arg = __assign({}, this.buildDateSpanApi(selection), { jsEvent: pev ? pev.origEvent : null, view: this.view });
            this.publiclyTrigger('select', [arg]);
        };
        Calendar.prototype.triggerDateUnselect = function (pev) {
            this.publiclyTrigger('unselect', [
                {
                    jsEvent: pev ? pev.origEvent : null,
                    view: this.view
                }
            ]);
        };
        Calendar.prototype.triggerDateClick = function (dateSpan, dayEl, view, ev) {
            var arg = __assign({}, this.buildDatePointApi(dateSpan), { dayEl: dayEl, jsEvent: ev, // Is this always a mouse event? See #4655
                view: view });
            this.publiclyTrigger('dateClick', [arg]);
        };
        Calendar.prototype.buildDatePointApi = function (dateSpan) {
            var props = {};
            for (var _i = 0, _a = this.pluginSystem.hooks.datePointTransforms; _i < _a.length; _i++) {
                var transform = _a[_i];
                __assign(props, transform(dateSpan, this));
            }
            __assign(props, buildDatePointApi(dateSpan, this.dateEnv));
            return props;
        };
        Calendar.prototype.buildDateSpanApi = function (dateSpan) {
            var props = {};
            for (var _i = 0, _a = this.pluginSystem.hooks.dateSpanTransforms; _i < _a.length; _i++) {
                var transform = _a[_i];
                __assign(props, transform(dateSpan, this));
            }
            __assign(props, buildDateSpanApi(dateSpan, this.dateEnv));
            return props;
        };
        Calendar.prototype.getNow = function () {
            var now = this.opt('now');
            if (typeof now === 'function') {
                now = now();
            }
            if (now == null) {
                return this.dateEnv.createNowMarker();
            }
            return this.dateEnv.createMarker(now);
        };
        Calendar.prototype.getDefaultEventEnd = function (allDay, marker) {
            var end = marker;
            if (allDay) {
                end = startOfDay(end);
                end = this.dateEnv.add(end, this.defaultAllDayEventDuration);
            }
            else {
                end = this.dateEnv.add(end, this.defaultTimedEventDuration);
            }
            return end;
        };
        Calendar.prototype.addEvent = function (eventInput, sourceInput) {
            if (eventInput instanceof EventApi) {
                var def = eventInput._def;
                var instance = eventInput._instance;
                if (!this.state.eventStore.defs[def.defId]) {
                    this.dispatch({
                        type: 'ADD_EVENTS',
                        eventStore: eventTupleToStore({ def: def, instance: instance }) // TODO: better util for two args?
                    });
                }
                return eventInput;
            }
            var sourceId;
            if (sourceInput instanceof EventSourceApi) {
                sourceId = sourceInput.internalEventSource.sourceId;
            }
            else if (sourceInput != null) {
                var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
                if (!sourceApi) {
                    console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test
                    return null;
                }
                else {
                    sourceId = sourceApi.internalEventSource.sourceId;
                }
            }
            var tuple = parseEvent(eventInput, sourceId, this);
            if (tuple) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore(tuple)
                });
                return new EventApi(this, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
            }
            return null;
        };
        Calendar.prototype.getEventById = function (id) {
            var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
            id = String(id);
            for (var defId in defs) {
                var def = defs[defId];
                if (def.publicId === id) {
                    if (def.recurringDef) {
                        return new EventApi(this, def, null);
                    }
                    else {
                        for (var instanceId in instances) {
                            var instance = instances[instanceId];
                            if (instance.defId === def.defId) {
                                return new EventApi(this, def, instance);
                            }
                        }
                    }
                }
            }
            return null;
        };
        Calendar.prototype.getEvents = function () {
            var _a = this.state.eventStore, defs = _a.defs, instances = _a.instances;
            var eventApis = [];
            for (var id in instances) {
                var instance = instances[id];
                var def = defs[instance.defId];
                eventApis.push(new EventApi(this, def, instance));
            }
            return eventApis;
        };
        Calendar.prototype.removeAllEvents = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
        };
        Calendar.prototype.rerenderEvents = function () {
            this.dispatch({ type: 'RESET_EVENTS' });
        };
        Calendar.prototype.getEventSources = function () {
            var sourceHash = this.state.eventSources;
            var sourceApis = [];
            for (var internalId in sourceHash) {
                sourceApis.push(new EventSourceApi(this, sourceHash[internalId]));
            }
            return sourceApis;
        };
        Calendar.prototype.getEventSourceById = function (id) {
            var sourceHash = this.state.eventSources;
            id = String(id);
            for (var sourceId in sourceHash) {
                if (sourceHash[sourceId].publicId === id) {
                    return new EventSourceApi(this, sourceHash[sourceId]);
                }
            }
            return null;
        };
        Calendar.prototype.addEventSource = function (sourceInput) {
            if (sourceInput instanceof EventSourceApi) {
                if (!this.state.eventSources[sourceInput.internalEventSource.sourceId]) {
                    this.dispatch({
                        type: 'ADD_EVENT_SOURCES',
                        sources: [sourceInput.internalEventSource]
                    });
                }
                return sourceInput;
            }
            var eventSource = parseEventSource(sourceInput, this);
            if (eventSource) { // TODO: error otherwise?
                this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
                return new EventSourceApi(this, eventSource);
            }
            return null;
        };
        Calendar.prototype.removeAllEventSources = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
        };
        Calendar.prototype.refetchEvents = function () {
            this.dispatch({ type: 'FETCH_EVENT_SOURCES' });
        };
        Calendar.prototype.scrollToTime = function (timeInput) {
            var duration = createDuration(timeInput);
            if (duration) {
                this.component.view.scrollToDuration(duration);
            }
        };
        return Calendar;
    }());
    EmitterMixin.mixInto(Calendar);
    function buildDateEnv(locale, timeZone, namedTimeZoneImpl, firstDay, weekNumberCalculation, weekLabel, cmdFormatter) {
        return new DateEnv({
            calendarSystem: 'gregory',
            timeZone: timeZone,
            namedTimeZoneImpl: namedTimeZoneImpl,
            locale: locale,
            weekNumberCalculation: weekNumberCalculation,
            firstDay: firstDay,
            weekLabel: weekLabel,
            cmdFormatter: cmdFormatter
        });
    }
    function buildTheme(calendarOptions) {
        var themeClass = this.pluginSystem.hooks.themeClasses[calendarOptions.themeSystem] || StandardTheme;
        return new themeClass(calendarOptions);
    }
    function buildDelayedRerender(wait) {
        var func = this.tryRerender.bind(this);
        if (wait != null) {
            func = debounce(func, wait);
        }
        return func;
    }
    function buildEventUiBySource(eventSources) {
        return mapHash(eventSources, function (eventSource) {
            return eventSource.ui;
        });
    }
    function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
        var eventUiBases = { '': eventUiSingleBase };
        for (var defId in eventDefs) {
            var def = eventDefs[defId];
            if (def.sourceId && eventUiBySource[def.sourceId]) {
                eventUiBases[defId] = eventUiBySource[def.sourceId];
            }
        }
        return eventUiBases;
    }
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, createElement('div', { className: 'fc-view fc-' + viewSpec.type + '-view' }), true // isView (HACK)
            ) || this;
            _this.renderDatesMem = memoizeRendering(_this.renderDatesWrap, _this.unrenderDatesWrap);
            _this.renderBusinessHoursMem = memoizeRendering(_this.renderBusinessHours, _this.unrenderBusinessHours, [_this.renderDatesMem]);
            _this.renderDateSelectionMem = memoizeRendering(_this.renderDateSelectionWrap, _this.unrenderDateSelectionWrap, [_this.renderDatesMem]);
            _this.renderEventsMem = memoizeRendering(_this.renderEvents, _this.unrenderEvents, [_this.renderDatesMem]);
            _this.renderEventSelectionMem = memoizeRendering(_this.renderEventSelectionWrap, _this.unrenderEventSelectionWrap, [_this.renderEventsMem]);
            _this.renderEventDragMem = memoizeRendering(_this.renderEventDragWrap, _this.unrenderEventDragWrap, [_this.renderDatesMem]);
            _this.renderEventResizeMem = memoizeRendering(_this.renderEventResizeWrap, _this.unrenderEventResizeWrap, [_this.renderDatesMem]);
            _this.viewSpec = viewSpec;
            _this.dateProfileGenerator = dateProfileGenerator;
            _this.type = viewSpec.type;
            _this.eventOrderSpecs = parseFieldSpecs(_this.opt('eventOrder'));
            _this.nextDayThreshold = createDuration(_this.opt('nextDayThreshold'));
            parentEl.appendChild(_this.el);
            _this.initialize();
            return _this;
        }
        View.prototype.initialize = function () {
        };
        Object.defineProperty(View.prototype, "activeStart", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.activeRange.start);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.activeRange.end);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.currentRange.start);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.props.dateProfile.currentRange.end);
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.render = function (props) {
            this.renderDatesMem(props.dateProfile);
            this.renderBusinessHoursMem(props.businessHours);
            this.renderDateSelectionMem(props.dateSelection);
            this.renderEventsMem(props.eventStore);
            this.renderEventSelectionMem(props.eventSelection);
            this.renderEventDragMem(props.eventDrag);
            this.renderEventResizeMem(props.eventResize);
        };
        View.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderDatesMem.unrender(); // should unrender everything else
        };
        View.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            var calendar = this.calendar;
            if (isResize || // HACKS...
                calendar.isViewUpdated ||
                calendar.isDatesUpdated ||
                calendar.isEventsUpdated) {
                this.updateBaseSize(isResize, viewHeight, isAuto);
            }
        };
        View.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        };
        View.prototype.renderDatesWrap = function (dateProfile) {
            this.renderDates(dateProfile);
            this.addScroll({
                duration: createDuration(this.opt('scrollTime'))
            });
            this.startNowIndicator(dateProfile); // shouldn't render yet because updateSize will be called soon
        };
        View.prototype.unrenderDatesWrap = function () {
            this.stopNowIndicator();
            this.unrenderDates();
        };
        View.prototype.renderDates = function (dateProfile) { };
        View.prototype.unrenderDates = function () { };
        View.prototype.renderBusinessHours = function (businessHours) { };
        View.prototype.unrenderBusinessHours = function () { };
        View.prototype.renderDateSelectionWrap = function (selection) {
            if (selection) {
                this.renderDateSelection(selection);
            }
        };
        View.prototype.unrenderDateSelectionWrap = function (selection) {
            if (selection) {
                this.unrenderDateSelection(selection);
            }
        };
        View.prototype.renderDateSelection = function (selection) { };
        View.prototype.unrenderDateSelection = function (selection) { };
        View.prototype.renderEvents = function (eventStore) { };
        View.prototype.unrenderEvents = function () { };
        View.prototype.sliceEvents = function (eventStore, allDay) {
            var props = this.props;
            return sliceEventStore(eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? this.nextDayThreshold : null).fg;
        };
        View.prototype.computeEventDraggable = function (eventDef, eventUi) {
            var transformers = this.calendar.pluginSystem.hooks.isDraggableTransformers;
            var val = eventUi.startEditable;
            for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
                var transformer = transformers_1[_i];
                val = transformer(val, eventDef, eventUi, this);
            }
            return val;
        };
        View.prototype.computeEventStartResizable = function (eventDef, eventUi) {
            return eventUi.durationEditable && this.opt('eventResizableFromStart');
        };
        View.prototype.computeEventEndResizable = function (eventDef, eventUi) {
            return eventUi.durationEditable;
        };
        View.prototype.renderEventSelectionWrap = function (instanceId) {
            if (instanceId) {
                this.renderEventSelection(instanceId);
            }
        };
        View.prototype.unrenderEventSelectionWrap = function (instanceId) {
            if (instanceId) {
                this.unrenderEventSelection(instanceId);
            }
        };
        View.prototype.renderEventSelection = function (instanceId) { };
        View.prototype.unrenderEventSelection = function (instanceId) { };
        View.prototype.renderEventDragWrap = function (state) {
            if (state) {
                this.renderEventDrag(state);
            }
        };
        View.prototype.unrenderEventDragWrap = function (state) {
            if (state) {
                this.unrenderEventDrag(state);
            }
        };
        View.prototype.renderEventDrag = function (state) { };
        View.prototype.unrenderEventDrag = function (state) { };
        View.prototype.renderEventResizeWrap = function (state) {
            if (state) {
                this.renderEventResize(state);
            }
        };
        View.prototype.unrenderEventResizeWrap = function (state) {
            if (state) {
                this.unrenderEventResize(state);
            }
        };
        View.prototype.renderEventResize = function (state) { };
        View.prototype.unrenderEventResize = function (state) { };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        View.prototype.startNowIndicator = function (dateProfile) {
            var _this = this;
            var dateEnv = this.dateEnv;
            var unit;
            var update;
            var delay; // ms wait value
            if (this.opt('nowIndicator')) {
                unit = this.getNowIndicatorUnit(dateProfile);
                if (unit) {
                    update = this.updateNowIndicator.bind(this);
                    this.initialNowDate = this.calendar.getNow();
                    this.initialNowQueriedMs = new Date().valueOf();
                    delay = dateEnv.add(dateEnv.startOf(this.initialNowDate, unit), createDuration(1, unit)).valueOf() - this.initialNowDate.valueOf();
                    this.nowIndicatorTimeoutID = setTimeout(function () {
                        _this.nowIndicatorTimeoutID = null;
                        update();
                        if (unit === 'second') {
                            delay = 1000; // every second
                        }
                        else {
                            delay = 1000 * 60; // otherwise, every minute
                        }
                        _this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
                    }, delay);
                }
            }
        };
        View.prototype.updateNowIndicator = function () {
            if (this.props.dateProfile && // a way to determine if dates were rendered yet
                this.initialNowDate // activated before?
            ) {
                this.unrenderNowIndicator(); // won't unrender if unnecessary
                this.renderNowIndicator(addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs));
                this.isNowIndicatorRendered = true;
            }
        };
        View.prototype.stopNowIndicator = function () {
            if (this.isNowIndicatorRendered) {
                if (this.nowIndicatorTimeoutID) {
                    clearTimeout(this.nowIndicatorTimeoutID);
                    this.nowIndicatorTimeoutID = null;
                }
                if (this.nowIndicatorIntervalID) {
                    clearInterval(this.nowIndicatorIntervalID);
                    this.nowIndicatorIntervalID = null;
                }
                this.unrenderNowIndicator();
                this.isNowIndicatorRendered = false;
            }
        };
        View.prototype.getNowIndicatorUnit = function (dateProfile) {
        };
        View.prototype.renderNowIndicator = function (date) {
        };
        View.prototype.unrenderNowIndicator = function () {
        };
        /* Scroller
        ------------------------------------------------------------------------------------------------------------------*/
        View.prototype.addScroll = function (scroll) {
            var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
            __assign(queuedScroll, scroll);
        };
        View.prototype.popScroll = function (isResize) {
            this.applyQueuedScroll(isResize);
            this.queuedScroll = null;
        };
        View.prototype.applyQueuedScroll = function (isResize) {
            this.applyScroll(this.queuedScroll || {}, isResize);
        };
        View.prototype.queryScroll = function () {
            var scroll = {};
            if (this.props.dateProfile) { // dates rendered yet?
                __assign(scroll, this.queryDateScroll());
            }
            return scroll;
        };
        View.prototype.applyScroll = function (scroll, isResize) {
            var duration = scroll.duration;
            if (duration != null) {
                delete scroll.duration;
                if (this.props.dateProfile) { // dates rendered yet?
                    __assign(scroll, this.computeDateScroll(duration));
                }
            }
            if (this.props.dateProfile) { // dates rendered yet?
                this.applyDateScroll(scroll);
            }
        };
        View.prototype.computeDateScroll = function (duration) {
            return {}; // subclasses must implement
        };
        View.prototype.queryDateScroll = function () {
            return {}; // subclasses must implement
        };
        View.prototype.applyDateScroll = function (scroll) {
        };
        View.prototype.scrollToDuration = function (duration) {
            this.applyScroll({ duration: duration }, false);
        };
        return View;
    }(DateComponent));
    EmitterMixin.mixInto(View);
    View.prototype.usesMinMaxTime = false;
    View.prototype.dateProfileGeneratorClass = DateProfileGenerator;
    var FgEventRenderer = /** @class */ (function () {
        function FgEventRenderer(context) {
            this.segs = [];
            this.isSizeDirty = false;
            this.context = context;
        }
        FgEventRenderer.prototype.renderSegs = function (segs, mirrorInfo) {
            this.rangeUpdated(); // called too frequently :(
            segs = this.renderSegEls(segs, mirrorInfo);
            this.segs = segs;
            this.attachSegs(segs, mirrorInfo);
            this.isSizeDirty = true;
            this.context.view.triggerRenderedSegs(this.segs, Boolean(mirrorInfo));
        };
        FgEventRenderer.prototype.unrender = function (_segs, mirrorInfo) {
            this.context.view.triggerWillRemoveSegs(this.segs, Boolean(mirrorInfo));
            this.detachSegs(this.segs);
            this.segs = [];
        };
        FgEventRenderer.prototype.rangeUpdated = function () {
            var options = this.context.options;
            var displayEventTime;
            var displayEventEnd;
            this.eventTimeFormat = createFormatter(options.eventTimeFormat || this.computeEventTimeFormat(), options.defaultRangeSeparator);
            displayEventTime = options.displayEventTime;
            if (displayEventTime == null) {
                displayEventTime = this.computeDisplayEventTime(); // might be based off of range
            }
            displayEventEnd = options.displayEventEnd;
            if (displayEventEnd == null) {
                displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
            }
            this.displayEventTime = displayEventTime;
            this.displayEventEnd = displayEventEnd;
        };
        FgEventRenderer.prototype.renderSegEls = function (segs, mirrorInfo) {
            var html = '';
            var i;
            if (segs.length) { // don't build an empty html string
                for (i = 0; i < segs.length; i++) {
                    html += this.renderSegHtml(segs[i], mirrorInfo);
                }
                htmlToElements(html).forEach(function (el, i) {
                    var seg = segs[i];
                    if (el) {
                        seg.el = el;
                    }
                });
                segs = filterSegsViaEls(this.context.view, segs, Boolean(mirrorInfo));
            }
            return segs;
        };
        FgEventRenderer.prototype.getSegClasses = function (seg, isDraggable, isResizable, mirrorInfo) {
            var classes = [
                'fc-event',
                seg.isStart ? 'fc-start' : 'fc-not-start',
                seg.isEnd ? 'fc-end' : 'fc-not-end'
            ].concat(seg.eventRange.ui.classNames);
            if (isDraggable) {
                classes.push('fc-draggable');
            }
            if (isResizable) {
                classes.push('fc-resizable');
            }
            if (mirrorInfo) {
                classes.push('fc-mirror');
                if (mirrorInfo.isDragging) {
                    classes.push('fc-dragging');
                }
                if (mirrorInfo.isResizing) {
                    classes.push('fc-resizing');
                }
            }
            return classes;
        };
        FgEventRenderer.prototype.getTimeText = function (eventRange, formatter, displayEnd) {
            var def = eventRange.def, instance = eventRange.instance;
            return this._getTimeText(instance.range.start, def.hasEnd ? instance.range.end : null, def.allDay, formatter, displayEnd, instance.forcedStartTzo, instance.forcedEndTzo);
        };
        FgEventRenderer.prototype._getTimeText = function (start, end, allDay, formatter, displayEnd, forcedStartTzo, forcedEndTzo) {
            var dateEnv = this.context.dateEnv;
            if (formatter == null) {
                formatter = this.eventTimeFormat;
            }
            if (displayEnd == null) {
                displayEnd = this.displayEventEnd;
            }
            if (this.displayEventTime && !allDay) {
                if (displayEnd && end) {
                    return dateEnv.formatRange(start, end, formatter, {
                        forcedStartTzo: forcedStartTzo,
                        forcedEndTzo: forcedEndTzo
                    });
                }
                else {
                    return dateEnv.format(start, formatter, {
                        forcedTzo: forcedStartTzo
                    });
                }
            }
            return '';
        };
        FgEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true
            };
        };
        FgEventRenderer.prototype.computeDisplayEventTime = function () {
            return true;
        };
        FgEventRenderer.prototype.computeDisplayEventEnd = function () {
            return true;
        };
        FgEventRenderer.prototype.getSkinCss = function (ui) {
            return {
                'background-color': ui.backgroundColor,
                'border-color': ui.borderColor,
                color: ui.textColor
            };
        };
        FgEventRenderer.prototype.sortEventSegs = function (segs) {
            var specs = this.context.view.eventOrderSpecs;
            var objs = segs.map(buildSegCompareObj);
            objs.sort(function (obj0, obj1) {
                return compareByFieldSpecs(obj0, obj1, specs);
            });
            return objs.map(function (c) {
                return c._seg;
            });
        };
        FgEventRenderer.prototype.computeSizes = function (force) {
            if (force || this.isSizeDirty) {
                this.computeSegSizes(this.segs);
            }
        };
        FgEventRenderer.prototype.assignSizes = function (force) {
            if (force || this.isSizeDirty) {
                this.assignSegSizes(this.segs);
                this.isSizeDirty = false;
            }
        };
        FgEventRenderer.prototype.computeSegSizes = function (segs) {
        };
        FgEventRenderer.prototype.assignSegSizes = function (segs) {
        };
        FgEventRenderer.prototype.hideByHash = function (hash) {
            if (hash) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (hash[seg.eventRange.instance.instanceId]) {
                        seg.el.style.visibility = 'hidden';
                    }
                }
            }
        };
        FgEventRenderer.prototype.showByHash = function (hash) {
            if (hash) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (hash[seg.eventRange.instance.instanceId]) {
                        seg.el.style.visibility = '';
                    }
                }
            }
        };
        FgEventRenderer.prototype.selectByInstanceId = function (instanceId) {
            if (instanceId) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    var eventInstance = seg.eventRange.instance;
                    if (eventInstance && eventInstance.instanceId === instanceId &&
                        seg.el // necessary?
                    ) {
                        seg.el.classList.add('fc-selected');
                    }
                }
            }
        };
        FgEventRenderer.prototype.unselectByInstanceId = function (instanceId) {
            if (instanceId) {
                for (var _i = 0, _a = this.segs; _i < _a.length; _i++) {
                    var seg = _a[_i];
                    if (seg.el) { // necessary?
                        seg.el.classList.remove('fc-selected');
                    }
                }
            }
        };
        return FgEventRenderer;
    }());
    function buildSegCompareObj(seg) {
        var eventDef = seg.eventRange.def;
        var range = seg.eventRange.instance.range;
        var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
        var end = range.end ? range.end.valueOf() : 0; // "
        return __assign({}, eventDef.extendedProps, eventDef, { id: eventDef.publicId, start: start,
            end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg // for later retrieval
         });
    }
    var FillRenderer = /** @class */ (function () {
        function FillRenderer(context) {
            this.fillSegTag = 'div';
            this.dirtySizeFlags = {};
            this.context = context;
            this.containerElsByType = {};
            this.segsByType = {};
        }
        FillRenderer.prototype.getSegsByType = function (type) {
            return this.segsByType[type] || [];
        };
        FillRenderer.prototype.renderSegs = function (type, segs) {
            var _a;
            var renderedSegs = this.renderSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs
            var containerEls = this.attachSegs(type, renderedSegs);
            if (containerEls) {
                (_a = (this.containerElsByType[type] || (this.containerElsByType[type] = []))).push.apply(_a, containerEls);
            }
            this.segsByType[type] = renderedSegs;
            if (type === 'bgEvent') {
                this.context.view.triggerRenderedSegs(renderedSegs, false); // isMirror=false
            }
            this.dirtySizeFlags[type] = true;
        };
        FillRenderer.prototype.unrender = function (type) {
            var segs = this.segsByType[type];
            if (segs) {
                if (type === 'bgEvent') {
                    this.context.view.triggerWillRemoveSegs(segs, false); // isMirror=false
                }
                this.detachSegs(type, segs);
            }
        };
        FillRenderer.prototype.renderSegEls = function (type, segs) {
            var _this = this;
            var html = '';
            var i;
            if (segs.length) {
                for (i = 0; i < segs.length; i++) {
                    html += this.renderSegHtml(type, segs[i]);
                }
                htmlToElements(html).forEach(function (el, i) {
                    var seg = segs[i];
                    if (el) {
                        seg.el = el;
                    }
                });
                if (type === 'bgEvent') {
                    segs = filterSegsViaEls(this.context.view, segs, false // isMirror. background events can never be mirror elements
                    );
                }
                segs = segs.filter(function (seg) {
                    return elementMatches(seg.el, _this.fillSegTag);
                });
            }
            return segs;
        };
        FillRenderer.prototype.renderSegHtml = function (type, seg) {
            var css = null;
            var classNames = [];
            if (type !== 'highlight' && type !== 'businessHours') {
                css = {
                    'background-color': seg.eventRange.ui.backgroundColor
                };
            }
            if (type !== 'highlight') {
                classNames = classNames.concat(seg.eventRange.ui.classNames);
            }
            if (type === 'businessHours') {
                classNames.push('fc-bgevent');
            }
            else {
                classNames.push('fc-' + type.toLowerCase());
            }
            return '<' + this.fillSegTag +
                (classNames.length ? ' class="' + classNames.join(' ') + '"' : '') +
                (css ? ' style="' + cssToStr(css) + '"' : '') +
                '></' + this.fillSegTag + '>';
        };
        FillRenderer.prototype.detachSegs = function (type, segs) {
            var containerEls = this.containerElsByType[type];
            if (containerEls) {
                containerEls.forEach(removeElement);
                delete this.containerElsByType[type];
            }
        };
        FillRenderer.prototype.computeSizes = function (force) {
            for (var type in this.segsByType) {
                if (force || this.dirtySizeFlags[type]) {
                    this.computeSegSizes(this.segsByType[type]);
                }
            }
        };
        FillRenderer.prototype.assignSizes = function (force) {
            for (var type in this.segsByType) {
                if (force || this.dirtySizeFlags[type]) {
                    this.assignSegSizes(this.segsByType[type]);
                }
            }
            this.dirtySizeFlags = {};
        };
        FillRenderer.prototype.computeSegSizes = function (segs) {
        };
        FillRenderer.prototype.assignSegSizes = function (segs) {
        };
        return FillRenderer;
    }());
    var NamedTimeZoneImpl = /** @class */ (function () {
        function NamedTimeZoneImpl(timeZoneName) {
            this.timeZoneName = timeZoneName;
        }
        return NamedTimeZoneImpl;
    }());
    /*
    An abstraction for a dragging interaction originating on an event.
    Does higher-level things than PointerDragger, such as possibly:
    - a "mirror" that moves with the pointer
    - a minimum number of pixels or other criteria for a true drag to begin
    subclasses must emit:
    - pointerdown
    - dragstart
    - dragmove
    - pointerup
    - dragend
    */
    var ElementDragging = /** @class */ (function () {
        function ElementDragging(el) {
            this.emitter = new EmitterMixin();
        }
        ElementDragging.prototype.destroy = function () {
        };
        ElementDragging.prototype.setMirrorIsVisible = function (bool) {
        };
        ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        };
        ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        };
        return ElementDragging;
    }());
    function formatDate(dateInput, settings) {
        if (settings === void 0) { settings = {}; }
        var dateEnv = buildDateEnv$1(settings);
        var formatter = createFormatter(settings);
        var dateMeta = dateEnv.createMarkerMeta(dateInput);
        if (!dateMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.format(dateMeta.marker, formatter, {
            forcedTzo: dateMeta.forcedTzo
        });
    }
    function formatRange(startInput, endInput, settings // mixture of env and formatter settings
    ) {
        var dateEnv = buildDateEnv$1(typeof settings === 'object' && settings ? settings : {}); // pass in if non-null object
        var formatter = createFormatter(settings, globalDefaults.defaultRangeSeparator);
        var startMeta = dateEnv.createMarkerMeta(startInput);
        var endMeta = dateEnv.createMarkerMeta(endInput);
        if (!startMeta || !endMeta) { // TODO: warning?
            return '';
        }
        return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
            forcedStartTzo: startMeta.forcedTzo,
            forcedEndTzo: endMeta.forcedTzo,
            isEndExclusive: settings.isEndExclusive
        });
    }
    function buildDateEnv$1(settings) {
        var locale = buildLocale(settings.locale || 'en', parseRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
        settings = __assign({ timeZone: globalDefaults.timeZone, calendarSystem: 'gregory' }, settings, { locale: locale });
        return new DateEnv(settings);
    }
    var DRAG_META_PROPS = {
        startTime: createDuration,
        duration: createDuration,
        create: Boolean,
        sourceId: String
    };
    var DRAG_META_DEFAULTS = {
        create: true
    };
    function parseDragMeta(raw) {
        var leftoverProps = {};
        var refined = refineProps(raw, DRAG_META_PROPS, DRAG_META_DEFAULTS, leftoverProps);
        refined.leftoverProps = leftoverProps;
        return refined;
    }
    function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
        if (!datesRepDistinctDays || dayCnt > 10) {
            return { weekday: 'short' }; // "Sat"
        }
        else if (dayCnt > 1) {
            return { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }; // "Sat 11/12"
        }
        else {
            return { weekday: 'long' }; // "Saturday"
        }
    }
    function renderDateCell(dateMarker, dateProfile, datesRepDistinctDays, colCnt, colHeadFormat, context, colspan, otherAttrs) {
        var view = context.view, dateEnv = context.dateEnv, theme = context.theme, options = context.options;
        var isDateValid = rangeContainsMarker(dateProfile.activeRange, dateMarker); // TODO: called too frequently. cache somehow.
        var classNames = [
            'fc-day-header',
            theme.getClass('widgetHeader')
        ];
        var innerHtml;
        if (typeof options.columnHeaderHtml === 'function') {
            innerHtml = options.columnHeaderHtml(dateEnv.toDate(dateMarker));
        }
        else if (typeof options.columnHeaderText === 'function') {
            innerHtml = htmlEscape(options.columnHeaderText(dateEnv.toDate(dateMarker)));
        }
        else {
            innerHtml = htmlEscape(dateEnv.format(dateMarker, colHeadFormat));
        }
        if (datesRepDistinctDays) {
            classNames = classNames.concat(
            getDayClasses(dateMarker, dateProfile, context, true));
        }
        else {
            classNames.push('fc-' + DAY_IDS[dateMarker.getUTCDay()]); // only add the day-of-week class
        }
        return '' +
            '<th class="' + classNames.join(' ') + '"' +
            ((isDateValid && datesRepDistinctDays) ?
                ' data-date="' + dateEnv.formatIso(dateMarker, { omitTime: true }) + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '>' +
            (isDateValid ?
                buildGotoAnchorHtml(view, { date: dateMarker, forceOff: !datesRepDistinctDays || colCnt === 1 }, innerHtml) :
                innerHtml) +
            '</th>';
    }
    var DayHeader = /** @class */ (function (_super) {
        __extends(DayHeader, _super);
        function DayHeader(context, parentEl) {
            var _this = _super.call(this, context) || this;
            parentEl.innerHTML = ''; // because might be nbsp
            parentEl.appendChild(_this.el = htmlToElement('<div class="fc-row ' + _this.theme.getClass('headerRow') + '">' +
                '<table class="' + _this.theme.getClass('tableGrid') + '">' +
                '<thead></thead>' +
                '</table>' +
                '</div>'));
            _this.thead = _this.el.querySelector('thead');
            return _this;
        }
        DayHeader.prototype.destroy = function () {
            removeElement(this.el);
        };
        DayHeader.prototype.render = function (props) {
            var dates = props.dates, datesRepDistinctDays = props.datesRepDistinctDays;
            var parts = [];
            if (props.renderIntroHtml) {
                parts.push(props.renderIntroHtml());
            }
            var colHeadFormat = createFormatter(this.opt('columnHeaderFormat') ||
                computeFallbackHeaderFormat(datesRepDistinctDays, dates.length));
            for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
                var date = dates_1[_i];
                parts.push(renderDateCell(date, props.dateProfile, datesRepDistinctDays, dates.length, colHeadFormat, this.context));
            }
            if (this.isRtl) {
                parts.reverse();
            }
            this.thead.innerHTML = '<tr>' + parts.join('') + '</tr>';
        };
        return DayHeader;
    }(Component));
    var DaySeries = /** @class */ (function () {
        function DaySeries(range, dateProfileGenerator) {
            var date = range.start;
            var end = range.end;
            var indices = [];
            var dates = [];
            var dayIndex = -1;
            while (date < end) { // loop each day from start to end
                if (dateProfileGenerator.isHiddenDay(date)) {
                    indices.push(dayIndex + 0.5); // mark that it's between indices
                }
                else {
                    dayIndex++;
                    indices.push(dayIndex);
                    dates.push(date);
                }
                date = addDays(date, 1);
            }
            this.dates = dates;
            this.indices = indices;
            this.cnt = dates.length;
        }
        DaySeries.prototype.sliceRange = function (range) {
            var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
            var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
            var clippedFirstIndex = Math.max(0, firstIndex);
            var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
            clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
            clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
            if (clippedFirstIndex <= clippedLastIndex) {
                return {
                    firstIndex: clippedFirstIndex,
                    lastIndex: clippedLastIndex,
                    isStart: firstIndex === clippedFirstIndex,
                    isEnd: lastIndex === clippedLastIndex
                };
            }
            else {
                return null;
            }
        };
        DaySeries.prototype.getDateDayIndex = function (date) {
            var indices = this.indices;
            var dayOffset = Math.floor(diffDays(this.dates[0], date));
            if (dayOffset < 0) {
                return indices[0] - 1;
            }
            else if (dayOffset >= indices.length) {
                return indices[indices.length - 1] + 1;
            }
            else {
                return indices[dayOffset];
            }
        };
        return DaySeries;
    }());
    var DayTable = /** @class */ (function () {
        function DayTable(daySeries, breakOnWeeks) {
            var dates = daySeries.dates;
            var daysPerRow;
            var firstDay;
            var rowCnt;
            if (breakOnWeeks) {
                firstDay = dates[0].getUTCDay();
                for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
                    if (dates[daysPerRow].getUTCDay() === firstDay) {
                        break;
                    }
                }
                rowCnt = Math.ceil(dates.length / daysPerRow);
            }
            else {
                rowCnt = 1;
                daysPerRow = dates.length;
            }
            this.rowCnt = rowCnt;
            this.colCnt = daysPerRow;
            this.daySeries = daySeries;
            this.cells = this.buildCells();
            this.headerDates = this.buildHeaderDates();
        }
        DayTable.prototype.buildCells = function () {
            var rows = [];
            for (var row = 0; row < this.rowCnt; row++) {
                var cells = [];
                for (var col = 0; col < this.colCnt; col++) {
                    cells.push(this.buildCell(row, col));
                }
                rows.push(cells);
            }
            return rows;
        };
        DayTable.prototype.buildCell = function (row, col) {
            return {
                date: this.daySeries.dates[row * this.colCnt + col]
            };
        };
        DayTable.prototype.buildHeaderDates = function () {
            var dates = [];
            for (var col = 0; col < this.colCnt; col++) {
                dates.push(this.cells[0][col].date);
            }
            return dates;
        };
        DayTable.prototype.sliceRange = function (range) {
            var colCnt = this.colCnt;
            var seriesSeg = this.daySeries.sliceRange(range);
            var segs = [];
            if (seriesSeg) {
                var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
                var index = firstIndex;
                while (index <= lastIndex) {
                    var row = Math.floor(index / colCnt);
                    var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                    segs.push({
                        row: row,
                        firstCol: index % colCnt,
                        lastCol: (nextIndex - 1) % colCnt,
                        isStart: seriesSeg.isStart && index === firstIndex,
                        isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex
                    });
                    index = nextIndex;
                }
            }
            return segs;
        };
        return DayTable;
    }());
    var Slicer = /** @class */ (function () {
        function Slicer() {
            this.sliceBusinessHours = memoize(this._sliceBusinessHours);
            this.sliceDateSelection = memoize(this._sliceDateSpan);
            this.sliceEventStore = memoize(this._sliceEventStore);
            this.sliceEventDrag = memoize(this._sliceInteraction);
            this.sliceEventResize = memoize(this._sliceInteraction);
        }
        Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            var eventUiBases = props.eventUiBases;
            var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, eventUiBases, component].concat(extraArgs)),
                businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                fgEventSegs: eventSegs.fg,
                bgEventSegs: eventSegs.bg,
                eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold, component].concat(extraArgs)),
                eventSelection: props.eventSelection
            }; // TODO: give interactionSegs?
        };
        Slicer.prototype.sliceNowDate = function (// does not memoize
        date, component) {
            var extraArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                extraArgs[_i - 2] = arguments[_i];
            }
            return this._sliceDateSpan.apply(this, [{ range: { start: date, end: addMs(date, 1) }, allDay: false },
                {},
                component].concat(extraArgs));
        };
        Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                extraArgs[_i - 4] = arguments[_i];
            }
            if (!businessHours) {
                return [];
            }
            return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), component.calendar),
                {},
                dateProfile,
                nextDayThreshold,
                component].concat(extraArgs)).bg;
        };
        Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                extraArgs[_i - 5] = arguments[_i];
            }
            if (eventStore) {
                var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
                return {
                    bg: this.sliceEventRanges(rangeRes.bg, component, extraArgs),
                    fg: this.sliceEventRanges(rangeRes.fg, component, extraArgs)
                };
            }
            else {
                return { bg: [], fg: [] };
            }
        };
        Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold, component) {
            var extraArgs = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                extraArgs[_i - 5] = arguments[_i];
            }
            if (!interaction) {
                return null;
            }
            var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                segs: this.sliceEventRanges(rangeRes.fg, component, extraArgs),
                affectedInstances: interaction.affectedEvents.instances,
                isEvent: interaction.isEvent,
                sourceSeg: interaction.origSeg
            };
        };
        Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, component) {
            var extraArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                extraArgs[_i - 3] = arguments[_i];
            }
            if (!dateSpan) {
                return [];
            }
            var eventRange = fabricateEventRange(dateSpan, eventUiBases, component.calendar);
            var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
            for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
                var seg = segs_1[_a];
                seg.component = component;
                seg.eventRange = eventRange;
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRanges = function (eventRanges, component, // TODO: kill
        extraArgs) {
            var segs = [];
            for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
                var eventRange = eventRanges_1[_i];
                segs.push.apply(segs, this.sliceEventRange(eventRange, component, extraArgs));
            }
            return segs;
        };
        /*
        "complete" seg means it has component and eventRange
        */
        Slicer.prototype.sliceEventRange = function (eventRange, component, // TODO: kill
        extraArgs) {
            var segs = this.sliceRange.apply(this, [eventRange.range].concat(extraArgs));
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                seg.component = component;
                seg.eventRange = eventRange;
                seg.isStart = eventRange.isStart && seg.isStart;
                seg.isEnd = eventRange.isEnd && seg.isEnd;
            }
            return segs;
        };
        return Slicer;
    }());
    /*
    for incorporating minTime/maxTime if appropriate
    TODO: should be part of DateProfile!
    TimelineDateProfile already does this btw
    */
    function computeActiveRange(dateProfile, isComponentAllDay) {
        var range = dateProfile.activeRange;
        if (isComponentAllDay) {
            return range;
        }
        return {
            start: addMs(range.start, dateProfile.minTime.milliseconds),
            end: addMs(range.end, dateProfile.maxTime.milliseconds - 864e5) // 864e5 = ms in a day
        };
    }
    var version = '4.3.1';
    exports.Calendar = Calendar;
    exports.Component = Component;
    exports.DateComponent = DateComponent;
    exports.DateEnv = DateEnv;
    exports.DateProfileGenerator = DateProfileGenerator;
    exports.DayHeader = DayHeader;
    exports.DaySeries = DaySeries;
    exports.DayTable = DayTable;
    exports.ElementDragging = ElementDragging;
    exports.ElementScrollController = ElementScrollController;
    exports.EmitterMixin = EmitterMixin;
    exports.EventApi = EventApi;
    exports.FgEventRenderer = FgEventRenderer;
    exports.FillRenderer = FillRenderer;
    exports.Interaction = Interaction;
    exports.Mixin = Mixin;
    exports.NamedTimeZoneImpl = NamedTimeZoneImpl;
    exports.PositionCache = PositionCache;
    exports.ScrollComponent = ScrollComponent;
    exports.ScrollController = ScrollController;
    exports.Slicer = Slicer;
    exports.Splitter = Splitter;
    exports.Theme = Theme;
    exports.View = View;
    exports.WindowScrollController = WindowScrollController;
    exports.addDays = addDays;
    exports.addDurations = addDurations;
    exports.addMs = addMs;
    exports.addWeeks = addWeeks;
    exports.allowContextMenu = allowContextMenu;
    exports.allowSelection = allowSelection;
    exports.appendToElement = appendToElement;
    exports.applyAll = applyAll;
    exports.applyMutationToEventStore = applyMutationToEventStore;
    exports.applyStyle = applyStyle;
    exports.applyStyleProp = applyStyleProp;
    exports.asRoughMinutes = asRoughMinutes;
    exports.asRoughMs = asRoughMs;
    exports.asRoughSeconds = asRoughSeconds;
    exports.buildGotoAnchorHtml = buildGotoAnchorHtml;
    exports.buildSegCompareObj = buildSegCompareObj;
    exports.capitaliseFirstLetter = capitaliseFirstLetter;
    exports.combineEventUis = combineEventUis;
    exports.compareByFieldSpec = compareByFieldSpec;
    exports.compareByFieldSpecs = compareByFieldSpecs;
    exports.compareNumbers = compareNumbers;
    exports.compensateScroll = compensateScroll;
    exports.computeClippingRect = computeClippingRect;
    exports.computeEdges = computeEdges;
    exports.computeFallbackHeaderFormat = computeFallbackHeaderFormat;
    exports.computeHeightAndMargins = computeHeightAndMargins;
    exports.computeInnerRect = computeInnerRect;
    exports.computeRect = computeRect;
    exports.computeVisibleDayRange = computeVisibleDayRange;
    exports.config = config;
    exports.constrainPoint = constrainPoint;
    exports.createDuration = createDuration;
    exports.createElement = createElement;
    exports.createEmptyEventStore = createEmptyEventStore;
    exports.createEventInstance = createEventInstance;
    exports.createFormatter = createFormatter;
    exports.createPlugin = createPlugin;
    exports.cssToStr = cssToStr;
    exports.debounce = debounce;
    exports.diffDates = diffDates;
    exports.diffDayAndTime = diffDayAndTime;
    exports.diffDays = diffDays;
    exports.diffPoints = diffPoints;
    exports.diffWeeks = diffWeeks;
    exports.diffWholeDays = diffWholeDays;
    exports.diffWholeWeeks = diffWholeWeeks;
    exports.disableCursor = disableCursor;
    exports.distributeHeight = distributeHeight;
    exports.elementClosest = elementClosest;
    exports.elementMatches = elementMatches;
    exports.enableCursor = enableCursor;
    exports.eventTupleToStore = eventTupleToStore;
    exports.filterEventStoreDefs = filterEventStoreDefs;
    exports.filterHash = filterHash;
    exports.findChildren = findChildren;
    exports.findElements = findElements;
    exports.flexibleCompare = flexibleCompare;
    exports.forceClassName = forceClassName;
    exports.formatDate = formatDate;
    exports.formatIsoTimeString = formatIsoTimeString;
    exports.formatRange = formatRange;
    exports.getAllDayHtml = getAllDayHtml;
    exports.getClippingParents = getClippingParents;
    exports.getDayClasses = getDayClasses;
    exports.getElSeg = getElSeg;
    exports.getRectCenter = getRectCenter;
    exports.getRelevantEvents = getRelevantEvents;
    exports.globalDefaults = globalDefaults;
    exports.greatestDurationDenominator = greatestDurationDenominator;
    exports.hasBgRendering = hasBgRendering;
    exports.htmlEscape = htmlEscape;
    exports.htmlToElement = htmlToElement;
    exports.insertAfterElement = insertAfterElement;
    exports.interactionSettingsStore = interactionSettingsStore;
    exports.interactionSettingsToStore = interactionSettingsToStore;
    exports.intersectRanges = intersectRanges;
    exports.intersectRects = intersectRects;
    exports.isArraysEqual = isArraysEqual;
    exports.isDateSpansEqual = isDateSpansEqual;
    exports.isInt = isInt;
    exports.isInteractionValid = isInteractionValid;
    exports.isMultiDayRange = isMultiDayRange;
    exports.isPropsEqual = isPropsEqual;
    exports.isPropsValid = isPropsValid;
    exports.isSingleDay = isSingleDay;
    exports.isValidDate = isValidDate;
    exports.listenBySelector = listenBySelector;
    exports.mapHash = mapHash;
    exports.matchCellWidths = matchCellWidths;
    exports.memoize = memoize;
    exports.memoizeOutput = memoizeOutput;
    exports.memoizeRendering = memoizeRendering;
    exports.mergeEventStores = mergeEventStores;
    exports.multiplyDuration = multiplyDuration;
    exports.padStart = padStart;
    exports.parseBusinessHours = parseBusinessHours;
    exports.parseDragMeta = parseDragMeta;
    exports.parseEventDef = parseEventDef;
    exports.parseFieldSpecs = parseFieldSpecs;
    exports.parseMarker = parse;
    exports.pointInsideRect = pointInsideRect;
    exports.prependToElement = prependToElement;
    exports.preventContextMenu = preventContextMenu;
    exports.preventDefault = preventDefault;
    exports.preventSelection = preventSelection;
    exports.processScopedUiProps = processScopedUiProps;
    exports.rangeContainsMarker = rangeContainsMarker;
    exports.rangeContainsRange = rangeContainsRange;
    exports.rangesEqual = rangesEqual;
    exports.rangesIntersect = rangesIntersect;
    exports.refineProps = refineProps;
    exports.removeElement = removeElement;
    exports.removeExact = removeExact;
    exports.renderDateCell = renderDateCell;
    exports.requestJson = requestJson;
    exports.sliceEventStore = sliceEventStore;
    exports.startOfDay = startOfDay;
    exports.subtractInnerElHeight = subtractInnerElHeight;
    exports.translateRect = translateRect;
    exports.uncompensateScroll = uncompensateScroll;
    exports.undistributeHeight = undistributeHeight;
    exports.unpromisify = unpromisify;
    exports.version = version;
    exports.whenTransitionDone = whenTransitionDone;
    exports.wholeDivideDurations = wholeDivideDurations;
    Object.defineProperty(exports, '__esModule', { value: true });
}));
/*!
FullCalendar Day Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fullcalendar/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@fullcalendar/core'], factory) :
    (global = global || self, factory(global.FullCalendarDayGrid = {}, global.FullCalendar));
}(this, function (exports, core) { 'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var DayGridDateProfileGenerator = /** @class */ (function (_super) {
        __extends(DayGridDateProfileGenerator, _super);
        function DayGridDateProfileGenerator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
            var dateEnv = this.dateEnv;
            var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
            var start = renderRange.start;
            var end = renderRange.end;
            var endOfWeek;
            if (/^(year|month)$/.test(currentRangeUnit)) {
                start = dateEnv.startOfWeek(start);
                endOfWeek = dateEnv.startOfWeek(end);
                if (endOfWeek.valueOf() !== end.valueOf()) {
                    end = core.addWeeks(endOfWeek, 1);
                }
            }
            if (this.options.monthMode &&
                this.options.fixedWeekCount) {
                var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
                core.diffWeeks(start, end));
                end = core.addWeeks(end, 6 - rowCnt);
            }
            return { start: start, end: end };
        };
        return DayGridDateProfileGenerator;
    }(core.DateProfileGenerator));
    /* A rectangular panel that is absolutely positioned over other content
    ------------------------------------------------------------------------------------------------------------------------
    Options:
      - className (string)
      - content (HTML string, element, or element array)
      - parentEl
      - top
      - left
      - right (the x coord of where the right edge should be. not a "CSS" right)
      - autoHide (boolean)
      - show (callback)
      - hide (callback)
    */
    var Popover = /** @class */ (function () {
        function Popover(options) {
            var _this = this;
            this.isHidden = true;
            this.margin = 10; // the space required between the popover and the edges of the scroll container
            this.documentMousedown = function (ev) {
                if (_this.el && !_this.el.contains(ev.target)) {
                    _this.hide();
                }
            };
            this.options = options;
        }
        Popover.prototype.show = function () {
            if (this.isHidden) {
                if (!this.el) {
                    this.render();
                }
                this.el.style.display = '';
                this.position();
                this.isHidden = false;
                this.trigger('show');
            }
        };
        Popover.prototype.hide = function () {
            if (!this.isHidden) {
                this.el.style.display = 'none';
                this.isHidden = true;
                this.trigger('hide');
            }
        };
        Popover.prototype.render = function () {
            var _this = this;
            var options = this.options;
            var el = this.el = core.createElement('div', {
                className: 'fc-popover ' + (options.className || ''),
                style: {
                    top: '0',
                    left: '0'
                }
            });
            if (typeof options.content === 'function') {
                options.content(el);
            }
            options.parentEl.appendChild(el);
            core.listenBySelector(el, 'click', '.fc-close', function (ev) {
                _this.hide();
            });
            if (options.autoHide) {
                document.addEventListener('mousedown', this.documentMousedown);
            }
        };
        Popover.prototype.destroy = function () {
            this.hide();
            if (this.el) {
                core.removeElement(this.el);
                this.el = null;
            }
            document.removeEventListener('mousedown', this.documentMousedown);
        };
        Popover.prototype.position = function () {
            var options = this.options;
            var el = this.el;
            var elDims = el.getBoundingClientRect(); // only used for width,height
            var origin = core.computeRect(el.offsetParent);
            var clippingRect = core.computeClippingRect(options.parentEl);
            var top; // the "position" (not "offset") values for the popover
            var left; //
            top = options.top || 0;
            if (options.left !== undefined) {
                left = options.left;
            }
            else if (options.right !== undefined) {
                left = options.right - elDims.width; // derive the left value from the right value
            }
            else {
                left = 0;
            }
            top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
            top = Math.max(top, clippingRect.top + this.margin);
            left = Math.min(left, clippingRect.right - elDims.width - this.margin);
            left = Math.max(left, clippingRect.left + this.margin);
            core.applyStyle(el, {
                top: top - origin.top,
                left: left - origin.left
            });
        };
        Popover.prototype.trigger = function (name) {
            if (this.options[name]) {
                this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        };
        return Popover;
    }());
    /* Event-rendering methods for the DayGrid class
    ----------------------------------------------------------------------------------------------------------------------*/
    var SimpleDayGridEventRenderer = /** @class */ (function (_super) {
        __extends(SimpleDayGridEventRenderer, _super);
        function SimpleDayGridEventRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SimpleDayGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
            var _a = this.context, view = _a.view, options = _a.options;
            var eventRange = seg.eventRange;
            var eventDef = eventRange.def;
            var eventUi = eventRange.ui;
            var allDay = eventDef.allDay;
            var isDraggable = view.computeEventDraggable(eventDef, eventUi);
            var isResizableFromStart = allDay && seg.isStart && view.computeEventStartResizable(eventDef, eventUi);
            var isResizableFromEnd = allDay && seg.isEnd && view.computeEventEndResizable(eventDef, eventUi);
            var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
            var skinCss = core.cssToStr(this.getSkinCss(eventUi));
            var timeHtml = '';
            var timeText;
            var titleHtml;
            classes.unshift('fc-day-grid-event', 'fc-h-event');
            if (seg.isStart) {
                timeText = this.getTimeText(eventRange);
                if (timeText) {
                    timeHtml = '<span class="fc-time">' + core.htmlEscape(timeText) + '</span>';
                }
            }
            titleHtml =
                '<span class="fc-title">' +
                    (core.htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
                    '</span>';
            return '<a class="' + classes.join(' ') + '"' +
                (eventDef.url ?
                    ' href="' + core.htmlEscape(eventDef.url) + '"' :
                    '') +
                (skinCss ?
                    ' style="' + skinCss + '"' :
                    '') +
                '>' +
                '<div class="fc-content">' +
                (options.dir === 'rtl' ?
                    titleHtml + ' ' + timeHtml : // put a natural space in between
                    timeHtml + ' ' + titleHtml //
                ) +
                '</div>' +
                (isResizableFromStart ?
                    '<div class="fc-resizer fc-start-resizer"></div>' :
                    '') +
                (isResizableFromEnd ?
                    '<div class="fc-resizer fc-end-resizer"></div>' :
                    '') +
                '</a>';
        };
        SimpleDayGridEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'narrow'
            };
        };
        SimpleDayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return false; // TODO: somehow consider the originating DayGrid's column count
        };
        return SimpleDayGridEventRenderer;
    }(core.FgEventRenderer));
    /* Event-rendering methods for the DayGrid class
    ----------------------------------------------------------------------------------------------------------------------*/
    var DayGridEventRenderer = /** @class */ (function (_super) {
        __extends(DayGridEventRenderer, _super);
        function DayGridEventRenderer(dayGrid) {
            var _this = _super.call(this, dayGrid.context) || this;
            _this.dayGrid = dayGrid;
            return _this;
        }
        DayGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            var rowStructs = this.rowStructs = this.renderSegRows(segs);
            this.dayGrid.rowEls.forEach(function (rowNode, i) {
                rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
            });
            if (!mirrorInfo) {
                this.dayGrid.removeSegPopover();
            }
        };
        DayGridEventRenderer.prototype.detachSegs = function () {
            var rowStructs = this.rowStructs || [];
            var rowStruct;
            while ((rowStruct = rowStructs.pop())) {
                core.removeElement(rowStruct.tbodyEl);
            }
            this.rowStructs = null;
        };
        DayGridEventRenderer.prototype.renderSegRows = function (segs) {
            var rowStructs = [];
            var segRows;
            var row;
            segRows = this.groupSegRows(segs); // group into nested arrays
            for (row = 0; row < segRows.length; row++) {
                rowStructs.push(this.renderSegRow(row, segRows[row]));
            }
            return rowStructs;
        };
        DayGridEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
            var dayGrid = this.dayGrid;
            var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
            var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
            var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
            var tbody = document.createElement('tbody');
            var segMatrix = []; // lookup for which segments are rendered into which level+col cells
            var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
            var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
            var i;
            var levelSegs;
            var col;
            var tr;
            var j;
            var seg;
            var td;
            function emptyCellsUntil(endCol) {
                while (col < endCol) {
                    td = (loneCellMatrix[i - 1] || [])[col];
                    if (td) {
                        td.rowSpan = (td.rowSpan || 1) + 1;
                    }
                    else {
                        td = document.createElement('td');
                        tr.appendChild(td);
                    }
                    cellMatrix[i][col] = td;
                    loneCellMatrix[i][col] = td;
                    col++;
                }
            }
            for (i = 0; i < levelCnt; i++) { // iterate through all levels
                levelSegs = segLevels[i];
                col = 0;
                tr = document.createElement('tr');
                segMatrix.push([]);
                cellMatrix.push([]);
                loneCellMatrix.push([]);
                if (levelSegs) {
                    for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
                        seg = levelSegs[j];
                        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                        emptyCellsUntil(leftCol);
                        td = core.createElement('td', { className: 'fc-event-container' }, seg.el);
                        if (leftCol !== rightCol) {
                            td.colSpan = rightCol - leftCol + 1;
                        }
                        else { // a single-column segment
                            loneCellMatrix[i][col] = td;
                        }
                        while (col <= rightCol) {
                            cellMatrix[i][col] = td;
                            segMatrix[i][col] = seg;
                            col++;
                        }
                        tr.appendChild(td);
                    }
                }
                emptyCellsUntil(colCnt); // finish off the row
                var introHtml = dayGrid.renderProps.renderIntroHtml();
                if (introHtml) {
                    if (dayGrid.isRtl) {
                        core.appendToElement(tr, introHtml);
                    }
                    else {
                        core.prependToElement(tr, introHtml);
                    }
                }
                tbody.appendChild(tr);
            }
            return {
                row: row,
                tbodyEl: tbody,
                cellMatrix: cellMatrix,
                segMatrix: segMatrix,
                segLevels: segLevels,
                segs: rowSegs
            };
        };
        DayGridEventRenderer.prototype.buildSegLevels = function (segs) {
            var _a = this.dayGrid, isRtl = _a.isRtl, colCnt = _a.colCnt;
            var levels = [];
            var i;
            var seg;
            var j;
            segs = this.sortEventSegs(segs);
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                for (j = 0; j < levels.length; j++) {
                    if (!isDaySegCollision(seg, levels[j])) {
                        break;
                    }
                }
                seg.level = j;
                seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol; // for sorting only
                seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol // for sorting only
                ;
                (levels[j] || (levels[j] = [])).push(seg);
            }
            for (j = 0; j < levels.length; j++) {
                levels[j].sort(compareDaySegCols);
            }
            return levels;
        };
        DayGridEventRenderer.prototype.groupSegRows = function (segs) {
            var segRows = [];
            var i;
            for (i = 0; i < this.dayGrid.rowCnt; i++) {
                segRows.push([]);
            }
            for (i = 0; i < segs.length; i++) {
                segRows[segs[i].row].push(segs[i]);
            }
            return segRows;
        };
        DayGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return this.dayGrid.colCnt === 1; // we'll likely have space if there's only one day
        };
        return DayGridEventRenderer;
    }(SimpleDayGridEventRenderer));
    function isDaySegCollision(seg, otherSegs) {
        var i;
        var otherSeg;
        for (i = 0; i < otherSegs.length; i++) {
            otherSeg = otherSegs[i];
            if (otherSeg.firstCol <= seg.lastCol &&
                otherSeg.lastCol >= seg.firstCol) {
                return true;
            }
        }
        return false;
    }
    function compareDaySegCols(a, b) {
        return a.leftCol - b.leftCol;
    }
    var DayGridMirrorRenderer = /** @class */ (function (_super) {
        __extends(DayGridMirrorRenderer, _super);
        function DayGridMirrorRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            var sourceSeg = mirrorInfo.sourceSeg;
            var rowStructs = this.rowStructs = this.renderSegRows(segs);
            this.dayGrid.rowEls.forEach(function (rowNode, row) {
                var skeletonEl = core.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>'); // will be absolutely positioned
                var skeletonTopEl;
                var skeletonTop;
                if (sourceSeg && sourceSeg.row === row) {
                    skeletonTopEl = sourceSeg.el;
                }
                else {
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                    if (!skeletonTopEl) { // when no events
                        skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                    }
                }
                skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                    rowNode.getBoundingClientRect().top; // the offsetParent origin
                skeletonEl.style.top = skeletonTop + 'px';
                skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
                rowNode.appendChild(skeletonEl);
            });
        };
        return DayGridMirrorRenderer;
    }(DayGridEventRenderer));
    var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
    var DayGridFillRenderer = /** @class */ (function (_super) {
        __extends(DayGridFillRenderer, _super);
        function DayGridFillRenderer(dayGrid) {
            var _this = _super.call(this, dayGrid.context) || this;
            _this.fillSegTag = 'td'; // override the default tag name
            _this.dayGrid = dayGrid;
            return _this;
        }
        DayGridFillRenderer.prototype.renderSegs = function (type, segs) {
            if (type === 'bgEvent') {
                segs = segs.filter(function (seg) {
                    return seg.eventRange.def.allDay;
                });
            }
            _super.prototype.renderSegs.call(this, type, segs);
        };
        DayGridFillRenderer.prototype.attachSegs = function (type, segs) {
            var els = [];
            var i;
            var seg;
            var skeletonEl;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                skeletonEl = this.renderFillRow(type, seg);
                this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
                els.push(skeletonEl);
            }
            return els;
        };
        DayGridFillRenderer.prototype.renderFillRow = function (type, seg) {
            var dayGrid = this.dayGrid;
            var colCnt = dayGrid.colCnt, isRtl = dayGrid.isRtl;
            var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
            var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
            var startCol = leftCol;
            var endCol = rightCol + 1;
            var className;
            var skeletonEl;
            var trEl;
            if (type === 'businessHours') {
                className = 'bgevent';
            }
            else {
                className = type.toLowerCase();
            }
            skeletonEl = core.htmlToElement('<div class="fc-' + className + '-skeleton">' +
                '<table><tr></tr></table>' +
                '</div>');
            trEl = skeletonEl.getElementsByTagName('tr')[0];
            if (startCol > 0) {
                core.appendToElement(trEl, 
                new Array(startCol + 1).join(EMPTY_CELL_HTML));
            }
            seg.el.colSpan = endCol - startCol;
            trEl.appendChild(seg.el);
            if (endCol < colCnt) {
                core.appendToElement(trEl, 
                new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
            }
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (dayGrid.isRtl) {
                    core.appendToElement(trEl, introHtml);
                }
                else {
                    core.prependToElement(trEl, introHtml);
                }
            }
            return skeletonEl;
        };
        return DayGridFillRenderer;
    }(core.FillRenderer));
    var DayTile = /** @class */ (function (_super) {
        __extends(DayTile, _super);
        function DayTile(context, el) {
            var _this = _super.call(this, context, el) || this;
            var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
            var renderFrame = _this.renderFrame = core.memoizeRendering(_this._renderFrame);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
            _this.renderEventResize = core.memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
            context.calendar.registerInteractiveComponent(_this, {
                el: _this.el,
                useEventCenter: false
            });
            return _this;
        }
        DayTile.prototype.render = function (props) {
            this.renderFrame(props.date);
            this.renderFgEvents(props.fgSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDragInstances);
            this.renderEventResize(props.eventResizeInstances);
        };
        DayTile.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderFrame.unrender(); // should unrender everything else
            this.calendar.unregisterInteractiveComponent(this);
        };
        DayTile.prototype._renderFrame = function (date) {
            var _a = this, theme = _a.theme, dateEnv = _a.dateEnv;
            var title = dateEnv.format(date, core.createFormatter(this.opt('dayPopoverFormat')) // TODO: cache
            );
            this.el.innerHTML =
                '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                    '<span class="fc-title">' +
                    core.htmlEscape(title) +
                    '</span>' +
                    '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                    '</div>' +
                    '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                    '<div class="fc-event-container"></div>' +
                    '</div>';
            this.segContainerEl = this.el.querySelector('.fc-event-container');
        };
        DayTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
            var date = this.props.date; // HACK
            if (positionLeft < elWidth && positionTop < elHeight) {
                return {
                    component: this,
                    dateSpan: {
                        allDay: true,
                        range: { start: date, end: core.addDays(date, 1) }
                    },
                    dayEl: this.el,
                    rect: {
                        left: 0,
                        top: 0,
                        right: elWidth,
                        bottom: elHeight
                    },
                    layer: 1
                };
            }
        };
        return DayTile;
    }(core.DateComponent));
    var DayTileEventRenderer = /** @class */ (function (_super) {
        __extends(DayTileEventRenderer, _super);
        function DayTileEventRenderer(dayTile) {
            var _this = _super.call(this, dayTile.context) || this;
            _this.dayTile = dayTile;
            return _this;
        }
        DayTileEventRenderer.prototype.attachSegs = function (segs) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                this.dayTile.segContainerEl.appendChild(seg.el);
            }
        };
        DayTileEventRenderer.prototype.detachSegs = function (segs) {
            for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
                var seg = segs_2[_i];
                core.removeElement(seg.el);
            }
        };
        return DayTileEventRenderer;
    }(SimpleDayGridEventRenderer));
    var DayBgRow = /** @class */ (function () {
        function DayBgRow(context) {
            this.context = context;
        }
        DayBgRow.prototype.renderHtml = function (props) {
            var parts = [];
            if (props.renderIntroHtml) {
                parts.push(props.renderIntroHtml());
            }
            for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
            }
            if (!props.cells.length) {
                parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
            }
            if (this.context.options.dir === 'rtl') {
                parts.reverse();
            }
            return '<tr>' + parts.join('') + '</tr>';
        };
        return DayBgRow;
    }());
    function renderCellHtml(date, dateProfile, context, otherAttrs) {
        var dateEnv = context.dateEnv, theme = context.theme;
        var isDateValid = core.rangeContainsMarker(dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
        var classes = core.getDayClasses(date, dateProfile, context);
        classes.unshift('fc-day', theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    }
    var DAY_NUM_FORMAT = core.createFormatter({ day: 'numeric' });
    var WEEK_NUM_FORMAT = core.createFormatter({ week: 'numeric' });
    var DayGrid = /** @class */ (function (_super) {
        __extends(DayGrid, _super);
        function DayGrid(context, el, renderProps) {
            var _this = _super.call(this, context, el) || this;
            _this.bottomCoordPadding = 0; // hack for extending the hit area for the last row of the coordinate grid
            _this.isCellSizesDirty = false;
            var eventRenderer = _this.eventRenderer = new DayGridEventRenderer(_this);
            var fillRenderer = _this.fillRenderer = new DayGridFillRenderer(_this);
            _this.mirrorRenderer = new DayGridMirrorRenderer(_this);
            var renderCells = _this.renderCells = core.memoizeRendering(_this._renderCells, _this._unrenderCells);
            _this.renderBusinessHours = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
            _this.renderDateSelection = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
            _this.renderBgEvents = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
            _this.renderEventResize = core.memoizeRendering(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
            _this.renderProps = renderProps;
            return _this;
        }
        DayGrid.prototype.render = function (props) {
            var cells = props.cells;
            this.rowCnt = cells.length;
            this.colCnt = cells[0].length;
            this.renderCells(cells, props.isRigid);
            this.renderBusinessHours(props.businessHourSegs);
            this.renderDateSelection(props.dateSelectionSegs);
            this.renderBgEvents(props.bgEventSegs);
            this.renderFgEvents(props.fgEventSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDrag);
            this.renderEventResize(props.eventResize);
            if (this.segPopoverTile) {
                this.updateSegPopoverTile();
            }
        };
        DayGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderCells.unrender(); // will unrender everything else
        };
        DayGrid.prototype.getCellRange = function (row, col) {
            var start = this.props.cells[row][col].date;
            var end = core.addDays(start, 1);
            return { start: start, end: end };
        };
        DayGrid.prototype.updateSegPopoverTile = function (date, segs) {
            var ownProps = this.props;
            this.segPopoverTile.receiveProps({
                date: date || this.segPopoverTile.props.date,
                fgSegs: segs || this.segPopoverTile.props.fgSegs,
                eventSelection: ownProps.eventSelection,
                eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
                eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
            });
        };
        /* Date Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderCells = function (cells, isRigid) {
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
            var html = '';
            var row;
            var col;
            for (row = 0; row < rowCnt; row++) {
                html += this.renderDayRowHtml(row, isRigid);
            }
            this.el.innerHTML = html;
            this.rowEls = core.findElements(this.el, '.fc-row');
            this.cellEls = core.findElements(this.el, '.fc-day, .fc-disabled-day');
            if (this.isRtl) {
                this.cellEls.reverse();
            }
            this.rowPositions = new core.PositionCache(this.el, this.rowEls, false, true // vertical
            );
            this.colPositions = new core.PositionCache(this.el, this.cellEls.slice(0, colCnt), // only the first row
            true, false // horizontal
            );
            for (row = 0; row < rowCnt; row++) {
                for (col = 0; col < colCnt; col++) {
                    this.publiclyTrigger('dayRender', [
                        {
                            date: dateEnv.toDate(cells[row][col].date),
                            el: this.getCellEl(row, col),
                            view: view
                        }
                    ]);
                }
            }
            this.isCellSizesDirty = true;
        };
        DayGrid.prototype._unrenderCells = function () {
            this.removeSegPopover();
        };
        DayGrid.prototype.renderDayRowHtml = function (row, isRigid) {
            var theme = this.theme;
            var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
            if (isRigid) {
                classes.push('fc-rigid');
            }
            var bgRow = new DayBgRow(this.context);
            return '' +
                '<div class="' + classes.join(' ') + '">' +
                '<div class="fc-bg">' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                bgRow.renderHtml({
                    cells: this.props.cells[row],
                    dateProfile: this.props.dateProfile,
                    renderIntroHtml: this.renderProps.renderBgIntroHtml
                }) +
                '</table>' +
                '</div>' +
                '<div class="fc-content-skeleton">' +
                '<table>' +
                (this.getIsNumbersVisible() ?
                    '<thead>' +
                        this.renderNumberTrHtml(row) +
                        '</thead>' :
                    '') +
                '</table>' +
                '</div>' +
                '</div>';
        };
        DayGrid.prototype.getIsNumbersVisible = function () {
            return this.getIsDayNumbersVisible() ||
                this.renderProps.cellWeekNumbersVisible ||
                this.renderProps.colWeekNumbersVisible;
        };
        DayGrid.prototype.getIsDayNumbersVisible = function () {
            return this.rowCnt > 1;
        };
        /* Grid Number Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.renderNumberTrHtml = function (row) {
            var intro = this.renderProps.renderNumberIntroHtml(row, this);
            return '' +
                '<tr>' +
                (this.isRtl ? '' : intro) +
                this.renderNumberCellsHtml(row) +
                (this.isRtl ? intro : '') +
                '</tr>';
        };
        DayGrid.prototype.renderNumberCellsHtml = function (row) {
            var htmls = [];
            var col;
            var date;
            for (col = 0; col < this.colCnt; col++) {
                date = this.props.cells[row][col].date;
                htmls.push(this.renderNumberCellHtml(date));
            }
            if (this.isRtl) {
                htmls.reverse();
            }
            return htmls.join('');
        };
        DayGrid.prototype.renderNumberCellHtml = function (date) {
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var html = '';
            var isDateValid = core.rangeContainsMarker(this.props.dateProfile.activeRange, date); // TODO: called too frequently. cache somehow.
            var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
            var classes;
            var weekCalcFirstDow;
            if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
                return '<td></td>'; //  will create an empty space above events :(
            }
            classes = core.getDayClasses(date, this.props.dateProfile, this.context);
            classes.unshift('fc-day-top');
            if (this.renderProps.cellWeekNumbersVisible) {
                weekCalcFirstDow = dateEnv.weekDow;
            }
            html += '<td class="' + classes.join(' ') + '"' +
                (isDateValid ?
                    ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                    '') +
                '>';
            if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
                html += core.buildGotoAnchorHtml(view, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT) // inner HTML
                );
            }
            if (isDayNumberVisible) {
                html += core.buildGotoAnchorHtml(view, date, { 'class': 'fc-day-number' }, dateEnv.format(date, DAY_NUM_FORMAT) // inner HTML
                );
            }
            html += '</td>';
            return html;
        };
        /* Sizing
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.updateSize = function (isResize) {
            var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
            if (isResize ||
                this.isCellSizesDirty ||
                this.view.calendar.isEventsUpdated // hack
            ) {
                this.buildPositionCaches();
                this.isCellSizesDirty = false;
            }
            fillRenderer.computeSizes(isResize);
            eventRenderer.computeSizes(isResize);
            mirrorRenderer.computeSizes(isResize);
            fillRenderer.assignSizes(isResize);
            eventRenderer.assignSizes(isResize);
            mirrorRenderer.assignSizes(isResize);
        };
        DayGrid.prototype.buildPositionCaches = function () {
            this.buildColPositions();
            this.buildRowPositions();
        };
        DayGrid.prototype.buildColPositions = function () {
            this.colPositions.build();
        };
        DayGrid.prototype.buildRowPositions = function () {
            this.rowPositions.build();
            this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
        };
        /* Hit System
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.positionToHit = function (leftPosition, topPosition) {
            var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
            var col = colPositions.leftToIndex(leftPosition);
            var row = rowPositions.topToIndex(topPosition);
            if (row != null && col != null) {
                return {
                    row: row,
                    col: col,
                    dateSpan: {
                        range: this.getCellRange(row, col),
                        allDay: true
                    },
                    dayEl: this.getCellEl(row, col),
                    relativeRect: {
                        left: colPositions.lefts[col],
                        right: colPositions.rights[col],
                        top: rowPositions.tops[row],
                        bottom: rowPositions.bottoms[row]
                    }
                };
            }
        };
        /* Cell System
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.getCellEl = function (row, col) {
            return this.cellEls[row * this.colCnt + col];
        };
        /* Event Drag Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.fillRenderer.renderSegs('highlight', state.segs);
            }
        };
        DayGrid.prototype._unrenderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.fillRenderer.unrender('highlight');
            }
        };
        /* Event Resize Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype._renderEventResize = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.fillRenderer.renderSegs('highlight', state.segs);
                this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        DayGrid.prototype._unrenderEventResize = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.fillRenderer.unrender('highlight');
                this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        /* More+ Link Popover
        ------------------------------------------------------------------------------------------------------------------*/
        DayGrid.prototype.removeSegPopover = function () {
            if (this.segPopover) {
                this.segPopover.hide(); // in handler, will call segPopover's removeElement
            }
        };
        DayGrid.prototype.limitRows = function (levelLimit) {
            var rowStructs = this.eventRenderer.rowStructs || [];
            var row; // row #
            var rowLevelLimit;
            for (row = 0; row < rowStructs.length; row++) {
                this.unlimitRow(row);
                if (!levelLimit) {
                    rowLevelLimit = false;
                }
                else if (typeof levelLimit === 'number') {
                    rowLevelLimit = levelLimit;
                }
                else {
                    rowLevelLimit = this.computeRowLevelLimit(row);
                }
                if (rowLevelLimit !== false) {
                    this.limitRow(row, rowLevelLimit);
                }
            }
        };
        DayGrid.prototype.computeRowLevelLimit = function (row) {
            var rowEl = this.rowEls[row]; // the containing "fake" row div
            var rowBottom = rowEl.getBoundingClientRect().bottom; // relative to viewport!
            var trEls = core.findChildren(this.eventRenderer.rowStructs[row].tbodyEl);
            var i;
            var trEl;
            for (i = 0; i < trEls.length; i++) {
                trEl = trEls[i];
                trEl.classList.remove('fc-limited'); // reset to original state (reveal)
                if (trEl.getBoundingClientRect().bottom > rowBottom) {
                    return i;
                }
            }
            return false; // should not limit at all
        };
        DayGrid.prototype.limitRow = function (row, levelLimit) {
            var _this = this;
            var _a = this, colCnt = _a.colCnt, isRtl = _a.isRtl;
            var rowStruct = this.eventRenderer.rowStructs[row];
            var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
            var col = 0; // col #, left-to-right (not chronologically)
            var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
            var cellMatrix; // a matrix (by level, then column) of all <td> elements in the row
            var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
            var i;
            var seg;
            var segsBelow; // array of segment objects below `seg` in the current `col`
            var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
            var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
            var td;
            var rowSpan;
            var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
            var j;
            var moreTd;
            var moreWrap;
            var moreLink;
            var emptyCellsUntil = function (endCol) {
                while (col < endCol) {
                    segsBelow = _this.getCellSegs(row, col, levelLimit);
                    if (segsBelow.length) {
                        td = cellMatrix[levelLimit - 1][col];
                        moreLink = _this.renderMoreLink(row, col, segsBelow);
                        moreWrap = core.createElement('div', null, moreLink);
                        td.appendChild(moreWrap);
                        moreNodes.push(moreWrap);
                    }
                    col++;
                }
            };
            if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
                levelSegs = rowStruct.segLevels[levelLimit - 1];
                cellMatrix = rowStruct.cellMatrix;
                limitedNodes = core.findChildren(rowStruct.tbodyEl).slice(levelLimit); // get level <tr> elements past the limit
                limitedNodes.forEach(function (node) {
                    node.classList.add('fc-limited'); // hide elements and get a simple DOM-nodes array
                });
                for (i = 0; i < levelSegs.length; i++) {
                    seg = levelSegs[i];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol); // process empty cells before the segment
                    colSegsBelow = [];
                    totalSegsBelow = 0;
                    while (col <= rightCol) {
                        segsBelow = this.getCellSegs(row, col, levelLimit);
                        colSegsBelow.push(segsBelow);
                        totalSegsBelow += segsBelow.length;
                        col++;
                    }
                    if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
                        td = cellMatrix[levelLimit - 1][leftCol]; // the segment's parent cell
                        rowSpan = td.rowSpan || 1;
                        segMoreNodes = [];
                        for (j = 0; j < colSegsBelow.length; j++) {
                            moreTd = core.createElement('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                            segsBelow = colSegsBelow[j];
                            moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow) // count seg as hidden too
                            );
                            moreWrap = core.createElement('div', null, moreLink);
                            moreTd.appendChild(moreWrap);
                            segMoreNodes.push(moreTd);
                            moreNodes.push(moreTd);
                        }
                        td.classList.add('fc-limited');
                        core.insertAfterElement(td, segMoreNodes);
                        limitedNodes.push(td);
                    }
                }
                emptyCellsUntil(this.colCnt); // finish off the level
                rowStruct.moreEls = moreNodes; // for easy undoing later
                rowStruct.limitedEls = limitedNodes; // for easy undoing later
            }
        };
        DayGrid.prototype.unlimitRow = function (row) {
            var rowStruct = this.eventRenderer.rowStructs[row];
            if (rowStruct.moreEls) {
                rowStruct.moreEls.forEach(core.removeElement);
                rowStruct.moreEls = null;
            }
            if (rowStruct.limitedEls) {
                rowStruct.limitedEls.forEach(function (limitedEl) {
                    limitedEl.classList.remove('fc-limited');
                });
                rowStruct.limitedEls = null;
            }
        };
        DayGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
            var _this = this;
            var _a = this, view = _a.view, dateEnv = _a.dateEnv;
            var a = core.createElement('a', { className: 'fc-more' });
            a.innerText = this.getMoreLinkText(hiddenSegs.length);
            a.addEventListener('click', function (ev) {
                var clickOption = _this.opt('eventLimitClick');
                var _col = _this.isRtl ? _this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
                var date = _this.props.cells[row][_col].date;
                var moreEl = ev.currentTarget;
                var dayEl = _this.getCellEl(row, col);
                var allSegs = _this.getCellSegs(row, col);
                var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
                var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
                if (typeof clickOption === 'function') {
                    clickOption = _this.publiclyTrigger('eventLimitClick', [
                        {
                            date: dateEnv.toDate(date),
                            allDay: true,
                            dayEl: dayEl,
                            moreEl: moreEl,
                            segs: reslicedAllSegs,
                            hiddenSegs: reslicedHiddenSegs,
                            jsEvent: ev,
                            view: view
                        }
                    ]);
                }
                if (clickOption === 'popover') {
                    _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
                }
                else if (typeof clickOption === 'string') { // a view name
                    view.calendar.zoomTo(date, clickOption);
                }
            });
            return a;
        };
        DayGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
            var _this = this;
            var _a = this, calendar = _a.calendar, view = _a.view, theme = _a.theme;
            var _col = this.isRtl ? this.colCnt - col - 1 : col; // HACK: props.cells has different dir system?
            var moreWrap = moreLink.parentNode; // the <div> wrapper around the <a>
            var topEl; // the element we want to match the top coordinate of
            var options;
            if (this.rowCnt === 1) {
                topEl = view.el; // will cause the popover to cover any sort of header
            }
            else {
                topEl = this.rowEls[row]; // will align with top of row
            }
            options = {
                className: 'fc-more-popover ' + theme.getClass('popover'),
                parentEl: view.el,
                top: core.computeRect(topEl).top,
                autoHide: true,
                content: function (el) {
                    _this.segPopoverTile = new DayTile(_this.context, el);
                    _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
                },
                hide: function () {
                    _this.segPopoverTile.destroy();
                    _this.segPopoverTile = null;
                    _this.segPopover.destroy();
                    _this.segPopover = null;
                }
            };
            if (this.isRtl) {
                options.right = core.computeRect(moreWrap).right + 1; // +1 to be over cell border
            }
            else {
                options.left = core.computeRect(moreWrap).left - 1; // -1 to be over cell border
            }
            this.segPopover = new Popover(options);
            this.segPopover.show();
            calendar.releaseAfterSizingTriggers(); // hack for eventPositioned
        };
        DayGrid.prototype.resliceDaySegs = function (segs, dayDate) {
            var dayStart = dayDate;
            var dayEnd = core.addDays(dayStart, 1);
            var dayRange = { start: dayStart, end: dayEnd };
            var newSegs = [];
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                var eventRange = seg.eventRange;
                var origRange = eventRange.range;
                var slicedRange = core.intersectRanges(origRange, dayRange);
                if (slicedRange) {
                    newSegs.push(__assign({}, seg, { eventRange: {
                            def: eventRange.def,
                            ui: __assign({}, eventRange.ui, { durationEditable: false }),
                            instance: eventRange.instance,
                            range: slicedRange
                        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
                }
            }
            return newSegs;
        };
        DayGrid.prototype.getMoreLinkText = function (num) {
            var opt = this.opt('eventLimitText');
            if (typeof opt === 'function') {
                return opt(num);
            }
            else {
                return '+' + num + ' ' + opt;
            }
        };
        DayGrid.prototype.getCellSegs = function (row, col, startLevel) {
            var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
            var level = startLevel || 0;
            var segs = [];
            var seg;
            while (level < segMatrix.length) {
                seg = segMatrix[level][col];
                if (seg) {
                    segs.push(seg);
                }
                level++;
            }
            return segs;
        };
        return DayGrid;
    }(core.DateComponent));
    var WEEK_NUM_FORMAT$1 = core.createFormatter({ week: 'numeric' });
    /* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
    ----------------------------------------------------------------------------------------------------------------------*/
    var DayGridView = /** @class */ (function (_super) {
        __extends(DayGridView, _super);
        function DayGridView(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
            /* Header Rendering
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderHeadIntroHtml = function () {
                var theme = _this.theme;
                if (_this.colWeekNumbersVisible) {
                    return '' +
                        '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                        '<span>' + // needed for matchCellWidths
                        core.htmlEscape(_this.opt('weekLabel')) +
                        '</span>' +
                        '</th>';
                }
                return '';
            };
            /* Day Grid Rendering
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
                var dateEnv = _this.dateEnv;
                var weekStart = dayGrid.props.cells[row][0].date;
                if (_this.colWeekNumbersVisible) {
                    return '' +
                        '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                        core.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                        _this, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1) // inner HTML
                        ) +
                        '</td>';
                }
                return '';
            };
            _this.renderDayGridBgIntroHtml = function () {
                var theme = _this.theme;
                if (_this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            _this.renderDayGridIntroHtml = function () {
                if (_this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            _this.el.classList.add('fc-dayGrid-view');
            _this.el.innerHTML = _this.renderSkeletonHtml();
            _this.scroller = new core.ScrollComponent('hidden', // overflow x
            'auto' // overflow y
            );
            var dayGridContainerEl = _this.scroller.el;
            _this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
            dayGridContainerEl.classList.add('fc-day-grid-container');
            var dayGridEl = core.createElement('div', { className: 'fc-day-grid' });
            dayGridContainerEl.appendChild(dayGridEl);
            var cellWeekNumbersVisible;
            if (_this.opt('weekNumbers')) {
                if (_this.opt('weekNumbersWithinDays')) {
                    cellWeekNumbersVisible = true;
                    _this.colWeekNumbersVisible = false;
                }
                else {
                    cellWeekNumbersVisible = false;
                    _this.colWeekNumbersVisible = true;
                }
            }
            else {
                _this.colWeekNumbersVisible = false;
                cellWeekNumbersVisible = false;
            }
            _this.dayGrid = new DayGrid(_this.context, dayGridEl, {
                renderNumberIntroHtml: _this.renderDayGridNumberIntroHtml,
                renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
                renderIntroHtml: _this.renderDayGridIntroHtml,
                colWeekNumbersVisible: _this.colWeekNumbersVisible,
                cellWeekNumbersVisible: cellWeekNumbersVisible
            });
            return _this;
        }
        DayGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.dayGrid.destroy();
            this.scroller.destroy();
        };
        DayGridView.prototype.renderSkeletonHtml = function () {
            var theme = this.theme;
            return '' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                (this.opt('columnHeader') ?
                    '<thead class="fc-head">' +
                        '<tr>' +
                        '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                        '</tr>' +
                        '</thead>' :
                    '') +
                '<tbody class="fc-body">' +
                '<tr>' +
                '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
        };
        DayGridView.prototype.weekNumberStyleAttr = function () {
            if (this.weekNumberWidth != null) {
                return 'style="width:' + this.weekNumberWidth + 'px"';
            }
            return '';
        };
        DayGridView.prototype.hasRigidRows = function () {
            var eventLimit = this.opt('eventLimit');
            return eventLimit && typeof eventLimit !== 'number';
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        DayGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
            this.dayGrid.updateSize(isResize);
        };
        DayGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
            var dayGrid = this.dayGrid;
            var eventLimit = this.opt('eventLimit');
            var headRowEl = this.header ? this.header.el : null; // HACK
            var scrollerHeight;
            var scrollbarWidths;
            if (!dayGrid.rowEls) {
                if (!isAuto) {
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                return;
            }
            if (this.colWeekNumbersVisible) {
                this.weekNumberWidth = core.matchCellWidths(core.findElements(this.el, '.fc-week-number'));
            }
            this.scroller.clear();
            if (headRowEl) {
                core.uncompensateScroll(headRowEl);
            }
            dayGrid.removeSegPopover(); // kill the "more" popover if displayed
            if (eventLimit && typeof eventLimit === 'number') {
                dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
            }
            scrollerHeight = this.computeScrollerHeight(viewHeight);
            this.setGridHeight(scrollerHeight, isAuto);
            if (eventLimit && typeof eventLimit !== 'number') {
                dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
            }
            if (!isAuto) { // should we force dimensions of the scroll container?
                this.scroller.setHeight(scrollerHeight);
                scrollbarWidths = this.scroller.getScrollbarWidths();
                if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                    if (headRowEl) {
                        core.compensateScroll(headRowEl, scrollbarWidths);
                    }
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                this.scroller.lockOverflow(scrollbarWidths);
            }
        };
        DayGridView.prototype.computeScrollerHeight = function (viewHeight) {
            return viewHeight -
                core.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
        };
        DayGridView.prototype.setGridHeight = function (height, isAuto) {
            if (this.opt('monthMode')) {
                if (isAuto) {
                    height *= this.dayGrid.rowCnt / 6;
                }
                core.distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
            }
            else {
                if (isAuto) {
                    core.undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
                }
                else {
                    core.distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
                }
            }
        };
        /* Scroll
        ------------------------------------------------------------------------------------------------------------------*/
        DayGridView.prototype.computeDateScroll = function (duration) {
            return { top: 0 };
        };
        DayGridView.prototype.queryDateScroll = function () {
            return { top: this.scroller.getScrollTop() };
        };
        DayGridView.prototype.applyDateScroll = function (scroll) {
            if (scroll.top !== undefined) {
                this.scroller.setScrollTop(scroll.top);
            }
        };
        return DayGridView;
    }(core.View));
    DayGridView.prototype.dateProfileGeneratorClass = DayGridDateProfileGenerator;
    var SimpleDayGrid = /** @class */ (function (_super) {
        __extends(SimpleDayGrid, _super);
        function SimpleDayGrid(context, dayGrid) {
            var _this = _super.call(this, context, dayGrid.el) || this;
            _this.slicer = new DayGridSlicer();
            _this.dayGrid = dayGrid;
            context.calendar.registerInteractiveComponent(_this, { el: _this.dayGrid.el });
            return _this;
        }
        SimpleDayGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.calendar.unregisterInteractiveComponent(this);
        };
        SimpleDayGrid.prototype.render = function (props) {
            var dayGrid = this.dayGrid;
            var dateProfile = props.dateProfile, dayTable = props.dayTable;
            dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }));
        };
        SimpleDayGrid.prototype.buildPositionCaches = function () {
            this.dayGrid.buildPositionCaches();
        };
        SimpleDayGrid.prototype.queryHit = function (positionLeft, positionTop) {
            var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
            if (rawHit) {
                return {
                    component: this.dayGrid,
                    dateSpan: rawHit.dateSpan,
                    dayEl: rawHit.dayEl,
                    rect: {
                        left: rawHit.relativeRect.left,
                        right: rawHit.relativeRect.right,
                        top: rawHit.relativeRect.top,
                        bottom: rawHit.relativeRect.bottom
                    },
                    layer: 0
                };
            }
        };
        return SimpleDayGrid;
    }(core.DateComponent));
    var DayGridSlicer = /** @class */ (function (_super) {
        __extends(DayGridSlicer, _super);
        function DayGridSlicer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
            return dayTable.sliceRange(dateRange);
        };
        return DayGridSlicer;
    }(core.Slicer));
    var DayGridView$1 = /** @class */ (function (_super) {
        __extends(DayGridView, _super);
        function DayGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
            _this.buildDayTable = core.memoize(buildDayTable);
            if (_this.opt('columnHeader')) {
                _this.header = new core.DayHeader(_this.context, _this.el.querySelector('.fc-head-container'));
            }
            _this.simpleDayGrid = new SimpleDayGrid(_this.context, _this.dayGrid);
            return _this;
        }
        DayGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.header) {
                this.header.destroy();
            }
            this.simpleDayGrid.destroy();
        };
        DayGridView.prototype.render = function (props) {
            _super.prototype.render.call(this, props);
            var dateProfile = this.props.dateProfile;
            var dayTable = this.dayTable =
                this.buildDayTable(dateProfile, this.dateProfileGenerator);
            if (this.header) {
                this.header.receiveProps({
                    dateProfile: dateProfile,
                    dates: dayTable.headerDates,
                    datesRepDistinctDays: dayTable.rowCnt === 1,
                    renderIntroHtml: this.renderHeadIntroHtml
                });
            }
            this.simpleDayGrid.receiveProps({
                dateProfile: dateProfile,
                dayTable: dayTable,
                businessHours: props.businessHours,
                dateSelection: props.dateSelection,
                eventStore: props.eventStore,
                eventUiBases: props.eventUiBases,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                isRigid: this.hasRigidRows(),
                nextDayThreshold: this.nextDayThreshold
            });
        };
        return DayGridView;
    }(DayGridView));
    function buildDayTable(dateProfile, dateProfileGenerator) {
        var daySeries = new core.DaySeries(dateProfile.renderRange, dateProfileGenerator);
        return new core.DayTable(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
    }
    var main = core.createPlugin({
        defaultView: 'dayGridMonth',
        views: {
            dayGrid: DayGridView$1,
            dayGridDay: {
                type: 'dayGrid',
                duration: { days: 1 }
            },
            dayGridWeek: {
                type: 'dayGrid',
                duration: { weeks: 1 }
            },
            dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
                monthMode: true,
                fixedWeekCount: true
            }
        }
    });
    exports.AbstractDayGridView = DayGridView;
    exports.DayBgRow = DayBgRow;
    exports.DayGrid = DayGrid;
    exports.DayGridSlicer = DayGridSlicer;
    exports.DayGridView = DayGridView$1;
    exports.SimpleDayGrid = SimpleDayGrid;
    exports.buildBasicDayTable = buildDayTable;
    exports.default = main;
    Object.defineProperty(exports, '__esModule', { value: true });
}));
/*!
FullCalendar Time Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fullcalendar/core'), require('@fullcalendar/daygrid')) :
    typeof define === 'function' && define.amd ? define(['exports', '@fullcalendar/core', '@fullcalendar/daygrid'], factory) :
    (global = global || self, factory(global.FullCalendarTimeGrid = {}, global.FullCalendar, global.FullCalendarDayGrid));
}(this, function (exports, core, daygrid) { 'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /*
    Only handles foreground segs.
    Does not own rendering. Use for low-level util methods by TimeGrid.
    */
    var TimeGridEventRenderer = /** @class */ (function (_super) {
        __extends(TimeGridEventRenderer, _super);
        function TimeGridEventRenderer(timeGrid) {
            var _this = _super.call(this, timeGrid.context) || this;
            _this.timeGrid = timeGrid;
            _this.fullTimeFormat = core.createFormatter({
                hour: 'numeric',
                minute: '2-digit',
                separator: _this.context.options.defaultRangeSeparator
            });
            return _this;
        }
        TimeGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            var segsByCol = this.timeGrid.groupSegsByCol(segs);
            for (var col = 0; col < segsByCol.length; col++) {
                segsByCol[col] = this.sortEventSegs(segsByCol[col]);
            }
            this.segsByCol = segsByCol;
            this.timeGrid.attachSegsByCol(segsByCol, this.timeGrid.fgContainerEls);
        };
        TimeGridEventRenderer.prototype.detachSegs = function (segs) {
            segs.forEach(function (seg) {
                core.removeElement(seg.el);
            });
            this.segsByCol = null;
        };
        TimeGridEventRenderer.prototype.computeSegSizes = function (allSegs) {
            var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
            var colCnt = timeGrid.colCnt;
            timeGrid.computeSegVerticals(allSegs); // horizontals relies on this
            if (segsByCol) {
                for (var col = 0; col < colCnt; col++) {
                    this.computeSegHorizontals(segsByCol[col]); // compute horizontal coordinates, z-index's, and reorder the array
                }
            }
        };
        TimeGridEventRenderer.prototype.assignSegSizes = function (allSegs) {
            var _a = this, timeGrid = _a.timeGrid, segsByCol = _a.segsByCol;
            var colCnt = timeGrid.colCnt;
            timeGrid.assignSegVerticals(allSegs); // horizontals relies on this
            if (segsByCol) {
                for (var col = 0; col < colCnt; col++) {
                    this.assignSegCss(segsByCol[col]);
                }
            }
        };
        TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                meridiem: false
            };
        };
        TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return true;
        };
        TimeGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
            var view = this.context.view;
            var eventRange = seg.eventRange;
            var eventDef = eventRange.def;
            var eventUi = eventRange.ui;
            var allDay = eventDef.allDay;
            var isDraggable = view.computeEventDraggable(eventDef, eventUi);
            var isResizableFromStart = seg.isStart && view.computeEventStartResizable(eventDef, eventUi);
            var isResizableFromEnd = seg.isEnd && view.computeEventEndResizable(eventDef, eventUi);
            var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
            var skinCss = core.cssToStr(this.getSkinCss(eventUi));
            var timeText;
            var fullTimeText; // more verbose time text. for the print stylesheet
            var startTimeText; // just the start time text
            classes.unshift('fc-time-grid-event');
            if (core.isMultiDayRange(eventRange.range)) {
                if (seg.isStart || seg.isEnd) {
                    var unzonedStart = seg.start;
                    var unzonedEnd = seg.end;
                    timeText = this._getTimeText(unzonedStart, unzonedEnd, allDay); // TODO: give the timezones
                    fullTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, this.fullTimeFormat);
                    startTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, null, false); // displayEnd=false
                }
            }
            else {
                timeText = this.getTimeText(eventRange);
                fullTimeText = this.getTimeText(eventRange, this.fullTimeFormat);
                startTimeText = this.getTimeText(eventRange, null, false); // displayEnd=false
            }
            return '<a class="' + classes.join(' ') + '"' +
                (eventDef.url ?
                    ' href="' + core.htmlEscape(eventDef.url) + '"' :
                    '') +
                (skinCss ?
                    ' style="' + skinCss + '"' :
                    '') +
                '>' +
                '<div class="fc-content">' +
                (timeText ?
                    '<div class="fc-time"' +
                        ' data-start="' + core.htmlEscape(startTimeText) + '"' +
                        ' data-full="' + core.htmlEscape(fullTimeText) + '"' +
                        '>' +
                        '<span>' + core.htmlEscape(timeText) + '</span>' +
                        '</div>' :
                    '') +
                (eventDef.title ?
                    '<div class="fc-title">' +
                        core.htmlEscape(eventDef.title) +
                        '</div>' :
                    '') +
                '</div>' +
                /* TODO: write CSS for this
                (isResizableFromStart ?
                  '<div class="fc-resizer fc-start-resizer"></div>' :
                  ''
                  ) +
                */
                (isResizableFromEnd ?
                    '<div class="fc-resizer fc-end-resizer"></div>' :
                    '') +
                '</a>';
        };
        TimeGridEventRenderer.prototype.computeSegHorizontals = function (segs) {
            var levels;
            var level0;
            var i;
            levels = buildSlotSegLevels(segs);
            computeForwardSlotSegs(levels);
            if ((level0 = levels[0])) {
                for (i = 0; i < level0.length; i++) {
                    computeSlotSegPressures(level0[i]);
                }
                for (i = 0; i < level0.length; i++) {
                    this.computeSegForwardBack(level0[i], 0, 0);
                }
            }
        };
        TimeGridEventRenderer.prototype.computeSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
            var forwardSegs = seg.forwardSegs;
            var i;
            if (seg.forwardCoord === undefined) { // not already computed
                if (!forwardSegs.length) {
                    seg.forwardCoord = 1;
                }
                else {
                    this.sortForwardSegs(forwardSegs);
                    this.computeSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
                    seg.forwardCoord = forwardSegs[0].backwardCoord;
                }
                seg.backwardCoord = seg.forwardCoord -
                    (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                        (seriesBackwardPressure + 1); // # of segments in the series
                for (i = 0; i < forwardSegs.length; i++) {
                    this.computeSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
                }
            }
        };
        TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
            var objs = forwardSegs.map(buildTimeGridSegCompareObj);
            var specs = [
                { field: 'forwardPressure', order: -1 },
                { field: 'backwardCoord', order: 1 }
            ].concat(this.context.view.eventOrderSpecs);
            objs.sort(function (obj0, obj1) {
                return core.compareByFieldSpecs(obj0, obj1, specs);
            });
            return objs.map(function (c) {
                return c._seg;
            });
        };
        TimeGridEventRenderer.prototype.assignSegCss = function (segs) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                core.applyStyle(seg.el, this.generateSegCss(seg));
                if (seg.level > 0) {
                    seg.el.classList.add('fc-time-grid-event-inset');
                }
                if (seg.eventRange.def.title && seg.bottom - seg.top < 30) {
                    seg.el.classList.add('fc-short'); // TODO: "condensed" is a better name
                }
            }
        };
        TimeGridEventRenderer.prototype.generateSegCss = function (seg) {
            var shouldOverlap = this.context.options.slotEventOverlap;
            var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
            var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
            var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
            var isRtl = this.timeGrid.isRtl;
            var left; // amount of space from left edge, a fraction of the total width
            var right; // amount of space from right edge, a fraction of the total width
            if (shouldOverlap) {
                forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
            }
            if (isRtl) {
                left = 1 - forwardCoord;
                right = backwardCoord;
            }
            else {
                left = backwardCoord;
                right = 1 - forwardCoord;
            }
            props.zIndex = seg.level + 1; // convert from 0-base to 1-based
            props.left = left * 100 + '%';
            props.right = right * 100 + '%';
            if (shouldOverlap && seg.forwardPressure) {
                props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
            }
            return props;
        };
        return TimeGridEventRenderer;
    }(core.FgEventRenderer));
    function buildSlotSegLevels(segs) {
        var levels = [];
        var i;
        var seg;
        var j;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            for (j = 0; j < levels.length; j++) {
                if (!computeSlotSegCollisions(seg, levels[j]).length) {
                    break;
                }
            }
            seg.level = j;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        return levels;
    }
    function computeForwardSlotSegs(levels) {
        var i;
        var level;
        var j;
        var seg;
        var k;
        for (i = 0; i < levels.length; i++) {
            level = levels[i];
            for (j = 0; j < level.length; j++) {
                seg = level[j];
                seg.forwardSegs = [];
                for (k = i + 1; k < levels.length; k++) {
                    computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
                }
            }
        }
    }
    function computeSlotSegPressures(seg) {
        var forwardSegs = seg.forwardSegs;
        var forwardPressure = 0;
        var i;
        var forwardSeg;
        if (seg.forwardPressure === undefined) { // not already computed
            for (i = 0; i < forwardSegs.length; i++) {
                forwardSeg = forwardSegs[i];
                computeSlotSegPressures(forwardSeg);
                forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
            }
            seg.forwardPressure = forwardPressure;
        }
    }
    function computeSlotSegCollisions(seg, otherSegs, results) {
        if (results === void 0) { results = []; }
        for (var i = 0; i < otherSegs.length; i++) {
            if (isSlotSegCollision(seg, otherSegs[i])) {
                results.push(otherSegs[i]);
            }
        }
        return results;
    }
    function isSlotSegCollision(seg1, seg2) {
        return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
    }
    function buildTimeGridSegCompareObj(seg) {
        var obj = core.buildSegCompareObj(seg);
        obj.forwardPressure = seg.forwardPressure;
        obj.backwardCoord = seg.backwardCoord;
        return obj;
    }
    var TimeGridMirrorRenderer = /** @class */ (function (_super) {
        __extends(TimeGridMirrorRenderer, _super);
        function TimeGridMirrorRenderer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
            this.segsByCol = this.timeGrid.groupSegsByCol(segs);
            this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls);
            this.sourceSeg = mirrorInfo.sourceSeg;
        };
        TimeGridMirrorRenderer.prototype.generateSegCss = function (seg) {
            var props = _super.prototype.generateSegCss.call(this, seg);
            var sourceSeg = this.sourceSeg;
            if (sourceSeg && sourceSeg.col === seg.col) {
                var sourceSegProps = _super.prototype.generateSegCss.call(this, sourceSeg);
                props.left = sourceSegProps.left;
                props.right = sourceSegProps.right;
                props.marginLeft = sourceSegProps.marginLeft;
                props.marginRight = sourceSegProps.marginRight;
            }
            return props;
        };
        return TimeGridMirrorRenderer;
    }(TimeGridEventRenderer));
    var TimeGridFillRenderer = /** @class */ (function (_super) {
        __extends(TimeGridFillRenderer, _super);
        function TimeGridFillRenderer(timeGrid) {
            var _this = _super.call(this, timeGrid.context) || this;
            _this.timeGrid = timeGrid;
            return _this;
        }
        TimeGridFillRenderer.prototype.attachSegs = function (type, segs) {
            var timeGrid = this.timeGrid;
            var containerEls;
            if (type === 'bgEvent') {
                containerEls = timeGrid.bgContainerEls;
            }
            else if (type === 'businessHours') {
                containerEls = timeGrid.businessContainerEls;
            }
            else if (type === 'highlight') {
                containerEls = timeGrid.highlightContainerEls;
            }
            timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
            return segs.map(function (seg) {
                return seg.el;
            });
        };
        TimeGridFillRenderer.prototype.computeSegSizes = function (segs) {
            this.timeGrid.computeSegVerticals(segs);
        };
        TimeGridFillRenderer.prototype.assignSegSizes = function (segs) {
            this.timeGrid.assignSegVerticals(segs);
        };
        return TimeGridFillRenderer;
    }(core.FillRenderer));
    /* A component that renders one or more columns of vertical time slots
    ----------------------------------------------------------------------------------------------------------------------*/
    var AGENDA_STOCK_SUB_DURATIONS = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 }
    ];
    var TimeGrid = /** @class */ (function (_super) {
        __extends(TimeGrid, _super);
        function TimeGrid(context, el, renderProps) {
            var _this = _super.call(this, context, el) || this;
            _this.isSlatSizesDirty = false;
            _this.isColSizesDirty = false;
            _this.renderSlats = core.memoizeRendering(_this._renderSlats);
            var eventRenderer = _this.eventRenderer = new TimeGridEventRenderer(_this);
            var fillRenderer = _this.fillRenderer = new TimeGridFillRenderer(_this);
            _this.mirrorRenderer = new TimeGridMirrorRenderer(_this);
            var renderColumns = _this.renderColumns = core.memoizeRendering(_this._renderColumns, _this._unrenderColumns);
            _this.renderBusinessHours = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderColumns]);
            _this.renderDateSelection = core.memoizeRendering(_this._renderDateSelection, _this._unrenderDateSelection, [renderColumns]);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderColumns]);
            _this.renderBgEvents = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderColumns]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(_this._renderEventDrag, _this._unrenderEventDrag, [renderColumns]);
            _this.renderEventResize = core.memoizeRendering(_this._renderEventResize, _this._unrenderEventResize, [renderColumns]);
            _this.processOptions();
            el.innerHTML =
                '<div class="fc-bg"></div>' +
                    '<div class="fc-slats"></div>' +
                    '<hr class="fc-divider ' + _this.theme.getClass('widgetHeader') + '" style="display:none" />';
            _this.rootBgContainerEl = el.querySelector('.fc-bg');
            _this.slatContainerEl = el.querySelector('.fc-slats');
            _this.bottomRuleEl = el.querySelector('.fc-divider');
            _this.renderProps = renderProps;
            return _this;
        }
        /* Options
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.processOptions = function () {
            var slotDuration = this.opt('slotDuration');
            var snapDuration = this.opt('snapDuration');
            var snapsPerSlot;
            var input;
            slotDuration = core.createDuration(slotDuration);
            snapDuration = snapDuration ? core.createDuration(snapDuration) : slotDuration;
            snapsPerSlot = core.wholeDivideDurations(slotDuration, snapDuration);
            if (snapsPerSlot === null) {
                snapDuration = slotDuration;
                snapsPerSlot = 1;
            }
            this.slotDuration = slotDuration;
            this.snapDuration = snapDuration;
            this.snapsPerSlot = snapsPerSlot;
            input = this.opt('slotLabelFormat');
            if (Array.isArray(input)) {
                input = input[input.length - 1];
            }
            this.labelFormat = core.createFormatter(input || {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short'
            });
            input = this.opt('slotLabelInterval');
            this.labelInterval = input ?
                core.createDuration(input) :
                this.computeLabelInterval(slotDuration);
        };
        TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
            var i;
            var labelInterval;
            var slotsPerLabel;
            for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
                labelInterval = core.createDuration(AGENDA_STOCK_SUB_DURATIONS[i]);
                slotsPerLabel = core.wholeDivideDurations(labelInterval, slotDuration);
                if (slotsPerLabel !== null && slotsPerLabel > 1) {
                    return labelInterval;
                }
            }
            return slotDuration; // fall back
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.render = function (props) {
            var cells = props.cells;
            this.colCnt = cells.length;
            this.renderSlats(props.dateProfile);
            this.renderColumns(props.cells, props.dateProfile);
            this.renderBusinessHours(props.businessHourSegs);
            this.renderDateSelection(props.dateSelectionSegs);
            this.renderFgEvents(props.fgEventSegs);
            this.renderBgEvents(props.bgEventSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDrag);
            this.renderEventResize(props.eventResize);
        };
        TimeGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderSlats.unrender();
            this.renderColumns.unrender();
        };
        TimeGrid.prototype.updateSize = function (isResize) {
            var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
            if (isResize || this.isSlatSizesDirty) {
                this.buildSlatPositions();
                this.isSlatSizesDirty = false;
            }
            if (isResize || this.isColSizesDirty) {
                this.buildColPositions();
                this.isColSizesDirty = false;
            }
            fillRenderer.computeSizes(isResize);
            eventRenderer.computeSizes(isResize);
            mirrorRenderer.computeSizes(isResize);
            fillRenderer.assignSizes(isResize);
            eventRenderer.assignSizes(isResize);
            mirrorRenderer.assignSizes(isResize);
        };
        TimeGrid.prototype._renderSlats = function (dateProfile) {
            var theme = this.theme;
            this.slatContainerEl.innerHTML =
                '<table class="' + theme.getClass('tableGrid') + '">' +
                    this.renderSlatRowHtml(dateProfile) +
                    '</table>';
            this.slatEls = core.findElements(this.slatContainerEl, 'tr');
            this.slatPositions = new core.PositionCache(this.el, this.slatEls, false, true // vertical
            );
            this.isSlatSizesDirty = true;
        };
        TimeGrid.prototype.renderSlatRowHtml = function (dateProfile) {
            var _a = this, dateEnv = _a.dateEnv, theme = _a.theme, isRtl = _a.isRtl;
            var html = '';
            var dayStart = core.startOfDay(dateProfile.renderRange.start);
            var slotTime = dateProfile.minTime;
            var slotIterator = core.createDuration(0);
            var slotDate; // will be on the view's first day, but we only care about its time
            var isLabeled;
            var axisHtml;
            while (core.asRoughMs(slotTime) < core.asRoughMs(dateProfile.maxTime)) {
                slotDate = dateEnv.add(dayStart, slotTime);
                isLabeled = core.wholeDivideDurations(slotIterator, this.labelInterval) !== null;
                axisHtml =
                    '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '">' +
                        (isLabeled ?
                            '<span>' + // for matchCellWidths
                                core.htmlEscape(dateEnv.format(slotDate, this.labelFormat)) +
                                '</span>' :
                            '') +
                        '</td>';
                html +=
                    '<tr data-time="' + core.formatIsoTimeString(slotDate) + '"' +
                        (isLabeled ? '' : ' class="fc-minor"') +
                        '>' +
                        (!isRtl ? axisHtml : '') +
                        '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                        (isRtl ? axisHtml : '') +
                        '</tr>';
                slotTime = core.addDurations(slotTime, this.slotDuration);
                slotIterator = core.addDurations(slotIterator, this.slotDuration);
            }
            return html;
        };
        TimeGrid.prototype._renderColumns = function (cells, dateProfile) {
            var _a = this, theme = _a.theme, dateEnv = _a.dateEnv, view = _a.view;
            var bgRow = new daygrid.DayBgRow(this.context);
            this.rootBgContainerEl.innerHTML =
                '<table class="' + theme.getClass('tableGrid') + '">' +
                    bgRow.renderHtml({
                        cells: cells,
                        dateProfile: dateProfile,
                        renderIntroHtml: this.renderProps.renderBgIntroHtml
                    }) +
                    '</table>';
            this.colEls = core.findElements(this.el, '.fc-day, .fc-disabled-day');
            for (var col = 0; col < this.colCnt; col++) {
                this.publiclyTrigger('dayRender', [
                    {
                        date: dateEnv.toDate(cells[col].date),
                        el: this.colEls[col],
                        view: view
                    }
                ]);
            }
            if (this.isRtl) {
                this.colEls.reverse();
            }
            this.colPositions = new core.PositionCache(this.el, this.colEls, true, // horizontal
            false);
            this.renderContentSkeleton();
            this.isColSizesDirty = true;
        };
        TimeGrid.prototype._unrenderColumns = function () {
            this.unrenderContentSkeleton();
        };
        /* Content Skeleton
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.renderContentSkeleton = function () {
            var parts = [];
            var skeletonEl;
            parts.push(this.renderProps.renderIntroHtml());
            for (var i = 0; i < this.colCnt; i++) {
                parts.push('<td>' +
                    '<div class="fc-content-col">' +
                    '<div class="fc-event-container fc-mirror-container"></div>' +
                    '<div class="fc-event-container"></div>' +
                    '<div class="fc-highlight-container"></div>' +
                    '<div class="fc-bgevent-container"></div>' +
                    '<div class="fc-business-container"></div>' +
                    '</div>' +
                    '</td>');
            }
            if (this.isRtl) {
                parts.reverse();
            }
            skeletonEl = this.contentSkeletonEl = core.htmlToElement('<div class="fc-content-skeleton">' +
                '<table>' +
                '<tr>' + parts.join('') + '</tr>' +
                '</table>' +
                '</div>');
            this.colContainerEls = core.findElements(skeletonEl, '.fc-content-col');
            this.mirrorContainerEls = core.findElements(skeletonEl, '.fc-mirror-container');
            this.fgContainerEls = core.findElements(skeletonEl, '.fc-event-container:not(.fc-mirror-container)');
            this.bgContainerEls = core.findElements(skeletonEl, '.fc-bgevent-container');
            this.highlightContainerEls = core.findElements(skeletonEl, '.fc-highlight-container');
            this.businessContainerEls = core.findElements(skeletonEl, '.fc-business-container');
            if (this.isRtl) {
                this.colContainerEls.reverse();
                this.mirrorContainerEls.reverse();
                this.fgContainerEls.reverse();
                this.bgContainerEls.reverse();
                this.highlightContainerEls.reverse();
                this.businessContainerEls.reverse();
            }
            this.el.appendChild(skeletonEl);
        };
        TimeGrid.prototype.unrenderContentSkeleton = function () {
            core.removeElement(this.contentSkeletonEl);
        };
        TimeGrid.prototype.groupSegsByCol = function (segs) {
            var segsByCol = [];
            var i;
            for (i = 0; i < this.colCnt; i++) {
                segsByCol.push([]);
            }
            for (i = 0; i < segs.length; i++) {
                segsByCol[segs[i].col].push(segs[i]);
            }
            return segsByCol;
        };
        TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
            var col;
            var segs;
            var i;
            for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
                segs = segsByCol[col];
                for (i = 0; i < segs.length; i++) {
                    containerEls[col].appendChild(segs[i].el);
                }
            }
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.getNowIndicatorUnit = function () {
            return 'minute'; // will refresh on the minute
        };
        TimeGrid.prototype.renderNowIndicator = function (segs, date) {
            if (!this.colContainerEls) {
                return;
            }
            var top = this.computeDateTop(date);
            var nodes = [];
            var i;
            for (i = 0; i < segs.length; i++) {
                var lineEl = core.createElement('div', { className: 'fc-now-indicator fc-now-indicator-line' });
                lineEl.style.top = top + 'px';
                this.colContainerEls[segs[i].col].appendChild(lineEl);
                nodes.push(lineEl);
            }
            if (segs.length > 0) { // is the current time in view?
                var arrowEl = core.createElement('div', { className: 'fc-now-indicator fc-now-indicator-arrow' });
                arrowEl.style.top = top + 'px';
                this.contentSkeletonEl.appendChild(arrowEl);
                nodes.push(arrowEl);
            }
            this.nowIndicatorEls = nodes;
        };
        TimeGrid.prototype.unrenderNowIndicator = function () {
            if (this.nowIndicatorEls) {
                this.nowIndicatorEls.forEach(core.removeElement);
                this.nowIndicatorEls = null;
            }
        };
        /* Coordinates
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.getTotalSlatHeight = function () {
            return this.slatContainerEl.getBoundingClientRect().height;
        };
        TimeGrid.prototype.computeDateTop = function (when, startOfDayDate) {
            if (!startOfDayDate) {
                startOfDayDate = core.startOfDay(when);
            }
            return this.computeTimeTop(core.createDuration(when.valueOf() - startOfDayDate.valueOf()));
        };
        TimeGrid.prototype.computeTimeTop = function (duration) {
            var len = this.slatEls.length;
            var dateProfile = this.props.dateProfile;
            var slatCoverage = (duration.milliseconds - core.asRoughMs(dateProfile.minTime)) / core.asRoughMs(this.slotDuration); // floating-point value of # of slots covered
            var slatIndex;
            var slatRemainder;
            slatCoverage = Math.max(0, slatCoverage);
            slatCoverage = Math.min(len, slatCoverage);
            slatIndex = Math.floor(slatCoverage);
            slatIndex = Math.min(slatIndex, len - 1);
            slatRemainder = slatCoverage - slatIndex;
            return this.slatPositions.tops[slatIndex] +
                this.slatPositions.getHeight(slatIndex) * slatRemainder;
        };
        TimeGrid.prototype.computeSegVerticals = function (segs) {
            var eventMinHeight = this.opt('timeGridEventMinHeight');
            var i;
            var seg;
            var dayDate;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                dayDate = this.props.cells[seg.col].date;
                seg.top = this.computeDateTop(seg.start, dayDate);
                seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.end, dayDate));
            }
        };
        TimeGrid.prototype.assignSegVerticals = function (segs) {
            var i;
            var seg;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                core.applyStyle(seg.el, this.generateSegVerticalCss(seg));
            }
        };
        TimeGrid.prototype.generateSegVerticalCss = function (seg) {
            return {
                top: seg.top,
                bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
            };
        };
        /* Sizing
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.buildPositionCaches = function () {
            this.buildColPositions();
            this.buildSlatPositions();
        };
        TimeGrid.prototype.buildColPositions = function () {
            this.colPositions.build();
        };
        TimeGrid.prototype.buildSlatPositions = function () {
            this.slatPositions.build();
        };
        /* Hit System
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.positionToHit = function (positionLeft, positionTop) {
            var _a = this, dateEnv = _a.dateEnv, snapsPerSlot = _a.snapsPerSlot, slatPositions = _a.slatPositions, colPositions = _a.colPositions;
            var colIndex = colPositions.leftToIndex(positionLeft);
            var slatIndex = slatPositions.topToIndex(positionTop);
            if (colIndex != null && slatIndex != null) {
                var slatTop = slatPositions.tops[slatIndex];
                var slatHeight = slatPositions.getHeight(slatIndex);
                var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
                var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                var dayDate = this.props.cells[colIndex].date;
                var time = core.addDurations(this.props.dateProfile.minTime, core.multiplyDuration(this.snapDuration, snapIndex));
                var start = dateEnv.add(dayDate, time);
                var end = dateEnv.add(start, this.snapDuration);
                return {
                    col: colIndex,
                    dateSpan: {
                        range: { start: start, end: end },
                        allDay: false
                    },
                    dayEl: this.colEls[colIndex],
                    relativeRect: {
                        left: colPositions.lefts[colIndex],
                        right: colPositions.rights[colIndex],
                        top: slatTop,
                        bottom: slatTop + slatHeight
                    }
                };
            }
        };
        /* Event Drag Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype._renderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                if (state.isEvent) {
                    this.mirrorRenderer.renderSegs(state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
                }
                else {
                    this.fillRenderer.renderSegs('highlight', state.segs);
                }
            }
        };
        TimeGrid.prototype._unrenderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.mirrorRenderer.unrender(state.segs, { isDragging: true, sourceSeg: state.sourceSeg });
                this.fillRenderer.unrender('highlight');
            }
        };
        /* Event Resize Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype._renderEventResize = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.mirrorRenderer.renderSegs(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        TimeGrid.prototype._unrenderEventResize = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.mirrorRenderer.unrender(state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
            }
        };
        /* Selection
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype._renderDateSelection = function (segs) {
            if (segs) {
                if (this.opt('selectMirror')) {
                    this.mirrorRenderer.renderSegs(segs, { isSelecting: true });
                }
                else {
                    this.fillRenderer.renderSegs('highlight', segs);
                }
            }
        };
        TimeGrid.prototype._unrenderDateSelection = function (segs) {
            this.mirrorRenderer.unrender(segs, { isSelecting: true });
            this.fillRenderer.unrender('highlight');
        };
        return TimeGrid;
    }(core.DateComponent));
    var AllDaySplitter = /** @class */ (function (_super) {
        __extends(AllDaySplitter, _super);
        function AllDaySplitter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AllDaySplitter.prototype.getKeyInfo = function () {
            return {
                allDay: {},
                timed: {}
            };
        };
        AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
            if (dateSpan.allDay) {
                return ['allDay'];
            }
            else {
                return ['timed'];
            }
        };
        AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
            if (!eventDef.allDay) {
                return ['timed'];
            }
            else if (core.hasBgRendering(eventDef)) {
                return ['timed', 'allDay'];
            }
            else {
                return ['allDay'];
            }
        };
        return AllDaySplitter;
    }(core.Splitter));
    var TIMEGRID_ALL_DAY_EVENT_LIMIT = 5;
    var WEEK_HEADER_FORMAT = core.createFormatter({ week: 'short' });
    /* An abstract class for all timegrid-related views. Displays one more columns with time slots running vertically.
    ----------------------------------------------------------------------------------------------------------------------*/
    var TimeGridView = /** @class */ (function (_super) {
        __extends(TimeGridView, _super);
        function TimeGridView(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
            _this.splitter = new AllDaySplitter();
            /* Header Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderHeadIntroHtml = function () {
                var _a = _this, theme = _a.theme, dateEnv = _a.dateEnv;
                var range = _this.props.dateProfile.renderRange;
                var dayCnt = core.diffDays(range.start, range.end);
                var weekText;
                if (_this.opt('weekNumbers')) {
                    weekText = dateEnv.format(range.start, WEEK_HEADER_FORMAT);
                    return '' +
                        '<th class="fc-axis fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '>' +
                        core.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                        _this, { date: range.start, type: 'week', forceOff: dayCnt > 1 }, core.htmlEscape(weekText) // inner HTML
                        ) +
                        '</th>';
                }
                else {
                    return '<th class="fc-axis ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '></th>';
                }
            };
            /* Time Grid Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderTimeGridBgIntroHtml = function () {
                var theme = _this.theme;
                return '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '></td>';
            };
            _this.renderTimeGridIntroHtml = function () {
                return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
            };
            /* Day Grid Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            _this.renderDayGridBgIntroHtml = function () {
                var theme = _this.theme;
                return '' +
                    '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    core.getAllDayHtml(_this) +
                    '</span>' +
                    '</td>';
            };
            _this.renderDayGridIntroHtml = function () {
                return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
            };
            _this.el.classList.add('fc-timeGrid-view');
            _this.el.innerHTML = _this.renderSkeletonHtml();
            _this.scroller = new core.ScrollComponent('hidden', // overflow x
            'auto' // overflow y
            );
            var timeGridWrapEl = _this.scroller.el;
            _this.el.querySelector('.fc-body > tr > td').appendChild(timeGridWrapEl);
            timeGridWrapEl.classList.add('fc-time-grid-container');
            var timeGridEl = core.createElement('div', { className: 'fc-time-grid' });
            timeGridWrapEl.appendChild(timeGridEl);
            _this.timeGrid = new TimeGrid(_this.context, timeGridEl, {
                renderBgIntroHtml: _this.renderTimeGridBgIntroHtml,
                renderIntroHtml: _this.renderTimeGridIntroHtml
            });
            if (_this.opt('allDaySlot')) { // should we display the "all-day" area?
                _this.dayGrid = new daygrid.DayGrid(// the all-day subcomponent of this view
                _this.context, _this.el.querySelector('.fc-day-grid'), {
                    renderNumberIntroHtml: _this.renderDayGridIntroHtml,
                    renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
                    renderIntroHtml: _this.renderDayGridIntroHtml,
                    colWeekNumbersVisible: false,
                    cellWeekNumbersVisible: false
                });
                var dividerEl = _this.el.querySelector('.fc-divider');
                _this.dayGrid.bottomCoordPadding = dividerEl.getBoundingClientRect().height;
            }
            return _this;
        }
        TimeGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.timeGrid.destroy();
            if (this.dayGrid) {
                this.dayGrid.destroy();
            }
            this.scroller.destroy();
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.renderSkeletonHtml = function () {
            var theme = this.theme;
            return '' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                (this.opt('columnHeader') ?
                    '<thead class="fc-head">' +
                        '<tr>' +
                        '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                        '</tr>' +
                        '</thead>' :
                    '') +
                '<tbody class="fc-body">' +
                '<tr>' +
                '<td class="' + theme.getClass('widgetContent') + '">' +
                (this.opt('allDaySlot') ?
                    '<div class="fc-day-grid"></div>' +
                        '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" />' :
                    '') +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.getNowIndicatorUnit = function () {
            return this.timeGrid.getNowIndicatorUnit();
        };
        TimeGridView.prototype.unrenderNowIndicator = function () {
            this.timeGrid.unrenderNowIndicator();
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first
            this.timeGrid.updateSize(isResize);
            if (this.dayGrid) {
                this.dayGrid.updateSize(isResize);
            }
        };
        TimeGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
            var _this = this;
            var eventLimit;
            var scrollerHeight;
            var scrollbarWidths;
            this.axisWidth = core.matchCellWidths(core.findElements(this.el, '.fc-axis'));
            if (!this.timeGrid.colEls) {
                if (!isAuto) {
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                return;
            }
            var noScrollRowEls = core.findElements(this.el, '.fc-row').filter(function (node) {
                return !_this.scroller.el.contains(node);
            });
            this.timeGrid.bottomRuleEl.style.display = 'none'; // will be shown later if this <hr> is necessary
            this.scroller.clear(); // sets height to 'auto' and clears overflow
            noScrollRowEls.forEach(core.uncompensateScroll);
            if (this.dayGrid) {
                this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
                eventLimit = this.opt('eventLimit');
                if (eventLimit && typeof eventLimit !== 'number') {
                    eventLimit = TIMEGRID_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
                }
                if (eventLimit) {
                    this.dayGrid.limitRows(eventLimit);
                }
            }
            if (!isAuto) { // should we force dimensions of the scroll container?
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
                scrollbarWidths = this.scroller.getScrollbarWidths();
                if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                    noScrollRowEls.forEach(function (rowEl) {
                        core.compensateScroll(rowEl, scrollbarWidths);
                    });
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                this.scroller.lockOverflow(scrollbarWidths);
                if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                    this.timeGrid.bottomRuleEl.style.display = '';
                }
            }
        };
        TimeGridView.prototype.computeScrollerHeight = function (viewHeight) {
            return viewHeight -
                core.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
        };
        /* Scroll
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.computeDateScroll = function (duration) {
            var top = this.timeGrid.computeTimeTop(duration);
            top = Math.ceil(top);
            if (top) {
                top++; // to overcome top border that slots beyond the first have. looks better
            }
            return { top: top };
        };
        TimeGridView.prototype.queryDateScroll = function () {
            return { top: this.scroller.getScrollTop() };
        };
        TimeGridView.prototype.applyDateScroll = function (scroll) {
            if (scroll.top !== undefined) {
                this.scroller.setScrollTop(scroll.top);
            }
        };
        TimeGridView.prototype.axisStyleAttr = function () {
            if (this.axisWidth != null) {
                return 'style="width:' + this.axisWidth + 'px"';
            }
            return '';
        };
        return TimeGridView;
    }(core.View));
    TimeGridView.prototype.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering
    var SimpleTimeGrid = /** @class */ (function (_super) {
        __extends(SimpleTimeGrid, _super);
        function SimpleTimeGrid(context, timeGrid) {
            var _this = _super.call(this, context, timeGrid.el) || this;
            _this.buildDayRanges = core.memoize(buildDayRanges);
            _this.slicer = new TimeGridSlicer();
            _this.timeGrid = timeGrid;
            context.calendar.registerInteractiveComponent(_this, {
                el: _this.timeGrid.el
            });
            return _this;
        }
        SimpleTimeGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.calendar.unregisterInteractiveComponent(this);
        };
        SimpleTimeGrid.prototype.render = function (props) {
            var dateProfile = props.dateProfile, dayTable = props.dayTable;
            var dayRanges = this.dayRanges = this.buildDayRanges(dayTable, dateProfile, this.dateEnv);
            this.timeGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, null, this.timeGrid, dayRanges), { dateProfile: dateProfile, cells: dayTable.cells[0] }));
        };
        SimpleTimeGrid.prototype.renderNowIndicator = function (date) {
            this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(date, this.timeGrid, this.dayRanges), date);
        };
        SimpleTimeGrid.prototype.buildPositionCaches = function () {
            this.timeGrid.buildPositionCaches();
        };
        SimpleTimeGrid.prototype.queryHit = function (positionLeft, positionTop) {
            var rawHit = this.timeGrid.positionToHit(positionLeft, positionTop);
            if (rawHit) {
                return {
                    component: this.timeGrid,
                    dateSpan: rawHit.dateSpan,
                    dayEl: rawHit.dayEl,
                    rect: {
                        left: rawHit.relativeRect.left,
                        right: rawHit.relativeRect.right,
                        top: rawHit.relativeRect.top,
                        bottom: rawHit.relativeRect.bottom
                    },
                    layer: 0
                };
            }
        };
        return SimpleTimeGrid;
    }(core.DateComponent));
    function buildDayRanges(dayTable, dateProfile, dateEnv) {
        var ranges = [];
        for (var _i = 0, _a = dayTable.headerDates; _i < _a.length; _i++) {
            var date = _a[_i];
            ranges.push({
                start: dateEnv.add(date, dateProfile.minTime),
                end: dateEnv.add(date, dateProfile.maxTime)
            });
        }
        return ranges;
    }
    var TimeGridSlicer = /** @class */ (function (_super) {
        __extends(TimeGridSlicer, _super);
        function TimeGridSlicer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeGridSlicer.prototype.sliceRange = function (range, dayRanges) {
            var segs = [];
            for (var col = 0; col < dayRanges.length; col++) {
                var segRange = core.intersectRanges(range, dayRanges[col]);
                if (segRange) {
                    segs.push({
                        start: segRange.start,
                        end: segRange.end,
                        isStart: segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: segRange.end.valueOf() === range.end.valueOf(),
                        col: col
                    });
                }
            }
            return segs;
        };
        return TimeGridSlicer;
    }(core.Slicer));
    var TimeGridView$1 = /** @class */ (function (_super) {
        __extends(TimeGridView, _super);
        function TimeGridView(_context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, _context, viewSpec, dateProfileGenerator, parentEl) || this;
            _this.buildDayTable = core.memoize(buildDayTable);
            if (_this.opt('columnHeader')) {
                _this.header = new core.DayHeader(_this.context, _this.el.querySelector('.fc-head-container'));
            }
            _this.simpleTimeGrid = new SimpleTimeGrid(_this.context, _this.timeGrid);
            if (_this.dayGrid) {
                _this.simpleDayGrid = new daygrid.SimpleDayGrid(_this.context, _this.dayGrid);
            }
            return _this;
        }
        TimeGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.header) {
                this.header.destroy();
            }
            this.simpleTimeGrid.destroy();
            if (this.simpleDayGrid) {
                this.simpleDayGrid.destroy();
            }
        };
        TimeGridView.prototype.render = function (props) {
            _super.prototype.render.call(this, props); // for flags for updateSize
            var dateProfile = this.props.dateProfile;
            var dayTable = this.buildDayTable(dateProfile, this.dateProfileGenerator);
            var splitProps = this.splitter.splitProps(props);
            if (this.header) {
                this.header.receiveProps({
                    dateProfile: dateProfile,
                    dates: dayTable.headerDates,
                    datesRepDistinctDays: true,
                    renderIntroHtml: this.renderHeadIntroHtml
                });
            }
            this.simpleTimeGrid.receiveProps(__assign({}, splitProps['timed'], { dateProfile: dateProfile,
                dayTable: dayTable }));
            if (this.simpleDayGrid) {
                this.simpleDayGrid.receiveProps(__assign({}, splitProps['allDay'], { dateProfile: dateProfile,
                    dayTable: dayTable, nextDayThreshold: this.nextDayThreshold, isRigid: false }));
            }
        };
        TimeGridView.prototype.renderNowIndicator = function (date) {
            this.simpleTimeGrid.renderNowIndicator(date);
        };
        return TimeGridView;
    }(TimeGridView));
    function buildDayTable(dateProfile, dateProfileGenerator) {
        var daySeries = new core.DaySeries(dateProfile.renderRange, dateProfileGenerator);
        return new core.DayTable(daySeries, false);
    }
    var main = core.createPlugin({
        defaultView: 'timeGridWeek',
        views: {
            timeGrid: {
                class: TimeGridView$1,
                allDaySlot: true,
                slotDuration: '00:30:00',
                slotEventOverlap: true // a bad name. confused with overlap/constraint system
            },
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 }
            },
            timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 }
            }
        }
    });
    exports.AbstractTimeGridView = TimeGridView;
    exports.TimeGrid = TimeGrid;
    exports.TimeGridSlicer = TimeGridSlicer;
    exports.TimeGridView = TimeGridView$1;
    exports.buildDayRanges = buildDayRanges;
    exports.buildDayTable = buildDayTable;
    exports.default = main;
    Object.defineProperty(exports, '__esModule', { value: true });
}));
/*!
FullCalendar List View Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fullcalendar/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@fullcalendar/core'], factory) :
    (global = global || self, factory(global.FullCalendarList = {}, global.FullCalendar));
}(this, function (exports, core) { 'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var ListEventRenderer = /** @class */ (function (_super) {
        __extends(ListEventRenderer, _super);
        function ListEventRenderer(listView) {
            var _this = _super.call(this, listView.context) || this;
            _this.listView = listView;
            return _this;
        }
        ListEventRenderer.prototype.attachSegs = function (segs) {
            if (!segs.length) {
                this.listView.renderEmptyMessage();
            }
            else {
                this.listView.renderSegList(segs);
            }
        };
        ListEventRenderer.prototype.detachSegs = function () {
        };
        ListEventRenderer.prototype.renderSegHtml = function (seg) {
            var _a = this.context, view = _a.view, theme = _a.theme;
            var eventRange = seg.eventRange;
            var eventDef = eventRange.def;
            var eventInstance = eventRange.instance;
            var eventUi = eventRange.ui;
            var url = eventDef.url;
            var classes = ['fc-list-item'].concat(eventUi.classNames);
            var bgColor = eventUi.backgroundColor;
            var timeHtml;
            if (eventDef.allDay) {
                timeHtml = core.getAllDayHtml(view);
            }
            else if (core.isMultiDayRange(eventRange.range)) {
                if (seg.isStart) {
                    timeHtml = core.htmlEscape(this._getTimeText(eventInstance.range.start, seg.end, false // allDay
                    ));
                }
                else if (seg.isEnd) {
                    timeHtml = core.htmlEscape(this._getTimeText(seg.start, eventInstance.range.end, false // allDay
                    ));
                }
                else { // inner segment that lasts the whole day
                    timeHtml = core.getAllDayHtml(view);
                }
            }
            else {
                timeHtml = core.htmlEscape(this.getTimeText(eventRange));
            }
            if (url) {
                classes.push('fc-has-url');
            }
            return '<tr class="' + classes.join(' ') + '">' +
                (this.displayEventTime ?
                    '<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
                        (timeHtml || '') +
                        '</td>' :
                    '') +
                '<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
                '<span class="fc-event-dot"' +
                (bgColor ?
                    ' style="background-color:' + bgColor + '"' :
                    '') +
                '></span>' +
                '</td>' +
                '<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
                '<a' + (url ? ' href="' + core.htmlEscape(url) + '"' : '') + '>' +
                core.htmlEscape(eventDef.title || '') +
                '</a>' +
                '</td>' +
                '</tr>';
        };
        ListEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                meridiem: 'short'
            };
        };
        return ListEventRenderer;
    }(core.FgEventRenderer));
    /*
    Responsible for the scroller, and forwarding event-related actions into the "grid".
    */
    var ListView = /** @class */ (function (_super) {
        __extends(ListView, _super);
        function ListView(context, viewSpec, dateProfileGenerator, parentEl) {
            var _this = _super.call(this, context, viewSpec, dateProfileGenerator, parentEl) || this;
            _this.computeDateVars = core.memoize(computeDateVars);
            _this.eventStoreToSegs = core.memoize(_this._eventStoreToSegs);
            var eventRenderer = _this.eventRenderer = new ListEventRenderer(_this);
            _this.renderContent = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer));
            _this.el.classList.add('fc-list-view');
            var listViewClassNames = (_this.theme.getClass('listView') || '').split(' '); // wish we didn't have to do this
            for (var _i = 0, listViewClassNames_1 = listViewClassNames; _i < listViewClassNames_1.length; _i++) {
                var listViewClassName = listViewClassNames_1[_i];
                if (listViewClassName) { // in case input was empty string
                    _this.el.classList.add(listViewClassName);
                }
            }
            _this.scroller = new core.ScrollComponent('hidden', // overflow x
            'auto' // overflow y
            );
            _this.el.appendChild(_this.scroller.el);
            _this.contentEl = _this.scroller.el; // shortcut
            context.calendar.registerInteractiveComponent(_this, {
                el: _this.el
            });
            return _this;
        }
        ListView.prototype.render = function (props) {
            var _a = this.computeDateVars(props.dateProfile), dayDates = _a.dayDates, dayRanges = _a.dayRanges;
            this.dayDates = dayDates;
            this.renderContent(this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges));
        };
        ListView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.renderContent.unrender();
            this.scroller.destroy(); // will remove the Grid too
            this.calendar.unregisterInteractiveComponent(this);
        };
        ListView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
            _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto);
            this.eventRenderer.computeSizes(isResize);
            this.eventRenderer.assignSizes(isResize);
            this.scroller.clear(); // sets height to 'auto' and clears overflow
            if (!isAuto) {
                this.scroller.setHeight(this.computeScrollerHeight(viewHeight));
            }
        };
        ListView.prototype.computeScrollerHeight = function (viewHeight) {
            return viewHeight -
                core.subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
        };
        ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
            return this.eventRangesToSegs(core.sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.nextDayThreshold).fg, dayRanges);
        };
        ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
            var segs = [];
            for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
                var eventRange = eventRanges_1[_i];
                segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
            }
            return segs;
        };
        ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
            var _a = this, dateEnv = _a.dateEnv, nextDayThreshold = _a.nextDayThreshold;
            var range = eventRange.range;
            var allDay = eventRange.def.allDay;
            var dayIndex;
            var segRange;
            var seg;
            var segs = [];
            for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
                segRange = core.intersectRanges(range, dayRanges[dayIndex]);
                if (segRange) {
                    seg = {
                        component: this,
                        eventRange: eventRange,
                        start: segRange.start,
                        end: segRange.end,
                        isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                        dayIndex: dayIndex
                    };
                    segs.push(seg);
                    if (!seg.isEnd && !allDay &&
                        dayIndex + 1 < dayRanges.length &&
                        range.end <
                            dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                        seg.end = range.end;
                        seg.isEnd = true;
                        break;
                    }
                }
            }
            return segs;
        };
        ListView.prototype.renderEmptyMessage = function () {
            this.contentEl.innerHTML =
                '<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
                    '<div class="fc-list-empty-wrap1">' +
                    '<div class="fc-list-empty">' +
                    core.htmlEscape(this.opt('noEventsMessage')) +
                    '</div>' +
                    '</div>' +
                    '</div>';
        };
        ListView.prototype.renderSegList = function (allSegs) {
            var segsByDay = this.groupSegsByDay(allSegs); // sparse array
            var dayIndex;
            var daySegs;
            var i;
            var tableEl = core.htmlToElement('<table class="fc-list-table ' + this.calendar.theme.getClass('tableList') + '"><tbody></tbody></table>');
            var tbodyEl = tableEl.querySelector('tbody');
            for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
                daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    tbodyEl.appendChild(this.buildDayHeaderRow(this.dayDates[dayIndex]));
                    daySegs = this.eventRenderer.sortEventSegs(daySegs);
                    for (i = 0; i < daySegs.length; i++) {
                        tbodyEl.appendChild(daySegs[i].el); // append event row
                    }
                }
            }
            this.contentEl.innerHTML = '';
            this.contentEl.appendChild(tableEl);
        };
        ListView.prototype.groupSegsByDay = function (segs) {
            var segsByDay = []; // sparse array
            var i;
            var seg;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
                    .push(seg);
            }
            return segsByDay;
        };
        ListView.prototype.buildDayHeaderRow = function (dayDate) {
            var dateEnv = this.dateEnv;
            var mainFormat = core.createFormatter(this.opt('listDayFormat')); // TODO: cache
            var altFormat = core.createFormatter(this.opt('listDayAltFormat')); // TODO: cache
            return core.createElement('tr', {
                className: 'fc-list-heading',
                'data-date': dateEnv.formatIso(dayDate, { omitTime: true })
            }, '<td class="' + (this.calendar.theme.getClass('tableListHeading') ||
                this.calendar.theme.getClass('widgetHeader')) + '" colspan="3">' +
                (mainFormat ?
                    core.buildGotoAnchorHtml(this, dayDate, { 'class': 'fc-list-heading-main' }, core.htmlEscape(dateEnv.format(dayDate, mainFormat)) // inner HTML
                    ) :
                    '') +
                (altFormat ?
                    core.buildGotoAnchorHtml(this, dayDate, { 'class': 'fc-list-heading-alt' }, core.htmlEscape(dateEnv.format(dayDate, altFormat)) // inner HTML
                    ) :
                    '') +
                '</td>');
        };
        return ListView;
    }(core.View));
    ListView.prototype.fgSegSelector = '.fc-list-item'; // which elements accept event actions
    function computeDateVars(dateProfile) {
        var dayStart = core.startOfDay(dateProfile.renderRange.start);
        var viewEnd = dateProfile.renderRange.end;
        var dayDates = [];
        var dayRanges = [];
        while (dayStart < viewEnd) {
            dayDates.push(dayStart);
            dayRanges.push({
                start: dayStart,
                end: core.addDays(dayStart, 1)
            });
            dayStart = core.addDays(dayStart, 1);
        }
        return { dayDates: dayDates, dayRanges: dayRanges };
    }
    var main = core.createPlugin({
        views: {
            list: {
                class: ListView,
                buttonTextKey: 'list',
                listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' } // like "January 1, 2016"
            },
            listDay: {
                type: 'list',
                duration: { days: 1 },
                listDayFormat: { weekday: 'long' } // day-of-week is all we need. full date is probably in header
            },
            listWeek: {
                type: 'list',
                duration: { weeks: 1 },
                listDayFormat: { weekday: 'long' },
                listDayAltFormat: { month: 'long', day: 'numeric', year: 'numeric' }
            },
            listMonth: {
                type: 'list',
                duration: { month: 1 },
                listDayAltFormat: { weekday: 'long' } // day-of-week is nice-to-have
            },
            listYear: {
                type: 'list',
                duration: { year: 1 },
                listDayAltFormat: { weekday: 'long' } // day-of-week is nice-to-have
            }
        }
    });
    exports.ListView = ListView;
    exports.default = main;
    Object.defineProperty(exports, '__esModule', { value: true });
}));
var EventCalendar=function(e,c){var t=FullCalendar.Calendar,a=c(".eael-event-calendar-cls",e),o=c(".eaelec-modal-close",e).eq(0),D=c("#eaelecModal",e),m=a.data("events"),n=a.data("first_day"),d=a.data("cal_id"),r=a.data("locale"),l=a.data("defaultview"),s=new t(document.getElementById("eael-event-calendar-"+d),{plugins:["dayGrid","timeGrid","list"],editable:!1,selectable:!1,draggable:!1,firstDay:n,eventTimeFormat:{hour:"2-digit",minute:"2-digit",meridiem:"short"},nextDayThreshold:"00:00:00",header:{left:"prev,next today",center:"title",right:"timeGridDay,timeGridWeek,dayGridMonth,listWeek"},allDayText:"All day",events:m,selectHelper:!0,locale:r,eventLimit:3,defaultView:l,eventRender:function(e){var t=c(e.el),i=e.event;void 0!==i.extendedProps.eventHasComplete&&"yes"===i.extendedProps.eventHasComplete&&(t.find("div.fc-content .fc-title").addClass("eael-event-completed"),t.find("td.fc-list-item-title").addClass("eael-event-completed")),t.attr("href","javascript:void(0);"),t.click(function(e){e.preventDefault(),e.stopPropagation();var t=i.start,a="h:mm A",o=i.end,m=c("span.eaelec-event-date-start"),n=c("span.eaelec-event-date-end");"yes"===i.allDay&&(o=moment(o).subtract(1,"days")._d,a=" ");var d=moment(t).format("YYYY"),r=moment(o).format("YYYY"),l=d<r,s="",Y="";m.html(" "),n.html(" "),D.addClass("eael-ec-popup-ready").removeClass("eael-ec-modal-removing"),"yes"===i.allDay&&moment(t).format("MM-DD-YYYY")===moment(o).format("MM-DD-YYYY")?(s=moment(t).format("MMM Do"),!0===moment(t).isSame(Date.now(),"day")?s="Today":moment(t).format("MM-DD-YYYY")===moment(new Date).add(1,"days").format("MM-DD-YYYY")&&(s="Tomorrow")):(!0===moment(i.start).isSame(Date.now(),"day")&&(s="Today "+moment(i.start).format(a)),moment(t).format("MM-DD-YYYY")===moment(new Date).add(1,"days").format("MM-DD-YYYY")&&(s="Tomorrow "+moment(i.start).format(a)),(moment(t).format("MM-DD-YYYY")<moment(new Date).format("MM-DD-YYYY")||moment(t).format("MM-DD-YYYY")>moment(new Date).add(1,"days").format("MM-DD-YYYY"))&&(s=moment(i.start).format("MMM Do "+a)),s=l?d+" "+s:s,!0===moment(o).isSame(Date.now(),"day")&&(Y=!0!==moment(t).isSame(Date.now(),"day")?" Today "+moment(o).format(a):moment(o).format(a)),moment(t).format("MM-DD-YYYY")!==moment(new Date).add(1,"days").format("MM-DD-YYYY")&&moment(o).format("MM-DD-YYYY")===moment(new Date).add(1,"days").format("MM-DD-YYYY")&&(Y="Tomorrow "+moment(o).format(a)),moment(t).format("MM-DD-YYYY")===moment(new Date).add(1,"days").format("MM-DD-YYYY")&&moment(o).format("MM-DD-YYYY")===moment(new Date).add(1,"days").format("MM-DD-YYYY")&&(Y=moment(o).format(a)),0<moment(o).diff(moment(t),"days")&&n.text().trim().length<1&&(Y=moment(o).format("MMM Do "+a)),moment(t).format("MM-DD-YYYY")===moment(o).format("MM-DD-YYYY")&&(Y=moment(o).format(a)),Y=l?r+" "+Y:Y),void 0!==i.extendedProps.hideEndDate&&"yes"===i.extendedProps.hideEndDate?n.html(" "):n.html(""!=Y?"- "+Y:""),m.html('<i class="eicon-calendar"></i> '+s),c(".eaelec-modal-header h2").html(i.title),c(".eaelec-modal-body p").html(i.extendedProps.description),i.extendedProps.description.length<1?c(".eaelec-modal-body").css("height","auto"):c(".eaelec-modal-body").css("height","300px"),c(".eaelec-modal-footer a").attr("href",i.url),"on"===i.extendedProps.external&&c(".eaelec-modal-footer a").attr("target","_blank"),"on"===i.extendedProps.nofollow&&c(".eaelec-modal-footer a").attr("rel","nofollow"),""==i.url&&c(".eaelec-modal-footer a").css("display","none"),c(".eaelec-modal-header").css("border-left","5px solid "+i.borderColor)})}});o.on("click",function(){event.stopPropagation(),D.addClass("eael-ec-modal-removing").removeClass("eael-ec-popup-ready")}),c(document).on("click",function(e){e.target.closest(".eaelec-modal-content")||D.hasClass("eael-ec-popup-ready")&&D.addClass("eael-ec-modal-removing").removeClass("eael-ec-popup-ready")}),s.render()};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-event-calendar.default",EventCalendar)});var WooCheckout = function($scope, $) {
    $.blockUI.defaults.overlayCSS.cursor = 'default';
    function render_order_review_template(){
        var wooCheckout = $('.ea-woo-checkout');
        setTimeout(
            function () {
                $('.ea-checkout-review-order-table').addClass( 'processing' ).block({
                    message: null,
                    overlayCSS: {
                        background: '#fff',
                        opacity: 0.6
                    }
                });
                $.ajax({
                    type:		'POST',
                    url:		localize.ajaxurl,
                    data:		{
                        action: 'woo_checkout_update_order_review',
                        orderReviewData : wooCheckout.data('checkout')
                    },
                    success:	function( data ) {
                        $( ".ea-checkout-review-order-table" ).replaceWith( data.order_review);
                        setTimeout(function () {
                            $( '.ea-checkout-review-order-table' ).removeClass('processing').unblock();
                        }, 100000)
                    }
                });
            },2000
        );
    }
    $(document).on('click', '.woocommerce-remove-coupon', function(e) {
        render_order_review_template();
    });
    $( 'form.checkout_coupon' ).submit(function (event) {
        render_order_review_template();
    });
};
jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/eael-woo-checkout.default",
        WooCheckout
    );
});
jQuery(document).ready(function(){jQuery(window).scroll(function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;jQuery(".eael-reading-progress-fill").css({width:e+"%"})}),isEditMode&&(elementor.settings.page.addChangeCallback("eael_ext_reading_progress",function(e){var r=elementor.settings.page.getSettings();"yes"==e?(0==jQuery(".eael-reading-progress-wrap").length&&jQuery("body").append('<div class="eael-reading-progress-wrap eael-reading-progress-wrap-local"><div class="eael-reading-progress eael-reading-progress-local eael-reading-progress-'+r.settings.eael_ext_reading_progress_position+'"><div class="eael-reading-progress-fill"></div></div><div class="eael-reading-progress eael-reading-progress-global eael-reading-progress-'+r.settings.eael_ext_reading_progress_position+'"><div class="eael-reading-progress-fill"></div></div></div>'),jQuery(".eael-reading-progress-wrap").addClass("eael-reading-progress-wrap-local").removeClass("eael-reading-progress-wrap-global eael-reading-progress-wrap-disabled")):(jQuery(".eael-reading-progress-wrap").removeClass("eael-reading-progress-wrap-local eael-reading-progress-wrap-global"),1==r.settings.eael_ext_reading_progress_has_global?jQuery(".eael-reading-progress-wrap").addClass("eael-reading-progress-wrap-global"):jQuery(".eael-reading-progress-wrap").addClass("eael-reading-progress-wrap-disabled"))}),elementor.settings.page.addChangeCallback("eael_ext_reading_progress_position",function(e){elementor.settings.page.setSettings("eael_ext_reading_progress_position",e),jQuery(".eael-reading-progress").removeClass("eael-reading-progress-top eael-reading-progress-bottom").addClass("eael-reading-progress-"+e)}))});!function(d){jQuery(document).ready(function(){function i(e,t){var a=document.getElementById("eael-toc-list");if(null!==e&&void 0!==t&&a){for(var l=[],o=document.querySelectorAll(e),n=0,s=0;s<o.length;s++){var c=o[s].querySelectorAll(t);Array.prototype.push.apply(l,c)}(l=Array.prototype.slice.call(l)).forEach(function(e){e.id=n+"-"+w(),e.classList.add("eael-heading-content"),n++}),function(e,t){var a=t,l="",o=[],n=document.getElementById("eael-toc-list"),s=document.querySelectorAll(e),c=l=a.trim().split(",")[0].substr(1,1),i=n;n.innerHTML="";for(var r=0;r<s.length;r++){var d=s[r].querySelectorAll(a);Array.prototype.push.apply(o,d)}0<o.length&&document.getElementById("eael-toc").classList.remove("eael-toc-disable");for(var h=0,g=o.length;h<g;++h){var u=o[h],p=parseInt(u.tagName.substr(1,1)),m=p-l;if(0<m){var _=i.lastChild;if(_){var v=document.createElement("UL");_.appendChild(v),i=v,l=p}}var C=!1;if(m<0){for(;0!=m++;)i.parentNode.parentNode&&(i=i.parentNode.parentNode);l=p,C=!0}if("UL"!==i.tagName&&(i=n),""!==u.textContent.trim()){var f=document.createElement("LI"),b=document.createElement("A"),y=document.createElement("SPAN");c!==l&&!C||(f.setAttribute("itemscope",""),f.setAttribute("itemtype","http://schema.org/ListItem"),f.setAttribute("itemprop","itemListElement"));var x="#"+h+"-"+w();b.className="eael-toc-link",b.setAttribute("itemprop","item"),b.setAttribute("href",x),y.appendChild(document.createTextNode(u.textContent)),b.appendChild(y),f.appendChild(b),i.appendChild(f)}}}(e,t);var i=d("ul.eael-toc-list > li");i.length<1&&document.getElementById("eael-toc").classList.add("eael-toc-disable"),i.each(function(){this.classList.add("eael-first-child")})}}d(document).on("click","ul.eael-toc-list a",function(e){e.preventDefault(),d(document).off("scroll");var t=this.hash;if(history.pushState("",document.title,window.location.pathname+window.location.search),d(this).parent().is(".eael-highlight-parent.eael-highlight-active"))return window.location.hash=t,!1;d(".eael-highlight-active, .eael-highlight-parent").removeClass("eael-highlight-active eael-highlight-parent"),d(this).closest(".eael-first-child").addClass("eael-highlight-parent"),d(this).parent().addClass("eael-highlight-active"),window.location.hash=t}),window.addEventListener("scroll",function(e){!function(){var e=document.getElementById("eael-toc");if(!e)return;t=void 0!==t?t:200,window.pageYOffset>=t&&!e.classList.contains("eael-toc-disable")?e.classList.add("eael-sticky"):e.classList.remove("eael-sticky")}()});var t=d("#eael-toc").data("stickyscroll");function w(){return"eael-table-of-content"}function r(){var e=".site-content";return d(".site-content")[0]?e=".site-content":d(".elementor-inner")[0]?e=".elementor-inner":d("#site-content")[0]&&(e="#site-content"),e}d("body").click(function(e){var t=d(e.target),a=d("#eael-toc");a.hasClass("eael-toc-auto-collapse")&&a.hasClass("eael-sticky")&&!a.hasClass("collapsed")&&0===d(t).closest("#eael-toc").length&&a.toggleClass("collapsed")}),d(document).on("click",".eael-toc-close ,.eael-toc-button",function(e){e.stopPropagation(),d(".eael-toc").toggleClass("collapsed")});var e=d("#eael-toc").data("eaeltoctag");if(""!==e&&i(r(),e),isEditMode){elementorFrontend.hooks.addAction("frontend/element_ready/widget",function(e,t){var a=t("#eael-toc #eael-toc-list");if(a.find("li.eael-first-child").length<1&&1<=a.length){var l=t("#eael-toc").data("eaeltoctag");l&&i(r(),l)}}),elementor.settings.page.addChangeCallback("eael_ext_table_of_content",function(e){var t,a,l,o,n,s=d(".eael-toc-global");if(0<s.length&&(s.attr("id","eael-toc-temp").removeClass("eael-toc").hide(),d(".eael-toc-global #eael-toc-list").attr("id","")),d("#eael-toc").remove(),"yes"===e){var c=elementor.settings.page.getSettings();d("body").append((t=c.settings,a=t.eael_ext_toc_title,l="eael-toc-list eael-toc-list-"+t.eael_ext_table_of_content_list_style,o=t.eael_ext_table_of_content_header_icon.value,n="right"===t.eael_ext_toc_position?" eael-toc-right":" ",l+="yes"===t.eael_ext_toc_collapse_sub_heading?" eael-toc-collapse":" ",'<div id="eael-toc" class="eael-toc eael-toc-disable '+n+'"><div class="eael-toc-header"><span class="eael-toc-close">×</span><h2 class="eael-toc-title">'+a+'</h2></div><div class="eael-toc-body"><ul id="eael-toc-list" class="'+(l+="number"===t.eael_ext_toc_list_icon?" eael-toc-number":" eael-toc-bullet")+'"></ul></div><button class="eael-toc-button"><i class="'+o+'"></i><span>'+a+"</span></button></div>")),i(r(),c.settings.eael_ext_toc_supported_heading_tag.join(", "))}else 0<s.length&&s.addClass("eael-toc").attr("id","eael-toc").show()}),elementor.settings.page.addChangeCallback("eael_ext_toc_position",function(e){"right"===e?d("#eael-toc").addClass("eael-toc-right"):d("#eael-toc").removeClass("eael-toc-right")}),elementor.settings.page.addChangeCallback("eael_ext_table_of_content_list_style",function(e){var t=d(".eael-toc-list");t.removeClass("eael-toc-list-bar eael-toc-list-arrow"),"none"!==e&&t.addClass("eael-toc-list-"+e)}),elementor.settings.page.addChangeCallback("eael_ext_toc_collapse_sub_heading",function(e){var t=d(".eael-toc-list");"yes"===e?t.addClass("eael-toc-collapse"):t.removeClass("eael-toc-collapse")}),elementor.settings.page.addChangeCallback("eael_ext_table_of_content_header_icon",function(e){d(".eael-toc-button i").removeClass().addClass(e.value)}),elementor.settings.page.addChangeCallback("eael_ext_toc_list_icon",function(e){var t=d(".eael-toc-list");"number"===e?t.addClass("eael-toc-number").removeClass("eael-toc-bullet"):t.addClass("eael-toc-bullet").removeClass("eael-toc-number")}),elementor.settings.page.addChangeCallback("eael_ext_toc_word_wrap",function(e){var t=d(".eael-toc-list");"yes"===e?t.addClass("eael-toc-word-wrap"):t.removeClass("eael-toc-word-wrap")}),elementor.settings.page.addChangeCallback("eael_ext_toc_close_button_text_style",function(e){var t=d("#eael-toc");"bottom_to_top"===e?t.addClass("eael-bottom-to-top"):t.removeClass("eael-bottom-to-top")}),elementor.settings.page.addChangeCallback("eael_ext_toc_box_shadow",function(e){var t=d("#eael-toc");"yes"===e?t.addClass("eael-box-shadow"):t.removeClass("eael-box-shadow")}),elementor.settings.page.addChangeCallback("eael_ext_toc_auto_collapse",function(e){var t=d("#eael-toc");"yes"===e?t.addClass("eael-toc-auto-collapse"):t.removeClass("eael-toc-auto-collapse")}),elementor.settings.page.addChangeCallback("eael_ext_toc_title",function(e){elementorFrontend.elements.$document.find(".eael-toc-title").text(e),elementorFrontend.elements.$document.find(".eael-toc-button span").text(e)})}})}(jQuery);