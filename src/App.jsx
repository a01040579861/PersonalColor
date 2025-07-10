// import "./globals.css";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Question from "./components/Question";
import questions from "./data/questions";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Result from "./components/Result";

const Bg = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
`;

const CenterBox = styled.div`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 28px;
  box-shadow: 0 6px 32px rgba(108, 99, 255, 0.1);
  padding: 3.5rem 2.2rem 2.7rem 2.2rem;
  max-width: 480px;
  width: 92vw;
  margin: 4.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 2.2rem 0.7rem 1.7rem 0.7rem;
    border-radius: 16px;
    margin: 2.2rem auto;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.3rem;
  letter-spacing: -1.5px;
  text-align: center;
  line-height: 1.18;
`;

const SubText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2.7rem;
  text-align: center;
  line-height: 1.6;
`;

const StartButton = styled.button`
  padding: 1.1rem 2.7rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 60%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  border-radius: 999px;
  box-shadow: 0 2px 12px rgba(108, 99, 255, 0.1);
  transition: transform 0.15s, box-shadow 0.15s, background 0.18s;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  &:hover {
    transform: translateY(-2px) scale(1.045);
    box-shadow: 0 6px 24px rgba(108, 99, 255, 0.18);
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent} 40%,
      ${({ theme }) => theme.colors.primary} 100%
    );
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  margin: 2.2rem auto 0 auto;
  gap: 1rem;
`;

const NavButton = styled.button`
  flex: 1;
  /* max-width: 120px; */
  padding: 1rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 999px;
  border: none;
  outline: none;
  background: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.border
      : `linear-gradient(90deg, ${theme.colors.primary} 60%, ${theme.colors.accent} 100%)`};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 2px 12px rgba(191,169,128,0.10)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.13s;
  &:hover {
    transform: ${({ disabled }) =>
      disabled ? "none" : "translateY(-2px) scale(1.03)"};
    background: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.border
        : `linear-gradient(90deg, ${theme.colors.accent} 40%, ${theme.colors.primary} 100%)`};
  }
`;

function getRandomQuestions(arr, n) {
  const result = [];
  const used = new Set();
  while (result.length < n) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!used.has(idx)) {
      used.add(idx);
      result.push(arr[idx]);
    }
  }
  return result;
}

const TOTAL_STEPS = 7;

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(TOTAL_STEPS).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => {
    setSelectedQuestions(getRandomQuestions(questions, TOTAL_STEPS));
    setStep(0);
    setShowQuiz(true);
    setAnswers(Array(TOTAL_STEPS).fill(null));
    setShowResult(false);
  };

  const handleAnswer = (type) => {
    const newAnswers = [...answers];
    newAnswers[step] = type;
    setAnswers(newAnswers);
    if (step < TOTAL_STEPS - 1) {
      setStep((prev) => prev + 1);
    } else {
      setShowQuiz(false);
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Bg />
      <CenterBox>
        {!showQuiz && !showResult ? (
          <>
            <Title>퍼스널컬러 세미 프로젝트</Title>
            <SubText>
              나만의 퍼스널컬러를 쉽고 빠르게 진단해보세요.
              <br />
              간단한 질문에 답하면 어울리는 컬러와 스타일을 추천해드립니다.
            </SubText>
            <StartButton onClick={handleStart}>시작하기</StartButton>
          </>
        ) : showQuiz ? (
          <>
            <ProgressBar step={step} total={TOTAL_STEPS} />
            <Question
              question={selectedQuestions[step]}
              onAnswer={handleAnswer}
              selected={answers[step]}
            />
            <NavButtons>
              <NavButton onClick={handlePrev} disabled={step === 0}>
                이전
              </NavButton>
            </NavButtons>
          </>
        ) : (
          <Result />
        )}
      </CenterBox>
    </ThemeProvider>
  );
};

export default App;
