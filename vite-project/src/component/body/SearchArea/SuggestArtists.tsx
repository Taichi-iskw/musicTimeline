import styled from 'styled-components';
import ImageComponent from './ImageComponent';

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
`;
const SuggestArtist: React.FC<SuggestArtistProps> = ({ artistInfo }) => {
    return (
        <S_span>
            <ImageComponent image={artistInfo.image} />
            <span>{artistInfo.name}</span>
        </S_span>
    );
};

export default SuggestArtist;
