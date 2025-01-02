import{r as g,ar as G,aq as W,j as r,p as a,u as O,as as T,_ as A,at as E,S as M}from"./index-UFlMoqOZ.js";import{a as Z}from"./index-DxRO_h9g.js";import{F as H}from"./Filter-m_s0x82a.js";import{_ as k}from"./react-apexcharts.min-BogNqB8n.js";import{C}from"./Container-Cwd94ONU.js";import{G as _}from"./GridMaker-BvvTJRff.js";import{g as q,u as V}from"./useLazyQuery-B69fhfCn.js";import{T as Y}from"./TryAgain-DtDy1RIh.js";import"./iconBase-CFzihDm8.js";import"./index-BKNjMPK8.js";import"./index-CGwYIXXS.js";import"./Overlay-i9fA_ZEF.js";function Q(e,n=!0){const o=g.useRef();return g.useEffect(function(){function t(i){o.current&&!o.current.contains(i.target)&&e(!1)}return document.addEventListener("click",t,n),()=>document.removeEventListener("click",t,n)},[e,n]),{refStyledModal:o}}const X=a.div`
  position: relative;
`,J=a.div`
  cursor: pointer;
  width: 20rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  /* background: linear-gradient(
    45deg,
    var(--color-brand-blue-0),
    var(--color-brand-blue-0)
  ); */
  border: 1px solid var(--color-gray-100);
  transition: all 0.3s;
  &:hover {
    border: 1px solid var(--color-gray-50);
  }
  &:active {
    transform: scale(0.97);
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: #ffffff;
    background-color: var(--color-brand-green-500);
    border-radius: 50%;
  }
`,K=a.div`
  background-color: var(--color-gray-100);
  width: 20rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.6rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  padding: 1.4rem 1.2rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  top: 5.2rem;

  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: opacity 0.3s ease, transform 0.1s ease;
  /* overflow: hidden; */

  &.open {
    opacity: 1;
    transform: scaleY(1);
  }
`,N=a.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,U=a.li`
  display: flex;
  gap: 1rem;
`,F=a.div`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-gray-700);
`,ee=a.input`
  width: 1.5rem;
`,se=a.button`
  border: none;
  padding: 0.6rem 0;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 0.6rem;
  color: var(--color-gray-50);
  background: linear-gradient(
    45deg,
    var(--color-brand-blue-300),
    var(--color-brand-blue-500)
  );
  &:hover {
    border: 1px solid yellow;
  }
`;function re({zone:e}){const n=G(),[o,t]=W(),[i,s]=g.useState(!1),[c,f]=g.useState([]),{refStyledModal:b}=Q(s);console.log(c);function x(){s(l=>!l)}function w(l){f(c.includes(l)?c.filter(d=>d!==l):[...c,l])}function h(){if(!c[0]){s(l=>!l);return}o.set("zone",c),t(o),s(l=>!l)}return g.useEffect(()=>{const l=o.get("zone");f(l?l.split(","):[]);const d=()=>{document.visibilityState==="hidden"&&s(!1)};return document.addEventListener("visibilitychange",d),()=>{document.removeEventListener("visibilitychange",d)}},[n.search]),r.jsxs(X,{ref:b,children:[r.jsxs(J,{onClick:x,children:[r.jsx(Z,{}),r.jsx("p",{children:"Zone"})]}),i?r.jsxs(K,{className:"open",children:[r.jsx(N,{children:e.map((l,d)=>r.jsxs(U,{children:[r.jsx(ee,{type:"checkbox",checked:c==null?void 0:c.includes(l),onChange:()=>w(l)}),r.jsx(F,{children:l})]},d))}),r.jsx(se,{disabled:!c[0],onClick:h,children:"Filter"})]}):""]})}function ne(){return r.jsx(H,{paramName:"risk",options:[{value:"low",label:"Low",backColor:"#15ff0087"},{value:"medium",label:"Med",backColor:"#ffee0083"},{value:"high",label:"High",backColor:"#ff000084"}]})}function oe(){return r.jsx(H,{paramName:"credit",options:[{value:"high",label:"High",backColor:"#15ff0087"},{value:"medium",label:"Med",backColor:"#ffee0083"},{value:"low",label:"Low",backColor:"#ff000084"},{value:"NTC",label:"NTC",backColor:"#7c7c7cc5"}]})}const te=a.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.4rem;
  margin: 0rem 1.4rem;
  padding: 2rem;
