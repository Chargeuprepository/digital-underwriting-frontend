import{u as m,j as a,as as p,p as r}from"./index-UFlMoqOZ.js";import{G as c}from"./GridMaker-BvvTJRff.js";const u=p`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,h=r.div`
  display: grid;
  grid-template-columns: ${e=>e.place%2===0?"20rem 1fr":"1fr 20rem"};
  gap: 2rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: linear-gradient(
    ${e=>e.place%2===0?"to right, #283048, #859398":"to left, #360033, #0b8793"}
  );
  transition: all 0.3s;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`,y=r.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${e=>e.place===0||e.place%2===0?"1 / 2":"2 / -1"};
`,g=r.img`
  height: 100%;
  width: 100%;
`,f=r.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(89, 0, 255, 0.5);
  grid-column: ${e=>e.place%2===0?"2 / -1":"1/ 2"};
  grid-row: 1;
  animation: ${u} 0.5s ease-in-out;
`,v=r.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${e=>(e.place%2===0,"var(--color-gray-100)")};
  padding-left: 2.2rem;
`,b=r.div`
  margin-bottom: 0.4rem;
`,x=r.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-gray-1);
  text-transform: capitalize;
  padding: 1.6rem 0 0 2.2rem;
`;function o({data:e,place:i,inputs:n}){const s=m();function l(t){s(`/ML-form/${t}`,{state:{data:n}})}return a.jsxs(h,{place:i,onClick:()=>l(e.name),children:[a.jsx(y,{place:i,children:a.jsx(g,{src:`/img/${e.name}.png`})}),a.jsxs(f,{place:i,children:[a.jsx(x,{children:e.modelName}),a.jsx(v,{place:i,children:e.description.split(".").slice(0,3).map((t,d)=>a.jsxs(b,{children:["– ",t,"."]},d))})]})]})}const T={name:"Latepayment",modelName:"Predicting Driver's Payment Behaviour",description:"Our machine learning model predicts user payment behavior, indicating whether a user will pay on time or delay. Leveraging key user parameters, it helps us manage risk proactively. This enhances our financial forecasting and operational efficiency."},P=1,E={heading:"Predicting Driver's Payment Behaviour",data:[{label:"tenure",type:"text",message:"This is required.",formValueType:"input",placeholder:"Total no. of months"},{label:"down payment",type:"text",message:"This is required.",formValueType:"input",placeholder:"Ex: ₹8000"},{label:"monthly EMI amount",type:"text",message:"This is required.",formValueType:"input",placeholder:"Ex: ₹3000"},{label:"loan amount",type:"text",message:"This is required.",formValueType:"input",placeholder:"Ex: ₹20,000"},{label:"amount repaid",type:"text",message:"This is required.",formValueType:"input",placeholder:"Ex: ₹2000"},{label:"remaining amount",type:"number",message:"This is required.",formValueType:"input",placeholder:"Ex: ₹3000"},{label:"avg distance in 7 days in KM",type:"number",message:"This is required.",formValueType:"input",placeholder:"Ex: 300KM"},{label:"digital footprint",type:"number",message:"This is required.",formValueType:"input",placeholder:"Yes"},{label:"identity confidence",type:"option",values:["high","medium","low"],message:"This is required.",formValueType:"select"},{label:"own residence",type:"option",values:["yes","no"],message:"This is required.",formValueType:"select",placeholder:"Yes"},{label:"vehicle status",type:"option",values:["DP-PAN","owned"],message:"This is required.",formValueType:"select",placeholder:"Yes"},{label:"social footprint score",type:"number",message:"This is required.",formValueType:"input",placeholder:"Ex: 100"}]};function V(){return a.jsx(o,{data:T,place:P,inputs:E})}const w={name:"Karma",modelName:"Predicting Karma Score",description:"A machine learning model predicts a driver's Karma Score using factors like earnings, NPTS TAT days, credit score, and service satisfaction, providing a comprehensive view of reliability and performance. This information enables the company to allocate resources effectively, offer personalized support, and enhance service quality. The model is a valuable tool for maintaining high standards and fostering trust with drivers and customers."},M=2,j={heading:"Predicting Karma Score",data:[{label:"net promoter score(NPS)",type:"option",values:["1","2","3","4","5"],message:"Provide the NPS score.",formValueType:"select",placeholder:"Ex: 1-5"},{label:"service time to resolve",type:"option",values:["1","2","3","4","5"],message:"Provide the Service days to resolve.",formValueType:"select",placeholder:"Ex: 2"}]};function S(){return a.jsx(o,{data:w,place:M,inputs:j})}const $={name:"DefaultEMI",modelName:"Predictive Analytics Model for EMI Defaults and Battery Discontinuation",description:"A machine learning model predicts whether drivers will default on EMI payments or discontinue using provided batteries by analyzing various factors to identify high-risk individuals. This allows for proactive measures to mitigate potential losses, safeguarding financial stability and enhancing customer service by addressing issues early. The predictive tool is a powerful asset for ensuring sustainable growth and building investor confidence."},q=3,D={heading:"Predictive Analytics Model for EMI Defaults and Battery Discontinuation",data:[{label:"tenure",type:"number",message:"Provide the tenure in months.",formValueType:"input",placeholder:"Ex: 24"},{label:"down payment",type:"number",message:"Provide the amount of down payment.",formValueType:"input",placeholder:"Ex: 5000"},{label:"monthly EMI amount",type:"number",message:"Provide the amount of the monthly EMI.",formValueType:"input",placeholder:"Ex: 200"},{label:"loan amount",type:"number",message:"Provide the total loan amount.",formValueType:"input",placeholder:"Ex: 10000"},{label:"remaining amount",type:"number",message:"Provide the remaining amount to be paid.",formValueType:"input",placeholder:"Ex: 3000"},{label:"average DPD(Days past due)",type:"number",message:"Provide the average number of days past due.",formValueType:"input",placeholder:"Ex: 1"},{label:"risk score",type:"number",message:"Provide the risk score.",formValueType:"input",placeholder:"Ex: 70"},{label:"social footprint score",type:"number",message:"Provide the social footprint score.",formValueType:"input",placeholder:"Ex: 50"},{label:"net promoter score(NPS)",type:"number",message:"Provide the NPS.",formValueType:"input",placeholder:"Ex: 50"}]};function I(){return a.jsx(o,{data:$,place:q,inputs:D})}function N(){return a.jsxs(c,{height:"auto",column:"1fr",padding:"0 3rem",gap:"3rem",children:[a.jsx(V,{}),a.jsx(S,{}),a.jsx(I,{})]})}function A(){return a.jsx(N,{})}export{A as default};
