import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import ExtensionCard from "./components/ExtensionCard/ExtensionCard";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <Router>
      <div className="Home">
        <Navbar />
        <Hero />
        <Features />
        <ExtensionCard />
        <Faq />
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
