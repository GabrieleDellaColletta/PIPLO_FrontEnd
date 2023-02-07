import './Employee_info.css';
import './Card.css';
import Card from './Card';
import Date_object from './Date_object';

function Employee_info(props) {
    
    
    return (
        <Card>        
            <div className='employee'>{props.cod_fisc}</div>
            <div className='employee'>{props.name}</div>
            <div className='employee'>{props.surname}</div>
            <div className='employee'>{props.wage}€/m</div>
            <div className='employee'>{props.role}</div>
            <div className='employee'>dal:&nbsp;<Date_object date={props.hired}/></div>
        </Card>
    );
}

export default Employee_info;