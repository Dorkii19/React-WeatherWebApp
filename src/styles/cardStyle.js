import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${ props => props.backgroundColor };
    min-height: 260px;
    min-width: 320px;
    padding: 35px;
    border: 1px solid #404040;
    box-shadow: 10px 5px #fff;

    @media (max-width: 768px) { 
       min-width: 280px; 
    }
`;

export const Titulo = styled.h1`
    color: #fff;
    font-family: 'Lato', sans-serif; 
    font-size: 23px; 
    font-weight: 300;
    margin-top: -8px; 
    color: #000000;

    @media (max-width: 768px) { 
       font-size: 20px; 
    }
`;

export const Subtitulo = styled.p`
    color: #504F51; 
    font-family: 'Lucida Sans', Arial, sans-serif; 
    font-size: 12px; 
    margin-top: -5px;

    @media (max-width: 768px) { 
       font-size: 11px; 
    }

    span {
        color: #8685EF;
    }
`;

export const Destaque = styled.p`
    position: relative; 
    color: #000000; 
    font-weight: 300;
    font-family: 'Lato', sans-serif; 
    font-size: 75px; 
    margin-top: 25px;
    margin-right: 30px;
    margin-left: 20px;

    .graus {
        position: absolute;
        top: 10px;
        color: #8685EF;
        font-size: 30px;
    }

    .icone {
        float: right;
    }
`;

export const Footer = styled.div`
    margin-top: -20px;
    align-self: flex-start;
`; 

export const Button = styled.button`
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: #8685EF;
`;
