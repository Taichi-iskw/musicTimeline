import { useState, useEffect } from 'react';
import { useArtistId } from '../general-functions/ArtistIdContext';
import { getAllAlbums } from '../general-functions/getAllAlbums';
import { processAlbumsData } from '../general-functions/processAlbumsData';
import Table from './TimeLineTable/Table';

interface TableArr {
    [year: string]: any;
}

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();
    const [tableBody, setTableBody] = useState<TableArr>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const allArtistAlbums: any = await Promise.all(
                state.map(async ({ id }) => {
                    return await getAllAlbums(id);
                }),
            );

            const timeLineBody = processAlbumsData(allArtistAlbums, state);

            setTableBody(timeLineBody);
        };

        fetchAlbums();
    }, [state]);

    return <Table tableBody={tableBody} artists={state} />;
};

export default AlbumTimeLine;
