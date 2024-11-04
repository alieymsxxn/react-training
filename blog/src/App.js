import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./blogs/create/CreateBlog";
import BlogDetail from "./blogs/detail/BlogDetail";
import Navbar from "./navbar/Navbar";
import Home from "./navbar/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/react-training-blog" element={<Home />}></Route>
          <Route path="/react-training-blog/create" element={<CreateBlog />}></Route>
          <Route path="/react-training-blog/blog/:id" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
