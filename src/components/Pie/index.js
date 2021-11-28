import * as SC from './style'

const Pie = () => {
    return (
        <SC.MainContainer>
            <SC.Columns>
                <div>
                    <p>
                        <span style={{fontWeight: 700}}>Ubicacion: </span>
                        Rúa Antonio Palacios, A-55, Km 305, 36400 O Porriño
                    </p>
                </div>
                <div>
                    <p>
                        <span style={{fontWeight: 700}}>Tel: </span>
                        666 66 66 66
                    </p>
                </div>
                <div>
                    <p>
                        <span style={{fontWeight: 700}}>Mail: </span>
                        info@luscofusco.com
                    </p>
                </div>
            </SC.Columns>
        </SC.MainContainer>

    )
}

export default Pie;
