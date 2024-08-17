import styled from "styled-components"
import Years from "./years/years"

const StyledContaienr = styled.div`
    display: flex;
    height: 100vh;
`

const TimeLineArea =()=>{
    return(
    <StyledContaienr>
        <Years></Years>
        <></>{/* show album images at here */}
    </StyledContaienr>
    )
}

export default TimeLineArea