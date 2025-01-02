import{j as r,p as s,r as S,_ as O,S as W}from"./index-UFlMoqOZ.js";import{M as N}from"./index-CGwYIXXS.js";import{S as B,i as _}from"./index-1cUHPk2d.js";import{F as Y}from"./index-Db3ih9c4.js";import{_ as G}from"./react-apexcharts.min-BogNqB8n.js";import{C as q}from"./Container-Cwd94ONU.js";import{G as Q}from"./GridMaker-BvvTJRff.js";import{g as J,u as U}from"./useLazyQuery-B69fhfCn.js";import{T as X}from"./TryAgain-DtDy1RIh.js";import"./iconBase-CFzihDm8.js";import"./index-BKNjMPK8.js";import"./Overlay-i9fA_ZEF.js";const Z=s.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 0rem;
  border-radius: 1rem;
`,rr=s.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.1px;
`,er=s.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,H=s.div`
  background-color: ${e=>e.bgcolor};
  display: flex;
  gap: 1.6rem;
  padding: 0.8rem 0.4rem 0.8rem 1rem;
  border-radius: 0.8rem;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  }
`,M=s.div`
  background-color: ${e=>e.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  color: var(--color-gray-0);
`,z=s.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-gray-800);
`,K=s.p`
  font-size: 1.1rem;
  color: var(--color-gray-600);
  font-weight: 500;
