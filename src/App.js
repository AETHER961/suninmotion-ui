import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Story from "./components/Story";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Story />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
