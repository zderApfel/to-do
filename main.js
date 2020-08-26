!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){r(1,arguments);var e=a(t);return!isNaN(e)}n.r(e);var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var c={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var c,d=u[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(s,(function(t){return t.test(d)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(s,(function(t){return t.test(d)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(d.length)}}}var m,h={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof o[t]?o[t]:1===e?o[t].one:o[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(m.matchPattern);if(!a)return null;var i=a[0],o=n.match(m.parsePattern);if(!o)return null;var u=m.valueCallback?m.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){r(2,arguments);var n=a(t).getTime(),i=f(e);return new Date(n+i)}function p(t,e){r(2,arguments);var n=f(e);return g(t,-n)}function b(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var w={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)},d:function(t,e){return b(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return b(t.getUTCHours()%12||12,e.length)},H:function(t,e){return b(t.getUTCHours(),e.length)},m:function(t,e){return b(t.getUTCMinutes(),e.length)},s:function(t,e){return b(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),e.length)}};function v(t){r(1,arguments);var e=1,n=a(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function y(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=v(i),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=v(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function C(t){r(1,arguments);var e=y(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=v(n);return a}function x(t,e){r(1,arguments);var n=e||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:f(o),c=null==n.weekStartsOn?u:f(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(t),s=d.getUTCDay(),l=(s<c?7:0)+s-c;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function T(t,e){r(1,arguments);var n=a(t,e),i=n.getUTCFullYear(),o=e||{},u=o.locale,c=u&&u.options&&u.options.firstWeekContainsDate,d=null==c?1:f(c),s=null==o.firstWeekContainsDate?d:f(o.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,s),l.setUTCHours(0,0,0,0);var m=x(l,e),h=new Date(0);h.setUTCFullYear(i,0,s),h.setUTCHours(0,0,0,0);var g=x(h,e);return n.getTime()>=m.getTime()?i+1:n.getTime()>=g.getTime()?i:i-1}function E(t,e){r(1,arguments);var n=e||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:f(i),u=null==n.firstWeekContainsDate?o:f(n.firstWeekContainsDate),c=T(t,e),d=new Date(0);d.setUTCFullYear(c,0,u),d.setUTCHours(0,0,0,0);var s=x(d,e);return s}var M="midnight",D="noon",P="morning",k="afternoon",A="evening",S="night";function U(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+b(i,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):O(t,e)}function O(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}var Y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w.y(t,e)},Y:function(t,e,n,r){var a=T(t,r),i=a>0?a:1-a;return"YY"===e?b(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):b(i,e.length)},R:function(t,e){return b(y(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return w.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var o=function(t,e){r(1,arguments);var n=a(t),i=x(n,e).getTime()-E(n,e).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):b(o,e.length)},I:function(t,e,n){var i=function(t){r(1,arguments);var e=a(t),n=v(e).getTime()-C(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(i,{unit:"week"}):b(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):w.d(t,e)},D:function(t,e,n){var i=function(t){r(1,arguments);var e=a(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=n-i;return Math.floor(o/864e5)+1}(t);return"Do"===e?n.ordinalNumber(i,{unit:"dayOfYear"}):b(i,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return b(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return b(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return b(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?D:0===a?M:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?A:a>=12?k:a>=4?P:S,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):w.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):w.s(t,e)},S:function(t,e){return w.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return O(a);case"XXXXX":case"XXX":default:return O(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return O(a);case"xxxxx":case"xxx":default:return O(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(a,":");case"OOOO":default:return"GMT"+O(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(a,":");case"zzzz":default:return"GMT"+O(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return b(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return b((r._originalDate||t).getTime(),e.length)}};function j(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function N(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var q={p:N,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return j(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",j(a,e)).replace("{{time}}",N(i,e))}};function z(t){return t.getTime()%6e4}function L(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+z(e))%6e4:z(e))}var H=["D","DD"],X=["YY","YYYY"];function B(t){return-1!==H.indexOf(t)}function F(t){return-1!==X.indexOf(t)}function Q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,I=/''/g,J=/[a-zA-Z]/;function K(t){return t.match(_)[1].replace(I,"'")}const V=[new $("Make cookies for baking party",null),new $("Read more Javascript documentation",null),new $("Kick gum, chew ass",null)];function $(t,e){this.name=t,this.todos=e}function Z(t,e,n,o,u,c){this.name=t,this.description=e,this.dueDate=function(t,e,n){r(2,arguments);var o=String(e),u=n||{},c=u.locale||h,d=c.options&&c.options.firstWeekContainsDate,s=null==d?1:f(d),l=null==u.firstWeekContainsDate?s:f(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,g=null==m?0:f(m),b=null==u.weekStartsOn?g:f(u.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=a(t);if(!i(w))throw new RangeError("Invalid time value");var v=L(w),y=p(w,v),C={firstWeekContainsDate:l,weekStartsOn:b,locale:c,_originalDate:w},x=o.match(R).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,q[e])(t,c.formatLong,C):t})).join("").match(G).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var a=Y[r];if(a)return!u.useAdditionalWeekYearTokens&&F(n)&&Q(n,e,t),!u.useAdditionalDayOfYearTokens&&B(n)&&Q(n,e,t),a(y,n,c.localize,C);if(r.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return x}(new Date(u,o,n),"MM/dd/yyyy"),this.priority=c}$.prototype.checkProject=function(){},$.prototype.renderProject=function(){const t=document.createElement("div");t.setAttribute("class","project-card");const e=document.createElement("h2");e.textContent=this.name,t.appendChild(e);const n=document.createElement("div");if(n.setAttribute("class","todo-previews"),t.appendChild(n),null==this.todos){let t=document.createElement("ol");t.textContent="Empty :(",n.appendChild(t)}else for(let t=0;t<this.todos.length;t++)if(t<2){let e=document.createElement("ol");e.textContent=this.todos[t].name,n.appendChild(e)}else if(2==t){let t=document.createElement("ol");t.textContent="...",n.appendChild(t)}return t},Z.prototype.checkToDo=function(){return""!=this.name&&""!=this.description},Z.prototype.renderToDo=function(){const t=document.createElement("div");t.setAttribute("class","new-todos");const e=document.createElement("ul");t.appendChild(e);const n=document.createElement("ul");t.appendChild(n);const r=document.createElement("ul");t.appendChild(r);const a=document.createElement("ul");t.appendChild(a);const i=document.createElement("ul");t.appendChild(i);const o=document.createElement("button");o.setAttribute("class","todo-button"),o.id="delete-todo",o.textContent="X",o.addEventListener("click",(function(){t.remove()})),e.appendChild(o);const u=document.createElement("button");u.setAttribute("class","todo-button"),u.id="edit-todo",u.textContent="Edit",e.appendChild(u);const c=document.createElement("h3");c.setAttribute("class","name"),c.textContent=""+this.name,n.appendChild(c);const d=document.createElement("p");d.setAttribute("class","description"),d.textContent="Description: "+this.description,r.appendChild(d);const s=document.createElement("p");s.setAttribute("class","date"),s.textContent="Due Date: "+this.dueDate,a.appendChild(s);const l=document.createElement("p");return l.setAttribute("class","priority"),l.textContent="Priority: "+this.priority,i.appendChild(l),t};let tt=[];function et(){const t=document.getElementById("container");for(;t.firstChild;)t.removeChild(t.firstChild);const e=document.createElement("div");e.id="project-form",t.appendChild(e);const n=document.createElement("h1");n.textContent="Create new project",e.appendChild(n);const r=document.createElement("label");r.setAttribute("for","pname"),r.textContent="Project Name",e.appendChild(r);const a=document.createElement("input");a.setAttribute("name","pname"),a.setAttribute("type","text"),a.id="pname",a.setAttribute("maxlength","50"),e.appendChild(a);const i=document.createElement("h2");i.textContent="Add To-Do",i.id="todo-title",e.appendChild(i);const o=document.createElement("form");o.id="add-todos",e.appendChild(o),function(t){const e=document.createElement("ul");t.appendChild(e);const n=document.createElement("ul");t.appendChild(n);const r=document.createElement("ul");t.appendChild(r);const a=document.createElement("ul");t.appendChild(a);const i=document.createElement("button");i.id="add-todo",i.setAttribute("class","todo-button"),i.setAttribute("type","button"),i.textContent="Add To-Do",i.addEventListener("click",(function(){let t=new Z(u.value,d.value,l.value,h.value,g.value,null);t.checkToDo()?(u.value="",d.value="",l.value="",h.value="",g.value="",document.getElementById("todo-container").appendChild(t.renderToDo()),tt.push(t)):alert("Error! Make sure all fields are filled!")})),t.appendChild(i);const o=document.createElement("label");o.setAttribute("for","todo-name"),o.textContent="Name",e.appendChild(o);const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","todo-name"),u.id="todo-name",u.setAttribute("maxlength","30"),e.appendChild(u);const c=document.createElement("label");c.setAttribute("for","description"),c.textContent="Description",n.appendChild(c);const d=document.createElement("textarea");d.setAttribute("name","description"),d.id="description",d.setAttribute("maxlength","500"),n.appendChild(d);const s=document.createElement("label");s.setAttribute("for","due-month"),s.textContent="Due Month (MM)",r.appendChild(s);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","due-month"),l.setAttribute("id","due-month"),l.setAttribute("class","date-field"),l.setAttribute("maxlength","2"),r.appendChild(l);const m=document.createElement("label");m.setAttribute("for","due-day"),m.textContent="Due Day (dd)",r.appendChild(m);const h=document.createElement("input");h.setAttribute("type","text"),h.setAttribute("name","due-day"),h.setAttribute("id","due-day"),h.setAttribute("class","date-field"),h.setAttribute("maxlength","2"),r.appendChild(h);const f=document.createElement("label");f.setAttribute("for","due-year"),f.textContent="Due Year (yyyy)",r.appendChild(f);const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("name","due-year"),g.setAttribute("id","due-year"),g.setAttribute("class","date-field"),g.setAttribute("maxlength","4"),r.appendChild(g);const p=document.createElement("label");p.setAttribute("for","priority"),p.id="priority-label",p.textContent="Priority",a.appendChild(p);const b=document.createElement("select");b.setAttribute("name","priority"),b.id="priority-selector",b.setAttribute("size","3"),a.appendChild(b);for(let t=1;t<=3;t++){let e=document.createElement("option");e.setAttribute("value",t),e.id="option"+t,e.textContent=t,b.appendChild(e)}document.getElementById("option3").setAttribute("selected","selected")}(o);const u=document.createElement("div");u.id="todo-container",e.appendChild(u);const c=document.createElement("button");c.id="cancel-button",c.setAttribute("class","todo-button"),c.textContent="Cancel",c.addEventListener("click",(function(){nt()})),e.appendChild(c);const d=document.createElement("button");d.id="submit-new-button",d.setAttribute("class","todo-button"),d.textContent="Submit",d.addEventListener("click",(function(){})),e.appendChild(d)}function nt(){const t=document.getElementById("container");for(;t.firstChild;)t.removeChild(t.firstChild);const e=document.createElement("div");e.id="project-table";const n=document.createElement("div");n.id="button-container",t.appendChild(n);const r=document.createElement("button");r.id="make-new-button",r.textContent="New Project",r.addEventListener("click",(function(){et()})),n.appendChild(r),t.appendChild(e);for(let t=0;t<V.length;t++)e.appendChild(V[t].renderProject())}nt()}]);