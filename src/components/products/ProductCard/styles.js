import styled from 'styled-components';

const AllProductsPanel = styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 2rem 0;
`;

const ProductCardStyles  = styled.div`
      /* styles */
      /*box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;*/
      box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
      border: 2px solid #f3f3f3;
      border-radius: 5px;
      background-color: #fcfcfc;
      width: 420px;
      margin-bottom: 3rem;
      min-height: 580px;
      /* h2{
          font-size: 1.375rem;
          color: #374151;
      } */
`;


const ProductImage = styled.div`
      display: block;
      margin: 1rem auto;
      width: 420px;
      img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center center;
      }
`;

const ProductName = styled.h2`
      font-family: 'Rubik', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2;
      color: #171717;
      word-wrap: break-word;
      padding: 1rem 2rem;
`;

const ProductPrice = styled.p`
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: #8f8f8f;
      padding: 0 2rem;
`;

const ProductDescription = styled.p`
      font-size: 1rem;
      color: #3c3c3c;
      padding: 1rem 2rem 2rem;
`;

const CardHeader = styled.div`
  display: inline-flex;
  padding-left: 19rem;
`;

export {AllProductsPanel,ProductCardStyles, ProductPrice, ProductDescription, ProductImage, ProductName, CardHeader}