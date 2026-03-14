import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import SetuLabs from "./pages/SetuLabs";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/settings" element={<Settings />} />
          <Route path="/setu-labs" element={<SetuLabs />} />
           <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;