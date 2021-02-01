(this.webpackJsonpEmployee_directory=this.webpackJsonpEmployee_directory||[]).push([[0],{12:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),r=s(13),l=s.n(r),a=s(14),o=s(15),i=s(18),d=s(17),j=s(16),h=s.n(j),u=function(){return h.a.get("https://randomuser.me/api/?results=50")};var m=function(e){return Object(n.jsx)("div",{className:"container",children:e.children})};var b=function(e){return Object(n.jsx)("form",{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{onChange:e.handleInputChange,type:"text",className:"form-control mb-4",placeholder:"Search for an employee",id:"employee-search"})})})})};s(12);var p=function(e){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.photo,className:"rounded",alt:e.first})}),Object(n.jsx)("td",{children:e.first}),Object(n.jsx)("td",{children:e.last}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.cell})]})})};var f=function(e){return Object(n.jsx)("div",{className:"table-responsive ",children:Object(n.jsxs)("table",{className:"table table-striped table-dark rounded text-center",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Photo"}),Object(n.jsxs)("th",{scope:"col",onClick:e.sortEmployeesByName,children:["First",Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fas fa-caret-down "})})]}),Object(n.jsx)("th",{scope:"col",children:"Last"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Cell"})]})}),e.children]})})},x=function(e){Object(i.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).getRandomEmployees=function(){u().then((function(e){n.setState({employees:e.data.results})})).then((function(){n.setState({filtered:n.state.employees})})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){e.preventDefault(),n.findEmployees(e.target.value)},n.findEmployees=function(e){var t=n.state.employees.filter((function(t){return t.name.first.toLowerCase().includes(e.toLowerCase())}));return n.setState({filtered:t}),t},n.sortEmployeesByName=function(e){e.preventDefault(),console.log("clicked");var t=n.state.filtered.sort((function(e,t){var s=e.name.first,n=t.name.first;return s<n?(console.log(s),-1):s>n?1:0}));"DESC"===n.state.sorted?(t.reverse(),n.setState({sorted:"ASC"})):n.setState({sorted:"DESC"}),n.setState({filtered:t})},n.state={employees:[],filtered:[],sorted:""},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getRandomEmployees()}},{key:"render",value:function(){return console.log(this.state.filtered),this.state.employees.length>1?Object(n.jsx)("div",{children:Object(n.jsxs)(m,{children:[Object(n.jsx)(b,{handleInputChange:this.handleInputChange}),Object(n.jsx)("div",{className:"overflow",children:Object(n.jsx)(f,{sortEmployeesByName:this.sortEmployeesByName,children:this.state.filtered.map((function(e){return Object(n.jsx)(p,{photo:e.picture.thumbnail,first:e.name.first,last:e.name.last,email:e.email,cell:e.cell},e.login.uuid)}))})})]})}):Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"No employees"})})}}]),s}(c.Component);var O=function(e){return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid bg-dark",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"display-4 text-light",children:"Employee Directory"}),Object(n.jsx)("p",{className:"lead text-light",children:"Search for any Employee"})]})})};var y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(x,{})]})};s(42);l.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2992f384.chunk.js.map