import styled from 'styled-components';



const getColor = (props) => {
    if (props.isDragAccept) {
        return '#11DABC';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#11DABC';
    }
    return '#eeeeee';
  }
  
  const ProductImageDropBoxStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color:#f8fafc;
    color: #f05523;
    text-transform: uppercase;
    outline: none;
    transition: border .24s ease-in-out;
    font-size:.875rem;
    font-weight: 300;
    margin-bottom: 1rem;
    :hover{
      border-color: #F05523;
      background-color: #fcfcfc;
    }
  `;
 

export {ProductImageDropBoxStyles}