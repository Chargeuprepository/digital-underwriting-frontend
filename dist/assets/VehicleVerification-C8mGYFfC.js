import{j as e,p as i,r as d,ar as h}from"./index-UFlMoqOZ.js";import{S as u,a as g,A as p,V as v}from"./GridTab-C-SrZc0Z.js";import{A as m}from"./AllVerificationAllCategoryTabs-xj3M53xt.js";import{d as x}from"./fun-Dg0M5XhR.js";import{G as j}from"./GridMaker-BvvTJRff.js";import{b}from"./breakCamelCase-BfS5I_ZA.js";import"./index-CtiMWsHh.js";import"./iconBase-CFzihDm8.js";import"./index-CwNeIYaM.js";import"./index-Db3ih9c4.js";import"./BarRenderContent-NmY6jVmv.js";const y=i.div`
  /* background-color: #8398ac; */
  height: 100%;
  grid-column: 1/2;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  width: 110rem;
`,k=i.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-400);
`,V=i.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gray-600);
`,w=i.div`
  font-size: 3.8rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  /* background-color: #fba3cf; */
  height: 100%;
  grid-column: 3/-1;
  border-radius: 0.6rem;
  display: flex;
  justify-content: end;
  align-items: center;
`;function A({heroData:a}){const{maker:r,financer:t,registrationNumber:o}=a;return e.jsx(u,{height:"",backgroundcolor:"",boxshadow:"false",children:e.jsxs(g,{column:"40rem 1fr 30rem",height:"100%",padding:"1rem 3.2rem",children:[e.jsxs(y,{children:[e.jsxs(V,{children:["financer– ",t]}),e.jsxs(k,{children:["maker– ",r]})]}),e.jsx(w,{children:o})]})})}function S({vehicleData:a,registrationDate:r}){console.log(r);const[t,o]=d.useState(a);return d.useEffect(function(){const n=x(r);o(c=>({vehicleAge:n,...c}))},[]),e.jsx(m,{backgroundcolor:"var(--color-verification-vehicle-light)",padding:"3rem 4rem 6rem 4rem",categoryName:"vehicle data",data:t})}const D=["owner","registration","insurance","additionalInformation"];function C(){const a=h(),{data:r}=a.state||{},{additionalInformation:t,insurance:o,owner:n,registration:c}=r.vehicle.data,f={additionalInformation:t,insurance:o,owner:n,registration:c};return console.log(r),r.vehicle.data&&e.jsxs(p,{children:[e.jsx(v,{verification:"vehicle verification",data:{name:r.vehicle.data.owner.name}}),e.jsxs(j,{column:"1fr",row:"12rem repeat(5, auto)",margin:"9rem 0 0 0",padding:"2rem",gap:"2rem",children:[e.jsx(A,{heroData:r.vehicle.data.headerData}),e.jsx(S,{vehicleData:r.vehicle.data.vehicleInformation,registrationDate:r.vehicle.data.vehicleInformation.manufacturedMonthYear}),D.map((s,l)=>e.jsx(m,{backgroundcolor:`var(--color-verification-credit-${l%2===0?"dark":"light"})`,padding:"3rem 4rem 6rem 4rem",categoryName:b(s),data:f[s]},l))]})]})}function R(){return e.jsx(e.Fragment,{children:e.jsx(C,{})})}export{R as default};
