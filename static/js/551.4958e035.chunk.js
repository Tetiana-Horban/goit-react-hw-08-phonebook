"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[551],{6551:function(e,n,o){o.r(n);var r=o(885),t=o(2791),i=o(364),a=o(7256),s=o(7107),l=o(7012),c=o(6445),u=o(4708),d=o(4554),m=o(3044),p=o(890),x=o(1889),h=o(6515),Z=o(6151),f=o(3060),v=o(501),b=o(184);n.default=function(){var e=(0,i.useDispatch)(),n=(0,t.useState)(""),o=(0,r.Z)(n,2),y=o[0],g=o[1],j=(0,t.useState)(""),w=(0,r.Z)(j,2),k=w[0],C=w[1],S=(0,t.useState)(""),D=(0,r.Z)(S,2),P=D[0],A=D[1],N=(0,s.Z)(),F=function(e){var n=e.currentTarget,o=n.name,r=n.value;switch(o){case"name":g(r);break;case"email":C(r);break;case"password":A(r)}};return(0,b.jsx)(l.Z,{theme:N,children:(0,b.jsxs)(c.Z,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(u.ZP,{}),(0,b.jsxs)(d.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(m.Z,{sx:{m:1,bgcolor:"#1976d2"}}),(0,b.jsx)(p.Z,{component:"h1",variant:"h5",children:"Register"}),(0,b.jsxs)(d.Z,{component:"form",noValidate:!0,onSubmit:function(n){n.preventDefault(),e(a.authOperations.register({name:y,email:k,password:P})),g(""),C(""),A("")},sx:{mt:3},children:[(0,b.jsxs)(x.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(h.Z,{autoFocus:!0,required:!0,fullWidth:!0,id:"Name",label:"Name",name:"Name",type:"text",value:y,onChange:F})}),(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(h.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",value:k,onChange:F})}),(0,b.jsx)(x.ZP,{item:!0,xs:12,children:(0,b.jsx)(h.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:P,onChange:F})})]}),(0,b.jsx)(Z.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"}),(0,b.jsx)(x.ZP,{container:!0,justifyContent:"flex-end",children:(0,b.jsx)(x.ZP,{item:!0,children:(0,b.jsx)(f.Z,{variant:"body2",component:v.NavLink,to:"/login",children:"Already have an account? Login"})})})]})]})]})})}},3060:function(e,n,o){o.d(n,{Z:function(){return D}});var r=o(2982),t=o(885),i=o(4942),a=o(3366),s=o(7462),l=o(2791),c=o(8182),u=o(767),d=o(8529),m=o(2065),p=o(4036),x=o(7630),h=o(3967),Z=o(1046),f=o(3031),v=o(2071),b=o(890),y=o(5159);function g(e){return(0,y.Z)("MuiLink",e)}var j=(0,o(208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=o(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=(0,x.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,p.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState,r=(0,d.D)(n,"palette.".concat(function(e){return C[e]||e}(o.color)))||o.color;return(0,s.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,m.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(j.focusVisible),{outline:"auto"}))})),D=l.forwardRef((function(e,n){var o=(0,h.Z)(),i=(0,Z.Z)({props:e,name:"MuiLink"}),d=i.className,m=i.color,x=void 0===m?"primary":m,b=i.component,y=void 0===b?"a":b,j=i.onBlur,D=i.onFocus,P=i.TypographyClasses,A=i.underline,N=void 0===A?"always":A,F=i.variant,R=void 0===F?"inherit":F,V=i.sx,W=(0,a.Z)(i,k),L="function"===typeof V?V(o).color:null==V?void 0:V.color,M=(0,f.Z)(),T=M.isFocusVisibleRef,q=M.onBlur,B=M.onFocus,_=M.ref,z=l.useState(!1),H=(0,t.Z)(z,2),E=H[0],I=H[1],O=(0,v.Z)(n,_),G=(0,s.Z)({},i,{color:("function"===typeof L?L(o):L)||x,component:y,focusVisible:E,underline:N,variant:R}),J=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,i={root:["root","underline".concat((0,p.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,u.Z)(i,g,n)}(G);return(0,w.jsx)(S,(0,s.Z)({color:x,className:(0,c.Z)(J.root,d),classes:P,component:y,onBlur:function(e){q(e),!1===T.current&&I(!1),j&&j(e)},onFocus:function(e){B(e),!0===T.current&&I(!0),D&&D(e)},ref:O,ownerState:G,variant:R,sx:[].concat((0,r.Z)(e.color?[{color:C[x]||x}]:[]),(0,r.Z)(Array.isArray(V)?V:[V]))},W))}))}}]);
//# sourceMappingURL=551.4958e035.chunk.js.map