(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{w8Di:function(e,t,i){"use strict";i.r(t),i.d(t,"AssistantModule",(function(){return ne}));var s=i("SVse"),n=i("iInd");function c(e,t,i,s){return new(i||(i=Promise))((function(n,c){function o(e){try{a(s.next(e))}catch(t){c(t)}}function r(e){try{a(s.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}a((s=s.apply(e,t||[])).next())}))}var o=i("XNiG"),r=i("HDdC"),a=i("D0XW"),l=i("Y7HM");function d(e=0,t=a.a){return(!Object(l.a)(e)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=a.a),new r.a(i=>(i.add(t.schedule(b,e,{subscriber:i,counter:0,period:e})),i))}function b(e){const{subscriber:t,counter:i,period:s}=e;t.next(i),this.schedule({subscriber:t,counter:i+1,period:s},s)}var u=i("lJxs"),h=i("IzEk"),k=i("vkgz"),v=i("1G5W"),m=i("8Y7J"),S=i("TGE+"),g=i("qfBg"),p=i("Gyf/"),f=i("zHaW"),w=i("jMqV"),y=i("s7LF"),R=i("Tj54"),T=i("pu8Q"),_=i("zQhy");function A(e,t){1&e&&(m.Sb(0,"div",12),m.Nb(1,"mat-spinner"),m.Rb())}function C(e,t){1&e&&(m.Sb(0,"span"),m.Sb(1,"mat-icon",31),m.wc(2,"directions_walk"),m.Rb(),m.Rb())}function I(e,t){if(1&e&&(m.Sb(0,"div"),m.Sb(1,"div"),m.wc(2," Atendiendo turno "),m.Rb(),m.Sb(3,"div",32),m.Sb(4,"div",33),m.wc(5),m.Rb(),m.Rb(),m.Rb()),2&e){const e=m.dc(2);m.Ab(5),m.zc(" ",null==e.ticketsService.myTicket.id_skill?null:e.ticketsService.myTicket.id_skill.cd_skill," ",e.ticketsService.myTicket.cd_number," ")}}function x(e,t){if(1&e&&(m.Sb(0,"div",34),m.wc(1),m.Rb()),2&e){const e=m.dc(2);m.Ab(1),m.xc(e.message)}}const D=function(){return["/admin/assistants"]};function j(e,t){1&e&&(m.Sb(0,"div",35),m.Sb(1,"p"),m.wc(2," Usted no tiene habilidades asignadas. Debe ir al administrador de asistentes, luego seleccionar el asistente y all\xed asignarle skills / habilidades. "),m.Sb(3,"button",36),m.wc(4,"ADMINISTRADOR DE ASISTENTES"),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.Ab(3),m.jc("routerLink",m.lc(1,D)))}function F(e,t){1&e&&(m.Sb(0,"span",41),m.Sb(1,"mat-icon"),m.wc(2,"check"),m.Rb(),m.Rb())}function O(e,t){if(1&e&&(m.Sb(0,"span"),m.Nb(1,"mat-radio-button",42),m.Rb()),2&e){const e=m.dc().$implicit;m.Ab(1),m.jc("value",e.id)}}function M(e,t){if(1&e&&(m.Sb(0,"tr"),m.Sb(1,"td",37),m.vc(2,F,3,0,"span",38),m.vc(3,O,2,1,"span",16),m.Rb(),m.Sb(4,"td",39),m.wc(5),m.Rb(),m.Sb(6,"td",40),m.wc(7),m.Rb(),m.Rb()),2&e){const e=t.$implicit,i=m.dc(2);m.Ab(2),m.jc("ngIf",e.assigned),m.Ab(1),m.jc("ngIf",!e.assigned&&!i.waitForClient&&i.ticketsService.myTicket),m.Ab(2),m.yc(" ",e.tx_skill," "),m.Ab(2),m.yc(" ",e.tickets.length," ")}}function N(e,t){if(1&e){const e=m.Tb();m.Sb(0,"div",13),m.Sb(1,"div",14),m.Sb(2,"div",15),m.Sb(3,"span"),m.wc(4),m.Rb(),m.vc(5,C,3,0,"span",16),m.Rb(),m.Sb(6,"div",17),m.Sb(7,"div",18),m.vc(8,I,6,2,"div",16),m.vc(9,x,2,1,"div",19),m.Rb(),m.Rb(),m.Sb(10,"div",20),m.Sb(11,"div",4),m.Sb(12,"div",21),m.Sb(13,"div"),m.wc(14,"TE"),m.Rb(),m.Sb(15,"div"),m.wc(16),m.Rb(),m.Rb(),m.Sb(17,"div",21),m.Sb(18,"div"),m.wc(19,"TA"),m.Rb(),m.Sb(20,"div"),m.wc(21),m.Rb(),m.Rb(),m.Sb(22,"div",21),m.Sb(23,"div"),m.wc(24,"Tm"),m.Rb(),m.Sb(25,"div"),m.wc(26),m.Rb(),m.Rb(),m.Sb(27,"div",21),m.Sb(28,"div"),m.wc(29,"TC"),m.Rb(),m.Sb(30,"div"),m.wc(31),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.vc(32,j,5,2,"div",22),m.Sb(33,"div",23),m.Sb(34,"div",24),m.Sb(35,"mat-radio-group",25),m.Zb("ngModelChange",(function(t){return m.pc(e),m.dc().skillSelected=t})),m.Sb(36,"table",26),m.Sb(37,"tr",27),m.Nb(38,"td",28),m.Sb(39,"td",28),m.wc(40,"Skill"),m.Rb(),m.Sb(41,"td",29),m.wc(42," En espera "),m.Rb(),m.Rb(),m.vc(43,M,8,4,"tr",30),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()}if(2&e){const e=m.dc();m.Ab(4),m.yc(" ESCRITORIO ",null==e.userService.desktop?null:e.userService.desktop.cd_desktop," "),m.Ab(1),m.jc("ngIf",e.comingClient),m.Ab(3),m.jc("ngIf",e.ticketsService.myTicket),m.Ab(1),m.jc("ngIf",e.message),m.Ab(7),m.xc(e.tmWaitingStr),m.Ab(5),m.xc(e.tmAttention),m.Ab(5),m.xc(e.timerCount),m.Ab(5),m.xc(e.pendingTicketsCount),m.Ab(1),m.jc("ngIf",0===e.skillsAssistantThisCompany.length),m.Ab(3),m.jc("ngModel",e.skillSelected),m.Ab(8),m.jc("ngForOf",e.pendingTicketsBySkill)}}const E=function(e){return{"button-disabled":e}};let z=(()=>{class e{constructor(e,t,i,s,n){this.ticketsService=e,this.userService=t,this.wsService=i,this.snack=s,this.router=n,this.loading=!1,this.waitForClient=!1,this.comingClient=!1,this.pendingTicketsCount=0,this.pendingTicketsBySkill=[],this.timerCount=30,this.tmWaitingStr="--:--:--",this.tmAttention="--:--:--",this.message="",this.skills=[],this.skillsAssistantThisCompany=[],this.skillSelected="",this.blPriority=!1,this.subjectTurnoNuevo$=new o.a,this.subjectTurnoCancelado$=new o.a}ngOnInit(){return c(this,void 0,void 0,(function*(){this.loading=!0,this.userService.desktop||this.router.navigate(["/assistant/home"]),yield this.readSkills().then(e=>{this.skills=e}).catch(()=>{this.snack.open("Error al obtener los skills",null,{duration:2e3})}),yield this.getTickets(),this.wsService.escucharTurnoNuevo().subscribe(this.subjectTurnoNuevo$),this.subjectTurnoNuevo$.subscribe(e=>{this.getTickets()}),this.wsService.escucharTurnoCancelado().subscribe(this.subjectTurnoCancelado$),this.subjectTurnoCancelado$.subscribe(e=>{var t;e===(null===(t=this.ticketsService.myTicket)||void 0===t?void 0:t._id)&&(this.snack.open("El turno fue cancelado por el cliente",null,{duration:1e4}),this.clearDesktopSession(),this.getTickets())}),this.loading=!1}))}getTickets(){return c(this,void 0,void 0,(function*(){return this.ticketsService.getTickets().then(e=>{const t=e.filter(e=>{var t;return(null===(t=e.id_desk)||void 0===t?void 0:t._id)===this.userService.desktop._id&&null===e.tm_end&&null===e.id_child})[0];t&&(this.message="Existe un ticket pendiente de resoluci\xf3n",this.ticketsService.myTicket=t,localStorage.setItem("ticket",JSON.stringify(t)));let i=this.skills,s=[];this.userService.user.id_skills.forEach(e=>s.push(e._id));const n=e.filter(e=>{var t;return null===e.tm_end&&null===e.id_child&&s.includes(null===(t=e.id_skill)||void 0===t?void 0:t._id)}),c=e.filter(e=>null===e.tm_end&&null===e.id_child);this.pendingTicketsCount=n.length,this.message=n.length>0?`Hay ${n.length} tickets en espera`:"No existen tickets pendientes.",this.pendingTicketsBySkill=[];for(let o of i)s.includes(o._id)&&this.skillsAssistantThisCompany.push(o),this.pendingTicketsBySkill.push({id:o._id,assigned:s.includes(o._id),cd_skill:o.cd_skill,tx_skill:o.tx_skill,tickets:c.filter(e=>{var t;return(null===(t=e.id_skill)||void 0===t?void 0:t._id)===o._id&&null===e.tm_end})});this.loading=!1}).catch(()=>{this.loading=!1,this.message="Error al obtener los tickets"})}))}clearDesktopSession(){this.ticketsService.myTicket=null,localStorage.getItem("ticket")&&localStorage.removeItem("ticket"),this.ticketsService.chatMessages=[],this.tmWaitingStr="--:--:--",this.tmAttention="--:--:--",this.timerCount=30,this.waitForClient=!1,this.tmWaitingSub&&this.tmWaitingSub.unsubscribe(),this.tmExtraTimeSub&&this.tmExtraTimeSub.unsubscribe(),this.tmRunSub&&this.tmRunSub.unsubscribe()}releaseDesktop(){return c(this,void 0,void 0,(function*(){if(this.ticketsService.myTicket){let e="Tiene una sesi\xf3n de turno activa. \xbfDesea finalizarla?";return yield this.askForContinue(e).then(()=>{this.ticketsService.endTicket(this.ticketsService.myTicket._id).subscribe(e=>{e.ok&&this.userService.releaseDesktop(this.userService.desktop._id).subscribe(t=>{t.ok?(this.clearDesktopSession(),this.router.navigate(["assistant/home"])):this.message=e.msg})})}).catch(()=>{})}this.userService.releaseDesktop(this.userService.desktop._id).subscribe(e=>{e.ok&&(this.clearDesktopSession(),this.router.navigate(["assistant/home"]))})}))}readSkills(){return new Promise((e,t)=>{var i;let s=null===(i=this.userService.user.id_company)||void 0===i?void 0:i._id;this.userService.readSkills(s).subscribe(i=>{i.ok?e(i.skills):t([])})})}askForContinue(e){return new Promise((t,i)=>{this.snack.open(e,"ACEPTAR",{duration:5e3}).afterDismissed().subscribe(e=>{e.dismissedByAction?t():i()})})}takeTicket(){return c(this,void 0,void 0,(function*(){if(this.ticketsService.myTicket){let e="Desea finalizar el ticket actual?";return yield this.askForContinue(e).then(()=>{this.ticketsService.endTicket(this.ticketsService.myTicket._id).subscribe(e=>{e.ok&&(this.clearDesktopSession(),this.message=e.msg)})}).catch(()=>{})}this.ticketsService.takeTicket(this.userService.desktop._id,this.userService.user._id,this.wsService.idSocket).subscribe(e=>{if(this.snack.open(e.msg,null,{duration:2e3}),e.ok){this.waitForClient=!0,this.message="",this.ticketsService.myTicket=e.ticket,localStorage.setItem("ticket",JSON.stringify(e.ticket)),this.tmWaitingStr=this.ticketsService.getTimeInterval(e.ticket.tm_start,e.ticket.tm_att);const t=this.wsService.escucharEnCamino(),i=d(1e3).pipe(Object(u.a)(e=>e+1),Object(h.a)(30));let s=!1;this.tmWaitingSub=i.pipe(Object(k.a)(e=>this.timerCount=30-e),Object(v.a)(t)).subscribe(e=>{e>=29&&(s=!0)},void 0,()=>{new Promise(e=>{if(s)this.waitForClient=!1,this.comingClient=!1,e();else{this.waitForClient=!0,this.comingClient=!0;const t=d(1e3).pipe(Object(u.a)(e=>e+1),Object(h.a)(60));this.tmExtraTimeSub=t.subscribe(e=>this.timerCount=60-e,void 0,()=>{this.waitForClient=!1,this.comingClient=!1,e()})}}).then(()=>{const e=d(1e3),t=(new Date).getTime();this.tmRunSub=e.subscribe(e=>{this.tmAttention=this.ticketsService.getTimeInterval(t,+new Date)})})})}else this.waitForClient=!1,this.message=e.msg}),this.getTickets()}))}releaseTicket(){return c(this,void 0,void 0,(function*(){if(this.ticketsService.myTicket){let e="Desea soltar el ticket y devolverlo a su estado anterior?";yield this.askForContinue(e).then(()=>{this.ticketsService.releaseTicket(this.ticketsService.myTicket._id).subscribe(e=>{e.ok&&(this.clearDesktopSession(),this.message=e.msg)})}).catch(()=>{})}}))}reassignTicket(){return c(this,void 0,void 0,(function*(){if(this.ticketsService.myTicket){let e="Desea enviar el ticket al skill seleccionado?";yield this.askForContinue(e).then(()=>{var e;let t=null===(e=this.ticketsService.myTicket)||void 0===e?void 0:e._id,i=this.skillSelected;t&&i&&this.ticketsService.reassignTicket(t,i,this.blPriority).subscribe(e=>{e.ok&&(this.blPriority=!1,this.clearDesktopSession(),this.message=e.msg)})}).catch(()=>{})}}))}endTicket(){return c(this,void 0,void 0,(function*(){if(this.ticketsService.myTicket){let e="Desea finalizar el ticket actual?";yield this.askForContinue(e).then(()=>{this.ticketsService.endTicket(this.ticketsService.myTicket._id).subscribe(e=>{e.ok&&(this.clearDesktopSession(),this.message=e.msg)})}).catch(()=>{})}}))}ngOnDestroy(){this.subjectTurnoNuevo$.complete(),this.subjectTurnoCancelado$.complete()}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(S.a),m.Mb(g.a),m.Mb(p.a),m.Mb(f.a),m.Mb(n.b))},e.\u0275cmp=m.Gb({type:e,selectors:[["app-desktop"]],decls:44,vars:24,consts:[[1,"m-2","animated","fadeIn",2,"padding-bottom","10em"],["class","mt-5 animated fadeIn",4,"ngIf"],["class","animated fadeIn",4,"ngIf"],[1,"container","bg-light","fixed-bottom","shadow-box","no-radius","text-center","py-1"],[1,"row"],[1,"col-4","col-sm-2","button-content"],[1,"mx-2","my-1",3,"ngModel","disabled","ngModelChange"],[1,"accessible-icon"],[1,"btn","btn-success","button",3,"ngClass","disabled","click"],[1,"button-inner"],[1,"btn","btn-success","button",3,"disabled","ngClass","click"],[1,"btn","btn-danger","button",3,"disabled","ngClass","click"],[1,"mt-5","animated","fadeIn"],[1,"animated","fadeIn"],[1,"card","bg-light","mb-4",2,"min-width","18rem","max-width","30rem"],[1,"card-header","banner-title"],[4,"ngIf"],[1,"card-body"],[1,"container"],["class","card text-white my-4 p-1","style","background-color: darkcyan;",4,"ngIf"],[1,"card-footer"],[1,"col","p-0"],["class","card bg-danger text-white p-3 mb-4","style","min-width: 18rem; max-width: 30rem;",4,"ngIf"],[1,"card","bg-secondary","mb-4",2,"min-width","18rem","max-width","30rem"],[1,"card-content","table-responsive-sm","p-2"],[3,"ngModel","ngModelChange"],[1,"table","table-sm","text-white","text-center"],[2,"border-top","0px","color","yellow"],[2,"text-align","left","border","none"],[2,"text-align","right","border","none"],[4,"ngFor","ngForOf"],[2,"float","right","color","blueviolet","font-size","x-large"],[1,"banner-content","xxxxl"],[1,"xxxl"],[1,"card","text-white","my-4","p-1",2,"background-color","darkcyan"],[1,"card","bg-danger","text-white","p-3","mb-4",2,"min-width","18rem","max-width","30rem"],[1,"btn","btn-danger","btn-block","btn-sm","my-2",3,"routerLink"],[2,"padding","0","vertical-align","middle","font-size","16px"],["style","color: greenyellow",4,"ngIf"],[2,"text-align","left"],[2,"text-align","right"],[2,"color","greenyellow"],[2,"position","relative","left","4px","top","4px",3,"value"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.vc(1,A,2,0,"div",1),m.vc(2,N,44,11,"div",2),m.Rb(),m.Sb(3,"div",3),m.Sb(4,"div",4),m.Sb(5,"div",5),m.Sb(6,"mat-slide-toggle",6),m.Zb("ngModelChange",(function(e){return t.blPriority=e})),m.Sb(7,"mat-icon",7),m.wc(8,"accessible"),m.Rb(),m.Rb(),m.Rb(),m.Sb(9,"div",5),m.Sb(10,"button",8),m.Zb("click",(function(){return t.reassignTicket()})),m.Sb(11,"div"),m.Sb(12,"mat-icon"),m.wc(13,"rule"),m.Rb(),m.Rb(),m.Sb(14,"div",9),m.wc(15," Asignar "),m.Rb(),m.Rb(),m.Rb(),m.Sb(16,"div",5),m.Sb(17,"button",10),m.Zb("click",(function(){return t.takeTicket()})),m.Sb(18,"div"),m.Sb(19,"mat-icon"),m.wc(20,"check"),m.Rb(),m.Rb(),m.Sb(21,"div",9),m.wc(22," Siguiente "),m.Rb(),m.Rb(),m.Rb(),m.Sb(23,"div",5),m.Sb(24,"button",10),m.Zb("click",(function(){return t.releaseTicket()})),m.Sb(25,"div"),m.Sb(26,"mat-icon"),m.wc(27,"replay"),m.Rb(),m.Rb(),m.Sb(28,"div",9),m.wc(29," Soltar "),m.Rb(),m.Rb(),m.Rb(),m.Sb(30,"div",5),m.Sb(31,"button",10),m.Zb("click",(function(){return t.endTicket()})),m.Sb(32,"div"),m.Sb(33,"mat-icon"),m.wc(34,"close"),m.Rb(),m.Rb(),m.Sb(35,"div",9),m.wc(36," Finalizar "),m.Rb(),m.Rb(),m.Rb(),m.Sb(37,"div",5),m.Sb(38,"button",11),m.Zb("click",(function(){return t.releaseDesktop()})),m.Sb(39,"div"),m.Sb(40,"mat-icon"),m.wc(41,"power_settings_new"),m.Rb(),m.Rb(),m.Sb(42,"div",9),m.wc(43," Salir "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.Ab(1),m.jc("ngIf",t.loading),m.Ab(1),m.jc("ngIf",!t.loading),m.Ab(4),m.jc("ngModel",t.blPriority)("disabled",t.waitForClient||!t.ticketsService.myTicket||""===t.skillSelected),m.Ab(4),m.jc("ngClass",m.mc(14,E,t.waitForClient||!t.ticketsService.myTicket||""===t.skillSelected))("disabled",t.waitForClient||!t.ticketsService.myTicket||""===t.skillSelected),m.Ab(7),m.jc("disabled",t.waitForClient)("ngClass",m.mc(16,E,t.waitForClient)),m.Ab(7),m.jc("disabled",t.waitForClient||!t.ticketsService.myTicket)("ngClass",m.mc(18,E,t.waitForClient||!t.ticketsService.myTicket)),m.Ab(7),m.jc("disabled",t.waitForClient||!t.ticketsService.myTicket)("ngClass",m.mc(20,E,t.waitForClient||!t.ticketsService.myTicket)),m.Ab(7),m.jc("disabled",t.waitForClient)("ngClass",m.mc(22,E,t.waitForClient)))},directives:[s.j,w.a,y.o,y.r,R.a,s.h,T.b,_.b,s.i,n.c,_.a],styles:[".button-disabled[_ngcontent-%COMP%]{background-color:#f1f1f1;color:#c7c7c7}"]}),e})();var $=i("AIE+"),P=i("Q2Ze"),Z=i("ZTz/"),W=i("UhP/");function J(e,t){1&e&&(m.Sb(0,"div",5),m.Nb(1,"mat-spinner"),m.Rb())}function B(e,t){1&e&&(m.Sb(0,"div",9),m.wc(1," No tiene asignada ning\xfana empresa. Debe seleccionarla desde el men\xfa prinicipal. "),m.Rb())}function G(e,t){1&e&&(m.Sb(0,"div",9),m.wc(1," No tiene escritorios creados. Debe darlos de alta desde el Men\xfa de Administrador. "),m.Rb())}function q(e,t){if(1&e){const e=m.Tb();m.Sb(0,"div",3),m.wc(1),m.Sb(2,"div"),m.Sb(3,"button",18),m.Zb("click",(function(){m.pc(e);const t=m.dc(3);return t.takeDesktop(t.myDesktop)})),m.wc(4,"Ingresar"),m.Rb(),m.Sb(5,"button",19),m.Zb("click",(function(){m.pc(e);const t=m.dc(3);return t.releaseDesktop(t.myDesktop)})),m.wc(6,"Finalizar"),m.Rb(),m.Rb(),m.Rb()}if(2&e){const e=m.dc(3);m.Ab(1),m.yc(" Usted tiene tomado el escritorio ",e.myDesktop.cd_desktop," ")}}function H(e,t){1&e&&(m.Sb(0,"div",21),m.wc(1," Todos los escritorios estan tomados. "),m.Rb())}function L(e,t){if(1&e&&(m.Sb(0,"mat-option",27),m.wc(1),m.Rb()),2&e){const e=t.$implicit;m.jc("value",e),m.Ab(1),m.yc(" ",e.cd_desktop," ")}}function Q(e,t){if(1&e){const e=m.Tb();m.Sb(0,"div",3),m.Sb(1,"mat-form-field",22),m.Sb(2,"mat-label"),m.wc(3,"Seleccione un escritorio"),m.Rb(),m.Sb(4,"mat-select",23,24),m.vc(6,L,2,2,"mat-option",25),m.Rb(),m.Rb(),m.Sb(7,"button",26),m.Zb("click",(function(){m.pc(e);const t=m.oc(5);return m.dc(4).takeDesktop(null==t?null:t.value)})),m.wc(8," Ingresar "),m.Rb(),m.Rb()}if(2&e){const e=m.dc(4);m.Ab(6),m.jc("ngForOf",e.desktopsAvailable)}}function U(e,t){if(1&e&&(m.Sb(0,"div",3),m.vc(1,H,2,0,"div",20),m.vc(2,Q,9,1,"div",10),m.Rb()),2&e){const e=m.dc(3);m.Ab(1),m.jc("ngIf",0===e.desktopsAvailable.length),m.Ab(1),m.jc("ngIf",e.desktopsAvailable.length>0)}}function K(e,t){if(1&e&&(m.Sb(0,"div"),m.wc(1),m.Rb()),2&e){const e=m.dc().$implicit;m.Ab(1),m.yc(" ",null==e.id_assistant?null:e.id_assistant.tx_name," ")}}function V(e,t){1&e&&(m.Sb(0,"div",31),m.wc(1," Disponible "),m.Rb())}function X(e,t){if(1&e&&(m.Sb(0,"tr"),m.Sb(1,"td",28),m.wc(2),m.Rb(),m.Sb(3,"td",29),m.vc(4,K,2,1,"div",8),m.vc(5,V,2,0,"div",30),m.Rb(),m.Rb()),2&e){const e=t.$implicit;m.Ab(2),m.yc(" ",e.cd_desktop," "),m.Ab(2),m.jc("ngIf",e.id_assistant),m.Ab(1),m.jc("ngIf",!e.id_assistant)}}function Y(e,t){if(1&e&&(m.Sb(0,"div"),m.vc(1,q,7,1,"div",10),m.vc(2,U,3,2,"div",10),m.Sb(3,"div",11),m.Sb(4,"div",12),m.Sb(5,"table",13),m.Sb(6,"tr",14),m.Sb(7,"td",15),m.wc(8," Escritorio "),m.Rb(),m.Sb(9,"td",16),m.wc(10," Asistente "),m.Rb(),m.Rb(),m.vc(11,X,6,3,"tr",17),m.Rb(),m.Rb(),m.Rb(),m.Rb()),2&e){const e=m.dc(2);m.Ab(1),m.jc("ngIf",e.myDesktop),m.Ab(1),m.jc("ngIf",!e.myDesktop),m.Ab(9),m.jc("ngForOf",e.desktops)}}function ee(e,t){if(1&e&&(m.Sb(0,"div",5),m.Sb(1,"p",6),m.wc(2,"Bienvenido, desde aqu\xed puede tomar escritorios y atender turnos."),m.Rb(),m.vc(3,B,2,0,"div",7),m.vc(4,G,2,0,"div",7),m.vc(5,Y,12,3,"div",8),m.Rb()),2&e){const e=m.dc();m.Ab(3),m.jc("ngIf",!e.userService.user.id_company),m.Ab(1),m.jc("ngIf",0===(null==e.desktops?null:e.desktops.length)),m.Ab(1),m.jc("ngIf",(null==e.desktops?null:e.desktops.length)>0&&(null==e.userService.user.id_company?null:e.userService.user.id_company._id))}}const te=[{path:"home",component:(()=>{class e{constructor(e,t,i){this.router=e,this.userService=t,this.snack=i,this.loading=!1,this.desktops=[],this.desktopsAvailable=[]}ngOnInit(){var e;if(this.loading=!0,!(null===(e=this.userService.user.id_company)||void 0===e?void 0:e._id))return this.userService.snackShow("No tiene una empresa seleccionada",5e3),void(this.loading=!1);this.readDesktops(this.userService.user.id_company._id),this.userSuscription=this.userService.user$.subscribe(e=>{e&&this.readDesktops(e.id_company._id)})}takeDesktop(e){e&&(this.userService.desktop?this.router.navigate(["/assistant/desktop"]):this.userService.takeDesktop(e._id,this.userService.user._id).subscribe(e=>{this.snack.open(e.msg,null,{duration:2e3}),e.ok?(this.userService.desktop=e.desktop,localStorage.setItem("desktop",JSON.stringify(e.desktop)),this.router.navigate(["/assistant/desktop"])):this.snack.open("No se pudo tomar un escritorio",null,{duration:2e3})}))}readDesktops(e){this.userService.readDesktops(e).subscribe(e=>{e.ok&&(this.desktops=e.desktops,this.desktopsAvailable=this.desktops.filter(e=>null===e.id_assistant),this.myDesktop=this.desktops.filter(e=>{var t;return(null===(t=e.id_assistant)||void 0===t?void 0:t._id)===this.userService.user._id})[0]),this.myDesktop?(this.userService.desktop=this.myDesktop,localStorage.setItem("desktop",JSON.stringify(this.myDesktop))):(this.userService.desktop=null,localStorage.getItem("desktop")&&localStorage.removeItem("desktop"))},()=>{this.loading=!1},()=>{this.loading=!1})}releaseDesktop(e){this.loading=!0;let t=this.userService.user.id_company._id;this.userService.releaseDesktop(e._id).subscribe(e=>{this.readDesktops(t)},()=>{this.loading=!1},()=>{this.loading=!1})}ngOnDestroy(){this.userSuscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(n.b),m.Mb(g.a),m.Mb(f.a))},e.\u0275cmp=m.Gb({type:e,selectors:[["app-home"]],decls:9,vars:2,consts:[[1,"animated","fadeIn","p-2",2,"min-width","18rem","max-width","30rem"],[1,"jumbotron"],["class","animated fadeIn",4,"ngIf"],[1,"my-4"],["routerLink","/assistant/dashboard","role","button",1,"btn","btn-primary","btn-block"],[1,"animated","fadeIn"],[1,"lead"],["class","card lead bg-danger text-white p-3 my-4","style","line-height: initial;",4,"ngIf"],[4,"ngIf"],[1,"card","lead","bg-danger","text-white","p-3","my-4",2,"line-height","initial"],["class","my-4",4,"ngIf"],[1,"card","bg-secondary","mb-4"],[1,"card-content","table-responsive-sm","p-2"],[1,"table","table-sm","text-white","text-center"],[2,"border-top","0px","color","yellow"],[2,"text-align","left","border","none"],[2,"text-align","right","border","none"],[4,"ngFor","ngForOf"],["role","button",1,"btn","btn-success","btn-lg","m-1",3,"click"],["role","button",1,"btn","btn-danger","btn-lg","m-1",3,"click"],["class","card bg-danger text-white p-2 my-4",4,"ngIf"],[1,"card","bg-danger","text-white","p-2","my-4"],["appearance","fill",1,"w-100"],["matNativeControl","","required",""],["selectDesktop",""],[3,"value",4,"ngFor","ngForOf"],["role","button",1,"btn","btn-success","btn-block",3,"click"],[3,"value"],[2,"text-align","left"],[2,"text-align","right"],["style","color: mediumspringgreen;",4,"ngIf"],[2,"color","mediumspringgreen"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.vc(2,J,2,0,"div",2),m.vc(3,ee,6,3,"div",2),m.Nb(4,"hr",3),m.Sb(5,"p"),m.wc(6," Recuerde que si se ausenta del escritorio debe finalizar la sesi\xf3n del escritorio. Si usted finaliza la sesi\xf3n de user se finalizar\xe1 tambi\xe9n la sesi\xf3n del escritorio. Si la sesi\xf3n del escritorio ten\xeda asignada una sesi\xf3n de turno, este turno finalizar\xe1. "),m.Rb(),m.Sb(7,"a",4),m.wc(8,"Dashboard"),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.Ab(2),m.jc("ngIf",t.loading),m.Ab(1),m.jc("ngIf",!t.loading))},directives:[s.j,n.d,T.b,s.i,P.c,P.f,Z.a,W.k],styles:[""]}),e})()},{path:"desktop",component:z},{path:"dashboard",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Gb({type:e,selectors:[["app-dashboard"]],decls:4,vars:0,consts:[[1,"container","animated","fadeIn"],[1,"row"],[1,"col"]],template:function(e,t){1&e&&(m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.wc(3," Working on it "),m.Rb(),m.Rb(),m.Rb())},styles:[""]}),e})()},{path:"",redirectTo:"/assistant/home",pathMatch:"full"},{path:"**",component:$.a}];let ie=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(te)],n.e]}),e})();var se=i("1+r1");let ne=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},imports:[[y.i,s.b,se.a,ie]]}),e})()}}]);