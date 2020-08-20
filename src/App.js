import React from 'react';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import News from './components/news/news.jsx';
import Load from './components/load/load.jsx';
import Footer from './components/footer/footer.jsx';




import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Main /> 
      <News />
      <Load />
      <Footer />
    </>
  );
}

export default App;
