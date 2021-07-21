import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SquintMark from "../images/head-only.svg";

const menuItems = [
    {
        listText: "Home",
        listURL: "/"
    },
    {
        listText: "Blog",
        listURL: "/blog"
    },
    {
        listText: "Who Am I?",
        listURL: "/whoami"
    },
    {
        listText: "Contact",
        listURL: "/contact"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }

    const sideList = slider => (
        <div className="bg-blue-500 menuSliderContainer" onClick={toggleSlider(slider, false)}>
            <img className="squintMark" src={SquintMark} alt="SquintDev" />
            <hr />
            <ul>
                {menuItems.map((lsItem, key) => (
                    <li button key={key} component={Link} to={lsItem.listURL}>
                        <span className="whiteText" primary={lsItem.listText} />
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <header className="border-b border-accent-default">
                <nav className="container mx-auto flex items-center justify-between px-4 py-6">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-20 flex-none" src={SquintMark} alt="SquintDev" />
                        </Link>
                        <ul className="flex ml-16 space-x-8">
                            <li><Link to="/" className="hover:text-accent-default">Home</Link></li>
                            <li><Link to="/blog" className="hover:text-accent-default">Blog</Link></li>
                            <li><Link to="/projects" className="hover:text-accent-default">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-accent-default">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        $MATIC: $0.66
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;