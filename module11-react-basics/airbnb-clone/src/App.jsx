import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item}></Card>;
  });

  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <section className="card-list">{cards}</section>
    </div>
  );
};

export default App;
