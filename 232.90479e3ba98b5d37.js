"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[232],{9232:(F,d,r)=>{r.r(d),r.d(d,{AnnouncementsModule:()=>b});var u=r(9808),m=r(8330),C=r(4004),f=r(8421),v=r(4482),g=r(5403);function h(e,i){return i?t=>t.pipe(h((o,a)=>(0,f.Xf)(e(o,a)).pipe((0,C.U)((s,p)=>i(o,s,a,p))))):(0,v.e)((t,o)=>{let a=0,s=null,p=!1;t.subscribe((0,g.x)(o,T=>{s||(s=(0,g.x)(o,void 0,()=>{s=null,p&&o.complete()}),(0,f.Xf)(e(T,a++)).subscribe(s))},()=>{p=!0,!s&&o.complete()}))})}var n=r(5e3),x=r(1876),y=r(1135);let l=(()=>{class e{constructor(){this._searchCriteria$=new y.X({})}get searchCriteria$(){return this._searchCriteria$.asObservable()}setSearchCriteria(t){this._searchCriteria$.next(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();var c=r(3075);let A=(()=>{class e{constructor(t,o){this.formBuilder=t,this.searchService=o,this.searchForm=this.formBuilder.group({criteria:"",location:""})}onSubmit(){this.searchService.setSearchCriteria(this.searchForm.value)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.qu),n.Y36(l))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-search-announcement"]],decls:12,vars:1,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"input-container"],[1,"fa-solid","fa-magnifying-glass","icon"],["formControlName","criteria","type","text","placeholder","Criteriu"],[1,"fa-solid","fa-location-dot","icon"],["formControlName","location","type","text","placeholder","Oras"],[1,"button"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return o.onSubmit()}),n.TgZ(2,"div",2),n._UZ(3,"i",3)(4,"input",4),n.qZA(),n.TgZ(5,"div",2),n._UZ(6,"i",5)(7,"input",6),n.qZA(),n.TgZ(8,"button",7)(9,"span"),n._uU(10,"Cauta"),n.qZA(),n._UZ(11,"i",3),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("formGroup",o.searchForm))},directives:[c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;max-width:1200px;margin:0 -15px;padding:30px 0}form[_ngcontent-%COMP%]{display:flex;width:100%}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff;width:100%;padding:10px;border:1px solid #f2f4f5}input[_ngcontent-%COMP%]{display:block;width:100%;margin-left:10px;padding:5px;outline:none}.button[_ngcontent-%COMP%]{display:flex;align-items:center;padding:20px;background-color:#fff;color:#092f34;font-weight:500;transition:.2s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.button[_ngcontent-%COMP%]:hover{background-color:#092f34;color:#fff}"]}),e})();const w=function(e){return["announcements",e]};let Z=(()=>{class e{constructor(t){this.router=t}navigateToAnnouncement(){this.router.navigate([`/announcements/${this.announcement.id}`])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-card"]],hostBindings:function(t,o){1&t&&n.NdJ("mouseclick",function(){return o.navigateToAnnouncement()})},inputs:{announcement:"announcement"},decls:10,vars:7,consts:[[3,"routerLink"],[1,"container"],[1,"image"],[3,"src"],[1,"title"],[1,"address"],[1,"price"]],template:function(t,o){1&t&&(n.TgZ(0,"a",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4),n._uU(5),n.qZA(),n.TgZ(6,"div",5),n._uU(7),n.qZA(),n.TgZ(8,"div",6),n._uU(9),n.qZA()()()),2&t&&(n.Q6J("routerLink",n.VKq(5,w,o.announcement.id)),n.xp6(3),n.Q6J("src",o.announcement.photos[0],n.LSH),n.xp6(2),n.hij(" ",o.announcement.title," "),n.xp6(2),n.hij(" ",o.announcement.address," "),n.xp6(2),n.hij(" ",o.announcement.hourPrice," lei "))},directives:[m.yS],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.5rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);cursor:pointer}.image[_ngcontent-%COMP%]{display:flex;height:15rem;max-height:15rem;align-items:center;justify-content:center;overflow:hidden}.title[_ngcontent-%COMP%]{margin:5px 0 0;line-height:20px;font-size:15px}.address[_ngcontent-%COMP%]{margin:10px 0;font-size:12px;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.price[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700;color:#002f34}"]}),e})();function M(e,i){if(1&e&&(n.ynx(0),n._UZ(1,"app-card",4),n.BQk()),2&e){const t=i.$implicit;n.xp6(1),n.Q6J("announcement",t)}}function S(e,i){if(1&e&&(n.TgZ(0,"div",2),n.YNc(1,M,2,1,"ng-container",3),n.qZA()),2&e){const t=i.ngIf;n.xp6(1),n.Q6J("ngForOf",t)}}const O=[{path:"",component:(()=>{class e{constructor(t,o){this.announcements=t,this.search=o,this.announcements$=this.search.searchCriteria$.pipe(h(a=>this.announcements.getByCriteria(a)))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(x.X),n.Y36(l))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-announcements"]],decls:4,vars:3,consts:[[1,"container"],["class","cards",4,"ngIf"],[1,"cards"],[4,"ngFor","ngForOf"],[3,"announcement"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"app-search-announcement"),n.YNc(2,S,2,1,"div",1),n.ALo(3,"async"),n.qZA()),2&t&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,o.announcements$)))},directives:[A,u.O5,u.sg,Z],pipes:[u.Ov],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;background-color:#f2f4f5}.container[_ngcontent-%COMP%]{max-width:1200px}.cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}app-card[_ngcontent-%COMP%]{margin:5px;min-width:290px;width:290px}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[m.Bz.forChild(O)],m.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[l],imports:[[u.ez,P,c.u5,c.UX]]}),e})()}}]);