"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[348],{4348:(v,u,r)=>{r.r(u),r.d(u,{UploadModule:()=>b});var s=r(9808),l=r(522),o=r(7587),a=r(3075),m=r(1876),c=r(783);const g=[{path:"",component:(()=>{class t{constructor(n,e){this.formBuilder=n,this.announcementService=e,this.uploadForm=this.formBuilder.group({description:"",title:""}),this.images=[]}saveImages(n){this.images=n}onSubmit(){const n=this.images.map(t.imgContent),e=Object.assign(Object.assign({},this.uploadForm.value),{photos:n,address:"Prin Romania",hourPrice:200});console.log(e),this.announcementService.create(e).subscribe()}static imgContent(n){const e=new Int8Array(n);let d="";for(let p of e)d+=String.fromCharCode(p);return d}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(a.qu),o.Y36(m.X))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-upload"]],decls:19,vars:2,consts:[[1,"wrapper"],[1,"title"],[1,"form__wrapper"],[3,"formGroup","ngSubmit"],[1,"input"],[1,"input__title"],["type","text","formControlName","title"],[1,"images"],[3,"size","uploaded"],["formControlName","description"],[1,"button","button--important"]],template:function(n,e){1&n&&(o.TgZ(0,"div",0)(1,"h1",1),o._uU(2,"Public\u0103 un anun\u021b"),o.qZA(),o.TgZ(3,"div",2)(4,"form",3),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(5,"div",4)(6,"div",5),o._uU(7," Adauga titlu "),o.qZA(),o._UZ(8,"input",6),o.qZA(),o.TgZ(9,"div",7)(10,"div"),o._uU(11,"Imagini"),o.qZA(),o.TgZ(12,"app-photo-upload",8),o.NdJ("uploaded",function(p){return e.saveImages(p)}),o.qZA()(),o.TgZ(13,"div",4)(14,"div",5),o._uU(15,"Descriere"),o.qZA(),o._UZ(16,"textarea",9),o.qZA(),o.TgZ(17,"button",10),o._uU(18,"Adauga anuntul"),o.qZA()()()()),2&n&&(o.xp6(4),o.Q6J("formGroup",e.uploadForm),o.xp6(8),o.Q6J("size",6))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,c.N],styles:[".wrapper[_ngcontent-%COMP%]{max-width:1200px;margin:40px auto 0}.title[_ngcontent-%COMP%]{margin-bottom:1.25rem;font-size:2.25rem;line-height:2.5rem;font-weight:700}.form__wrapper[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.25rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}form[_ngcontent-%COMP%]{max-width:600px}.input[_ngcontent-%COMP%]{margin-bottom:1.25rem}input[_ngcontent-%COMP%]{display:block;width:100%;border-bottom-width:2px;border-color:transparent;padding:.5rem;background-color:#f2f4f5}input[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(22 78 99 / var(--tw-border-opacity));outline-width:0px}textarea[_ngcontent-%COMP%]{display:block;height:15rem;width:100%;border-bottom-width:2px;border-color:transparent;padding:.5rem;background-color:#f2f4f5}.images[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}textarea[_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(22 78 99 / var(--tw-border-opacity));outline-width:0px}.button[_ngcontent-%COMP%]{margin-left:35px;font-weight:500;transition:.1s}.button--important[_ngcontent-%COMP%]{padding:15px;background-color:#fff;color:#002f34;border-radius:5px;outline:4px solid #002f34}.button--important[_ngcontent-%COMP%]:hover{background-color:#002f34;color:#fff;outline:4px solid white}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.Bz.forChild(g)],l.Bz]}),t})();var h=r(8163);let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,f,h.q,a.UX]]}),t})()}}]);