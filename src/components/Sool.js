import React from 'react';
import Navbar from './Navbar';

const Sool = () => {
    let tokens = [
        {id: '1', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/1.png', link: 'https://www.screensaver.world/object/2315'},
        {id: '2', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/2.png', link: 'https://www.screensaver.world/object/2329'},
        {id: '6', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/6.png', link: 'https://www.screensaver.world/object/2344'},
        {id: '7', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/7.png', link: 'https://www.screensaver.world/object/2356'},
        {id: '3', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/3.png', link: 'https://www.screensaver.world/object/2334'},
        {id: '4', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/4.png', link: 'https://www.screensaver.world/object/2338'},
        {id: '8', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/8.png', link: 'https://www.screensaver.world/object/2365'},
        {id: '9', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/9.png', link: 'https://www.screensaver.world/object/2610'},
        {id: '11', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/11.png', link: 'https://www.screensaver.world/object/2678'},
        {id: '12', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/12.png', link: 'https://www.screensaver.world/object/3172'},
        {id: '5', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/5.png', link: 'https://www.screensaver.world/object/2339'},
        {id: '10', img: 'https://gateway.pinata.cloud/ipfs/QmdesSeXGdnyZT8hVtGnZnDs9rtoGYhoGj91zLRoTGgB6a/10.png', link: 'https://www.screensaver.world/object/2625'},
    ];

    return (
        <>
            <Navbar />
            <div className="w-full bg-secondary-dark pt-10 monotype">
                <div className="w-1/4 m-auto text-center text-3xl">
                    <h2>Seasons of our Lives</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>Screensaver<br />
                        <strong>Currency: </strong>MATIC<br />
                        <strong>Status: </strong>Ongoing
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>20<br />
                        <strong>Current Supply: </strong>12<br />
                        <strong>Next Drop: </strong>As It's Lived
                    </div>
                </div>

                <div className="description p-6 w-1/2 m-auto text-center">
                    Seasons of our Lives is a collection of 1/1 abstract pieces that when all have been minted fit together to form one giant piece of abstract art. Each piece represents a part of a season. There will also be 4 pieces each devoted to an entire season. The order of the tokens displayed below is to display how the pieces fit together.
                </div>

                <div className="tokens p-6">
                    <h3 className="text-2xl mb-4">The Tokens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {
                            tokens.map (function(t){
                                return (
                                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                        <div className="mb-8">
                                            <a href={t.link} target="_blank" rel="noreferrer"><img className="object-center object-cover h-36 w-36 lg:h-60 w-60" src={t.img} alt="squintdev seasons of our lives" /></a>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold mb-2"><a href={t.link} target="_blank" rel="noreferrer">#{t.id}</a></p>
                                            <p className="text-xl text-white font-bold mb-2"><strong>Editions: </strong>1</p>
                                            <p className="text-base text-gray-400 font-normal"><strong>Platform: </strong>Screensaver</p>
                                        </div>
                                    </div>

                                )
                            })

                        }


                    </div>
                </div>
            </div>
        </>
    );
};

export default Sool;