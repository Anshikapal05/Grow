"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[829],{3829:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});a(8421),a(6958);var l=a(5043),t=a(6213),n=a(579);const c=function(){const[e,s]=(0,l.useState)(""),[a,c]=(0,l.useState)(""),[o,r]=(0,l.useState)(""),[i,m]=(0,l.useState)("Uttar Pradesh"),[p,d]=(0,l.useState)("Raebareli");return(0,n.jsxs)("div",{className:"row vh-100 g-0",children:[(0,n.jsx)("div",{className:"col-lg-6 position-realtive d-none d-lg-block",children:(0,n.jsx)("div",{className:"bg-holder2"})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"row align-items-center justify-content-center h-100 g-0 px-4 ps-sm-0",children:(0,n.jsx)("div",{className:"login-cont",children:(0,n.jsxs)("div",{className:"col col-sm-6 col-lg-7 col-xl-6",children:[(0,n.jsxs)("div",{className:"text-center mb-5",children:[(0,n.jsx)("h3",{className:"fw-bold",children:"Sign Up"}),(0,n.jsx)("p",{className:"text-secondary",children:"Create your account"})]}),(0,n.jsxs)("form",{onSubmit:async s=>{s.preventDefault();try{const s=await t.A.post("http://localhost:5000/api/v1/user/signup",{email:e,password:a,role:o,district:p,state:i});console.log("Signup successful:",s.data),localStorage.setItem("token",s.data.token),("consumer"===o||"producer"===o)&&(window.location.href="/login")}catch(l){}},children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-envelope"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"Email",value:e,onChange:e=>s(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-lock-alt"})}),(0,n.jsx)("input",{type:"password",className:"form-control form-control-lg fs-6",placeholder:"Password",value:a,onChange:e=>c(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-map"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"District",value:p,onChange:e=>d(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-map-pin"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"State",value:i,onChange:e=>m(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"bx bx-lock-alt"})}),(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg fs-6",placeholder:"User Role",value:o,onChange:e=>r(e.target.value)})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg w-100 mb-3",children:"Signup"})]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsxs)("small",{children:["Already have an account?",(0,n.jsx)("a",{href:"/login",className:"fw-bold",children:"Login"})]})})]})})})})]})}},8421:()=>{},6958:()=>{}}]);
//# sourceMappingURL=829.f404e8bc.chunk.js.map