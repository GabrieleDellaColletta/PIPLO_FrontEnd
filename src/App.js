import logo from './logo.svg';
import './App.css';

import Dipendenti from './components/pages/Dipendenti';
import Dipendenti_gruppi from './components/pages/Dipendenti_gruppi';
import Dipendenti_individuali from './components/pages/Dipendenti_individuali';
import Documenti from './components/pages/Documenti';
import Presenze from './components/pages/Presenze';
import Richieste_permessi from './components/pages/Richieste_permessi';
import Rimborsi_spesa from './components/pages/Rimborsi_spesa';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
import Menu from './components/unused/Menu';
import Menu_item from './components/unused/Menu_item';
*/
import Navigatore from './components/javascript/Navigatore';
import Filtri from './components/javascript/Filtri';
import Employee_display from './components/unused/Employee_display';

/*
const router = createBrowserRouter([
  {path: '/', element: <HomePage/> },
  {}
]);
*/

function App() {
const data_1 = new Date(2023, 2, 6);
document.body.style = 'background: rgb(173, 182, 194);';
  

  return (
    <div>
    <Router>
      
      <Navigatore/>
        <Routes>
          {<Route path='/presenze' element={<Presenze/>}/>}
          <Route path='/rimborsi_spesa' element={<Rimborsi_spesa/>}/>
          <Route path='/richieste_permessi' element={<Richieste_permessi/>}/>
          <Route path='/documenti' element={<Documenti/>}/>
          <Route path='/dipendenti' element={<Dipendenti/>}/>
          <Route path='/dipendenti_gruppi' element={<Dipendenti_gruppi/>}/>
          <Route path='/dipendenti_individuali' element={<Dipendenti_individuali/>}/>
        </Routes>
    </Router>
    </div>

    

    /*
    <div className="App">
    <RouterProvider router={router}/>
   
      <div><Navigatore/></div>
    
    </div>
    */
  );
}

export default App;

