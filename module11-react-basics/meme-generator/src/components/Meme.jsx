import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImg = (e) => {
    e.preventDefault();
    const memesArr = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNumber];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <form className="form" action="" onSubmit={getMemeImg}>
        <input
          className="form-input"
          placeholder="Top text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">
          Get a new meme image🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme-img" alt="" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
