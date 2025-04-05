import React from "react";
import About from "./components/pages/About";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Users from "./components/HooksAndEvents/Users";
import ThemeProvider from "./components/ContextAPI/ThemeProvider";
import UserProfile from "./components/PropDrilling/UserProfile";
import Blog from "./components/Blog/Blog";
import SinglePost from "./components/pages/SinglePost";

function App () {

    return (
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/posts" element={<Blog />} />
           <Route path="/posts/:id" element={<SinglePost />} />
       </Routes>
    )

}

export default App;