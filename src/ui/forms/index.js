import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: 1.25rem;
    color: #575757;
    margin: 1rem 0;
    font-weight: 500;
`;
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px #F05523;
    font-size:1.25rem;
    padding: 0.5rem 0.75rem;
    outline: none;
    color: ${props => props.color || "#F05523"};
    background-color: ${props => props.backgroundColor || "#FFF"};

    ::placeholder{
        font-size: 1.125rem;
        color: #B9B9B9;
    }
    :focus{
        background-color: #F3F3F3;
    }
`;


export{Input, Label} ;