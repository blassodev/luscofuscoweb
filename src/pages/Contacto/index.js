import * as SC from './style';
import {Typography} from "@mui/material";
import email from  "../../img/email.png"
import location from  "../../img/location.png"
import telfo from "../../img/telfo.png";

const Contacto = () => {
    return(
    <SC.MainContainer>
        <SC.TesDubidas>
            <p>TES DÚBIDAS?</p>
            <h1 style={{paddingTop: 10, color: '#6D80F1'}} variant="h2">CONTÁCTANOS</h1>
        </SC.TesDubidas>
        <SC.ThreeIcons>
            <div>
                <img src={email} alt=""/>
                <h2>Escríbenos</h2>
                <Typography>info@luscofusco.com</Typography>
            </div>
            <div>
                <img src={telfo} alt=""/>
                <h2>Chamanos</h2>
                <Typography>666 66 66 66</Typography>
            </div>
            <div>
                <img src={location} alt=""/>
                <h2>Visítanos</h2>
                <Typography>Rúa Antonio Palacios, A-55, Km 305, 36400 O Porriño</Typography>
            </div>
        </SC.ThreeIcons>
    </SC.MainContainer>)
}

export default Contacto;
