import{aq as l,j as a,p as o,as as d}from"./index-UFlMoqOZ.js";const g=o.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
`,f=o.div`
  display: flex;
  gap: 1rem;
`,m=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-100);
  padding: 0.8rem 1.6rem;
  background: linear-gradient(45deg, var(--color-gray-0), var(--color-gray-0));
`,u=o.div`
  font-size: 1.2rem;
  font-weight: 500;
  font-size: ${r=>r.fontSize};
  font-weight: ${r=>r.fontWeight};
`;o.div`
  font-size: 1.2rem;
  color: var(--color-gray-100);
  color: ${r=>r.color};
  font-size: ${r=>r.fontSize};
  font-weight: ${r=>r.fontWeight};
`;const v=d`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`,b=o.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-100);
  padding: 0.4rem 1.2rem;
  transition: transform 0.3s ease-in-out;
  color: ${r=>r.color||"var(--color-gray-600)"};

  &:active {
    animation: ${r=>!r.activebutton&&v} 0.1s forwards;
  }

  &:hover {
    ${r=>!r.activebutton&&{border:"1px solid var(--color-gray-50)"}}
  }

  ${r=>r.activebutton&&{background:r.backColor,border:"1px solid transparent",color:"var(--color-gray-800)"}};
`;function h({paramName:r,options:i}){const[t,s]=l(),n=t.get(r);function c(e){t.set(r,e),s(t)}return a.jsxs(m,{children:[a.jsx(g,{children:r}),a.jsx(f,{children:i.map(e=>a.jsx(b,{onClick:()=>c(e.value),disabled:e.value===n,activebutton:e.value===n,backColor:e.backColor,children:a.jsx(u,{children:e.label})},e.value))})]})}export{h as F};
