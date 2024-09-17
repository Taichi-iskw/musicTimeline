import styles from './Table.module.css';
import ImageComponent from '../../general-functions/ImageComponent';

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
                        {rowData.map((data, dataIndex) => {
                            if (typeof data === 'string') {
                                return <td key={dataIndex}>{data}</td>;
                            }
                            return (
                                <td key={dataIndex}>
                                    <div className={styles.albumInfo}>
                                        <div>{data.name}</div>
                                        <ImageComponent image={data.images[0]} size={'120'} />
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </>
    );
};

export default TableBodyRow;
