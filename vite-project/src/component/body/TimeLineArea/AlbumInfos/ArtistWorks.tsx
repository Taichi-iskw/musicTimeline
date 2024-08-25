import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ArtistWorksProps {
    id: string;
}
interface AlbumInfo {
    id: string;
    name: string;
}

const ArtistWorks: React.FC<ArtistWorksProps> = ({ id }) => {
    const [albums, setAlbums] = useState<AlbumInfo[]>([]);

    useEffect(() => {
        const getWorks = async (id: string) => {
            try {
                const token = import.meta.env.VITE_SPOTIFY_TOKEN;
                const BASE_URL = import.meta.env.VITE_SPOTIFY_BASE_URL;
                const END_POINT = `${BASE_URL}artists/${id}/albums`;

                const res = await axios.get(END_POINT, {
                    params: {
                        include_groups: 'album',
                        limit: '50',
                        offset: '0',
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res.data.items);
                ////////////////////
                const albums = res.data.items;
                const revAlbums = albums.reverse();
                const uniqueAlbumNames: Set<string> = new Set();

                const uniqueAlbums = revAlbums.filter((album) => {
                    const albumName = album.name;
                    let mainName = albumName;

                    if (albumName.includes('(')) {
                        mainName = albumName.split('(')[0].trim();
                    } else if (albumName.includes('-')) {
                        mainName = albumName.split('-')[0].trim();
                    }

                    const isUnique = !uniqueAlbumNames.has(mainName);
                    if (isUnique) {
                        console.log(mainName, album.release_date);
                        uniqueAlbumNames.add(mainName);
                    }

                    return isUnique;
                });

                console.log(uniqueAlbums);

                ////////////////
                setAlbums(uniqueAlbums);
            } catch (error) {
                console.error('Error fetching artist albums:', error);
            }
        };

        getWorks(id);
    }, [id]);

    return (
        <div>
            <h2>Artist ID: {id}</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>{album.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistWorks;
