import styled from 'styled-components';
import ImageComponent from '../../general-functions/ImageComponent';
import { useArtistId } from '../../general-functions/ArtistIdContext';

export interface ArtistInfo {
    name: string;
    id: string;
    image: {
        url: string;
    };
}

interface SuggestArtistProps {
    artistInfo: ArtistInfo;
}

const S_span = styled.span`
    width: 50vh;
    margin: 5px;
    border: 0.2px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;

    flex: 1 0 20%;
    box-sizing: border-box;

    /* 横スクロール用 */
    & > span {
        padding: 0 10px;
        overflow-x: auto;
        white-space: nowrap;
    }

    &:hover {
        background-color: lightgray;
    }
`;

const SuggestArtist: React.FC<SuggestArtistProps> = ({ artistInfo }) => {
    const { dispatch } = useArtistId();

    const clicked = (id: string, name: string) => {
        dispatch({ type: 'ADD_ARTIST', payload: { id, name } });
    };

    return (
        <S_span onClick={() => clicked(artistInfo.id, artistInfo.name)}>
            <ImageComponent image={artistInfo.image} size={'80'} />
            <span>{artistInfo.name}</span>
        </S_span>
    );
};

export default SuggestArtist;
