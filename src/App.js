import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";



function App() {
  return (
    <Router>
      <div className="Home">
        <Navbar />
        <Hero />
      </div>
      <Switch>
        <Route path="/" />
        <Route path="/features" />
        <Route path="/pricing" />
        <Route path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
