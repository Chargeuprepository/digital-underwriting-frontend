import{j as e,p as r}from"./index-UFlMoqOZ.js";const o=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(137, 137, 137, 0.578); /* Light overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensures the overlay appears above other content */
`,i=r.div`
  border: 8px solid #f3f3f3; /* Light gray */
  border-top: 8px solid #3498db; /* Blue color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function a({loading:t}){return e.jsx(e.Fragment,{children:t&&e.jsx(o,{children:e.jsx(i,{})})})}export{a as L};
