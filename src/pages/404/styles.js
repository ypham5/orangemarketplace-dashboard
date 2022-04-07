import styled from "styled-components";


const NotFoundPageStyles = styled.section`
  background-color: #fff;
  .flex-container {
    display: flex;
    flex-direction: row-reverse;
    max-width: 1400px;
    margin: 8rem auto;
    box-shadow: rgba(104, 139, 255, 0.1) 0px 24px 48px 0px, rgba(17, 12, 46, 0.15) 0px 20px 48px 0px;
    border-radius: 10px;
  }

  h1 {
    font-size: 10rem;
    font-weight: 900;
    color: #E3E3E3;
    line-height: 1;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #F05523;
  }

  p {
    font-size: 1.5rem;
    color: #B9B9B9;
    margin-bottom: 4rem;
  }

  .left-col {
    position:relative;
    border-radius: 10px;
    box-shadow:  inset 1px 0px 1px 0px rgba(255,255,255, .5), rgba(104, 139, 255, 0.1) 1px -1px 0px, rgba(0,0,0, 0.1) -10px 0px 10px; */
  }

  .branding {
    position:absolute;
    bottom: 0;
    right: 0;
    margin: 0 1.25rem 1.25rem 0;
    text-align: right;
  }

  .branding img {
    width: 280px;
  }

  .branding p {
    text-transform: uppercase;
    color: #B9B9B9;
    letter-spacing: 2px;
    font-size: 1.25rem;
    margin-bottom: 0;
  }

  .branding span {
    color: #575757;
  }

  .right-col {
    padding: 8rem;
    ${'' /* box-shadow:  inset 3px 2px 5px 0 rgba(255,255,255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px; */}
    width: 420px;
    a {
      background-color: ${props => props.bgcolor || '#F05523'};
      color: ${props => props.color || '#f8fafc'}; 
      font-weight: ${props => props.fw || '700'}; 
      font-size: ${props => props.fs || '1.5rem'};
      border: ${props => props.border || 'none'};
      border-radius: ${props => props.radius || "3px"};
      margin: ${props => props.margin || "0"};
      box-shadow: 0 0 3px 1px rgb(220, 220, 220);
      padding: ${props => props.padding || "0.5rem 4.5rem"};
      width: ${props => props.width || "100%"};
      text-decoration: none;
      text-transform: uppercase;
      :hover {
          background-color: ${props => props.bgcolor || '#11DABC'};
          color: ${props => props.color || '#FFF'};
          box-shadow:  inset 3px 2px 5px 0 rgba(255, 255, 255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px;
      }
    }
  }

  .copyright {
    text-align: center;
    color: #D1D1D12;
    margin-bottom: 0;
    font-size: 1.125rem;
  }
  `;


export { NotFoundPageStyles }