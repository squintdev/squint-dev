import React from 'react';
import Navbar from '../components/Navbar';
import ReactPlayer from 'react-player';

const Cc0 = () => {
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
                    <h2>#ProjectCC0</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>Everywhere<br />
                        <strong>Currency: </strong>Any or None<br />
                        <strong>Status: </strong>Ongoing
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>?<br />
                        <strong>Current Supply: </strong>24<br />
                        <strong>Next Drop: </strong>?
                    </div>
                </div>

                <div className="description p-6 w-1/2 m-auto text-center">
                    <p>#ProjectCC0 is something I started in December 2021 as an experiment with copyright and intellectual property within the NFT space. On December 17, 2021, I posted this video loop on Twitter:</p>
                    <p className="my-4 mx-auto"><ReactPlayer className="mx-auto" url="https://ipfs.io/ipfs/QmZPCja2AMK3obx7SbQYjyY7dhVWczJ1gjTJarPRnP2vpr" muted="true" playing="true" loop /></p>
                    <p className="mb-4">Along with the video I wrote up a Twitter thread that read as follows:</p>
                    <p className="mb-4">I can't stand copyright. If you want to RCSA any of my work, feel free. Along those lines...I created this little video loop that I was going to mint, but now I want all of YOU to mint it. A thread 🧵</p>
                    <p className="mb-4">It started with a quick doodle in Photoshop. I created a border that I animated in PhotoMosh. I then composited the frame and doodle in After Effects. I then uploaded the doodle (png and psd) and video loop to IPFS which can be found here.</p>
                    <p className="mb-4"><a href="https://gateway.pinata.cloud/ipfs/QmaC7CC6G69uNkP8svy8yotmGRL1EFuqACHKqRQFGyNv6o" target="_blank" rel="noreferrer">IPFS Link to Files</a></p>
                    <p className="mb-4">I would love to see you right-click save any of these files you would like to use. You can then mint them as is or remix them. All 3 files are completely CC0. The only thing I request is that if you mint, you include "Project CC0" in the title. It's optional, but requested!</p>
                    <p className="mb-4">In closing, fuck copyright. I would love to see remixes from some of my favorite artists who I will tag here! @robnessofficial @maxcapacity @voidkross @x3r0ne @MisterReborn @blissofart @PurzBeats @CityShrug @TAYL0RWTF @thesenfts @letsglitchit @SHED_mdrn_lvng @bitpixi @bitttylabs</p>
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

export default Cc0;