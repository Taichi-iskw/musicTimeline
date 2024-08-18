import { useEffect, useState } from 'react';
import axios from 'axios';

interface AlbumTimeLineProps {
    id: string;
}

interface albumInfoProps{
    title:string;
    date?:string;
    "first-release-date"?:string;
    id:string;
}

const getAlbumsById = async (artistId: string) => {
    const Endpoint = `https://musicbrainz.org/ws/2/release-group?artist=${artistId}&type=album&fmt=json`;

    try {
        const response = await axios.get(Endpoint);
        const albums = response.data["release-groups"].map((data:albumInfoProps)=>{
            return {title:data["title"], date:data["first-release-date"], id:data["id"]}
        })
        const SortedAlbum = albums.sort((a:{date:string}, b:{date:string}) => new Date(a.date).getTime() - new Date(b.date).getTime());
        return SortedAlbum;
    } catch (error) {
        console.error('Error fetching artist data:', error);
        return null;
    }
};


const AlbumTimeLine: React.FC<AlbumTimeLineProps> = ({ id }) => {
    const [AlbumInfos, setAlbumInfos] = useState<albumInfoProps[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const AlbumInfos = await getAlbumsById(id);
            setAlbumInfos(AlbumInfos);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!AlbumInfos) return <div>No artist data available</div>;

    console.log(AlbumInfos)
    return (
        <ul>
            {AlbumInfos.map((albumInfo:albumInfoProps)=>{
                return <li key={albumInfo["id"]}>{albumInfo["date"]}: {albumInfo["title"]}</li>
            })}
        </ul>
    );
};

export default AlbumTimeLine;
