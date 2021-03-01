import React from "react";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <Switch>
      <Route path="/">
        <SearchContextProvider>
          <HomePage />
        </SearchContextProvider>
      </Route>
    </Switch>
  );
}
export default App;
