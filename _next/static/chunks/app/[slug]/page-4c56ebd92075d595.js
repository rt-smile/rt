(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42,931],{5783:function(e,t,i){Promise.resolve().then(i.bind(i,1587)),Promise.resolve().then(i.t.bind(i,231,23))},1587:function(e,t,i){"use strict";i.d(t,{default:function(){return h}});var n=i(7437),o=i(2265),h=()=>{let e=(0,o.useRef)(null),t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,[t,i]=(0,o.useState)({width:0,height:0});return(0,o.useEffect)(()=>{var t;let n;let o=(t=()=>{i({width:window.innerWidth,height:window.innerHeight})},function(){clearTimeout(n),n=setTimeout(()=>{t()},e)});return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),t}(200),i=Math.PI,h=Math.PI/2,l=Math.PI/12,{random:r}=Math,a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[e+i*Math.cos(n),t+i*Math.sin(n)]},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=arguments.length>3?arguments[3]:void 0,o=e.getContext("2d"),h=window.devicePixelRatio||1,l=o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;console.log(n,h,l);let r=n||h/l;return e.style.width="".concat(t,"px"),e.style.height="".concat(i,"px"),e.width=r*t,e.height=r*i,o.scale(r,r),{ctx:o,dpi:r}};return(0,o.useEffect)(()=>{let n=e.current;console.log("windowSize",t);let{ctx:o,dpi:c}=s(n,t.width,t.height),d=n.width,u=n.height,g=[],w=[],f=0,v=(e,t,i)=>{let[n,h]=a(e,t,5*r(),i);o.beginPath(),o.moveTo(e,t),o.lineTo(n,h),o.stroke();let s=i+r()*l,c=i-r()*l;!(n<-100)&&!(n>d+100)&&!(h<-100)&&!(h>u+100)&&((f<=5||r()>.5)&&g.push(()=>v(n,h,s)),(f<=5||r()>.5)&&g.push(()=>v(n,h,c)))},k=()=>{f+=1,w=g,g=[],w.length&&(w.forEach(e=>e()),requestAnimationFrame(k))};f=0,o.clearRect(0,0,d,u),o.lineWidth=1,o.strokeStyle="#77777725",w=[],g=[()=>v(r()*t.width,0,h),()=>v(r()*t.width,t.height,-h),()=>v(0,r()*t.height,0),()=>v(t.width,r()*t.height,i)],t.width<500&&g.slice(0,2),k()},[t]),(0,n.jsx)("canvas",{ref:e,className:"fixed bottom-0 left-0 top-0 right-0 -z-10"})}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=5783)}),_N_E=e.O()}]);