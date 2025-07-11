import React from "react";
import styled from "styled-components";

const COLOR_RESULTS = [
  {
    type: "봄웜(Spring Warm)",
    colors: ["#FFD6A5", "#FFB085", "#FFE066", "#A3B18A"],
    message:
      "화사하고 따뜻한 컬러가 잘 어울려요! 밝고 생기있는 스타일을 추천합니다.",
  },
  {
    type: "여름쿨(Summer Cool)",
    colors: ["#B5D0FF", "#A3C4F3", "#E3E6F3", "#C1C7D6"],
    message:
      "맑고 부드러운 파스텔톤이 잘 어울려요! 산뜻하고 청량한 스타일을 추천합니다.",
  },
  {
    type: "가을웜(Autumn Warm)",
    colors: ["#E6D9B8", "#BFA980", "#A1887F", "#A3B18A"],
    message:
      "딥하고 따뜻한 뉴트럴 컬러가 잘 어울려요! 고급스럽고 차분한 스타일을 추천합니다.",
  },
  {
    type: "겨울쿨(Winter Cool)",
    colors: ["#BFD7EA", "#3E3A36", "#FFFFFF", "#A3C4F3"],
    message:
      "선명하고 또렷한 쿨톤 컬러가 잘 어울려요! 세련되고 모던한 스타일을 추천합니다.",
  },
];

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem 1.5rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  max-width: 420px;
  margin: 0 auto;

  @media (max-width: 1920px) {
    max-width: 420px;
    padding: 2.5rem 1.2rem 1.5rem 1.2rem;
  }
  @media (max-width: 1440px) {
    max-width: 400px;
    padding: 2.2rem 1rem 1.2rem 1rem;
  }
  @media (max-width: 1024px) {
    max-width: 360px;
    padding: 2rem 0.8rem 1rem 0.8rem;
  }
  @media (max-width: 768px) {
    max-width: 320px;
    padding: 1.5rem 0.5rem 0.8rem 0.5rem;
  }
  @media (max-width: 500px) {
    max-width: 98vw;
    padding: 1.1rem 0.2rem 0.5rem 0.2rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  @media (max-width: 375px) {
    max-width: 99vw;
    padding: 0.7rem 0.1rem 0.3rem 0.1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const ResultTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.2rem;
  text-align: center;
  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 0.95rem;
  }
`;

const ColorChips = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
  @media (max-width: 500px) {
    gap: 0.3rem;
  }
`;

const Chip = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 2px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  @media (max-width: 1440px) {
    width: 34px;
    height: 34px;
  }
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 500px) {
    width: 22px;
    height: 22px;
  }
  @media (max-width: 375px) {
    width: 18px;
    height: 18px;
  }
`;

const Message = styled.p`
  font-size: 1.08rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 0.7rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

// answers를 props로 받는 구조 (App.jsx에서 전달 필요)
const Result = ({ answers }) => {
  // 임시: 랜덤 타입 선택 (나중에 answers 기반 로직으로 변경 가능)
  const result =
    COLOR_RESULTS[Math.floor(Math.random() * COLOR_RESULTS.length)];

  // message에서 '!' 기준으로 줄바꿈 처리
  const formattedMessage = result.message.split("!").map((part, idx, arr) =>
    idx < arr.length - 1 ? (
      <React.Fragment key={idx}>
        {part}!<br />
      </React.Fragment>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );

  return (
    <ResultContainer>
      <ResultTitle>
        당신의 퍼스널컬러는
        <br />
        {result.type}!
      </ResultTitle>
      <ColorChips>
        {result.colors.map((c, i) => (
          <Chip key={i} color={c} />
        ))}
      </ColorChips>
      <Message>{formattedMessage}</Message>
    </ResultContainer>
  );
};

export default Result;
