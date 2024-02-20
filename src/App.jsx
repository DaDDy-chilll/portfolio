import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Navigation, About, Contact, Skills, Projects } from "@pages";
import { AnimatePresence } from "framer-motion";
import { PageInfo } from "./components";


function App() {
  const location = useLocation();
  return (
 <>
 <Navigation />
     <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/"  element={<PageInfo />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

    </AnimatePresence>
 </>
  );
}

export default App;
