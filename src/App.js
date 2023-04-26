import './App.scss'
// import { useLocation} from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import particles from "./utils.js/particles"
// import { useCallback } from "react";
// import Dashboard from './components/Dashboard'




const App = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    
    

    <main>
      
      <Particles id="tsparticles" init={particlesInit} options={particles} />
       <Sidebar/>
       <Home/>
       <About />
       <Resume />
      <Portfolio />
      <Contact />
       {/* <Dashboard /> */}
    </main>
    );
};

export default App;

  


