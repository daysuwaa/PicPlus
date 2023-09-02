import React from "react";
import HomePage from "./components/HomePage";
import Post  from "./components/Post";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/">
         <HomePage/>
       </Route>
       <Route path="/Signin">
         <Signin/>
       </Route>
       <Route path="/Signup">
         <Signup/>
       </Route>
       <Route path="/Post">
         <Post/>
       </Route>

      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
