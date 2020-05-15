import React from 'react';
import { Container, Titulo, Subtitulo, Destaque, Footer, Button } from '../styles/cardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
    return(
        // °C °F
        <div className="cardWrap">
            <Container backgroundColor= "#F1F1F1">
                <div className="titleWrap">
                    <Titulo>{props.cidade}</Titulo>
                    <Subtitulo>{props.data},  <span>{props.tempo}</span></Subtitulo>
                </div>
                <div className="contentWrap">
                    <Destaque>
                    {props.temperatura}<span className="graus">{props.unidade}</span>
                    <span className="icone"><FontAwesomeIcon icon="cloud"/></span>
                    </Destaque>
                </div>
                <Footer>
                    <Button>Ver mais</Button>
                    <hr></hr>
                </Footer>
            </Container>
        </div>
    );
}

export default Card;