import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #202020;
    min-height: 670px;
`;

export const Titulo = styled.h1`
    color: #fff;
    font-family: 'Lato', sans-serif; 
    font-size: 40px; 
    font-weight: 300;
    margin: 0px; 

    @media (max-width: 768px) { 
       font-size: 35px; 
    }
`;

export const Texto = styled.p`
    color: #adb7bd; 
    font-family: 'Lucida Sans', Arial, sans-serif; 
    font-size: 16px; 
    margin-bottom: 25px;
    @media (max-width: 768px) { 
       font-size: 14px; 
    }
`;

export const Button = styled.button`
    background: #fe921f;
    color: #fff;
    border: 0;
    outline: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 23px 20px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background: #D16D00;
    }
`;

export const FormInput = styled.input`
    width: 360px;
    background: #fff;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
`;