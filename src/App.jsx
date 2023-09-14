// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Router from "router";
import More from './Parts/More'
import Home from './Parts/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <> 
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<More />} />
        </Routes>
        </BrowserRouter>
        {/* ); */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
