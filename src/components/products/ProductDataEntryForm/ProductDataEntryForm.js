import React from 'react';

import { ProductDataEntryFormStyles, ProductDescription, ProductPrice, ProductName, ProductImage } from './styles'
import { ProductImageDropBox } from '../ProductImageDropBox';
import { Label, Input } from 'ui/forms';
import { TextArea } from 'ui/forms/textarea';
import {SubmitButton} from 'ui/buttons';
function ProductDataEntryForm({ children, handleProductName, handleProductPrice, handleSubmit, handleProductDescription, setProductImage,...props }) {
  return (
    <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage}/>
      </ProductImage>
      <fieldset>
      <ProductName>
        <Label>Product Name</Label>
        <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
      </ProductName>
      <ProductPrice
      ><Label>Product Price</Label>
        <Input width="200px" onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
      </ProductPrice>
      </fieldset>
      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={250} rows={6}/>
      </ProductDescription>

      <div>
        <SubmitButton width="100%" padding=".75rem 0" margin="1.125rem 0 0 0" type="submit">Add Product</SubmitButton>
      </div>

    </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm