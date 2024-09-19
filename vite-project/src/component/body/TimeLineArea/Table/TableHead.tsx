import { useArtistId } from '../../general-functions/ArtistIdContext';
import styles from './Table.module.css';

interface Artist {
    id: string;
    name: string;
}

interface TableHeadProps {
    artists: Artist[];
}

const TableHead: React.FC<TableHeadProps> = ({ artists }) => {
    const { dispatch } = useArtistId();
    return (
        <thead>
            <tr>
                {artists.length > 0 && <th>Year/Artist</th>}
                {artists.map((artist, index: number) => (
                    <th key={index}>
                        <div className={styles.artistContainer}>
                            <span>{artist.name}</span>
                            <span
                                className={styles.closeButton}
                                onClick={() =>
                                    dispatch({ type: 'REMOVE_ARTIST', payload: artist.id })
                                }
                            ></span>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
