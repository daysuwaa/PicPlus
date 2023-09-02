import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import Post from "./components/Post";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
   <div>
   <Router>
      <Routes>
       <Route path="/" exact element={<HomePage />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/post" element={<Post />} />
       <Route path="*" element ={<ErrorPage/>} />
     </Routes>
   </Router>
   </div>

    
      
   
  );
}

export default App;
