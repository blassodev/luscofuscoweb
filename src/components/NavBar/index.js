import {Link} from "react-router-dom";
import * as SC from './style';
import {HelpOutline} from "@mui/icons-material";

const NavBar = () => {
    return (
        <>
            <SC.PreNav>
                <div style={{display: "flex",cursor: "pointer", justifyContent: "flex-end", padding: 5}}>
                    <HelpOutline style={{color:"#6c81f1" }} />Información sobre a petición de matrículas 2022-2023
                </div>
            </SC.PreNav>
            <SC.MainContainer>
                <img src="https://dummyimage.com/155x87/efd110/433945" alt="logo"/>
                <SC.NavButtons>
                    <li>
                        <Link to="/">
                            <span>
                                Inicio
                            </span>
                        </Link>
                    </li>
                    <li><Link to="/metodoloxia"><span>Metodoloxía</span></Link></li>
                    <li><Link to="/servizos"><span>Servizos</span></Link></li>
                    <li><Link to="/aulas"><span>Aulas</span></Link></li>
                    <li><Link to="/equipo"><span>Equipo</span></Link></li>
                    <li><Link to="/galeria"><span>Galeria</span></Link></li>
                    <li><Link to="/contacto"><span>Contacto</span></Link></li>
                </SC.NavButtons>
            </SC.MainContainer>


        </>

    )
}

export default NavBar;
