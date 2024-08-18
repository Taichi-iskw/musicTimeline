import styled from "styled-components"
import Years from "./years"
import AlbumTimeLine from "./AlbumTimeLine"

const StyledContaienr = styled.div`
    display: flex;
    height: 100vh;
`
const TheBeatlesId:string = "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d"

const TimeLineArea =()=>{
    return(
    <StyledContaienr>
        <Years></Years>
        <AlbumTimeLine id={TheBeatlesId}></AlbumTimeLine>
    </StyledContaienr>
    )
}

export default TimeLineArea