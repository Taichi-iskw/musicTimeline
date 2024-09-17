type ImageProps = {
    image: {
        url: string;
    };
    size: string;
};

const ImageComponent: React.FC<ImageProps> = ({ image, size }) => {
    return <img src={image.url} alt='Artist Image' width={size} height={size} />;
};

export default ImageComponent;
