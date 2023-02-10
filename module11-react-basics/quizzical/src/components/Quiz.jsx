import { useState, useEffect } from "react";
import Question from "./Question";
import Button from "./Button";
import getQuestions from "./data/getQuestions";
import "./styles/Quiz.css";
import { nanoid } from "nanoid";

const Quiz = (props) => {
  const [questionSet, setQuestionSet] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    getQuestions(props.gameOptions).then((questions) => {
      if (questions.length === 0) {
        props.startHandle();
      }
      setQuestionSet(
        questions.map((question) => {
          return {
            ...question,
            selectedAnswer: "",
            id: nanoid(),
          };
        })
      );
    });

    return () => {
      controller.abort();
    };
  }, []);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleReset = () => {
    props.startHandle();
  };

  const questionsHtml = questionSet.map((question) => (
    <Question
      key={question.id}
      {...question}
      showAnswer={showAnswer}
    ></Question>
  ));

  console.log(questionSet);

  return (
    <div className="quiz-container">
      {questionsHtml}
      <Button
        value={!showAnswer ? "Check answers" : "Reset"}
        handleClick={!showAnswer ? handleShowAnswer : handleReset}
      ></Button>
    </div>
  );
};

export default Quiz;
