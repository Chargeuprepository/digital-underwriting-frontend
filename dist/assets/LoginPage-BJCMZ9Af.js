import{j as r,p as e,u as x,r as m,_ as g}from"./index-UFlMoqOZ.js";import{A as u}from"./Astrick-CsvrJoMN.js";import{F as f,a}from"./Form-BIMQIAmO.js";import{G as b}from"./GridMaker-BvvTJRff.js";const v=e.div`
  max-width: 700px;
  justify-self: right;
`,j=e.img`
  width: 100%;
`;function w(){return r.jsx(v,{children:r.jsx(j,{src:"/img/login-img-1.png"})})}const y=e.div`
  max-width: 40rem;
  height: 54rem;
  background-color: var(--color-gray-50);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 1.2rem;
  align-self: center;
`,I=e.div`
  width: 100%;
  margin-top: 2rem;
`,k=e.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,F=e.img`
  width: 60%;
`,s=e.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,i=e.input`
  max-width: 30rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.4rem;
  padding: 0 1.4rem;
  color: var(--color-gray-800);
  background-color: var(--color-gray-100);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-gray-200);

  &::placeholder {
    font-size: 1.4rem;
    color: var(--color-gray-200);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;e.button`
  color: var(--color-blue-light);
  position: absolute;
  top: 27.5rem;
  right: 7rem;
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: none;

  &:hover {
    color: var(--color-blue-dark);
  }
`;const L=e.button`
  max-width: 30rem;
  height: 4.2rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.6rem;
  margin-top: 3rem;
  cursor: pointer;
  color: var(--color-gray-50);
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-brand-green-0);
  background: linear-gradient(
    to right,
    var(--color-brand-original-blue-400) 50%,
    var(--color-brand-original-green-400)
  );
  transition: all;

  &:hover {
    background: linear-gradient(
      to right,
      var(--color-brand-blue-500) 50%,
      var(--color-brand-green-500)
    );
  }
  &:active {
    box-shadow: 0.2rem 0.2rem 0.3rem 0.3rem var(--color-brand-green-50);
  }
`;function S(){const h=x(),[t,d]=m.useState(),[n,l]=m.useState(),c={userId:"underwrite@echargeup.com",password:"chargeup@2025#"};function p(o){o.preventDefault(),t===c.userId&&n===c.password?(localStorage.setItem("userCredentials",JSON.stringify({userId:t,password:n})),setTimeout(()=>{h("/"),g.success("You Are Authenticated: Welcome🤗")},300)):g.error("Wrong Credentials💀"),d(""),l("")}return r.jsxs(y,{children:[r.jsx(I,{children:r.jsx(k,{children:r.jsx(F,{src:"/img/logo-chargeup.png"})})}),r.jsxs(f,{onSubmit:o=>p(o),height:"40rem",gap:"1.6rem",margin:"0 0 0 4rem",position:"relative",children:[r.jsxs(s,{children:[r.jsxs(a,{htmlFor:"userId",children:["User Id",r.jsx(u,{children:"*"})]}),r.jsx(i,{id:"userId",type:"userId",placeholder:"Enter the User ID",value:t,onChange:o=>d(o.target.value),required:!0})]}),r.jsxs(s,{children:[r.jsxs(a,{htmlFor:"password",children:["Password",r.jsx(u,{children:"*"})]}),r.jsx(i,{id:"password",type:"password",placeholder:"Enter the password",value:n,onChange:o=>l(o.target.value),required:!0})]}),r.jsxs(s,{children:[r.jsxs(a,{htmlFor:"message",children:["Role",r.jsx("span",{style:{fontSize:"1.3rem"},children:"(optional)"})]}),r.jsx(i,{id:"message",type:"text",maxLength:12,placeholder:"Employee, Manager, HOD, Admin"})]}),r.jsx(L,{children:"Login"})]})]})}function C(){return r.jsxs(b,{backgroundcolor:"#d0d7df",height:"100vh",column:"1fr 0.8fr",gap:"8rem",children:[r.jsx(w,{}),r.jsx(S,{})]})}function P(){return r.jsx(C,{})}export{P as default};
