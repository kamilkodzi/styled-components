import React from 'react';
import styled, {attrs} from 'styled-components';

const PasswordInput = styled.input.attrs(props=>({
    type: props.showPassword?'text':'password'
}))`
border-radius:3px;
outline:none;
border:1px solid;
border-color:black;
&:focus{
border-radius:blue;
}
`;


export default PasswordInput;