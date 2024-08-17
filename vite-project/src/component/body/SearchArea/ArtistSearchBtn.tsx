import axios from "axios"

const showArtists = async(name:string) => {
    async function searchArtist(query: string) {
        const BASE_URL = 'https://musicbrainz.org/ws/2';
        const Endpoint = `${BASE_URL}/artist/?query=${encodeURIComponent(query)}&fmt=json`;

        try {
        const response = await axios.get(Endpoint);
        return response.data;
        } catch (error) {
        console.error('Error fetching artist data:', error);
        return null;
        }
    }

    const Data = await searchArtist(name)
    const sugestedArtists = Data.artists.slice(0,4)
    const sugestedAritstsInfo = sugestedArtists.map((artist: {id:string, name:string})=>{
        const {id, name} = artist;
        return{id:id, name:name}
    })
    return sugestedAritstsInfo
}

interface ArtistSearchBtnProps {
    InputValue: string;
    setSugestedArtists:(ArtistsInfo:[{id:string, name:string}])=>void;
}

const ArtistSearchBtn: React.FC<ArtistSearchBtnProps> = ({ InputValue, setSugestedArtists}) => {
    return (
        <button onClick={async() => {
            const ArtistsInfo = await showArtists(InputValue)
            setSugestedArtists(ArtistsInfo)
        }}>search</button>
    );
}

export default ArtistSearchBtn