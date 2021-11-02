import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Container } from "reactstrap";
import Dashboard from "./components/dashboard/dashboard";
import Predict from "./components/dashboard/predict";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/predict">
          <Container>
            <Predict />
          </Container>
        </Route>

        <Route path="/">
          <Container>
            <Dashboard />
          </Container>
        </Route>

        <Route path="/">
          <Container>
            <Dashboard />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
