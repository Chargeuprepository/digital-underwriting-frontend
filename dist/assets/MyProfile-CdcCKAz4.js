import{j as e,p as r}from"./index-UFlMoqOZ.js";import{b as n}from"./index-CwNeIYaM.js";import{u as a}from"./useMoveBack-D1BYG4LY.js";import"./iconBase-CFzihDm8.js";const l=r.div`
  /* background-color: #8fc5f4; */
  height: 50rem;
  padding-left: 3rem;
  /* padding-bottom: 2rem; */
`,c=r.img`
  height: 95%;
`;function d(){return e.jsx(l,{children:e.jsx(c,{src:"/img/myProfile-2.png"})})}const t=[{title:"name",value:"Chargeup"},{title:"phone",value:"18001230181"},{title:"email",value:"admin@echargeup.com"},{title:"role",value:"Build such technical innovations"}],s=r.div`
  /* background-color: #00ff1a; */
  height: 100%;
  width: 55%;
  padding-left: 2rem;
`,g=r.div`
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  text-align: center;
  margin-top: 13rem;
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  color: var(--color-gray-25);
  border-radius: 0.6rem;
`,m=r.div`
  display: flex;
  justify-content: center;
  /* background-color: blueviolet; */
  gap: 2rem;
  margin-top: 3rem;
  padding-left: 8rem;
`,i=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  /* background-color: aqua; */
  text-transform: capitalize;
`,u=r.div`
  /* background-color: #bad4fd; */
  /* width: 14rem; */
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-700);
`,f=r.div`
  /* background-color: #bcbc75; */
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-gray-500);
`;function h(){return e.jsxs(s,{children:[e.jsx(g,{children:"chargeupreneur"}),e.jsxs(m,{children:[e.jsx(i,{style:{alignItems:"flex-end"},children:t.map(o=>e.jsxs(u,{children:[o.title,":"]},o.title))}),e.jsx(i,{children:t.map(o=>e.jsx(f,{children:o.value},o.title))})]})]})}const p=r.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #daffd6, #fbfff8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,b=r.div`
  /* background-color: #f290e5; */
  width: 80%;
  height: 55rem;
  border: 4px solid var(--color-gray-100);
  border-radius: 0.9rem;
  display: flex;
`,x=r.button`
  position: absolute;
  top: 2rem;
  left: 4rem;
  border: none;
  background-color: transparent;
  svg {
    height: 3rem;
    width: 3rem;
    color: var(--color-gray-600);
  }
`;function w(){const o=a();return e.jsxs(p,{children:[e.jsx(x,{onClick:o,children:e.jsx(n,{})}),e.jsxs(b,{children:[e.jsx(h,{}),e.jsx(d,{})]})]})}export{w as default};
