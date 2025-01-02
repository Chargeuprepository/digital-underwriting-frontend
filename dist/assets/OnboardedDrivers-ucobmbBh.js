import{j as e,u as H,p as a,r as b,_ as W,S as K,a2 as V,aq as q,ar as _}from"./index-UFlMoqOZ.js";import{I as Q}from"./index-CwNeIYaM.js";import{F as L}from"./Filter-m_s0x82a.js";import{u as T}from"./queryManager-NPWUTG1d.js";import{G as $}from"./iconBase-CFzihDm8.js";import{S as U}from"./ScoreChart-CLZL9Mnd.js";import{W as Y}from"./WhereYouStandTable-BzvEzNQT.js";import{b as Z}from"./breakCamelCase-BfS5I_ZA.js";import{O as J}from"./Overlay-i9fA_ZEF.js";import{G as X}from"./GridMaker-BvvTJRff.js";import{T as R}from"./TryAgain-DtDy1RIh.js";import"./useLazyQuery-B69fhfCn.js";import"./index-BKNjMPK8.js";import"./index-CGwYIXXS.js";function D(){return e.jsx(L,{paramName:"credit",options:[{value:"high",label:"High",backColor:"#15ff0087"},{value:"medium",label:"Med",backColor:"#ffee0083"},{value:"low",label:"Low",backColor:"#ff000084"},{value:"NTC",label:"NTC",backColor:"#7c7c7cc5"}]})}function ee(){return e.jsx(L,{paramName:"risk",options:[{value:"low",label:"Low",backColor:"#15ff0087"},{value:"medium",label:"Med",backColor:"#ffee0083"},{value:"high",label:"High",backColor:"#ff000084"}]})}function re(){return e.jsx(L,{paramName:"karma",options:[{value:"high",label:"High",backColor:"#15ff0087"},{value:"medium",label:"Med",backColor:"#ffee0083"},{value:"low",label:"Low",backColor:"#ff000084"}]})}const oe=a.div`
  height: 5rem;
  width: 8rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-100);
  margin-right: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border: 1px solid var(--color-gray-400);
    background-color: var(--color-gray-10);
  }

  &:active {
    transform: scale(0.97);
  }
`;function te({length:r}){const t=H(),n=()=>{const g=window.location.pathname;t(g,{replace:!0})};return e.jsx(oe,{onClick:n,children:r})}const ne=a.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 0rem;
  /* padding: 0 0rem 0 0; */
  /* background-color: red; */
`,se=a.div`
  /* background-color: #ed8282; */
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
  width: 100%;
`,ie=a.div`
  position: relative;
  width: 24rem;
  height: 4.4rem;
  border: 2px solid var(--color-gray-100);
  border-radius: 0.6rem;
  transition: all 0.3s;
  ${r=>r.isFocused&&`
      box-shadow: 0 0 10px rgba(117, 117, 117, 0.5);
  `}
`,ae=a.input`
  width: 85%;
  height: 100%;
  border-radius: 0.6rem;
  border: none;
  padding-left: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: var(--color-gray-500);
  background-color: transparent;
  text-transform: uppercase;

  &::placeholder {
    color: var(--color-gray-100);
    font-size: 1.4rem;
  }
