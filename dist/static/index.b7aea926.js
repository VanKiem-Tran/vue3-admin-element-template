var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,c=(e,l)=>{for(var a in l||(l={}))t.call(l,a)&&d(e,a,l[a]);if(o)for(var a of o(l))r.call(l,a)&&d(e,a,l[a]);return e},p=(e,o)=>l(e,a(o));import{_ as s}from"./index.f90a1527.js";import{P as m}from"./index.812c3953.js";import{af as n,ap as u,ah as i,o as f,a as y,a6 as h,Q as b,Y as g,ad as _,_ as v,b as V,$ as k,a4 as x,a7 as j}from"./vendor.94a742b5.js";const w={name:"Xgplayer",props:{options:{type:Object,default:()=>({})}},setup(e){const l=n({player:null});return u((()=>{l.player=new m(p(c({id:"xgplayer",lang:"zh-cn",crossOrigin:!0},e.options),{playbackRate:[.5,.75,1,1.5,2],danmu:{comments:[{duration:15e3,id:"1",start:3e3,txt:"1111",style:{color:"#ff9500"}}],area:{start:0,end:1}}})),l.player.emit("resourceReady",[{name:"超清",url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"},{name:"高清",url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4"},{name:"标清",url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4"}]),l.player.on("error",(function(e){}))})),c({},i(l))}},O={id:"xgplayer"};w.render=function(e,l,a,o,t,r){return f(),y("div",O)};const P={components:{Descrition:s,VideoPlayer:w},setup(){const e=h(null),l=n({reload:!0,type:"MP4",checkform:{url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",width:"auto",height:400,poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",autoplay:!1,volume:.6}});return p(c({},i(l)),{player:e,onSubmit:()=>{Object.assign(e.value.player.config,l.checkform),l.reload=!1,_((()=>{l.reload=!0}))},formatTooltip:e=>e/10})}},U=x();b("data-v-1e244b00");const S={class:"video-wrapper"},D=j(" Vue3-admin 推荐使用 "),M=V("a",{href:"https://v2.h5player.bytedance.com/gettingStarted/",target:"_blank"},"Xgplayer",-1),L=j(" 作为视频播放器, 一款带解析器、能节省流量的HTML5视频播放器 "),X={class:"video-body"},z=j("运行");g();const C=U(((e,l,a,o,t,r)=>{const d=v("Descrition"),c=v("el-radio"),p=v("el-radio-group"),s=v("el-form-item"),m=v("el-input"),n=v("el-switch"),u=v("el-slider"),i=v("el-button"),h=v("el-form"),b=v("el-col"),g=v("VideoPlayer"),_=v("el-row");return f(),y("div",S,[V(d,{title:"视频播放器 Xgplayer"},{descrition:U((()=>[D,M,L])),_:1}),V("div",X,[V(d,{title:"演示",showDesc:!1}),V(_,{gutter:10},{default:U((()=>[V(b,{xs:24,sm:24,md:10,lg:10,xl:10},{default:U((()=>[V(h,{ref:"form",model:e.checkform,"label-width":"80px"},{default:U((()=>[V(s,{label:"播放格式"},{default:U((()=>[V(p,{modelValue:e.type,"onUpdate:modelValue":l[1]||(l[1]=l=>e.type=l)},{default:U((()=>[V(c,{label:"MP4"}),V(c,{label:"HLS"}),V(c,{label:"FLV"})])),_:1},8,["modelValue"])])),_:1}),V(s,{label:"播放地址"},{default:U((()=>[V(m,{modelValue:e.checkform.url,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkform.url=l),placeholder:"请输入播放地址"},null,8,["modelValue"])])),_:1}),V(s,{label:"视频宽度"},{default:U((()=>[V(m,{modelValue:e.checkform.width,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkform.width=l),placeholder:"请输入视频宽度"},null,8,["modelValue"])])),_:1}),V(s,{label:"视频高度"},{default:U((()=>[V(m,{modelValue:e.checkform.height,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkform.height=l),placeholder:"请输入视频高度"},null,8,["modelValue"])])),_:1}),V(s,{label:"视频封面"},{default:U((()=>[V(m,{modelValue:e.checkform.poster,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkform.poster=l),placeholder:"请输入视频封面"},null,8,["modelValue"])])),_:1}),V(s,{label:"自动播放"},{default:U((()=>[V(n,{modelValue:e.checkform.autoplay,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkform.autoplay=l),"active-color":"#13ce66","inactive-color":"#e4e7ed"},null,8,["modelValue"])])),_:1}),V(s,{label:"预设音量"},{default:U((()=>[V(u,{modelValue:e.checkform.volume,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkform.volume=l),step:.1,max:1,"show-stops":""},null,8,["modelValue","step"])])),_:1}),V(s,null,{default:U((()=>[V(i,{type:"primary",icon:"el-icon-play",size:"small",onClick:o.onSubmit},{default:U((()=>[z])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),V(b,{xs:24,sm:24,md:14,lg:14,xl:14},{default:U((()=>[e.reload?(f(),y(g,{key:0,ref:"player",options:e.checkform,class:"video-player"},null,8,["options"])):k("",!0)])),_:1})])),_:1})])])}));P.render=C,P.__scopeId="data-v-1e244b00";export{P as default};
