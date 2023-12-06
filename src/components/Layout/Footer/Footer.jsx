import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

import { navLinks } from "../../../constants/constants";

const Container = styled.footer`
    background-color: ${(props) => props.theme.colors.primary.black};
    color: ${(props) => props.theme.colors.neutral.one};
    display: flex;
    flex-direction: column;
    gap: 4.9rem;
    padding: 8rem 16rem 3.2rem;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.div`
    display: flex;
    gap: 3.2rem;
`;

const Logo = styled.div`
    font-family: "Poppins", sans-serif;
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.headings.s5};

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const Slogan = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

const Line = styled.div`
    height: 3rem;
    border-left: 0.25rem solid #6c7275;
`;

const Desc = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.body.c1};
    font-weight: 400;
`;

const Nav = styled.nav``;

const Items = styled.ul`
    display: flex;
    gap: 4rem;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.neutral.two};

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }

    &.active {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const Item = styled.li`
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    font-weight: 500;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.6rem 0;
    border-top: 1px solid #6c7275;
`;

const Copyright = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;

const Social = styled.div`
    display: flex;
    gap: 1.6rem;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.headings.s6};
    display: flex;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const Footer = () => {
    return (
        <Container>
            <Content>
                <Info>
                    <Logo>
                        <NavLink to="/">
                            <Title>STITCH.</Title>
                        </NavLink>
                    </Logo>

                    <Slogan>
                        <Line />
                        <Desc>Clothes, Gifts & Decorations Store.</Desc>
                    </Slogan>
                </Info>

                <Nav>
                    <Items>
                        {navLinks.map((navLink) => (
                            <Item key={navLink.id}>
                                <StyledNavLink
                                    to={navLink.url}
                                    activeclassname="active"
                                >
                                    {navLink.id}. {navLink.title}
                                </StyledNavLink>
                            </Item>
                        ))}
                    </Items>
                </Nav>
            </Content>

            <Bottom>
                <Copyright>
                    <Desc>Copyright &copy; 2023 STITCH. All right reserved.</Desc>

                    <StyledNavLink to="/about">
                        <Desc>Privacy Policy</Desc>
                    </StyledNavLink>

                    <StyledNavLink to="/about">
                        <Desc>Terms of Use</Desc>
                    </StyledNavLink>
                </Copyright>

                <Social>
                    <Icon>
                        <IoLogoFacebook />
                    </Icon>
                    <Icon>
                        <IoLogoInstagram />
                    </Icon>
                    <Icon>
                        <IoLogoYoutube />
                    </Icon>
                </Social>
            </Bottom>
        </Container>
    );
};

export default Footer;