`,le=a.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    height: 2.6rem;
    width: 2.6rem;
    transition: all 0.3s;
    color: var(--color-gray-200);
  }
  svg:hover {
    color: var(--color-gray-500);
  }
  svg:active {
    transform: scale(0.9);
  }
`;function ce({length:r,handleSearch:t}){const[n,g]=b.useState(""),[s,o]=b.useState(!1),f=()=>{o(!0)},j=()=>{o(!1)};function u(){n.length>3&&t(n.trim().toUpperCase()),g("")}const m=l=>{l.key==="Enter"&&u()};return e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsx(te,{length:r}),e.jsx(D,{}),e.jsx(ee,{}),e.jsx(re,{})]}),e.jsxs(ie,{isFocused:s,children:[e.jsx(ae,{type:"text",placeholder:"Search Driver...",onFocus:f,onBlur:j,value:n,onChange:l=>g(l.target.value),onKeyDown:l=>m(l)}),e.jsx(le,{onClick:u,children:e.jsx(Q,{})})]})]})}const A=a.div`
  display: grid;
  grid-template-columns: 8rem 28rem repeat(2, 14rem) 14rem repeat(4, 1fr);
  background-color: ${r=>r.bgcolor};
  transition: all 0.3s;
  &:hover {
    cursor: ${r=>r.pointer==="true"&&"pointer"};
  }
`,x=a.div`
  font-size: 1.55rem;
  font-weight: 500;
  color: ${r=>r.color};
  min-height: 4.5rem;
  text-transform: capitalize;
  overflow-x: ${r=>r.horiScroll==="true"&&"auto"};
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  align-content: center;
  transition: all 0.5s;

  /* padding: 0rem 0.6rem; */

  &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    cursor: ${r=>r.pointer==="true"&&"pointer"};
    transform: ${r=>r.pointer==="true"&&"scale(1.13)"};
  }
`,G=a.div`
  height: 45%;
  width: 70%;
  background-color: ${({bgColor:r})=>r||"transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  color: var(--color-gray-800);
  text-transform: uppercase;
`;function O(r,t){const n=Number(t);if(!t||isNaN(n))return"#cccccc";if(r==="credit")return n>650?"#15ff0087":n<=650&&n>=450?"#ffee0083":n>=1?"#ff000084":"#cccccc";if(r==="risk")return n>650?"#ff000084":n<=650&&n>=450?"#ffee0083":"#15ff0087";if(r==="karma")return n>700?"#15ff0087":n<=700&&n>=500?"#ffee0083":"#ff000084";throw new Error(`Invalid type: ${r}`)}const de=a.div``,ge=["id","name","credit","risk","karma","avg DPD","service","run KMs","NPS"];function fe(){return e.jsxs(de,{children:[e.jsx(A,{bgcolor:"var(--color-brand-original-blue-400)",pointer:"false",children:ge.map((r,t)=>e.jsx(x,{color:"var(--color-gray-50)",children:r},t))})," "]})}function ue(r){return $({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"},child:[]}]})(r)}const me=a.div`
  height: 80vh;
  width: 80vw;
  background-color: var(--color-gray-0);
  border-radius: 0.8rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.305);
  background: linear-gradient(
    45deg,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-800)
  );
  padding: 1rem;
`,he=a.div`
  padding: 1rem 1rem 1rem 3rem;
  height: 100%;
  border: 2px solid var(--color-gray-50);
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: 25% 1fr;
  gap: 2rem;
`,pe=a.div`
  position: absolute;
  right: 3rem;
  top: 2rem;
  color: #a5a5a5;
  svg {
    cursor: pointer;
    transition: all 0.15s;
  }
  svg:hover {
    transform: scale(1.06);
    color: aliceblue;
  }
`,xe=a.div`
  /* background-color: #c4e0e0; */
`,be=a.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-gray-25);
  margin: 3.2rem 0 1.4rem 1.3rem;
  /* background-color: aliceblue; */
`,je=a.div`
  /* background-color: aqua; */
  padding: 4rem 3rem 4rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.6rem;
`,ye=a.div`
  /* background-color: aliceblue; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`,ve=a.div`
  border: 1px solid var(--color-gray-500);
  padding: 1rem 1.6rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  transition: all 0.3s;
  cursor: pointer;
  height: 8rem;

  &:nth-child(1) {
    background: linear-gradient(
      to left,
      var(--color-brand-green-700),
      var(--color-brand-green-800)
    );
    border: 1px solid var(--color-gray-0);
  }
  &:hover {
    transform: scale(1.02);
  }
`,F=a.div`
  text-transform: capitalize;
  font-size: ${r=>r.size};
  font-weight: ${r=>r.weight};
  color: ${r=>r.color};
`;function we({setOpenRiskModelWindow:r,onboardedRisk:t}){var g;b.useEffect(function(){var s,o,f;(s=t==null?void 0:t.error)!=null&&s.message&&(W.error(`${(o=t==null?void 0:t.error)==null?void 0:o.status}: ${(f=t==null?void 0:t.error)==null?void 0:f.message}`),r(!1))},[(g=t==null?void 0:t.error)==null?void 0:g.message]);const n=t==null?void 0:t.data;return e.jsx(me,{onClick:s=>s.stopPropagation(),children:n?e.jsxs(he,{children:[e.jsx(pe,{onClick:()=>r(!1),children:e.jsx(ue,{})}),e.jsxs(xe,{children:[e.jsx(be,{children:"Chargeup Risk Score"}),e.jsx(U,{param:+(n==null?void 0:n.riskScore),textColor:"var(--color-gray-50)"}),e.jsx(Y,{riskScore:+(n==null?void 0:n.riskScore),whereIStand:n==null?void 0:n.whereIStand,fontSize:"1.45rem"})]}),e.jsxs(je,{children:[e.jsx(I,{data:n.digital}),e.jsx(I,{data:n.identity}),e.jsx(I,{data:n.social}),e.jsx(I,{data:n.telecom})]})]}):e.jsx(K,{})})}function I({data:r}){return e.jsx(ye,{children:Object.entries(r).map(([t,n])=>e.jsxs(ve,{children:[e.jsx(F,{size:"1.2rem",weight:"600",color:"var(--color-gray-300)",children:Z(t)}),e.jsx(F,{size:"1.3rem",weight:"500",color:"var(--color-gray-100)",children:n})]},t))})}const Ce=a.div`
  height: 45rem;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`,Se=a.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  position: absolute;
  top: 30%;
  left: 41%;
`;function ke({driverData:r}){var w,C,c,y;const{fetchOnboardedDriversData:t,loading:n,error:g,driverData:s}=T("getOnboardedRiskData"),[o,f]=b.useState(!1),j=H();b.useEffect(function(){var i,d,h,p,v,S,k,N,B;((d=(i=s==null?void 0:s.onboardedRisk)==null?void 0:i.settingGoogleSheetDataInfo)==null?void 0:d.dataSet)===!1&&toastWarning((v=(p=(h=s==null?void 0:s.onboardedRisk)==null?void 0:h.settingGoogleSheetDataInfo)==null?void 0:p.error)==null?void 0:v.message),(k=(S=s==null?void 0:s.onboardedRisk)==null?void 0:S.gettingGoogleSheetDataInfo)!=null&&k.status&&toastWarning((B=(N=s==null?void 0:s.onboardedRisk)==null?void 0:N.gettingGoogleSheetDataInfo)==null?void 0:B.message)},[(C=(w=s==null?void 0:s.onboardedRisk)==null?void 0:w.settingGoogleSheetDataInfo)==null?void 0:C.dataSet,(y=(c=s==null?void 0:s.onboardedRisk)==null?void 0:c.gettingGoogleSheetDataInfo)==null?void 0:y.status]);function u(i){j(`/driver/${i.id}`,{state:{data:i}})}function m(i){f(d=>!d),t({variables:{input:{id:i}}})}console.log(s);const l=r==null?void 0:r.onboardedManipulatedData;return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:r?(l==null?void 0:l.length)>0?l==null?void 0:l.map((i,d)=>{const h=O("credit",i.credit),p=O("risk",i.risk),v=O("karma",i.karma);return e.jsxs(A,{bgcolor:d%2===0?"#f6f6f6":"#e5e9f2",children:[e.jsx(x,{style:{display:"flex",alignItems:"center",paddingLeft:"3rem"},children:i.id}),e.jsx(x,{horiScroll:"true",children:i.name.split(" ")[0]+" "+i.name.split(" ")[1]}),e.jsx(x,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(G,{bgColor:h,children:i.credit})}),e.jsx(x,{style:{display:"flex",justifyContent:"center",alignItems:"center"},pointer:"true",onClick:()=>m(i.id),children:e.jsx(G,{bgColor:p,children:i.risk})}),e.jsx(x,{style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>u(i),pointer:"true",children:e.jsx(G,{bgColor:v,children:i.karma})}),e.jsx(x,{children:i.avgDpd}),e.jsx(x,{children:i.service}),e.jsx(x,{children:i.runKm}),e.jsx(x,{children:i.nps})]},d)}):e.jsx(Se,{children:"No Driver Found😟"}):e.jsx(K,{})}),o&&V.createPortal(e.jsx(J,{onClick:()=>f(!1),children:e.jsx(we,{setOpenRiskModelWindow:f,onboardedRisk:s==null?void 0:s.onboardedRisk})}),document.body)]})}const Ie=a.div`
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.045);
  border-radius: 0.6rem;
  overflow: hidden;
