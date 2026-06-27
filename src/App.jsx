import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Album from "./pages/Album";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Activity from "./pages/Activity";
import Lists from "./pages/Lists";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/lists" element={<Lists />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;