_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[83],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},"30Md":function(e){e.exports=JSON.parse('{"name":"@visx/demo-network","description":"Standalone visx network demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/responsive":"latest","@visx/network":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","network"]}')},D1Zc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/network",function(){return t("ugpb")}])},Dhk8:function(e,n,t){var r=t("Syyo"),o=t("KCLV"),i=t("kHoZ"),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},ENE1:function(e,n,t){var r=t("IBsm");e.exports=function(){return r.Date.now()}},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,i=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},IBsm:function(e,n,t){var r=t("e93E"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("aWzz"),o=t.n(r),i=t("ERkP"),a=t.n(i),l=t("O94r"),s=t.n(l);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e){var n=e.top,t=void 0===n?0:n,r=e.left,o=void 0===r?0:r,i=e.transform,l=e.className,d=e.children,c=e.innerRef,p=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",u({ref:c,className:s()("visx-group",l),transform:i||"translate("+o+", "+t+")"},p),d)}d.propTypes={top:o.a.number,left:o.a.number,transform:o.a.string,className:o.a.string,children:o.a.node,innerRef:o.a.oneOfType([o.a.string,o.a.func,o.a.object])}},KCLV:function(e,n,t){var r=t("Syyo"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var n=i.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(s){}var o=a.call(e);return r&&(n?e[l]=t:delete e[l]),o}},LJlt:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var r=t("ERkP"),o=t.n(r),i=t("gtjO"),a=t("i9k6"),l=t("30Md");t.d(n,"packageJson",(function(){return l}));var s=o.a.createElement,u={background:i.a};function d(){return s(a.a,{title:"Network",description:"<Network.Graph />",exampleRenderer:i.b,exampleUrl:"/network",tileStyles:u})}},RNvQ:function(e,n,t){var r=t("tQYX"),o=t("ENE1"),i=t("nvU9"),a=Math.max,l=Math.min;e.exports=function(e,n,t){var s,u,d,c,p,f,m=0,y=!1,v=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(n){var t=s,r=u;return s=u=void 0,m=n,c=e.apply(r,t)}function k(e){return m=e,p=setTimeout(b,n),y?g(e):c}function h(e){var t=e-f;return void 0===f||t>=n||t<0||v&&e-m>=d}function b(){var e=o();if(h(e))return O(e);p=setTimeout(b,function(e){var t=n-(e-f);return v?l(t,d-(e-m)):t}(e))}function O(e){return p=void 0,x&&s?g(e):(s=u=void 0,c)}function w(){var e=o(),t=h(e);if(s=arguments,u=this,f=e,t){if(void 0===p)return k(f);if(v)return clearTimeout(p),p=setTimeout(b,n),g(f)}return void 0===p&&(p=setTimeout(b,n)),c}return n=i(n)||0,r(t)&&(y=!!t.leading,d=(v="maxWait"in t)?a(i(t.maxWait)||0,n):d,x="trailing"in t?!!t.trailing:x),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=f=u=p=void 0},w.flush=function(){return void 0===p?c:O(o())},w}},Syyo:function(e,n,t){var r=t("IBsm").Symbol;e.exports=r},a88S:function(e,n,t){var r=t("Dhk8"),o=t("tLQN");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},e93E:function(e,n,t){(function(n){var t="object"==typeof n&&n&&n.Object===Object&&n;e.exports=t}).call(this,t("fRV1"))},fRV1:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t},gtjO:function(e,n,t){"use strict";t.d(n,"a",(function(){return k})),t.d(n,"b",(function(){return h}));var r=t("ERkP"),o=t.n(r),i=t("aWzz"),a=t.n(i),l=t("JmwF"),s=t("O94r"),u=t.n(s);function d(e){var n=e.links,t=void 0===n?[]:n,r=e.linkComponent,i=e.className;return o.a.createElement(o.a.Fragment,null,t.map((function(e,n){return o.a.createElement(l.a,{key:"network-link-"+n,className:u()("visx-network-link",i)},o.a.createElement(r,{link:e}))})))}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e){var n=e.r,t=void 0===n?15:n,r=e.fill,i=void 0===r?"#21D4FD":r,a=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["r","fill"]);return o.a.createElement("circle",c({r:t,fill:i},a))}function f(e){var n=e.nodes,t=void 0===n?[]:n,r=e.nodeComponent,i=void 0===r?p:r,a=e.className,s=e.x,d=void 0===s?function(e){return e&&e.x||0}:s,c=e.y,f=void 0===c?function(e){return e&&e.y||0}:c;return o.a.createElement(o.a.Fragment,null,t.map((function(e,n){return o.a.createElement(l.a,{key:"network-node-"+n,className:u()("visx-network-node",a),left:d(e),top:f(e)},o.a.createElement(i,{node:e}))})))}function m(e){var n=e.link;return n&&n.source&&n.target?o.a.createElement("line",{x1:n.source.x,y1:n.source.y,x2:n.target.x,y2:n.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6}):null}function y(e){var n=e.graph,t=e.linkComponent,r=void 0===t?m:t,i=e.nodeComponent,a=void 0===i?p:i,s=e.top,u=e.left;return n?o.a.createElement(l.a,{top:s,left:u},o.a.createElement(d,{links:n.links,linkComponent:r}),o.a.createElement(f,{nodes:n.nodes,nodeComponent:a})):null}d.propTypes={links:a.a.array,className:a.a.string},p.propTypes={cx:a.a.number,cy:a.a.number},f.propTypes={nodes:a.a.array,className:a.a.string,x:a.a.func,y:a.a.func},y.propTypes={top:a.a.number,left:a.a.number};var v=o.a.createElement,x=[{x:50,y:20},{x:200,y:300},{x:300,y:40}],g={nodes:x,links:[{source:x[0],target:x[1]},{source:x[1],target:x[2]},{source:x[2],target:x[0]}]},k="#272b4d";function h(e){var n=e.width,t=e.height;return n<10?null:v("svg",{width:n,height:t},v("rect",{width:n,height:t,rx:14,fill:k}),v(y,{graph:g}))}try{h.displayName="Example",h.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-network/Example.tsx#Example"]={docgenInfo:h.__docgenInfo,name:"Example",path:"src/sandboxes/visx-network/Example.tsx#Example"})}catch(b){}},i6Tx:function(e,n,t){"use strict";n.__esModule=!0,n.default=d;var r=s(t("aWzz")),o=s(t("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}t.default=e,n&&n.set(e,t);return t}(t("ERkP")),a=s(t("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e){var n=e.className,t=e.children,r=e.debounceTime,l=void 0===r?300:r,s=e.ignoreDimensions,d=void 0===s?[]:s,c=e.parentSizeStyles,p=void 0===c?{width:"100%",height:"100%"}:c,f=e.enableDebounceLeadingCall,m=void 0===f||f,y=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),v=(0,i.useRef)(null),x=(0,i.useRef)(0),g=(0,i.useState)({width:0,height:0,top:0,left:0}),k=g[0],h=g[1],b=(0,i.useMemo)((function(){var e=Array.isArray(d)?d:[d];return(0,o.default)((function(n){h((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),l,{leading:m})}),[l,m,d]);return(0,i.useEffect)((function(){var e=new a.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,r=n.top,o=n.width,i=n.height;x.current=window.requestAnimationFrame((function(){b({width:o,height:i,top:r,left:t})}))}))}));return v.current&&e.observe(v.current),function(){window.cancelAnimationFrame(x.current),e.disconnect(),b.cancel()}}),[b]),i.default.createElement("div",u({style:p,ref:v,className:n},y),t(u({},k,{ref:v.current,resize:b})))}d.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("zjfJ"),o=t("yFcC"),i=t.n(o),a=t("ERkP"),l=t.n(a),s=t("jvFD"),u=t.n(s),d=t("i6Tx"),c=t.n(d),p=l.a.createElement;function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){var n,t,o=e.description,a=e.detailsHeight,s=void 0===a?76:a,d=e.detailsStyles,m=e.exampleProps,y=e.exampleRenderer,v=e.exampleUrl,x=e.tileStyles,g=e.title;return p(l.a.Fragment,null,(n=v,t=p("div",{style:x,className:"jsx-713312509 gallery-tile"},p("div",{className:"jsx-713312509 image"},p(c.a,null,(function(e){var n=e.width,t=e.height;return l.a.createElement(y,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({width:n,height:t+(g||o?s:0)},m))}))),(g||o)&&p("div",{style:d,className:"jsx-713312509 details"},g&&p("div",{className:"jsx-713312509 title"},g),o&&p("div",{className:"jsx-713312509 description"},p("pre",{className:"jsx-713312509"},o)))),n?p(u.a,{href:n},t):t),p(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},kHoZ:function(e,n){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},nvU9:function(e,n,t){var r=t("tQYX"),o=t("a88S"),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var t=l.test(e);return t||s.test(e)?u(e.slice(2),t?2:8):a.test(e)?NaN:+e}},tLQN:function(e,n){e.exports=function(e){return null!=e&&"object"==typeof e}},tQYX:function(e,n){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},ugpb:function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),o=t.n(r),i=t("JmwF"),a=t("O94r"),l=t.n(a),s=o.a.createElement;function u(e){var n=e.links,t=void 0===n?[]:n,r=e.linkComponent,a=e.className;return s(o.a.Fragment,null,t.map((function(e,n){return s(i.a,{key:"network-link-".concat(n),className:l()("visx-network-link",a)},o.a.createElement(r,{link:e}))})))}try{u.displayName="Links",u.__docgenInfo={description:"",displayName:"Links",props:{links:{defaultValue:{value:"[]"},description:"Array of links to render.",name:"links",required:!1,type:{name:"Link[] | undefined"}},linkComponent:{defaultValue:null,description:"Component for rendering a single link.",name:"linkComponent",required:!0,type:{name:"string | FunctionComponent<LinkProvidedProps<Link>> | ComponentClass<LinkProvidedProps<Link>, any>"}},className:{defaultValue:null,description:"Classname to add to each link parent g element.",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-network/src/Links.tsx#Links"]={docgenInfo:u.__docgenInfo,name:"Links",path:"../visx-network/src/Links.tsx#Links"})}catch(E){}var d=t("cxan"),c=t("HbGN"),p=o.a.createElement;function f(e){var n=e.r,t=void 0===n?15:n,r=e.fill,o=void 0===r?"#21D4FD":r,i=Object(c.a)(e,["r","fill"]);return p("circle",Object(d.a)({r:t,fill:o},i))}try{f.displayName="DefaultNode",f.__docgenInfo={description:"",displayName:"DefaultNode",props:{cx:{defaultValue:null,description:"",name:"cx",required:!1,type:{name:"number | undefined"}},cy:{defaultValue:null,description:"",name:"cy",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-network/src/DefaultNode.tsx#DefaultNode"]={docgenInfo:f.__docgenInfo,name:"DefaultNode",path:"../visx-network/src/DefaultNode.tsx#DefaultNode"})}catch(E){}var m=o.a.createElement;function y(e){var n=e.nodes,t=void 0===n?[]:n,r=e.nodeComponent,a=void 0===r?f:r,s=e.className,u=e.x,d=void 0===u?function(e){return e&&e.x||0}:u,c=e.y,p=void 0===c?function(e){return e&&e.y||0}:c;return m(o.a.Fragment,null,t.map((function(e,n){return m(i.a,{key:"network-node-".concat(n),className:l()("visx-network-node",s),left:d(e),top:p(e)},o.a.createElement(a,{node:e}))})))}try{y.displayName="Nodes",y.__docgenInfo={description:"",displayName:"Nodes",props:{nodes:{defaultValue:{value:"[]"},description:"Array of links to render.",name:"nodes",required:!1,type:{name:"Node[] | undefined"}},nodeComponent:{defaultValue:null,description:"Component for rendering a single link.",name:"nodeComponent",required:!1,type:{name:"string | FunctionComponent<NodeProvidedProps<Node>> | ComponentClass<NodeProvidedProps<Node>, any>"}},className:{defaultValue:null,description:"Classname to add to each node parent g element.",name:"className",required:!1,type:{name:"string | undefined"}},x:{defaultValue:{value:"(d: any) => (d && d.x) || 0"},description:"Returns the center x coordinate of a node.",name:"x",required:!1,type:{name:"((d: Node) => number) | undefined"}},y:{defaultValue:{value:"(d: any) => (d && d.y) || 0"},description:"Returns the center y coordinate of a node.",name:"y",required:!1,type:{name:"((d: Node) => number) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-network/src/Nodes.tsx#Nodes"]={docgenInfo:y.__docgenInfo,name:"Nodes",path:"../visx-network/src/Nodes.tsx#Nodes"})}catch(E){}var v=o.a.createElement;function x(e){var n=e.link;return n&&n.source&&n.target?v("line",{x1:n.source.x,y1:n.source.y,x2:n.target.x,y2:n.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6}):null}try{x.displayName="DefaultLink",x.__docgenInfo={description:"",displayName:"DefaultLink",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-network/src/DefaultLink.tsx#DefaultLink"]={docgenInfo:x.__docgenInfo,name:"DefaultLink",path:"../visx-network/src/DefaultLink.tsx#DefaultLink"})}catch(E){}var g=o.a.createElement;function k(e){var n=e.graph,t=e.linkComponent,r=void 0===t?x:t,o=e.nodeComponent,a=void 0===o?f:o,l=e.top,s=e.left;return n?g(i.a,{top:l,left:s},g(u,{links:n.links,linkComponent:r}),g(y,{nodes:n.nodes,nodeComponent:a})):null}try{k.displayName="Graph",k.__docgenInfo={description:"",displayName:"Graph",props:{graph:{defaultValue:null,description:"Graph to render nodes and links for.",name:"graph",required:!1,type:{name:"Graph<Link, Node> | undefined"}},linkComponent:{defaultValue:null,description:"Component for rendering a single Link.",name:"linkComponent",required:!1,type:{name:"string | FunctionComponent<LinkProvidedProps<Link>> | ComponentClass<LinkProvidedProps<Link>, any> | undefined"}},nodeComponent:{defaultValue:null,description:"Component for rendering a single Node.",name:"nodeComponent",required:!1,type:{name:"string | FunctionComponent<NodeProvidedProps<Node>> | ComponentClass<NodeProvidedProps<Node>, any> | undefined"}},top:{defaultValue:null,description:"Top transform offset to apply to links and nodes.",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:null,description:"Left transform offset to apply to links and nodes.",name:"left",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-network/src/Graph.tsx#Graph"]={docgenInfo:k.__docgenInfo,name:"Graph",path:"../visx-network/src/Graph.tsx#Graph"})}catch(E){}var h=t("QnPE"),b=t("LJlt"),O=o.a.createElement,w=[k,y,u,f,x],N=[b.default];n.default=function(){return O(h.a,{components:w,examples:N,readme:'# @visx/network\n\n<a title="@visx/network npm downloads" href="https://www.npmjs.com/package/@visx/network">\n  <img src="https://img.shields.io/npm/dm/@visx/network.svg?style=flat-square" />\n</a>\n\nA simple package to visualize a network or graph layout. Does not currently handle network layout.\n\n## Example Usage\n\n```js\nimport { Graph, DefaultLink, DefaultNode } from \'@visx/network\';\nconst nodes = [\n  { x: 50, y: 20 },\n  { x: 200, y: 300 },\n  { x: 300, y: 40 },\n];\n\nconst dataSample = {\n  nodes,\n  links: [\n    { source: nodes[0], target: nodes[1] },\n    { source: nodes[1], target: nodes[2] },\n    { source: nodes[2], target: nodes[0] },\n  ],\n};\n\nconst MyGraph = () => (\n  <Graph graph={dataSample} linkComponent={DefaultLink} nodeComponent={DefaultNode} />\n);\n```\n\n## Installation\n\n```\nnpm install --save @visx/network\n```\n',visxPackage:"network"})}},zjfJ:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["D1Zc",0,2,1,3,9,8,10]]]);