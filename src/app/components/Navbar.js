import Link from 'next/link';

const Navbar = () => {
  return (
    <header class = 'navbar'>
        <Link href="/">
            <div className = 'flex align-center'>
                <img src="images/anime-logo.png" alt="Anime logo" className = 'mar-right-8'/>
                <h4>
                    Anime
                </h4>
            </div>

        </Link>
    </header>
  );
};

export default Navbar;
