import '../../App.css';
import Card from './Card';

function TableHeader(props) {
    return (
        <Card>
            <div className="table">
                <div className='container'>{props.cod_fisc}</div>
                <div className='employee-name'>{props.name}</div>
                <div>&nbsp;</div>
                <div className='employee-surname'>{props.surname}</div>
                <div className='employee-role'>{props.role}</div>
                <div className='employee-hired'>dal:&nbsp;<Date_object date={props.hired}/></div>
            </div>
        </Card>
    );
}

export default TableHeader;