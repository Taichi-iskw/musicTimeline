import styled from 'styled-components';
import { useState } from 'react';

import ArtistSearchBtn from './ArtistSearchBtn';
import searchArtist from './Func_searchArtist';
import SuggestArtist, { ArtistInfo } from './SuggestArtists';

const S = {
    Input: styled.input`
        margin: 1vh 1vh;
        border: solid black 1px;
    `,
    DivBorder: styled.div`
        border-bottom: black solid 0.3vh;
    `,
    Div: styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `,
    Label: styled.label`
        font-size: x-large;
    `,
};

const searchArtistByEnterKey = async (
    e: React.KeyboardEvent,
    name: string,
    setSugestedArtists: (artists: ArtistInfo[]) => void,
) => {
    if (e.key === 'Enter') {
        const artistInfo = await searchArtist(name);
        setSugestedArtists(artistInfo);
    }
};

const InputArtistNameArea = () => {
    const [InputVal, setInput] = useState('');
    const [SuggestedArtists, setSugestedArtists] = useState<ArtistInfo[]>([]);

    return (
        <S.DivBorder>
            <S.Label htmlFor='NameInput'>Artist:</S.Label>
            <S.Input
                type='text'
                id='NameInput'
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    searchArtistByEnterKey(e, InputVal, setSugestedArtists);
                }}
            ></S.Input>
            <ArtistSearchBtn InputValue={InputVal} setSugestedArtists={setSugestedArtists} />
            <S.Div>
                {SuggestedArtists.map((artistsInfo) => (
                    <SuggestArtist key={artistsInfo.id} artistInfo={artistsInfo} />
                ))}
            </S.Div>
        </S.DivBorder>
    );
};

export default InputArtistNameArea;
