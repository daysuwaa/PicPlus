import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import Post from "./components/Post";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";

function App  () {
  return (
   
   <Router>
      <Routes>
       <Route exact path="/picplus" element={<HomePage />} />
       <Route path="picplus/signin" element={<Signin />} />
       <Route path="picplus/signup" element={<Signup />} />
       <Route path="picplus/post" element={<Post />} />
       <Route path="*" element ={<ErrorPage/>} />
     </Routes>
   </Router>
  

    
      
   
  );
}

export default App;
