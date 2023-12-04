import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.three};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
`;

const Text = styled.div`
    font-size: ${(props) => props.theme.fontSizes.body.c1};
    font-weight: 600;
`;

const Notification = () => {
    return (
        <Container>
            <Text>🇵🇸&nbsp; FREE PALESTINE! &nbsp;🇵🇸</Text>
        </Container>
    );
};

export default Notification;
