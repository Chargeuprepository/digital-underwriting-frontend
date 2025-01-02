import{j as e,p as i,ar as q,r as d}from"./index-UFlMoqOZ.js";import{S as l,O as g,A as J,V as K}from"./GridTab-C-SrZc0Z.js";import{S as Q}from"./ScoreChart-CLZL9Mnd.js";import{W as X}from"./WhereYouStandTable-BzvEzNQT.js";import{R as $}from"./index-CkKNDW-3.js";import{b as O}from"./breakCamelCase-BfS5I_ZA.js";import{I as Z,B as U}from"./BarRenderContent-NmY6jVmv.js";import{c as _}from"./fun-Dg0M5XhR.js";import{G as I}from"./GridMaker-BvvTJRff.js";import"./index-CtiMWsHh.js";import"./iconBase-CFzihDm8.js";import"./index-CwNeIYaM.js";import"./index-Db3ih9c4.js";import"./index-BKNjMPK8.js";const A=i.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-10);
  background: linear-gradient(to bottom, #def1f4, #ccede8);
  border-radius: 0.6rem;
  border: 1px solid var(--color-gray-100);
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.12fr 0.44fr 1fr;
  gap: 1rem;
`,D=i.div`
  /* background-color: #a96575; */
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
`,P=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ee=i.div``,re=[{score:"0-400",percent:"4.76%",color:"#00953c"},{score:"401-500",percent:"32.20%",color:"#1aa050"},{score:"501-600",percent:"40.64%",color:"#f9f906"},{score:"601-750",percent:"22.40%",color:"#ff9c38"},{score:"751-999",percent:"0.00%",color:"#f01010"}];function oe({riskScore:o}){return e.jsx(l,{gridrow:"1/3",style:{height:"calc(100vh - 13rem)"},children:e.jsxs(A,{children:[e.jsx(D,{children:"risk score"}),e.jsx(P,{children:e.jsx(Q,{param:o})}),e.jsx(ee,{children:e.jsx(X,{whereIStand:re,riskScore:o})})]})})}const ie=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  gap: 3rem;
  padding: 2.5rem 3rem 2rem 3rem;
  border: 1px solid var(--color-gray-100);
  border-radius: 0.6rem;
  background: linear-gradient(to bottom, #41295a, #2f0743);
`,W=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  height: 100%;
  overflow-y: hidden;
`,B=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`,F=i.div`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-gray-50);
  color: ${o=>o.color==="red"?"#e70101":"#07c300"};
  padding-left: 1rem;
`,G=i.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-50);
`,L=i.div`
  display: flex;

  svg {
    margin-top: 0.1rem;
    height: 1.8rem;
    width: 1.8rem;
    color: var(--color-gray-100);
  }
`,M=o=>o.map(r=>r.replace(/\bbureau('?s)?\b/gi,"multiple"));function te({positiveNegative:o}){const{positives:r,negatives:c}=o,t=M(r),a=M(c);return e.jsx(l,{gridcolumn:"2 / -1",backgroundcolor:"#ffffff",children:e.jsxs(ie,{children:[e.jsxs(W,{children:[e.jsx(F,{color:"red",children:O("negativeInsights")}),e.jsx(B,{children:a.map((s,n)=>e.jsxs(L,{children:[e.jsx("div",{children:e.jsx($,{})}),e.jsx(G,{children:s},n)]},n))})]}),e.jsxs(W,{children:[e.jsx(F,{color:"green",children:O("positiveInsights")}),e.jsx(B,{children:t.map((s,n)=>e.jsxs(L,{children:[e.jsx("div",{children:e.jsx($,{})}),e.jsx(G,{children:s})]},n))})]})]})})}const ce=i.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 13rem;
  gap: 1.2rem;
  background-color: var(--color-gray-50);
`,ne=i.div`
  background-color: var(--color-gray-50);
  display: grid;
  grid-template-columns: 24rem 1fr;
  gap: 1.2rem;
`,ae=i.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.2rem;
`;function se({riskInsightsData:o,allRef:r}){const[c,t,a]=r;return e.jsx(l,{gridcolumn:"2 / -1",children:e.jsxs(ce,{children:[e.jsxs(ne,{children:[e.jsx(g,{backgroundcolor:["#69eae6","#519bb9"],data:o.identity}),e.jsxs(ae,{children:[e.jsx(g,{backgroundcolor:["#6190e8","#6190e8"],data:o.telecom,refVal:a}),e.jsx(g,{backgroundcolor:["#7dcc50","#76b852"],data:o.digital,refVal:t})]})]}),e.jsx(g,{backgroundcolor:["#f4a93f","#f4a93f"],data:o.social,refVal:c})]})})}const m=i.div`
  display: grid;
  grid-template-columns: ${o=>o.social==="TRUE"?"1fr":"repeat(4, 1fr)"};
  gap: ${o=>o.social==="TRUE"?"4rem":"2rem"};
  padding: 3rem 3rem;
