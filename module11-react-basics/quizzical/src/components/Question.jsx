import "./styles/Question.css";
import { decode } from "html-entities";

const Question = (props) => {
  return (
    <div className="question-container">
      <h3 className="question">{decode(props.question)}</h3>
      <p className="answer">answer</p>
    </div>
  );
};

export default Question;
