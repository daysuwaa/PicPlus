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
       <Route exact path="/PicPlus" element={<HomePage />} />
       <Route path="PicPlus/signin" element={<Signin />} />
       <Route path="PicPlus/signup" element={<Signup />} />
       <Route path="PicPlus/post" element={<Post />} />
       <Route path="*" element ={<ErrorPage/>} />
     </Routes>
   </Router>
  

    
      
   
  );
}

export default App;
