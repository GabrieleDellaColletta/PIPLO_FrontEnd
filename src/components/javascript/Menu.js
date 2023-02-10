import "../css/Menu.css";
import Menu_item from "./Menu_item";

function Menu(){
    return(
        <div className="container">
            <Menu_item content={'Presenze'}/>
            <Menu_item content={'Rimborsi spesa'}/>
            <Menu_item content={'Richieste ferie/permessi'}/>
            <Menu_item content={'Documenti'}/>
            <Menu_item content={'Dipendenti'}/>
        </div>
    );

}

export default Menu;