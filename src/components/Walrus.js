import React from 'react';
import Navbar from '../components/Navbar';
import ReactPlayer from 'react-player';

const Walrus = () => {
    let tokens = [
        {id: '0', editions: '1', title: 'Metaglyph', video: true, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/0/0/artifact.mp4', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0'},
        {id: '1', editions: '1', title: 'Lifewaves', video: true, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/1/1/artifact.mp4', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/1'},
        {id: '2', editions: '1', title: 'Astral Projection of the Pale Horse', video: true, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/2/2/artifact.mp4', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/2'},
        {id: '3', editions: '15', title: 'The Spokesman', video: false, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/3/3/artifact.gif', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/3'},
        {id: '4', editions: '1', title: 'Mandala of Light', video: false, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/4/4/artifact.png', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/4'},
        {id: '5', editions: '5', title: 'Vortex of the Tusk', video: true, ipfs: 'https://assets.objkt.media/file/assets-001/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/0/5/5/artifact.mp4', link: 'https://objkt.com/asset/KT1V5fVygugN4F7Yd2TKMA1EfUDwo2kkknqH/5'}
    ];

    return (
        <>
            <Navbar />
            <div className="w-full bg-secondary-dark pt-10 monotype">
                <div className="w-1/4 m-auto text-center text-3xl">
                    <h2>Temple of the Sacred Walrus</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>OBJKT.COM<br />
                        <strong>Currency: </strong>Tezos<br />
                        <strong>Status: </strong>Ongoing
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>?<br />
                        <strong>Current Supply: </strong>24<br />
                        <strong>Next Drop: </strong>Jan 2022
                    </div>
                </div>

                <div className="description p-6">
                    Not much is known about the Temple of the Sacred Walrus. What we do know is that a metaversal archeological search uncovered artifacts that tells us it is a cult in the metaverse that worships shape, color, and their Walrus god...especially its tusks.
                </div>

                <div className="tokens p-6">
                    <h3 className="text-2xl mb-4">The Tokens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            tokens.map (function(t){
                                return (
                                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                        <div className="mb-8">
                                            <a href={t.link} target="_blank" rel="noreferrer">
                                                {t.video ? (
                                                    <ReactPlayer url={t.ipfs} muted="true" autoplay="true" />
                                                )
                                                    : <img className="object-center object-cover h-36 w-36 lg:h-60 w-60" src={t.ipfs} alt="temple of the sacred walrus" />
                                                }

                                                
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold mb-2"><a href={t.link} target="_blank" rel="noreferrer">{t.title}</a></p>
                                            <p className="text-xl text-white font-bold mb-2"><strong>Editions: </strong>{t.editions}</p>
                                            <p className="text-base text-gray-400 font-normal"><strong>Platform: </strong>OBJKTCOM</p>
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

export default Walrus;