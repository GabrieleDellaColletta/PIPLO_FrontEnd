//import '../css/page.css';
import '../../App.css';
import Employee_info from '../javascript/Employee_info';
import TableHeader from '../javascript/TableHeader';
import Employee_display from '../unused/Employee_display';

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
      ];
    const headers = ["Nome", "Cognome", "Sesso", "Email", "Ruolo", "Assunto il"];
    return(
        <div>
            <div className="page">
              <h2>Dipendenti Individuali</h2>
              
            </div>
            <div> 
              <TableHeader/>
              <Employee_info
                name={employees[0].name}
                surname={employees[0].surname}
                sex={employees[0].sex}
                email={employees[0].email}
                role={employees[0].role}
                hired={employees[0].hired}
              />
              <Employee_info
                name={employees[1].name}
                surname={employees[1].surname}
                sex={employees[1].sex}
                email={employees[1].email}
                role={employees[1].role}
                hired={employees[1].hired}
              />
              <Employee_info
                name={employees[2].name}
                surname={employees[2].surname}
                sex={employees[2].sex}
                email={employees[2].email}
                role={employees[2].role}
                hired={employees[2].hired}
              />
              <Employee_info
                name={employees[3].name}
                surname={employees[3].surname}
                sex={employees[3].sex}
                email ={employees[3].email}
                role={employees[3].role}
                hired={employees[3].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[4].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[4].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[4].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[4].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info
                name={employees[1].name}
                surname={employees[1].surname}
                sex={employees[1].sex}
                email={employees[1].email}
                role={employees[1].role}
                hired={employees[1].hired}
              />
              <Employee_info
                name={employees[2].name}
                surname={employees[2].surname}
                sex={employees[2].sex}
                email={employees[2].email}
                role={employees[2].role}
                hired={employees[2].hired}
              />
              <Employee_info
                name={employees[3].name}
                surname={employees[3].surname}
                sex={employees[0].sex}
                email ={employees[3].email}
                role={employees[3].role}
                hired={employees[3].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              /><Employee_info
              name={employees[1].name}
              surname={employees[1].surname}
              sex={employees[0].sex}
              email={employees[1].email}
              role={employees[1].role}
              hired={employees[1].hired}
              />
              <Employee_info
                name={employees[2].name}
                surname={employees[2].surname}
                sex={employees[0].sex}
                email={employees[2].email}
                role={employees[2].role}
                hired={employees[2].hired}
              />
              <Employee_info
                name={employees[3].name}
                surname={employees[3].surname}
                sex={employees[0].sex}
                email ={employees[3].email}
                role={employees[3].role}
                hired={employees[3].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
              <Employee_info 
                name={employees[4].name}
                surname={employees[4].surname}
                sex={employees[0].sex}
                email ={employees[4].email} 
                role={employees[4].role} 
                hired={employees[4].hired}
              />
          
              


            </div>
          s</div>
    );
}

export default Dipendenti_individuali;

