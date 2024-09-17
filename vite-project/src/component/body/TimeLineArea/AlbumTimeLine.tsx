import { useState, useEffect } from 'react';
import { useArtistId } from '../general-functions/ArtistIdContext';
import { getAllAlbums } from '../general-functions/getAllAlbums';
import { formatDataForTable } from '../general-functions/formatDataForTable';
import Table from './Table/Table';

interface TableObj {
    [year: string]: any;
}

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();
    const [tableBody, setTableBody] = useState<TableObj>([]);
    const [albumCache, setAlbumCache] = useState<any>({});

    useEffect(() => {
        console.log('state changed');
        const fetchAlbums = async () => {
            const newAlbumCache = { ...albumCache };

            const allArtistAlbums: any = await Promise.all(
                state.map(async ({ id, name }) => {
                    if (!newAlbumCache[id]) {
                        console.log('fetching new album', name, id);
                        newAlbumCache[id] = await getAllAlbums(id);
                    }
                    return newAlbumCache[id];
                }),
            );
            setAlbumCache(newAlbumCache);
            console.log('allArtistAlbums', allArtistAlbums);

            const timeLineBody = formatDataForTable(allArtistAlbums, state);
            console.log('timeLineBody', timeLineBody);

            setTableBody(timeLineBody);
        };

        fetchAlbums();
    }, [state]);

    return <Table tableBody={tableBody} artists={state} />;
};

export default AlbumTimeLine;
