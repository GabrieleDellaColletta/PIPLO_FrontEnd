import './Calendar.css';

function Calendar(calendar_props) {
    return(
        <div>
            <div>{calendar_props.date.toLocalString('es-US',{month: 'long'})}</div>
            <div></div>
            <div></div>
        </div>
    );

}

export default Calendar;