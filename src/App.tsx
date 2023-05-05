import React from 'react';
import './App.css';
import MainContent from './Pages/MainContent/MainContent';
import SinglePokemonInfo from './Pages/SinglePokemonInfo/SinglePokemonInfo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error404 from './Pages/Error404/Error404';
const content = (
  <Routes>
    <Route path="*" element={<Error404/>}/>
    <Route path="/" element={<MainContent/>}/>
    <Route path="/pokemon/:id" element={<SinglePokemonInfo/>}/>
  </Routes>
)

const App:React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
          {content}
      </div>
    </BrowserRouter>
  );
}

export default App;
