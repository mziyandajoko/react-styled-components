import  styled  from "styled-components";


export  const Image = styled.img`
width: 375px;
margin-left: 30px;
display: flex;

@media(max-width: ${({theme}) => theme.mobile}){
    
    flex-direction: column;
    align-items: center;
    margin: 40px 0px 30px;
}
`