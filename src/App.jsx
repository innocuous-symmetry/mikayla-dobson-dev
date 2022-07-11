import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Links from './pages/Links';
import CreativeWorks from './pages/CreativeWorks';
import Navbar from './components/Navbar';

import './sass/App.scss';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='about-me' element={<AboutMe />} />
              <Route path='projects' element={<Projects />} />
              <Route path='technologies' element={<Technologies />} />
              <Route path='links' element={<Links />} />
              <Route path='creative-works' element={<CreativeWorks />} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
