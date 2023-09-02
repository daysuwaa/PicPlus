import React from "react";
import HomePage from "./components/HomePage";
import { Post } from "./components/Post";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <HomePage/>
      <Signin/>
      <Signup/>
      <Post/>
      
    </div>
  );
}

export default App;
