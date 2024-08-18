import styled from "styled-components"

const S_DivLeftSide =styled.div`
    width:60px;
    border:solid black 1px;
`
interface YearsProps {
    date: string;
}

const Years: React.FC<YearsProps> = ({ date }) => {
    return(
        <S_DivLeftSide>
            {date.slice(0,7)} {/* yyyy-mm */}
            {/* {date.slice(0,4)}/{Number(date.slice(5,6))? date.slice(5,7): date.slice(6,7)}*/}
        </S_DivLeftSide>
    )
}

export default Years