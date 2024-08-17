import styled from "styled-components";

interface StyledH2Props {
    isColorBlack?: boolean;
}

const StyledH2 = styled.h2<StyledH2Props>`
    color: red;
`;

const Header = () => {
    return (
        <header>
            <StyledH2>
                Music Timeline
            </StyledH2>
        </header>
    );
};

export default Header;
