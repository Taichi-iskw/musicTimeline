import styled from "styled-components";

export interface ArtistInfo {
    name: string;
    id: string;
}

interface SuggestArtistProps {
    artistInfo: ArtistInfo;
    index:number;
}

const S_span = styled.span`
    padding:1vh;
    margin: 5vh;
    border:0.2px solid black;
    border-radius: 5px;
`

const SuggestArtist: React.FC<SuggestArtistProps> = ({ artistInfo,index }) => {
    return (
        <S_span>{index+1}. {artistInfo.name}</S_span>
    );
}

export default SuggestArtist;
