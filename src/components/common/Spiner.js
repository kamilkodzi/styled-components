import React from 'react';
import styled,{keyframes} from 'styled-components';

const rotate360=keyframes`
from{
    transform: rotate(0);
}

to{
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
height:50px;
width:50px;
border-radius:50%;
border: 5px solid black;
border-top-color:transparent;
border-bottom-color:transparent;
border-left-color:green;
border-right-color:blue;

animation: ${rotate360} 1s linear infinite
`;

export default Spinner;