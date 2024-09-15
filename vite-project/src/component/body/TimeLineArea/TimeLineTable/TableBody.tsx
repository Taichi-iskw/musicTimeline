import TableBodyRow from './TableBodyRow';

const TableBody: React.FC<{ allAlbums: any }> = ({ allAlbums }) => {
    return (
        <tbody>
            {Object.keys(allAlbums).map((year) => {
                return <TableBodyRow year={year} albums={allAlbums[year]} />;
            })}
        </tbody>
    );
};

export default TableBody;
