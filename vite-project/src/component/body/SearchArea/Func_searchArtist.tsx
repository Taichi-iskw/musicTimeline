import axios from 'axios';

const searchArtist = async (name: string) => {
    const token = import.meta.env.VITE_SPOTIFY_TOKEN;
    const BASE_URL = 'https://api.spotify.com/v1/search';
    const QueryArtistNumber = 4;
    if (!name) name = 'the beatles'; /** 例外処理未実装 */

    try {
        const res = await axios.get(BASE_URL, {
            params: {
                q: name,
                type: 'artist',
                limit: QueryArtistNumber,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const artistInfo = res.data.artists.items.map(
            (item: { name: string; id: string; images: { url: string }[] }) => {
                const noImageURL = 'https://placehold.jp/300x300.png?text=No+Image';
                const image = item.images[0] ? item.images[0] : { url: noImageURL };
                return {
                    name: item.name,
                    id: item.id,
                    image: image,
                };
            },
        );
        return artistInfo;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default searchArtist;
