"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[664],{2664:(O,p,i)=>{i.r(p),i.d(p,{AccountModule:()=>T});var l=i(9808),s=i(522),t=i(7587);const m=function(){return["settings"]},u=function(){return["my-bookings"]},d=function(){return["my-announcements"]};let g=(()=>{class o{constructor(){this.active=null}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-navbar"]],decls:11,vars:6,consts:[[1,"wrapper"],[1,"links"],["routerLinkActive","active-link",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li")(3,"a",2),t._uU(4,"Setari"),t.qZA()(),t.TgZ(5,"li")(6,"a",2),t._uU(7,"Rezervarile mele"),t.qZA()(),t.TgZ(8,"li")(9,"a",2),t._uU(10,"Anunturile mele"),t.qZA()()()()),2&n&&(t.xp6(3),t.Q6J("routerLink",t.DdM(3,m)),t.xp6(3),t.Q6J("routerLink",t.DdM(4,u)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,d)))},directives:[s.yS,s.Od],styles:["ul[_ngcontent-%COMP%]{display:flex}a[_ngcontent-%COMP%]{display:block;border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:rgb(156 163 175 / var(--tw-border-opacity));padding:1rem 2rem;font-weight:300;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}a.active-link[_ngcontent-%COMP%]{border-bottom-width:2px;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity));font-weight:700;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}"]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account"]],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-navbar")(2,"router-outlet"),t.qZA())},directives:[g,s.lC],styles:[".wrapper[_ngcontent-%COMP%]{margin:auto;margin-top:.75rem;margin-bottom:.75rem;display:flex;flex-direction:column;max-width:1200px}"]}),o})();var b=i(9300),h=i(4004),C=i(4351),v=i(5698),a=i(3075),w=i(263),x=i(358),M=i(783);const A=[{path:"",component:f,children:[{path:"settings",component:(()=>{class o{constructor(n,r,c){this.formBuilder=n,this.auth=r,this.users=c,this.form=this.formBuilder.group({email:"",name:"",password:"",phoneNumber:""}),this.img=null}changeImg(n){this.img=n[0]}submit(){const n={};this.img&&(n.photo=function y(o){const e=new Int8Array(o);let n="";for(let r of e)n+=String.fromCharCode(r);return n}(this.img));const r=this.form.value;r.email&&(n.email=r.email),r.name&&(n.name=r.name),r.password&&(n.password=r.password),r.phoneNumber&&(n.phoneNumber=r.phoneNumber),this.auth.currentUser$.pipe((0,b.h)(c=>null!==c),(0,h.U)(({id:c})=>c),(0,C.b)(c=>this.users.updateUser(c,n)),(0,v.q)(1)).subscribe(()=>console.log("Updated"))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.qu),t.Y36(w.e),t.Y36(x.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-settings"]],decls:12,vars:1,consts:[[1,"container"],[1,"title"],[1,"form",3,"formGroup","ngSubmit"],["type","text","placeholder","Email","formControlName","email",1,"input"],["type","text","placeholder","Nume utilizator","formControlName","name",1,"input"],["type","text","placeholder","Telefon","formControlName","phoneNumber",1,"input"],["type","password","placeholder","Password","formControlName","password",1,"input"],[1,"photos"],[3,"uploaded"],[1,"button"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Actualizare Profil"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return r.submit()}),t._UZ(4,"input",3)(5,"input",4)(6,"input",5)(7,"input",6),t.TgZ(8,"div",7)(9,"app-photo-upload",8),t.NdJ("uploaded",function(N){return r.changeImg(N)}),t.qZA()(),t.TgZ(10,"button",9),t._uU(11,"Actualizare"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",r.form))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,M.N],styles:["[_nghost-%COMP%]{margin-top:5rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]{display:flex;max-width:32rem;flex-direction:column;border-radius:.25rem;border-width:1px;padding:2.5rem}.title[_ngcontent-%COMP%]{text-align:center}.input[_ngcontent-%COMP%]{margin-top:1.25rem;margin-bottom:1.25rem;display:block;width:100%;border-radius:.25rem;border-width:1px;padding:.5rem;font-size:.875rem;line-height:1.25rem}.input.wrong[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.input[_ngcontent-%COMP%]:focus{outline-width:0px}.button[_ngcontent-%COMP%]{margin-top:2.5rem;display:block;width:100%;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity));padding:.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.button[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}app-photo-upload[_ngcontent-%COMP%]{margin:auto;display:inline-flex;border-width:1px}.photos[_ngcontent-%COMP%]{text-align:center}"]}),o})()},{path:"my-announcements",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-my-announcements"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"my-announcements works!"),t.qZA())},styles:[""]}),o})()},{path:"my-bookings",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-my-bookings"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"my-bookings works!"),t.qZA())},styles:[""]}),o})()},{path:"**",redirectTo:"settings"}]}];let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),o})();var Z=i(8163);let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,k,Z.q,a.UX]]}),o})()}}]);