import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as SC from "./style";
import coiris from '../Servizos/img/coiris.png';
import lunita from './img/lunita.png';
import porasones from './img/porasones.png';
import poto from './img/poto.png';

const Main = () => {
    return(
        <SC.MainContainer>
            <h1 style={{textAlign: "center"}}> <span style={{color: "#6c81f1"}}>Sobre</span> <span style={{color: "#b6c0f6"}}>Nós</span></h1>
            <SC.HorizontalContainer>
                <div>
                    <SC.ImageIcon src={lunita} alt=""/>
                    <h3>Quen somos nos?</h3>
                    <p>Somos unha escola infantil que se basa nunha educación innovadora, onde fomentamos a creatividade e a autonomía a través do entorno natural no que estamos situados. </p>
                </div>
                <div>
                    <SC.ImageIcon src={coiris} alt=""/>
                    <h3>Como traballamos?</h3>
                    <p>Basamos a nosa maneira de traballar na necesidade das crianzas por adquirir autonomía a través de experiencias naturais que poidan relacionar co seu día a día.</p>
                </div>
                <div>
                    <SC.ImageIcon src={porasones} alt=""/>
                    <h3>Onde nos atopamos ? </h3>
                    <p>Atopámonos na Rúa Antonio Palacios, A-55, Km 305, 36400 O Porriño, Pontevedra.
                        A nosa escola a pesar de estar no centro de O Poriiño, nos atopamos no monte da Risca, rodeados dun entrorno totalmente natural
                    </p>
                </div>
            </SC.HorizontalContainer>
            <SC.ImagenGorda src={poto} alt=""/>
        </SC.MainContainer>

    )
}

export default Main;
