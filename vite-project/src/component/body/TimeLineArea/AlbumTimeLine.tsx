import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Years from "./AlbumInfos/years"
import Albums from './AlbumInfos/Albums';

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

const S_Div = styled.div`
    margin: 2vh 0;
    border: 0.1px gray solid;
    max-width:50%;
    /* width:1vh; */
    
    display:flex;
    gap:1vh;
    flex: 1;

    & >div:first-child{
        display: flex;
        justify-content: end;
    }
`;

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

    return (
        <ul>
            <div>The Beatles</div>
            {AlbumInfos.map((albumInfo:albumInfoProps)=>{
                return(
                    <S_Div key={albumInfo["id"]}>
                        <div>
                            <Years date={albumInfo["date"] || ''} />
                        </div>
                        <div>
                            <Albums title={albumInfo["title"]} id={albumInfo["id"]} />
                        </div>
                    </S_Div>
                )
            })}
        </ul>
    );
};

export default AlbumTimeLine;
