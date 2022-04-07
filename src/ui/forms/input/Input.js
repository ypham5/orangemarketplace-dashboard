import styled from 'styled-components';

 
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};
    border-radius: ${props => props.radius || "3px"};
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "1.25rem"};
    padding: ${props => props.padding || "0.5rem 0.75rem"};
    color: ${props => props.color || "#F05523"};
    background-color: ${props => props.backgroundColor || "#11DABC"};

    ::placeholder{
        font-size: .875rem;
        color: #94a3b8;
    }
    :focus{
        background-color: #f3f3f3;
    }
`;



 

export{  Input } ;
 
