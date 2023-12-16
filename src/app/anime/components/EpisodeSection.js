import COLORS from "@/app/data/colors";
import styled from "styled-components";

const Cont = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .episode {
        padding: 8px;
        border-bottom: 1px solid ${props => props.colors.pink};
        &:nth-of-type(2n) {
            background-color: #fff;
        }
    }
    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 300px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const EpisodeSection = ({episodes}) => {

    console.log('episodes');
    console.log(episodes);
    const episodeElems = episodes.map((episode, index) => {
       return (
           <div className="episode" key = {index}>
               <p>{episode.title}</p>
           </div>
       )
    });

    return (
        <Cont colors = {COLORS}>
            {episodeElems}
        </Cont>
    )
};

export default EpisodeSection;