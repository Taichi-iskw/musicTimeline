// import { useState } from 'react';
// import axios from 'axios';

interface AlbumImageProps{
    id:string
}
// "title": "Abbey Road",
// "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
// "id": "9162580e-5df4-32de-80cc-f45a8d8a9b1d",

const AlbumImage:React.FC<AlbumImageProps> =({id})=>{


    // const getAlbumTracks = async (releaseId: string) => {
    //     const Endpoint = `https://musicbrainz.org/ws/2/release/${releaseId}?inc=recordings&fmt=json`;
    
    //     try {
    //         const response = await axios.get(Endpoint);
    //         const tracks = response.data['media'][0]['tracks'].map((track: { title: string, length: number }) => {
    //             return {
    //                 title: track.title,
    //                 length: track.length,
    //             };
    //         });
    //         return tracks;
    //     } catch (error) {
    //         console.error('Error fetching album tracks:', error);
    //         return null;
    //     }
    // };
    
    // // Example usage
    // const releaseId = '1b022e01-4da6-387b-a6ef-30eae1ebc2e3'; // Abbey RoadのリリースID
    // getAlbumTracks(releaseId).then(tracks => {
    //     console.log(tracks);
    // });
    

    return(
        <div>{id}</div>
        // <div>{albumData}</div>
    )
}

export default AlbumImage



    // const getAlbumCover = async(id: string) => {
    //     const endpoint = `https://coverartarchive.org/release/${id}/front`
    //     try{
    //         const response = await axios.get(endpoint)
    //         return response.data
    //     }catch(e){
    //         console.log(e)
    //     }
    //     return ;
    // };

    // getAlbumInfo(id).then(albumInfo => {
    //     console.log(albumInfo); // アルバム情報を表示
    //     console.log(getAlbumCover(id)); // アルバムジャケットURLを表示
    // });
