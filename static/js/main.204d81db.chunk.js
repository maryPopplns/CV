(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(1),i=a.n(t),c=a(3),r=a.n(c),l=(a(13),a(14),a(15),a(0));function o(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{id:"header_title",children:"CV Mkr"}),Object(l.jsx)("hr",{id:"header_horizontal_rule"})]})}var s=a(6),d=a(4),u=a(5),m=a(8),j=a(7);a(17),a(18);function h(e){return Object(l.jsxs)("form",{id:"general_info_form",children:[Object(l.jsxs)("label",{className:"general_info_label",htmlFor:"lastName",children:["last name :",Object(l.jsx)("input",{className:"general_info_input",name:"lastName",type:"text",id:"lastName",value:e.data.generalInfo.lastName,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"general_info_label",htmlFor:"firstName",children:["first name :",Object(l.jsx)("input",{className:"general_info_input",name:"firstName",type:"text",id:"firstName",value:e.data.generalInfo.firstName,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"general_info_label",htmlFor:"email",children:["email :",Object(l.jsx)("input",{className:"general_info_input",type:"email",name:"email",id:"email",required:!0,value:e.data.generalInfo.email,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"general_info_label",htmlFor:"phoneNumber",children:["phone Number :",Object(l.jsx)("input",{className:"general_info_input",name:"phoneNumber",type:"tel",id:"phoneNumber",value:e.data.generalInfo.phoneNumber,onChange:e.onChange})]})]})}a(19);function b(e){return Object(l.jsxs)("form",{className:"add_education_form",children:[Object(l.jsxs)("label",{className:"add_education_label",children:["Institution :",Object(l.jsx)("input",{id:e.index,className:"add_education_input",name:"institution",type:"text",value:e.data.institution,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"add_education_label",children:["Degree :",Object(l.jsx)("input",{id:e.index,className:"add_education_input",name:"degree",type:"text",value:e.data.degree,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"add_education_label",children:["Start :",Object(l.jsx)("input",{id:e.index,className:"add_education_input",name:"start",type:"text",value:e.data.start,onChange:e.onChange})]}),Object(l.jsxs)("label",{className:"add_education_label",children:["End :",Object(l.jsx)("input",{id:e.index,className:"add_education_input",name:"end",type:"text",value:e.data.end,onChange:e.onChange})]}),Object(l.jsx)("i",{id:e.index,onClick:e.onClick,className:"fas fa-trash-alt"})]})}var f=function(e){Object(m.a)(a,e);var n=Object(j.a)(a);function a(e){var t;return Object(d.a)(this,a),(t=n.call(this)).generalInfoChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState((function(e){var n=e.generalInfo;return n[a]=i,{generalInfo:n}}))},t.educationChange=function(e){var n=e.target,a=n.name,i=n.value,c=n.id;t.setState((function(e){var n=e.education;return n[c][a]=i,{education:n}}))},t.addEducation=function(){var e={institution:"",degree:"",start:"",end:""};t.setState((function(n){return{education:[].concat(Object(s.a)(n.education),[e])}}))},t.removeEducation=function(e){var n=e.target.id;t.setState((function(e){return{education:e.education.filter((function(e,a){return a!==+n}))}}))},t.state={generalInfo:{lastName:"",firstName:"",email:"",phoneNumber:""},education:[],experience:[]},t}return Object(u.a)(a,[{key:"render",value:function(){var e=this,n=this.state.education.map((function(n,a){return Object(l.jsx)(b,{index:a,data:n,onChange:e.educationChange,onClick:e.removeEducation},a)}));return Object(l.jsxs)("main",{children:[Object(l.jsx)(h,{onChange:this.generalInfoChange,data:this.state}),n,Object(l.jsx)("button",{id:"add_education_button",onClick:this.addEducation,children:"Add Education"})]})}}]),a}(i.a.Component);var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(f,{})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.204d81db.chunk.js.map