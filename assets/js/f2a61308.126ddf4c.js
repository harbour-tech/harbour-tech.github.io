"use strict";(self.webpackChunkapi_docs_generator=self.webpackChunkapi_docs_generator||[]).push([[218],{315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tech/networks","title":"Networks","description":"In our production API, the protocol is intended to be the mainnet.","source":"@site/docs/tech/networks.md","sourceDirName":"tech","slug":"/tech/networks","permalink":"/docs/tech/networks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Web Integration","permalink":"/docs/tech/web"},"next":{"title":"UI Implementation Guide","permalink":"/docs/tech/ui"}}');var r=t(4848),s=t(8453);const c={},i="Networks",l={},d=[];function a(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"networks",children:"Networks"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:"enum Protocol {\n  PROTOCOL_UNSPECIFIED = 0;\n  PROTOCOL_ETHEREUM = 10;\n  PROTOCOL_AVAX = 20;\n  PROTOCOL_TERRA = 30;\n  PROTOCOL_POLYGON = 40;\n  PROTOCOL_ALEPH_ZERO = 50 [deprecated = true];\n  PROTOCOL_ALEPH_ZERO_L2 = 60;\n  PROTOCOL_POLKADOT = 70;\n  PROTOCOL_NOBLE = 80;\n  ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"In our production API, the protocol is intended to be the mainnet."}),"\n",(0,r.jsx)(n.p,{children:"On our dev API, we solely use the following testnets:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ethereum: Sepolia"}),"\n",(0,r.jsx)(n.li,{children:"Avalanche: Fuji"}),"\n",(0,r.jsx)(n.li,{children:"Polygon: unsupported"}),"\n",(0,r.jsx)(n.li,{children:"Aleph Zero EVM: unsupported"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"(TODO what about the mainnets?)"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);