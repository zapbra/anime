import Link from 'next/link';
import styled from "styled-components";
import COLORS from "@/app/data/colors";


const Cont = styled.div`
    max-width: 100px;
    margin-right: 8px;
    margin-bottom: 16px;
    align-self: start;
    &:hover {
        p.bold {
            text-decoration: underline;
        }
        img {
            opacity: .9;
        }
    }
    img {
        width: 100px;
        height: 150px;
        object-fit: contain;
        object-position: top;
    }
`;

const Character = ({ character }) => {

    return (
        <Cont colors={COLORS}>
            <Link href = {`/character/${character.id}`}>

                <img src={character.image.medium} alt={character.name.full}/>
                <p className='bold'>
                    {character.name.full}
                </p>
                {character.age != null && (
                    <p className='small'><span className="grey">Age: </span> {character.age}</p>
                )}
            </Link>
        </Cont>
    )
};

export default Character;