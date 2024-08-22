import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createpost">CreatePost</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
