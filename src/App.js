import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee_info';
import Date_object from './components/Date_object';

function App() {
const data_1 = new Date(2023, 2, 6);

  const employees = [
    {
      id: 0,
      cod_fisc: 'CLLRHR96B01L321O',
      name: 'RICHARD',
      surname: 'COLLO',
      role: 'Impiegato',
      wage: 1500,
      hired: new Date(2020, 11, 11),
    },
    {
      id: 1,
      cod_fisc: 'CLLRHR96B01L321O',
      name: 'Piero',
      surname: 'Nani',
      role: 'Sguattero',
      wage: 1200,
      hired: new Date(2019, 3, 16),
    },
    {
      id: 2,
      name: 'Andrew',
      surname: 'Tate',
      role: 'TopG',
      wage: 9999999,
      hired: new Date(2021, 5, 6),
    },
    {
      id: 3,
      cod_fisc: 'CLLRHR96B01L321O',
      name: 'Peter',
      surname: 'Griffin',
      role: 'Loser',
      wage: 200,
      hired: new Date(2020,93, 23),
    },    
    {
      id: 4,
      cod_fisc: 'CLLRHR96B01L321O',
      name: 'Ciccio',
      surname: 'Buriccio',
      role: 'Receptionist',
      wage: 3,
      hired: new Date(2022, 1, 2),
    },
  ];

  return (
    <div className="App">
      <Employee
        cod_fisc={employees[0].cod_fisc}
        name={employees[0].name}
        surname={employees[0].surname}
        role={employees[0].role}
        wage={employees[0].wage}
        hired={employees[0].hired}
      ></Employee>
      <Employee
        cod_fisc={employees[1].cod_fisc}
        name={employees[1].name}
        surname={employees[2].surname}
        role={employees[1].role}
        wage={employees[1].wage}
        hired={employees[1].hired}
      ></Employee>
      <Employee
        cod_fisc={employees[2].cod_fisc}
        name={employees[2].name}
        surname={employees[2].surname}
        role={employees[2].role}
        wage={employees[2].wage}
        hired={employees[2].hired}
      ></Employee>
      <Employee
        cod_fisc={employees[3].cod_fisc}
        name={employees[3].name}
        surname={employees[3].surname}
        role={employees[3].role}
        wage={employees[3].wage}
        hired={employees[3].hired}
      ></Employee>
      <Employee 
        od_fisc={employees[4].cod_fisc}
        name={employees[4].name}
        surname={employees[4].surname} 
        role={employees[4].role} 
        wage={employees[4].wage}
        hired={employees[4].hired}
      ></Employee>


    </div>
  );
}

export default App;
