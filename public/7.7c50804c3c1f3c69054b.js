(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bkV9:function(e,t,s){"use strict";s.r(t),s.d(t,"UserModule",(function(){return R}));var i=s("SVse"),r=s("s7LF"),a=s("iInd"),n=s("8Y7J"),l=s("qfBg");let o=(()=>{class e{constructor(e){this.userService=e}ngOnInit(){this.publicURL="https://webturnos.herokuapp.com/"+this.userService.usuario.id_company}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-home-user"]],decls:12,vars:1,consts:[[1,"turno-container","p-4",2,"text-align","-webkit-center"],[1,"card","bg-light","mb-3",2,"min-width","18rem","max-width","30rem"],[1,"jumbotron","m-4","animated","fadeIn"],[1,"display-4"],[1,"lead"],[1,"my-4"],["routerLink","/public","role","button",1,"btn","btn-primary","btn-lg","btn-block"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.Qb(3,"h1",3),n.rc(4),n.Pb(),n.Qb(5,"p",4),n.rc(6,"Desde aqu\xed puede dar de alta a sus asistentes, los skills y los esctritorios."),n.Pb(),n.Mb(7,"hr",5),n.Qb(8,"p"),n.rc(9," Recuerde que sus clientes deben ingresar a obtener sus turnos a la direcci\xf3n web p\xfablica en "),n.Pb(),n.Qb(10,"a",6),n.rc(11,"TURNOS"),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(4),n.tc("Bienvenido ",null==t.userService?null:t.userService.usuario.tx_name,""))},directives:[a.d],styles:[""]}),e})();var c=s("AIE+");let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["app-dashboard"]],decls:4,vars:0,consts:[[1,"container","animated","fadeIn"],[1,"row"],[1,"col"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.rc(3," Dashboard "),n.Pb(),n.Pb(),n.Pb())},styles:[""]}),e})();var b=s("zHaW"),u=s("Q2Ze"),m=s("e6WT");let p=(()=>{class e{constructor(e,t){this.userService=e,this.snack=t,this.desktopCreated=new n.n}ngOnInit(){this.forma=new r.e({cdDesktop:new r.c(null,r.q.required),idType:new r.c(null)})}createDesktop(e){this.forma.invalid||this.userService.createDesktop({id_company:this.userService.usuario.id_company,cd_desktop:this.forma.value.cdDesktop,id_assistant:null,__v:null,_id:null}).subscribe(t=>{this.desktopCreated.emit(t.desktop),this.snack.open(t.msg,null,{duration:5e3}),this.forma.reset(),e.resetForm()},e=>{this.snack.open(e.error.msg,null,{duration:5e3})})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-desktop-create-form"]],outputs:{desktopCreated:"desktopCreated"},decls:9,vars:1,consts:[["autocomplete","off","ngNativeValidate","",2,"color","brown",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["color","warn","appearance","fill",1,"w-100"],["matInput","","placeholder","Identificador de escritorio","formControlName","cdDesktop","name","cdDesktop","type","text","required",""],[1,"form-group","text-center"],["type","submit",1,"btn","btn-success","btn-block","text-uppercase","waves-effect","waves-light"]],template:function(e,t){if(1&e){const e=n.Rb();n.Qb(0,"form",0,1),n.Xb("ngSubmit",(function(){n.kc(e);const s=n.jc(1);return t.createDesktop(s)})),n.Qb(2,"mat-form-field",2),n.Qb(3,"mat-label"),n.rc(4,"ID Escritorio"),n.Pb(),n.Mb(5,"input",3),n.Pb(),n.Qb(6,"div",4),n.Qb(7,"button",5),n.rc(8,"Alta de Ventanilla"),n.Pb(),n.Pb(),n.Pb()}2&e&&n.ec("formGroup",t.forma)},directives:[r.l,r.f,u.b,u.e,m.a,r.b,r.k,r.d,r.p],styles:[""]}),e})();var f=s("Tj54");function h(e,t){if(1&e){const e=n.Rb();n.Qb(0,"tr"),n.Qb(1,"td"),n.rc(2),n.Pb(),n.Qb(3,"td",10),n.Qb(4,"mat-icon",11),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().editDesktop(s._id)})),n.rc(5,"edit"),n.Pb(),n.Qb(6,"mat-icon",12),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().deleteDesktop(s._id)})),n.rc(7,"delete"),n.Pb(),n.Pb(),n.Pb()}if(2&e){const e=t.$implicit;n.zb(2),n.sc(null==e?null:e.cd_desktop)}}let k=(()=>{class e{constructor(e,t){this.userService=e,this.snack=t}ngOnInit(){this.userService.readDesktops(this.userService.usuario.id_company).subscribe(e=>{this.desktops=e.desktops})}editDesktop(e){}deleteDesktop(e){this.snack.open("Desea eliminar el escritorio?","ELIMINAR",{duration:1e4}).afterDismissed().subscribe(t=>{t.dismissedByAction&&this.userService.deleteDesktop(e).subscribe(t=>{this.snack.open(t.msg,null,{duration:5e3}),this.desktops=this.desktops.filter(t=>t._id!=e)},e=>{this.snack.open(e.msg,null,{duration:5e3})})})}desktopCreated(e){this.desktops.push(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-desktops"]],decls:13,vars:1,consts:[[1,"m-4","animated","fadeIn"],[1,"card","bg-info","lead","text-white"],[1,"card-header"],[1,"card-body","card-tickets-info","table-responsive-sm"],[1,"table","table-sm","text-white"],[4,"ngFor","ngForOf"],[1,"my-4"],[1,"card","lead"],[1,"card-body"],[3,"desktopCreated"],[2,"text-align","right"],[1,"ml-2","list-crud-edit",3,"click"],[1,"ml-2","list-crud-delete",3,"click"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.rc(3,"Ventanillas"),n.Pb(),n.Qb(4,"div",3),n.Qb(5,"table",4),n.qc(6,h,8,1,"tr",5),n.Pb(),n.Pb(),n.Pb(),n.Mb(7,"div",6),n.Qb(8,"div",7),n.Qb(9,"div",2),n.rc(10,"Alta de Ventanillas"),n.Pb(),n.Qb(11,"div",8),n.Qb(12,"app-desktop-create-form",9),n.Xb("desktopCreated",(function(e){return t.desktopCreated(e)})),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(6),n.ec("ngForOf",t.desktops))},directives:[i.i,p,f.a],styles:[""]}),e})();var v=s("LRne"),g=s("ZTz/"),w=s("UhP/"),P=s("SqCe");function Q(e,t){if(1&e){const e=n.Rb();n.Qb(0,"mat-list-option",16),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().setNewSkill(s)})),n.Qb(1,"span",17),n.rc(2),n.Pb(),n.Pb()}if(2&e){const e=t.$implicit;n.ec("value",e._id),n.zb(2),n.sc(e.tx_skill)}}function S(e,t){1&e&&(n.Qb(0,"button",18),n.rc(1,"Alta de Asistente"),n.Pb())}function y(e,t){1&e&&(n.Qb(0,"button",19),n.rc(1,"Guardar Cambios "),n.Pb())}const _=function(){return{standalone:!0}};let A=(()=>{class e{constructor(e,t){this.userService=e,this.snack=t,this.updateAssistants=new n.n,this.selStrSkills=[],this.skills=[],this.manejaError=e=>Object(v.a)(e)}ngOnInit(){this.forma=new r.e({rol:new r.c(null,r.q.required),nombre:new r.c(null,r.q.required),email:new r.c(null,[r.q.required,r.q.email]),password:new r.c(null,r.q.required),password2:new r.c(null,r.q.required),condiciones:new r.c(!1)},{validators:this.sonIguales("password","password2")}),this.userService.readSkills(this.userService.usuario.id_company).subscribe(e=>{this.skills=e.skills})}ngOnChanges(e){var t,s,i;null===(t=this.forma)||void 0===t||t.patchValue({rol:e.assistantEdit.currentValue.id_role,email:e.assistantEdit.currentValue.tx_email,nombre:e.assistantEdit.currentValue.tx_name,password:"******",password2:"******"}),this.selStrSkills=null===(i=null===(s=e.assistantEdit)||void 0===s?void 0:s.currentValue)||void 0===i?void 0:i.id_skills}sonIguales(e,t){return s=>s.controls[e].value===s.controls[t].value?null:{password:"Las contrase\xf1as deben ser iguales"}}setNewSkill(e){}createAssistant(e){var t;this.selStrSkills&&0!==this.selStrSkills.length?this.forma.invalid?(null===(t=this.forma.errors)||void 0===t?void 0:t.password)&&this.snack.open(this.forma.errors.password,"ACEPTAR",{duration:5e3}):this.assistantEdit?this.userService.updateAssistant({_id:this.assistantEdit._id,id_role:this.forma.value.rol,tx_name:this.forma.value.nombre,tx_email:this.forma.value.email,tx_password:this.forma.value.password,id_skills:this.selStrSkills}).subscribe(t=>{this.assistantEdit=null,this.updateAssistants.emit(t.assistant._id),this.snack.open(t.msg,null,{duration:5e3}),this.forma.reset(),e.resetForm()},e=>{this.snack.open(e.error.msg,null,{duration:5e3})}):this.userService.createAssistant({tx_name:this.forma.value.nombre,tx_email:this.forma.value.email,tx_password:this.forma.value.password,id_company:this.userService.usuario.id_company,id_skills:this.selStrSkills}).subscribe(t=>{this.updateAssistants.emit(t.assistant._id),this.snack.open(t.msg,null,{duration:5e3}),this.forma.reset(),e.resetForm()},e=>{this.snack.open(e.error.msg,null,{duration:5e3})}):this.snack.open("Seleccione al menos un skill","ACEPTAR",{duration:5e3})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-assistant-create-form"]],inputs:{assistantEdit:"assistantEdit"},outputs:{updateAssistants:"updateAssistants"},features:[n.xb],decls:31,vars:7,consts:[["autocomplete","off","ngNativeValidate","",2,"color","brown",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["color","warn","appearance","fill","logincss","",1,"w-100"],["formControlName","rol","name","rol","required",""],["value","USER_ROLE"],["value","ASSISTANT_ROLE"],["color","warn","appearance","fill",1,"w-100"],["matInput","","placeholder","Nombre","formControlName","nombre","name","nombre","type","text","required","","placeholder","Nombre"],["matInput","","placeholder","Email","formControlName","email","name","email","type","email","required","","placeholder","Correo"],["matInput","","placeholder","Clave","formControlName","password","name","password","type","password","required","","placeholder","Contrase\xf1a","autocomplete","new-password"],["matInput","","placeholder","Clave","formControlName","password2","name","password2","type","password","required","","placeholder","Confirma contrase\xf1a","autocomplete","new-password"],[3,"ngModelOptions","ngModel","ngModelChange"],["name","selStrSkills",3,"value","click",4,"ngFor","ngForOf"],[1,"form-group","text-center"],["class","btn btn-success btn-block text-uppercase waves-effect waves-light","type","submit",4,"ngIf"],["class","btn btn-danger btn-block text-uppercase waves-effect waves-light","type","submit",4,"ngIf"],["name","selStrSkills",3,"value","click"],[1,"mat-select-option-nowarp"],["type","submit",1,"btn","btn-success","btn-block","text-uppercase","waves-effect","waves-light"],["type","submit",1,"btn","btn-danger","btn-block","text-uppercase","waves-effect","waves-light"]],template:function(e,t){if(1&e){const e=n.Rb();n.Qb(0,"form",0,1),n.Xb("ngSubmit",(function(){n.kc(e);const s=n.jc(1);return t.createAssistant(s)})),n.Qb(2,"mat-form-field",2),n.Qb(3,"mat-label"),n.rc(4,"Rol"),n.Pb(),n.Qb(5,"mat-select",3),n.Qb(6,"mat-option",4),n.rc(7," Administrador y Asistente"),n.Pb(),n.Qb(8,"mat-option",5),n.rc(9," Asistente "),n.Pb(),n.Pb(),n.Pb(),n.Qb(10,"mat-form-field",6),n.Qb(11,"mat-label"),n.rc(12,"Nombre"),n.Pb(),n.Mb(13,"input",7),n.Pb(),n.Qb(14,"mat-form-field",6),n.Qb(15,"mat-label"),n.rc(16,"Email"),n.Pb(),n.Mb(17,"input",8),n.Pb(),n.Qb(18,"mat-form-field",6),n.Qb(19,"mat-label"),n.rc(20,"Clave"),n.Pb(),n.Mb(21,"input",9),n.Pb(),n.Qb(22,"mat-form-field",6),n.Qb(23,"mat-label"),n.rc(24,"Clave"),n.Pb(),n.Mb(25,"input",10),n.Pb(),n.Qb(26,"mat-selection-list",11),n.Xb("ngModelChange",(function(e){return t.selStrSkills=e})),n.qc(27,Q,3,2,"mat-list-option",12),n.Pb(),n.Qb(28,"div",13),n.qc(29,S,2,0,"button",14),n.qc(30,y,2,0,"button",15),n.Pb(),n.Pb()}2&e&&(n.ec("formGroup",t.forma),n.zb(26),n.ec("ngModelOptions",n.gc(6,_))("ngModel",t.selStrSkills),n.zb(1),n.ec("ngForOf",t.skills),n.zb(2),n.ec("ngIf",!t.assistantEdit),n.zb(1),n.ec("ngIf",t.assistantEdit))},directives:[r.l,r.f,u.b,u.e,g.a,r.k,r.d,r.p,w.h,m.a,r.b,P.c,r.n,i.i,i.j,P.b],styles:[".mat-select-option-nowarp[_ngcontent-%COMP%]{float:left;width:-webkit-max-content;width:max-content}"]}),e})();function x(e,t){1&e&&(n.Qb(0,"span"),n.Qb(1,"mat-icon",15),n.rc(2,"check"),n.Pb(),n.Pb())}function I(e,t){1&e&&(n.Qb(0,"span"),n.Qb(1,"mat-icon",16),n.rc(2,"star"),n.Pb(),n.Pb())}function C(e,t){if(1&e){const e=n.Rb();n.Qb(0,"tr"),n.Qb(1,"td"),n.rc(2),n.Pb(),n.Qb(3,"td"),n.qc(4,x,3,0,"span",11),n.Pb(),n.Qb(5,"td"),n.qc(6,I,3,0,"span",11),n.Pb(),n.Qb(7,"td",12),n.Qb(8,"mat-icon",13),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().editAssistant(s)})),n.rc(9,"edit"),n.Pb(),n.Qb(10,"mat-icon",14),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().deleteAssistant(s._id)})),n.rc(11,"delete "),n.Pb(),n.Pb(),n.Pb()}if(2&e){const e=t.$implicit,s=n.Zb();n.zb(2),n.tc("",null==e?null:e.tx_name," "),n.zb(2),n.ec("ngIf",e._id===s.assistantUpdated),n.zb(2),n.ec("ngIf","USER_ROLE"===e.id_role)}}let q=(()=>{class e{constructor(e,t){this.userService=e,this.snack=t}ngOnInit(){this.readAssistants()}editAssistant(e){this.assistantEdit=e}deleteAssistant(e){this.snack.open("Desea eliminar el asistente?","ELIMINAR",{duration:1e4}).afterDismissed().subscribe(t=>{t.dismissedByAction&&this.userService.deleteAssistant(e).subscribe(t=>{this.snack.open(t.msg,null,{duration:5e3}),this.assistants=this.assistants.filter(t=>t._id!=e)},e=>{this.snack.open(e.msg,null,{duration:5e3})})})}updateAssistants(e){this.assistantUpdated=e,this.readAssistants()}readAssistants(){this.userService.readAssistants(this.userService.usuario.id_company).subscribe(e=>{this.assistants=e.assistants})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-assistants"]],decls:13,vars:2,consts:[[1,"m-4","animated","fadeIn"],[1,"card","bg-primary","lead","text-white"],[1,"card-header"],[1,"card-body","card-tickets-info","table-responsive-sm"],[1,"table","table-sm","text-white"],[4,"ngFor","ngForOf"],[1,"my-4"],[1,"card","lead"],[1,"card-header","bg-success"],[1,"card-body"],[3,"assistantEdit","updateAssistants"],[4,"ngIf"],[2,"text-align","right"],[1,"ml-2","list-crud-edit",3,"click"],[1,"ml-2","list-crud-delete",3,"click"],[1,"ml-2","list-crud-edit"],[1,"ml-2","list-crud-star"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.rc(3,"Asistentes"),n.Pb(),n.Qb(4,"div",3),n.Qb(5,"table",4),n.qc(6,C,12,3,"tr",5),n.Pb(),n.Pb(),n.Pb(),n.Mb(7,"div",6),n.Qb(8,"div",7),n.Qb(9,"div",8),n.rc(10,"Alta de asistente"),n.Pb(),n.Qb(11,"div",9),n.Qb(12,"app-assistant-create-form",10),n.Xb("updateAssistants",(function(e){return t.updateAssistants(e)})),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(6),n.ec("ngForOf",t.assistants),n.zb(6),n.ec("assistantEdit",t.assistantEdit))},directives:[i.i,A,i.j,f.a],styles:[""]}),e})(),E=(()=>{class e{constructor(e,t){this.userService=e,this.snack=t,this.skillCreated=new n.n}ngOnInit(){this.forma=new r.e({cdSkill:new r.c(null,r.q.required),txSkill:new r.c(null,r.q.required)})}createSkill(e){this.forma.invalid||this.userService.createSkill({id_company:this.userService.usuario.id_company,cd_skill:this.forma.value.cdSkill,tx_skill:this.forma.value.txSkill,__v:null,_id:null}).subscribe(t=>{this.skillCreated.emit(t.skill),this.snack.open(t.msg,null,{duration:5e3}),this.forma.reset(),e.resetForm()},e=>{this.snack.open(e.error.msg,null,{duration:5e3})})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-skill-create-form"]],outputs:{skillCreated:"skillCreated"},decls:13,vars:1,consts:[["autocomplete","off","ngNativeValidate","",2,"color","brown",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["color","warn","appearance","fill",1,"w-100"],["matInput","","placeholder","V","formControlName","cdSkill","name","cdSkill","type","text","required",""],["matInput","","placeholder","Ventas","formControlName","txSkill","name","txSkill","type","text","required",""],[1,"form-group","text-center"],["type","submit",1,"btn","btn-success","btn-block","text-uppercase","waves-effect","waves-light"]],template:function(e,t){if(1&e){const e=n.Rb();n.Qb(0,"form",0,1),n.Xb("ngSubmit",(function(){n.kc(e);const s=n.jc(1);return t.createSkill(s)})),n.Qb(2,"mat-form-field",2),n.Qb(3,"mat-label"),n.rc(4,"Abreviado"),n.Pb(),n.Mb(5,"input",3),n.Pb(),n.Qb(6,"mat-form-field",2),n.Qb(7,"mat-label"),n.rc(8,"Descripcion"),n.Pb(),n.Mb(9,"input",4),n.Pb(),n.Qb(10,"div",5),n.Qb(11,"button",6),n.rc(12,"Alta de Skill"),n.Pb(),n.Pb(),n.Pb()}2&e&&n.ec("formGroup",t.forma)},directives:[r.l,r.f,u.b,u.e,m.a,r.b,r.k,r.d,r.p],styles:[""]}),e})();function F(e,t){if(1&e){const e=n.Rb();n.Qb(0,"tr"),n.Qb(1,"td"),n.rc(2),n.Pb(),n.Qb(3,"td"),n.rc(4),n.Pb(),n.Qb(5,"td",10),n.Qb(6,"mat-icon",11),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().editSkill(s._id)})),n.rc(7,"edit"),n.Pb(),n.Qb(8,"mat-icon",12),n.Xb("click",(function(){n.kc(e);const s=t.$implicit;return n.Zb().deleteSkill(s._id)})),n.rc(9,"delete"),n.Pb(),n.Pb(),n.Pb()}if(2&e){const e=t.$implicit;n.zb(2),n.tc(" ",null==e?null:e.cd_skill," "),n.zb(2),n.tc(" ",null==e?null:e.tx_skill," ")}}const D=[{path:"home",component:o},{path:"desktops",component:k},{path:"assistants",component:q},{path:"skills",component:(()=>{class e{constructor(e,t){this.userService=e,this.snack=t}ngOnInit(){this.userService.readSkills(this.userService.usuario.id_company).subscribe(e=>{this.skills=e.skills})}editSkill(e){}deleteSkill(e){this.snack.open("Desea eliminar el skill?","ELIMINAR",{duration:1e4}).afterDismissed().subscribe(t=>{t.dismissedByAction&&this.userService.deleteSkill(e).subscribe(t=>{this.snack.open(t.msg,null,{duration:5e3}),this.skills=this.skills.filter(t=>t._id!=e)},e=>{this.snack.open(e.msg,null,{duration:5e3})})})}skillCreated(e){this.skills.push(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(l.a),n.Lb(b.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-skills"]],decls:13,vars:1,consts:[[1,"m-4","animated","fadeIn"],[1,"card","bg-danger","lead","text-white"],[1,"card-header"],[1,"card-body","card-tickets-info","table-responsive-sm"],[1,"table","table-sm","text-white"],[4,"ngFor","ngForOf"],[1,"my-4"],[1,"card","lead"],[1,"card-body"],[3,"skillCreated"],[2,"text-align","right"],[1,"ml-2","list-crud-edit",3,"click"],[1,"ml-2","list-crud-delete",3,"click"]],template:function(e,t){1&e&&(n.Qb(0,"div",0),n.Qb(1,"div",1),n.Qb(2,"div",2),n.rc(3,"Skills"),n.Pb(),n.Qb(4,"div",3),n.Qb(5,"table",4),n.qc(6,F,10,2,"tr",5),n.Pb(),n.Pb(),n.Pb(),n.Mb(7,"div",6),n.Qb(8,"div",7),n.Qb(9,"div",2),n.rc(10,"Alta de Skills"),n.Pb(),n.Qb(11,"div",8),n.Qb(12,"app-skill-create-form",9),n.Xb("skillCreated",(function(e){return t.skillCreated(e)})),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(6),n.ec("ngForOf",t.skills))},directives:[i.i,E,f.a],styles:[""]}),e})()},{path:"dashboard",component:d},{path:"",redirectTo:"/user/home",pathMatch:"full"},{path:"**",component:c.a}];let O=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[a.e.forChild(D)],a.e]}),e})();var L=s("1+r1"),M=s("j1ZV");let R=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[i.b,r.o,r.g,L.a,M.a,O]]}),e})()}}]);