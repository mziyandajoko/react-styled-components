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
    marign-bottom: 4px;
    `

    export const Logo = styled.img`
     `