import axios from "axios"
// import noImage from "./noImage.png"

interface Image{
    url:string
}

export async function searchArtist(name: string) {
    const token = import.meta.env.VITE_SPOTIFY_TOKEN
    const BASE_URL = 'https://api.spotify.com/v1/search'
    if(!name) name = 'The Beatles'

    try {
        const res = await axios.get(BASE_URL,{
            params:{
                q: name,
                type: 'artist',
                limit:4
            },
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log('=====================================================================')
        const artistInfo = res.data.artists.items.map((item: { name: string; id: string; images: { url: string }[] }) => {
            const noImageURL = 'https://placehold.jp/300x300.png?text=No+Image';
            const image = item.images[0] ? item.images[0] : { url: noImageURL };
            return {
                name: item.name,
                id: item.id,
                image: image
            };
        });
        return artistInfo
    } catch (error) {
        console.log(error)
        return null;
    }
}

interface ArtistSearchBtnProps {
    InputValue: string;
    setSugestedArtists:(ArtistsInfo:[{id:string, name:string, image:Image}])=>void;
}

const ArtistSearchBtn: React.FC<ArtistSearchBtnProps> = ({ InputValue, setSugestedArtists}) => {
    return (
        <button onClick={async() => {
            const ArtistsInfo = await searchArtist(InputValue)
            setSugestedArtists(ArtistsInfo)
        }}>search</button>
    );
}

export default ArtistSearchBtn