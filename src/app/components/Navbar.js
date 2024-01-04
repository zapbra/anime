"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

  return (
    <header className = 'navbar'>
        <Link href="/">
            <div className = 'flex align-center'>
                <img src="images/anime-logo.png" alt="Anime logo" className = 'mar-right-8'/>
                <h4>
                    Anime Wiki
                </h4>
            </div>
        </Link>

        <div className="flex align-center">
            <Link href = '/allanime' className='mar-right-16'>
                <div className = {pathname == '/allanime' ? 'nav-link-selected' : 'nav-link'}>
                    <h5>Anime</h5>
                </div>
            </Link>

            <Link href = '/allmanga' className='mar-right-16'>
                <div className= {pathname == '/allmanga' ? 'nav-link-selected' : 'nav-link'}>
                    <h5>Manga</h5>
                </div>
            </Link>

            <Link href = '/allcharacters'>
                <div className=" {pathname == '/allcharacters' ? 'nav-link-selected' : 'nav-link'}">
                    <h5>Characters</h5>
                </div>
            </Link>
        </div>
    </header>
  );
};

export default Navbar;
