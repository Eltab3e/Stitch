import styled from "styled-components";

import { Slider, Banner, Slogan, NewArrival, Values, Highlight } from "../../components/index";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Home = () => {
    return (
        <Container>
            <Slider />
            <Slogan />
            <Banner />
            <NewArrival />
            <Values />
            <Highlight />
        </Container>
    );
};

export default Home;
