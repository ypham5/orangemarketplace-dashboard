 import React from 'react';
 import {PanelStyles, PanelBody, PanelHeader} from './styles';
 import {ViewAllProducts} from 'components/products/ProductCard';
 
 function HomePanel({title, ...props}){
     return( 
         <PanelStyles>
             <PanelHeader>
                 <h2>{ title || "Display Panel" }</h2>
             </PanelHeader>
             <PanelBody>
                <ViewAllProducts/>
             </PanelBody>
         </PanelStyles>
     );
 }

 export default HomePanel;