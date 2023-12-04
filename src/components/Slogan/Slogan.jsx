import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16rem;
`;

const Main = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.hero};
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: -2px;
`;

const Sub = styled.div`
    color: ${(props) => props.theme.colors.neutral.four};
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-weight: 400;
`;

const Shape = styled.span`
    color: ${(props) => props.theme.colors.neutral.four};
`;

const Slogan = () => {
    return (
        <Container>
            <Main>
                Simply Unique<Shape>/</Shape> <br /> Simply Better<Shape>.</Shape>
            </Main>
            <Sub>
                STITCH is a clothes, gifts & decorations store based online with worldwide shipping,
                <br />
                Est since 2023.
            </Sub>
        </Container>
    );
};

export default Slogan;
