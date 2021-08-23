import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Competences from "./components/Competences";

function App() {
  return (
    <div className="App">
      <div className="main-section">
        <Header />
        <Main />
        <About />
        <Competences />
      </div>
    </div>
  );
}

export default App;
