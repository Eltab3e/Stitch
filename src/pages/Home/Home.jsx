import styled from "styled-components";

import { Slider, Banner, Slogan, NewArrival, Values } from "../../components/index";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Home = () => {
    return (
        <Container>
            <Slider />
            <Slogan />
            <Banner />
            <NewArrival />
            <Values />
        </Container>
    );
};

export default Home;
