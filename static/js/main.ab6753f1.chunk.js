(this["webpackJsonpcrud-page"]=this["webpackJsonpcrud-page"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),a=n.n(i),r=(n(14),n(4)),o=n(9),u=n(2),d=(n(15),"https://yourtestapi.com/api/posts"),j=(n(16),n(17),n(3)),l=n.n(j),b=(n(18),n(0)),p=function(e){var t=e.clickHandler,n=e.text,c=e.isWhite,s=e.isSubmit,i=e.fixedWidth,a=e.isDisabled;return Object(b.jsx)("button",{className:l()("Button",{"Button--white":c},{"Button--fixed-width":i}),type:s?"submit":"button",onClick:t,disabled:a,children:n})},O=(n(20),function(e){var t=e.hidePopUp,n=e.itWasError,c="Success!";return n&&(c="Oops, something went wrong!"),Object(b.jsxs)("div",{className:"ResultMessage",children:[Object(b.jsx)("p",{className:l()("ResultMessage__text",{"ResultMessage__text--error":n}),children:c}),Object(b.jsx)(p,{text:"close",fixedWidth:!0,clickHandler:t})]})}),f=function(e){var t=e.addPost,n=e.hidePopUp,s=Object(c.useState)(""),i=Object(u.a)(s,2),a=i[0],r=i[1],o=Object(c.useState)(""),j=Object(u.a)(o,2),f=j[0],h=j[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),v=m[0],_=m[1],P=Object(c.useState)(""),g=Object(u.a)(P,2),S=g[0],N=g[1],U=Object(c.useState)(!1),y=Object(u.a)(U,2),E=y[0],C=y[1],D=Object(c.useState)(!1),k=Object(u.a)(D,2),A=k[0],H=k[1],T=Object(c.useState)(!0),W=Object(u.a)(T,2),w=W[0],F=W[1],q=function(){F((function(e){return!e}))};Object(c.useEffect)((function(){setTimeout(q,0)}),[]);var I={title:a,text:f,image:v,url:S},B=function(e,n){var c;e.preventDefault(),(c=n,fetch("".concat(d),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)}).then((function(e){return e.json()}))).then((function(e){t(e),H(!0)})).catch((function(){C(!0)})),r(""),h(""),_(""),N("")};return Object(b.jsxs)("form",{className:l()("AddPostForm",{"AddPostForm--hidden":w}),onSubmit:function(e){B(e,I)},children:[E||A||Object(b.jsxs)("div",{className:"AddPostForm__content",children:[Object(b.jsx)("h2",{className:"AddPostForm__heading",children:"Add new post"}),Object(b.jsx)("input",{className:"AddPostForm__input",type:"text",value:a,onChange:function(e){r(e.target.value)},placeholder:"enter english name",required:!0}),Object(b.jsx)("input",{className:"AddPostForm__input",type:"text",value:f,onChange:function(e){h(e.target.value)},placeholder:"enter latin name",required:!0}),Object(b.jsx)("input",{className:"AddPostForm__input",type:"text",value:v,onChange:function(e){_(e.target.value)},placeholder:"add image url",required:!0}),Object(b.jsx)("input",{className:"AddPostForm__input",type:"text",value:S,onChange:function(e){N(e.target.value)},placeholder:"add article url",required:!0}),Object(b.jsxs)("div",{className:"AddPostForm__buttons",children:[Object(b.jsx)(p,{text:"add post",isSubmit:!0}),Object(b.jsx)(p,{text:"cancel",clickHandler:n,isWhite:!0})]})]}),Object(b.jsxs)("div",{className:"AddPostForm__buttons",children:[E&&Object(b.jsx)(O,{hidePopUp:n,itWasError:E}),A&&Object(b.jsx)(O,{hidePopUp:n,itWasError:E})]})]})},h=(n(21),function(e){var t=e.hidePopUp,n=Object(c.useState)(!0),s=Object(u.a)(n,2),i=s[0],a=s[1],r=function(){a((function(e){return!e}))};return Object(c.useEffect)((function(){setTimeout(r,0)}),[]),Object(b.jsx)("div",{className:l()("PopUpOverlay",{"PopUpOverlay--hidden":i}),onClick:t})}),x=function(e){var t=e.setAddPopUpIsShown,n=e.addPost,c=function(){t(!1)};return Object(b.jsxs)("div",{className:"AddPost",children:[Object(b.jsx)(h,{hidePopUp:c}),Object(b.jsx)(f,{addPost:n,hidePopUp:c})]})},m=(n(22),function(e){var t=e.addPopUpToggler,n=Object(c.useState)(!0),s=Object(u.a)(n,2),i=s[0],a=s[1],r=function(){a((function(e){return!e}))};return Object(c.useEffect)((function(){setTimeout(r,0)}),[]),Object(b.jsx)("div",{className:l()("AddPostButton",{"AddPostButton--hidden":i}),children:Object(b.jsx)(p,{text:"create new post",clickHandler:t})})}),v=(n(23),n(24),function(e){var t=e.isReverse,n=e.query,c=e.setSortBy,s=e.reverse,i=e.setQuery,a=e.resetSort;return Object(b.jsxs)("div",{className:"SearchAndSort",children:[Object(b.jsx)("input",{className:"SearchAndSort__input",type:"text",value:n,placeholder:"search...",onChange:function(e){i(e.target.value)}}),Object(b.jsxs)("select",{className:"SearchAndSort__select",onChange:function(e){c(e.target.value)},children:[Object(b.jsx)("option",{value:"title",children:"english name"}),Object(b.jsx)("option",{value:"text",children:"latin name"}),Object(b.jsx)("option",{value:"order",children:"order"}),Object(b.jsx)("option",{value:"updated",children:"updated"})]}),Object(b.jsx)(p,{text:t?"v":"^",clickHandler:s}),Object(b.jsx)(p,{text:"reset",clickHandler:a})]})}),_=function(e){var t=e.modeToggler,n=e.isInEditMode,c=e.isReversed,s=e.query,i=e.setSortBy,a=e.reverse,r=e.setQuery,o=e.resetSort;return Object(b.jsxs)("header",{className:"Header",children:[Object(b.jsx)("h1",{className:"Header__heading",children:Object(b.jsx)("a",{className:"Header__home-link",href:"/",children:"CRUD"})}),Object(b.jsx)(v,{isReverse:c,query:s,setSortBy:i,reverse:a,setQuery:r,resetSort:o}),Object(b.jsx)(p,{text:n?"quit edit":"edit mode",fixedWidth:!0,clickHandler:t})]})},P=(n(25),n(26),n(27),n(28),function(e){var t=e.popUpDisplayHandler,n=e.postId,s=e.setPosts,i=Object(c.useState)(!1),a=Object(u.a)(i,2),r=a[0],o=a[1],j=Object(c.useState)(!0),f=Object(u.a)(j,2),x=f[0],m=f[1],v=Object(c.useState)(!1),_=Object(u.a)(v,2),P=_[0],g=_[1],S=function(){m((function(e){return!e}))};Object(c.useEffect)((function(){setTimeout(S,0)}),[]);var N=function(){t(!1)},U=function(e){(function(e){return fetch("".concat(d,"/").concat(e),{method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject()}))})(e).then((function(){s((function(e){return e.filter((function(e){return e.id!==n}))}))})).catch((function(){o(!0)}))};return Object(b.jsxs)("div",{className:"ConfirmPopUp",children:[Object(b.jsx)(h,{hidePopUp:N}),Object(b.jsxs)("div",{className:l()("ConfirmPopUp__content",{"ConfirmPopUp__content--hidden":x}),children:[r||Object(b.jsxs)("div",{className:"ConfirmPopUp__interface",children:[Object(b.jsx)("p",{className:"ConfirmPopUp__text",children:"Are you sure?"}),Object(b.jsxs)("div",{className:"ConfirmPopUp__buttons",children:[Object(b.jsx)(p,{clickHandler:function(){U(n),g(!0)},text:"yes",isWhite:!0,fixedWidth:!0,isDisabled:P}),Object(b.jsx)(p,{clickHandler:N,text:"no",fixedWidth:!0})]})]}),Object(b.jsx)("div",{className:"ConfirmPopUp__message",children:r&&Object(b.jsx)(O,{hidePopUp:N,itWasError:r})})]})]})}),g=(n(29),function(e){var t=e.popUpDisplayHandler,n=e.postData,s=e.setPosts,i=Object(c.useState)(n.title),a=Object(u.a)(i,2),o=a[0],j=a[1],f=Object(c.useState)(n.text),x=Object(u.a)(f,2),m=x[0],v=x[1],_=Object(c.useState)(n.image),P=Object(u.a)(_,2),g=P[0],S=P[1],N=Object(c.useState)(n.url),U=Object(u.a)(N,2),y=U[0],E=U[1],C=Object(c.useState)(!1),D=Object(u.a)(C,2),k=D[0],A=D[1],H=Object(c.useState)(!1),T=Object(u.a)(H,2),W=T[0],w=T[1],F=Object(c.useState)(!0),q=Object(u.a)(F,2),I=q[0],B=q[1],M=Object(c.useState)(!1),L=Object(u.a)(M,2),R=L[0],J=L[1],Q=function(){B((function(e){return!e}))};Object(c.useEffect)((function(){setTimeout(Q,0)}),[]);var z={title:o,text:m,image:g,url:y},G=function(){t(!1)},K=function(e){var t,c;e.preventDefault(),J(!0),(t=z,c=n.id,fetch("".concat(d,"/").concat(c),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return e.json()}))).then((function(e){s((function(t){return function(e,t){return e.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),t):e}))}(t,e)})),w(!0)})).catch((function(){A(!0)}))};return Object(b.jsxs)("div",{className:"EditPopUp",children:[Object(b.jsx)(h,{hidePopUp:G}),Object(b.jsxs)("form",{className:l()("EditPopUp__form",{"EditPopUp__form--hidden":I}),onSubmit:function(e){K(e)},children:[k||W||Object(b.jsxs)("div",{className:"EditPopUp__interface",children:[Object(b.jsx)("h2",{className:"EditPopUp__heading",children:"Edit this post"}),Object(b.jsx)("input",{className:"EditPopUp__input",type:"text",value:o,onChange:function(e){j(e.target.value)},placeholder:"enter english name",required:!0}),Object(b.jsx)("input",{className:"EditPopUp__input",type:"text",value:m,onChange:function(e){v(e.target.value)},placeholder:"enter latin name",required:!0}),Object(b.jsx)("input",{className:"EditPopUp__input",type:"text",value:g,onChange:function(e){S(e.target.value)},placeholder:"add image url",required:!0}),Object(b.jsx)("input",{className:"EditPopUp__input",type:"text",value:y,onChange:function(e){E(e.target.value)},placeholder:"add article url",required:!0}),Object(b.jsxs)("div",{className:"EditPopUp__buttons",children:[Object(b.jsx)(p,{text:"submit",isSubmit:!0,isDisabled:R}),Object(b.jsx)(p,{text:"cancel",isWhite:!0,clickHandler:G})]})]}),Object(b.jsxs)("div",{className:"EditPopUp__message",children:[k&&Object(b.jsx)(O,{hidePopUp:G,itWasError:k}),W&&Object(b.jsx)(O,{hidePopUp:G,itWasError:k})]})]})]})}),S=function(e){var t=e.postData,n=e.setPosts,s=Object(c.useState)(!1),i=Object(u.a)(s,2),a=i[0],r=i[1],o=Object(c.useState)(!1),d=Object(u.a)(o,2),j=d[0],O=d[1],f=Object(c.useState)(!0),h=Object(u.a)(f,2),x=h[0],m=h[1],v=function(){m((function(e){return!e}))};Object(c.useEffect)((function(){setTimeout(v,0)}),[]);return Object(b.jsxs)("div",{className:l()("EditOrDelete",{"EditOrDelete--hidden":x}),children:[Object(b.jsx)(p,{text:"edit",clickHandler:function(){O(!0)},fixedWidth:!0}),Object(b.jsxs)("div",{children:[a&&Object(b.jsx)(P,{popUpDisplayHandler:r,postId:t.id,setPosts:n}),j&&Object(b.jsx)(g,{postData:t,popUpDisplayHandler:O,setPosts:n})]}),Object(b.jsx)(p,{text:"delete",isWhite:!0,clickHandler:function(){r(!0)},fixedWidth:!0})]})},N=function(e){var t=e.postData,n=e.isInEditMode,c=e.setPosts;return Object(b.jsxs)("div",{className:"PostCard",children:[Object(b.jsx)("h2",{className:"PostCard__heading",children:t.title}),Object(b.jsx)("p",{className:"PostCard__latin-name",children:t.text}),Object(b.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{className:l()("PostCard__image",{"PostCard__image--tall":!n}),src:t.image,alt:t.title})}),n&&Object(b.jsx)(S,{postData:t,setPosts:c})]})},U=function(e){var t=e.posts,n=e.isInEditMode,c=e.setPosts;return Object(b.jsx)("ul",{className:"ListOfPosts",children:t.map((function(e){return 1===e.active&&Object(b.jsx)("li",{className:"ListOfPosts__item",children:Object(b.jsx)(N,{isInEditMode:n,postData:e,setPosts:c})},e.id)}))})};var y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),j=a[0],l=a[1],p=Object(c.useState)(!1),O=Object(u.a)(p,2),f=O[0],h=O[1],v=Object(c.useState)(""),P=Object(u.a)(v,2),g=P[0],S=P[1],N=Object(c.useState)(!1),y=Object(u.a)(N,2),E=y[0],C=y[1],D=Object(c.useState)(""),k=Object(u.a)(D,2),A=k[0],H=k[1],T=n.filter((function(e){return e.title.toLowerCase().includes(A.toLowerCase())||e.text.toLowerCase().includes(A.toLowerCase())}));T.sort((function(e,t){switch(g){case"title":return e.title.localeCompare(t.title);case"text":return e.text.localeCompare(t.text);case"order":return e.sort_order&&t.sort_order?e.sort_order-t.sort_order:e.sort_order?-1:t.sort_order?1:-1;case"updated":return new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime();default:return 0}})),E&&T.reverse();var W=function(){fetch("".concat(d)).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){s(e)}))};return Object(c.useEffect)((function(){W()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{modeToggler:function(){h((function(e){return!e}))},isInEditMode:f,isReversed:E,query:A,setSortBy:S,reverse:function(){C((function(e){return!e}))},setQuery:H,resetSort:function(){S(""),C(!1),H("")}}),Object(b.jsxs)("main",{children:[Object(b.jsx)(U,{posts:T,isInEditMode:f,setPosts:s}),f&&Object(b.jsx)(m,{addPopUpToggler:function(){l((function(e){return!e}))}}),j&&Object(b.jsx)(x,{setAddPopUpIsShown:l,addPost:function(e){s((function(t){return[].concat(Object(o.a)(t),[Object(r.a)(Object(r.a)({},e),{},{active:1})])}))}})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),E()}],[[30,1,2]]]);
//# sourceMappingURL=main.ab6753f1.chunk.js.map