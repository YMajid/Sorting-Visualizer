import React from 'react';
import Body from './components/Body/BodyContainer';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Sorting Visualizer</h1>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default App;
