//import '../css/Employee_info.css';
import '../../App.css';
import Card from './Card';
import Date_object from './Date_object';

function Employee_info(props) {
    return (
        <Card>
            <div className="employee">
                <div className='container'>{props.cod_fisc}</div>
                
                <div className='employee-name'>{props.name}</div>
                <div className='employee-surname'>{props.surname}</div>
                <div className='employee-wage'>{props.wage}€/m</div>
                <div className='employee-role'>{props.role}</div>
                <div className='employee-hired'>dal:&nbsp;<Date_object date={props.hired}/></div>
            </div>
        </Card>
    );
}

export default Employee_info;