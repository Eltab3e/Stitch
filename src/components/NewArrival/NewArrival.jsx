import styled from "styled-components";

import Button from "../Shared/Button/Button";
import Card from "../Shared/Card/Card";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    padding: 0 22rem;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.headings.s5};
    font-family: "Poppins", sans-serif;
`;

const Content = styled.div`
    display: flex;
    gap: 2.4rem;
`;

const NewArrival = () => {
    return (
        <Container>
            <Header>
                <Title>New Arrival</Title>
                <Button fullWidth>More Products</Button>
            </Header>

            <Content>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    );
};

export default NewArrival;
