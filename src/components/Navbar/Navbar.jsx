import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiSearch, CiUser, CiShop } from "react-icons/ci";

import { navLinks } from "../../constants/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5rem;
`;

const Content = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const Notification = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.two};
    display: flex;
    justify-content: center;
    padding: 1rem;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 16rem;
`;

const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.neutral.four};

    &.active {
        color: ${(props) => props.theme.colors.primary.black};
    }
`;

const List = styled.ul`
    display: flex;
    gap: 5rem;
    list-style: none;
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
`;

const Cart = styled.div`
    position: relative;
    display: flex;
`;

const Span = styled.span`
    background-color: ${(props) => props.theme.colors.secondary.blue};
    font-size: ${(props) => props.theme.fontSizes.base};
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    right: -1rem;
    top: -1rem;
`;

const Navbar = () => {
    return (
        <Container>
            <Notification>
                <Content>🇵🇸 FREE PALESTINE! 🇵🇸</Content>
            </Notification>

            <Nav>
                <NavLink to="/">
                    <Title>STITCH.</Title>
                </NavLink>

                <List>
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}>
                            <StyledNavLink
                                to={navLink.url}
                                activeclassname="active"
                            >
                                <Content>
                                    {navLink.id}. {navLink.title}
                                </Content>
                            </StyledNavLink>
                        </li>
                    ))}
                </List>

                <NavIcons>
                    <Icon>
                        <CiSearch />
                    </Icon>
                    <Icon>
                        <CiUser />
                    </Icon>
                    <Icon>
                        <Cart>
                            <CiShop />
                            <Span>0</Span>
                        </Cart>
                    </Icon>
                </NavIcons>
            </Nav>
        </Container>
    );
};

export default Navbar;
