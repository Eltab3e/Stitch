import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Notification = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.two};
    display: flex;
    justify-content: center;
    padding: 10px;
`;
const Nav = styled.nav``;

const Content = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.h4};
`;

const Navbar = () => {
    return (
        <Container>
            <Notification>
                <Content>30% OFF STORE WIDE - LIMITED TIME!</Content>
            </Notification>
            <Nav></Nav>
        </Container>
    );
};

export default Navbar;
