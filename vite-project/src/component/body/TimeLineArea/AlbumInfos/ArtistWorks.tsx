import React, { useState, useEffect } from 'react';
import ImageComponent from '../../general-functions/ImageComponent';
import { getAllAlbums } from '../../general-functions/getAllAlbums';

interface ArtistWorksProps {
    id: string;
    name: string;
}

interface AlbumInfo {
    id: string;
    name: string;
    release_date: string;
    images: { url: string }[];
}

const ArtistWorks: React.FC<ArtistWorksProps> = ({ id, name }) => {
    const [albums, setAlbums] = useState<AlbumInfo[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albums = await getAllAlbums(id);
                setAlbums(albums);
            } catch (error) {
                console.error('Error fetching artist albums:', error);
            }
        };

        fetchAlbums();
    }, [id]);

    console.log(albums);

    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        <ImageComponent image={album.images[0]} />
                        {album.release_date + ' : ' + album.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistWorks;
