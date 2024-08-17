import styled from "styled-components"
import Years from "./years"
import AlbumTimeLine from "./AlubumTimeLine"

const StyledContaienr = styled.div`
    display: flex;
    height: 100vh;
`

const TimeLineArea =()=>{
    return(
    <StyledContaienr>
        <Years></Years>
        <AlbumTimeLine></AlbumTimeLine>
    </StyledContaienr>
    )
}

export default TimeLineArea