import { Routes, Route } from "react-router-dom";

// Import our routes
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
