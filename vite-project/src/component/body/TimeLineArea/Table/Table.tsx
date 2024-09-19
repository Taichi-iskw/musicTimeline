import TableHead from './TableHead';
import TableBody from './TableBody';
import styles from './Table.module.css';

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
        <table className={styles.albumTable}>
            <TableHead artists={artists} />
            <TableBody tableBody={tableBody} />
        </table>
    );
};
export default Table;
