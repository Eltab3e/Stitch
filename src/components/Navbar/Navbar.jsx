import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

import { navLinks } from "../../constants/constants";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primary.black};
    color: ${(props) => props.theme.colors.neutral.one};
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
    font-size: ${(props) => props.theme.fontSizes.headings.s5};

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
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

const Icons = styled.div`
    display: flex;
    gap: 2rem;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.body.b1};
    display: flex;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
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
                    <FaSearch />
                </Icon>
                <Icon>
                    <FaUser />
                </Icon>
                <Icon>
                    <Cart>
                        <FaShoppingCart />
                        <Span>0</Span>
                    </Cart>
                </Icon>
            </Icons>
        </Container>
    );
};

export default Navbar;