`;function or({drivers:e,emiOnTime:t}){return r.jsxs(Z,{children:[r.jsx(rr,{children:"Driver’s overview"}),r.jsxs(er,{children:[r.jsxs(H,{bgcolor:"#ffcdcf",children:[r.jsx(M,{bgcolor:"#ff595e",children:r.jsx(Y,{style:{height:"50%",width:"50%"}})}),r.jsxs("div",{children:[r.jsx(z,{children:e}),r.jsx(K,{children:"Drivers"})]})]}),r.jsxs(H,{bgcolor:"#ffeab0",children:[r.jsx(M,{bgcolor:"#ffca3a",children:r.jsx(B,{style:{height:"50%",width:"50%"}})}),r.jsxs("div",{children:[r.jsxs(z,{children:[t,"%"]}),r.jsx(K,{children:"EMI On Time"})]})]}),r.jsxs(H,{bgcolor:"#d0e9a8",children:[r.jsx(M,{bgcolor:"#8ac926",children:r.jsx(N,{style:{height:"50%",width:"50%"}})}),r.jsxs("div",{children:[r.jsx(z,{children:"1.13%"}),r.jsx(K,{children:"Asset loss"})]})]})]})]})}const ir=s.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  padding-left: 1rem;
`,sr=s.div`
  grid-column: 1 / 3;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem 2rem 1rem;
  align-self: center;
  height: 30.8rem;
  /* background: radial-gradient(circle, #1e1c1c, #323534, #6a696f); */
  background: linear-gradient(
    to left,
    var(--color-gray-50),
    var(--color-gray-0)
  );
  /* background: var(--color-gray-0); */
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  }
`,L=["#8B7765","#CD853F","#F4A460"];function tr({runKmData:e}){const t={chart:{type:"bar",toolbar:{show:!1}},animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}},xaxis:{categories:["0-20","21-40","41-60","61-80",">80km"],labels:{show:!0,hideOverlappingLabels:!0,showDuplicates:!1,trim:!0,style:{colors:"var(--color-gray-500)",fontSize:"10px",fontFamily:"Poppins, sans-serif",fontWeight:500}},axisBorder:{show:!0,color:"var(--color-gray-100)",height:1,width:"100%",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"var(--color-gray-100)",height:5,offsetX:0,offsetY:0},tooltip:{enabled:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"70%",endingShape:"rounded"}},stroke:{show:!0,width:.5,colors:["transparent"]},yaxis:{show:!0,labels:{show:!0,style:{colors:"var(--color-gray-500)",fontSize:"11px",fontFamily:"Poppins, sans-serif",fontWeight:500,cssClass:"apexcharts-yaxis-label"}},axisBorder:{show:!0,color:"var(--color-gray-100)"},axisTicks:{show:!0,borderType:"solid",color:"var(--color-gray-100)",width:4},title:{text:"Values",style:{color:"var(--color-gray-600)",fontSize:"14px",fontFamily:"Poppins, sans-serif",fontWeight:600}}},fill:{type:"gradient",colors:L},legend:{show:!0,fontSize:"12px",fontFamily:"Poppins, Arial",fontWeight:500,itemMargin:{horizontal:8,vertical:4},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0},markers:{show:!0,fillColors:L}},dataLabels:{enabled:!1},tooltip:{enabled:!0,shared:!0,intersect:!1,style:{fontSize:"11px",fontFamily:"Poppins, sans-serif",backgroundColor:"var(--color-gray-25)"},marker:{show:!0,fillColors:L},y:{formatter:o=>`${o}%`}},grid:{borderColor:"var(--color-gray-50)"}},a=e?JSON.parse(JSON.stringify(e)):[];return r.jsxs(sr,{children:[r.jsx(ir,{children:"Monthly Driving Trends(KM/DAY)"}),a.length>0?r.jsx(G,{options:t,series:a,type:"bar",height:"100%"}):r.jsx("p",{children:"No data available"})," "]})}const nr=s.div`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--color-gray-700);
  padding: 2rem 0rem 0rem 1rem;
`;function ar({heading:e,series:t,lastSixMonthDrivers:a}){const o={chart:{type:"area",height:350,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#1E90FF","#32CD32"],xaxis:{categories:[a[0].month,a[1].month,a[2].month,a[3].month,a[4].month,a[5].month],labels:{style:{colors:"var(--color-gray-400)",fontSize:"11px",fontWeight:500,fontFamily:"Poppins, sans-serif"}},tooltip:{enabled:!1}},yaxis:{labels:{style:{colors:"var(--color-gray-400)",fontSize:"11px",fontWeight:500,fontFamily:"Poppins, sans-serif"}},title:{text:"Drivers",style:{color:"var(--color-gray-700)",fontSize:"14px",fontFamily:"Poppins, sans-serif",fontWeight:600}}},legend:{show:!0,fontSize:"12px",fontFamily:"Poppins, Arial",fontWeight:500,itemMargin:{horizontal:8,vertical:4},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0},markers:{show:!0}},tooltip:{x:{format:"dd/MM/yy HH:mm"},enabled:!0,shared:!0,intersect:!1,style:{fontSize:"11px",fontFamily:"Poppins, sans-serif",backgroundColor:"var(--color-gray-25)"},marker:{show:!0}},grid:{borderColor:"var(--color-gray-25)"}};return r.jsxs(q,{children:[r.jsx(nr,{children:e}),r.jsx(G,{options:o,series:t,type:"area",height:"90%"})]})}const lr=s.div`
  grid-column: 5 / -1;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 0rem 2rem 3rem 1rem;
  height: 30rem;
  align-self: center;
  transition: transform 0.6s ease;
  background: linear-gradient(
    to left,
    var(--color-gray-0),
    var(--color-gray-50)
  );
  &:hover {
    transform: scale(1.04);
  }
`;function cr({lastSixMonthDrivers:e=[],churnedDriversData:t=[]}){var o,i,l,g,x,p,y,j,b,v,c,d;const a=[{name:"New Drivers",data:[(o=e[0])==null?void 0:o.count,(i=e[1])==null?void 0:i.count,(l=e[2])==null?void 0:l.count,(g=e[3])==null?void 0:g.count,(x=e[4])==null?void 0:x.count,(p=e[5])==null?void 0:p.count]},{name:"Churned",data:[(y=t[0])==null?void 0:y.count,(j=t[1])==null?void 0:j.count,(b=t[2])==null?void 0:b.count,(v=t[3])==null?void 0:v.count,(c=t[4])==null?void 0:c.count,(d=t[5])==null?void 0:d.count]}];return r.jsx(lr,{children:e[0]&&r.jsx(ar,{heading:"Retention Rate",series:a,lastSixMonthDrivers:e})})}function dr({emiTrends:e}){const t=S.useRef(null);return console.log(e),S.useEffect(()=>{if(t.current){const a=_(t.current),o=[{symbol:"circle",symbolSize:2},{symbol:"circle",symbolSize:1},{symbol:"circle",symbolSize:5},{symbol:"circle",symbolSize:2},{symbol:"circle",symbolSize:1}],i={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:12,color:"#ff0000"},tooltip:{trigger:"item",formatter:"{b}: ({d}%)",textStyle:{fontFamily:"Poppins, sans-serif"}},series:[{name:"EMI Payment Behavior",type:"pie",radius:[40,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:6},label:{show:!0,fontWeight:500,fontFamily:"Poppins",formatter:l=>`${l.name}`},data:e.map((l,g)=>({...l,itemStyle:{decal:o[g%o.length]}}))}]};return a.setOption(i),()=>{a.dispose()}}},[e]),r.jsx("div",{ref:t,style:{width:"100%",height:"83%"}})}const gr=s.div`
  grid-column: 3 / 5;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 1.5rem 1rem;
  transition: transform 0.6s ease;
  background: linear-gradient(
    to left,
    var(--color-gray-50),
    var(--color-gray-50)
  );

  &:hover {
    transform: scale(1.04);
  }
`,mr=s.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding-left: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;function hr({emiTrends:e}){return r.jsxs(gr,{children:[r.jsx(mr,{children:"EMI TRENDS"}),e&&r.jsx(dr,{emiTrends:e})]})}const fr=s.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 3rem; */
  /* background-color: #8b9eaf; */
`,ur=s.div`
  display: flex;
  justify-content: space-around;
`,I=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=s.div`
  font-size: 1.2rem;
  font-weight: 600;
  /* color: var(--color-gray-700); */
  /* color: var(--color-gray-50); */
  color: ${e=>e.color};
`,D=s.div`
  font-size: 1rem;
  font-weight: 500;
  /* color: var(--color-gray-500); */
  color: var(--color-gray-100);
`,$=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12rem;
`,m=s.div`
  display: flex;
  justify-content: space-around;
  background-color: ${e=>e.background};
  border-radius: 0.6rem;
  padding: 0.2rem;
  min-height: 2.5rem;
`,n=s.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-gray-700);
`;function xr({data:e}){return r.jsxs(fr,{children:[r.jsxs(ur,{children:[r.jsxs(I,{children:[r.jsx(T,{color:"#5ef522",children:"High"}),r.jsx(D,{children:"Credit(>650)"})]}),r.jsxs(I,{children:[r.jsx(T,{color:"#f9f519",children:"Medium"}),r.jsx(D,{children:"Credit(400-650)"})]}),r.jsxs(I,{children:[r.jsx(T,{color:"#fc3c3c",children:"Low"}),r.jsx(D,{children:"Credit(<400)"})]})]}),e.type==="creditRisk"&&r.jsxs($,{children:[r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighRiskLow}),r.jsx(n,{children:e.CreditMediumRiskLow}),r.jsx(n,{children:e.CreditLowRiskLow})]}),r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighRiskMedium}),r.jsx(n,{children:e.CreditMediumRiskMedium}),r.jsx(n,{children:e.CreditLowRiskMedium})]}),r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighRiskHigh}),r.jsx(n,{children:e.CreditMediumRiskHigh}),r.jsx(n,{children:e.CreditLowRiskHigh})]})]}),e.type==="creditKarma"&&r.jsxs($,{children:[r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighKarmaHigh}),r.jsx(n,{children:e.CreditMediumKarmaHigh}),r.jsx(n,{children:e.CreditLowKarmaHigh})]}),r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighKarmaMedium}),r.jsx(n,{children:e.CreditMediumKarmaMedium}),r.jsx(n,{children:e.CreditLowKarmaMedium})]}),r.jsxs(m,{background:"var(--color-gray-50)",children:[r.jsx(n,{children:e.CreditHighKarmaLow}),r.jsx(n,{children:e.CreditMediumKarmaLow}),r.jsx(n,{children:e.CreditLowKarmaLow})]})]})]})}const pr=s.div`
  width: 100%;
  height: 100%;
  background: ${e=>e.type==="creditRisk"?"linear-gradient(18deg,var(--color-brand-blue-300),var(--color-brand-original-blue-400))":"linear-gradient(to left,var(--color-brand-original-green-400),var(--color-brand-green-700))"};
  /* background: linear-gradient(
    18deg,
    var(--color-brand-blue-300),
    var(--color-brand-original-blue-400)
  ); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 6rem 2rem 2rem;
  border-radius: 1rem;
  transition: transform 0.6s ease;
  color: var(--color-gray-25);

  &:hover {
    transform: scale(1.04);
  }
`,yr=s.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: 1.2fr 2fr 6fr;
  height: 100%;
