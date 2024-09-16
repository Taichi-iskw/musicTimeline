import axios from 'axios';

interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
}

export const getAllAlbums = async (id: string) => {
    try {
        const token = import.meta.env.VITE_SPOTIFY_TOKEN;
        const BASE_URL = import.meta.env.VITE_SPOTIFY_BASE_URL;
        let allAlbums: AlbumInfo[] = [];
        let offset = 0;
        let totalAlbums = 0;

        do {
            const END_POINT = `${BASE_URL}artists/${id}/albums`;

            const res = await axios.get(END_POINT, {
                params: {
                    include_groups: 'album',
                    limit: '50',
                    offset: offset.toString(),
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const albums = res.data.items;
            totalAlbums = res.data.total;
            allAlbums = allAlbums.concat(albums);
            offset += 50;
        } while (offset < totalAlbums);

        // sort by release date
        const sortedAlbums = allAlbums.sort((a, b) =>
            new Date(a.release_date) > new Date(b.release_date) ? 1 : -1,
        );
        console.log('sortedAlbums', sortedAlbums);
        // remove duplicates name as possible
        const uniqueAlbumNames: Set<string> = new Set();
        const uniqueAlbums = sortedAlbums.filter((album) => {
            const albumName = album.name;
            let mainName = albumName;

            // example. title(remaster), title-remaster
            if (albumName.includes('(')) {
                mainName = albumName.split('(')[0].trim();
            } else if (albumName.includes('-')) {
                mainName = albumName.split('-')[0].trim();
            }

            const isUnique = !uniqueAlbumNames.has(mainName);
            if (isUnique) {
                uniqueAlbumNames.add(mainName);
            }

            return isUnique;
        });

        return uniqueAlbums;
    } catch (error) {
        console.error('Error fetching artist albums:', error);
        throw error;
    }
};
