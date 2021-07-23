import React from 'react';
import HoverImage from 'react-hover-image';

import RetroPC from '../images/retro-pc.png';
import GalleryTitle from '../images/nft-gallery-title.png';
import SSWtext from '../images/screensaver-curation.png';
import SOOLtext from '../images/sool-gallery.png';
import RGBtext from '../images/rgb-gallery.png';
import SSWtextHover from '../images/screensaver-curation-hover.png';
import SOOLtextHover from '../images/sool-gallery-hover.png';
import RGBtextHover from '../images/rgb-gallery-hover.png';
import RetroPCHover from '../images/retro-pc-hover.gif';

const Gallery = () => {
    return (
        <div className="container w-3/4 m-auto">
            <div className="mt-24">
                <img className="w-1/2 m-auto" src={GalleryTitle} alt="NFT Gallery" />
            </div>
            <div className="w-1/3 m-auto">
                <div className="mt-24 flex items-center">
                    <a className="h-6 w-auto m-auto" href="/gallery/ssw-curation">
                        <HoverImage className="h-6 w-auto m-auto" src={SSWtext} hoverSrc={SSWtextHover} alt="Screensaver curation" />
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <a className="h-6 w-auto m-auto" href="/gallery/sool-gallery">
                        <HoverImage className="h-6 w-auto m-auto" src={SOOLtext} hoverSrc={SOOLtextHover} alt="SOOL Gallery" />
                    </a>                
                </div>
                <div className="mt-6 flex items-center">
                    <a className="h-6 w-auto m-auto" href="/gallery/rgb-gallery">
                        <HoverImage className="h-6 w-auto m-auto" src={RGBtext} hoverSrc={RGBtextHover} alt="RGB Gallery" />
                    </a>   
                </div>
            </div>

            <div>
                <HoverImage className="w-1/4 float-right" src={RetroPC} hoverSrc={RetroPCHover} alt="retro pc" />
            </div>

        </div>
    );
};

export default Gallery;
