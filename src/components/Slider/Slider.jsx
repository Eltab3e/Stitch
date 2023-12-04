import { useState } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { gallery } from "../../constants/constants";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    width: 300vw;
    height: 100%;
    transition: all 1s ease;
`;

const Image = styled.img`
    width: 100vw;
    height: 100%;
    object-fit: cover;
`;
const Icons = styled.div`
    position: absolute;
    margin: auto;
    display: flex;
    width: fit-content;
    gap: 1rem;
    bottom: 15rem;
    left: 0;
    right: 0;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border: 1px solid #999;

    &:hover {
        color: #ffab00;
        border: 1px solid #ffab00;
    }
`;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <Container>
            <Wrapper style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {gallery.map((image) => (
                    <Image
                        key={image.id}
                        src={image.url}
                        alt="image"
                    />
                ))}
            </Wrapper>

            <Icons>
                <Icon onClick={prevSlide}>
                    <FaArrowLeft />
                </Icon>
                <Icon onClick={nextSlide}>
                    <FaArrowRight />
                </Icon>
            </Icons>
        </Container>
    );
};

export default Slider;
