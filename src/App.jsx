import './App.css';
import MyProjects from './components/MyProjects/MyProjects';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Resume from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </>
  );
};

export default App;