`,ae=T`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
`,ie=a.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: none;
  padding: 1.2rem 2.6rem;
  min-width: 14rem;
  background: linear-gradient(
    45deg,
    var(--color-brand-original-green-400),
    var(--color-brand-green-600)
  );

  transition: transform 0.3s ease-in-out;

  &:active {
    animation: ${e=>!e.activebutton&&ae} 0.3s forwards;
  }
`,le=a.div`
  display: flex;
  gap: 2rem;
`,ce=a.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-50);
  color: ${e=>e.color};
  font-size: ${e=>e.fontSize};
  font-weight: ${e=>e.fontWeight};
`,de=a.div`
  font-size: 1.2rem;
  color: var(--color-gray-50);
  color: ${e=>e.color};
  font-size: ${e=>e.fontSize};
  font-weight: ${e=>e.fontWeight};
`;function ue({length:e,zone:n}){const o=O(),t=()=>{const i=window.location.pathname;o(i,{replace:!0})};return r.jsxs(te,{children:[r.jsxs(ie,{onClick:t,children:[r.jsx(ce,{style:{fontSize:"1.5rem",fontWeight:"500"},children:"Drivers:"}),r.jsx(de,{style:{fontSize:"1.4rem"},children:e})]}),r.jsxs(le,{children:[r.jsx(ne,{}),r.jsx(oe,{}),r.jsx(re,{zone:n})]})]})}const he=a.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2rem;
`,me=a.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: var(--color-gray-700);
  font-weight: 600;
`,ge=a.div`
  /* margin-top: 2rem;
  margin-bottom: -1.5rem; */
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
`;function fe({total:e=900,score:n=602,heading:o="Radial Bar Chart",color:t}){const i={chart:{height:350,type:"radialBar",toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"65%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.2}},track:{background:"var(--color-gray-50)",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{show:!1,value:{show:!1}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[t],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},s=[n*100/900];return r.jsxs(he,{children:[r.jsx(ge,{children:o}),r.jsx(C,{children:r.jsx(k,{options:i,series:s,type:"radialBar",height:265})}),r.jsxs(me,{children:[n,"/",e]})]})}const u=a.div`
  height: 98%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  padding: ${e=>e.padding};
  width: ${e=>e.width};
  background: radial-gradient(
    circle,
    var(--color-gray-25),
    var(--color-gray-0)
  );
