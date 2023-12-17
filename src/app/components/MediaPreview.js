import styled from "styled-components";
import COLORS from "@/app/data/colors";

const Cont = styled.div`
    margin-bottom: 16px;
    max-width: 230px;
    margin-right: 16px;
    
    img {
        width: 230px;
        height: 345px;
    }
`;

const MediaPreview = ({media}) => {

    return (
        <Cont colors = {COLORS}>
            <img src={media.coverImage.large} alt= {media.title.english} />
            <h5>
                {media.title.english}
            </h5>
        </Cont>
    )
};

export default MediaPreview;