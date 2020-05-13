import styled from 'styled-components';

export const WarningContainer = styled.div`
    display: block;
    position: absolute;
    right: 5%;
    top: 5%;
    background: #C35355; 
    min-width: 70px;
    padding: 10px;
    border: .3px solid #1F1B24;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    background: transparent;
    border: none;
    font-size: 9px;
    color: #adb7bd; 
    text-align: right;
`;

export const WarningText = styled.p`
    font-family: 'Lucida Sans', Arial, sans-serif; 
    font-size: 11px;
    color: #adb7bd; 
    text-align: center;
`;