import SearchArea from './SearchArea/mainSearch';
import TimeLineArea from './TimeLineArea/mainTimeLine';
import { ArtistProvider } from './general-functions/ArtistIdContext';

const Body = () => {
    return (
        <ArtistProvider>
            <SearchArea />
            <TimeLineArea />
        </ArtistProvider>
    );
};

export default Body;
