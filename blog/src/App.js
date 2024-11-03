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
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/blog/:id" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
