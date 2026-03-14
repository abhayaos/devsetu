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
import SetuLists from "./pages/SetuLists"
import SetuPage from "./pages/SetuPage"
import Setu1 from "./pages/Setus/Setu1";
import Setu2 from "./pages/Setus/Setu2";
import Setu3 from "./pages/Setus/Setu3";
import CodeViewer from "./components/CodeViewer";

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
        <Route path="/setulabs/repos" element={<SetuLists />} />

        <Route path="/setulabs/repos/:repo" element={<SetuPage />} />
        <Route path="/setulabs/setu1" element={<Setu1 />} />
        <Route path="/setulabs/setu2" element={<Setu2 />} />
        <Route path="/setulabs/setu3" element={<Setu3 />} />

        <Route path="/code" element={<CodeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;