import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Story from "./components/Story";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Story />
      <Benefits />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}

export default App;
