(this["webpackJsonpcrud-page"]=this["webpackJsonpcrud-page"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(8),i=n.n(a),r=(n(14),n(3)),o=n(9),d=n(2),u=(n(15),"https://yourtestapi.com/api/posts"),j=(n(16),n(17),n(18),n(6)),l=n.n(j),p=n(0),b=function(e){var t=e.clickHandler,n=e.text,s=e.isWhite,c=e.isSubmit,a=e.fixedWidth;return Object(p.jsx)("button",{className:l()("Button",{"Button--white":s},{"Button--fixed-width":a}),type:c?"submit":"button",onClick:t,children:n})},O=(n(20),function(e){var t=e.hidePopUp,n=e.itWasError,s="Success!";return n&&(s="Oops, something went wrong!"),Object(p.jsxs)("div",{className:"ResultMessage",children:[Object(p.jsx)("p",{className:l()("ResultMessage__text",{"ResultMessage__text--error":n}),children:s}),Object(p.jsx)(b,{text:"close",clickHandler:t})]})}),h=function(e){var t=e.addPost,n=e.hidePopUp,c=Object(s.useState)(""),a=Object(d.a)(c,2),i=a[0],r=a[1],o=Object(s.useState)(""),j=Object(d.a)(o,2),l=j[0],h=j[1],x=Object(s.useState)(""),f=Object(d.a)(x,2),m=f[0],v=f[1],P=Object(s.useState)(""),_=Object(d.a)(P,2),g=_[0],S=_[1],N=Object(s.useState)(!1),U=Object(d.a)(N,2),y=U[0],C=U[1],E=Object(s.useState)(!1),W=Object(d.a)(E,2),k=W[0],D=W[1],H={title:i,text:l,image:m,url:g},w=function(e,n){var s;e.preventDefault(),(s=n,fetch("".concat(u),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(s)}).then((function(e){return e.json()}))).then((function(e){t(e),D(!0)})).catch((function(){C(!0)})),r(""),h(""),v(""),S("")};return Object(p.jsxs)("form",{className:"AddPostForm",onSubmit:function(e){w(e,H)},children:[y||k||Object(p.jsxs)("div",{className:"AddPostForm__content",children:[Object(p.jsx)("h2",{className:"AddPostForm__heading",children:"Add new post"}),Object(p.jsx)("input",{className:"AddPostForm__input",type:"text",value:i,onChange:function(e){r(e.target.value)},placeholder:"enter english name",required:!0}),Object(p.jsx)("input",{className:"AddPostForm__input",type:"text",value:l,onChange:function(e){h(e.target.value)},placeholder:"enter latin name",required:!0}),Object(p.jsx)("input",{className:"AddPostForm__input",type:"text",value:m,onChange:function(e){v(e.target.value)},placeholder:"add image url",required:!0}),Object(p.jsx)("input",{className:"AddPostForm__input",type:"text",value:g,onChange:function(e){S(e.target.value)},placeholder:"add article url",required:!0}),Object(p.jsxs)("div",{className:"AddPostForm__buttons",children:[Object(p.jsx)(b,{text:"add post",isSubmit:!0}),Object(p.jsx)(b,{text:"cancel",clickHandler:n,isWhite:!0})]})]}),y&&Object(p.jsx)(O,{hidePopUp:n,itWasError:y}),k&&Object(p.jsx)(O,{hidePopUp:n,itWasError:y})]})},x=(n(21),function(e){var t=e.hidePopUp;return Object(p.jsx)("div",{className:"PopUpOverlay",onClick:t})}),f=function(e){var t=e.setAddPopUpIsShown,n=e.addPost,s=function(){t(!1)};return Object(p.jsxs)("div",{className:"AddPost",children:[Object(p.jsx)(x,{hidePopUp:s}),Object(p.jsx)(h,{addPost:n,hidePopUp:s})]})},m=(n(22),function(e){var t=e.addPopUpToggler;return Object(p.jsx)("div",{className:"AddPostButton",children:Object(p.jsx)(b,{text:"create new post",clickHandler:t})})}),v=(n(23),n(24),function(e){var t=e.isReverse,n=e.query,s=e.setSortBy,c=e.reverse,a=e.setQuery,i=e.resetSort;return Object(p.jsxs)("div",{className:"SearchAndSort",children:[Object(p.jsx)("input",{className:"SearchAndSort__input",type:"text",value:n,placeholder:"search...",onChange:function(e){a(e.target.value)}}),Object(p.jsxs)("select",{className:"SearchAndSort__select",onChange:function(e){s(e.target.value)},children:[Object(p.jsx)("option",{value:"title",children:"english name"}),Object(p.jsx)("option",{value:"text",children:"latin name"}),Object(p.jsx)("option",{value:"order",children:"order"}),Object(p.jsx)("option",{value:"updated",children:"updated"})]}),Object(p.jsx)(b,{text:t?"v":"^",clickHandler:c,isWhite:!0}),Object(p.jsx)(b,{text:"reset",isWhite:!0,clickHandler:i})]})}),P=function(e){var t=e.modeToggler,n=e.isInEditMode,s=e.isReversed,c=e.query,a=e.setSortBy,i=e.reverse,r=e.setQuery,o=e.resetSort;return Object(p.jsxs)("header",{className:"Header",children:[Object(p.jsx)("h1",{className:"Header__heading",children:"CRUD"}),Object(p.jsx)(v,{isReverse:s,query:c,setSortBy:a,reverse:i,setQuery:r,resetSort:o}),Object(p.jsx)(b,{text:n?"exit edit mode":"enter edit mode",fixedWidth:!0,clickHandler:t})]})},_=(n(25),n(26),n(27),n(28),function(e){var t=e.popUpDisplayHandler,n=e.postId,c=e.setPosts,a=Object(s.useState)(!1),i=Object(d.a)(a,2),r=i[0],o=i[1],j=Object(s.useState)(!1),l=Object(d.a)(j,2),h=l[0],f=l[1],m=function(){t(!1)},v=function(e){(function(e){return fetch("".concat(u,"/").concat(e),{method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject()}))})(e).then((function(){c((function(e){return e.filter((function(e){return e.id!==n}))})),f(!0)})).catch((function(){o(!0)}))};return Object(p.jsxs)("div",{className:"ConfirmPopUp",children:[Object(p.jsx)(x,{hidePopUp:m}),Object(p.jsxs)("div",{className:"ConfirmPopUp__content",children:[r||h||Object(p.jsxs)("div",{className:"ConfirmPopUp__interface",children:[Object(p.jsx)("p",{className:"ConfirmPopUp__text",children:"Are you sure?"}),Object(p.jsxs)("div",{className:"ConfirmPopUp__buttons",children:[Object(p.jsx)(b,{clickHandler:function(){v(n)},text:"yes",isWhite:!0,fixedWidth:!0}),Object(p.jsx)(b,{clickHandler:m,text:"no",fixedWidth:!0})]})]}),Object(p.jsxs)("div",{className:"ConfirmPopUp__message",children:[r&&Object(p.jsx)(O,{hidePopUp:m,itWasError:r}),h&&Object(p.jsx)(O,{hidePopUp:m,itWasError:r})]})]})]})}),g=(n(29),function(e){var t=e.popUpDisplayHandler,n=e.postData,c=e.setPosts,a=Object(s.useState)(n.title),i=Object(d.a)(a,2),o=i[0],j=i[1],l=Object(s.useState)(n.text),h=Object(d.a)(l,2),f=h[0],m=h[1],v=Object(s.useState)(n.image),P=Object(d.a)(v,2),_=P[0],g=P[1],S=Object(s.useState)(n.url),N=Object(d.a)(S,2),U=N[0],y=N[1],C=Object(s.useState)(!1),E=Object(d.a)(C,2),W=E[0],k=E[1],D=Object(s.useState)(!1),H=Object(d.a)(D,2),w=H[0],A=H[1],F={title:o,text:f,image:_,url:U},T=function(){t(!1)},q=function(e){var t,s;e.preventDefault(),(t=F,s=n.id,fetch("".concat(u,"/").concat(s),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return e.json()}))).then((function(e){c((function(t){return function(e,t){return e.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),t):e}))}(t,e)})),A(!0)})).catch((function(){k(!0)}))};return Object(p.jsxs)("div",{className:"EditPopUp",children:[Object(p.jsx)(x,{hidePopUp:T}),Object(p.jsxs)("form",{className:"EditPopUp__form",onSubmit:function(e){q(e)},children:[W||w||Object(p.jsxs)("div",{className:"EditPopUp__interface",children:[Object(p.jsx)("h2",{className:"EditPopUp__heading",children:"Edit this post"}),Object(p.jsx)("input",{className:"EditPopUp__input",type:"text",value:o,onChange:function(e){j(e.target.value)},placeholder:"enter english name",required:!0}),Object(p.jsx)("input",{className:"EditPopUp__input",type:"text",value:f,onChange:function(e){m(e.target.value)},placeholder:"enter latin name",required:!0}),Object(p.jsx)("input",{className:"EditPopUp__input",type:"text",value:_,onChange:function(e){g(e.target.value)},placeholder:"add image url",required:!0}),Object(p.jsx)("input",{className:"EditPopUp__input",type:"text",value:U,onChange:function(e){y(e.target.value)},placeholder:"add article url",required:!0}),Object(p.jsxs)("div",{className:"EditPopUp__buttons",children:[Object(p.jsx)(b,{text:"submit",isSubmit:!0}),Object(p.jsx)(b,{text:"cancel",isWhite:!0,clickHandler:T})]})]}),Object(p.jsxs)("div",{className:"EditPopUp__message",children:[W&&Object(p.jsx)(O,{hidePopUp:T,itWasError:W}),w&&Object(p.jsx)(O,{hidePopUp:T,itWasError:W})]})]})]})}),S=function(e){var t=e.postData,n=e.setPosts,c=Object(s.useState)(!1),a=Object(d.a)(c,2),i=a[0],r=a[1],o=Object(s.useState)(!1),u=Object(d.a)(o,2),j=u[0],l=u[1];return Object(p.jsxs)("div",{className:"EditOrDelete",children:[Object(p.jsx)(b,{text:"edit",clickHandler:function(){l(!0)},fixedWidth:!0}),Object(p.jsx)(b,{text:"delete",isWhite:!0,clickHandler:function(){r(!0)},fixedWidth:!0}),i&&Object(p.jsx)(_,{popUpDisplayHandler:r,postId:t.id,setPosts:n}),j&&Object(p.jsx)(g,{postData:t,popUpDisplayHandler:l,setPosts:n})]})},N=function(e){var t=e.postData,n=e.isInEditMode,s=e.setPosts;return Object(p.jsxs)("div",{className:"PostCard",children:[Object(p.jsx)("h2",{className:"PostCard__heading",children:t.title}),Object(p.jsx)("p",{className:"PostCard__latin-name",children:t.text}),Object(p.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{className:"PostCard__image",src:t.image,alt:t.title})}),n&&Object(p.jsx)(S,{postData:t,setPosts:s})]})},U=function(e){var t=e.posts,n=e.isInEditMode,s=e.setPosts;return Object(p.jsx)("ul",{className:"ListOfPosts",children:t.map((function(e){return 1===e.active&&Object(p.jsx)("li",{className:"ListOfPosts__item",children:Object(p.jsx)(N,{isInEditMode:n,postData:e,setPosts:s})},e.id)}))})};var y=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(d.a)(a,2),j=i[0],l=i[1],b=Object(s.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1],v=Object(s.useState)(""),_=Object(d.a)(v,2),g=_[0],S=_[1],N=Object(s.useState)(!1),y=Object(d.a)(N,2),C=y[0],E=y[1],W=Object(s.useState)(""),k=Object(d.a)(W,2),D=k[0],H=k[1],w=n.filter((function(e){return e.title.toLowerCase().includes(D.toLowerCase())||e.text.toLowerCase().includes(D.toLowerCase())}));w.sort((function(e,t){switch(g){case"title":return e.title.localeCompare(t.title);case"text":return e.text.localeCompare(t.text);case"order":return e.sort_order&&t.sort_order?e.sort_order-t.sort_order:e.sort_order?-1:t.sort_order?1:-1;case"updated":return new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime();default:return 0}})),C&&w.reverse();var A=function(){fetch("".concat(u)).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){c(e)}))};return Object(s.useEffect)((function(){A()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P,{modeToggler:function(){x((function(e){return!e}))},isInEditMode:h,isReversed:C,query:D,setSortBy:S,reverse:function(){E((function(e){return!e}))},setQuery:H,resetSort:function(){S(""),E(!1),H("")}}),Object(p.jsxs)("main",{children:[Object(p.jsx)(U,{posts:w,isInEditMode:h,setPosts:c}),h&&Object(p.jsx)(m,{addPopUpToggler:function(){l((function(e){return!e}))}}),j&&Object(p.jsx)(f,{setAddPopUpIsShown:l,addPost:function(e){c((function(t){return[].concat(Object(o.a)(t),[Object(r.a)(Object(r.a)({},e),{},{active:1})])}))}})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),C()}],[[30,1,2]]]);
//# sourceMappingURL=main.920971de.chunk.js.map