import * as SC from './style'
import lluvia from './img/lluvias.png'
import coiris from './img/coiris.png'

const Servizos = () => {
    return (
        <SC.MainContainer>
            <SC.NosoHorario>
                <h1><span style={{color: "#6c81f1"}}>Noso</span> <span style={{color: "#b6c0f6"}}>Horario</span></h1>
                <h2>Lunes - Viernes : 7:30hrs - 18:30hrs (de 16:30 a 18:30 talleres)</h2>
                <SC.Horarios>
                    <div>
                        <img src={lluvia} alt=""/>
                        <h3>Horario mañán</h3>
                        <p>8:00/10:30 - 16:30</p>
                    </div>
                    <div>
                        <img src={coiris} alt=""/>
                        <h3>Horario talleres</h3>
                        <p>16:30 - 18:30</p>
                    </div>
                </SC.Horarios>
                <SC.Alimnacion>
                    <h1 style={{color: "#b6c0f6"}}>Alimentación na escola</h1>
                    <p>A escola conta cos seguintes servizos de alimentación:  almorzo, comida, merenda e servizo de biberón.</p>
                    <h3>Almorzo</h3>
                    <p>
                        O  almorzo de media mañá forma parte dun taller de cociña onde involucramos as crianzas na especial importancia da nutrición, sendo eles os que preparan, cociñan e comen o menú correspondente a cada día. O obxectivo principal é que o  almorzo convértase nunha parte significativa da súa aprendizaxe diaria e compartan o gozo para comer entre iguais, aproventando sempre o que que nos aporte a natureza.
                    </p>
                    <h3>Xantar</h3>
                    <p>
                        O horario de comedor é de 12:00 h a 13:00 h. Este servizo realízao unha empresa externa e contrátase segundo as necesidades das familias.

                        Aos nenos/ as lactantes respectaráselles o seu ritmo en coordinación coas familias para progresivamente ir axustando os horarios ao resto do alumnado.
                    </p>
                </SC.Alimnacion>
            </SC.NosoHorario>
        </SC.MainContainer>
    )
}


export default Servizos;
