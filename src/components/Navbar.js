import React from 'react';
import {Link} from 'react-router-dom';
import SquintMark from "../images/head-only.svg";

const Navbar = () => {

    return (
        <>
            <header className="border-b border-accent-default">
                <nav className="container mx-auto flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-20 flex-none" src={SquintMark} alt="SquintDev" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        @
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;