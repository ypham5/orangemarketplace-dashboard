import styled from 'styled-components';



const ProductPreviewStyles  = styled.div`
      /* styles */
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      border-radius: 5px;
      background-color: #fcfcfc;
      width: 600px;
      min-height: 580px;
      h2{
          font-size:1.75rem;
          color:#374151;
      }
`;


const ProductImage = styled.div`
      display: block;
      margin: 1rem auto;
      width: 600px;
      img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            object-position: center center;
      }
`;

const ProductName = styled.h2`
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 2;
      letter-spacing: 1px;
      color: #1e293b;
      word-wrap: break-word;
      padding: 1rem 2rem;
`;

const ProductPrice = styled.p`
      font-size: 1.25rem;
      font-weight: 200;
      letter-spacing: -1px;
      color: #575757;
      padding: 0 2rem;
`;

const ProductDescription = styled.p`
      font-size: 1rem;
      color: #94a3b8;
      padding: 1rem 2rem 2rem;
`;




export {ProductPreviewStyles, ProductPrice, ProductDescription, ProductImage, ProductName}