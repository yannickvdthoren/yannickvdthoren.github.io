(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{364:function(e,t,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("1dc40884",content,!0,{sourceMap:!1})},365:function(e,t,n){"use strict";n.r(t);var o={name:"Comp-GalleryMobile",props:{images:Array,company:String,type:String},data:function(){return{displayed:0}},methods:{handleClick:function(e,t){"prev"===e&&(0==this.displayed?this.displayed=t-1:this.displayed-=1),"next"===e&&(this.displayed==t-1?this.displayed=0:this.displayed+=1)}}},r=(n(438),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:{mobile__gallery:"mobile"==e.type,desktop__gallery:"desktop"==e.type}},[e.images.length>1?t("button",{staticClass:"prev",on:{click:function(t){return e.handleClick("prev",e.images.length)}}},[t("Chevron")],1):e._e(),e._v(" "),t("ul",{staticClass:"gallery__container"},[e._l(e.images,(function(image){return t("li",{key:e.company+"-"+e.type+"-"+image.id,class:{displayed:e.displayed==image.id}},[t("picture",[t("img",{attrs:{src:n(367)("./images".concat(image.urlx2)),alt:image.alt}})])])})),e._v(" "),"mobile"==e.type?t("Smartphone"):e._e(),e._v(" "),"desktop"==e.type?t("Desktop"):e._e()],2),e._v(" "),e.images.length>1?t("button",{staticClass:"next",on:{click:function(t){return e.handleClick("next",e.images.length)}}},[t("Chevron")],1):e._e()])}),[],!1,null,"5660bc9a",null);t.default=component.exports},366:function(e,t,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("bd50181e",content,!0,{sourceMap:!1})},367:function(e,t,n){var map={"./images/colochousing/activity.jpg":368,"./images/colochousing/activityx2.jpg":369,"./images/colochousing/calendar.jpg":370,"./images/colochousing/calendarx2.jpg":371,"./images/colochousing/chat.jpg":372,"./images/colochousing/chatx2.jpg":373,"./images/colochousing/contract-mob.jpg":374,"./images/colochousing/contract-mobx2.jpg":375,"./images/colochousing/contract.jpg":376,"./images/colochousing/contractx2.jpg":377,"./images/colochousing/dashboard.jpg":378,"./images/colochousing/dashboardx2.jpg":379,"./images/colochousing/homepage-mob.jpg":380,"./images/colochousing/homepage-mobx2.jpg":381,"./images/colochousing/homepage.jpg":382,"./images/colochousing/homepagex2.jpg":383,"./images/colochousing/vote-mob.jpg":384,"./images/colochousing/vote-mobx2.jpg":385,"./images/colochousing/vote.jpg":386,"./images/colochousing/votex2.jpg":387,"./images/dbvious/db1-min.png":388,"./images/dbvious/db2-min.png":389,"./images/dbvious/db3-min.png":390,"./images/dbvious/db4-min.png":391,"./images/dbvious/db5-min.png":392,"./images/easyorderapp/checkout-min.png":393,"./images/easyorderapp/dashboard-min.png":394,"./images/easyorderapp/login-min.png":395,"./images/easyorderapp/orders-thank-you-min.png":396,"./images/easyorderapp/orders-tracking-min.png":397,"./images/easyorderapp/product-min.png":398,"./images/easyorderapp/products-min.png":399,"./images/letelegramme/article-mob.jpg":400,"./images/letelegramme/article-mob2x.jpg":401,"./images/letelegramme/article.jpg":402,"./images/letelegramme/article2x.jpg":403,"./images/letelegramme/boutique.jpg":404,"./images/letelegramme/boutique2x.jpg":405,"./images/letelegramme/carte.jpg":406,"./images/letelegramme/carte2x.jpg":407,"./images/letelegramme/homepage-mob.jpg":408,"./images/letelegramme/homepage-mob2x.jpg":409,"./images/letelegramme/homepage.jpg":410,"./images/letelegramme/homepage2x.jpg":411,"./images/letelegramme/mem-home-mob.jpg":412,"./images/letelegramme/mem-home-mob2x.jpg":413,"./images/letelegramme/mem-home.jpg":414,"./images/letelegramme/mem-home2x.jpg":415,"./images/letelegramme/meteo-mob.jpg":416,"./images/letelegramme/meteo-mob2x.jpg":417,"./images/letelegramme/meteo.jpg":418,"./images/letelegramme/meteo2x.jpg":419,"./images/letelegramme/rando-details.jpg":420,"./images/letelegramme/rando-details2x.jpg":421,"./images/letelegramme/rando-home.jpg":422,"./images/letelegramme/rando-home2x.jpg":423,"./images/og-image.png":424,"./images/punta/explore.png":425,"./images/punta/login.png":426,"./images/punta/profile.png":427,"./images/punta/share.png":428,"./images/punta/travel.png":429,"./images/qr-eats/qr-eats-v2.jpg":430,"./images/qr-eats/qr-eats-v22x.jpg":431,"./images/qr-eats/qr-eats.jpg":432,"./images/qr-eats/qr-eats2x.jpg":433,"./images/rtbf/dashboard1-min.png":434,"./images/rtbf/dashboard2-min.png":435,"./images/rtbf/dashboard3-min.png":436,"./images/rtbf/dashboard4-min.png":437};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=367},368:function(e,t,n){e.exports=n.p+"img/activity.9a16c14.jpg"},369:function(e,t,n){e.exports=n.p+"img/activityx2.f89001c.jpg"},370:function(e,t,n){e.exports=n.p+"img/calendar.f08c467.jpg"},371:function(e,t,n){e.exports=n.p+"img/calendarx2.57a5ca6.jpg"},372:function(e,t,n){e.exports=n.p+"img/chat.1b8518a.jpg"},373:function(e,t,n){e.exports=n.p+"img/chatx2.756eb3a.jpg"},374:function(e,t,n){e.exports=n.p+"img/contract-mob.2067dbd.jpg"},375:function(e,t,n){e.exports=n.p+"img/contract-mobx2.3bb2fd4.jpg"},376:function(e,t,n){e.exports=n.p+"img/contract.628b84f.jpg"},377:function(e,t,n){e.exports=n.p+"img/contractx2.5ee1b9f.jpg"},378:function(e,t,n){e.exports=n.p+"img/dashboard.2c07ac2.jpg"},379:function(e,t,n){e.exports=n.p+"img/dashboardx2.6d75a1a.jpg"},380:function(e,t,n){e.exports=n.p+"img/homepage-mob.016cecc.jpg"},381:function(e,t,n){e.exports=n.p+"img/homepage-mobx2.23b7342.jpg"},382:function(e,t,n){e.exports=n.p+"img/homepage.3b87f85.jpg"},383:function(e,t,n){e.exports=n.p+"img/homepagex2.e3b5a64.jpg"},384:function(e,t,n){e.exports=n.p+"img/vote-mob.3e6bfa3.jpg"},385:function(e,t,n){e.exports=n.p+"img/vote-mobx2.ef196b4.jpg"},386:function(e,t,n){e.exports=n.p+"img/vote.624c902.jpg"},387:function(e,t,n){e.exports=n.p+"img/votex2.45f04a8.jpg"},388:function(e,t,n){e.exports=n.p+"img/db1-min.35c4b29.png"},389:function(e,t,n){e.exports=n.p+"img/db2-min.c2e06aa.png"},390:function(e,t,n){e.exports=n.p+"img/db3-min.1f83406.png"},391:function(e,t,n){e.exports=n.p+"img/db4-min.6ea3b61.png"},392:function(e,t,n){e.exports=n.p+"img/db5-min.dbe4600.png"},393:function(e,t,n){e.exports=n.p+"img/checkout-min.60cead1.png"},394:function(e,t,n){e.exports=n.p+"img/dashboard-min.c65e0ea.png"},395:function(e,t,n){e.exports=n.p+"img/login-min.72ad045.png"},396:function(e,t,n){e.exports=n.p+"img/orders-thank-you-min.52bd845.png"},397:function(e,t,n){e.exports=n.p+"img/orders-tracking-min.609757f.png"},398:function(e,t,n){e.exports=n.p+"img/product-min.71c7761.png"},399:function(e,t,n){e.exports=n.p+"img/products-min.9adaa8e.png"},400:function(e,t,n){e.exports=n.p+"img/article-mob.89a7ce4.jpg"},401:function(e,t,n){e.exports=n.p+"img/article-mob2x.5684baa.jpg"},402:function(e,t,n){e.exports=n.p+"img/article.17fea4d.jpg"},403:function(e,t,n){e.exports=n.p+"img/article2x.62b5ddf.jpg"},404:function(e,t,n){e.exports=n.p+"img/boutique.e6cc245.jpg"},405:function(e,t,n){e.exports=n.p+"img/boutique2x.5abb7c9.jpg"},406:function(e,t,n){e.exports=n.p+"img/carte.d86d6fa.jpg"},407:function(e,t,n){e.exports=n.p+"img/carte2x.7f578b4.jpg"},408:function(e,t,n){e.exports=n.p+"img/homepage-mob.674dc3d.jpg"},409:function(e,t,n){e.exports=n.p+"img/homepage-mob2x.76855e8.jpg"},410:function(e,t,n){e.exports=n.p+"img/homepage.0964df2.jpg"},411:function(e,t,n){e.exports=n.p+"img/homepage2x.00eb817.jpg"},412:function(e,t,n){e.exports=n.p+"img/mem-home-mob.fff5061.jpg"},413:function(e,t,n){e.exports=n.p+"img/mem-home-mob2x.7dea041.jpg"},414:function(e,t,n){e.exports=n.p+"img/mem-home.29e5da1.jpg"},415:function(e,t,n){e.exports=n.p+"img/mem-home2x.2c28962.jpg"},416:function(e,t,n){e.exports=n.p+"img/meteo-mob.3537a2f.jpg"},417:function(e,t,n){e.exports=n.p+"img/meteo-mob2x.7ad37b3.jpg"},418:function(e,t,n){e.exports=n.p+"img/meteo.81b3d9e.jpg"},419:function(e,t,n){e.exports=n.p+"img/meteo2x.c273ad0.jpg"},420:function(e,t,n){e.exports=n.p+"img/rando-details.6f26388.jpg"},421:function(e,t,n){e.exports=n.p+"img/rando-details2x.5ae38ab.jpg"},422:function(e,t,n){e.exports=n.p+"img/rando-home.713900c.jpg"},423:function(e,t,n){e.exports=n.p+"img/rando-home2x.5aadf9d.jpg"},424:function(e,t,n){e.exports=n.p+"img/og-image.a8d5d40.png"},425:function(e,t,n){e.exports=n.p+"img/explore.7555fcd.png"},426:function(e,t,n){e.exports=n.p+"img/login.6b11bcb.png"},427:function(e,t,n){e.exports=n.p+"img/profile.367da2c.png"},428:function(e,t,n){e.exports=n.p+"img/share.d8e83e4.png"},429:function(e,t,n){e.exports=n.p+"img/travel.601b50d.png"},430:function(e,t,n){e.exports=n.p+"img/qr-eats-v2.4a6967e.jpg"},431:function(e,t,n){e.exports=n.p+"img/qr-eats-v22x.cff2183.jpg"},432:function(e,t,n){e.exports=n.p+"img/qr-eats.2342d02.jpg"},433:function(e,t,n){e.exports=n.p+"img/qr-eats2x.289630b.jpg"},434:function(e,t,n){e.exports=n.p+"img/dashboard1-min.e61e371.png"},435:function(e,t,n){e.exports=n.p+"img/dashboard2-min.2b516dd.png"},436:function(e,t,n){e.exports=n.p+"img/dashboard3-min.0a22984.png"},437:function(e,t,n){e.exports=n.p+"img/dashboard4-min.9a267b5.png"},438:function(e,t,n){"use strict";n(364)},439:function(e,t,n){var o=n(31)((function(i){return i[1]}));o.push([e.i,'div[data-v-5660bc9a]{grid-gap:8px;gap:8px;grid-template-areas:"prev gallery next";grid-template-columns:36px 1fr 36px}button[data-v-5660bc9a],div[data-v-5660bc9a]{align-items:center;display:grid}button[data-v-5660bc9a]{background:transparent;border:none;border-radius:50%;color:var(--blue);cursor:pointer;height:36px;justify-items:center;place-items:center;transition:var(--ease);width:36px}@media (hover:hover){button[data-v-5660bc9a]:hover{background:var(--blue);color:var(--white)}}.prev[data-v-5660bc9a]{grid-area:prev;transform:rotate(180deg)}.gallery__container[data-v-5660bc9a]{grid-area:gallery}.next[data-v-5660bc9a]{grid-area:next}ul[data-v-5660bc9a]{align-items:stretch;display:grid;overflow:scroll;position:relative}.mobile__gallery ul[data-v-5660bc9a]{height:584.831px;width:294.394px}.desktop__gallery ul[data-v-5660bc9a]{height:612px;width:914px}ul>*[data-v-5660bc9a]{grid-area:1/1/2/2}li[data-v-5660bc9a]{display:none}.mobile__gallery li[data-v-5660bc9a]{border-radius:20px;margin:34px 15px 15px}.desktop__gallery li[data-v-5660bc9a]{border-radius:0 0 25px 25px;margin:36px 8px 0}li.displayed[data-v-5660bc9a]{animation:fadeIn-5660bc9a .6s ease-in-out forwards;display:block}@keyframes fadeIn-5660bc9a{0%{opacity:0}to{opacity:1}}ul svg[data-v-5660bc9a]{position:sticky;top:0;z-index:10}@media screen and (max-width:600px){.desktop__gallery ul[data-v-5660bc9a],.desktop__gallery ul svg[data-v-5660bc9a]{height:218px;width:324px}.mobile__gallery ul[data-v-5660bc9a],.mobile__gallery ul svg[data-v-5660bc9a]{height:496px;width:250px}button[data-v-5660bc9a]{height:42px;width:42px}}@media (min-width:601px) and (max-width:900px){.desktop__gallery ul[data-v-5660bc9a],.desktop__gallery ul svg[data-v-5660bc9a]{height:364px;width:550px}}',""]),o.locals={},e.exports=o},440:function(e,t,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("e658ab84",content,!0,{sourceMap:!1})},441:function(e,t,n){"use strict";n.r(t);var o={name:"Header"},r=(n(442),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"grid"},[t("div",{staticClass:"content"},[t("h1",[e._v("Yannick Vandenthoren.")]),e._v(" "),t("ul",{staticClass:"social"},[t("li",[t("a",{attrs:{href:"https://www.linkedin.com/in/yannickvdthoren/"}},[t("Linkedin")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yannickvdthoren/"}},[t("Github")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dribbble.com/yannickvdthoren"}},[t("Dribbble")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.instagram.com/littlejohntower/"}},[t("Instagram")],1)])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"buttons"},[t("a",{staticClass:"btn btn--outline",attrs:{href:"mailto:yannickvdthoren@gmail.com"}},[t("Send"),e._v(" Send me an email\n      ")],1),e._v(" "),t("a",{staticClass:"btn btn--inverted",attrs:{href:"/2021-Yannick-Vandenthoren-resume.pdf",download:""}},[t("Download"),e._v(" Download my resume\n      ")],1)])])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("\n      I’m a passionate "),t("strong",[e._v("Product Designer")]),e._v(" and\n      "),t("strong",[e._v("Full Stack Developer")]),e._v(" adept at unlocking the full\n      potential of my clients - often in dire need of a great design, a solid\n      UX or even a full redesign. See\n      "),t("a",{attrs:{href:"https://www.linkedin.com/in/yannickvdthoren/"}},[e._v("what they say about my work")]),e._v(".\n    ")])}],!1,null,"2af1e938",null);t.default=component.exports;installComponents(component,{Header:n(441).default})},442:function(e,t,n){"use strict";n(366)},443:function(e,t,n){var o=n(31)((function(i){return i[1]}));o.push([e.i,'header[data-v-2af1e938]{align-items:center;height:100vh;justify-items:center;place-items:center}.content[data-v-2af1e938]{grid-gap:24px;align-items:baseline;display:grid;grid-area:1/3/2/11;grid-template-areas:"title link" "desc desc" "button button";grid-template-columns:1fr 1fr;justify-items:baseline;place-items:baseline}h1[data-v-2af1e938]{grid-area:title}ul[data-v-2af1e938]{align-self:end;gap:8px;grid-area:link;justify-self:center}li a[data-v-2af1e938],ul[data-v-2af1e938]{align-items:center;display:flex}li a[data-v-2af1e938]{border-radius:50%;height:32px;justify-content:center;width:32px}li a svg[data-v-2af1e938]{width:16px}p[data-v-2af1e938]{grid-area:desc;max-width:65ch}.buttons[data-v-2af1e938]{display:flex;flex-wrap:wrap;gap:16px;grid-area:button;margin-top:24px}@media screen and (max-width:900px){.content[data-v-2af1e938]{grid-template-areas:"title" "link" "desc" "button";grid-template-columns:1fr}}',""]),o.locals={},e.exports=o},444:function(e,t,n){"use strict";n(440)},445:function(e,t,n){var o=n(31)((function(i){return i[1]}));o.push([e.i,".grid[data-v-26b8943f]{align-items:center;justify-items:center;min-height:100vh;place-items:center}.article[data-v-26b8943f]{margin-bottom:120px}h2[data-v-26b8943f]{margin-bottom:24px}h2.website[data-v-26b8943f]{margin-bottom:8px}p.website[data-v-26b8943f]{margin-bottom:24px}p[data-v-26b8943f]{margin-bottom:16px}.desktop__input:checked~.gallery .desktop__gallery[data-v-26b8943f],.mobile__input:checked~.gallery .mobile__gallery[data-v-26b8943f]{display:grid}.desktop__input:checked~.gallery .mobile__gallery[data-v-26b8943f],.mobile__input:checked~.gallery .desktop__gallery[data-v-26b8943f]{display:none}@media (min-width:601px) and (max-width:900px){.article[data-v-26b8943f]{margin:0 auto 120px;max-width:60ch}}@media screen and (min-width:901px){.description[data-v-26b8943f]{grid-area:1/2/2/8}.gallery[data-v-26b8943f]{grid-area:1/9/2/12}.desktop__input:checked~.description[data-v-26b8943f]{grid-area:1/2/2/12;min-height:0}.desktop__input:checked~.gallery[data-v-26b8943f]{grid-area:2/2/3/12}.desktop__input:checked~.description .left[data-v-26b8943f]{grid-area:1/1/2/5}.desktop__input:checked~.description .right[data-v-26b8943f]{grid-area:1/5/2/13}}.gallery[data-v-26b8943f]{align-items:center;display:grid;justify-items:center;place-items:center}.gallery svg[data-v-26b8943f]{align-items:stretch;height:auto;width:100%}.gallery__ctrls[data-v-26b8943f]{display:flex;grid-area:2/1/3/2;justify-content:center;margin-top:24px}.gallery__ctrls label[data-v-26b8943f]{align-items:center;background:#fff;border:2px solid var(--blue);color:var(--blue);cursor:pointer;display:flex;font-size:var(--s);justify-content:center;padding:8px 16px;transition:var(--ease)}.gallery__ctrls label svg[data-v-26b8943f]{height:auto;margin-right:8px;width:14px}.desktop__input:checked~.gallery .gallery__ctrls .desktop__btn[data-v-26b8943f],.mobile__input:checked~.gallery .gallery__ctrls .mobile__btn[data-v-26b8943f]{background:var(--blue);color:var(--white)}",""]),o.locals={},e.exports=o},447:function(e,t,n){"use strict";n.r(t);n(38),n(51);var o={name:"list",components:{Gallery:n(365).default},props:{articles:{type:Array}}},r=(n(444),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("ul",e._l(e.articles,(function(article){return t("li",{key:article.slug,staticClass:"grid article",attrs:{id:article.slug}},[t("input",{staticClass:"mobile__input",attrs:{type:"radio",name:"gallery"+article.slug,id:"mob"+article.slug,checked:"",hidden:""}}),e._v(" "),t("input",{staticClass:"desktop__input",attrs:{type:"radio",name:"gallery"+article.slug,id:"des"+article.slug,hidden:""}}),e._v(" "),!article.mobile&&article.desktop?t("input",{staticClass:"desktop__input",attrs:{type:"radio",name:"gallery"+article.slug,id:"des"+article.slug,checked:"",hidden:""}}):e._e(),e._v(" "),t("div",{staticClass:"description"},[t("div",{staticClass:"left"},[article.suptitle?t("h4",{domProps:{innerHTML:e._s(article.suptitle)}}):e._e(),e._v(" "),t("h2",{class:{website:article.website}},[e._v(e._s(article.title))]),e._v(" "),article.website?t("p",{staticClass:"website"},[t("a",{attrs:{href:article.websiteURL}},[e._v(e._s(article.website))])]):e._e(),e._v(" "),article.role?t("h3",[e._v("Role")]):e._e(),e._v(" "),article.role?t("p",{staticClass:"role margin"},[e._v(e._s(article.role))]):e._e(),e._v(" "),t("h3",[e._v("Description")]),e._v(" "),t("p",{staticClass:"margin"},[e._v(e._s(article.description))])]),e._v(" "),t("div",{staticClass:"right"},[article.mission?t("h3",[e._v("Mission")]):e._e(),e._v(" "),article.mission?t("p",{domProps:{innerHTML:e._s(article.mission)}}):e._e()])]),e._v(" "),t("div",{staticClass:"gallery"},[article.mobile?t("Gallery",{attrs:{images:article.mobile,company:article.project,type:"mobile"}}):e._e(),e._v(" "),article.desktop?t("Gallery",{attrs:{images:article.desktop,company:article.project,type:"desktop"}}):e._e(),e._v(" "),article.desktop&&article.mobile?t("div",{staticClass:"gallery__ctrls"},[t("label",{staticClass:"mobile__btn",attrs:{for:"mob"+article.slug}},[t("MobileIcon"),e._v(" Mobile\n        ")],1),e._v(" "),t("label",{staticClass:"desktop__btn",attrs:{for:"des"+article.slug}},[t("DesktopIcon"),e._v(" Dekstop\n        ")],1)]):e._e()],1)])})),0)}),[],!1,null,"26b8943f",null);t.default=component.exports;installComponents(component,{Gallery:n(365).default})},465:function(e,t,n){"use strict";n.r(t);var o=n(10),r=(n(53),n(441)),l=(n(447),{name:"index",components:{Header:r.default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("work").sortBy("position","desc").fetch();case 3:return o=t.sent,t.next=6,n("side-project").sortBy("position","asc").fetch();case 6:return r=t.sent,t.abrupt("return",{works:o,side:r});case 8:case"end":return t.stop()}}),t)})))()}}),c=n(3),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("main",[t("Header"),e._v(" "),t("List",{attrs:{articles:e.works}}),e._v(" "),t("List",{attrs:{articles:e.side}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(441).default,List:n(447).default})}}]);