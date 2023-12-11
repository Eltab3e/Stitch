import styled from "styled-components";

import placeholder from "../../assets/placeholder4.png";

import Button from "../Shared/Button/Button";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 53.2rem;
`;

const ImageWrapper = styled.div`
    background-image: url(${placeholder});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.two};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    padding: 0 16rem 0 7.2rem;
`;

const Offer = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    color: ${(props) => props.theme.colors.secondary.blue};
`;

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.headings.s4};
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.body.b1};
`;

const Highlight = () => {
    return (
        <Container>
            <ImageWrapper></ImageWrapper>
            <Content>
                <Offer>SALE UP TO 35% OFF</Offer>

                <Title>
                    HUNDREDS OF
                    <br />
                    NEW LOWER PRICES!
                </Title>

                <Text>
                    It's more affordable than ever to give every
                    <br /> room in your home a stylish makeover.
                </Text>

                <Button>Shop Now</Button>
            </Content>
        </Container>
    );
};

export default Highlight;
