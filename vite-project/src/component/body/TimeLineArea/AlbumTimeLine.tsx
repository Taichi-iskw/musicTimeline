import { useState, useEffect } from 'react';
import { useArtistId } from '../general-functions/ArtistIdContext';
import { getAllAlbums } from '../general-functions/getAllAlbums';
import Table from './TimeLineTable/Table';

interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
}
interface TableObj {
    [year: string]: AlbumInfo[];
}

const AlbumTimeLine: React.FC = () => {
    const { state } = useArtistId();
    const [allAlbums, setAllAlbums] = useState<TableObj>({});

    useEffect(() => {
        const fetchAlbums = async () => {
            const allArtistAlbums = await Promise.all(
                state.map(async ({ id }) => {
                    return await getAllAlbums(id);
                }),
            );
            const tableObj: TableObj = {};

            allArtistAlbums.map((artistAlbums) => {
                artistAlbums.forEach((album) => {
                    const date = album.release_date.slice(0, 4);
                    if (!tableObj[date]) {
                        tableObj[date] = [];
                    }
                    tableObj[date].push(album);
                });
            });
            setAllAlbums(tableObj);
        };

        fetchAlbums();
    }, [state]);

    return <Table allAlbums={allAlbums} artists={state} />;
};

export default AlbumTimeLine;
