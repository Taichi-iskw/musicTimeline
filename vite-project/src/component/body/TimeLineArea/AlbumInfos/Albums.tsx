import styled from "styled-components";

import AlbumImage from "./AlbumImage";

interface AlbumsProps{
    title:string;
    id:string
}

const S_Div = styled.div`
    /* max-width: 0%; */
`

const Albums: React.FC<AlbumsProps> =({title, id})=>{
    return(
        <>
            <S_Div>{title}</S_Div>
            <AlbumImage id={id}/>
        </>
    )
}

export default Albums;