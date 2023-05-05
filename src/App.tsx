import React from 'react';
import './App.css';
import MainContent from './Pages/MainContent/MainContent';
import SinglePokemonInfo from './Pages/SinglePokemonInfo/SinglePokemonInfo';
const content = (
  <div>
    <SinglePokemonInfo/>
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
