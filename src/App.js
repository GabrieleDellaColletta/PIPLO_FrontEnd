import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import Employee from './components/Employee';
import Calendar from './components/Calendar';
=======
import Employee_info from './components/javascript/Employee_info';
import Employee_display from './components/javascript/Employee_display';
import Date_object from './components/javascript/Date_object';

import Dipendenti from './components/pages/Dipendenti';
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

/*
const router = createBrowserRouter([
  {path: '/', element: <HomePage/> },
  {}
]);
*/
>>>>>>> Stashed changes

function App() {
const data_1 = new Date(2023, 2, 6);

  const employees = [
    {
      id: 0,
      name: 'Jonathan Giulemani',
      role: 'Impiegato',
      wage: 1500,
    },
    {
      id: 1,
      name: 'Piero Nani',
      role: 'Sguattero',
      wage: 1200,
    },
    {
      id: 2,
      name: 'Andrew Tate',
      role: 'TopG',
      wage: 9999999,
    },
    {
      id: 3,
      name: 'Peter Griffin',
      role: 'Loser',
      wage: 200,
    },    
    {
      id: 4,
      name: 'ciccio buriccio',
      role: 'n-',
      wage: 3,
    },
  ];

  return (
<<<<<<< Updated upstream
    <div className="App">
      <Employee
        name={employees[0].name}
        role={employees[0].role}
        wage={employees[0].wage}
      ></Employee>
      <Employee
        name={employees[1].name}
        role={employees[1].role}
        wage={employees[1].wage}
      ></Employee>
      <Employee
        name={employees[2].name}
        role={employees[2].role}
        wage={employees[2].wage}
      ></Employee>
      <Employee
        name={employees[3].name}
        role={employees[3].role}
        wage={employees[3].wage}
      ></Employee>
      <Employee 
        name={employees[4].name} 
        role={employees[4].role} 
        wage={employees[4].wage}
      ></Employee>
=======
    <Router>
      <Navigatore/>
        <Routes>
          <Route path='/presenze' element={<Presenze/>}/>
          <Route path='/rimborsi_spesa' element={<Rimborsi_spesa/>}/>
          <Route path='/richieste_permessi' element={<Richieste_permessi/>}/>
          <Route path='/documenti' element={<Documenti/>}/>
          <Route path='/dipendenti' element={<Dipendenti/>}/>
        </Routes>
    </Router>


    /*
    <div className="App">
    <RouterProvider router={router}/>
   
      <div><Navigatore/></div>
    
    </div>
    */
  );
}

export default App;











{/*
    <div className="App">
      <div>
      
        <Employee_info
          cod_fisc={employees[0].cod_fisc}
          name={employees[0].name}
          surname={employees[0].surname}
          role={employees[0].role}
          wage={employees[0].wage}
          hired={employees[0].hired}
        />
        <Employee_info
          cod_fisc={employees[1].cod_fisc}
          name={employees[1].name}
          surname={employees[1].surname}
          role={employees[1].role}
          wage={employees[1].wage}
          hired={employees[1].hired}
        />
        <Employee_info
          cod_fisc={employees[2].cod_fisc}
          name={employees[2].name}
          surname={employees[2].surname}
          role={employees[2].role}
          wage={employees[2].wage}
          hired={employees[2].hired}
        />
        <Employee_info
          cod_fisc={employees[3].cod_fisc}
          name={employees[3].name}
          surname={employees[3].surname}
          role={employees[3].role}
          wage={employees[3].wage}
          hired={employees[3].hired}
        />
        <Employee_info 
          cod_fisc={employees[4].cod_fisc}
          name={employees[4].name}
          surname={employees[4].surname} 
          role={employees[4].role} 
          wage={employees[4].wage}
          hired={employees[4].hired}
        />
  
        
>>>>>>> Stashed changes


    </div>
<<<<<<< Updated upstream
  );
}

export default App;
=======
  */}
>>>>>>> Stashed changes
