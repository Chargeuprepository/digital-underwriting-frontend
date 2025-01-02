import{a2 as t,j as r,p as e}from"./index-UFlMoqOZ.js";import{a}from"./index-CGwYIXXS.js";import{O as s}from"./Overlay-i9fA_ZEF.js";const n=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    transition: all 0.1s;
    color: var(--color-gray-300);
    box-shadow: '0 10px 20px rgba(0, 0, 0, 0.3)';
  }

  svg:hover {
    transform: scale(1.03);
    color: var(--color-gray-700);
  }
  svg:active {
    transform: scale(1);
  }
`,i=e.p`
  width: 20rem;
  text-align: center;
  color: var(--color-gray-400);
`;function d(){function o(){window.location.reload()}return t.createPortal(r.jsx(s,{height:"1rem",width:"1rem",top:"50%",left:"50%",children:r.jsxs(n,{children:[r.jsx(a,{onClick:o}),r.jsx(i,{children:"Refresh!"})]})}),document.body)}export{d as T};
