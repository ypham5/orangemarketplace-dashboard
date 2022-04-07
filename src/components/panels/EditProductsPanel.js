 import React from 'react';
 import {PanelStyles, PanelBody, PanelHeader} from './styles';

 import {EditProduct} from 'components/products/widgets/EditProduct';
 function EditProductsPanel({title, ...props}){
     return( 
         <PanelStyles>
             <PanelHeader>
                 <h2>{ title || "Display Panel" }</h2>
             </PanelHeader>
             <PanelBody>
                <EditProduct/>
             </PanelBody>
         </PanelStyles>
     );
 }

 export default EditProductsPanel;