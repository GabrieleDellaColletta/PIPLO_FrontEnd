//import '../css/page.css';
import '../../App.css';
import Employee_info from '../javascript/Employee_info';
import Employee_display from '../unused/Employee_display';
function Dipendenti_individuali(){

    const employees = [
        {
          id: 0,
          //img: '..\..\img\andrewTate.jpeg',
          name: 'Amelia',
          surname: 'Peer',
          sex: 'F',
          email: 'amelia.peer@email.x',
          role: 'Impiegato',
          wage: 1500,
          hired: new Date(2020, 11, 11),
        },
        {
          id: 1,
          //img: '..\..\img\andrewTate.jpeg',
          name: 'Piero',
          surname: 'Nani',
          sex: 'M',
          email: 'piero.nani@email.x',
          role: 'Sguattero',
          wage: 1200, 
          hired: new Date(2019, 3, 16),
        },
        {
          id: 2,
          //img: "../../img/andrewTate.jpeg",
          name: 'Andrew',
          surname: 'Tate',
          sex: 'M',
          email: 'andrew.tate@email.x',
          role: 'TopG',
          wage: 99999,
          hired: new Date(2021, 5, 6),
        },
        {
          id: 3,
          //img: '..\..\img\andrewTate.jpeg',
          name: 'Peter',
          surname: 'Griffin',
          sex: 'M',
          email: 'peter.griffin@email.x',
          role: 'Disoccupato',
          wage: 200,
          hired: new Date(2020,93, 23),
        },    
        {
          id: 4,
          //img: '..\..\img\andrewTate.jpeg',
          name: 'Ciccio',
          surname: 'Buriccio',
          sex: 'M',
          email: 'ciccio.buriccio@email.x',
          role: 'Receptionist',
          wage: 3,
          hired: new Date(2022, 1, 2),
        },
      ];

    return(
        <div>
            <div className="page"><h2>Dipendenti Individuali</h2></div>
            
        <div>
        <Employee_info
          
          //img={employees[0].img}
          name={employees[0].name}
          surname={employees[0].surname}
          sex={employees[0].sex}
          email={employees[0].email}
          role={employees[0].role}
          wage={employees[0].wage}
          hired={employees[0].hired}
        />
        <Employee_info
          
          //img={employees[1].img}
          name={employees[1].name}
          surname={employees[1].surname}
          sex={employees[0].sex}
          email={employees[1].email}
          role={employees[1].role}
          wage={employees[1].wage}
          hired={employees[1].hired}
        />
        <Employee_info
          
          //img={employees[2].img}
          name={employees[2].name}
          surname={employees[2].surname}
          sex={employees[0].sex}
          email={employees[2].email}
          role={employees[2].role}
          wage={employees[2].wage}
          hired={employees[2].hired}
        />
        <Employee_info
          
          //img={employees[3].img}
          name={employees[3].name}
          surname={employees[3].surname}
          sex={employees[0].sex}
          email ={employees[3].email}
          role={employees[3].role}
          wage={employees[3].wage}
          hired={employees[3].hired}
        />
        <Employee_info 
          
          //img={employees[4].img}
          name={employees[4].name}
          surname={employees[4].surname}
          sex={employees[0].sex}
          email ={employees[4].email} 
          role={employees[4].role} 
          wage={employees[4].wage}
          hired={employees[4].hired}
        />
  
        


    </div>
        </div>
    );
}

export default Dipendenti_individuali;

