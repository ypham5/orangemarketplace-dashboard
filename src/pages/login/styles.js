import styled from "styled-components";


const LoginPageStyles = styled.section`
  background-color: #fff;
  .flex-container {
    display: flex;
    max-width: 1400px;
    margin: 8rem auto;
    box-shadow: rgba(104, 139, 255, 0.1) 0px 24px 48px 0px, rgba(17, 12, 46, 0.15) 0px 20px 48px 0px;
    border-radius: 10px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #F05523;
  }

  p {
    font-size: 1.125rem;
    color: #B9B9B9;
  }

  .Toastify__toast {
    background-color: #f53131;
      color:white;
  }
  .Toastify__progress-bar--error {
      background-color: #680101;
  }
  .Toastify__close-button {
      color:white;
      opacity:1;
  }
  .Toastify__toast-icon {
      fill:white;
  }

  .left-col {
    position:relative;
    border-radius: 10px;
    box-shadow:  inset 3px 2px 5px 0 rgba(255,255,255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px;
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
  }

  .branding span {
    color: #575757;
  }

  .right-col {
    margin: 5rem 0 0 8.5rem;
    width: 420px;
  }

  .copyright {
    text-align: center;
    color: #D1D1D1;
  }
  `;
const FormControl = styled.div`
  margin: 1rem 0;
`;

export { LoginPageStyles, FormControl }