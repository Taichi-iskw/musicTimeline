import { useEffect, useState } from 'react';
import axios from 'axios';

const getArtistById = async (artistId: string) => {
    const BASE_URL = 'https://musicbrainz.org/ws/2/artist/';
    const Endpoint = `${BASE_URL}${artistId}/?inc=releases&fmt=json`;

    try {
        const response = await axios.get(Endpoint);
        console.log(response.data.releases)
        return response.data;
    } catch (error) {
        console.error('Error fetching artist data:', error);
        return null;
    }
};

interface AlbumTimeLineProps {
    id: string;
}

interface artistInfoProps{
    name:string;
}

const AlbumTimeLine: React.FC<AlbumTimeLineProps> = ({ id }) => {
    const [artistInfo, setArtistInfo] = useState<artistInfoProps>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArtistById(id);
            setArtistInfo(data);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!artistInfo) return <div>No artist data available</div>;


    return (
        <div>
            <h2>{artistInfo.name}</h2>

        </div>
    );
};

export default AlbumTimeLine;
