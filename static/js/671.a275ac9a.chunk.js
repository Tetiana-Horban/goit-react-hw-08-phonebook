"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[671],{4671:function(e,o,n){n.r(o),n.d(o,{default:function(){return re}});var r=n(885),t=n(4942),a=n(3366),i=n(7462),l=n(2791),c=n(8182),s=n(767),d=n(2930),u=n(890),m=n(4036),p=n(7630),f=n(1046),h=n(5159),b=n(208);function v(e){return(0,h.Z)("MuiFormControlLabel",e)}var Z=(0,b.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),x=n(6147),g=n(184),y=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],k=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[(0,t.Z)({},"& .".concat(Z.label),o.label),o.root,o["labelPlacement".concat((0,m.Z)(n.labelPlacement))]]}})((function(e){var o=e.theme,n=e.ownerState;return(0,i.Z)((0,t.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(Z.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,t.Z)({},"& .".concat(Z.label),(0,t.Z)({},"&.".concat(Z.disabled),{color:o.palette.text.disabled})))})),w=l.forwardRef((function(e,o){var n=(0,f.Z)({props:e,name:"MuiFormControlLabel"}),r=n.className,t=n.componentsProps,p=void 0===t?{}:t,h=n.control,b=n.disabled,Z=n.disableTypography,w=n.label,P=n.labelPlacement,C=void 0===P?"end":P,j=(0,a.Z)(n,y),S=(0,d.Z)(),R=b;"undefined"===typeof R&&"undefined"!==typeof h.props.disabled&&(R=h.props.disabled),"undefined"===typeof R&&S&&(R=S.disabled);var F={disabled:R};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof h.props[e]&&"undefined"!==typeof n[e]&&(F[e]=n[e])}));var B=(0,x.Z)({props:n,muiFormControl:S,states:["error"]}),L=(0,i.Z)({},n,{disabled:R,labelPlacement:C,error:B.error}),z=function(e){var o=e.classes,n=e.disabled,r=e.labelPlacement,t=e.error,a={root:["root",n&&"disabled","labelPlacement".concat((0,m.Z)(r)),t&&"error"],label:["label",n&&"disabled"]};return(0,s.Z)(a,v,o)}(L),M=w;return null==M||M.type===u.Z||Z||(M=(0,g.jsx)(u.Z,(0,i.Z)({component:"span",className:z.label},p.typography,{children:M}))),(0,g.jsxs)(k,(0,i.Z)({className:(0,c.Z)(z.root,r),ownerState:L,ref:o},j,{children:[l.cloneElement(h,F),M]}))})),P=n(2065),C=n(8744),j=n(533);function S(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var R=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],F=(0,p.ZP)(j.Z)((function(e){var o=e.ownerState;return(0,i.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),B=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),L=l.forwardRef((function(e,o){var n=e.autoFocus,t=e.checked,l=e.checkedIcon,u=e.className,p=e.defaultChecked,f=e.disabled,h=e.disableFocusRipple,b=void 0!==h&&h,v=e.edge,Z=void 0!==v&&v,x=e.icon,y=e.id,k=e.inputProps,w=e.inputRef,P=e.name,j=e.onBlur,L=e.onChange,z=e.onFocus,M=e.readOnly,I=e.required,D=e.tabIndex,N=e.type,V=e.value,A=(0,a.Z)(e,R),H=(0,C.Z)({controlled:t,default:Boolean(p),name:"SwitchBase",state:"checked"}),T=(0,r.Z)(H,2),q=T[0],E=T[1],O=(0,d.Z)(),W=f;O&&"undefined"===typeof W&&(W=O.disabled);var _="checkbox"===N||"radio"===N,G=(0,i.Z)({},e,{checked:q,disabled:W,disableFocusRipple:b,edge:Z}),J=function(e){var o=e.classes,n=e.checked,r=e.disabled,t=e.edge,a={root:["root",n&&"checked",r&&"disabled",t&&"edge".concat((0,m.Z)(t))],input:["input"]};return(0,s.Z)(a,S,o)}(G);return(0,g.jsxs)(F,(0,i.Z)({component:"span",className:(0,c.Z)(J.root,u),centerRipple:!0,focusRipple:!b,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){z&&z(e),O&&O.onFocus&&O.onFocus(e)},onBlur:function(e){j&&j(e),O&&O.onBlur&&O.onBlur(e)},ownerState:G,ref:o},A,{children:[(0,g.jsx)(B,(0,i.Z)({autoFocus:n,checked:t,defaultChecked:p,className:J.input,disabled:W,id:_&&y,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;E(o),L&&L(e,o)}},readOnly:M,ref:w,required:I,ownerState:G,tabIndex:D,type:N},"checkbox"===N&&void 0===V?{}:{value:V},k)),q?l:x]}))})),z=n(9201),M=(0,z.Z)((0,g.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),I=(0,z.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),D=(0,z.Z)((0,g.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function N(e){return(0,h.Z)("MuiCheckbox",e)}var V=(0,b.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),A=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],H=(0,p.ZP)(L,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,n.indeterminate&&o.indeterminate,"default"!==n.color&&o["color".concat((0,m.Z)(n.color))]]}})((function(e){var o,n=e.theme,r=e.ownerState;return(0,i.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,P.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(o={},(0,t.Z)(o,"&.".concat(V.checked,", &.").concat(V.indeterminate),{color:n.palette[r.color].main}),(0,t.Z)(o,"&.".concat(V.disabled),{color:n.palette.action.disabled}),o))})),T=(0,g.jsx)(I,{}),q=(0,g.jsx)(M,{}),E=(0,g.jsx)(D,{}),O=l.forwardRef((function(e,o){var n,r,t=(0,f.Z)({props:e,name:"MuiCheckbox"}),c=t.checkedIcon,d=void 0===c?T:c,u=t.color,p=void 0===u?"primary":u,h=t.icon,b=void 0===h?q:h,v=t.indeterminate,Z=void 0!==v&&v,x=t.indeterminateIcon,y=void 0===x?E:x,k=t.inputProps,w=t.size,P=void 0===w?"medium":w,C=(0,a.Z)(t,A),j=Z?y:b,S=Z?y:d,R=(0,i.Z)({},t,{color:p,indeterminate:Z,size:P}),F=function(e){var o=e.classes,n=e.indeterminate,r=e.color,t={root:["root",n&&"indeterminate","color".concat((0,m.Z)(r))]},a=(0,s.Z)(t,N,o);return(0,i.Z)({},o,a)}(R);return(0,g.jsx)(H,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":Z},k),icon:l.cloneElement(j,{fontSize:null!=(n=j.props.fontSize)?n:P}),checkedIcon:l.cloneElement(S,{fontSize:null!=(r=S.props.fontSize)?r:P}),ownerState:R,ref:o},C,{classes:F}))})),W=n(6445),_=n(4708),G=n(4554),J=n(3044),K=n(6515),Q=n(6151),U=n(1889),X=n(3060),Y=n(7107),$=n(7012),ee=n(364),oe=n(501),ne=n(7256),re=function(){var e=(0,ee.useDispatch)(),o=(0,l.useState)(""),n=(0,r.Z)(o,2),t=n[0],a=n[1],i=(0,l.useState)(""),c=(0,r.Z)(i,2),s=c[0],d=c[1],m=(0,Y.Z)(),p=function(e){var o=e.target,n=o.name,r=o.value;switch(n){case"email":return a(r);case"password":return d(r);default:return}};return(0,g.jsx)($.Z,{theme:m,children:(0,g.jsxs)(W.Z,{component:"main",maxWidth:"xs",children:[(0,g.jsx)(_.ZP,{}),(0,g.jsxs)(G.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(J.Z,{sx:{m:1,bgcolor:"#1976d2"}}),(0,g.jsx)(u.Z,{component:"h1",variant:"h5",children:"Login"}),(0,g.jsxs)(G.Z,{component:"form",onSubmit:function(o){o.preventDefault(),e(ne.authOperations.login({email:t,password:s})),a(""),d("")},noValidate:!0,sx:{mt:1},children:[(0,g.jsx)(K.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,type:"email",value:t,onChange:p}),(0,g.jsx)(K.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s,onChange:p}),(0,g.jsx)(w,{control:(0,g.jsx)(O,{value:"remember",color:"primary"}),label:"Remember me"}),(0,g.jsx)(Q.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,g.jsxs)(U.ZP,{container:!0,children:[(0,g.jsx)(U.ZP,{item:!0,xs:!0,children:(0,g.jsx)(X.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,g.jsx)(U.ZP,{item:!0,children:(0,g.jsx)(X.Z,{component:oe.NavLink,to:"/register",variant:"body2",children:"Don't have an account? Register"})})]})]})]})]})})}},3060:function(e,o,n){n.d(o,{Z:function(){return S}});var r=n(2982),t=n(885),a=n(4942),i=n(3366),l=n(7462),c=n(2791),s=n(8182),d=n(767),u=n(8529),m=n(2065),p=n(4036),f=n(7630),h=n(3967),b=n(1046),v=n(3031),Z=n(2071),x=n(890),g=n(5159);function y(e){return(0,g.Z)("MuiLink",e)}var k=(0,n(208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(184),P=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=(0,f.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,o["underline".concat((0,p.Z)(n.underline))],"button"===n.component&&o.button]}})((function(e){var o=e.theme,n=e.ownerState,r=(0,u.D)(o,"palette.".concat(function(e){return C[e]||e}(n.color)))||n.color;return(0,l.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,m.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(k.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(e,o){var n=(0,h.Z)(),a=(0,b.Z)({props:e,name:"MuiLink"}),u=a.className,m=a.color,f=void 0===m?"primary":m,x=a.component,g=void 0===x?"a":x,k=a.onBlur,S=a.onFocus,R=a.TypographyClasses,F=a.underline,B=void 0===F?"always":F,L=a.variant,z=void 0===L?"inherit":L,M=a.sx,I=(0,i.Z)(a,P),D="function"===typeof M?M(n).color:null==M?void 0:M.color,N=(0,v.Z)(),V=N.isFocusVisibleRef,A=N.onBlur,H=N.onFocus,T=N.ref,q=c.useState(!1),E=(0,t.Z)(q,2),O=E[0],W=E[1],_=(0,Z.Z)(o,T),G=(0,l.Z)({},a,{color:("function"===typeof D?D(n):D)||f,component:g,focusVisible:O,underline:B,variant:z}),J=function(e){var o=e.classes,n=e.component,r=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,p.Z)(t)),"button"===n&&"button",r&&"focusVisible"]};return(0,d.Z)(a,y,o)}(G);return(0,w.jsx)(j,(0,l.Z)({color:f,className:(0,s.Z)(J.root,u),classes:R,component:g,onBlur:function(e){A(e),!1===V.current&&W(!1),k&&k(e)},onFocus:function(e){H(e),!0===V.current&&W(!0),S&&S(e)},ref:_,ownerState:G,variant:z,sx:[].concat((0,r.Z)(e.color?[{color:C[f]||f}]:[]),(0,r.Z)(Array.isArray(M)?M:[M]))},I))}))}}]);
//# sourceMappingURL=671.a275ac9a.chunk.js.map