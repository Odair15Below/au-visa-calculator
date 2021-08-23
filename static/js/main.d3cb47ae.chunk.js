(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{105:function(e){e.exports=JSON.parse('[{"category":"Visa Subclass","headLineQuestion":"Which visa Subclass are you applying for?","options":[{"description":"Skilled Independent visa Subclass 189","requirements":[{"description":"You must have an occupation on the MLTSSL."}],"points":5},{"description":"Skilled Nominated visa Subclass 190","requirements":[{"description":"Requires nomination by a State or Territory government."},{"description":"You must have an occupation on the MLTSSL or STSOL."}],"points":5},{"description":"Skilled Work Regional (Provisional) visa Subclass 491","requirements":[{"description":"Requires nomination by a State or Territory government, or sponsorship by a suitable family member."},{"description":"You must have an occupation on the MLTSSL or STSOL or ROL."}],"points":5}]},{"category":"Age","headLineQuestion":"Your age at the time of invitation to apply for the visa.","options":[{"description":"18 to 24","points":25},{"description":"25 to 32","points":30},{"description":"33 to 39","points":25},{"description":"40 to 44","points":15}]},{"category":"English Language","headLineQuestion":"What are your English Language qualifications at the time of invitation to apply for the visa?","options":[{"description":"Competent English","points":0,"requirements":[{"description":"Passport from UK, USA, Canada, NZ or Ireland; or"},{"description":"IELTS: at least 6 in each component; or"},{"description":"OET: at least \'B\' in each component; or"},{"description":"TOEFL iBT: 12 in Listening, 13 Reading, 21 Writing, 18 Speaking; or"},{"description":"PTE Academic: At least 50 in each component; or"},{"description":"Cambridge (CAE): At least 169 in each component"}]},{"description":"Proficient English","points":10,"requirements":[{"description":"IELTS: at least 7 in each component; or"},{"description":"OET: at least \'B\' in each component; or"},{"description":"OET: at least \'B\' in each component; or"},{"description":"TOEFL iBT: 24 in Listening, 24 Reading, 27 Writing, 23 Speaking; or"},{"description":"PTE Academic: At least 65 in each component; or"},{"description":"Cambridge (CAE): At least 185 in each component"}]},{"description":"Superior English","points":20,"requirements":[{"description":"IELTS: at least 8 in each component; or"},{"description":"OET: at least \'A\' in each component; or"},{"description":"TOEFL iBT: 28 in Listening, 29 Reading, 30 Writing, 26 Speaking; or"},{"description":"TOEFL iBT: 24 in Listening, 24 Reading, 27 Writing, 23 Speaking; or"},{"description":"PTE Academic: At least 79 in each component; or"},{"description":"Cambridge (CAE): At least 200 in each component"}]}]},{"category":"Overseas Work Experience","headLineQuestion":"In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation outside Australia?","options":[{"description":"8 years or more","points":15},{"description":"5 to 7 years","points":10},{"description":"3 to 4 years","points":5},{"description":"Less than 3 years","points":0}],"requirements":["For the employment to be counted it must be at least 20 hours per week for remuneration","The maximum points that can be awarded for \'Overseas Work Experience\' and \'Australian Work Experience\' combined, is 20 points"]},{"category":"Australian Work Experience","headLineQuestion":"In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation in Australia?","options":[{"description":"8 years or more","points":20},{"description":"5 to 7 years","points":15},{"description":"3 to 4 years","points":10},{"description":"1 to 2 years","points":5},{"description":"Less than 3 years","points":0}],"requirements":["The maximum points that can be awarded for \'Overseas Work Experience\' and \'Australian Work Experience\' combined, is 20 points"]},{"category":"Educational Qualifications","headLineQuestion":"What is your highest qualification?","options":[{"description":"A Doctorate degree (PhD) from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard","points":20},{"description":"A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard","points":15},{"description":"A diploma or trade qualification completed in Australia; or other award or qualification recognised by the skills assessing authority","points":10},{"description":"No Recognised Qualifications","points":0}]},{"category":"Australian Educational Qualification","headLineQuestion":"Degree, diploma, advanced diploma or trade qualification from an Australian educational institution which took at least 2 years of full-time study and was taught in English.","options":[{"description":"Yes","points":5},{"description":"No","points":0}]},{"category":"Specialist Educational Qualification","headLineQuestion":"A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).","options":[{"description":"Yes","points":10},{"description":"No","points":0}]},{"category":"Accredited Community Language","headLineQuestion":"Do you hold any one of the following?","options":[{"description":"Yes","requirements":["Accreditation at the paraprofessional level or above;","Certification at the certified provisional level or above;","A community language credential"],"points":5},{"description":"No","points":0}]},{"category":"Partner Qualifications","headLineQuestion":"Do you have a partner (spouse or de facto partner) who meets the following criteria?","options":[{"description":"10 points (couple)","requirements":[{"description":"My partner is aged under 45, and"},{"description":"My partner has Competent English, and"},{"description":"My partner is an applicant of the same subclass of visa as me, and"},{"description":"My partner nominated a suitable skilled occupation and obtained a positive skills assessment (that is not for a Subclass 485 visa)"}],"points":10},{"description":"10 points (single)","requirements":[{"description":"I don\u2019t have a spouse or de facto partner, or"},{"description":"My partner is an Australian permanent resident or an Australian citizen"}],"points":10},{"description":"5 points","requirements":[{"description":"My partner has Competent English, and"},{"description":"My partner is an applicant of the same subclass of visa as me, and"},{"description":"My partner is not an Australian permanent resident or an Australian citizen"}],"points":5},{"description":"0 points","requirements":["None of the above"],"points":0}]},{"category":"Professional Year in Australia","headLineQuestion":"Did you complete a professional year program in Australia in your nominated skilled occupation for at least 12 months in the 48 months immediately before the time of invitation to apply for the visa?","options":[{"description":"Yes","requirements":[],"points":5},{"description":"No","requirements":[],"points":0}]}]')},110:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(31),r=n.n(o),s=n(15),c=n(69),d={name:"Odair Ferreira",loggedIn:!0};var p=n(17),l=n(105),u={darkMode:window.matchMedia("(prefers-color-scheme: dark)").matches,data:l,selectedTabIndex:0,alertMessage:"",scoreBoard:{points:0,selectedOptions:{}}};var h=function(e){return e.app.scoreBoard.points},b=function(e){return e.app.data},j=function(e){return e.app.darkMode},m=function(e){return e.app.scoreBoard.selectedOptions},g=function(e){return e.app.selectedTabIndex},f=function(e){return e.app.alertMessage},O="app/optionChanged",y="app/darkModeChanged",x="app/selectedCategoryTabChanged",v="app/AlertMessageClosed",A=Object(c.b)(Object(c.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=Object.assign({},e.scoreBoard.selectedOptions);n[t.payload.category]={option:t.payload.option,points:t.payload.points};var i=e.selectedTabIndex+1<=l.length-1?e.selectedTabIndex+1:l.length-1,a=Object.keys(n).reduce((function(e,t){return e+n[t].points}),0),o=t.payload.points>0?"".concat(t.payload.points," added to your total score"):"";return Object(p.a)(Object(p.a)({},e),{},{selectedTabIndex:i,scoreBoard:Object(p.a)(Object(p.a)({},e.scoreBoard),{},{points:a,selectedOptions:n}),alertMessage:o});case y:return Object(p.a)(Object(p.a)({},e),{},{darkMode:t.payload});case x:return Object(p.a)(Object(p.a)({},e),{},{selectedTabIndex:t.payload});case v:return Object(p.a)(Object(p.a)({},e),{},{alertMessage:""});default:return e}}})),L=n(91),k=n(163),T=n(155),S=n(164),E=n(165),w=n(157),q=n(148),C=n(156),M=n(147),W=n(158),I=n(90),B=n.n(I),Q=n(80),P=n.n(Q),D=n(75),N=n.n(D),R=n(81),F=n.n(R),Y=n(82),z=n.n(Y),J=n(83),U=n.n(J),H=n(84),K=n.n(H),V=n(85),Z=n.n(V),G=n(86),X=n.n(G),$=n(87),_=n.n($),ee=n(88),te=n.n(ee),ne=n(89),ie=n.n(ne),ae=n(1),oe=function(e){switch(e.toLowerCase()){case"visa subclass":return Object(ae.jsx)(N.a,{});case"age":return Object(ae.jsx)(P.a,{});case"english language":return Object(ae.jsx)(F.a,{});case"overseas work experience":return Object(ae.jsx)(z.a,{});case"australian work experience":return Object(ae.jsx)(U.a,{});case"educational qualifications":return Object(ae.jsx)(K.a,{});case"australian educational qualification":return Object(ae.jsx)(Z.a,{});case"specialist educational qualification":return Object(ae.jsx)(X.a,{});case"accredited community language":return Object(ae.jsx)(_.a,{});case"partner qualifications":return Object(ae.jsx)(te.a,{});case"professional year in australia":return Object(ae.jsx)(ie.a,{});default:return Object(ae.jsx)(B.a,{})}};function re(e){var t=e.category;return Object(ae.jsx)("div",{children:oe(t)})}var se=n(92),ce=n(153),de=n(150),pe=n(48),le=n.n(pe),ue=["children","value","index"],he=function(e){var t=e.children,n=e.value,i=e.index,a=Object(se.a)(e,ue);return Object(ae.jsx)(C.a,Object(p.a)(Object(p.a)({component:"div",role:"tabpanel",hidden:n!==i,id:"scrollable-force-tabpanel-".concat(i),"aria-labelledby":"scrollable-force-tab-".concat(i)},a),{},{children:n===i&&Object(ae.jsx)(w.a,{p:0,children:t})}))},be=function(e){var t=e.opt,n=e.cat,i=Object(s.b)(),a=function(e){i(function(e){return{type:O,payload:e}}(e))},o=Object(s.c)(m),r=void 0!==o&&void 0!==o[n]&&o[n].option===t.description;return Object(ae.jsxs)(ce.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",onClick:function(){return a({category:n,option:t.description,points:t.points})},sx:{paddingBottom:"20px",cursor:"pointer"},children:[Object(ae.jsx)(ce.a,{item:!0,children:Object(ae.jsx)(de.a,{checked:r,size:"small"})}),Object(ae.jsxs)(ce.a,{item:!0,xs:10,children:[Object(ae.jsxs)(C.a,{variant:"body1",component:"span",children:[t.description," "]}),Object(ae.jsxs)(C.a,{variant:"body1",component:"span",fontWeight:"fontWeightLight",children:["(",t.points," points)"]})]})]})};function je(e){var t=e.category,n=e.value,i=e.index;return Object(ae.jsxs)(he,{value:n,index:i,p:2,children:[Object(ae.jsx)(C.a,{variant:"subtitle1",fontWeight:"fontWeightMedium",color:"text.secondary",sx:{padding:"20px 0"},children:t.headLineQuestion}),Object(ae.jsx)(C.a,{component:"div",children:t.options.map((function(e){return Object(ae.jsx)(be,{cat:t.category,opt:e},le()())}))})]},le()())}function me(){var e=Object(s.c)(b),t=Object(s.b)(),n=Object(s.c)(g);return Object(ae.jsxs)(w.a,{children:[Object(ae.jsx)(M.a,{value:n,onChange:function(e,n){t({type:x,payload:n})},"aria-label":"categories navigation tabs",variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:e.map((function(e,t){return Object(ae.jsx)(W.a,Object(p.a)({icon:Object(ae.jsx)(re,{category:e.category}),label:e.category},function(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}(t)),t)}))}),e.map((function(e,t){return Object(ae.jsx)(je,{value:n,index:t,category:e},t)}))]})}var ge=n(159),fe=n(161),Oe=n(154),ye=n(162),xe=n.p+"static/media/australia.5b0eda20.png";function ve(){var e=Object(s.b)(),t=Object(s.c)(j),n=function(t){return e(function(e){return{type:y,payload:e}}(t))};return Object(ae.jsx)(ge.a,{position:"static",children:Object(ae.jsx)(fe.a,{children:Object(ae.jsxs)(ce.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(ae.jsx)(ce.a,{item:!0,children:Object(ae.jsxs)(ce.a,{container:!0,spacing:2,alignItems:"center",children:[Object(ae.jsx)(ce.a,{item:!0,children:Object(ae.jsx)(Oe.a,{alt:"Australia",src:xe,variant:"square"})}),Object(ae.jsx)(ce.a,{item:!0,children:Object(ae.jsx)(C.a,{variant:"h6",component:"span",children:" AU visa calculator"})})]})}),Object(ae.jsxs)(ce.a,{item:!0,children:[Object(ae.jsx)(C.a,{variant:"caption",component:"span",children:"Dark Mode"}),Object(ae.jsx)(ye.a,{checked:t,onChange:function(){return n(!t)}}),Object(ae.jsx)(C.a,{variant:"caption",component:"span",children:t?"on":"off"})]})]})})})}var Ae=n(146),Le=n(160),ke=Object(Ae.a)((function(e){return{root:{margin:"20px auto",width:"80%"}}}));function Te(){var e=ke(),t=Object(s.c)(h);return Object(ae.jsxs)(Le.a,{className:e.root,elevation:24,sx:{bgcolor:"success.main",p:2,color:"primary.contrastText"},children:[Object(ae.jsx)(C.a,{variant:"caption",fontWeight:"fontWeightLight",children:"Points required for immigration to Australia"}),Object(ae.jsxs)(ce.a,{container:!0,direction:"row",justifyContent:"space-between",align:"center",children:[Object(ae.jsxs)(ce.a,{item:!0,children:[Object(ae.jsx)(C.a,{variant:"subtitle2",component:"span",fontWeight:"fontWeightLight",children:"Minimum: "}),Object(ae.jsx)(C.a,{variant:"subtitle1",component:"span",fontWeight:"fontWeightMedium",children:"65"})]}),Object(ae.jsxs)(ce.a,{item:!0,children:[Object(ae.jsx)(C.a,{variant:"subtitle2",component:"span",fontWeight:"fontWeightLight",children:"Your points: "}),Object(ae.jsx)(C.a,{variant:"subtitle1",component:"span",fontWeight:"fontWeightMedium",children:t})]})]})]})}var Se=n(144),Ee=n(151);function we(e){return Object(ae.jsx)(Se.a,Object(p.a)({},e))}function qe(){var e=Object(s.c)(f),t=Object(s.b)(),n=function(){t({type:v})};return Object(ae.jsx)(Ee.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:""!==e,onClose:n,autoHideDuration:3e3,TransitionComponent:we,onClick:n,children:Object(ae.jsx)(q.a,{severity:"success",children:e})},le()())}function Ce(){var e=Object(s.c)(j),t=Object(L.a)({palette:{mode:e?"dark":"light"}});return t=Object(k.a)(t),Object(ae.jsx)(T.a,{theme:t,children:Object(ae.jsxs)(a.a.StrictMode,{children:[Object(ae.jsx)(S.a,{}),Object(ae.jsx)(ve,{}),Object(ae.jsxs)(E.a,{sx:{padding:0},maxWidth:"md",children:[Object(ae.jsx)(Te,{}),Object(ae.jsx)(w.a,{m:2,children:Object(ae.jsx)(q.a,{severity:"info",m:"2",children:Object(ae.jsx)(C.a,{variant:"caption",children:"Reply to the below questions and get your score for Australian skill visa program."})})}),Object(ae.jsx)(me,{}),Object(ae.jsx)(qe,{})]})]})})}var Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))};r.a.render(Object(ae.jsx)(s.a,{store:A,children:Object(ae.jsx)(a.a.StrictMode,{children:Object(ae.jsx)(Ce,{})})}),document.getElementById("root")),Me()}},[[110,1,2]]]);
//# sourceMappingURL=main.d3cb47ae.chunk.js.map