"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[950],{1950:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});a(8421),a(6958);var l=a(5043),t=a(6213),n=a(579);const o=function(){const[e,s]=(0,l.useState)(""),[a,o]=(0,l.useState)(""),[c,r]=(0,l.useState)(""),[i,d]=(0,l.useState)(""),[m,u]=(0,l.useState)("");return(0,n.jsxs)("div",{className:"row vh-100 g-0",children:[(0,n.jsx)("div",{className:"col-lg-6 position-relative d-none d-lg-block",children:(0,n.jsx)("div",{className:"bg-holder"})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"row align-items-center justify-content-center h-100 g-0 px-6 ps-sm-0",children:(0,n.jsx)("div",{className:"login-cont",children:(0,n.jsxs)("div",{className:"col col-sm-6 col-lg-7 col-xl-6 py-30 m-3",children:[(0,n.jsx)("a",{href:"a",className:"d-flex justify-content-center mb-4"}),(0,n.jsxs)("div",{className:"text-center mb-5",children:[(0,n.jsx)("h3",{className:"fw-bold",children:"Log In"}),(0,n.jsx)("p",{className:"text-secondary",children:"Get access to your account"})]}),(0,n.jsxs)("form",{onSubmit:async s=>{s.preventDefault(),u("");try{const s=await t.A.post("http://localhost:5000/api/v1/user/login",{email:e,password:c,role:a,district:i});console.log("Login successful:",s.data),localStorage.setItem("token",s.data.token),"consumer"===a?window.location.href="/":"producer"===a?window.location.href="/producer":"admin"===a&&(window.location.href="/admin/dashboard")}catch(o){var l,n;u((null===(l=o.response)||void 0===l||null===(n=l.data)||void 0===n?void 0:n.message)||"Something went wrong")}},children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-envelope"})}),(0,n.jsx)("input",{type:"email",className:"form-control form-control-lg fs-6",placeholder:"Email",name:"email",value:e,onChange:e=>s(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-lock-alt"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"User Role",name:"role",value:a,onChange:e=>o(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-lock-alt"})}),(0,n.jsx)("input",{type:"password",className:"form-control form-control-lg fs-6",placeholder:"Password",name:"password",value:c,onChange:e=>r(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-map"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"District",name:"district",value:i,onChange:e=>d(e.target.value)})]}),m&&(0,n.jsx)("div",{className:"alert alert-danger",children:m}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg w-100 mb-3",children:"Login"})]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsxs)("small",{children:["Don't have an account?",(0,n.jsx)("a",{href:"/signup",className:"fw-bold",children:"Sign-up"})]})})]})})})})]})}},8421:()=>{},6958:()=>{}}]);
//# sourceMappingURL=950.56acb923.chunk.js.map