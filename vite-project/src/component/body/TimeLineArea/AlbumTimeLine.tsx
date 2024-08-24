import { useArtistId } from '../ArtistIdContext';

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();
    console.log(state);

    return (
        <>
            {state.map((id) => (
                <div key={id}>{id}</div>
            ))}
        </>
    );
};

export default AlbumTimeLine;
