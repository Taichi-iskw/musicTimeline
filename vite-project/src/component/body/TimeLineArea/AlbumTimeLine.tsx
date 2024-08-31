import { useArtistId } from '../general-functions/ArtistIdContext';
import styled from 'styled-components';

import ArtistWorks from './AlbumInfos/ArtistWorks';

const S_div = styled.div`
    margin: 0 5px;
`;

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();

    return (
        <>
            {state.map(({ id, name }) => (
                <S_div key={id}>
                    <ArtistWorks id={id} name={name} />
                </S_div>
            ))}
        </>
    );
};

export default AlbumTimeLine;
