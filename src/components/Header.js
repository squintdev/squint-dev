import React from 'react';
import { Link } from 'react-router-dom';

import exoplanet from '../images/exoplanet-punks-thumb.png';
import savers from '../images/savers-thumb.png';
import rejected from '../images/rejected-thumb.png';
import sool from '../images/sool-thumb.png';
import walrus from '../images/walrus-thumb.png';
import then from '../images/then-now-thumb.png';
import snitches from '../images/snitches-thumb.png';
import deathpunk from '../images/death-punk-thumb.png';
import glitchbanners from '../images/glitch-banners-thumb.png';
import conclusion from '../images/conclusion-thumb.png';
import dosskull from '../images/dos-skull-thumb.png';

const Header = () => {

    return (
        <>

        <div className="w-full bg-secondary-dark">
            <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/exoplanet-punks"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={exoplanet} alt="exoplanet punks" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2"><Link to="/exoplanet-punks">Exoplanet Punks</Link></p>
                            <p className="text-base text-gray-400 font-normal"><strong>Platform: </strong>Screensaver</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/sacred-walrus"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={walrus} alt="" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2"><Link to="/sacred-walrus">Temple of the Sacred Walrus</Link></p>
                            <p className="text-base text-gray-400 font-normal">OBJKTCOM</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={then} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Then vs Now</p>
                            <p className="text-base text-gray-400 font-normal">OpenSea Polygon</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={sool} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Seasons of our Lives</p>
                            <p className="text-base text-gray-400 font-normal">Screensaver</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={deathpunk} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">DEATH PUNK</p>
                            <p className="text-base text-gray-400 font-normal">OpenSea Ethereum</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={snitches} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Snitches Get Glitches</p>
                            <p className="text-base text-gray-400 font-normal">OpenSea Polygon</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={rejected} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Rejected Game Assets</p>
                            <p className="text-base text-gray-400 font-normal">Screensaver</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={savers} alt="" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Sanity Savers</p>
                            <p className="text-base text-gray-400 font-normal">Screensaver</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={glitchbanners} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Glitch Banners</p>
                            <p className="text-base text-gray-400 font-normal">OpenSea Ethereum</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={conclusion} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Impression of a Dying Conclusion</p>
                            <p className="text-base text-gray-400 font-normal">OpenSea Polygon</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={dosskull} alt=""  />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">DOS Skulls</p>
                            <p className="text-base text-gray-400 font-normal">Hicetnunc</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Header;
