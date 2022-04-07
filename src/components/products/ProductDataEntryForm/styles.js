import styled from 'styled-components';



const ProductDataEntryFormStyles = styled.form`
      width: 600px;
      margin-right: 6rem;
      input:focus, textarea:focus{
          border-color: #F05523;
          background-color: #FEFEFE;
      }
      fieldset{
          display: flex;
          gap: 3rem;
          margin-bottom: 1.5rem;
      }
`;

const ProductImage = styled.div`
 
`;

const ProductName = styled.div`
    flex:3.5;
`;

const ProductPrice = styled.div`
    flex:1.5;
`;

const ProductDescription = styled.div`
    textarea{
        resize: none;
        font-size: 1rem;
        width: 582px;
        margin-bottom: 1rem;
    }
`;


export { ProductDataEntryFormStyles, ProductDescription, ProductPrice, ProductName, ProductImage }