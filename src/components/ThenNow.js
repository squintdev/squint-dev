import React from 'react';
import Navbar from './Navbar';

const ThenNow = () => {
    let tokens = [
        {id: '1', stanza: "I seemed to skip, Straight from a happy kid to a coke head throwing a fit, Just one more hit, Bump me up one more time, To that top walkway just above the cloud line, Running over city scapes, A San Francisco sky line, This pain has no place in me, There's no way it could be mine.", img: 'https://lh3.googleusercontent.com/W2VE54lhHRdtEMsockUt1Sh-xlTRAKOOoXh8wOlpwgYCcG0tzCP_ZZmuhXCqeKe4N7-vn2RZHjd7Qz7V2HEwKTO6-yivNFOCxEEnoA=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399366507066294297'},
        {id: '2', stanza: "My parents both love me, Nobody ever hit me, I just don't see a reason, To need a chemical to feel free, Free is a funny word for it, I'm a slave to my own sense of freedom.", img: 'https://lh3.googleusercontent.com/lydjBbCDaCTjTurYqKDXdPg6pLsKt4rvvCKcNTrdJyZ-x4eQNeQ8-Z7SLEZ7RW6ukn_mreCzZAHdKx0D8tqCoZTXUIaADmNQ9oZQ=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399367606577922073'},
        {id: '3', stanza: "The fog lifts briefly and I can see clear, The loneliness is only overshadowed by fear, Lucidity leads me to stop rhyming, To stop trying to sound cool and just tell the truth, The truth that hurts to think about to this day, The truth is that I can see what I once was, I can see that I like who I used to be, I miss myself.", img: 'https://lh3.googleusercontent.com/Q2Wv_pZ7Oh0JOlkjTEA1ulu562256y1eInc9b5fOOo5MzWvC95QoRw6zKl_ln9dTHHlWMmZF1KdO2G1CgyZMVtuGw26A42_FYpvu=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399368706089549849'},
        {id: '4', stanza: "Where have I gone? Why do I bury myself in powder and booze? Questions need answers so I meditate, Six and a half hours, With the barrel of a .38, That's 390 minutes, Learning and getting used to The taste of gun oil.", img: 'https://lh3.googleusercontent.com/NVShezokcFHgyVMIvLiafTj55UM5eI9Z9ggfMF4FTqWJYSC5apq1Bsp_ypIaDPFokiK6MbzGEjNH5h-xlwYo_CeOuapmCNsJhPdz=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399369805601177625'},
        {id: '5', stanza: "I couldn't do it. I was scared. I guess something in me wanted to live. So I stepped back into the fog, Where I lived a while longer, Powder, smoke and vodka, Rock bottom's not so bad When there’s whiskey to make you stronger, Free form chaos, It was spiritual anarchy, Gravity was all that guided me.", img: 'https://lh3.googleusercontent.com/ngoZkeM4MSB6en29ADriJTzbLaHzA0T4xVS3S51c6Fpown7f-MZdV-Wkj5HKZUcfeDJi37ynsdiYVUXwn0OElzZvTITj4lRNgRH7=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399370905112805401'},
        {id: '6', stanza: "Suddenly the fog is gone, I can hear them talking, Can't make out the words or voices, Strangers...they are talking about me.", img: 'https://lh3.googleusercontent.com/yt_PeMzyUVd2S4m1fSrLiSgax5tcA6O0Icuj4EiAeUOp8VK5VsxehfuPR7ZkxhQaYDJNr6tGw9RUj4IHsL2pwjk7izsA6UNt_yjkEg=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399372004624433177'},
        {id: '7', stanza: "White room. White bed. White sheets. White floors. One wooden table and a nurse taking notes, So, one of the voices is the nurse, Who is the other voice? I can feel myself talking. The other voice is me? Unaware of my own answers, Not even knowing her questions, This must be a hospital. She hands me a form to sign, The letterhead is crystal clear, A green and blue logo, Surrounded by the words, Betty Ford Center. Fuck it, I'm done.", img: 'https://lh3.googleusercontent.com/ApA3dTOY0CvokCEEvjMEyomJMqIB8WUASakU0_Rv3EPFF3CitWk_1WjAScUzN926WH7-Xibmm2flXnT3sPHNBvgxhmvPc85IaGiu2r4=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399373104136060953'},
        {id: '8', stanza: "Is there hope? Sort of. Hope is always followed by a fucked up feeling though, You never want hope unless shit sucks. Maybe I should have sprayed my brain all over the wall, What would be different? Well, as it turns out, Everything. Yesterday I uttered the words, 'I love my life'. Black vs white. Yin vs yang. Then vs now.", img: 'https://lh3.googleusercontent.com/qOhpMvPi1hTwTDGYaCZGdH7_K8mxqwHHy73asDDV6hdPHCOfbqnjaGt-GhrPFncsjNfN9yEOnX4LRzUJeXAfAV50TpSukP37UVsZeQ=s0', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/69700137661703580363917393937644364653972255130969012123656399374203647688729'},
    ];

    return (
        <>
            <Navbar />
            <div className="w-full bg-secondary-dark pt-10 monotype">
                <div className="w-1/4 m-auto text-center text-3xl">
                    <h2>Then vs Now</h2>
                </div>

                <div className="stats flex justify-between p-6">
                    <div className="left">
                        <strong>Platform: </strong>OpenSea Polygon<br />
                        <strong>Currency: </strong>WETH<br />
                        <strong>Status: </strong>Minting Complete
                    </div>

                    <div className="right text-right">
                        <strong>Total Supply: </strong>200<br />
                        <strong>Current Supply: </strong>200<br />
                        <strong>Next Drop: </strong>N/A
                    </div>
                </div>

                <div className="description p-6 w-1/2 m-auto text-center">
                    Each piece in this collection is a stanza from a very personal poem I wrote. They are in the correct order, so Then vs Now #1 is the start of the poem and Then vs Now #8 is the end. There are 25 editions of each piece.
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
                                            <p className="text-xl text-white font-bold mb-2"><strong>Editions: </strong>25</p>
                                            <p className="text-base text-gray-400 font-normal"><strong>Platform: </strong>OpenSea Polygon</p>
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

export default ThenNow;