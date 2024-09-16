interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
    artists: { name: string }[];
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

    const artistsArr = state.map(({ name }) => name);

    const timeLineBody = Object.keys(tableObj).map((year) => {
        const albums = tableObj[year];
        const yearArr: any = [];
        const cntObj: cntObj = {};

        albums.forEach((album) => {
            const name = album.artists[0].name;

            if (!cntObj[name]) cntObj[name] = 0;
            if (!yearArr[cntObj[name]])
                yearArr[cntObj[name]] = Array.from({ length: state.length + 1 }, () => ''); // td year

            yearArr[cntObj[name]][artistsArr.indexOf(name) + 1] = album.name; //TODO: 本来ならここでアルバムデータ
            cntObj[name] += 1;
        });
        yearArr[0][0] = year;
        return yearArr;
    });

    return timeLineBody;
};
