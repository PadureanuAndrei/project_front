"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[592],{783:(_,g,p)=>{function u(n,i,t,o,s,a,r){try{var l=n[a](r),m=l.value}catch(P){return void t(P)}l.done?i(m):Promise.resolve(m).then(o,s)}p.d(g,{N:()=>I});var e=p(7587),d=p(9808);const c=["imageContainer"];function h(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().remove()}),e._UZ(1,"i",4),e.qZA()}}let v=(()=>{class n{constructor(){this.onRemove=new e.vpe,this.canRemove=!1}mouseenter(){this.canRemove=!0}mouseleave(){this.canRemove=!1}ngAfterViewChecked(){this.render()}remove(){this.onRemove.emit()}render(){const t=new Blob([this.image]);this.imageContainer.nativeElement.src=URL.createObjectURL(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-image"]],viewQuery:function(t,o){if(1&t&&e.Gf(c,5),2&t){let s;e.iGM(s=e.CRH())&&(o.imageContainer=s.first)}},hostBindings:function(t,o){1&t&&e.NdJ("mouseenter",function(){return o.mouseenter()})("mouseleave",function(){return o.mouseleave()})},inputs:{image:"image"},outputs:{onRemove:"onRemove"},decls:4,vars:1,consts:[[1,"container"],["imageContainer",""],["class","remove",3,"click",4,"ngIf"],[1,"remove",3,"click"],[1,"fa-solid","fa-trash-can"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",null,1),e.YNc(3,h,2,0,"button",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",o.canRemove))},directives:[d.O5],styles:[".container[_ngcontent-%COMP%]{position:relative;margin:.5rem;display:flex;height:8rem;width:11rem;cursor:pointer;align-items:center;justify-content:center;overflow:hidden;font-size:1.875rem;line-height:2.25rem}img[_ngcontent-%COMP%]{display:flex}.remove[_ngcontent-%COMP%]{background-color:#00000040;position:absolute;top:0px;left:0px;bottom:0px;right:0px;align-items:center;justify-content:center;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.remove[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;padding:.25rem}"]}),n})(),C=(()=>{class n{constructor(){this.onUpload=new e.vpe}upload(){this.onUpload.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-empty-img"]],outputs:{onUpload:"onUpload"},decls:2,vars:0,consts:[[1,"wrapper",3,"click"],[1,"fa-solid","fa-camera"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.upload()}),e._UZ(1,"i",1),e.qZA())},styles:[".wrapper[_ngcontent-%COMP%]{background-color:#f2f4f5;margin:.5rem;display:flex;height:8rem;width:11rem;cursor:pointer;align-items:center;justify-content:center;font-size:1.875rem;line-height:2.25rem}"]}),n})();const y=["file"];function x(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-image",3),e.NdJ("onRemove",function(){const a=e.CHM(t).index;return e.oxw().removeImage(a)}),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(1),e.Q6J("image",t)}}function w(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-empty-img",4),e.NdJ("onUpload",function(){return e.CHM(t),e.oxw().openUploadPopup()}),e.qZA()()}}const U=function(){return[]};let I=(()=>{class n{constructor(){this.multiple=!0,this.images=[],this.size=1,this.uploaded=new e.vpe}upload(t){this.images.push(t),this.size&&this.images.length>this.size&&this.images.splice(0,this.images.length-this.size),this.uploaded.emit(this.images)}removeImage(t){this.images.splice(t,1),this.uploaded.emit(this.images)}openUploadPopup(){this.fileInput.nativeElement.click()}loadFile(){var t=this;return function f(n){return function(){var i=this,t=arguments;return new Promise(function(o,s){var a=n.apply(i,t);function r(m){u(a,o,s,r,l,"next",m)}function l(m){u(a,o,s,r,l,"throw",m)}r(void 0)})}}(function*(){const o=t.fileInput.nativeElement.files;if(o.length){const a=yield o[0].arrayBuffer();t.upload(a)}})()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-photo-upload"]],viewQuery:function(t,o){if(1&t&&e.Gf(y,5),2&t){let s;e.iGM(s=e.CRH())&&(o.fileInput=s.first)}},inputs:{multiple:"multiple",images:"images",size:"size"},outputs:{uploaded:"uploaded"},decls:4,vars:3,consts:[["type","file","hidden","",3,"change"],["file",""],[4,"ngFor","ngForOf"],[3,"image","onRemove"],[3,"onUpload"]],template:function(t,o){1&t&&(e.TgZ(0,"input",0,1),e.NdJ("change",function(){return o.loadFile()}),e.qZA(),e.YNc(2,x,2,1,"div",2),e.YNc(3,w,2,0,"div",2)),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.images),e.xp6(1),e.Q6J("ngForOf",e.DdM(2,U).constructor(o.size-o.images.length)))},directives:[d.sg,v,C],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}"]}),n})()},895:(_,g,p)=>{p.d(g,{xH:()=>d});const e=/^[+]\d+/,d=c=>e.test(c)}}]);