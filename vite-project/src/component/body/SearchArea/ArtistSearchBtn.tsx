import searchArtist from './suggestedArtist/Func_searchArtist';

interface Image {
    url: string;
}

interface ArtistSearchBtnProps {
    InputValue: string;
    setSugestedArtists: (ArtistsInfo: [{ id: string; name: string; image: Image }]) => void;
}

const ArtistSearchBtn: React.FC<ArtistSearchBtnProps> = ({ InputValue, setSugestedArtists }) => {
    return (
        <button
            onClick={async () => {
                const ArtistsInfo = await searchArtist(InputValue);
                setSugestedArtists(ArtistsInfo);
            }}
        >
            search
        </button>
    );
};

export default ArtistSearchBtn;
