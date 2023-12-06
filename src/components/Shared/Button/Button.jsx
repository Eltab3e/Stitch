import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const StyledButton = styled.button`
    width: ${(props) => (props.fullWidth ? "14rem" : "10rem")};
    height: 2.8rem;
    font-size: ${(props) => props.theme.fontSizes.body.b2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: none;
    border-bottom: 1px solid #000000;
    background-color: inherit;
    cursor: pointer;
`;

const Button = ({ children, onClick, fullWidth }) => {
    return (
        <StyledButton
            onClick={onClick}
            fullWidth={fullWidth}
        >
            {children} <FaArrowRight />
        </StyledButton>
    );
};

export default Button;
