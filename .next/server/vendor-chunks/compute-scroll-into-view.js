/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/compute-scroll-into-view";
exports.ids = ["vendor-chunks/compute-scroll-into-view"];
exports.modules = {

/***/ "(ssr)/./node_modules/compute-scroll-into-view/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("function t(t){return\"object\"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||\"hidden\"!==t)&&\"visible\"!==t&&\"clip\"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return e(i.overflowY,n)||e(i.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function i(t,e,n,i,r,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-i:l>e&&d<n||o<t&&d>n?l-e+r:0}module.exports=function(e,r){var o=window,l=r.scrollMode,d=r.block,f=r.inline,h=r.boundary,u=r.skipOverflowHiddenElements,s=\"function\"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError(\"Invalid target\");for(var c,a,g=document.scrollingElement||document.documentElement,m=[],p=e;t(p)&&s(p);){if((p=null==(a=(c=p).parentElement)?c.getRootNode().host||null:a)===g){m.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,u)&&m.push(p)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C=\"start\"===d||\"nearest\"===d?M:\"end\"===d?x:M+y/2,R=\"center\"===f?I+E/2:\"end\"===f?V:I,T=[],k=0;k<m.length;k++){var B=m[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if(\"if-needed\"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K=\"offsetWidth\"in B?B.offsetWidth-B.clientWidth-q-A:0,P=\"offsetHeight\"in B?B.offsetHeight-B.clientHeight-z-F:0,Q=\"offsetWidth\"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U=\"offsetHeight\"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G=\"start\"===d?C:\"end\"===d?C-v:\"nearest\"===d?i(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J=\"start\"===f?R:\"center\"===f?R-w/2:\"end\"===f?R-w:i(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G=\"start\"===d?C-Y-z:\"end\"===d?C-S+F+P:\"nearest\"===d?i(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J=\"start\"===f?R-j-q:\"center\"===f?R-(j+X/2)+K/2:\"end\"===f?R-L+A+K:i(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxrREFBa0QsZ0JBQWdCLG9EQUFvRCxnQkFBZ0IsK0RBQStELCtCQUErQix1REFBdUQsa0JBQWtCLDhEQUE4RCxJQUFJLGdEQUFnRCxTQUFTLGFBQWEsSUFBSSx3RUFBd0UsSUFBSSxTQUFTLDRCQUE0QixvRkFBb0YsNkJBQTZCLGtJQUFrSSxjQUFjLCtDQUErQywyRUFBMkUsV0FBVyxFQUFFLHVFQUF1RSxVQUFVLE1BQU0sMkZBQTJGLG9XQUFvVyxXQUFXLEtBQUssa0dBQWtHLDRFQUE0RSw4WUFBOFksc01BQXNNLEtBQUssaUxBQWlMLGlDQUFpQyxtSEFBbUgsUUFBUSxrQkFBa0IsRUFBRTtBQUM5a0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXF1aWxsYWNlbnRyYWwtbmV4dGpzLy4vbm9kZV9tb2R1bGVzL2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldy9kaXN0L2luZGV4LmpzP2E2MDYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdCh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dCYmMT09PXQubm9kZVR5cGV9ZnVuY3Rpb24gZSh0LGUpe3JldHVybighZXx8XCJoaWRkZW5cIiE9PXQpJiZcInZpc2libGVcIiE9PXQmJlwiY2xpcFwiIT09dH1mdW5jdGlvbiBuKHQsbil7aWYodC5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fHQuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl7dmFyIGk9Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpO3JldHVybiBlKGkub3ZlcmZsb3dZLG4pfHxlKGkub3ZlcmZsb3dYLG4pfHxmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0KXtpZighdC5vd25lckRvY3VtZW50fHwhdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KXJldHVybiBudWxsO3RyeXtyZXR1cm4gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19KHQpO3JldHVybiEhZSYmKGUuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHxlLmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpfSh0KX1yZXR1cm4hMX1mdW5jdGlvbiBpKHQsZSxuLGkscixvLGwsZCl7cmV0dXJuIG88dCYmbD5lfHxvPnQmJmw8ZT8wOm88PXQmJmQ8PW58fGw+PWUmJmQ+PW4/by10LWk6bD5lJiZkPG58fG88dCYmZD5uP2wtZStyOjB9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXt2YXIgbz13aW5kb3csbD1yLnNjcm9sbE1vZGUsZD1yLmJsb2NrLGY9ci5pbmxpbmUsaD1yLmJvdW5kYXJ5LHU9ci5za2lwT3ZlcmZsb3dIaWRkZW5FbGVtZW50cyxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWh9O2lmKCF0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhcmdldFwiKTtmb3IodmFyIGMsYSxnPWRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxtPVtdLHA9ZTt0KHApJiZzKHApOyl7aWYoKHA9bnVsbD09KGE9KGM9cCkucGFyZW50RWxlbWVudCk/Yy5nZXRSb290Tm9kZSgpLmhvc3R8fG51bGw6YSk9PT1nKXttLnB1c2gocCk7YnJlYWt9bnVsbCE9cCYmcD09PWRvY3VtZW50LmJvZHkmJm4ocCkmJiFuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl8fG51bGwhPXAmJm4ocCx1KSYmbS5wdXNoKHApfWZvcih2YXIgdz1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQud2lkdGg6aW5uZXJXaWR0aCx2PW8udmlzdWFsVmlld3BvcnQ/by52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6aW5uZXJIZWlnaHQsVz13aW5kb3cuc2Nyb2xsWHx8cGFnZVhPZmZzZXQsSD13aW5kb3cuc2Nyb2xsWXx8cGFnZVlPZmZzZXQsYj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHk9Yi5oZWlnaHQsRT1iLndpZHRoLE09Yi50b3AsVj1iLnJpZ2h0LHg9Yi5ib3R0b20sST1iLmxlZnQsQz1cInN0YXJ0XCI9PT1kfHxcIm5lYXJlc3RcIj09PWQ/TTpcImVuZFwiPT09ZD94Ok0reS8yLFI9XCJjZW50ZXJcIj09PWY/SStFLzI6XCJlbmRcIj09PWY/VjpJLFQ9W10saz0wO2s8bS5sZW5ndGg7aysrKXt2YXIgQj1tW2tdLEQ9Qi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxPPUQuaGVpZ2h0LFg9RC53aWR0aCxZPUQudG9wLEw9RC5yaWdodCxTPUQuYm90dG9tLGo9RC5sZWZ0O2lmKFwiaWYtbmVlZGVkXCI9PT1sJiZNPj0wJiZJPj0wJiZ4PD12JiZWPD13JiZNPj1ZJiZ4PD1TJiZJPj1qJiZWPD1MKXJldHVybiBUO3ZhciBOPWdldENvbXB1dGVkU3R5bGUoQikscT1wYXJzZUludChOLmJvcmRlckxlZnRXaWR0aCwxMCksej1wYXJzZUludChOLmJvcmRlclRvcFdpZHRoLDEwKSxBPXBhcnNlSW50KE4uYm9yZGVyUmlnaHRXaWR0aCwxMCksRj1wYXJzZUludChOLmJvcmRlckJvdHRvbVdpZHRoLDEwKSxHPTAsSj0wLEs9XCJvZmZzZXRXaWR0aFwiaW4gQj9CLm9mZnNldFdpZHRoLUIuY2xpZW50V2lkdGgtcS1BOjAsUD1cIm9mZnNldEhlaWdodFwiaW4gQj9CLm9mZnNldEhlaWdodC1CLmNsaWVudEhlaWdodC16LUY6MCxRPVwib2Zmc2V0V2lkdGhcImluIEI/MD09PUIub2Zmc2V0V2lkdGg/MDpYL0Iub2Zmc2V0V2lkdGg6MCxVPVwib2Zmc2V0SGVpZ2h0XCJpbiBCPzA9PT1CLm9mZnNldEhlaWdodD8wOk8vQi5vZmZzZXRIZWlnaHQ6MDtpZihnPT09QilHPVwic3RhcnRcIj09PWQ/QzpcImVuZFwiPT09ZD9DLXY6XCJuZWFyZXN0XCI9PT1kP2koSCxIK3Ysdix6LEYsSCtDLEgrQyt5LHkpOkMtdi8yLEo9XCJzdGFydFwiPT09Zj9SOlwiY2VudGVyXCI9PT1mP1Itdy8yOlwiZW5kXCI9PT1mP1ItdzppKFcsVyt3LHcscSxBLFcrUixXK1IrRSxFKSxHPU1hdGgubWF4KDAsRytIKSxKPU1hdGgubWF4KDAsSitXKTtlbHNle0c9XCJzdGFydFwiPT09ZD9DLVktejpcImVuZFwiPT09ZD9DLVMrRitQOlwibmVhcmVzdFwiPT09ZD9pKFksUyxPLHosRitQLEMsQyt5LHkpOkMtKFkrTy8yKStQLzIsSj1cInN0YXJ0XCI9PT1mP1Itai1xOlwiY2VudGVyXCI9PT1mP1ItKGorWC8yKStLLzI6XCJlbmRcIj09PWY/Ui1MK0ErSzppKGosTCxYLHEsQStLLFIsUitFLEUpO3ZhciBaPUIuc2Nyb2xsTGVmdCwkPUIuc2Nyb2xsVG9wO0MrPSQtKEc9TWF0aC5tYXgoMCxNYXRoLm1pbigkK0cvVSxCLnNjcm9sbEhlaWdodC1PL1UrUCkpKSxSKz1aLShKPU1hdGgubWF4KDAsTWF0aC5taW4oWitKL1EsQi5zY3JvbGxXaWR0aC1YL1ErSykpKX1ULnB1c2goe2VsOkIsdG9wOkcsbGVmdDpKfSl9cmV0dXJuIFR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\n");

/***/ })

};
;