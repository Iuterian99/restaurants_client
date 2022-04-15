import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import TopHeader from "./components/header/header";
import Types from "./components/rest_types/types";
import RESTAURANTS from "./components/restaurants/restaurants";
import Branches from "./components/Restaurant_braches/Branches.jsx";
function App() {
  return (
    <>
      <nav className="bg-dark">
        <TopHeader />
      </nav>
      <div className="row">
        <div className="col-12">
          <Switch>
            <Route path="/" exact>
              <Types />
            </Route>
            <Route path="/type/:id">
              <RESTAURANTS />
            </Route>
            <Route path="/branches/:id">
              <Branches />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
