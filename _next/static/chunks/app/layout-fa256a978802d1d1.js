(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8545:function(e,t,i){Promise.resolve().then(i.bind(i,1587)),Promise.resolve().then(i.t.bind(i,8877,23)),Promise.resolve().then(i.t.bind(i,7822,23)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.t.bind(i,3247,23)),Promise.resolve().then(i.t.bind(i,8589,23))},1587:function(e,t,i){"use strict";i.d(t,{default:function(){return r}});var n=i(7437),o=i(2265),r=()=>{let e=(0,o.useRef)(null),t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,[t,i]=(0,o.useState)({width:0,height:0});return(0,o.useEffect)(()=>{var t;let n;let o=(t=()=>{i({width:window.innerWidth,height:window.innerHeight})},function(){clearTimeout(n),n=setTimeout(()=>{t()},e)});return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),t}(200),i=Math.PI,r=Math.PI/2,h=Math.PI/12,{random:l}=Math,a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return[e+i*Math.cos(n),t+i*Math.sin(n)]},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=arguments.length>3?arguments[3]:void 0,o=e.getContext("2d"),r=window.devicePixelRatio||1,h=o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;console.log(n,r,h);let l=n||r/h;return e.style.width="".concat(t,"px"),e.style.height="".concat(i,"px"),e.width=l*t,e.height=l*i,o.scale(l,l),{ctx:o,dpi:l}};return(0,o.useEffect)(()=>{let n=e.current;console.log("windowSize",t);let{ctx:o,dpi:c}=s(n,t.width,t.height),d=n.width,u=n.height,f=[],g=[],w=0,m=performance.now(),v=(e,t,i)=>{let[n,r]=a(e,t,5*l(),i);o.beginPath(),o.moveTo(e,t),o.lineTo(n,r),o.stroke();let s=i+l()*h,c=i-l()*h;!(n<-100)&&!(n>d+100)&&!(r<-100)&&!(r>u+100)&&((w<=5||l()>.5)&&f.push(()=>v(n,r,s)),(w<=5||l()>.5)&&f.push(()=>v(n,r,c)))},b=()=>{if(performance.now()-m<25){requestAnimationFrame(b);return}w+=1,g=f,f=[],m=performance.now(),g.length&&(g.forEach(e=>e()),requestAnimationFrame(b))};w=0,o.clearRect(0,0,d,u),o.lineWidth=1,o.strokeStyle="#77777725",g=[],f=[()=>v(l()*t.width,0,r),()=>v(l()*t.width,t.height,-r),()=>v(0,l()*t.height,0),()=>v(t.width,l()*t.height,i)],t.width<500&&f.slice(0,2),b()},[t]),(0,n.jsx)("canvas",{ref:e,className:"fixed bottom-0 left-0 top-0 right-0 -z-10"})}},8877:function(){},7822:function(){},8589:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_ba72a5', '__Inter_Fallback_ba72a5'",fontStyle:"normal"},className:"__className_ba72a5"}}},function(e){e.O(0,[376,231,971,23,744],function(){return e(e.s=8545)}),_N_E=e.O()}]);