import axios from "axios"

async function searchArtist(query: string) {
  const BASE_URL = 'https://musicbrainz.org/ws/2';
  const Endpoint = `${BASE_URL}/artist/?query=${encodeURIComponent(query)}&fmt=json`;

  try {
    const response = await axios.get(Endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist data:', error);
    return "No Data";
  }
}
const showArtists = async(name:string) => {
    console.log(name)
    const Data = await searchArtist(name)
    console.log(Data.artists.length,Data.artists)
}

interface ArtistSearchBtnProps {
    InputValue: string;
}

const ArtistSearchBtn: React.FC<ArtistSearchBtnProps> = ({ InputValue }) => {
    return (
        <button onClick={() => showArtists(InputValue)}>search</button>
    );
}

export default ArtistSearchBtn