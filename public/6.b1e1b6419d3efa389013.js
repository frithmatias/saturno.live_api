(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1c7N":function(e,t,c){"use strict";c.r(t),c.d(t,"PublicModule",(function(){return X}));var i=c("SVse"),n=c("s7LF"),s=c("iInd"),o=c("PSD3"),r=c.n(o),a=c("8Y7J"),b=c("Gyf/"),l=c("TGE+"),d=c("zHaW"),u=c("IheW");let m=(()=>{class e{constructor(e){this.http=e,this.tickets=[]}pushTicket(e){this.tickets.push(e)}setScore(e,t){}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(u.a))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=c("Tj54"),p=c("jMqV");function v(e,t){1&e&&(a.Sb(0,"h5",18),a.Sb(1,"span",19),a.wc(2," Cargando... "),a.Rb(),a.Rb())}function k(e,t){if(1&e&&(a.Sb(0,"div"),a.Sb(1,"p",20),a.wc(2," \xa1Bienvenido! Usted esta por sacar un turno para ser atendido en "),a.Rb(),a.Sb(3,"div",21),a.Sb(4,"p",22),a.wc(5),a.Rb(),a.Sb(6,"p",23),a.wc(7),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.dc(2);a.Ab(5),a.yc(" ",e.ticketsService.companyData.tx_company_name," "),a.Ab(2),a.Ac(" ",e.ticketsService.companyData.tx_address_street," ",e.ticketsService.companyData.tx_address_number," ",e.ticketsService.companyData.cd_city," ")}}function f(e,t){if(1&e){const e=a.Tb();a.Sb(0,"button",24),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).createTicket(c._id,!1)})),a.wc(1),a.Rb()}if(2&e){const e=t.$implicit;a.Ab(1),a.yc(" ",e.tx_skill," ")}}function g(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div"),a.vc(1,v,3,0,"h5",9),a.vc(2,k,8,4,"div",3),a.Sb(3,"div",10),a.Sb(4,"div",11),a.Sb(5,"div",12),a.Sb(6,"div"),a.Sb(7,"mat-icon",13),a.wc(8,"accessible"),a.Rb(),a.Sb(9,"mat-icon",13),a.wc(10,"pregnant_woman"),a.Rb(),a.Rb(),a.Sb(11,"div"),a.Sb(12,"mat-icon",13),a.wc(13,"child_friendly"),a.Rb(),a.Sb(14,"mat-icon",13),a.wc(15,"elderly"),a.Rb(),a.Rb(),a.Rb(),a.Sb(16,"div",14),a.Sb(17,"p",15),a.wc(18,"Prioritario"),a.Rb(),a.Sb(19,"mat-slide-toggle",16),a.Zb("ngModelChange",(function(t){return a.pc(e),a.dc().blPriority=t})),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.vc(20,f,2,1,"button",17),a.Rb()}if(2&e){const e=a.dc();a.Ab(1),a.jc("ngIf",e.loading),a.Ab(1),a.jc("ngIf",!e.loading),a.Ab(17),a.jc("ngModel",e.blPriority),a.Ab(1),a.jc("ngForOf",e.skills)}}let h=(()=>{class e{constructor(e,t,c,i,n){this.wsService=e,this.ticketsService=t,this.router=c,this.snack=i,this.publicService=n,this.loading=!1,this.blPriority=!1}ngOnInit(){if(this.ticketsService.myTicket)this.snack.open("Usted ya tiene un turno!",null,{duration:2e3}),this.router.navigate(["/public/screen"]);else if(this.ticketsService.companyData){let e=this.ticketsService.companyData._id;this.wsService.emit("enterCompany",e),this.ticketsService.readSkills(e).subscribe(e=>{1===e.skills.length&&e.skills[0].bl_generic&&(e.skills[0].tx_skill="OBTENER TURNO"),this.skills=e.skills})}else this.snack.open("Por favor ingrese una empresa primero.",null,{duration:2e3}),this.router.navigate(["/public"])}createTicket(e){localStorage.getItem("user")?r.a.fire({icon:"error",title:"Tiene una sesi\xf3n de usuario activa",text:"Usted est\xe1 en una p\xe1gina de acceso al p\xfablico pero tiene una sesi\xf3n de usuario activa. Para obtener un turno debe cerrar la sesi\xf3n de usuario o abrir una pesta\xf1a en modo inc\xf3gnito."}):(this.loading=!0,this.ticketsService.createTicket(e,this.wsService.idSocket,this.blPriority).subscribe(e=>{e.ok&&(localStorage.setItem("ticket",JSON.stringify(e.ticket)),this.ticketsService.myTicket=e.ticket,this.loading=!1,this.router.navigate(["/public/screen"]))}))}salir(){localStorage.getItem("company")&&localStorage.removeItem("company"),this.router.navigate(["/public/search"])}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(b.a),a.Mb(l.a),a.Mb(s.b),a.Mb(d.a),a.Mb(m))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-tickets"]],decls:19,vars:1,consts:[[1,"saturno-container","animated","fadeIn"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],[1,"saturno-footer"],[1,"row"],[1,"col"],["routerLink","/public/search",1,"footer-icon-menu"],["routerLink","/public/screen",1,"footer-icon-menu"],["class","card-title",4,"ngIf"],[1,"container"],[1,"row","rounded","border","border-success","mb-3"],[1,"col","bg-success","text-white","p-2"],[1,"m-2","mr-3",2,"font-size","xx-large"],[1,"col","m-3"],[1,"text-uppercase","mx-2","font-weight-bold"],[3,"ngModel","ngModelChange"],["class","btn btn-primary btn-block btn-lg text-uppercase",3,"click",4,"ngFor","ngForOf"],[1,"card-title"],["id","lblNuevoTicket"],[1,"lead"],[1,"card","border-success","py-4","my-4"],[1,"text-company"],[2,"color","darkblue","font-size","1rem","font-weight","400"],[1,"btn","btn-primary","btn-block","btn-lg","text-uppercase",3,"click"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.wc(2,"OBTENER TURNO"),a.Rb(),a.Sb(3,"div",2),a.vc(4,g,21,4,"div",3),a.Rb(),a.Rb(),a.Sb(5,"div",4),a.Sb(6,"div",5),a.Sb(7,"div",6),a.Sb(8,"span",7),a.Sb(9,"mat-icon"),a.wc(10,"search"),a.Rb(),a.Sb(11,"div"),a.wc(12,"Volver al buscador"),a.Rb(),a.Rb(),a.Rb(),a.Sb(13,"div",6),a.Sb(14,"span",8),a.Sb(15,"mat-icon"),a.wc(16,"list_alt"),a.Rb(),a.Sb(17,"div"),a.wc(18,"Ver la pantalla"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Ab(4),a.jc("ngIf",t.ticketsService.companyData))},directives:[i.j,s.c,S.a,p.a,n.o,n.r,i.i],styles:[""]}),e})();var R=c("qfBg");const y=function(e){return{"screen-icon-star-on":e}};function w(e,t){if(1&e){const e=a.Tb();a.Sb(0,"tr"),a.Sb(1,"td",18),a.wc(2),a.Rb(),a.Sb(3,"td",19),a.Sb(4,"mat-icon",20),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).setScore(c._id,1)})),a.wc(5,"star"),a.Rb(),a.Rb(),a.Sb(6,"td",19),a.Sb(7,"mat-icon",20),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).setScore(c._id,2)})),a.wc(8,"star"),a.Rb(),a.Rb(),a.Sb(9,"td",19),a.Sb(10,"mat-icon",20),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).setScore(c._id,3)})),a.wc(11,"star"),a.Rb(),a.Rb(),a.Sb(12,"td",19),a.Sb(13,"mat-icon",20),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).setScore(c._id,4)})),a.wc(14,"star"),a.Rb(),a.Rb(),a.Sb(15,"td",19),a.Sb(16,"mat-icon",20),a.Zb("click",(function(){a.pc(e);const c=t.$implicit;return a.dc(2).setScore(c._id,5)})),a.wc(17,"star"),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=t.$implicit,c=a.dc(2);a.Ab(2),a.yc(" ",null==e.id_skill?null:e.id_skill.tx_skill," "),a.Ab(2),a.jc("ngClass",a.mc(6,y,c.scores.get(e._id)>=1)),a.Ab(3),a.jc("ngClass",a.mc(8,y,c.scores.get(e._id)>=2)),a.Ab(3),a.jc("ngClass",a.mc(10,y,c.scores.get(e._id)>=3)),a.Ab(3),a.jc("ngClass",a.mc(12,y,c.scores.get(e._id)>=4)),a.Ab(3),a.jc("ngClass",a.mc(14,y,c.scores.get(e._id)>=5))}}function _(e,t){if(1&e&&(a.Sb(0,"div",12),a.Sb(1,"div",5),a.wc(2,"SU OPINION"),a.Rb(),a.Sb(3,"div",13),a.Sb(4,"div"),a.wc(5,"\xa1Su turno ha finalizado!"),a.Rb(),a.Sb(6,"div",14),a.wc(7,"Lo invitamos a valorar la atenci\xf3n recibida."),a.Rb(),a.Sb(8,"div",15),a.Sb(9,"table",16),a.vc(10,w,18,16,"tr",17),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.dc();a.Ab(10),a.jc("ngForOf",e.ticketsService.allMytickets)}}function T(e,t){if(1&e&&(a.Sb(0,"div"),a.Sb(1,"span",24),a.wc(2),a.Rb(),a.Rb()),2&e){const e=a.dc(2);a.Ab(2),a.zc(" ",null==e.ticketsService.myTicket?null:e.ticketsService.myTicket.id_skill.cd_skill," ",null==e.ticketsService.myTicket?null:e.ticketsService.myTicket.id_position," ")}}function x(e,t){if(1&e&&(a.Sb(0,"div",25),a.Sb(1,"div",26),a.Sb(2,"div",27),a.wc(3," Por favor pase por el escritorio "),a.Rb(),a.Rb(),a.Sb(4,"div",26),a.Sb(5,"div",28),a.wc(6),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.dc(2);a.Ab(6),a.yc(" ",null==e.ticketsService.myTicket||null==e.ticketsService.myTicket.id_desk?null:e.ticketsService.myTicket.id_desk.cd_desktop," ")}}function A(e,t){if(1&e&&(a.Sb(0,"div",21),a.Sb(1,"div",5),a.wc(2,"SU TURNO"),a.Rb(),a.Sb(3,"div",22),a.vc(4,T,3,2,"div",8),a.vc(5,x,7,1,"div",23),a.Rb(),a.Rb()),2&e){const e=a.dc();a.Ab(4),a.jc("ngIf",!(null!=e.ticketsService.myTicket&&e.ticketsService.myTicket.id_desk)),a.Ab(1),a.jc("ngIf",null==e.ticketsService.myTicket?null:e.ticketsService.myTicket.id_desk)}}function I(e,t){1&e&&(a.Sb(0,"div"),a.Sb(1,"span",24),a.wc(2," -- -- "),a.Rb(),a.Rb())}function j(e,t){if(1&e&&(a.Sb(0,"span",24),a.wc(1),a.Rb()),2&e){const e=a.dc(2);a.Ab(1),a.zc(" ",null==e.ticketsService.lastTicket||null==e.ticketsService.lastTicket.id_skill?null:e.ticketsService.lastTicket.id_skill.cd_skill," ",null==e.ticketsService.lastTicket?null:e.ticketsService.lastTicket.id_position," ")}}function C(e,t){if(1&e&&(a.Sb(0,"div",12),a.Sb(1,"div",5),a.wc(2,"ULTIMO TURNO"),a.Rb(),a.Sb(3,"div",29),a.vc(4,I,3,0,"div",8),a.Sb(5,"div"),a.vc(6,j,2,2,"span",30),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.dc();a.Ab(4),a.jc("ngIf",!e.ticketsService.lastTicket),a.Ab(2),a.jc("ngIf",e.ticketsService.lastTicket)}}function O(e,t){1&e&&(a.Sb(0,"tr"),a.Sb(1,"td"),a.wc(2,"--"),a.Rb(),a.Sb(3,"td"),a.wc(4,"--"),a.Rb(),a.Sb(5,"td"),a.wc(6,"--"),a.Rb(),a.Rb())}function M(e,t){1&e&&(a.Sb(0,"span",35),a.Sb(1,"mat-icon",36),a.wc(2,"campaign"),a.Rb(),a.Rb())}function P(e,t){1&e&&(a.Sb(0,"span",35),a.Sb(1,"mat-icon",36),a.wc(2,"replay"),a.Rb(),a.Rb())}function E(e,t){1&e&&(a.Sb(0,"span",35),a.Sb(1,"mat-icon",36),a.wc(2,"check"),a.Rb(),a.Rb())}function N(e,t){if(1&e&&(a.Sb(0,"tr",31),a.Sb(1,"td",32),a.wc(2),a.Rb(),a.Sb(3,"td",32),a.wc(4),a.Rb(),a.Sb(5,"td",33),a.vc(6,M,3,0,"span",34),a.vc(7,P,3,0,"span",34),a.vc(8,E,3,0,"span",34),a.Rb(),a.Rb()),2&e){const e=t.$implicit;a.Ab(2),a.zc(" ",null==e.id_skill?null:e.id_skill.cd_skill,"",e.id_position,""),a.Ab(2),a.xc(e.id_session.id_desktop.cd_desktop),a.Ab(2),a.jc("ngIf",!e.tm_end),a.Ab(1),a.jc("ngIf",e.id_child&&e.tm_end),a.Ab(1),a.jc("ngIf",!e.id_child&&e.tm_end)}}const z=function(e){return{"button-disabled":e}};function Z(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",37),a.Sb(1,"div",26),a.Sb(2,"div",38),a.Sb(3,"button",39),a.Zb("click",(function(){return a.pc(e),a.dc().cancelTicket()})),a.Sb(4,"div"),a.Sb(5,"mat-icon"),a.wc(6,"power_settings_new"),a.Rb(),a.Rb(),a.Sb(7,"div",40),a.wc(8," Cancelar Turno "),a.Rb(),a.Rb(),a.Rb(),a.Sb(9,"div",38),a.Sb(10,"button",41),a.Zb("click",(function(){return a.pc(e),a.dc().enCamino()})),a.Sb(11,"div"),a.Sb(12,"mat-icon"),a.wc(13,"directions_walk"),a.Rb(),a.Rb(),a.Sb(14,"div",40),a.wc(15," \xa1En camino! "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=a.dc();a.Ab(3),a.jc("disabled",!e.ticketsService.myTicket)("ngClass",a.mc(4,z,!e.ticketsService.myTicket)),a.Ab(7),a.jc("disabled",!(null!=e.ticketsService.myTicket&&e.ticketsService.myTicket.id_desk)||e.coming)("ngClass",a.mc(6,z,!(null!=e.ticketsService.myTicket&&e.ticketsService.myTicket.id_desk)||e.coming))}}function D(e,t){1&e&&(a.Sb(0,"div",42),a.Sb(1,"div",26),a.Sb(2,"div",27),a.Sb(3,"span",43),a.Sb(4,"mat-icon"),a.wc(5,"home"),a.Rb(),a.Sb(6,"div"),a.wc(7,"Inicio"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb())}let F=(()=>{class e{constructor(e,t,c,i,n){this.wsService=e,this.ticketsService=t,this.userService=c,this.snack=i,this.router=n,this.loading=!1,this.coming=!1,this.scores=new Map}ngOnInit(){this.coming=!1,document.getElementsByTagName("body")[0].classList.remove("container"),this.userService.user||this.ticketsService.companyData||(this.router.navigate(["/public"]),this.snack.open("Por favor ingrese una empresa primero!",null,{duration:5e3})),this.ticketsService.getTickets()}toggle(e){e.toggle()}enCamino(){this.coming=!0,this.wsService.emit("cliente-en-camino",this.ticketsService.myTicket.id_socket_desk)}cancelTicket(){this.snack.open("Desea cancelar el turno?","SI, CANCELAR",{duration:1e4}).afterDismissed().subscribe(e=>{e.dismissedByAction&&this.ticketsService.cancelTicket(this.ticketsService.myTicket._id).subscribe(e=>{e.ok&&(this.snack.open(e.msg,"ACEPTAR",{duration:2e3}),this.ticketsService.clearPublicSession(),this.router.navigate(["/public"]))})})}setScore(e,t){if(this.scores.set(e,t),this.ticketsService.allMytickets.length===this.scores.size){let e=[];this.scores.forEach((function(t,c,i){e.push({id_ticket:c,cd_score:t})})),this.ticketsService.sendScores(e).subscribe(e=>{console.log(e)}),r.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:e=>{e.addEventListener("mouseenter",r.a.stopTimer),e.addEventListener("mouseleave",r.a.resumeTimer)}}).fire({icon:"success",title:"\xa1Gracias!"}).then(e=>{e.isDismissed&&this.ticketsService.clearPublicSessionComplete()})}}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(b.a),a.Mb(l.a),a.Mb(R.a),a.Mb(d.a),a.Mb(s.b))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-screen"]],decls:23,vars:7,consts:[[1,"row","p-2","pb-5","animated","fadeIn"],[1,"col-md-6",2,"min-width","18rem"],["class","card text-white bg-danger mb-4",4,"ngIf"],["class","card text-white bg-success mb-4",4,"ngIf"],[1,"card","text-white","bg-primary","mb-4"],[1,"card-header","banner-title"],[1,"card-body","card-tickets-info","table-responsive-sm",2,"background-color","rgb(54, 77, 194)"],[1,"table","table","text-white","text-center",2,"font-size","x-large"],[4,"ngIf"],["style","font-size: xx-large; font-weight: 300;",4,"ngFor","ngForOf"],["class","container bg-light fixed-bottom shadow-box no-radius text-center py-1",4,"ngIf"],["class","saturno-footer",4,"ngIf"],[1,"card","text-white","bg-danger","mb-4"],[1,"banner-content","p-3",2,"background-color","rgb(141, 51, 51)"],[1,"lead","my-2"],[1,"text-white","my-4","table-responsive-sm"],[1,"table","table-sm","text-white"],[4,"ngFor","ngForOf"],[1,"py-2",2,"width","50%","text-align","left"],[1,"py-2"],[1,"screen-icon-star",3,"ngClass","click"],[1,"card","text-white","bg-success","mb-4"],[1,"banner-content",2,"background-color","rgb(51, 141, 51)"],["class","banner-content",4,"ngIf"],[1,"xxxxl"],[1,"banner-content"],[1,"row"],[1,"col"],[1,"col","xxxxl"],[1,"banner-content",2,"background-color","rgb(141, 51, 51)"],["class","xxxxl",4,"ngIf"],[2,"font-size","xx-large","font-weight","300"],[1,"p-1",2,"text-align","center"],[1,"p-1",2,"padding","0","vertical-align","middle"],["style","color: greenyellow",4,"ngIf"],[2,"color","greenyellow"],[2,"font-size","xx-large"],[1,"container","bg-light","fixed-bottom","shadow-box","no-radius","text-center","py-1"],[1,"col-6","button-content"],[1,"btn","btn-danger","button",3,"disabled","ngClass","click"],[1,"button-inner"],[1,"btn","btn-success","button",3,"disabled","ngClass","click"],[1,"saturno-footer"],["routerLink","/home",1,"footer-icon-menu"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.vc(2,_,11,1,"div",2),a.vc(3,A,6,2,"div",3),a.vc(4,C,7,2,"div",2),a.Nb(5,"div"),a.Rb(),a.Sb(6,"div",1),a.Sb(7,"div",4),a.Sb(8,"div",5),a.wc(9,"HISTORIAL"),a.Rb(),a.Sb(10,"div",6),a.Sb(11,"table",7),a.Sb(12,"tr"),a.Sb(13,"td"),a.wc(14," Turno "),a.Rb(),a.Sb(15,"td"),a.wc(16," Escritorio"),a.Rb(),a.Sb(17,"td"),a.wc(18," Estado "),a.Rb(),a.Rb(),a.vc(19,O,7,0,"tr",8),a.vc(20,N,9,6,"tr",9),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.vc(21,Z,16,8,"div",10),a.vc(22,D,8,0,"div",11)),2&e&&(a.Ab(2),a.jc("ngIf",null===t.ticketsService.myTicket&&null!==t.ticketsService.myTicketTmEnd),a.Ab(1),a.jc("ngIf",t.ticketsService.myTicket),a.Ab(1),a.jc("ngIf",!t.ticketsService.myTicket&&null===t.ticketsService.myTicketTmEnd),a.Ab(15),a.jc("ngIf",0===t.ticketsService.ticketsTail.length),a.Ab(1),a.jc("ngForOf",t.ticketsService.ticketsTail),a.Ab(1),a.jc("ngIf",t.ticketsService.myTicket),a.Ab(1),a.jc("ngIf",!t.ticketsService.myTicket))},directives:[i.j,i.i,S.a,i.h,s.c],styles:[".example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:right;width:120px}.screen-icon-star[_ngcontent-%COMP%]{cursor:pointer;transform:scale(2);color:#b64444;top:3px;position:relative;font-size:large}.screen-icon-star-on[_ngcontent-%COMP%]{color:orange}.button-disabled[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#c7c7c7}"]}),e})();var L=c("Q2Ze"),U=c("e6WT"),$=c("vrAh"),B=c("UhP/");function J(e,t){if(1&e&&(a.Sb(0,"mat-option",14),a.wc(1),a.Rb()),2&e){const e=t.$implicit;a.jc("value",e),a.Ab(1),a.yc(" ",e.tx_company_name," ")}}function V(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",3),a.Sb(1,"h2"),a.wc(2,"Ingrese la empresa"),a.Rb(),a.Nb(3,"hr",4),a.Sb(4,"div",5),a.Sb(5,"mat-form-field",6),a.Sb(6,"mat-label"),a.wc(7,"Ingrese la empresa"),a.Rb(),a.Sb(8,"input",7,8),a.Zb("keyup",(function(){a.pc(e);const t=a.oc(9);return a.dc().findCompany(t)})),a.Rb(),a.Sb(10,"span",9),a.Nb(11,"i",10),a.Rb(),a.Rb(),a.Sb(12,"mat-autocomplete",11,12),a.Zb("optionSelected",(function(t){return a.pc(e),a.dc().setCompany(t.option.value)})),a.vc(14,J,2,2,"mat-option",13),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=a.oc(13),t=a.dc();a.Ab(8),a.jc("matAutocomplete",e)("value",null==t.companySelected?null:t.companySelected.tx_company_name),a.Ab(6),a.jc("ngForOf",t.companies)}}function G(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",3),a.Sb(1,"p",15),a.wc(2," Usted esta por ir hacia la recepci\xf3n de turnos de "),a.Rb(),a.Sb(3,"div",16),a.Sb(4,"p",17),a.wc(5),a.Rb(),a.Sb(6,"p",18),a.wc(7),a.Rb(),a.Rb(),a.Sb(8,"button",19),a.Zb("click",(function(){return a.pc(e),a.dc().goToCompany()})),a.wc(9),a.Rb(),a.Rb()}if(2&e){const e=a.dc();a.Ab(5),a.yc(" ",e.companySelected.tx_company_name," "),a.Ab(2),a.Ac(" ",e.companySelected.tx_address_street," ",e.companySelected.tx_address_number," ",e.companySelected.cd_city," "),a.Ab(2),a.yc("Ir a ",e.companySelected.tx_company_name," ")}}let W=(()=>{class e{constructor(e,t,c,i){this.router=e,this.ticketsService=t,this.wsService=c,this.snack=i,this.companies=[]}ngOnInit(){}ngAfterViewInit(){document.getElementById("inputCompany").focus()}findCompany(e){e.value.length>1&&this.ticketsService.findCompany(e.value).subscribe(t=>{t.ok?this.companies=t.companies:(e.value="",this.snack.open("No existen resultados.",null,{duration:1e3}))},()=>{this.snack.open("Ocurrio un error al buscar la empresa",null,{duration:2e3})})}goToCompany(){this.companySelected&&(localStorage.setItem("company",JSON.stringify(this.companySelected)),this.ticketsService.companyData=this.companySelected,this.router.navigate(["/public/",this.companySelected.tx_public_name]))}setCompany(e){this.companySelected=e}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(s.b),a.Mb(l.a),a.Mb(b.a),a.Mb(d.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-search"]],decls:5,vars:2,consts:[[1,"shadow-box","animated","fadeIn","m-4","p-3",2,"min-width","18rem","max-width","30rem"],["class","jumbotron",4,"ngIf"],["routerLink","/",2,"cursor","pointer"],[1,"jumbotron"],[1,"my-4"],[1,"my-2"],["color","warn","appearance","fill","logincss","",1,"w-100"],["id","inputCompany","matInput","","placeholder","Empresa S.A.",3,"matAutocomplete","value","keyup"],["inputCompany",""],[1,"input-icon"],[1,"mdi","mdi-close"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"lead"],[1,"card","border-success","py-4","my-4"],[1,"text-company"],[2,"color","darkblue","font-size","1rem","font-weight","400"],[1,"btn","btn-success","btn-lg","btn-block",3,"click"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.vc(1,V,15,3,"div",1),a.vc(2,G,10,5,"div",1),a.Sb(3,"div",2),a.wc(4," Volver al inicio "),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.jc("ngIf",!t.companySelected),a.Ab(1),a.jc("ngIf",t.companySelected))},directives:[i.j,s.c,L.c,L.f,U.b,$.c,$.a,i.i,B.l],styles:[""]}),e})();var q=c("AIE+");const H=[{path:"tickets",component:h},{path:"screen",component:F},{path:"",component:W},{path:":userCompanyName",component:c("R44i").a},{path:"**",component:q.a}];let K=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(H)],s.e]}),e})();var Q=c("1+r1"),Y=c("j1ZV");let X=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[i.b,n.s,n.i,Q.a,Y.a,K]]}),e})()}}]);