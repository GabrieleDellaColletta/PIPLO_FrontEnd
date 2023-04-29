import '../css//Date_object.css';

function Date_object(props) {
    const date = props.date.toLocaleDateString();

    return(
        <div>
            <div>{date}</div>
        </div>
    );

}

export default Date_object;