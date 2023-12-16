import COLORS from "@/app/data/colors";
import styled from "styled-components";

const Cont = styled.div`
    display: grid;
    
`;

const EpisodeSection = ({episodes}) => {

    console.log('episodes');
    console.log(episodes);

    return (
        <Cont colors = {COLORS}>

        </Cont>
    )
};

export default EpisodeSection;