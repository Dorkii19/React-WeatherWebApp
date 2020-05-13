import React from 'react';
import { Container, Titulo, Subtitulo, Destaque, Footer, Button } from '../styles/cardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
    return(
        <div className="cardWrap">
            <Container backgroundColor= "#F1F1F1">
                <div className="titleWrap">
                    <Titulo>Sao borja</Titulo>
                    <Subtitulo>Quarta, 18:58 PM,  <span>Nublado</span></Subtitulo>
                </div>
                <div className="contentWrap">
                    <Destaque>
                    38<span className="graus">°C</span>
                    <span className="icone"><FontAwesomeIcon icon="cloud"/></span>
                    </Destaque>
                </div>
                <Footer>
                    <Button>Ver mais</Button>
                    <hr></hr>
                </Footer>
                {/* <Titulo></Titulo> 
                    <Data></Data><Tipo>
                    <Temperatura> <Icone>
                    <Botao expandir embaixo para ver mais dias>
                */}
                {/*  */}
            </Container>
        </div>
    );
}

export default Card;