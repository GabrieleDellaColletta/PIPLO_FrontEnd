import SideNav,{
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Menu from "../unused/Menu";
import Menu_item from "../unused/Menu_item";
import "../css/navigatore.css";
import '../../App.css';
import { useNavigate } from "react-router-dom";

import ClickOutside from "./ClickOutside";


//icone provenienti da https://fontawesome.com/icons/

function Navigatore(){
    const naviga = useNavigate();

    return <div>
            <SideNav  onSelect= {selected=> { console.log(selected); naviga('/'+ selected) } } className = "navigatore">
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="Presenze">

                    <NavItem eventKey="Presenze">
                        <NavIcon><i className='fa-solid fa-calendar-check' style={{fontSize: 20}}/></NavIcon>
                        <NavText>Presenze</NavText>
                    </NavItem>

                    <NavItem eventKey="Rimborsi_spesa">
                        <NavIcon><i className='fa-solid fa-receipt' style={{fontSize: 20}}/></NavIcon>
                        <NavText>Rimborsi spesa</NavText>
                    </NavItem>

                    <NavItem eventKey="Richieste_permessi">
                        <NavIcon><i className='fa-solid fa-question' style={{fontSize: 20}}/></NavIcon>
                        <NavText>Richieste/permessi</NavText>
                    </NavItem>

                    <NavItem eventKey="Documenti">
                        <NavIcon><i className='fa-solid fa-file' style={{fontSize: 20}}/></NavIcon>
                        <NavText>Documenti</NavText>
                    </NavItem>

                    <NavItem eventKey="Dipendenti">
                        <NavIcon><i className='fa-solid fa-users' style={{fontSize: 20}}/></NavIcon>
                        <NavText>Dipendenti</NavText>

                        <NavItem eventKey="Dipendenti_individuali">
                            <NavText>Individuali</NavText>
                        </NavItem>

                        <NavItem eventKey="Dipendenti_gruppi">
                            <NavText>Gruppi</NavText>
                        </NavItem>
                    </NavItem>

                </SideNav.Nav>
                    
            </SideNav>
        </div>

}

export default Navigatore;