import { Routes, Route, } from "react-router-dom";
import './App.css';
import  Homescreen from "./Screen/Homescreen";
import CreateBlog from './Pages/CreateBlog'
import MainApp from "./Pages/MainApp"

function App() {
  return (
    <div className="App">
      <Homescreen/>
      <Routes>
        <Route path="/" element={<MainApp/>}/>
        <Route path="/create" element={<CreateBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
