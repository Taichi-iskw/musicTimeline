import SearchArea from './SearchArea/mainSearch';
import TimeLineArea from './TimeLineArea/mainTimeLine';

// ここでartistのidをグローバル的に宣言するべきか

const Body = () => {
    return (
        <>
            <SearchArea />
            <TimeLineArea />
        </>
    );
};

export default Body;
