import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Calendar from './components/Calendar';

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


    </div>
  );
}

export default App;
