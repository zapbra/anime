import React from "react";
import Render from "./render";
import { getCharacter } from "@/app/lib/fetching";

const Character = async ({ params }) => {
    const { id } = params;
    const character = await getCharacter({ id: parseInt(id) });
    return (
        <div>
            <Render data={character} />
        </div>
    );
};

export default Character;
