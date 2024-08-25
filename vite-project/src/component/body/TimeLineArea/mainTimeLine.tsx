import styled from 'styled-components';
import AlbumTimeLine from './AlbumTimeLine';

const StyledContaienr = styled.div`
    display: flex;
    /* height: 100vh; */
`;

const TimeLineArea = () => {
    return (
        <StyledContaienr>
            <AlbumTimeLine />
        </StyledContaienr>
    );
};

export default TimeLineArea;
