import React from 'react';

import {ProductPreviewStyles, ProductDescription, ProductPrice, ProductName, ProductImage} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, productDescription, ...props})  {
  return (
        <ProductPreviewStyles {...props}>
           <ProductImage>
              <img src={productImage.previewImage} alt="Orange Sneakers Marketplace" width="320" height="200"/>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>${productPrice}</ProductPrice>
           <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductPreview