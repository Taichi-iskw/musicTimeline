// import { useState } from 'react';
import axios from 'axios';

interface AlbumImageProps{
    id:string
}
// "title": "Abbey Road",
// "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
// "id": "9162580e-5df4-32de-80cc-f45a8d8a9b1d",

const AlbumImage:React.FC<AlbumImageProps> =({id})=>{
    // const [albumData, setAlbumData] = useState()

    const getAlbumInfo = async (id: string) => {
        const url = `https://musicbrainz.org/ws/2/release-group/${id}`
        // const url = `https://musicbrainz.org/ws/2/release/${id}?inc=recordings&fmt=json`;
        console.log(id)
        try{
            const response = await axios.get(url);
            return response;
        }catch(e){
            console.log(e)
        }
    };
    async function get(){
        const Boo = true
        const Test = "9162580e-5df4-32de-80cc-f45a8d8a9b1d"
        const testId = Boo?Test:id;

        const response = await getAlbumInfo(testId);
        console.log(response)
        // setAlbumData(response)
        // 叩くAPIが間違ってそう。
        // 必要なデータ[収録曲, アルバム画像]




    }
    get()

    return(
        <div>Here Album Image</div>
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
