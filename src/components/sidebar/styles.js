import styled from 'styled-components';

const SideBarStyles = styled.aside`
   width:240px;
   padding: 0 2rem;
   background-color:#FFFAF5;
   ul {
      padding: 1rem 0;
      border-bottom: 1px solid #f3f3f3;
   }
   .menu-item {
      display: flex;
      align-items: center;
      padding: .5rem;
      margin: .75rem 0;
      font-size: 1.375rem;
      font-weight: 500;
      color: #575757;
      :hover {
         color: #11DABC;
         border-right: 4px solid #11DABC;
         box-shadow:  inset 3px 2px 5px 0 rgba(255, 255, 255, .8), rgba(104, 139, 255, 0.1) 7px 3px 4px, rgba(165,165,165, 0.05) 2px 5px 5px;
         border-radius: 5px;
         background-color: #FFF;
      }
   }
   .menu-icon {
      margin-right: 1rem;
      font-size: 1.25rem;
   }
`;

export {SideBarStyles}