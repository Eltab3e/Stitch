import styled from "styled-components";

import { Slider, Banner, Slogan } from "../../components/index";

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
        </Container>
    );
};

export default Home;
