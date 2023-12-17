"use client";
import {useState} from "react";
import Image from 'next/image';
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import {FaMars, FaVenus, FaChild} from 'react-icons/fa6';
import Favorites from "@/app/components/Favorites";
import ReactCommonmark from "react-commonmark";
import Return from "@/app/components/Return";
import MediaPreview from "@/app/components/MediaPreview";


const Cont = styled.div`
.character-text {
    padding-left: 32px;
    h1 {
        text-decoration: underline;
        text-decoration-color: inherit;     
    }
    @media only screen and (max-width: 600px) {
        padding-left: 0;
        margin-top: 16px;
        margin-bottom: 16px;
    }
}
    .text-cont {
        padding: 16px;
        background-color: ${props=> props.colors.lightPink} ;
        p {
            margin-bottom: 8px;
        }
        & > * {
            max-width: 800px;
            margin: 0 auto;
        }
    }
`;

const Render = ({ data }) => {
    const [character, setCharacter] = useState(data.data.Character);

    const mediaElements = character.media.edges.map((media, index) => {
       return (
           <MediaPreview
               key = {index}
               media = {media.node}
           />
       )
    });


    return (
        <Cont colors={COLORS} className='default-page'>
        <Return />
        <Favorites favoriteCount={character.favourites}/>
        <div className='flex flex-wrap'>
            <Image
                src={character.image.large}
                width={230}
                height={345}
            />

            <div className='character-text'>
                <h1 className='mar-bottom-16'>{character.name.full}</h1>
                <div className="flex align-center mar-bottom-16">
                    {
                        character.gender === "Male" ? <FaMars className='icon-sm grey mar-right-8'/> :
                            <FaVenus className='icon-sm grey mar-right-8'/>
                    }
                    <h5>{character.gender}</h5>
                </div>

                <div className="flex align-center mar-bottom-16">
                    <FaChild className='icon-sm grey mar-right-8'/>
                    <h5>
                        {character.age}
                    </h5>
                </div>

            </div>


        </div>
        <div className = 'content-box mar-bottom-32'>
            <div className="text-content">
                <h2>About {character.name.full}</h2>
                <div className="black-line mar-bottom-16"></div>
                <ReactCommonmark
                    source={character.description}
                />
            </div>

        </div>

        <div className="content-box">
            <div className="text-content">
            <h2>Featured In</h2>
                <div className="black-line mar-bottom-16"></div>

                <div className="flex flex-wrap space-around">
                    {mediaElements}
                </div>
            </div>
        </div>
    </Cont>
    )
};

export default Render;
