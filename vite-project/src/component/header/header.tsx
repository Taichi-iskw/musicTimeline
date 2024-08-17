import styled from "styled-components";

const StyledH1 = styled.h1`
    border-bottom: black solid;
`;

const Header = () => {
    return (
        <header>
            <StyledH1>
                Music Timeline
            </StyledH1>
        </header>
    );
};

export default Header;
