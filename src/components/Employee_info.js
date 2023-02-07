import './Employee_info.css';
import Date_object from './Date_object';

function Employee_info(props) {
    
    
    return (
        <div className='employee'>        

            <div className='employee_name'>{props.name}</div>
            <div className='employee_wage'>{props.wage}€/m</div>
            <div className='employee_role'>{props.role}</div>
            <div>dal: <Date_object date={props.hired}/></div>
        </div>
    );
}

export default Employee_info;