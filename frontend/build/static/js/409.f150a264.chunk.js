"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[409],{8636:(e,a,s)=>{s.d(a,{A:()=>h});s(5043);var r=s(3216),t=s(5475),c=s(7196),d=s(3825),o=s(423),l=s(579);const i=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{children:"Dashboard"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(n,{text:"Dashboard",url:"/admin/dashboard",Icon:c.t02}),(0,l.jsx)(n,{text:"Products",url:"/admin/products",Icon:c.ToX}),(0,l.jsx)(n,{text:"Customer",url:"/admin/customers",Icon:o.Ph9}),(0,l.jsx)(n,{text:"Transaction",url:"/admin/transaction",Icon:d.DS2})]})]}),n=e=>{let{url:a,text:s,Icon:c}=e;const d=(0,r.zy)();return(0,l.jsx)("li",{style:{backgroundColor:d.pathname.includes(a)?"rgba(0,115,255,0.1)":"white"},children:(0,l.jsxs)(t.N_,{to:a,style:{color:d.pathname.includes(a)?"rgba(0,115,255)":"black"},children:[(0,l.jsx)(c,{}),s]})})},h=()=>(0,l.jsxs)("aside",{children:[(0,l.jsx)("h2",{className:"green",children:"Grow."}),(0,l.jsx)(i,{})]})},9157:(e,a,s)=>{s.d(a,{A:()=>c});s(5043);var r=s(1094),t=s(579);const c=function(e,a,s,c){return function(){const{getTableProps:d,getTableBodyProps:o,headerGroups:l,rows:i,prepareRow:n}=(0,r.useTable)({columns:e,data:a},r.useSortBy);return(0,t.jsxs)("div",{className:s,children:[(0,t.jsx)("h2",{className:"heading",children:c}),(0,t.jsxs)("table",{className:"table",...d(),children:[(0,t.jsx)("thead",{children:l.map((e=>(0,t.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,t.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),e.isSorted&&(0,t.jsxs)("span",{children:[" ",e.isSortedDesc?"\ud83d\udd3d":"\ud83d\udd3c"]})]})))})))}),(0,t.jsx)("tbody",{...o(),children:i.map((e=>(n(e),(0,t.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,t.jsx)("td",{...e.getCellProps(),children:e.render("Cell")})))}))))})]})]})}}},4409:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var r=s(5043),t=s(6213),c=s(184),d=s(8636),o=s(9157),l=(s(4564),s(579));const i=[{Header:"Avatar",accessor:"avatar"},{Header:"Name",accessor:"name"},{Header:"District",accessor:"district"},{Header:"Email",accessor:"email"},{Header:"Role",accessor:"role"},{Header:"Action",accessor:"action"}],n=["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F73d737005989f34abc6f1b7557933672%2F242ad8bd3ff8acb6-d9%2Fs1280x1920%2F1b56dfb5dd93ffdfaf048147f0b27cde99ddf411.png&f=1&nofb=1&ipt=7f08d83ecedff7e43703017e9eede5d5172322c6de04831477e417daacd2d00f&ipo=images","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b367acac-2ef7-42e6-a6cc-2264a7212b61/dg9waic-c8d98f61-c2c4-47cc-9302-ff4a1f1f9ce4.jpg/v1/fill/w_921,h_867,q_70,strp/anime_boy_pfp_art_by_hrplusdesign_dg9waic-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY0IiwicGF0aCI6IlwvZlwvYjM2N2FjYWMtMmVmNy00MmU2LWE2Y2MtMjI2NGE3MjEyYjYxXC9kZzl3YWljLWM4ZDk4ZjYxLWMyYzQtNDdjYy05MzAyLWZmNGExZjFmOWNlNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jL-OTjL8P1ZV2zCEJkMh0mW0XjX45Xvx9bNrwxF25XM"],h=["Shyam","Kshitiz","Aman","Rahul","Vishesh"],m=e=>e[Math.floor(Math.random()*e.length)],j=()=>{const[e,a]=(0,r.useState)([]);(0,r.useEffect)((()=>{t.A.get("http://localhost:5000/api/v1/user/all").then((e=>{const r=e.data.map((e=>({avatar:(0,l.jsx)("img",{style:{borderRadius:"50%"},src:e.avatar||m(n),alt:"avatar"}),name:e.name||m(h),district:e.district,email:e.email,role:e.role,action:(0,l.jsx)("button",{onClick:()=>s(e.email),children:(0,l.jsx)(c.qbC,{})})})));a(r)})).catch((e=>{console.error("There was an error fetching the customers!",e)}))}),[]);const s=e=>{t.A.delete("http://localhost:5000/api/v1/user/email/".concat(e)).then((()=>{a((a=>a.filter((a=>a.email!==e))))})).catch((e=>{console.error("There was an error deleting the customer!",e)}))},j=(0,r.useCallback)((0,o.A)(i,e,"dashboard-product-box","Customers"),[e]);return(0,l.jsxs)("div",{className:"admin-container",children:[(0,l.jsx)(d.A,{}),(0,l.jsx)("main",{children:j()})]})}},4564:()=>{}}]);
//# sourceMappingURL=409.f150a264.chunk.js.map