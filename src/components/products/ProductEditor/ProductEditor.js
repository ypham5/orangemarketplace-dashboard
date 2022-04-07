import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm';
import {ProductPreview} from './../ProductPreview';
import {ProductEditorStyles} from './styles';
 
function ProductEditor ({children, productName, productPrice, productDescription, productImage, handleSubmit, handleProductName, handleProductPrice, handleProductDescription, setProductImage, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
           <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            handleProductDescription={handleProductDescription}
            setProductImage={setProductImage}
            handleSubmit={handleSubmit}
           />
           <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productDescription={productDescription}
            productImage={productImage}
           />
        </ProductEditorStyles>
  )
}

export default ProductEditor