import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App-header">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
