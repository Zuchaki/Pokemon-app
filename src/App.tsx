import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './Pages/MainContent/MainContent';
const content = (
  <div>
    <MainContent/>
  </div>
)

const App:React.FC = () => {

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;
