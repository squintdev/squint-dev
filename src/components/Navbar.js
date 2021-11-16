import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <header className="border-b border-primary-light bg-primary-dark text-primary-light font-press-start">
                <nav className="container mx-auto flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <Link to="/">
                            squint.dev
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <a className="hover:text-secondary-light" href="https://twitter.com/burb8873" target="_blank" rel="noreferrer">@</a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;