import TableHead from './TableHead';
import TableBody from './TableBody';

import React from 'react';

interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
}

interface TableObj {
    [year: string]: AlbumInfo[];
}

interface TableProps {
    allAlbums: TableObj;
    artists: { id: string; name: string }[];
}

const Table: React.FC<TableProps> = ({ allAlbums, artists }) => {
    console.log('allAlbums');
    console.log(allAlbums);
    console.log(artists);
    return (
        <table>
            <TableHead artistNames={artists.map((artist) => artist.name)} />
            <TableBody allAlbums={allAlbums} />
        </table>
    );
};
export default Table;