`,f=i.div`
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--color-gray-800);
  padding: 2.5rem 0 0 2rem;
`,u=i.div`
  height: 100%;
  width: 100%;
  border-radius: 0.6rem;
  background: linear-gradient(
    to bottom,
    ${o=>o.backgroundcolor[0]},
    ${o=>o.backgroundcolor[1]}
  );
`,le=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,de=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`,ge=i.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
`,me=i.img`
  height: 4rem;
  width: 4rem;
`,fe=i.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border: 1px solid var(--color-gray-100);
  padding: 1rem 3rem 1rem 10rem;
  border-radius: 0.6rem;
  flex: 0 0 auto;
`,ue=o=>{if(typeof o=="object"&&o!==null)return Object.entries(o).map(([r,c])=>e.jsxs(le,{children:[e.jsx(ge,{children:r}),e.jsx(de,{children:c.map(t=>e.jsxs(fe,{children:[e.jsx(me,{src:`/img/socialMediaIcons/${t}.svg`}),e.jsx(Z,{children:t})]},t))})]},r))};function pe({socialRef:o,socialData:r}){return e.jsx(l,{ref:o,gridcolumn:" 1 / -1",backgroundcolor:"#b8b7ff",children:e.jsxs(u,{backgroundcolor:["#f4a93f","#f4a93f"],children:[e.jsx(f,{children:"social attributes"}),e.jsx(m,{social:"TRUE",children:ue(r)})]})})}function he({digitalRef:o,digitalData:r}){return e.jsx(l,{ref:o,gridcolumn:"1 / -1",backgroundcolor:"#b8b7ff",children:e.jsxs(u,{backgroundcolor:["#7dcc50","#76b852"],children:[e.jsx(f,{children:"digital attributes"}),e.jsx(m,{children:U(r)})]})})}function xe({telecomRef:o,telecomData:r}){return e.jsx(l,{ref:o,gridcolumn:"1 / -1",backgroundcolor:"#b8b7ff",children:e.jsxs(u,{backgroundcolor:["#6190e8","#6190e8"],children:[e.jsx(f,{children:"telecom attributes"}),e.jsx(m,{children:U(r)})]})})}function be(){var p,h,x,b,j,v,y,R,S,k,w,C,T,V,z,H;const o=q(),{data:r}=o.state||{},[c,t]=d.useState({}),a=d.useRef(null),s=d.useRef(null),n=d.useRef(null);return d.useEffect(function(){var N,E;const Y=_((E=(N=r==null?void 0:r.risk)==null?void 0:N.data)==null?void 0:E.socialAttributes);t(Y)},[]),e.jsxs(J,{children:[e.jsx(K,{verification:"risk verification",data:{name:(x=(h=(p=r==null?void 0:r.risk)==null?void 0:p.data)==null?void 0:h.header)==null?void 0:x.name,mobile:(v=(j=(b=r==null?void 0:r.risk)==null?void 0:b.data)==null?void 0:j.header)==null?void 0:v.mobile,secondIcon:"mobile"}}),e.jsxs(I,{column:"0.9fr 1fr 1fr",row:"19rem, repeat(4, auto)",margin:"9rem 0 0 0",padding:"2rem",gap:"2rem",children:[e.jsx(oe,{riskScore:(R=(y=r==null?void 0:r.risk)==null?void 0:y.data)==null?void 0:R.riskScore}),e.jsx(te,{positiveNegative:(k=(S=r==null?void 0:r.risk)==null?void 0:S.data)==null?void 0:k.insights}),e.jsx(se,{riskInsightsData:(C=(w=r==null?void 0:r.risk)==null?void 0:w.data)==null?void 0:C.allFourRisk,allRef:[a,s,n]}),e.jsx(xe,{telecomRef:n,telecomData:(V=(T=r==null?void 0:r.risk)==null?void 0:T.data)==null?void 0:V.telecomAttributes}),e.jsx(he,{digitalRef:s,digitalData:(H=(z=r==null?void 0:r.risk)==null?void 0:z.data)==null?void 0:H.digitalAttributes}),e.jsx(pe,{socialRef:a,socialData:c})]})]})}function $e(){return e.jsx(e.Fragment,{children:e.jsx(be,{})})}export{$e as default};
