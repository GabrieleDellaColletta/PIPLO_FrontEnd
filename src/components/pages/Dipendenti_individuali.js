import React, { useState } from 'react';
import '../../App.css';
import Employee_info from '../javascript/Employee_info';
import TableHeader from '../javascript/TableHeader';
import Pagination from '../javascript/Pagination';

function Dipendenti_individuali(){

  const employees = [
    {
      id: 0,
      name: 'Amelia',
      surname: 'Peer',
      sex: 'F',
      email: 'amelia.peer@email.x',
      role: 'Impiegato',
      hired: new Date(2020, 11, 11),
    },
    {
      id: 1,
      name: 'Piero',
      surname: 'Nani',
      sex: 'M',
      email: 'piero.nani@email.x',
      role: 'Sguattero',
      hired: new Date(2019, 3, 16),
    },
    {
      id: 2,
      name: 'Andrew',
      surname: 'Tate',
      sex: 'M',
      email: 'andrew.tate@email.x',
      role: 'TopG',
      hired: new Date(2021, 5, 6),
    },
    {
      id: 3,
      name: 'Peter',
      surname: 'Griffin',
      sex: 'M',
      email: 'peter.griffin@email.x',
      role: 'Disoccupato',
      hired: new Date(2020,93, 23),
    },    
    {
      id: 4,
      name: 'Ciccio',
      surname: 'Buriccio',
      sex: 'M',
      email: 'ciccio.buriccio@email.x',
      role: 'Receptionist',
      hired: new Date(2022, 1, 2),
    },
    {
      id: 5,
      name: 'Amelia',
      surname: 'Peer',
      sex: 'F',
      email: 'amelia.peer@email.x',
      role: 'Impiegato',
      hired: new Date(2020, 11, 11),
    },
    {
      id: 6,
      name: 'Piero',
      surname: 'Nani',
      sex: 'M',
      email: 'piero.nani@email.x',
      role: 'Sguattero',
      hired: new Date(2019, 3, 16),
    },
    {
      id: 7,
      name: 'Andrew',
      surname: 'Tate',
      sex: 'M',
      email: 'andrew.tate@email.x',
      role: 'TopG',
      hired: new Date(2021, 5, 6),
    },
    {
      id: 8,
      name: 'Peter',
      surname: 'Griffin',
      sex: 'M',
      email: 'peter.griffin@email.x',
      role: 'Disoccupato',
      hired: new Date(2020,93, 23),
    },    
    {
      id: 9,
      name: 'Ciccio',
      surname: 'Buriccio',
      sex: 'M',
      email: 'ciccio.buriccio@email.x',
      role: 'Receptionist',
      hired: new Date(2022, 1, 2),
    },
  ];
      
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(6);

    // Logic for displaying employees
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const headers = ["Nome", "Cognome", "Sesso", "Email", "Ruolo", "Assunto il"];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div>
            <div className="page">
              <h2>Dipendenti Individuali</h2>
            </div>
            <div>
              <TableHeader/>
              {currentEmployees.map((employee) => (
                <Employee_info
                  key={employee.id}
                  name={employee.name}
                  surname={employee.surname}
                  sex={employee.sex}
                  email={employee.email}
                  role={employee.role}
                  hired={employee.hired}
                />
              ))}
              <Pagination
                employeesPerPage={employeesPerPage}
                totalEmployees={employees.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
    );
}

export default Dipendenti_individuali;