import useWordGame from "./hooks/useWordGame";

const App = () => {
  const { textRef, handleChange, text, gameStart, time, startGame, wordCount } =
    useWordGame(5);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        ref={textRef}
        disabled={!gameStart}
        onChange={handleChange}
      ></textarea>
      <h4>Time remaining: {time}</h4>
      <button disabled={gameStart} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
};

export default App;
