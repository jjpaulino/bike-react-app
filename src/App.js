import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StationList from "./components/StationList";
import StationItem from "./components/StationItem";

function App() {
  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <StationList stationURL={"/get_stations"} />
          </Route>
          <Route path="/station_item">
            <StationItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
