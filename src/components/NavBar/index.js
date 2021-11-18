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
                        <Link>
                            <span>
                                Inicio
                            </span>
                        </Link>
                    </li>
                    <li><Link to=""><span>Metodoloxía</span></Link></li>
                    <li><Link to=""><span>Servizos</span></Link></li>
                    <li><Link to=""><span>Aulas</span></Link></li>
                    <li><Link to=""><span>Equipo</span></Link></li>
                    <li><Link to=""><span>Galeria</span></Link></li>
                    <li><Link to=""><span>Contacto</span></Link></li>
                </SC.NavButtons>
            </SC.MainContainer>


        </>

    )
}

export default NavBar;
