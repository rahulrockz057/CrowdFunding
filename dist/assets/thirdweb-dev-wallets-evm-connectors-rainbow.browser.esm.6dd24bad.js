import{aI as l,aO as p,aJ as m,aK as w,aL as f,aM as I,b4 as g}from"./index.815e7d61.js";import{C,U as u,R as v}from"./url-bc88b2b6.browser.esm.9431b929.js";import{I as R}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.52b5504c.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var r=new WeakMap;class b extends R{constructor(t){const n={...{name:"Rainbow Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:g},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),l(this,"id",p.rainbow),m(this,r,{writable:!0,value:void 0}),w(this,r,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var c,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new C;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if(f(this,r)&&((c=this.options)==null?void 0:c.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(i=await this.getAccount().catch(()=>null),!!i))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!i){const o=await e.request({method:"eth_requestAccounts"});i=I(o[0])}let s=await this.getChainId(),a=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:s,unsupported:a},provider:e,account:i};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new v(e):e}}}export{b as RainbowConnector};