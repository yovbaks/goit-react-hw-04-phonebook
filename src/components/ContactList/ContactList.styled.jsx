import styled from "styled-components";

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 10px;
    
}
display: flex;
align-items: center;
font-size: 22px;
`;

export const Contact = styled.p`
margin-top:0px;
margin-right:15px;
margin-bottom:5px;
`;

export const Button = styled.button`
padding: 5px ;
font-size: 10px;
width: 20px;
background-color: #e5dada;
border: 1px solid black;
border-radius: 5px;
color: #0f0e0e;
`