import React from 'react';
import { Container, Titulo, Subtitulo, Destaque, Footer } from '../styles/cardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
    let icone;
    switch(props.tempo) {
        case "Clouds":
             icone = <FontAwesomeIcon icon="cloud"/>
             break;
        case "Rain":
            icone = <FontAwesomeIcon icon="cloud-rain"/>
            break;
        case "Snow":
            icone = <FontAwesomeIcon icon="snow-flake"/>
            break;
        default:
            icone = <FontAwesomeIcon icon="sun"/>
    }
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
                    <span className="icone">{icone}</span>
                    </Destaque>
                </div>
                <Footer>
                    <Subtitulo><span>Info by WeatherAPI</span></Subtitulo>
                    <hr></hr>
                </Footer>
            </Container>
        </div>
    );
}

export default Card;