`;function be({avgCredit:e}){return r.jsx(u,{padding:"1.5rem 0 0 0",width:"30rem",children:r.jsx(fe,{total:900,score:e,heading:"Avg. Credit Score",color:"#c1c1fc"})})}const xe=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`,we=a.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
`,ye=["Category A","Category B","Category C"],ve=["#FF4560","#00E396","#ba38d7"],pe=[44,55,304];function P({labels:e=ye,colors:n=ve,series:o=pe,heading:t="Pie Chart"}){const i={chart:{type:"pie",fontFamily:"Poppins, sans-serif"},labels:e,dataLabels:{enabled:!0,formatter:s=>`${s.toFixed()}%`,style:{fontFamily:"Poppins, sans-serif",fontSize:"12px",colors:["var(--color-gray-10)"],fontWeight:500}},stroke:{show:!0,width:.8,colors:"#fff"},responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],legend:{offsetX:45,fontFamily:"Poppins, sans-serif",fontSize:"14px",fontWeight:500,labels:{colors:"var(--color-gray-500)"},itemMargin:{vertical:5}},tooltip:{theme:"dark",fontFamily:"Poppins, sans-serif"},plotOptions:{pie:{donut:{labels:{show:!1}}}},colors:n};return r.jsxs(xe,{children:[r.jsx(we,{children:t}),r.jsx(C,{children:r.jsx(k,{options:i,series:o,type:"pie",width:"120%",height:"120%"})})]})}function je({resultRange:e}){return r.jsx(u,{padding:"1.5rem 4rem 0 0",width:"40rem",children:r.jsx(P,{labels:[">650","400-650","<400"],colors:["#2858ea","#35b9ee","#7090ef"],series:[+(e==null?void 0:e.highCreditPercentage),+(e==null?void 0:e.mediumCreditPercentage),+(e==null?void 0:e.lowCreditPercentage)],heading:"Credit Score Range"})})}const Ie=a.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`,B=Ie,I={heading:"Bar Chart",direction:"vertical",height:"100%",width:"80%",total:1e3,data:[{label:"Jan",value:40},{label:"Feb",value:60},{label:"Mar",value:80},{label:"Apr",value:90}]},Se=a.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;function S({data:e=I.data,direction:n=I.direction,format:o,heading:t=I.heading,height:i=I.height,width:s=I.width,total:c,colors:f,labelSize:b}){const x={chart:{type:"bar",toolbar:{show:!1}},legend:{show:!1},fill:{type:"gradient",colors:f},plotOptions:{bar:{horizontal:n==="horizontal",barHeight:"60%",columnWidth:"85%",distributed:!0}},dataLabels:{enabled:!0,formatter:function(h){return o==="%"?`${(h*100/c).toFixed(0)}%`:h},style:{fontSize:"12px",fontFamily:"Poppins, sans-serif",colors:["var(--color-gray-10)"]}},tooltip:{enabled:!0,theme:"dark",style:{fontFamily:"Poppins, sans-serif",fontSize:"14px",color:"var(--color-gray-900)"},title:{fontSize:"16px",fontFamily:"Arial",fontWeight:"bold",color:"#ffcc00"}},xaxis:{categories:e.map(h=>h.label),labels:{style:{fontSize:b,fontFamily:"Poppins, sans-serif",colors:"var(--color-gray-600)",fontWeight:500},offsetY:-2,show:n!=="horizontal"},axisBorder:{show:!1},axisTicks:{show:!1},show:n!=="horizontal"},yaxis:{labels:{style:{fontSize:"14px",fontFamily:"Poppins, sans-serif",colors:"var(--color-gray-600)",fontWeight:500},offsetX:4,show:n!=="vertical"},axisBorder:{show:!1},axisTicks:{show:!1},show:n!=="vertical"},grid:{borderColor:"#f1f1f1",strokeDashArray:0,row:{colors:void 0,distributed:!0,opacity:.5},column:{colors:void 0,opacity:.5},xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}}},w=[{name:"Values",data:e.map(h=>h.value)}];return r.jsxs(Se,{children:[r.jsx(B,{children:t}),r.jsx(C,{children:r.jsx(k,{options:x,series:w,type:"bar",height:i,width:s})})]})}function ke({vehicleFinanced:e,length:n}){return r.jsx(u,{padding:"1.5rem 0 0 2rem",width:"45rem",children:r.jsx(S,{heading:"Vehicle Finance",direction:"horizontal",height:"90%",width:"90%",colors:["#1E90FF","#87CEFA"],data:[{label:"Yes",value:+(e==null?void 0:e.yes)},{label:"No",value:+(e==null?void 0:e.no)}]})})}const Ce=a.div`
  grid-row: ${e=>e.row};
  border-radius: 1rem;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); */
  padding: 1rem;
  transition: transform 0.6s ease;
  background-color: ${e=>e.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  &:hover {
    /* transform: scale(1.04); */
  }
`,z=Ce;function ze({avgCredit:e,resultRange:n,vehicleFinanced:o,length:t}){return r.jsxs(z,{row:"2",backgroundcolor:"var(--color-gray-10)",children:[r.jsx(be,{avgCredit:e}),r.jsx(je,{resultRange:n}),r.jsx(ke,{vehicleFinanced:o,length:t})]})}function Pe({identityConfidence:e}){return r.jsx(u,{padding:"2rem 3rem 2rem 0.2rem",width:"30rem",children:r.jsx(S,{heading:"Identity Confidence Score",direction:"horizontal",format:"",height:"100%",width:"100%",labelSize:"12px",colors:["#962fbf","#d62976","#f592be"],data:[{label:"High",value:+(e==null?void 0:e.high)},{label:"Medium",value:+(e==null?void 0:e.medium)},{label:"Low",value:+(e==null?void 0:e.low)}]})})}function Be({phoneNameMatchScore:e}){return r.jsx(u,{padding:"1.5rem 4rem 0 0",width:"40rem",children:r.jsx(P,{labels:[">70","40-70","<40"],colors:["#ba70ff","#9370DB","#D8BFD8"],series:[+(e==null?void 0:e.high),+(e==null?void 0:e.medium),+(e==null?void 0:e.low)],heading:"Phone Name Match Score"})})}function De({driversUsingUpi:e}){return r.jsx(u,{padding:"2rem 3rem 2rem 1rem",width:"45rem",children:r.jsx(S,{heading:"Drivers Using UPI",direction:"horizontal",format:"",height:"100%",width:"100%",labelSize:"12px",colors:["#800080","#9370DB"],data:[{label:"Yes",value:+(e==null?void 0:e.yes)},{label:"No",value:+(e==null?void 0:e.no)}]})})}function Le({identityConfidence:e,phoneNameMatchScore:n,driversUsingUpi:o}){return r.jsxs(z,{row:"3",backgroundcolor:"var(--color-gray-10)",children:[r.jsx(Pe,{identityConfidence:e}),r.jsx(Be,{phoneNameMatchScore:n}),r.jsx(De,{driversUsingUpi:o})]})}const $e=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  height: 15rem;
`,Ee=a.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  /* height: 6rem;
  width: 10rem; */
  border-radius: 0.6rem;
  background-color: var(--color-brand-blue-50);
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
  }
`,Ge=a.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-700);
`,He=a.img`
  height: 3.8rem;
  width: 3.8rem;
