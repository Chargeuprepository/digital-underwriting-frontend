import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  /* Login image color */
  --color-login-image: #DADEE1;
  /* Green */
  --color-brand-green-0: #e6f4ec;
  --color-brand-green-50: #b3dfc5;
  --color-brand-green-100: #80ca9e;
  --color-brand-green-200: #4db577;
  --color-brand-green-300: #1aa050;
  --color-brand-original-green-400: #00953c;
  --color-brand-green-500: #007730;
  --color-brand-green-600: #005924;
  --color-brand-green-700: #003c18;
  --color-brand-green-800: #001e0c;
  /* Blue */
  --color-brand-blue-0: #e6ebec;
  --color-brand-blue-50: #b3c2c7;
  --color-brand-blue-100: #809aa2;
  --color-brand-blue-200: #4d717d;
  --color-brand-blue-300: #1a4858;
  --color-brand-original-blue-400: #003445;
  --color-brand-blue-500: #002a37;
  --color-brand-blue-600: #001f29;
  --color-brand-blue-700: #00151c;
  --color-brand-blue-800: #000a0e;
  /* gray */
  --color-gray-0: #ffffff;
  --color-gray-1: #fafafa;
  --color-gray-10: #f5f5f5;
  --color-gray-25: #eeeeee;
  --color-gray-50: #e6e6e6;
  --color-gray-100: #cccccc;
  --color-gray-200: #b3b3b3;
  --color-gray-300: #8f8f8f;
  --color-gray-400: #999999;
  --color-gray-500: #808080;
  --color-gray-600: #666666;
  --color-gray-700: #4c4c4c;
  --color-gray-800: #333333;
  --color-gray-900: #191919;
  /* Astrick red */
  --color-astrick-red: #f80c0c;
  /* Blue */
  --color-blue-light: #081ead;
  --color-blue-dark: #02137d;

  --color-verification-credit-light: #FFDAB9;
  --color-verification-credit-dark: #B0C4DE;

  --color-verification-vehicle-light: #FFE4E1;
  --color-verification-vehicle-dark: #90EE90;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  &, &.light-mode{
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;

  --color-green-100: #dcfce7;
  --color-green-700: #15803d;

  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;

  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;

  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}

  &.dark-mode{
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;

--color-green-100: #166534;
--color-green-700: #dcfce7;

--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;

--color-silver-100: #374151;
--color-silver-700: #f3f4f6;

--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* font-family: "Roboto"; */

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  /* min-height: 100vh; */
  width: 100%;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--color-gray-100) inset !important;
  -webkit-text-fill-color: var(--color-gray-800) !important;
  font-size: 1.4rem !important;
  -webkit-text-stroke-color: var(--color-gray-800) !important;
}

input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px var(--color-gray-100) inset !important;
  -webkit-text-fill-color: var(--color-gray-800) !important;
  -webkit-text-stroke-color: var(--color-gray-800) !important;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Hide the spin buttons in Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}

img {
  image-rendering: -webkit-optimize-contrast; /* For better crispness */
  image-rendering: crisp-edges;
}

`;

export default GlobalStyle;
