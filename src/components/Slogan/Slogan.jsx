import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22rem;
`;

const Main = styled.div``;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.headings.hero};
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: -2px;
`;

const Sub = styled.div``;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    font-weight: 400;
`;

const Shape = styled.span`
    color: ${(props) => props.theme.colors.neutral.four};
`;

const Slogan = () => {
    return (
        <Container>
            <Main>
                <Title>
                    Simply Unique<Shape>/</Shape> <br /> Simply Better<Shape>.</Shape>
                </Title>
            </Main>

            <Sub>
                <Text>
                    STITCH&nbsp;
                    <Shape>
                        is a clothes, gifts & decorations store based online with worldwide
                        shipping,
                        <br />
                        Est since 2023.
                    </Shape>
                </Text>
            </Sub>
        </Container>
    );
};

export default Slogan;