`;function Re({socialMediaPlatform:e}){const n=e&&Object.entries(e).map(([t,i])=>({label:t,value:Number(i)})),o=e&&n.sort((t,i)=>i.value-t.value);return r.jsxs(u,{padding:"2rem 4.4rem 0.8rem 4.4rem",width:"45rem",children:[r.jsx(B,{children:"Social Media Platform"}),r.jsx($e,{children:o==null?void 0:o.map(t=>r.jsxs(Ee,{children:[r.jsx(He,{src:`/img/socialMediaIcons/${t==null?void 0:t.label}.svg`}),r.jsxs(Ge,{children:[t==null?void 0:t.value,"%"]})]},t.label))})]})}function We({digitalFootprint:e}){return r.jsx(u,{padding:"2rem",width:"30rem",children:r.jsx(S,{heading:"Digital FootPrint",direction:"vertical",height:"100%",width:"85%",total:+(e==null?void 0:e.high)+ +(e==null?void 0:e.medium)+ +(e==null?void 0:e.low),labelSize:"12px",data:[{label:"High",value:+(e==null?void 0:e.high)},{label:"Medium",value:+(e==null?void 0:e.medium)},{label:"Low",value:+(e==null?void 0:e.low)}]})})}const Oe=a.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  } */
`,Te=["#D32F2F","#6A1B9A","#FBC02D","#1976D2","#388E3C"],Ae=["0-20km","21-40km","41-60km","61-80km",">80km"],Me=[10,13,24,25,28];function R({series:e=Me,colors:n=Te,labels:o=Ae,total:t,heading:i}){const s={chart:{type:"donut",animations:{enabled:!0,easing:"easeinout",speed:1200}},plotOptions:{pie:{donut:{size:"75%"}}},dataLabels:{enabled:!1},responsive:[{options:{chart:{},legend:{position:"center"}}}],tooltip:{enabled:!0,theme:"dark",style:{fontSize:"1.4rem",fontFamily:"Poppins, sans-serif"},onDatasetHover:{highlightDataSeries:!0},y:{formatter:function(c){return c}}},stroke:{show:!0},fill:{type:"gradient"},legend:{horizontalAlign:"center",fontSize:"13px",fontFamily:"Poppins, sans-serif",fontWeight:500,labels:{colors:"var(--color-gray-600)",useSeriesColors:!1},itemMargin:{horizontal:10,vertical:4},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0},offsetX:10},colors:n,labels:o};return r.jsxs(Oe,{children:[r.jsx(B,{children:i}),r.jsx(C,{children:r.jsx(k,{options:s,series:e,type:"donut",width:"100%",height:"100%"})})]})}function Ze({socialFootprint:e}){return r.jsx(u,{padding:"2rem 0.4rem 2rem 3.6rem ",width:"40rem",children:r.jsx(R,{colors:["#8d99ae","#310a31","#ef233c"],labels:[">550","300-550","<300"],series:[+(e==null?void 0:e.high),+(e==null?void 0:e.medium),+(e==null?void 0:e.low)],total:+(e==null?void 0:e.high)+ +(e==null?void 0:e.medium)+ +(e==null?void 0:e.low),heading:"Social Footprint"})})}function _e({digitalFootprint:e,socialFootprint:n,socialMediaPlatform:o}){return r.jsxs(z,{row:"4",backgroundcolor:"var(--color-gray-10)",children:[r.jsx(We,{digitalFootprint:e}),r.jsx(Ze,{socialFootprint:n}),r.jsx(Re,{socialMediaPlatform:o})]})}function qe({phoneFootprint:e}){return r.jsx(u,{padding:"2rem",width:"30rem",children:r.jsx(S,{heading:"Phone FootPrint",direction:"vertical",height:"100%",width:"85%",total:+(e==null?void 0:e.high)+ +(e==null?void 0:e.medium)+ +(e==null?void 0:e.low),labelSize:"12px",colors:["#c19749","#cd751d","#c84313"],data:[{label:"Low",value:+(e==null?void 0:e.low)},{label:"Medium",value:+(e==null?void 0:e.medium)},{label:"High",value:+(e==null?void 0:e.high)}]})})}function Ve({digitalAge:e}){return r.jsx(u,{padding:"2rem 0.4rem 2rem 3.6rem ",width:"40rem",children:r.jsx(R,{colors:["#FFA500","#FF7F50","#FF4500"],labels:[">550","300-550","<300"],series:[+(e==null?void 0:e.high),+(e==null?void 0:e.medium),+(e==null?void 0:e.low)],heading:"Digital Age(Days)"})})}function Ye({phoneNetwork:e}){return r.jsx(u,{padding:"2rem 6rem 1rem 0",width:"45rem",children:r.jsx(P,{labels:["Prepaid","Postpaid"],colors:["#ff6b35","#FF4500"],series:[+(e==null?void 0:e.prepaid),+(e==null?void 0:e.postpaid)],heading:"Phone Network"})})}function Qe({phoneFootprint:e,digitalAge:n,phoneNetwork:o}){return r.jsxs(z,{row:"5",backgroundcolor:"var(--color-gray-10)",children:[r.jsx(qe,{phoneFootprint:e}),r.jsx(Ve,{digitalAge:n}),r.jsx(Ye,{phoneNetwork:o})]})}const Xe=q`
  query GetBusinessInsights($input: BusinessInsightsInput) {
    businessInsights(input: $input) {
      error {
        status
        message
      }
      settingGoogleSheetDataInfo {
        dataSet
        error {
          status
          message
        }
      }
      gettingGoogleSheetDataInfo {
        status
        message
      }
      data {
        length
        avgCredit
        resultRange {
          lowCreditPercentage
          mediumCreditPercentage
          highCreditPercentage
        }
        vehicleFinanced {
          yes
          no
        }
        identityConfidence {
          high
          medium
          low
        }
        phoneNameMatchScore {
          high
          medium
          low
        }
        driversUsingUpi {
          yes
          no
        }
        digitalFootprint {
          high
          medium
          low
        }
        socialFootprint {
          high
          medium
          low
        }
        socialMediaPlatform {
          amazon
          whatsapp
          waBusiness
          instagram
          flipkart
          paytm
        }
        phoneFootprint {
          high
          medium
          low
        }
        digitalAge {
          high
          medium
          low
        }
        phoneNetwork {
          prepaid
          postpaid
        }
        uniqueCities
      }
    }
  }
`,Je={getBusinessInsightsData:Xe},Ke=e=>{const n=Je[e],[o,{loading:t,error:i,data:s}]=V(n);return{fetchBusinessInsightsData:o,loading:t,error:i,data:s}};function Ne(){var c,f,b,x,w,h,l;const e=G(),n=new URLSearchParams(e.search),{fetchBusinessInsightsData:o,loading:t,error:i,data:s}=Ke("getBusinessInsightsData");return g.useEffect(()=>{var m;const d={credit:n.get("credit")||"",risk:n.get("risk")||"",zone:((m=n.get("zone"))==null?void 0:m.split(","))||null};o({variables:{input:d}})},[e.search,o]),g.useEffect(function(){var d,m,y,v,p,j;(m=(d=s==null?void 0:s.businessInsights)==null?void 0:d.error)!=null&&m.message&&A.error(`${(v=(y=s==null?void 0:s.businessInsights)==null?void 0:y.error)==null?void 0:v.status}: ${(j=(p=s==null?void 0:s.businessInsights)==null?void 0:p.error)==null?void 0:j.message}`)},[(f=(c=s==null?void 0:s.businessInsights)==null?void 0:c.error)==null?void 0:f.message]),g.useEffect(function(){var d,m,y,v,p,j,D,L,$;((m=(d=s==null?void 0:s.businessInsights)==null?void 0:d.settingGoogleSheetDataInfo)==null?void 0:m.dataSet)===!1&&E((p=(v=(y=s==null?void 0:s.businessInsights)==null?void 0:y.settingGoogleSheetDataInfo)==null?void 0:v.error)==null?void 0:p.message),(D=(j=s==null?void 0:s.businessInsights)==null?void 0:j.gettingGoogleSheetDataInfo)!=null&&D.status&&E(($=(L=s==null?void 0:s.businessInsights)==null?void 0:L.gettingGoogleSheetDataInfo)==null?void 0:$.message)},[(x=(b=s==null?void 0:s.businessInsights)==null?void 0:b.settingGoogleSheetDataInfo)==null?void 0:x.dataSet,(h=(w=s==null?void 0:s.businessInsights)==null?void 0:w.gettingGoogleSheetDataInfo)==null?void 0:h.status]),console.log(s),r.jsx(r.Fragment,{children:t?r.jsx(M,{}):r.jsx(_,{row:"6rem repeat(4, 1fr)",gap:"1rem",minHeight:"100vh",children:(l=s==null?void 0:s.businessInsights)!=null&&l.error?r.jsx(Y,{}):r.jsxs(r.Fragment,{children:[r.jsx(ue,{length:s==null?void 0:s.businessInsights.data.length,zone:s==null?void 0:s.businessInsights.data.uniqueCities}),r.jsx(ze,{avgCredit:s==null?void 0:s.businessInsights.data.avgCredit,resultRange:s==null?void 0:s.businessInsights.data.resultRange,vehicleFinanced:s==null?void 0:s.businessInsights.data.vehicleFinanced,length:s==null?void 0:s.businessInsights.data.length}),r.jsx(Le,{identityConfidence:s==null?void 0:s.businessInsights.data.identityConfidence,phoneNameMatchScore:s==null?void 0:s.businessInsights.data.phoneNameMatchScore,driversUsingUpi:s==null?void 0:s.businessInsights.data.driversUsingUpi}),r.jsx(_e,{digitalFootprint:s==null?void 0:s.businessInsights.data.digitalFootprint,socialFootprint:s==null?void 0:s.businessInsights.data.socialFootprint,socialMediaPlatform:s==null?void 0:s.businessInsights.data.socialMediaPlatform}),r.jsx(Qe,{phoneFootprint:s==null?void 0:s.businessInsights.data.phoneFootprint,digitalAge:s==null?void 0:s.businessInsights.data.digitalAge,phoneNetwork:s==null?void 0:s.businessInsights.data.phoneNetwork})]})})})}function ds(){return r.jsx(Ne,{})}export{ds as default};
