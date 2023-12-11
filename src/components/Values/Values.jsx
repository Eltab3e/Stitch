import styled from "styled-components";
import { FaShippingFast, FaMoneyBill, FaLock } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22rem;
`;

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.two};
    width: 26.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 4.8rem 3.2rem;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.headings.s4};
    display: flex;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.headings.s7};
    font-weight: 500;
`;

const Caption = styled.p`
    font-size: ${(props) => props.theme.fontSizes.body.c2};
    color: ${(props) => props.theme.colors.neutral.four};
`;

const Values = () => {
    return (
        <Container>
            <Card>
                <Icon>
                    <FaShippingFast />
                </Icon>
                <Text>
                    <Title>Free Shipping</Title>
                    <Caption>Orders above $200</Caption>
                </Text>
            </Card>
            <Card>
                <Icon>
                    <FaMoneyBill />
                </Icon>
                <Text>
                    <Title>Money-back</Title>
                    <Caption>30 days gurantee</Caption>
                </Text>
            </Card>
            <Card>
                <Icon>
                    <FaLock />
                </Icon>
                <Text>
                    <Title>Secure Payments</Title>
                    <Caption>Secured by Stripe</Caption>
                </Text>
            </Card>
            <Card>
                <Icon>
                    <BsFillTelephoneFill />
                </Icon>
                <Text>
                    <Title>24/7 Support</Title>
                    <Caption>Phone and Email support</Caption>
                </Text>
            </Card>
        </Container>
    );
};

export default Values;
