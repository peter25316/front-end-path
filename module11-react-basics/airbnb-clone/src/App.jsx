import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Card
        img="./katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      ></Card>
    </div>
  );
};

export default App;
