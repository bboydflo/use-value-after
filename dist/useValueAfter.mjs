import{useState as r,useEffect as t}from"react";var n=function(n,e,o){void 0===n&&(n=[]),void 0===e&&(e=1e3),void 0===o&&(o=0);var i=r(o),u=i[0],v=i[1];return t(function(){var r=setTimeout(function(){v((u+1)%n.length)},e);return function(){return clearInterval(r)}},[u]),n[u]};export{n as useValueAfter};
//# sourceMappingURL=useValueAfter.mjs.map
