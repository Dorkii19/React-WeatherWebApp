import React from 'react';
import { WarningContainer, CloseButton, WarningText } from '../styles/warningStyle';

function Warning(props) {
    return(
        <WarningContainer>
            <CloseButton onClick={props.onClickWarning}>X</CloseButton>
            <WarningText>{props.text}</WarningText>
        </WarningContainer>
    );
}

export default Warning;