import React from 'react';
import { Spin } from 'antd';
import styled, { keyframes } from 'styled-components';

// Define the gradient colors
const spinnerGradient = 'linear-gradient(45deg, #003445, #00953c)';

// Animation for rotating the spinner
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for custom spinner container
const SpinnerDiv = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Styled Spin component with gradient
const CustomSpin = styled(Spin)`
  .ant-spin-dot-item {
    background-image: ${spinnerGradient}; // Apply gradient to spinner dots
    background-clip: border-box;
    background-size: 200% 200%;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    animation: ${rotate} 1.5s linear infinite; // Apply rotation animation
  }

  .ant-spin-text {
    color: var(--color-brand-blue-100); // Loading text color
    font-weight: 400;
    font-size: 1.3rem;
    font-family: 'Poppins';
  }
`;

const contentStyle = {
  padding: 50, // Add some padding to ensure the content wraps properly
};

const Spinner = () => (
  <SpinnerDiv>
    <CustomSpin tip="Loading..." size="large">
      <div style={contentStyle} /> {/* Empty div to nest content */}
    </CustomSpin>
  </SpinnerDiv>
);

export default Spinner;
