import styled from "styled-components";

import { Slider, Slang } from "../../components/index";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Home = () => {
    return (
        <Container>
            <Slider />
            <Slang />
        </Container>
    );
};

export default Home;
