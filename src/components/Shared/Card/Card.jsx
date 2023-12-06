import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

import placeholder from "../../../assets/placeholder.png";

const Container = styled.div`
    width: 26.2rem;
    height: 43.3rem;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    position: relative;
    height: 80%;
    background-image: url(${placeholder});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Badges = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 1rem;
    left: 1rem;
    font-weight: 600;
`;

const NewBadge = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.one};
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

const SaleBadge = styled.div`
    background-color: ${(props) => props.theme.colors.secondary.green};
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.body.c2};
`;

const AddToWishlist = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.one};
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary.black};
    color: ${(props) => props.theme.colors.primary.white};
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 4.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Bottom = styled.div`
    font-size: ${(props) => props.theme.fontSizes.body.c1};
    height: 20%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0 0;
`;

const Rating = styled.div``;
const Name = styled.div``;
const Price = styled.div``;

const Card = () => {
    return (
        <Container>
            <Top>
                <Badges>
                    <NewBadge>
                        <Text>New</Text>
                    </NewBadge>
                    <SaleBadge>
                        <Text>-50%</Text>
                    </SaleBadge>
                </Badges>

                <AddToWishlist>
                    <FaRegHeart />
                </AddToWishlist>

                <Button>Add to cart</Button>
            </Top>

            <Bottom>
                <Rating>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </Rating>
                <Name>Blblabla</Name>
                <Price>29.99$</Price>
            </Bottom>
        </Container>
    );
};

export default Card;
