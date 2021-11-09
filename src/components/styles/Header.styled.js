import  styled from "styled-components";


export const StyledHeader = styled.header`
    padding: 2rem 0;
    background-color: ${({theme}) => theme.colors.header};

    h1 {
        color: ${({theme}) => theme.colors.heading};

        &:hover { 
           color: green;
        }
    }
    `
// Navigation styles
export const Nav = styled.nav`
    display: flex;
    align-itmes: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
    `

    export const Logo = styled.img`
    @media(max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 30px;
    }

     `
    