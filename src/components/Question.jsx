import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem 1.1rem;
  max-width: 340px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 320px;
    padding: 1.2rem 0.9rem;
  }
  @media (max-width: 1024px) {
    max-width: 270px;
    padding: 1rem 0.7rem;
  }
  @media (max-width: 768px) {
    max-width: 96vw;
    padding: 0.7rem 0.4rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  @media (max-width: 500px) {
    padding: 0.5rem 0.1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  @media (max-width: 375px) {
    padding: 0.3rem 0.05rem;
  }
`;

const QuestionText = styled.h2`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.1rem;
  text-align: center;
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

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    gap: 0.3rem;
  }
  @media (max-width: 500px) {
    gap: 0.2rem;
  }
  @media (max-width: 375px) {
    gap: 0.1rem;
  }
`;

const AnswerButton = styled.button`
  width: 100%;
  padding: 0.6rem 0;
  font-size: 0.98rem;
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
  @media (max-width: 1440px) {
    font-size: 0.93rem;
    padding: 0.5rem 0;
  }
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.4rem 0;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.3rem 0;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.2rem 0;
  }
  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 0.15rem 0;
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
