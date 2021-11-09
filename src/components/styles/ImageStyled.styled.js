import  styled  from "styled-components";


export  const Image = styled.img`
width: 375px;
margin-left: 30px;
display: flex;

@media(max-width: ${({theme}) => theme.mobile}){
    // text-align: center;
    flex-direction: column;
    align-itmes: center;
}
`