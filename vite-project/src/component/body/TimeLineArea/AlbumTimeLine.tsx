import { useArtistId } from '../ArtistIdContext';
import styled from 'styled-components';

import ArtistWorks from './AlbumInfos/artistWorks';

const S_div = styled.div`
    margin: 0 5px;
`;

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();

    return (
        <>
            {state.map((id) => (
                <S_div key={id}>
                    <ArtistWorks id={id} />
                </S_div>
            ))}
        </>
    );
};

export default AlbumTimeLine;
