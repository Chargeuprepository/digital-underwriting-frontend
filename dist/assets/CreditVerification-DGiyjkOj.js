import{j as e,p as t,ar as g}from"./index-UFlMoqOZ.js";import{G as h}from"./GridMaker-BvvTJRff.js";import{b as i}from"./breakCamelCase-BfS5I_ZA.js";import{A as j}from"./AllVerificationAllCategoryTabs-xj3M53xt.js";import{S as y,A as v,V as D}from"./GridTab-C-SrZc0Z.js";import{S as C}from"./ScoreChart-CLZL9Mnd.js";import"./BarRenderContent-NmY6jVmv.js";import"./index-CtiMWsHh.js";import"./iconBase-CFzihDm8.js";import"./index-CwNeIYaM.js";import"./index-Db3ih9c4.js";import"./index-BKNjMPK8.js";const S=t.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-transform: capitalize;
  padding: 2rem 10rem 3rem 10rem;
`,b=t.div`
  grid-column: 3/-1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-gray-600);
`,o=t.div``,A=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,H=t.div`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-gray-600);
`;function w({heroData:r}){return e.jsx(y,{boxshadow:"false",children:e.jsxs(S,{children:[e.jsxs(A,{children:[e.jsx(H,{children:"credit score"}),e.jsx(C,{param:r.creditScore})]}),e.jsxs(b,{children:[e.jsxs(o,{children:[i("outstandingBalance"),":   ₹",r.outstandingBalance]}),e.jsxs(o,{children:[i("accountsActive"),":  ",r.accountsActive]}),e.jsxs(o,{children:[i("accountsDefault"),":  ",r.accountsDefault]})]})]})})}const I=["accountSummary","personalDetails","applicationDetails","capsSummary","otherDetails"];function V(){const r=g(),{data:a}=r.state||{},n=a.credit.INProfileResponse.header,d=a.credit.INProfileResponse.hero,{accountSummary:l,personalDetails:m,applicationDetails:p,capsSummary:u,otherDetails:f}=a.credit.INProfileResponse,x={accountSummary:l,personalDetails:m,applicationDetails:p,capsSummary:u,otherDetails:f};return e.jsxs(v,{children:[e.jsx(D,{verification:"credit verification",data:{name:n.name,mobile:n.mobile,secondIcon:"mobile"}}),e.jsxs(h,{column:"1fr",row:"20rem repeat(5, auto)",margin:"9rem 0 0 0",padding:"2rem",gap:"2rem",children:[e.jsx(w,{heroData:d}),I.map((s,c)=>e.jsx(j,{backgroundcolor:`var(--color-verification-credit-${c%2===0?"dark":"light"})`,padding:"3rem 4rem 6rem 4rem",categoryName:i(s),data:x[s]},c))]})]})}function $(){return e.jsx("div",{children:e.jsx(V,{})})}export{$ as default};
