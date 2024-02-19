<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navigation, About, Contact, Skills, Projects } from "@pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { About, Contact, Home, Projects, Skills, Navigation } from 'pages'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
>>>>>>> a94480289bed43863b03cdf874eab63bdef0b171
