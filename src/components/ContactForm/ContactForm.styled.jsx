import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid black;
  

  padding:20px;
`;

export const Label = styled.label`
display:flex;
flex-direction:column;
font-size:22px;
margin-bottom:10px;`;

export const Input = styled.input`
    width:300px;
    height:20px;
    font-size:18px;
    padding:3px;
    margin-top:10px;
`;

export const Button = styled.button`
    width:100px;

    /* &:hover{
        background-color:#dsads1;
    } */
`;