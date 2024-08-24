import SearchArea from './SearchArea/mainSearch';
import TimeLineArea from './TimeLineArea/mainTimeLine';
import { ArtistProvider } from './ArtistIdContext';
// ここでartistのidをグローバル的に宣言するべきか

const Body = () => {
    return (
        <ArtistProvider>
            <SearchArea />
            <TimeLineArea />
        </ArtistProvider>
    );
};

export default Body;
