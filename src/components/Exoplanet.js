import React from 'react';
import Navbar from './Navbar';

const Exoplanet = () => {
    let tokens = [
        {id: '1', img: 'https://ipfs.io/ipfs/QmZuu1xW3SjsbxtF2nBuM8K6QyBxrM9FLuPGWq6iW7g8Ep', link: 'https://www.screensaver.world/object/3342'},
        {id: '2', img: 'https://ipfs.io/ipfs/QmZR8nVV8E364qGjYEEG17qrNccULGhRK3xbSQYj8sNL42', link: 'https://www.screensaver.world/object/3343'},
        {id: '3', img: 'https://ipfs.io/ipfs/QmSyQzM1aSJ2dLcTe63KRPSwQiegvzeS1h4Gev6LuTf11p', link: 'https://www.screensaver.world/object/3344'},
        {id: '4', img: 'https://ipfs.io/ipfs/QmQpPDcwo5hDWVQGib3TdjREgRvxEKDxvJyCYFd9HjuD9G', link: 'https://www.screensaver.world/object/3345'},
        {id: '5', img: 'https://ipfs.io/ipfs/QmXGHZ2TKAFEuz87KhSRaaebKdiSVRR6WEAQ7vhog68UqD', link: 'https://www.screensaver.world/object/3346'},
        {id: '6', img: 'https://ipfs.io/ipfs/QmY77M7BiXT64C1Z88cd4f9gsBCShm6QMUaMAyap9NLmrr', link: 'https://www.screensaver.world/object/3361'},
        {id: '7', img: 'https://ipfs.io/ipfs/Qmdkfs65KepKpWpBgLRPAc7NdKJZ9mCsPRAy8Ch8jgVHLG', link: 'https://www.screensaver.world/object/3362'},
        {id: '8', img: 'https://ipfs.io/ipfs/QmXfBTiv1JJ6vkRyhiGMbPRsnC46sGFRzr9vWforbx53x7', link: 'https://www.screensaver.world/object/3364'},
        {id: '9', img: 'https://ipfs.io/ipfs/QmXcPn5j8Ku5MiSwze1PW9cFwudxBGSHCtj18H2dHCBnsT', link: 'https://www.screensaver.world/object/3365'},
        {id: '10', img: 'https://ipfs.io/ipfs/QmcQqJfGRhS2fGz1ea45LjxC8g1D2PEQPareh5UX3CmgGR', link: 'https://www.screensaver.world/object/3366'},
        {id: '11', img: 'https://ipfs.io/ipfs/QmYQxuKPbYq7RywF277s94jEY57toZxC1TNJryEF1GG5P3', link: 'https://www.screensaver.world/object/3385'},
        {id: '12', img: 'https://ipfs.io/ipfs/QmdYRVmaWa83ukZ3U5kMByGWRgWSrc3f24bGYSqjjyD87b', link: 'https://www.screensaver.world/object/3386'},
        {id: '13', img: 'https://ipfs.io/ipfs/QmPadYYT9szBY7GiMcPKoCAos22BWooai9XNpsXNqzEsFd', link: 'https://www.screensaver.world/object/3387'},
        {id: '14', img: 'https://ipfs.io/ipfs/QmXHQyNJYkz2bZ5RyKroC4VsQBfDkpxseLye1ptCfSuVzL', link: 'https://www.screensaver.world/object/3388'},
        {id: '15', img: 'https://ipfs.io/ipfs/QmT3RLRH322jBdiP7Y5z43nUwfk4Cp3GbL22BKjnrbiF5r', link: 'https://www.screensaver.world/object/3389'},
        {id: '16', img: 'https://ipfs.io/ipfs/QmNy4QJDddydn2w3KFPeBsT6rFBjSyT4ywgRQqRi1oNj6k', link: 'https://www.screensaver.world/object/3408'},
        {id: '17', img: 'https://ipfs.io/ipfs/Qmb5LLR4g147pWEKbdXFm1omChCRjmQ9xkcXZ9WNaJkKkR', link: 'https://www.screensaver.world/object/3410'},
        {id: '18', img: 'https://ipfs.io/ipfs/QmRn7VxxaZ5RSVE16YZYRrCztaLXZfNumAZgJGN33b2SYd', link: 'https://www.screensaver.world/object/3411'},
        {id: '19', img: 'https://ipfs.io/ipfs/QmUnzBFQto1bp9EFWBGmS6nFSYa8mfqaUyTQQYFcXtbgDo', link: 'https://www.screensaver.world/object/3412'},
        {id: '20', img: 'https://ipfs.io/ipfs/QmYg54uPfwc2KwYBEYAZTs3VM3nwuq2qvujjrKZmqw1c55', link: 'https://www.screensaver.world/object/3413'},
        {id: '21', img: 'https://ipfs.io/ipfs/QmSCNbQGWfjZNJ2U1Wf2r4VYpGNqUxd9XA3f1Be6WFMT7J', link: 'https://www.screensaver.world/object/3460'},
        {id: '22', img: 'https://ipfs.io/ipfs/Qmeyh9vnVAQc9jB6pXXQ721rBFmh9LrDWefh8VFuK453mw', link: 'https://www.screensaver.world/object/3461'},
        {id: '23', img: 'https://ipfs.io/ipfs/QmaSnb7Foj91qRkCmyZfuYfjh6XsrtDd39uf6Qq6V9aHh4', link: 'https://www.screensaver.world/object/3462'},
        {id: '24', img: 'https://ipfs.io/ipfs/QmcJTyuKPb34CudRokrf4ByMdzSnVcMb11j756GLD6mAk3', link: 'https://www.screensaver.world/object/3464'},
        {id: '25', img: 'https://ipfs.io/ipfs/QmU5tHFiNwBrSfgZdHaHAw2hStMAR7nidQeH1Hp9XZhfmY', link: 'https://www.screensaver.world/object/3465'},
        {id: '26', img: 'https://ipfs.io/ipfs/QmYVCfcLHXsxcutozZLmcZGfJnELexYFh1f3rMpdDhUr2Y', link: 'https://www.screensaver.world/object/4587'},
        {id: '27', img: 'https://ipfs.io/ipfs/QmeVVwgJsdRHCvAzas6zAjWg9tTkfaAJMUtTx7NLci3X6C', link: 'https://www.screensaver.world/object/4589'},
        {id: '28', img: 'https://ipfs.io/ipfs/QmZ4YJLRRzHGRab2uXBjqyoCqLR2tnMQVimMTqPjP9yTmp', link: 'https://www.screensaver.world/object/4590'},
        {id: '29', img: 'https://ipfs.io/ipfs/QmNa2qvRdL8brriwdtzVXSo8yrNtfv5FzE3ZFHguddmwjJ', link: 'https://www.screensaver.world/object/4591'},
        {id: '30', img: 'https://ipfs.io/ipfs/QmT3FE4sRS7f1B2aC3qkvkwwqX5UPYFvvo6r2C5twd9onv', link: 'https://www.screensaver.world/object/4594'},
    ];


    return (
        <>
            <Navbar />
            <div className="w-full bg-secondary-dark pt-10 monotype">
                <div className="w-1/4 m-auto text-center text-3xl">
                    <h2>Exoplanet Punks</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>Mixed<br />
                        <strong>Currency: </strong>MATIC<br />
                        <strong>Status: </strong>Ongoing
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>100<br />
                        <strong>Current Supply: </strong>50<br />
                        <strong>Next Drop: </strong>June 2022
                    </div>
                </div>

                <div className="description p-6 w-1/2 m-auto text-center">
                    Exoplanet Punks is a collection of 100 unique pixel art aliens. The meta descriptions of each of the first 30 Exoplanet Punks also contain a short story.
                </div>

                <div className="tokens p-6">
                    <h3 className="text-2xl mb-4">The Tokens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {
                            tokens.map (function(t){
                                return (
                                    <div className="w-full bg-secondary-light rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                        <div className="mb-8">
                                            <a href={t.link} target="_blank" rel="noreferrer"><img className="object-center object-cover h-36 w-36 lg:h-60 w-60" src={t.img} alt="exoplanet punks" /></a>
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

export default Exoplanet;
