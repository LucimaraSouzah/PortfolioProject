import "./App.css";
import Navigation from "./assets/components/Navigation";
import Home from "./assets/components/Home";
import Description from "./assets/components/Description";
import Project from "./assets/components/Project";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="flex flex-col">
        <Home />
        <Description />
        <Project />
      </main>
    </div>
  );
}

export default App;
