const TableBodyRow: React.FC<{ yearData: any }> = ({ yearData }) => {
    console.log(yearData);
    return (
        <>
            {yearData.map((rowData: any, index: number) => {
                return (
                    <tr key={index}>
                        {rowData.map((data: string, index: number) => {
                            return <td key={index}>{data}</td>;
                        })}
                    </tr>
                );
            })}
        </>
    );
};

export default TableBodyRow;
