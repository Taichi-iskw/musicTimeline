type ImageProps = {
    image: {
        url: string;
    };
};

const pictureSize = '80';
const ImageComponent: React.FC<ImageProps> = ({ image }) => {
    return <img src={image.url} alt='Artist Image' width={pictureSize} height={pictureSize} />;
};

export default ImageComponent;
