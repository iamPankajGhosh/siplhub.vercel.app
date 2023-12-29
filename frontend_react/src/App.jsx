import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Services, Contact, Watch, Error } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {["/", "/home"].map((path) => (
            <Route key={path} exact path={path} element={<Home />} />
          ))}

          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
