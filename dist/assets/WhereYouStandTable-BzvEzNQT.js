import{j as r,p as l}from"./index-UFlMoqOZ.js";const d=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 4rem 2rem 2rem 2rem;
`,g=l.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  height: 4.5rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.6rem;
  background-color: ${o=>o.backgroundcolor?o.backgroundcolor:"var(--color-gray-50)"};
`,i=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${o=>o.fontSize||"1.6rem"};
  font-weight: 500;
  color: ${o=>o.color?o.color:"var(--color-gray-600)"};
`,u=l.div`
  background-color: ${o=>o.backgroundcolor};
`;function f({riskScore:o=null,fontSize:a,whereIStand:e}){return r.jsx(d,{children:e==null?void 0:e.map((c,s)=>{const t=c.score.split("-"),n=Math.floor(o)>=t[0]&&Math.floor(o)<=t[1];return r.jsxs(g,{backgroundcolor:n&&"var(--color-gray-200)",children:[r.jsx(i,{fontSize:a,color:n&&"var(--color-gray-800)",children:c.score}),r.jsx(u,{backgroundcolor:c.color}),r.jsx(i,{fontSize:a,color:n&&"var(--color-gray-800)",children:c.percent})]},s)})})}export{f as W};