`,jr=s.div`
  grid-column: 1 / -1;
  font-size: 1.4rem;
  font-weight: 700;
  /* color: var(--color-gray-700); */
  color: var(--color-gray-25);
  text-transform: uppercase;
  letter-spacing: 0.9px;
`,E=s.div`
  grid-column: 1;
  grid-row: 3 / -1;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  justify-content: space-around;
`,h=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.background};
`,f=s.div`
  font-size: 1.2rem;
  font-weight: 600;
  /* color: var(--color-gray-700); */
  /* color: var(--color-gray-25); */
  color: ${e=>e.color};
`,u=s.div`
  font-size: 1rem;
  font-weight: 500;
  /* color: var(--color-gray-500); */
  color: var(--color-gray-100);
`;function V({data:e}){return r.jsx(pr,{type:e.type,children:r.jsxs(yr,{children:[r.jsx(jr,{children:e.heading}),e.type==="creditRisk"?r.jsxs(E,{children:[r.jsxs(h,{children:[r.jsx(f,{color:"#5ef522",children:"Low"}),r.jsx(u,{children:"Risk(<450)"})]}),r.jsxs(h,{children:[r.jsx(f,{color:"#f9f519",children:"Medium"}),r.jsx(u,{children:"Risk(450-650)"})]}),r.jsxs(h,{children:[r.jsx(f,{color:"#fc3c3c",children:"High"}),r.jsx(u,{children:"Risk(>650)"})]})]}):r.jsxs(E,{children:[r.jsxs(h,{children:[r.jsx(f,{color:"#5ef522",children:"High"}),r.jsx(u,{children:"Karma(>700)"})]}),r.jsxs(h,{children:[r.jsx(f,{color:"#f9f519",children:"Medium"}),r.jsx(u,{children:"Karma(500-700)"})]}),r.jsxs(h,{children:[r.jsx(f,{color:"#fc3c3c",children:"Low"}),r.jsx(u,{children:"Karma(<500)"})]})]}),r.jsx(xr,{data:e})]})})}const br=s.div`
  grid-column: 2 / 5;
`,vr={heading:"Credit vs risk",type:"creditRisk"};function wr({creditVsRisk:e}){return r.jsx(br,{children:r.jsx(V,{data:{...e,...vr}})})}const Cr=s.div`
  grid-column: 5 / -1;
`,kr={heading:"Credit VS Karma",type:"creditKarma"};function Rr({creditVsKarma:e}){return r.jsx(Cr,{children:r.jsx(V,{data:{...kr,...e}})})}const Sr=J`
  query {
    dashboard {
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
        totalDrivers
        runKmData {
          name
          data
        }
        riskCreditkarmaData {
          creditVsRisk {
            CreditHighRiskHigh
            CreditHighRiskMedium
            CreditHighRiskLow
            CreditMediumRiskHigh
            CreditMediumRiskMedium
            CreditMediumRiskLow
            CreditLowRiskHigh
            CreditLowRiskMedium
            CreditLowRiskLow
          }
          creditVsKarma {
            CreditHighKarmaHigh
            CreditHighKarmaMedium
            CreditHighKarmaLow
            CreditMediumKarmaHigh
            CreditMediumKarmaMedium
            CreditMediumKarmaLow
            CreditLowKarmaHigh
            CreditLowKarmaMedium
            CreditLowKarmaLow
          }
        }
        lastSixMonthDrivers {
          month
          count
        }
        emiTrendsData {
          emiOnTime
          emiTrends {
            value
            name
          }
        }
        churnedDriversData {
          month
          count
        }
      }
    }
  }
`,Hr={getDashboardData:Sr},Mr=e=>{const t=Hr[e],[a,{loading:o,error:i,data:l}]=U(t);return{fetchDashboardData:a,loading:o,error:i,data:l}};function zr(){var l,g,x,p,y,j,b,v;const{fetchDashboardData:e,loading:t,error:a,data:o}=Mr("getDashboardData");S.useEffect(function(){e()},[]),S.useEffect(function(){var c,d,w,C,k,R;(d=(c=o==null?void 0:o.dashboard)==null?void 0:c.error)!=null&&d.message&&O.error(`${(C=(w=o==null?void 0:o.dashboard)==null?void 0:w.error)==null?void 0:C.status}: ${(R=(k=o==null?void 0:o.dashboard)==null?void 0:k.error)==null?void 0:R.message}`)},[(g=(l=o==null?void 0:o.dashboard)==null?void 0:l.error)==null?void 0:g.message]),S.useEffect(function(){var c,d,w,C,k,R,F,A,P;((d=(c=o==null?void 0:o.dashboard)==null?void 0:c.settingGoogleSheetDataInfo)==null?void 0:d.dataSet)===!1&&toastWarning((k=(C=(w=o==null?void 0:o.dashboard)==null?void 0:w.settingGoogleSheetDataInfo)==null?void 0:C.error)==null?void 0:k.message),(F=(R=o==null?void 0:o.dashboard)==null?void 0:R.gettingGoogleSheetDataInfo)!=null&&F.status&&toastWarning((P=(A=o==null?void 0:o.dashboard)==null?void 0:A.gettingGoogleSheetDataInfo)==null?void 0:P.message)},[(p=(x=o==null?void 0:o.dashboard)==null?void 0:x.settingGoogleSheetDataInfo)==null?void 0:p.dataSet,(j=(y=o==null?void 0:o.dashboard)==null?void 0:y.gettingGoogleSheetDataInfo)==null?void 0:j.status]),console.log(o);const i=(b=o==null?void 0:o.dashboard)==null?void 0:b.data;return r.jsx(r.Fragment,{children:o?r.jsx(Q,{column:"1fr 0.7fr 0.7fr 0.9fr 0.6fr 0.6fr 1fr",row:"0.92fr 1fr",gap:"2rem",children:(v=o==null?void 0:o.dashboard)!=null&&v.error?r.jsx(X,{}):r.jsxs(r.Fragment,{children:[r.jsx(or,{drivers:i==null?void 0:i.totalDrivers,emiOnTime:i==null?void 0:i.emiTrendsData.emiOnTime}),r.jsx(wr,{creditVsRisk:i==null?void 0:i.riskCreditkarmaData.creditVsRisk}),r.jsx(Rr,{creditVsKarma:i==null?void 0:i.riskCreditkarmaData.creditVsKarma}),r.jsx(tr,{runKmData:i==null?void 0:i.runKmData}),r.jsx(hr,{emiTrends:i==null?void 0:i.emiTrendsData.emiTrends}),r.jsx(cr,{churnedDriversData:i==null?void 0:i.churnedDriversData,lastSixMonthDrivers:i==null?void 0:i.lastSixMonthDrivers})]})}):r.jsx(W,{})})}const Kr=s.div`
  /* padding: 2rem; */
`;function Wr(){return r.jsx(Kr,{children:r.jsx(zr,{})})}export{Wr as default};
