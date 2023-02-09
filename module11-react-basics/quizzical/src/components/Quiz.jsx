import { useState, useEffect } from "react";
import Question from "./Question";
import Button from "./Button";
import getQuestions from "./data/getQuestions";
import "./styles/Quiz.css";
import { nanoid } from "nanoid";

const Quiz = (props) => {
  const [questionSet, setQuestionSet] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getQuestions(props.gameOptions).then((questions) => {
      if (questions.length === 0) {
        props.startHandle();
      }
      return setQuestionSet(questions);
    });

    return () => {
      controller.abort();
    };
  }, []);

  const questionsHtml = questionSet.map((question) => (
    <Question key={nanoid()} {...question}></Question>
  ));

  return (
    <div className="quiz-container">
      {questionsHtml}
      <Button value="Check answers"></Button>
    </div>
  );
};

export default Quiz;
