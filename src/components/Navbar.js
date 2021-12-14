import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <header className="bg-accent-default text-secondary-dark text-3xl font-bold">
                <nav className="mx-auto flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <Link to="/">
                            <h1 className="text-5xl">squint.dev</h1>
                        </Link>
                    </div>
                    <div className="flex items-center monotype">

                        <ul className="flex text-sm md:text-base">
                            <li className="md:mr-6">
                                <a className="text-blue-500 hover:text-primary-dark" href="https://opensea.io/SquintDev?tab=created" target="_blank" rel="noreferrer">OpenSea</a>
                            </li>
                            <li className="md:mr-6">
                                <a className="text-blue-500 hover:text-primary-dark" href="https://objkt.com/profile/tz1N9VQ5c1k5n6XPN23GhdWkDG53p12DcULd/created" target="_blank" rel="noreferrer">Objkt.com</a>
                            </li>
                            <li className="md:mr-6">
                                <a className="text-blue-500 hover:text-primary-dark" href="https://hicetnunc.art/SquintDev" target="_blank" rel="noreferrer">HEN</a>
                            </li>
                            <li className="md:mr-6">
                                <a className="text-blue-500 hover:text-primary-dark" href="https://ssw.wtf/squintdev" target="_blank" rel="noreferrer">Screensaver</a>
                            </li>
                        </ul>
                        
                        <a className="hover:text-primary-dark text-sm md:text-base" href="https://twitter.com/burb8873" target="_blank" rel="noreferrer">@</a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;