import axios from "axios"

const showArtists = async(name:string) => {
    async function searchArtist(query: string) {
        const token = import.meta.env.VITE_SPOTIFY_TOKEN
        const BASE_URL = 'https://api.spotify.com/v1/search'
        
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
            const artistInfo = res.data.artists.items.map((item:{name:string,id:string})=>{
                return{name:item.name,id:item.id}
            })
            console.log(artistInfo)
            return artistInfo
        } catch (error) {
            console.error('Error fetching artist data:', error,query);
        return null;
        }
    }

    const sugestedArtists = await searchArtist(name)
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