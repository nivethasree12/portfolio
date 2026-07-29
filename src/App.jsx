import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [page, setPage] = useState(0);

  const pages = [
    <Home />,
    <About />,
    <Projects />
  ];

  const nextPage = () => {
    if (page < pages.length - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">

      {/* Left Arrow */}
      {page > 0 && (
        <button
          className="arrow left"
          onClick={previousPage}
        >
          &#10094;
        </button>
      )}

      {/* Page Transition */}
      <AnimatePresence mode="wait">
  <motion.div
    key={page}
    className="page"
    initial={{
      opacity:0,
      x:120,
      scale:.98
    }}
    animate={{
      opacity:1,
      x:0,
      scale:1
    }}
    exit={{
      opacity:0,
      x:-120,
      scale:.98
    }}
    transition={{
      duration:.6,
      ease:[0.22,1,0.36,1]
    }}
  >
    {pages[page]}
  </motion.div>
</AnimatePresence>

      {/* Right Arrow */}
      {page < pages.length - 1 && (
        <button
          className="arrow right"
          onClick={nextPage}
        >
          &#10095;
        </button>
      )}

      {/* Page Indicator */}
      <div className="page-number">
        {String(page + 1).padStart(2, "0")} / 03
      </div>

    </div>
  );
}

export default App;