import './Date_object.css';

function Date_object(props) {
    const date_1 = new Date(2023, 2, 6);
    const date = props.date.toISOString();

    return(
        <div>
            <div>{date}</div>
        </div>
    );

}

export default Date_object;