 import  styled  from "styled-components";

export const Button = styled.button`
background-color: ${({bg}) => bg || '#fff' };
color: ${({color}) => color || '#333'},
border: none;
font-size: 1rem;
font-weight: 700;
padding: 1rem 4rem;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

:hover{
    opacity: 0.15em;
}
`
 