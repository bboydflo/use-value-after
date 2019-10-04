var e=require("react");exports.useValueAfter=function(t,r,n){void 0===t&&(t=[]),void 0===r&&(r=1e3),void 0===n&&(n=0);var u=e.useState(n),i=u[0],o=u[1];return e.useEffect(function(){var e=setTimeout(function(){o((i+1)%t.length)},r);return function(){return clearInterval(e)}},[i]),t[i]};
//# sourceMappingURL=useValueAfter.js.map
