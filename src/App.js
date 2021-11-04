import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Container } from "reactstrap";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
