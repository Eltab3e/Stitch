import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

import placeholder from "../../assets/placeholder.png";
import placeholder2 from "../../assets/placeholder2.png";
import placeholder3 from "../../assets/placeholder3.png";

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16rem;
`;

const MainCard = styled.div`
    grid-column: 1 / 2;
    width: 54.8rem;
    height: 66.4rem;
    background-image: url(${placeholder});
    background-repeat: no-repeat;
`;

const MainCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 6rem 0 0 6rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.headings.s5};
    font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
    width: 10rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid #000000;
    cursor: pointer;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.body.b2};
`;

const SubCards = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 54.8rem;
    height: 66.2rem;
`;

const TopCard = styled.div`
    background-image: url(${placeholder2});
    background-repeat: no-repeat;
    background-size: contain;
    width: 54.8rem;
    height: 31.9rem;
`;

const BottomCard = styled.div`
    background-image: url(${placeholder3});
    background-repeat: no-repeat;
    background-size: contain;
    width: 54.8rem;
    height: 31.9rem;
`;

const SubCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 18rem 0 0 3rem;
`;

const Banner = () => {
    return (
        <Container>
            <MainCard>
                <MainCardContent>
                    <Title>Living Room</Title>

                    <Button>
                        <Text>Shop Now</Text>
                        <FaArrowRight />
                    </Button>
                </MainCardContent>
            </MainCard>

            <SubCards>
                <TopCard>
                    <SubCardContent>
                        <Title>Bedroom</Title>

                        <Button>
                            <Text>Shop Now</Text>
                            <FaArrowRight />
                        </Button>
                    </SubCardContent>
                </TopCard>

                <BottomCard>
                    <SubCardContent>
                        <Title>Kitchen</Title>

                        <Button>
                            <Text>Shop Now</Text>
                            <FaArrowRight />
                        </Button>
                    </SubCardContent>
                </BottomCard>
            </SubCards>
        </Container>
    );
};

export default Banner;
