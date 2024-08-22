import styled from "styled-components";
import {useState} from "react";

import ArtistSearchBtn from "./ArtistSearchBtn";
import { searchArtist } from "./ArtistSearchBtn";
import SuggestArtist from "./SuggestArtists";
import {ArtistInfo} from "./SuggestArtists";

const StyledInput = styled.input`
    margin: 2vh 2vh;
`
const StyledDivBorderBottom = styled.div`
    border-bottom:black solid 0.3vh;
`

const S_Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const searchArtistByEnterKey = async(e:{key:string,code:string},name:string,setSugestedArtists:(artists:ArtistInfo[])=>void)=>{
    if(e.key ==="Enter" || e.code ==="Enter"){
        const artistInfo = await searchArtist(name)
        setSugestedArtists(artistInfo)
    }
}

const InputArtistNameArea = ()=>{
    const [InputVal, setInput] = useState('')
    const [SuggestedArtists, setSugestedArtists] = useState<ArtistInfo[]>([])

    return(
    <StyledDivBorderBottom>
        <label htmlFor="NameInput">Artist:</label>
        <StyledInput type="text" id="NameInput" 
            onChange={(e)=>setInput(e.target.value)} 
            onKeyDown={(e)=>{searchArtistByEnterKey(e,InputVal,setSugestedArtists)}}
        >
        </StyledInput>
        <ArtistSearchBtn InputValue={InputVal} setSugestedArtists={setSugestedArtists}/>
        <S_Div>
            {SuggestedArtists.map((artistsInfo) => 
                (<SuggestArtist key={artistsInfo.id} artistInfo={artistsInfo}/>)
            )}
        </S_Div>
    </StyledDivBorderBottom >
    )
}

export default InputArtistNameArea;