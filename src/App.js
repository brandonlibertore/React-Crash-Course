import React from 'react'
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
