import{p as e,av as a,j as r}from"./index-UFlMoqOZ.js";import{a as s}from"./index-CtiMWsHh.js";import{a as c}from"./index-CwNeIYaM.js";import{a as d}from"./index-Db3ih9c4.js";import{B as g}from"./BarRenderContent-NmY6jVmv.js";const m=e.div`
  width: 100vw;
  height: 9rem;
  background-color: var(--color-gray-0);
  /* background: linear-gradient(
    to top,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  ); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--color-gray-50);
  padding: 0 8rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`,p=e.div`
  display: flex;
  gap: 4rem;
`,h=e(a)`
  height: 3.8rem;
  width: 3.8rem;
  background-color: var(--color-gray-0);
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`,x=e.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-400);
`,f=e(a)`
  border: none;
  text-transform: capitalize;
  transition: all 0.3s;

  &:hover {
    color: var(--color-gray-600);
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1);
  }
`,b=e.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`,v=e.div`
  color: var(--color-gray-600);
`,u=e.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-transform: uppercase;
`,t=e.div`
  color: ${o=>o.color};
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    height: 2.2rem;
    width: 2.2rem;
  }
`,y=e.div`
  /* color: var(--color-gray-700); */
  font-weight: 600;
`,w=e.div`
  /* color: var(--color-gray-500); */
  font-weight: 400;
`;function B({verification:o,data:i}){return r.jsxs(m,{children:[r.jsxs(p,{children:[r.jsx(h,{to:"/dashboard",children:r.jsx("img",{src:"/img/logo-plug.webp"})}),r.jsxs(x,{children:[r.jsx(f,{to:"/verification",children:"verifiction"}),r.jsx(b,{children:r.jsx(d,{})}),r.jsx(v,{children:o})]})]}),r.jsxs(u,{children:[r.jsxs(t,{color:"var(--color-gray-700)",children:[r.jsx(s,{}),r.jsx(y,{children:i.name})]}),r.jsxs(t,{color:"var(--color-gray-500)",children:[i.mobile&&r.jsx(c,{}),r.jsx(w,{children:i[Object.keys(i)[1]]})]})]})]})}const j=100;function k(o){const l=o.current.getBoundingClientRect().top+window.scrollY-j;window.scrollTo({top:l,behavior:"smooth"})}const $=e.div`
  grid-row: ${o=>o.gridrow};
  grid-column: ${o=>o.gridcolumn};
  height: ${o=>o.height};
  background-color: ${o=>o.backgroundcolor};
  box-shadow: ${o=>o.boxshadow==="false"?"":"0 10px 20px rgba(0, 0, 0, 0.2)"};
  border-radius: 0.6rem;
  padding: ${o=>o.padding};
`,C=e.div`
  display: flex;
  flex-direction: ${o=>o.direction};
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 100%;
  background: linear-gradient(to bottom, #237a57, #237a57);
  background: linear-gradient(
    to bottom,
    ${o=>o.backgroundcolor[0]},
    ${o=>o.backgroundcolor[1]}
  );
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    border: 2px solid var(--color-gray-1);
  }
  border-radius: 0.6rem;
`;function L({backgroundcolor:o,data:i,refVal:n}){return r.jsx(C,{onClick:()=>n?k(n):null,backgroundcolor:o,direction:i.identity_risk?"column":"row",children:g(i)})}const N=e.div``,O=e.div`
  display: grid;
  grid-template-columns: ${o=>o.column};
  grid-template-rows: ${o=>o.row};
  gap: ${o=>o.gap};
  padding: ${o=>o.padding};
  height: ${o=>o.height};
`,P=$;export{N as A,L as O,P as S,B as V,O as a};
