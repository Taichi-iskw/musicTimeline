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
    tableBody: TableObj;
    artists: { id: string; name: string }[];
}

const Table: React.FC<TableProps> = ({ tableBody, artists }) => {
    return (
        <table>
            <TableHead artistNames={artists.map((artist) => artist.name)} />
            <TableBody tableBody={tableBody} />
        </table>
    );
};
export default Table;
