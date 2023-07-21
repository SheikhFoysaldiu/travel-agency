import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Page/Home';
import IATA from './Page/IATA';
import { useContext } from 'react';
import { UserContext } from './context/Context';

function App() {
  const {iataLogin} = useContext(UserContext);
  return (
    <>
<Routes>
    <Route path="/" element={<Home/>}/>
    {
      iataLogin ? <Route path="/iata" element={<IATA/>}/> : <Route path="/iata" element={<Home/>}/>
    }
</Routes>
    

    </>
  );
}

export default App;
