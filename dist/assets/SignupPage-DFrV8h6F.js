import{j as e,p as r,r as b}from"./index-UFlMoqOZ.js";import{G as E}from"./GridMaker-BvvTJRff.js";import{u as I,c as d}from"./createCamelCase-BxEoy3tW.js";import{A as u}from"./Astrick-CsvrJoMN.js";function w(t,l){const a=t.target.value.slice(0,l);return console.log(a),a}const O=[{label:"name",type:"text",inputType:"input",placeholder:"satish mittal"},{label:"email",type:"text",inputType:"input",placeholder:"email@example.com"},{label:"phone",type:"number",inputType:"input",placeholder:"948$$$6663",maxLength:10,minLength:10},{label:"id",type:"text",inputType:"input",placeholder:"enter your id"},{label:"role",options:["manager","employee"],inputType:"select"},{label:"password",type:"text",inputType:"input",placeholder:"**********"}],P=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`,F=r.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 3rem;
  width: 55rem;
`,h=r.div`
  display: flex;
  flex-direction: column;
`,x=r.label`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-700);
`,q=r.input`
  height: 3.8rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  color: var(--color-gray-600);
  border: 1px solid #d4d4d4;

  &:focus {
    background-color: ${t=>t.inputbackground};
  }
  &::placeholder {
    color: var(--color-gray-200);
  }
`,A=r.select`
  height: 3.8rem;
  border: none;
  border-radius: 0.6rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  padding-left: 1rem;
  color: var(--color-gray-600);
  border: 1px solid #d4d4d4;

  &:focus {
    background-color: ${t=>t.inputbackground};
  }
`,f=r.option`
  text-transform: capitalize;
`,B=r.div`
  color: #c70404;
  margin-left: auto;
  font-size: 1.2rem;
  text-transform: capitalize;
`,V=r.button`
  grid-column: 1 / -1;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 2rem;
  background-color: ${t=>t.backgroundColor};
  color: var(--color-gray-25);
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.2s;
  text-transform: capitalize;
  &:hover {
    background-color: ${t=>t.hoverColor};
    color: var(--color-gray-100);
  }
  &:active {
    transform: scale(0.99);
  }
`,D=r.div`
  height: 1.8rem;
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: auto;
`;function H({formButtonName:t,buttonColor:l,buttonHoverColor:a,inputbackground:s,defaultValues:n={}}){const{register:m,formState:S,handleSubmit:L,reset:T}=I({defaultValues:n}),{errors:i}=S;function $(o){console.log(o),T()}return e.jsx(P,{children:e.jsxs(F,{onSubmit:L($),children:[O.map(o=>{var g,p;return o.inputType==="input"?e.jsxs(h,{children:[e.jsxs(x,{htmlFor:o.label,children:[o.label,e.jsx(u,{children:"*"})]}),e.jsx(q,{type:o.type,id:o.label,autoComplete:"off",placeholder:o.placeholder,onInput:c=>{o.type==="number"&&(c.target.value=w(c,o.maxLength))},...m(`${d(o.label)}`,{required:"this is required"}),inputbackground:s}),e.jsx(B,{children:(g=i==null?void 0:i[d(o.label)])!=null&&g.message?(p=i==null?void 0:i[d(o.label)])==null?void 0:p.message:e.jsx(D,{children:" "})})]},o.label):e.jsxs(h,{children:[e.jsxs(x,{children:[o.label,e.jsx(u,{children:"*"})]}),e.jsxs(A,{...m(`${d(o.label)}`,{required:"this is required"}),inputbackground:s,children:[e.jsx(f,{value:"",disabled:!0,children:"select"},"0"),o.options.map(c=>e.jsx(f,{children:c},c))]})]},o.label)}),e.jsx(V,{type:"submit",backgroundColor:l,hoverColor:a,children:t})]})})}const G=r.img`
  width: 24rem;
  display: block;
  margin: 2rem auto;
`;function N(){return e.jsxs(C,{background:"var(--color-gray-50)",bradius:"true",children:[e.jsx(G,{src:"img/logo-chargeup.png"}),e.jsx(H,{formButtonName:"create user",buttonColor:"var(--color-brand-original-green-400)",buttonHoverColor:"var(--color-brand-green-500)",inputbackground:"#efffeb"})]})}const M=r.div`
  text-transform: capitalize;
  color: var(--color-gray-50);
  margin: 4rem 0rem 0rem 0rem;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  position: relative;
`,R=r.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
`,y=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`,j=r.label`
  color: var(--color-gray-50);
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 500;
`,v=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,k=r.button`
  margin-left: auto;
  text-transform: capitalize;
  border-radius: 0.6rem;
  border: none;
  padding: 0.4rem 2rem;
  background-color: var(--color-brand-original-green-400);
  color: var(--color-gray-50);
  font-size: 1.6rem;
  font-weight: 500;
  min-width: 11rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-brand-green-500);
    color: var(--color-gray-200);
  }
  &:active {
    transform: scale(0.96);
  }
`,z=r.input`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-600);
  width: 35rem;
  height: 4rem;
  border: none;
  border-radius: 0.6rem;
  text-align: center;
  padding: 1rem 2rem;
  background-color: var(--color-gray-100);
  transition: all 0.3s;
  &:focus {
    background-color: var(--color-gray-1);
  }
  &::placeholder {
    color: var(--color-gray-400);
  }
`,U=r.img`
  position: absolute;
  width: 3.3rem;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;function Y(){const[t,l]=b.useState(""),[a,s]=b.useState();return e.jsxs(C,{background:"var(--color-brand-original-blue-400)",bradius:"true",children:[e.jsxs(M,{children:[e.jsx(U,{src:"/img/logo-plug.webp"}),"get your email verified !"]}),e.jsxs(R,{children:[e.jsxs(y,{children:[e.jsxs(j,{children:["email",e.jsx(u,{children:"*"})]}),e.jsxs(v,{children:[e.jsx(z,{value:t,onChange:n=>l(n.target.value),placeholder:"xyz@example.com"}),e.jsx(k,{children:"proceed"})]})]}),e.jsxs(y,{children:[e.jsxs(j,{children:["enter OTP",e.jsx(u,{children:"*"})]}),e.jsxs(v,{children:[e.jsx(z,{value:a,type:"number",onInput:n=>{n.target.value=w(n,6),s(n.target.value)},placeholder:"Enter OTP"}),e.jsx(k,{children:"verify"})]})]})]})]})}const C=r.div`
  background: ${t=>t.background};
  border-radius: ${t=>t.bradius==="true"&&"calc(0.5rem)"};
  background-size: 350px;
`,J=r.div`
  padding: 8rem 16rem;
  height: 100vh;
  background: var(--color-brand-original-blue-400);
`;function K(){return e.jsx(J,{children:e.jsxs(E,{column:"0.8fr 1fr",height:"100%",backgroundcolor:"var(--color-gray-50)",padding:"0.5rem",bradius:"1rem",boxshadow:"true",children:[e.jsx(Y,{}),e.jsx(N,{})]})})}function _(){return e.jsx("div",{children:e.jsx(K,{})})}export{_ as default};
