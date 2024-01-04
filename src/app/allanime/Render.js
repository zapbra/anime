"use client";
import ContentSection from "@/app/components/ContentSection";


const Render = ({ anime }) => {
    console.log('anime');
    console.log(anime);

    return (
        <div>
            <ContentSection
                title = 'Anime'
                data={anime}
            />
        </div>
    )
};

export default Render;