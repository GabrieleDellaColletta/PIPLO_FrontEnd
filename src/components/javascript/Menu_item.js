import "../css/Menu_item.css";

function Menu_item(props){
    return(
        <div className="item">
            <div>{props.content}</div>
        </div>

    );

}
export default Menu_item;