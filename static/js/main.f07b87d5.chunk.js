(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),c=a(2),s=a(6),o=a(1),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),a&&Object(m.jsx)(j,{user:a})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=(a(15),function(e){return l.find((function(t){return t.id===e}))||null}),f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),d=s[0],u=s[1],j=Object(o.useState)(f),b=Object(c.a)(j,2),p=b[0],x=b[1],v=Object(o.useState)(!0),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!0),g=Object(c.a)(I,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),""===a.trim()&&N(!1),"0"===d&&_(!1),a.trim()&&"0"!==d&&(x((function(e){return[].concat(Object(r.a)(e),[{id:p.reduce((function(e,t){return Math.max(e,t.id)}),0)+1,title:a.trim(),userId:+d,completed:!1,user:O(+d)}])})),n(""),u("0"))},children:[Object(m.jsx)("div",{className:"field",children:Object(m.jsxs)("label",{children:["Title: ",Object(m.jsx)("input",{value:a,type:"text","data-cy":"titleInput",placeholder:"Enter a title",onChange:function(e){n(e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f\u0404\u0454\u0406\u0456\u0407\u0457\u0490\u04910-9\s]/g,"")),N(!0)}}),!S&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User: ",Object(m.jsxs)("select",{"data-cy":"userSelect",value:d,onChange:function(e){u(e.target.value),_(!0)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),!C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:p})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f07b87d5.chunk.js.map