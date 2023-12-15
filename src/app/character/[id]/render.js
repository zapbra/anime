"use client";
import {useState} from "react";
import Image from 'next/image';
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import {FaMars, FaVenus, FaChild} from 'react-icons/fa6';
import Favorites from "@/app/components/Favorites";
import ReactCommonmark from "react-commonmark";
import Return from "@/app/components/Return";

const Cont = styled.div`
.character-text {
    padding-left: 32px;
    h1 {
        text-decoration: underline;
        text-decoration-color: inherit;     
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
    console.log('character');
    console.log(character);
    return <Cont colors={COLORS} className='default-page'>
        <Return />
        <Favorites favoriteCount={character.favourites}/>
        <div className='flex'>
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
        <div className = 'text-cont'>
            <ReactCommonmark
                source = {character.description}
            />
        </div>
    </Cont>;
};

export default Render;
