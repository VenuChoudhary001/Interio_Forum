import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ConsultPage from "./Components/ConsultPage";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import LogInPage from "./Components/LogInPage";
import MessageForm from "./Components/MessageForm";
import ProfilePage from "./Components/ProfilePage";
import TemplatesPage from "./Components/TemplatesPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogInPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/consult">
            <ConsultPage />
          </Route>
          <Route exact path="/template">
            <TemplatesPage />
          </Route>
          {/* <Route exact path="/:name" children={<MessageForm />}></Route> */}
          <Route exact path="/:id" children={<ProfilePage />}></Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
