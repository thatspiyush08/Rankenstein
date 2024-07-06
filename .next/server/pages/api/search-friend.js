"use strict";(()=>{var e={};e.id=586,e.ids=[586],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4825:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>c,routeModule:()=>d});var a=r(1802),o=r(7153),s=r(6249),i=r(8206),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,s.l)(i,"default"),l=(0,s.l)(i,"config"),d=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/search-friend",pathname:"/api/search-friend",bundlePath:"",filename:""},userland:i});n()}catch(e){n(e)}})},8206:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>c});var a=r(9648),o=e([a]);async function s(e,t){try{let r=await a.default.get("https://codeforces.com/api/contest.standings",{params:{contestId:e,handles:t,showUnofficial:!1}});if(0===r.data.result.rows.length)return null;let n=r.data.result.rows[0];return{rank:n.rank,points:n.points}}catch(e){return console.error("Error fetching user standing:",e),null}}async function i(e){try{let t=await a.default.get("https://codeforces.com/api/user.info",{params:{handles:e}});if(t.data.result.length>0)return t.data.result[0].rating||1500;return 1500}catch(e){return console.error("Error fetching user rating:",e),1500}}async function u(e){try{let t=0,r=1;for(;;){let n=(await a.default.get("https://codeforces.com/api/contest.standings",{params:{contestId:e,from:r,count:1e4,showUnofficial:!1}})).data.result.rows;if(t+=n.length,n.length<1e4)break;r+=1e4}return t}catch(e){return console.error("Error fetching total participants:",e),0}}async function c(e,t){let{contestId:r,query:n}=e.query;if(!r||!n)return t.status(400).json({error:"Invalid request: contestId and query are required"});try{var a;let[e,o,c]=await Promise.all([s(r,n),i(n),u(r)]);if(!e)return t.status(404).json({error:`User ${n} not found in contest ${r}`});let l=(a=e.rank,Math.round((o+400*Math.log10(c/(1+Math.pow(10,(1500-o)/400))/a)-o)/2));t.status(200).json({username:n,rank:e.rank,points:e.points,currentRating:o,predictedRatingChange:l})}catch(e){console.error("Error searching for friend:",e),t.status(500).json({error:"Internal server error",details:e.message})}}a=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=4825);module.exports=r})();