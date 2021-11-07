import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/Image.styled";
import { Button } from "./styles/Button.styled";
export default function Header() {
    return ( 
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='logo' />
                    <Button>Visit my repo</Button>
                </Nav>
                <Flex>
                    <Image  src='./images/illustration-mockups.svg'/>
                </Flex>
            </Container>
        </StyledHeader>

     )
}

