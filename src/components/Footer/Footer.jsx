import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

import { navLinks } from "../../constants/constants";

const Container = styled.footer`
    background-color: ${(props) => props.theme.colors.primary.black};
    color: ${(props) => props.theme.colors.neutral.one};
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 8rem 16rem 3.2rem;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5rem;
`;

const Links = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const Content = styled.h6`
    font-size: ${(props) => props.theme.fontSizes.h6};
    font-weight: 400;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
`;

const StyledNavLink = styled(NavLink)`
    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const List = styled.ul`
    display: flex;
    gap: 5rem;
    list-style: none;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid gray;
    padding: 1.6rem 0;
`;

const Copyright = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const NavIcons = styled.div`
    font-size: ${(props) => props.theme.fontSizes.h2};
    display: flex;
    gap: 2rem;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const Footer = () => {
    return (
        <Container>
            <Top>
                <Info>
                    <StyledNavLink to="/">
                        <Title>STITCH.</Title>
                    </StyledNavLink>
                    <Content>|</Content>
                    <Content>Clothes, Gifts & Decorations Store.</Content>
                </Info>

                <nav>
                    <List>
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>
                                <StyledNavLink
                                    to={navLink.url}
                                    activeclassname="active"
                                >
                                    <Links>
                                        {navLink.id}. {navLink.title}
                                    </Links>
                                </StyledNavLink>
                            </li>
                        ))}
                    </List>
                </nav>
            </Top>

            <Bottom>
                <Copyright>
                    <Content>Copyright &copy; 2023 STITCH. All right reserved.</Content>

                    <StyledNavLink to="/">
                        <Content>Privacy Policy</Content>
                    </StyledNavLink>

                    <StyledNavLink to="/">
                        <Content>Terms of Use</Content>
                    </StyledNavLink>
                </Copyright>

                <NavIcons>
                    <Icon>
                        <FaFacebookF />
                    </Icon>
                    <Icon>
                        <FaInstagram />
                    </Icon>
                    <Icon>
                        <FaYoutube />
                    </Icon>
                </NavIcons>
            </Bottom>
        </Container>
    );
};

export default Footer;
