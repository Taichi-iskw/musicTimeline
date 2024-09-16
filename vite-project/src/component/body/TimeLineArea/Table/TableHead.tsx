interface TableHeadProps {
    artistNames: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ artistNames }) => {
    return (
        <thead>
            <tr>
                {artistNames.length > 0 && <th>Year/Artist</th>}
                {artistNames.map((name: string, index: number) => (
                    <th key={index}>{name}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
