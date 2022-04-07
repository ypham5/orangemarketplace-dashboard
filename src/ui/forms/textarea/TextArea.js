import styled from 'styled-components';

 
const TextArea = styled.textarea`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 2px 1px #f05523;
    font-size: ${props => props.fs || "1.125rem"};;
    padding: ${props => props.padding || "0.35rem 0.5rem"};
    background-color: ${props => props.bgc || "#FFF"};
    color: ${props => props.color || "#F05523"};
;

    ::placeholder{
        font-size: 1rem;
        color: #94a3b8;
    }
    :focus{
        background-color: #f8fafc;
    }
`;

 

export{  TextArea } ;
 
