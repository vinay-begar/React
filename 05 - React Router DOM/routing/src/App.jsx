import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Kids from "./components/product/Kids";
import Mens from "./components/product/Mens";
import Women from "./components/product/Women";
import Product from "./components/product/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Parent Route */}
        <Route path="/product" element={<Product />}>
          {/* Child Routes — NO leading slash */}
          <Route path="kids" element={<Kids />} />
          <Route path="mens" element={<Mens />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
};

export default App;
