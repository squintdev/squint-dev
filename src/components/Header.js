import React from 'react';
import { Link } from 'react-router-dom';

import cc0 from '../images/cc0-thumb.png';
import exoplanet from '../images/exoplanet-punks-thumb.png';
import exoplanet2 from '../images/exoplanet-new.png';
import sool from '../images/sool-thumb.png';
import walrus from '../images/walrus-thumb.png';
import then from '../images/then-now-thumb.png';

const Header = () => {

    return (
        <>

        <div className="w-full bg-secondary-dark">
            <section className="mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 monotype">
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/exo-mint"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={exoplanet2} alt="exomint" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2"><Link to="/exo-mint">Exoplanet Punks</Link></p>
                            <p className="text-base text-gray-400 font-normal">Mint from the final 50.</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/projectcc0"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={cc0} alt="projectcc0" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2"><Link to="/projectcc0">#ProjectCC0</Link></p>
                            <p className="text-base text-gray-400 font-normal">Everywhere</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/exoplanet-punks"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={exoplanet} alt="exoplanet punks" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2"><Link to="/exoplanet-punks">Exoplanet Punks</Link></p>
                            <p className="text-base text-gray-400 font-normal">Screensaver</p>
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
                            <Link to="/then-vs-now"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={then} alt="" /></Link>
                        </div>
                        <div className="text-center">
                            <Link to="/then-vs-now"><p className="text-xl text-white font-bold mb-2">Then vs Now</p></Link>
                            <p className="text-base text-gray-400 font-normal">OpenSea Polygon</p>
                        </div>
                    </div>
                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <Link to="/sool"><img className="object-center object-cover rounded-lg h-36 w-36 lg:h-48 w-48" src={sool} alt="" /></Link>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Seasons of our Lives</p>
                            <p className="text-base text-gray-400 font-normal">Screensaver</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Header;
