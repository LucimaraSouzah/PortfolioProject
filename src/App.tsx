import "./App.css";
import Navigation from "./assets/components/Navigation";
import Home from "./assets/components/Home";
import Description from "./assets/components/Description";
import Project from "./assets/components/Project";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="flex flex-col sm:items-center">
        <Home />
        <Description />
        <Project />
        <Skills/>
      </main>
    </div>
  );
}

export default App;