`;function Pe({driverData:r}){return e.jsxs(Ie,{children:[e.jsx(fe,{}),e.jsx(ke,{driverData:r&&r})]})}const P=20;function Ge(r){return $({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(r)}function Oe(r){return $({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(r)}const ze=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
`,Le=a.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-500);
`,$e=a.div`
  display: flex;
  gap: 0.6rem;
`,M=a.button`
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-600)
  );
  color: var(--color-gray-50);
  border: none;
  border-radius: 0.6rem;
  font-weight: 500;
  font-size: 1.4rem;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-gray-200);
  }
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;function z(r){return Number.isInteger(r)&&r>=1&&r<=9?r<10?`0${r}`:`${r}`:r}function Ne({count:r}){const[t,n]=q(),g=t.get("offset")||0,s=t.get("page")?Number(t.get("page")):1,o=Math.ceil(r/P);function f(){const u=s===o?s:s+1,m=+g+20;t.set("page",u),t.set("offset",m),n(t)}function j(){const u=s===1?s:s-1,m=+g-20;t.set("page",u),t.set("offset",m),n(t)}return b.useEffect(function(){t.set("page",1),t.set("offset",0),n(t)},[t.get("credit"),t.get("risk"),t.get("karma")]),r<=P||r===0?null:e.jsxs(ze,{children:[e.jsxs(Le,{children:["Showing"," ",e.jsx("span",{children:z((s-1)*P+1)})," ","to"," ",e.jsx("span",{children:z(s===o?r:s*P)})," ","of ",e.jsx("span",{children:z(r)})," results"]}),e.jsxs($e,{children:[e.jsxs(M,{onClick:j,disabled:s===1,children:[e.jsx(Ge,{}),e.jsx("span",{children:"Previous"})]}),e.jsxs(M,{onClick:f,disabled:s===o,children:[e.jsx("span",{children:"Next"}),e.jsx(Oe,{})]})]})]})}const Be=a.div`
  display: flex;
  /* background-color: red; */
  width: 85rem;
  padding-left: 1rem;
  padding-right: 11rem;
  justify-content: space-between;
  margin-left: 11rem;
`,E=a.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-500);
`;function Fe(){return e.jsxs(Be,{children:[e.jsx(E,{children:"Pre-Onboarding"}),e.jsx(E,{children:"Post-Onboarding"})]})}function Me(){var j,u,m,l,w,C;const r=_(),t=new URLSearchParams(r.search),{fetchOnboardedDriversData:n,loading:g,error:s,driverData:o}=T("getOnboardedData");b.useEffect(function(){const c={credit:t.get("credit")||"",risk:t.get("risk")||"",karma:t.get("karma")||"",offset:+t.get("offset")||0};n({variables:{input:c}})},[r.search,n]),b.useEffect(function(){var c,y,i,d,h,p;(y=(c=o==null?void 0:o.onboarded)==null?void 0:c.error)!=null&&y.message&&W.error(`${(d=(i=o==null?void 0:o.onboarded)==null?void 0:i.error)==null?void 0:d.status}: ${(p=(h=o==null?void 0:o.onboarded)==null?void 0:h.error)==null?void 0:p.message}`)},[(u=(j=o==null?void 0:o.onboarded)==null?void 0:j.error)==null?void 0:u.message]),b.useEffect(function(){var c,y,i,d,h,p,v,S,k;((y=(c=o==null?void 0:o.onboarded)==null?void 0:c.settingGoogleSheetDataInfo)==null?void 0:y.dataSet)===!1&&toastWarning((h=(d=(i=o==null?void 0:o.onboarded)==null?void 0:i.settingGoogleSheetDataInfo)==null?void 0:d.error)==null?void 0:h.message),(v=(p=o==null?void 0:o.onboarded)==null?void 0:p.gettingGoogleSheetDataInfo)!=null&&v.status&&toastWarning((k=(S=o==null?void 0:o.onboarded)==null?void 0:S.gettingGoogleSheetDataInfo)==null?void 0:k.message)},[(l=(m=o==null?void 0:o.onboarded)==null?void 0:m.settingGoogleSheetDataInfo)==null?void 0:l.dataSet,(C=(w=o==null?void 0:o.onboarded)==null?void 0:w.gettingGoogleSheetDataInfo)==null?void 0:C.status]);function f(c){console.log(c),n({variables:{input:{searchId:c}}})}return console.log(o),e.jsx(X,{column:"1fr",row:"1rem 5rem 1fr 3rem",gap:"2rem",height:"82vh",children:(o==null?void 0:o.onboarded.data)===null?e.jsx(R,{}):e.jsxs(e.Fragment,{children:[e.jsx(Fe,{}),e.jsx(ce,{length:o==null?void 0:o.onboarded.data.length,handleSearch:f}),e.jsx(Pe,{driverData:o==null?void 0:o.onboarded.data}),e.jsx(Ne,{count:o==null?void 0:o.onboarded.data.length})]})})}function Xe(){return e.jsx(Me,{})}export{Xe as default};
