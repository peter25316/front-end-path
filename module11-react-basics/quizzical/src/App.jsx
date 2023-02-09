import { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

const App = () => {
  const [start, setStart] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  const startHandle = () => {
    setStart((prevStart) => !prevStart);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]: value,
      };
    });
  };

  return (
    <div className="app">
      <img className="blob1" src="blob1.png" alt="" />
      <img className="blob2" src="blob2.png" alt="" />
      {start ? (
        <Quiz startHandle={startHandle} gameOptions={gameOptions}></Quiz>
      ) : (
        <Landing
          startHandle={startHandle}
          handleChange={handleChange}
          gameOptions={gameOptions}
        ></Landing>
      )}
    </div>
  );
};

export default App;
