
import './App.css';
import "./Components/Header.js";
import Header from './Components/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
// import Work from './Pages/Work.js';

function App() {
  return (
    <div> 
     <BrowserRouter>
        <Header/>
  
     <Routes>
      <Route path="/" Component={Home}/>
      {/* <Route path="/work" Component={Work}/> */}
      {/* <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/> */}
      {/* <Route path="*" Component={Home}/> */}
     </Routes>
  
     </BrowserRouter>
    </div>
  );
}

export default App;
