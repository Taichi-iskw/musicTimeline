import TableBodyRow from './TableBodyRow';

const TableBody: React.FC<{ tableBody: any }> = ({ tableBody }) => {
    return (
        <tbody>
            {tableBody.map((yearData: any, index: number) => {
                return <TableBodyRow key={index} yearData={yearData} />;
            })}
        </tbody>
    );
};

export default TableBody;
