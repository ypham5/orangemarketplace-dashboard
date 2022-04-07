import styled from 'styled-components';

const Button = styled.button`
 
background-color: ${props => props.bc || "transparent"};
border: ${props => props.border || 'none'};
border-radius: ${props => props.radius || "3px"};
margin: ${props => props.margin || "0"};
box-shadow: 0 0 3px 1px rgb(220, 220, 220);
padding: ${props => props.padding || "0.5rem 1.5rem"};
color: ${props => props.color || "#F05523"};
font-size: ${props => props.fs || "1rem"};
width: ${props => props.width || "100%"};
outline: none;
`;

const IconButton = styled(Button)`
     box-shadow:none;
     padding: .25rem .5rem;
     font-size: 2rem; 
     color:#F05523;
     :hover {
        color:#11DABC;  
     }
     :focus{
        outline: none;
    }
`

const LogOutButton = styled(Button)`
    background-color: ${props => props.bgcolor || '#F05523'};
    color: ${props => props.color || '#f8fafc'}; 
    font-weight: ${props => props.fw || '700'}; 
    font-size: ${props => props.fs || '1.125rem'};
    text-transform: uppercase;
    letter-spacing: ${props => props.letterspacing 
    || '1px'};
    :hover {
        background-color: ${props => props.bgcolor || '#11D9BA'};
        color: ${props => props.color || '#FFF'};
        box-shadow:  inset 3px 2px 5px 0 rgba(255, 255, 255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px;
    }
`
const SubmitButton = styled(Button)`
    background-color: ${props => props.bgcolor || '#F05523'};
    color: ${props => props.color || '#F8FAFC'}; 
    font-weight: ${props => props.fw || '700'}; 
    font-size: ${props => props.fs || '1rem'};
    :hover {
        background-color: ${props => props.bgcolor || '#11D9BA'};
        color: ${props => props.color || '#FFF'};
        box-shadow:  inset 3px 2px 5px 0 rgba(255, 255, 255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px;
    }
`

export {Button, LogOutButton, SubmitButton, IconButton}


 
 