import styled from 'styled-components';

const PanelStyles = styled.section`
 flex: 1;
 background-color: #FFF;
 border-radius: 30px 0 0 30px;
 padding: 2rem 4rem;
 overflow-y: scroll;
`;

const PanelHeader = styled.header`
 h2 {
     font-size: 1.5rem;
     font-weight: 600;
     text-transform: uppercase;
     letter-spacing: 1px;
     color: #A5A5A5;
     margin-bottom: 1rem;
 }
`;

const PanelBody = styled.div`
    margin: ${props => props.margin || "0"};
`;

export {PanelStyles, PanelBody, PanelHeader};