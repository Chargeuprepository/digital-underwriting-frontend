import{j as r,p as o}from"./index-UFlMoqOZ.js";import{b as c}from"./breakCamelCase-BfS5I_ZA.js";const s=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-gray-100);
  border: ${e=>e.border?e.border:"1px solid var(--color-gray-100)"};
  padding: 1.2rem 2.2rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
  min-height: 7.4rem;
`,d=o.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${e=>e.color?e.color:"var(--color-gray-800)"};
`,m=o.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.32rem;
  font-weight: 600;
  color: ${e=>e.color?e.color:"var(--color-gray-700)"};
`;function g(e,n,i,a){if(typeof e=="object"&&e!==null)return Object.entries(e).map(([t,l])=>r.jsxs(s,{border:a,children:[r.jsx(d,{color:n,children:c(t)}),r.jsx(m,{color:i,children:l})]},t))}export{g as B,m as I};
