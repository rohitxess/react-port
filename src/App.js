

import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header'
import Projects from './components/Project';


function App() {
  return (
   <div className='app'>
      <main>
      <Header />
      <Aboutme/>
      <Experience />
      <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
