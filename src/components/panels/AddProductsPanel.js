 import React from 'react';
 import {PanelStyles, PanelBody, PanelHeader} from './styles';

 import {AddProduct} from 'components/products/widgets/AddProduct';
 function AddProductsPanel({title, ...props}){
     return( 
         <PanelStyles>
             <PanelHeader>
                 <h2>{ title || "Display Panel" }</h2>
             </PanelHeader>
             <PanelBody>
                <AddProduct/>
             </PanelBody>
         </PanelStyles>
     );
 }

 export default AddProductsPanel;