import styled from "styled-components";
import {useState} from "react";
import ArtistSearchBtn from "./ArtistSearchBtn";

const StyledInput = styled.input`
    margin: 1vh 2vh;
`
const StyledDivBorderBottom = styled.div`
    border-bottom:black solid 0.3vh;
`

const InputArtistNameArea = ()=>{
    const [InputVal, setInput] = useState('')

    return(
    <StyledDivBorderBottom>
        <label htmlFor="NameInput">Artist:</label>
        <StyledInput type="text" id="NameInput" onChange={(e)=>setInput(e.target.value)}></StyledInput>
        <ArtistSearchBtn InputValue={InputVal}/>
    </StyledDivBorderBottom >
    )
}

export default InputArtistNameArea;