import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16rem;
    gap: 2.4rem;
`;

const MainCard = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
`;

const SmallCards = styled.div`
    grid-column: 2 / 3;
`;

const Banner = () => {
    return (
        <Container>
            <MainCard>
                <Title>Living Room</Title>
            </MainCard>
            <SmallCards>2</SmallCards>
        </Container>
    );
};

export default Banner;
