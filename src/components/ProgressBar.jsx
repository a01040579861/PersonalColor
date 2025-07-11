import React from "react";
import styled from "styled-components";

const BarWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  background: none;
  position: relative;
  height: 12px;
  display: flex;
  align-items: center;
`;

const BarBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  box-shadow: 0 2px 12px rgba(108, 99, 255, 0.08);
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 60%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(108, 99, 255, 0.13);
  width: ${({ percent }) => percent}%;
  transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProgressBar = ({ step, total }) => {
  const percent = Math.round(((step + 1) / total) * 100);
  return (
    <BarWrapper>
      <BarBg />
      <Bar percent={percent} />
    </BarWrapper>
  );
};

export default ProgressBar;
