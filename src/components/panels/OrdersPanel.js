 import React from 'react';
 import {PanelStyles, PanelBody, PanelHeader} from './styles';

 function OrdersPanel({title, ...props}){
     return( 
         <PanelStyles>
             <PanelHeader>
                 <h2>{ title || "Display Panel" }</h2>
             </PanelHeader>
             <PanelBody>

             </PanelBody>
         </PanelStyles>
     );
 }

 export default OrdersPanel;