import '../../App.css';
import Card from './Card';
import Date_object from './Date_object';

function TableHeader(props) {
    return (
        <Card>
            <div className="table-header">
                <div className='table-header-1'>Nome</div>
                <div className='table-header-2'>Cognome</div>
                <div className='table-header-3'>Sesso</div>
                <div className='table-header-4'>Email</div>
                <div className='table-header-5'>Ruolo</div>
                <div className='table-header-6'>Assunto</div>
            </div>
        </Card>
    );
}

export default TableHeader;