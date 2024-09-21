// global.ts
import axios from 'axios';

let spotifyToken: string | null = null;
let tokenExpiryTime: number | null = null;

async function getToken() {
    if (spotifyToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
        return spotifyToken;
    }

    const resData = await axios.get(
        'https://t37840vz07.execute-api.ap-northeast-1.amazonaws.com/SpotifyToken',
    );
    const resBody = JSON.parse(resData.data.body);
    spotifyToken = resBody.accessToken;
    tokenExpiryTime = Date.now() + 3600 * 1000;

    return spotifyToken;
}

export default getToken;
