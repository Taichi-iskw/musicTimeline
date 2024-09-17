interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
    artists: { id: string }[];
}

interface TableObj {
    [year: string]: AlbumInfo[];
}

interface cntObj {
    [name: string]: number;
}

export const formatDataForTable = (
    allArtistAlbums: AlbumInfo[][],
    state: { id: string; name: string }[],
) => {
    const tableObj: TableObj = {};

    allArtistAlbums.forEach((artistAlbums) => {
        artistAlbums.forEach((album) => {
            const year = album.release_date.slice(0, 4);
            if (!tableObj[year]) {
                tableObj[year] = [];
            }
            tableObj[year].push(album);
        });
    });

    const artistsArr = state.map(({ id }) => id);

    const timeLineBody = Object.keys(tableObj).map((year) => {
        const albums = tableObj[year];
        const yearArr: any = [];
        const cntObj: cntObj = {};

        albums.forEach((album) => {
            const id = album.artists[0].id;

            if (!cntObj[id]) cntObj[id] = 0;
            if (!yearArr[cntObj[id]])
                yearArr[cntObj[id]] = Array.from({ length: state.length + 1 }, () => ''); // td year

            yearArr[cntObj[id]][artistsArr.indexOf(id) + 1] = album; //TODO: 本来ならここでアルバムデータ
            cntObj[id] += 1;
        });
        yearArr[0][0] = year;
        return yearArr;
    });

    return timeLineBody;
};
