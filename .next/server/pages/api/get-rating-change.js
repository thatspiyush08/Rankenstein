"use strict";(()=>{var t={};t.id=25,t.ids=[25],t.modules={145:t=>{t.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:t=>{t.exports=import("axios")},6249:(t,e)=>{Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function t(e,r){return r in e?e[r]:"then"in e&&"function"==typeof e.then?e.then(e=>t(e,r)):"function"==typeof e&&"default"===r?e:void 0}}})},8135:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.r(e),r.d(e,{config:()=>l,default:()=>u,routeModule:()=>d});var a=r(1802),o=r(7153),s=r(6249),i=r(9186),c=t([i]);i=(c.then?(await c)():c)[0];let u=(0,s.l)(i,"default"),l=(0,s.l)(i,"config"),d=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/get-rating-change",pathname:"/api/get-rating-change",bundlePath:"",filename:""},userland:i});n()}catch(t){n(t)}})},9186:(t,e,r)=>{r.a(t,async(t,n)=>{try{r.r(e),r.d(e,{default:()=>u});var a=r(9648),o=t([a]);async function s(t){try{let e=await a.default.get("https://codeforces.com/api/user.info",{params:{handles:t}});if(e.data.result.length>0)return e.data.result[0].rating||1500;return 1500}catch(t){return console.error("Error fetching user rating:",t),1500}}async function i(t,e){try{let r=await a.default.get("https://codeforces.com/api/contest.standings",{params:{contestId:t,handles:e,showUnofficial:!1}});if(0===r.data.result.rows.length)return null;let n=r.data.result.rows[0];return{rank:n.rank,points:n.points}}catch(t){return console.error("Error fetching user standing:",t),null}}async function c(t){try{let e=0,r=1;for(;;){let n=(await a.default.get("https://codeforces.com/api/contest.standings",{params:{contestId:t,from:r,count:1e4,showUnofficial:!1}})).data.result.rows;if(e+=n.length,n.length<1e4)break;r+=1e4}return e}catch(t){return console.error("Error fetching total participants:",t),0}}async function u(t,e){let{contestId:r,username:n}=t.body;if(!r||!n)return e.status(400).json({error:"Invalid request: contestId and username are required"});try{var a;let[t,o,u]=await Promise.all([s(n),i(r,n),c(r)]);if(!o)return e.status(404).json({error:`User ${n} not found in contest ${r}`});let l=(a=o.rank,Math.round((t+400*Math.log10(u/(1+Math.pow(10,(1500-t)/400))/a)-t)/2));e.json({username:n,ratingChange:l,currentRating:t,rank:o.rank,points:o.points,totalParticipants:u})}catch(t){console.error("Error calculating rating change:",t),e.status(500).json({error:"Internal server error",details:t.message})}}a=(o.then?(await o)():o)[0],n()}catch(t){n(t)}})},7153:(t,e)=>{var r;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return r}}),function(t){t.PAGES="PAGES",t.PAGES_API="PAGES_API",t.APP_PAGE="APP_PAGE",t.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(t,e,r)=>{t.exports=r(145)}};var e=require("../../webpack-api-runtime.js");e.C(t);var r=e(e.s=8135);module.exports=r})();