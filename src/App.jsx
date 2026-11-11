import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./style.css";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const Resume = lazy(() => import("./components/Resume/ResumeNew.jsx"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
