(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{R2vX:function(n,t,e){"use strict";e.r(t),e.d(t,"PostContentPageModule",(function(){return P}));var o=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),g=e("tyNb"),r=e("fXoL"),p=e("rRxC");function a(n,t){if(1&n&&(r.Mb(0),r.Ob(1,"ion-slide"),r.Kb(2,"ion-img",12),r.Nb(),r.Lb()),2&n){const n=t.$implicit;r.zb(2),r.fc("src","data:image/jpeg;base64,",n,"")}}const O=[{path:"",component:(()=>{class n{constructor(n,t,e){this.activatedRoute=n,this.serviceService=t,this.location=e,this.slideOpts={loop:!0,lazy:!0}}ngOnInit(){console.log(this.serviceService)}goBack(){this.location.back()}postValue(){this.serviceService.pushValue()}}return n.\u0275fac=function(t){return new(t||n)(r.Jb(g.a),r.Jb(p.a),r.Jb(o.g))},n.\u0275cmp=r.Db({type:n,selectors:[["app-post-content"]],decls:24,vars:6,consts:[[1,"flex"],["name","arrow-back",3,"click"],["name","share"],["pager","true",3,"options"],[4,"ngFor","ngForOf"],[1,"pricing"],[1,"margin-left-0"],["src","../../assets/icon/rupee.svg",1,"rupee"],[1,"title"],[1,"value"],[1,"description"],["routerLink","/members/tab1","routerDirection","forward",1,"fix-button",3,"click"],[3,"src"]],template:function(n,t){1&n&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"div",0),r.Ob(3,"ion-icon",1),r.Wb("click",(function(){return t.goBack()})),r.Nb(),r.Kb(4,"ion-icon",2),r.Nb(),r.Nb(),r.Nb(),r.Ob(5,"ion-content"),r.Ob(6,"ion-slides",3),r.mc(7,a,3,1,"ng-container",4),r.Nb(),r.Ob(8,"div",5),r.Ob(9,"h2"),r.Ob(10,"span",6),r.Kb(11,"ion-img",7),r.nc(12),r.Nb(),r.Nb(),r.Ob(13,"p",8),r.nc(14),r.Nb(),r.Ob(15,"p",9),r.nc(16),r.Nb(),r.Nb(),r.Ob(17,"div",10),r.Ob(18,"h3"),r.nc(19,"Description"),r.Nb(),r.Ob(20,"p"),r.nc(21),r.Nb(),r.Nb(),r.Ob(22,"ion-button",11),r.Wb("click",(function(){return t.postValue()})),r.nc(23,"POST"),r.Nb(),r.Nb()),2&n&&(r.zb(6),r.dc("options",t.slideOpts),r.zb(1),r.dc("ngForOf",t.serviceService.Store.image),r.zb(5),r.pc(" ",t.serviceService.Store.price,""),r.zb(2),r.oc(t.serviceService.Store.title),r.zb(2),r.oc(t.serviceService.Store.gender),r.zb(5),r.oc(t.serviceService.Store.description))},directives:[c.i,c.C,c.j,c.f,c.v,o.j,c.k,c.c,c.I,g.h,c.u],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:linear-gradient(0deg,rgba(255,0,0,0),#436f70);height:50px}ion-toolbar[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 16px}ion-toolbar[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:24px}.header-md[_ngcontent-%COMP%]:after{background-image:none!important}ion-content[_ngcontent-%COMP%]{position:absolute;--background:#e5e5e5}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{--bullet-background-active:#fff;background:linear-gradient(180deg,#fff 65%,#767676);height:300px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:320px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]{background:#fff;padding:8px 16px;margin-bottom:4px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;margin:0;font-size:16px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:12px;width:12px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;margin:auto}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .rupee[_ngcontent-%COMP%]{margin-top:4px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .margin-left-0[_ngcontent-%COMP%]{margin-left:0}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .margin-right-0[_ngcontent-%COMP%]{margin-right:0}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .location-img[_ngcontent-%COMP%]{height:12px!important;width:14px;margin-right:8px}ion-content[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{background:#fff;padding:16px 16px 8px;letter-spacing:.7px;margin-bottom:4px}ion-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;margin:0}ion-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;margin:20px 0 0;position:relative;font-size:12px}ion-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:grey;flex:0 0 30%;text-transform:uppercase}ion-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .sup[_ngcontent-%COMP%]{vertical-align:25%;font-size:8px}ion-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{background:#fff;padding:16px;letter-spacing:.7px;margin-bottom:4px}ion-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;margin:0}ion-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:20px 0 0;white-space:pre-line;line-height:20px}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{background:#fff;padding:16px;letter-spacing:.7px;margin-bottom:4px}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{border-radius:50%;margin:auto}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]{margin:auto}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .see-profile[_ngcontent-%COMP%]{font-size:14px;font-weight:500;text-transform:uppercase}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize;color:#767676}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .see-profile[_ngcontent-%COMP%]{margin-top:8px;color:#0645ad}ion-content[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .user-full-info[_ngcontent-%COMP%]{margin:auto}ion-content[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background:#fff;padding:16px;margin-bottom:4px}ion-content[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;margin:0}ion-content[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#0645ad}ion-alert[_ngcontent-%COMP%]{--width:60px}.fix-button[_ngcontent-%COMP%]{position:absolute;bottom:16px;right:16px;left:16px}"]}),n})()}];let C=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(t){return new(t||n)},imports:[[g.i.forChild(O)],g.i]}),n})(),P=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(t){return new(t||n)},imports:[[o.b,i.a,c.D,C]]}),n})()}}]);