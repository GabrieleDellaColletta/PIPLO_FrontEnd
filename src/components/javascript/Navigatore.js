import SideNav,{
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Menu from "../unused/Menu";
import Menu_item from "../unused/Menu_item";

function Navigatore(){
    return <SideNav onSelect={selected=> {
            console.log(selected)
        }}  
        >
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected="home">
                <NavItem>
                    <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: 2}}/></NavIcon>
                    <NavText>Presenze</NavText>
                    <NavText>Rimborsi spesa</NavText>
                    <NavText>Richieste/permessi</NavText>
                    <NavText>Documenti</NavText>
                    <NavText>Dipendenti</NavText>
                </NavItem>
            </SideNav.Nav>
                
        </SideNav>

}

export default Navigatore;