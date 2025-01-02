import{u as c,r as s,j as r,p as e,_ as d,N as i,S as g,O as h}from"./index-UFlMoqOZ.js";import{F as m}from"./index-DxRO_h9g.js";import"./Overlay-i9fA_ZEF.js";import{L as v}from"./Loader-DHrF5ARY.js";import{H as x,a as u,b as p,c as j}from"./index-CyIjKEXH.js";import"./iconBase-CFzihDm8.js";const f=e.div`
  grid-column: 2 / -1;
  position: sticky;
  border-bottom: 1px solid var(--color-gray-50);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6rem 0 6rem;
`,b=e.div`
  width: 28rem;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 3rem;
`,y=e(i)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-gray-50);
  background-color: var(--color-gray-10);
  cursor: pointer;
  transition: all 0.3s;
  svg {
    height: 100%;
    width: 45%;
    color: var(--color-gray-600);
  }
  &:active {
    transform: scale(0.95);
  }
`,k=e.button`
  border: none;
  background: linear-gradient(
    45deg,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-200)
  );
  width: 8rem;
  height: 3.6rem;
  border-radius: 0.4rem;
  color: var(--color-gray-50);

  &:hover {
    transition: all 0.3s;
  }
  &:active {
    transform: scale(0.97);
  }
`;function w(){const a=c(),[n,t]=s.useState(!1);function l(){t(!0),localStorage.removeItem("userCredentials"),setTimeout(()=>{a("/login"),d.success("Logged Out: Come Soon🤗")},1e3)}return r.jsxs(f,{children:[r.jsx(v,{loading:n}),r.jsxs(b,{children:[r.jsx(y,{to:"/myProfile",children:r.jsx(m,{})}),r.jsx(k,{onClick:l,children:"Logout"})]})]})}const S=e.ul`
  height: 50rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,o=e(i)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-500);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 0 1rem 1.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gray-25);
    background-color: var(--color-brand-original-green-400);
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-gray-500);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-gray-25);
  }
`;function L(){return r.jsx("nav",{children:r.jsxs(S,{children:[r.jsx("li",{children:r.jsxs(o,{to:"/dashboard",children:[r.jsx(x,{}),r.jsx("span",{children:"Home"})]})}),r.jsx("li",{children:r.jsxs(o,{to:"/businessInsights",children:[r.jsx(u,{}),r.jsx("span",{children:"Business Insights"})]})}),r.jsx("li",{children:r.jsxs(o,{to:"/verification",children:[r.jsx(p,{}),r.jsx("span",{children:"Verification"})]})}),r.jsx("li",{children:r.jsxs(o,{to:"/onboardedDrivers",children:[r.jsx(j,{}),r.jsx("span",{children:"Onboarded Drivers"})]})})]})})}const H=e.aside`
  grid-row: 1 / -1;
  background-color: var(--color-gray-0);
  padding: 0.6rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`,N=e(i)`
  width: 20rem;
  justify-self: center;
`,C=e.img`
  width: 100%;

  &:hover {
    transform: translate(0, 2%);
    transition: all 0.3s;
  }
`;function O(){return r.jsxs(H,{children:[r.jsx(N,{to:"/",children:r.jsx(C,{src:"/img/logo-chargeup.png"})}),r.jsx(L,{})]})}const I=e.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`,M=e.main`
  overflow: scroll;
  padding: 2rem;
  /* background-color: #fcb6b6; */
`,B=e.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* background-color: #89e07f; */
`;function U(){return r.jsxs(I,{children:[r.jsx(w,{}),r.jsx(O,{}),r.jsx(M,{children:r.jsx(B,{children:r.jsx(s.Suspense,{fallback:r.jsx(g,{}),children:r.jsx(h,{})})})})]})}export{U as default};
