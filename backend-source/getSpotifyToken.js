export const handler = async (event) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const token = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${token}`,
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const accessToken = data.access_token;

        return {
            statusCode: 200,
            body: JSON.stringify({ accessToken }),
        };
    } catch (error) {
        console.error('Error fetching access token:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to get access token', details: error.message }),
        };
    }
};
