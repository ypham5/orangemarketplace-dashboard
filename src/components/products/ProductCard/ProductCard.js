import React from 'react';
import { Link } from 'react-router-dom';
import {AllProductsPanel, ProductCardStyles, ProductDescription, ProductPrice, ProductName, ProductImage, CardHeader} from './styles';
import { IconButton } from 'ui/buttons';
import { useGetAllProducts } from 'hooks/useGetAllProducts';
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi';

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, imageUrl, productDescription} = {...product}
  return (
        <ProductCardStyles>
            <CardHeader>
            <Link to="edit" key={product.uid}>
                <IconButton id="edit">
                    <HiPencilAlt/>
                </IconButton>
            </Link>
                <IconButton id="delete" onclick="confirmation()">
                    <HiOutlineTrash/>
                </IconButton>
            </CardHeader>
            <ProductImage>
               <img src={imageUrl} alt="{productName}" width="320" height="200"/>
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
         </ProductCardStyles>
    )
  }

function ViewAllProducts() {
    const productData = useGetAllProducts()
    return (
        <AllProductsPanel>
            {/* {productData?  productData.slice(0, 3).map(product=><ProductCard key={product.uid} product={product}/>) : null} */}
            {productData?  productData.map(product=><ProductCard key={product.uid} product={product}/>) : null}
        </AllProductsPanel>
    )
}
export default ViewAllProducts;