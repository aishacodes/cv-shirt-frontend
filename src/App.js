import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entries from "./components/Entries";
import Form from "./components/Form";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/entries">
            <Entries />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
