import { Routes, Route, } from "react-router-dom";
import './App.css';
import BlogRouter from './Router/blogRouter';
import EditBlogRouter from "./Router/editBlogRouter";
import  Homescreen from "./Screen/Homescreen";
import CreateBlog from './Pages/CreateBlog'
import MainApp from "./Pages/MainApp"

function App() {
  return (
    <div className="App">
      <Homescreen/>
      <Routes>
        <Route path="/blog-manager/" element={<MainApp/>}/>
        <Route path="/blog-manager/blog/:blogId" element={<BlogRouter />} />
        <Route path="/blog-manager/edit/:blogId" element={<EditBlogRouter />} />
        <Route path="/blog-manager/create" element={<CreateBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
