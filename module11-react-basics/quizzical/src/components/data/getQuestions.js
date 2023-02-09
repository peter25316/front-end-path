const getQuestions = async (gameOptions) => {
  const temp =
    "https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple";

  const { category, difficulty, type } = gameOptions;

  let categoryQuery = "";
  let difficultyQuery = "";
  let typeQuery = "";

  if (category !== "") categoryQuery = `&category=${category}`;
  if (difficulty !== "") difficultyQuery = `&difficulty=${difficulty}`;
  if (type !== "") typeQuery = `&type=${type}`;

  const url = `https://opentdb.com/api.php?amount=5${categoryQuery}${difficultyQuery}${typeQuery}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log("api");
  return data.results;
};

export default getQuestions;
