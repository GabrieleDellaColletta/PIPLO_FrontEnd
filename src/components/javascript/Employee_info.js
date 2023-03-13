import '../css/Employee_info.css';
//import '../../App.css';
import Card from './Card';
import Date_object from './Date_object';

function Employee_info(props) {
    
    
    return (
        <Card>
            <div className="employee">
                <div className='container'>{props.cod_fisc}</div>
                <div className='employee-description'>
                    <h2>
                        {props.name}{props.surname}
                    </h2>
                </div>
                <div className='employee-wage'>{props.wage}€/m</div>
                <div className=''>{props.role}</div>
                <div className=''>dal:&nbsp;<Date_object date={props.hired}/></div>
            </div>
        </Card>
    );
}

export default Employee_info;