import React, { useState } from 'react';
import styled from 'styled-components';

type Question = {
  question: string;
  answers: Answer[];
};

type Answer = {
  label: string;
  score: number;
};

type isVisibleProps = {
  isVisible: boolean;
};

export default function FagerstromTest({ isVisible }: isVisibleProps) {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: '1. 아침에 일어나서 얼마 만에 첫 담배를 피우십니까?',
      answers: [
        { label: '5분 이내', score: 3 },
        { label: '6 ~ 30분 사이', score: 2 },
        { label: '31∼60분 사이', score: 1 },
        { label: '60분 이후', score: 0 },
      ],
    },
    {
      question:
        '2. 지하철, 버스, 병원, 영화관 등과 같은 금연구역에서 흡연 욕구를 참는 것이 어렵습니까?',
      answers: [
        { label: '예', score: 1 },
        { label: '아니오', score: 0 },
      ],
    },
    {
      question: '3. 하루 중 담배 맛이 가장 좋은 때는 언제입니까?',
      answers: [
        { label: '아침 첫 담배', score: 1 },
        { label: '그 외의 담배', score: 0 },
      ],
    },
    {
      question: '4. 하루에 보통 몇 개비나 피우십니까?',
      answers: [
        { label: '10개비 이하', score: 0 },
        { label: '11∼20개비', score: 1 },
        { label: '21∼30개비', score: 2 },
        { label: '31개비 이상', score: 3 },
      ],
    },
    {
      question: '5. 오후와 저녁시간보다 오전 중에 담배를 더 자주 피우십니까?',
      answers: [
        { label: '예', score: 1 },
        { label: '아니오', score: 0 },
      ],
    },
    {
      question: '6. 몸이 아파 하루 종일 누워있을 때에도 담배를 피우십니까?',
      answers: [
        { label: '예', score: 1 },
        { label: '아니오', score: 0 },
      ],
    },
    // 나머지 질문들 추가
  ]);

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(null),
  );

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = score;
    setAnswers(newAnswers);
  };

  const calculateTotalScore = () => {
    return answers.reduce((acc, score) => acc + (score || 0), 0);
  };

  const getFeedback = () => {
    const totalScore = calculateTotalScore();

    if (totalScore >= 7) {
      return '심리적, 신체적으로 니코틴에 의존이 생겨 금단증상이 내 마음과 뒤섞여 담배가 생활의 일부가 된 상태입니다. 니코틴 혈중농도가 떨어지면 금단증상이 생깁니다. 갑자기 흡연을 중단하면 금단증상으로 금연을 지속하기 어렵기 때문에 니코틴 패치 활용이 필요합니다.';
    } else if (totalScore >= 4) {
      return '현재 니코틴 중독으로 인한 구체적인 증상은 나타나지 않습니다. 대신 쉽게 담배를 다시 피울 수 있어 금연에 실패하는 경우가 많습니다.';
    } else {
      return '현재 니코틴 의존도가 아주 낮은 수준입니다. 가장 쉽게 금연할 수 있는 때가 바로 지금입니다.';
    }
  };

  const handleEvaluate = () => {
    const feedback = getFeedback();
    alert(feedback);
  };

  return isVisible ? (
    <Conatainer>
      {questions.map((question, index) => (
        <div key={index}>
          <p>
            <b>{question.question}</b>
          </p>
          <AnswerForm>
            {question.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                <input
                  type="radio"
                  name={`q${index}`}
                  value={answer.score}
                  onChange={() => handleAnswer(index, answer.score)}
                />
                {answer.label}
              </label>
            ))}
          </AnswerForm>
        </div>
      ))}

      <ScoreContainer>
        <ScoreButton onClick={handleEvaluate}>평가하기</ScoreButton>
        {/* <p>총점: {calculateTotalScore()}</p>
        <p>평가: {getFeedback()}</p> */}
      </ScoreContainer>
    </Conatainer>
  ) : null;
}

const Conatainer = styled.div`
  padding: 32px 24px;
  padding-inline: 8px;
  position: relative;
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    padding: 64px 70px;

    &::before {
      inset: 0 16px;
    }
  }

  &::before {
    content: '';
    background-color: #fff;
    border-radius: 16px;
    position: absolute;
    inset: 0;
    box-shadow: 0 14px 18px rgba(0, 0, 0, 0.06);
    z-index: -1;
  }

  > div:not(:last-child) {
    margin: 16px 0 0;

    p {
      margin: 0;
    }
  }
`;

const AnswerForm = styled.form`
  display: flex;

  label:not(:last-child) {
    margin-right: 26px;
  }
`;

const ScoreContainer = styled.div`
  margin-top: 50px;
`;

const ScoreButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 48px;
  background-color: transparent;
  font: inherit;
  font-weight: 600;
  line-height: 14px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: 1200px) {
    width: 327px;

    &:hover {
      background-color: transparent;
      border-color: #6e6e6e;
      color: #6e6e6e;
    }
  }
`;
