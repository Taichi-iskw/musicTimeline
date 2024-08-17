import styled from "styled-components";
import {useState} from "react";

import ArtistSearchBtn from "./ArtistSearchBtn";
import SuggestArtist from "./SuggestArtists";
import {ArtistInfo} from "./SuggestArtists";

const StyledInput = styled.input`
    margin: 1vh 2vh;
`
const StyledDivBorderBottom = styled.div`
    border-bottom:black solid 0.3vh;
`

const InputArtistNameArea = ()=>{
    const [InputVal, setInput] = useState('')
    const [SuggestedArtists, setSugestedArtists] = useState<ArtistInfo[]>([])

    return(
    <StyledDivBorderBottom>
        <label htmlFor="NameInput">Artist:</label>
        <StyledInput type="text" id="NameInput" onChange={(e)=>setInput(e.target.value)}></StyledInput>
        <ArtistSearchBtn InputValue={InputVal} setSugestedArtists={setSugestedArtists}/>
        {SuggestedArtists.map((artistsInfo,index) => <SuggestArtist key={artistsInfo.id} artistInfo={artistsInfo} index={index}/>)}
    </StyledDivBorderBottom >
    )
}

export default InputArtistNameArea;