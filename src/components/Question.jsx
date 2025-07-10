import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 2.5rem 2rem;
  max-width: 480px;
  margin: 0 auto;
`;

const QuestionText = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

const AnswerButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  color: ${({ theme, selected }) => (selected ? "#fff" : theme.colors.text)};
  background: ${({ theme, selected }) =>
    selected
      ? `linear-gradient(90deg, ${theme.colors.primary} 60%, ${theme.colors.accent} 100%)`
      : theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.border};
  box-shadow: none;
  transition: background 0.15s, color 0.15s, border 0.15s, transform 0.12s;
  &:hover {
    background: ${({ theme, selected }) =>
      selected
        ? `linear-gradient(90deg, ${theme.colors.accent} 40%, ${theme.colors.primary} 100%)`
        : theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px) scale(1.03);
  }
`;

const Question = ({ question, onAnswer, selected }) => {
  if (!question) return null;
  return (
    <Wrapper>
      <QuestionText>{question.question}</QuestionText>
      <Answers>
        {question.answers.map((answer, idx) => (
          <AnswerButton
            key={idx}
            onClick={() => onAnswer(answer.type)}
            selected={selected === answer.type}
          >
            {answer.text}
          </AnswerButton>
        ))}
      </Answers>
    </Wrapper>
  );
};

export default Question;
