import React from 'react';
import Body from './containers/BodyContainer';
import Footer from './containers/FooterContainer';
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
