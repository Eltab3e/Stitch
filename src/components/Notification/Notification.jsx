import { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.three};
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    height: 4rem;
    padding: 0 16rem;
`;

//solve styled-components props warning & error
const FilteredContainer = styled(Container).withConfig({
    shouldForwardProp: (prop) => prop !== "isOpen",
})``;

const Text = styled.div`
    font-size: ${(props) => props.theme.fontSizes.body.c1};
    font-weight: 600;
    margin: 0 auto;
`;

const Icon = styled.div`
    font-size: ${(props) => props.theme.fontSizes.headings.s6};
    display: flex;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.secondary.orange};
    }
`;

const Notification = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleHide = () => {
        setIsOpen(false);
    };

    return (
        <FilteredContainer isOpen={isOpen}>
            <Text>🇵🇸&nbsp; FREE PALESTINE! &nbsp;🇵🇸</Text>

            <Icon onClick={handleHide}>
                <IoMdClose />
            </Icon>
        </FilteredContainer>
    );
};

export default Notification;
