import React, {useState} from 'react';
import Header from './components/Header';
// import Project from './components/Project';
import Footer from './components/Footer';
import Aboutme from './components/pages/Aboutme';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me')
  const renderPage = () => {
      switch(currentPage) {
          case 'About Me':
              return <Aboutme />
          case 'Contact':
              return <Contact />
          case 'Portfolio':
              return <Portfolio />
          case 'Resume': 
              return <Resume />
          default: 
              return <Aboutme/>
      }
  };
  return (
    <div>
      <Header
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}>
        </Header> 
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  
  );
}

export default App;
