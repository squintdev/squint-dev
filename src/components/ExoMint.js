import React from 'react';
import Navbar from './Navbar';

const ExoMint = () => {

    return (
        <>
            <Navbar />
            <div className="w-full bg-secondary-dark pt-10 monotype">
                <div className="w-1/4 m-auto text-center text-3xl">
                    <h2>Exoplanet Punks</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>Right Here<br />
                        <strong>Currency: </strong>MATIC<br />
                        <strong>Status: </strong>Final Drop Happening Now
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>100<br />
                        <strong>Current Supply: </strong>50<br />
                        <strong>Next Drop: </strong>June 2022
                    </div>
                </div>

                <div className="description p-6 w-1/2 m-auto text-center">
                    Exoplanet Punks is a collection of 100 unique pixel art aliens. The meta descriptions of each of the first 30 Exoplanet Punks also contain a short story. Connect your wallet below to mint!
                </div>

                <div className="p-4 wallet h-screen">
                    <iframe 
                        src="https://gateway.ipfscdn.io/ipfs/QmQTQPfoJbAPYAbRqNLmm9gfLspXuXq5TVa8LgQEf6vktt/nft-drop.html?contract=0x6ED5b26A06CFBB097fd7bf0534643EC112060553&chainId=137"
                        className="w-full m-auto h-3/4 max-w-screen border-none md:w-3/4 md:h-1/2"
                    ></iframe>
                </div>

            </div>
        </>

    );
};

export default ExoMint;
