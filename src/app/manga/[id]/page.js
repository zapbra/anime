import Render from './Render';
import {getManga} from "@/app/lib/fetching";


const Manga = async ({params}) => {
    const { id } = params;
    const data = await getManga({ id: parseInt(id) } );

    return (
        <main>
            <Render
                manga={data.data.Media}
            />
        </main>
    )
};

export default Manga;