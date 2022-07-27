
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact1";
import Services from "./Pages/Services1";
import Error from "./Pages/Error";

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Services />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
