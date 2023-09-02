import React from "react";
import { Post } from "./components/Post";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Signin/>
      <Signup/>
      <Post/>
      
    </div>
  );
}

export default App;
