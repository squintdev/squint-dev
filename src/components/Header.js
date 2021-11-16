import React from 'react';

const Header = () => {
    return (
        <div className="container w-full m-auto px-4 py-6 text-secondary-light font-press-start text-2xl">
            <div>PROJECTS</div>
            <div className="text-lg mt-4 mb-8 text-primary-light">
                <p><a className="hover:text-secondary-light" href="https://screensaver.world" target="_blank">Exoplanet Punks</a></p>
                <p><a className="hover:text-secondary-light" href="https://screensaver.world" target="_blank">Seasons of our Lives</a></p>
                <p><a className="hover:text-secondary-light" href="https://objkt.com" target="_blank">Temple of the Sacred Walrus</a></p>
                <p><a className="hover:text-secondary-light" href="https://opensea.io" target="_blank">Glitch Banners</a></p>
                <p><a className="hover:text-secondary-light" href="https://screensaver.world" target="_blank">Sanity Savers</a></p>
                <p><a className="hover:text-secondary-light" href="https://objkt.com" target="_blank">Dos Skulls</a></p>
            </div>


            <div>LINKS</div>
            <div className="text-lg mt-4 mb-8 text-primary-light">
                <p><a className="hover:text-secondary-light" href="https://opensea.io/SquintDev?tab=created" target="_blank">[Eth, Matic] OpenSea</a></p>
                <p><a className="hover:text-secondary-light" href="https://objkt.com/profile/tz1N9VQ5c1k5n6XPN23GhdWkDG53p12DcULd/created" target="_blank">[Tezos] Objkt.com</a></p>
                <p><a className="hover:text-secondary-light" href="https://screensaver.world/squintdev" target="_blank">[Matic] Screensaver.world</a></p>
                <p><a className="hover:text-secondary-light" href="https://twitter.com/burb8873" target="_blank">[SOCIAL] Follow me on Twitter</a></p>           
            </div>
        </div>
    );
};

export default Header;
