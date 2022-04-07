import styled from 'styled-components';


const AppBarStyles = styled.nav`
   position:relative;
   padding: 1rem 3rem;
   background-color: ${props => props.bg || "#171717"};
   border-bottom: 1px solid ${props => props.bordercolor || "#E1E1E1"};
`;

const AppBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const AppBarItem = styled.li`
    
`

const AppBarItemGroup = styled.li`
     display:flex;
     gap:0.25rem;
`


 export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems}

 