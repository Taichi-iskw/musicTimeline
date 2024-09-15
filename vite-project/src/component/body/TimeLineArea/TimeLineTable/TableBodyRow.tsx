interface timesObj {
    [artistName: string]: number;
}

const TableBodyRow: React.FC<{ year: string; albums: any }> = ({ year, albums }) => {
    const yearArr: any = [];
    yearArr[0] = [year];

    const timesObj: timesObj = {};
    albums.map((album: any) => {
        const name = album['artists'][0]['name'];

        if (!timesObj[name]) timesObj[name] = 0;
        if (!yearArr[timesObj[name]]) yearArr[timesObj[name]] = ['']; // td year

        yearArr[timesObj[name]].push(album['name']); //TODO: should not push
        timesObj[name] += 1;
    });
    console.log('yearArr');
    console.log(yearArr);
    console.log('timesObj');
    console.log(timesObj);

    return (
        <>
            {yearArr.map((tableRow: []) => {
                return (
                    <tr>
                        {tableRow.map((tableData: string) => {
                            return <td>{tableData}</td>;
                        })}
                    </tr>
                );
            })}
        </>
    );
};

export default TableBodyRow;
