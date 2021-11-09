import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/ImageStyled.styled";
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
                    <div>
                    <Button>visit my resume</Button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting,</p>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt=""/>
                </Flex>
            </Container>
        </StyledHeader>

     )
}

