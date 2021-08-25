import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-section bg-gunmetal">
        <Header />
        <Main />
      </div>
      <About />
      <Competences />
      <Experiences />
      <Formations />
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
