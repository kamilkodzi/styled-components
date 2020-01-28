import React from 'react';
//import './Button.css';
import syled, { css } from 'styled-components';


const Button = syled.button`
background:${props=>props.theme.backgroundColor};
border:5px solid ${props=>props.theme.primaryColor};
font-size: 20px;
color:${props=>props.theme.primaryColor};
outline:none;

${props => props.primary && css`
    background:red;
`}

`;

export default Button