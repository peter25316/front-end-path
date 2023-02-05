import { useState } from "react";
import memesData from "./memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImg = (e) => {
    e.preventDefault();
    const memesArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNumber];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  return (
    <main>
      <form className="form" action="" onSubmit={getMemeImg}>
        <input className="form-input" placeholder="Top text" type="text" />
        <input className="form-input" placeholder="Bottom text" type="text" />
        <button className="form-btn" type="submit">
          Get a new meme image🖼
        </button>
      </form>
      <img src={meme.randomImage} className="meme-img" alt="" />
    </main>
  );
};

export default Meme;
