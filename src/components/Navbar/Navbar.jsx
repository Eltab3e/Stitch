import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CiSearch, CiUser, CiShop } from "react-icons/ci";

import { navLinks } from "../../constants/constants";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 16rem;
    height: 6rem;
`;

const Logo = styled.div`
    font-family: "Poppins", sans-serif;
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.headings.s6};
`;

const Nav = styled.nav``;

const Items = styled.ul`
    display: flex;
    gap: 4rem;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.neutral.four};

    &.active {
        color: ${(props) => props.theme.colors.primary.black};
    }
`;

const Item = styled.li`
    font-size: ${(props) => props.theme.fontSizes.body.c1};
    font-weight: 500;
`;

const Icons = styled.div`
    display: flex;
    gap: 1.6rem;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.headings.s6};
    display: flex;
    cursor: pointer;
`;

const Cart = styled.div`
    position: relative;
    display: flex;
`;

const Span = styled.span`
    background-color: ${(props) => props.theme.colors.secondary.blue};
    font-size: ${(props) => props.theme.fontSizes.body.c2};
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
            <Logo>
                <NavLink to="/">
                    <Title>STITCH.</Title>
                </NavLink>
            </Logo>

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

            <Icons>
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
            </Icons>
        </Container>
    );
};

export default Navbar;
