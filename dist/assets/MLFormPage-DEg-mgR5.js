import{p as t,ar as y,j as r}from"./index-UFlMoqOZ.js";import{u as v,c as i}from"./createCamelCase-BxEoy3tW.js";import{A as j}from"./Astrick-CsvrJoMN.js";import{F as w,a as F}from"./Form-BIMQIAmO.js";import{F as k}from"./FormRow-CKiZap-Z.js";t.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;t.label`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-800);
`;const z=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`,L=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 6rem;
`;t.input`
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 26rem;
  border: 1px solid var(--color-gray-600);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  padding-left: 1rem;
  background: linear-gradient(
    to right,
    var(--color-gray-25),
    var(--color-gray-50)
  );

  &::placeholder {
    color: var(--color-gray-400);
    font-size: 1.4rem;
  }
  &:focus {
    outline: none;
  }
`;const s=t.option`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  background-color: var(--color-gray-50);
`,S=t.select`
  border: 1px solid var(--color-gray-600);
  border-radius: 0.4rem;
  height: 3.5rem;
  width: 26rem;
  font-size: 1.4rem;
  padding-left: 0.4rem;
  color: var(--color-gray-700);
  background: linear-gradient(
    to right,
    var(--color-gray-25),
    var(--color-gray-50)
  );
`,$=t.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #d00000;
  margin-left: auto;
`,M=t.input`
  border-radius: 0.6rem;
  height: ${e=>e.width?e.height:"3.5rem"};
  width: ${e=>e.width?e.width:"26rem"};
  border: ${e=>e.border?e.border:"1px solid var(--color-gray-600)"};
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-gray-700);
  padding-left: 1rem;
  background: ${e=>e.background};
  box-shadow: ${e=>e.boxshadow};
  text-transform: uppercase;
  transition: all 0.3s;

  &::placeholder {
    color: var(--color-gray-200);
    font-size: 1.4rem;
    padding-top: 2rem;
  }
  &:focus,
  &:active {
    background: ${e=>e.activefocusbackgroundcolor?e.activefocusbackgroundcolor:"#fffa9f"};
  }
`,C=M,R=t.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0rem 3rem 16rem;
  border-radius: 1rem;
  background: var(--color-gray-50);
  margin-bottom: auto;
  margin-top: auto;
`,E=t.div`
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--color-gray-800);
`,I=t.button`
  margin-left: auto;
  border: none;
  background: linear-gradient(45deg, #000428, #004e92);
  color: var(--color-gray-0);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.7rem 3rem;
  border-radius: 0.6rem;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(45deg, #000740, #005eaf);
  }
  &:active {
    scale: 0.94;
  }
`,P=t.div`
  height: 1.65rem;
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: auto;
`;function A(){var n;const{register:e,formState:m,handleSubmit:g,reset:u}=v(),{errors:a}=m;console.log(a);const f=(n=y().state)==null?void 0:n.data,{data:h,heading:p}=f;function b(o){console.log(o),u()}return r.jsxs(R,{children:[r.jsx(E,{children:p}),r.jsxs(w,{gap:"1.8rem",borderradius:"1rem",onSubmit:g(b),children:[r.jsx(L,{children:h.map(o=>{var l,c;return r.jsxs(k,{flexdirection:"column",gap:"0.4rem",children:[r.jsxs(F,{htmlFor:o.label,children:[o.label,r.jsx(j,{children:"*"})]}),r.jsxs(z,{children:[o.formValueType==="input"&&r.jsx(C,{background:"linear-gradient(to right, var(--color-gray-25), var(--color-gray-50))",type:o.type,id:o.label,autoComplete:"off",step:`${o.type==="number"&&.01}`,placeholder:o.placeholder,...e(`${i(o.label)}`,{required:o.message})}),o.formValueType==="select"&&r.jsxs(S,{...e(`${i(o.label)}`),children:[r.jsx(s,{disabled:!0,value:"",children:"Select"},"0"),o.values.map((d,x)=>r.jsx(s,{value:d,children:d},x+1))]}),r.jsx($,{children:(l=a==null?void 0:a[i(o.label)])!=null&&l.message?(c=a==null?void 0:a[i(o.label)])==null?void 0:c.message:r.jsx(P,{})})]})]},o.label)})}),r.jsx(I,{type:"submit",children:"Let's Predict"})]})]})}const H=t.div``;function T(){return r.jsx(H,{children:"StyledFormResult"})}const V=t.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  height: 100%;
  background: linear-gradient(45deg, #000428, #004e92);
`;function q(){return r.jsxs(V,{children:[r.jsx(A,{}),r.jsx(T,{})]})}const B=t.div`
  height: 100vh;
`;function Q(){return r.jsx(B,{children:r.jsx(q,{})})}export{Q as default};
