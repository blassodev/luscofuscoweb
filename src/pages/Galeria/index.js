import * as SC from './style';
import a1 from './img/189343680_772409976800739_4485330226698245006_n.jpg';
import a3 from './img/212091597_337554414592571_4388549714254091993_n.jpeg';
import a5 from './img/257530959_924169238474272_8995602721897492156_n.jpeg';
const Galeria = () => {
  return (
    <SC.MainContainer>
        <SC.CustomCarousel>
            <div>
                <img src={a1} alt=""/>
            </div>
            <div>
                <img src={a3} alt=""/></div>
            <div>
                <img src={a5} alt=""/></div>

        </SC.CustomCarousel>
    </SC.MainContainer>
  );
};

export default Galeria;
