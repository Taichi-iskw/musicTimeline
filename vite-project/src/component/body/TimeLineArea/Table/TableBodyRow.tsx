import styles from './Table.module.css';

const TableBodyRow: React.FC<{ yearData: any }> = ({ yearData }) => {
    return (
        <>
            {yearData.map((rowData: any, index: number) => {
                const isFirstRow = index === 0;
                const isLastRow = index === yearData.length - 1;
                return (
                    <tr
                        key={index}
                        className={`
                            ${isFirstRow ? styles.boderTop : ''} 
                            ${isLastRow ? styles.borderBottom : ''}
                        `}
                    >
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
