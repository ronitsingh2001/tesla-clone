import React from "react";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import Models from "./components/Models";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Preview />
      <Models />
      <footer className="relative">
        <Footer />
      </footer>
    </>
  );
}

export default App;
