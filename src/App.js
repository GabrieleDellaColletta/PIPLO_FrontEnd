import logo from './logo.svg';
import './App.css';
import Employee_info from './components/Employee_info';

function App() {

  const Employee_infos = [
    {
      id: 0,
      name: 'Jonathan Giulemani',
      role: 'Impiegato',
      wage: 1500,
      hired: new Date(2020, 11, 11),
    },
    {
      id: 1,
      name: 'Piero Nani',
      role: 'Sguattero',
      wage: 1200,
      hired: new Date(2019, 3, 16),
    },
    {
      id: 2,
      name: 'Andrew Tate',
      role: 'TopG',
      wage: 9999999,
      hired: new Date(2021, 5, 6),
    },
    {
      id: 3,
      name: 'Peter Griffin',
      role: 'Loser',
      wage: 200,
      hired: new Date(2020,93, 23),
    },    
    {
      id: 4,
      name: 'ciccio buriccio',
      role: 'n-',
      wage: 3,
      hired: new Date(2022, 1, 2),
    },
  ];

  return (
    <div className="App">
      <div>
        <Employee_info
          name={Employee_infos[0].name}
          role={Employee_infos[0].role}
          wage={Employee_infos[0].wage}
          hired={Employee_infos[0].hired}
        />
        <Employee_info
          name={Employee_infos[1].name}
          role={Employee_infos[1].role}
          wage={Employee_infos[1].wage}
          hired={Employee_infos[1].hired}
        />
        <Employee_info
          name={Employee_infos[2].name}
          role={Employee_infos[2].role}
          wage={Employee_infos[2].wage}
          hired={Employee_infos[2].hired}
        />
        <Employee_info
          name={Employee_infos[3].name}
          role={Employee_infos[3].role}
          wage={Employee_infos[3].wage}
          hired={Employee_infos[3].hired}
        />
        <Employee_info 
          name={Employee_infos[4].name} 
          role={Employee_infos[4].role} 
          wage={Employee_infos[4].wage}
          hired={Employee_infos[4].hired}
        />
      </div>

    </div>
  );
}

export default App;
