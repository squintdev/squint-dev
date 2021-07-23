import React from 'react';
import HoverImage from 'react-hover-image';

import SSWtext from '../images/screensaver-curation.png';
import SOOLtext from '../images/sool-gallery.png';
import RGBtext from '../images/rgb-gallery.png';
import MainMenu from '../images/main-menu.png';
import SSWtextHover from '../images/screensaver-curation-hover.png';
import SOOLtextHover from '../images/sool-gallery-hover.png';
import RGBtextHover from '../images/rgb-gallery-hover.png';
import MainMenuHover from '../images/main-menu-hover.png';

const GalleryNav = () => {
    return (
        <>
            <nav className="flex items-center justify-between mt-12">
                <a className="h-6 w-auto m-auto" href="/gallery">
                    <HoverImage className="h-6 w-auto m-auto" src={MainMenu} hoverSrc={MainMenuHover} alt="main menu" />
                </a>

                <a className="h-6 w-auto m-auto" href="/ssw-curation">
                    <HoverImage className="h-6 w-auto m-auto" src={SSWtext} hoverSrc={SSWtextHover} alt="Screensaver Curation" />
                </a>

                <a className="h-6 w-auto m-auto" href="/sool-gallery">
                    <HoverImage className="h-6 w-auto m-auto" src={SOOLtext} hoverSrc={SOOLtextHover} alt="SOOL Gallery" />
                </a>                

                <a className="h-6 w-auto m-auto" href="/rgb-gallery">
                    <HoverImage className="h-6 w-auto m-auto" src={RGBtext} hoverSrc={RGBtextHover} alt="RGB Gallery" />
                </a>   
            </nav>
        </>
    )
};

export default GalleryNav;
