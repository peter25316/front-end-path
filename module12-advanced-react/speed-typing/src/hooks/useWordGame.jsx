import { useState, useEffect, useRef } from "react";

const useWordGame = (startingTime = 10) => {
  const [gameStart, setGameStart] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
  const [wordCount, setWordCount] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (gameStart && time > 0) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, gameStart]);

  const startGame = () => {
    setGameStart(true);
    setTime(startingTime);
    setText("");
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const endGame = () => {
    setGameStart(false);
    setWordCount(countWords(text));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const countWords = (text) => {
    const wordsArr = text.trim().split(" ");
    const filteredArr = wordsArr.filter((word) => word !== "");
    return filteredArr.length;
  };

  return { textRef, handleChange, text, gameStart, time, startGame, wordCount };
};

export default useWordGame;
