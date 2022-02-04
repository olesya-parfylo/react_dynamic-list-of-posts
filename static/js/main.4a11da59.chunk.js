(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(2),o=c(1),i=(c(12),c(13),c(14),c(0)),r=function(){return Object(i.jsx)("div",{className:"Loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},l=(c(16),function(e){var t=e.posts,c=e.setSelectedPostId,n=e.selectedPostId,s=e.loading;return Object(i.jsxs)("div",{className:"PostsList",children:[Object(i.jsx)("h2",{children:"Posts:"}),s?Object(i.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(i.jsxs)("li",{className:"PostsList__item",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),n!==e.id&&Object(i.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(e.id)},children:"Open"}),n===e.id&&Object(i.jsx)("button",{type:"button",className:"PostsList__button button",disabled:!0,children:"Close"})]},e.id)}))}):Object(i.jsx)(r,{})]})}),j=c(3),u=c(6),b=c(4),d=c.n(b),m="https://mate.academy/students-api",O="".concat(m,"/posts");function h(e){return fetch(e).then((function(e){return e.json()}))}c(18);var p=function(e){var t=e.setNewComment,c=Object(o.useState)({name:"",email:"",body:""}),n=Object(a.a)(c,2),s=n[0],r=n[1];return Object(i.jsxs)("form",{className:"NewCommentForm",children:[Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"text",name:"name",value:s.name,placeholder:"Your name",className:"NewCommentForm__input",onChange:function(e){var t=e.target;r((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:t.value})}))}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("input",{type:"email",name:"email",value:s.email,placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){var t=e.target;r((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:t.value})}))}})}),Object(i.jsx)("div",{className:"form-field",children:Object(i.jsx)("textarea",{name:"body",value:s.body,placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){var t=e.target;r((function(e){return Object(j.a)(Object(j.a)({},e),{},{body:t.value})}))}})}),Object(i.jsx)("button",{type:"button",className:"NewCommentForm__submit-button button",onClick:function(){t(s),r({name:"",email:"",body:""})},children:"Add a comment"})]})},f=(c(19),function(e){var t=e.postId,c=Object(o.useState)([]),n=Object(a.a)(c,2),s=n[0],l=n[1],b=Object(o.useState)(),f=Object(a.a)(b,2),x=f[0],v=f[1],_=Object(o.useState)(!0),N=Object(a.a)(_,2),y=N[0],C=N[1],P=Object(o.useState)(!1),S=Object(a.a)(P,2),g=S[0],w=S[1],k=Object(o.useState)(!1),D=Object(a.a)(k,2),I=D[0],L=D[1],A=Object(o.useState)(0),E=Object(a.a)(A,2),F=E[0],T=E[1],G=Object(o.useState)(),J=Object(a.a)(G,2),M=J[0],U=J[1];Object(o.useEffect)((function(){(function(e){return h("".concat(O,"/").concat(e))})(t).then((function(e){v(e),w(!0)}))}),[t]);var B=Object(o.useCallback)((function(){(function(e){return h("".concat(m,"/comments?postId=").concat(e))})(t).then((function(e){l(e),L(!0)}))}),[]);return Object(o.useEffect)(B,[t,F,M]),Object(o.useMemo)(Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=3;break}return e.next=3,t=F,fetch("".concat(m,"/comments/").concat(t),{method:"DELETE"});case 3:B();case 4:case"end":return e.stop()}var t}),e)}))),[F]),Object(o.useMemo)(Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=3;break}return e.next=3,c=Object(j.a)(Object(j.a)({},M),{},{id:s.length,postId:t,createdAt:"",updatedAt:""}),fetch("".concat(m,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)});case 3:B();case 4:case"end":return e.stop()}var c}),e)}))),[M]),Object(i.jsx)(i.Fragment,{children:g&&x?Object(i.jsxs)("div",{className:"PostDetails",children:[Object(i.jsx)("h2",{children:"".concat(x.title.toUpperCase(),":")}),Object(i.jsx)("section",{className:"PostDetails__post",children:Object(i.jsx)("p",{children:x.body})}),Object(i.jsxs)("section",{className:"PostDetails__comments",children:[s.length>0&&Object(i.jsxs)("button",{type:"button",className:"PostDetails__button button",onClick:function(){C((function(e){return!e}))},children:[y?"Hide":"Show"," ".concat(s.length," comments")]}),I&&s?y&&Object(i.jsx)("ul",{className:"PostDetails__list",children:s.map((function(e){return Object(i.jsxs)("li",{className:"PostDetails__list-item",children:[Object(i.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){T(e.id)},children:"X"}),Object(i.jsx)("p",{children:e.body})]},e.id)}))}):Object(i.jsx)(r,{})]}),Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(i.jsx)(p,{setNewComment:U})})})]}):Object(i.jsx)(r,{})})}),x=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)(0),r=Object(a.a)(s,2),j=r[0],u=r[1],b=Object(o.useState)(0),d=Object(a.a)(b,2),m=d[0],p=d[1],x=Object(o.useState)(!1),v=Object(a.a)(x,2),_=v[0],N=v[1];return Object(o.useEffect)((function(){h(O).then((function(e){n(0===j?e:e.filter((function(e){return j===e.userId}))),N(!0)}))}),[j]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App__header",children:Object(i.jsxs)("label",{htmlFor:"posts",children:["Select a user: \xa0",Object(i.jsxs)("select",{className:"App__user-selector",id:"posts",onChange:function(e){var t=e.target;u(+t.value)},children:[Object(i.jsx)("option",{value:"0",children:"All users"}),Object(i.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(i.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(i.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(i.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(i.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(i.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(i.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(i.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(i.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(i.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(i.jsxs)("main",{className:"App__main",children:[Object(i.jsx)("div",{className:"App__sidebar",children:Object(i.jsx)(l,{posts:c,setSelectedPostId:p,selectedPostId:m,loading:_})}),Object(i.jsx)("div",{className:"App__content",children:0!==m?Object(i.jsx)(f,{postId:m}):"Select post"})]})]})};s.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4a11da59.chunk.js.map