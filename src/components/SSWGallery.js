import React from 'react';
import Typed from 'react-typed';
import { ReactVideo } from 'reactjs-media';

//import all art
import MindsEyeFlyer from '../images/ssw-curation/Minds_Eye_Flyer_3.gif';
import UntitledFlyer from '../images/ssw-curation/Untitled_2_Flyer.gif';
import Delta from '../images/ssw-curation/▲.jpg';
import RainbowPunxxx from '../images/ssw-curation/rainbow-punks.gif';
import SeeingEyes from '../images/ssw-curation/all-seeing-eyes.gif';
import Believer from '../images/ssw-curation/believer.gif';
import Chaos from '../images/ssw-curation/chaos.jpg';
import Felirami from '../images/ssw-curation/felirami.png';
import Fire from '../images/ssw-curation/fire.webm';
import FirePoster from '../images/ssw-curation/fire-poster.png';
import GlitchDog from '../images/ssw-curation/glitch-dog.mp4';
import GlitchDogPoster from '../images/ssw-curation/glitch-dog-poster.png';
import GummyWorm from '../images/ssw-curation/gummy-worm.mp4';
import GummyWormPoster from '../images/ssw-curation/gummy-worm-poster.png';
import Mudos from '../images/ssw-curation/mudos.png';
import Sightings from '../images/ssw-curation/sightings.gif';
import Thor from '../images/ssw-curation/thor.mp4';
import ThorPoster from '../images/ssw-curation/thor-poster.png';
import TimesUp from '../images/ssw-curation/TIMES_UP-here_et.mov';
import TimesUpPoster from '../images/ssw-curation/times-up-poster.png';
import Butter from '../images/ssw-curation/Trash_Foods_7-Butter.jpg';
import Undone from '../images/ssw-curation/Undone-2.0-dehiscenceArt.mp4';
import UndonePoster from '../images/ssw-curation/undone-poster.png';
import Watcher from '../images/ssw-curation/watcher.jpg';


const SSWGallery = () => {
    return (
        <>
            <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory font-press-start text-secondary-light">
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="w-1/2 m-auto text-center text-lg lg:text-4xl">
                        <Typed strings={["This gallery showcases the collection of works that I have purchased and held from ScreenSaver.world. Just scroll down to navigate the gallery. Enjoy!"]} typeSpeed={25} startDelay={300} />
                        <h2 className="text-md relative top-12 lg:text-2xl"><a href="/gallery">Back to main menu</a></h2>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={Delta} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: ▲</h2>
                            <p className="mt-2">Description: jpeg, 1300 x 2307px, 2021 The finale chapter in "The Devine" series by x3r0ne.</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/x3r0ne" target="_blank" rel="noreferrer">x3r0ne</a></p>
                            <a href="https://sswo.link/2621" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={Watcher} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Watcher at the end</h2>
                            <p className="mt-2">Description: Jpeg, 1309 x 2291 px., 2MB, 2021. Part 8 in "The Devine" series by x3r0ne</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/x3r0ne" target="_blank" rel="noreferrer">x3r0ne</a></p>
                            <a href="https://sswo.link/2296" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={UntitledFlyer} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Untitled 2, Flyer by Wrecks</h2>
                            <p className="mt-2">Description: "Are you okay? Am I okay?"</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/cityshrug" target="_blank" rel="noreferrer">Professor Wrecks</a></p>
                            <a href="https://sswo.link/2923" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>

                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={MindsEyeFlyer} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Mind's Eye Flyer 3: “Background”, Alternate design</h2>
                            <p className="mt-2">Description: “I wish I knew how to stay present with the ones I love(d). It is always in the background of my mind.” Collector will receive a free copy of the Mind’S Eye Glitch Zine NFT dropping this month!</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/cityshrug" target="_blank" rel="noreferrer">Professor Wrecks</a></p>
                            <a href="https://sswo.link/2401" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={RainbowPunxxx} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: rainbow punxxx no. 17 (:))</h2>
                            <p className="mt-2">Description: "GET LOST IN STATICVILLE" VOIDKROSS_2021 rainbow punxxx is a hand drawn collectible series born on screensaver.world in 2021</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/voidkross" target="_blank" rel="noreferrer">VOIDKROSS</a></p>
                            <a href="https://sswo.link/3004" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="w-96" src={SeeingEyes} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: All Seeing Eyes #002</h2>
                            <p className="mt-2">Description: Do you see what I see? /art by chidzo</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/chidzowtf" target="_blank" rel="noreferrer">Chidzo</a></p>
                            <a href="https://sswo.link/1394" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Believer} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: IF YOU ARE A BELIEVER</h2>
                            <p className="mt-2">Description: From EVER WATCH TELEVISION? (2011) A zine made by photographing a TV screen, pixelating the images to 1-bit 256x192px GIF images, then I upscaled and printed on laser printer. This is one of the master files I used to print the zine. 1280x960px .GIF</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/maxcapacity" target="_blank" rel="noreferrer">Max Capacity</a></p>
                            <a href="https://sswo.link/2354" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Chaos} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Chaos by Vaca</h2>
                            <p className="mt-2">Description: <em>null</em></p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/devils_lexicon" target="_blank" rel="noreferrer">Vaca</a></p>
                            <a href="https://sswo.link/2226" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Felirami} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: 你好他妈的混蛋</h2>
                            <p className="mt-2">Description: Drawn with Staedtler pigment liner, copic colors and shinhan colors.</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/feliramiart" target="_blank" rel="noreferrer">Felirami</a></p>
                            <a href="https://sswo.link/1189" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={Fire}
                                poster={FirePoster}
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: vatra glitc</h2>
                            <p className="mt-2">Description: winter mood</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/spike_0124" target="_blank" rel="noreferrer">Spike_0124</a></p>
                            <a href="https://sswo.link/2721" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={GlitchDog}
                                poster={GlitchDogPoster}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Trash Art Glitch Dog by Melanie Adcock 005</h2>
                            <p className="mt-2">Description: Trash Art Glitch Dog makes some noise and has a cameo appearance from Trash Lizard. Melanie Adcock is multi-vocational in both tech and art and had a lot of fun making this. Enjoy! Melanie Adcock, 2021, glitch art, NFT</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/melanienft" target="_blank" rel="noreferrer">Melanie Adcock</a></p>
                            <a href="https://sswo.link/2179" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={GummyWorm}
                                poster={GummyWormPoster}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Telepathic Gummy Worm 030 by Melanie Adcock</h2>
                            <p className="mt-2">Description: Telepathic Gummy Worm is a series that both gets in your head and you can eat it. Is any of this real? I need a snack. Melanie Adcock, 2021, glitch art, animation</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/melanienft" target="_blank" rel="noreferrer">Melanie Adcock</a></p>
                            <a href="https://sswo.link/1572" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Mudos} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Mundos gélidos</h2>
                            <p className="mt-2">Description: A void within all that I have been doing. With a mixture of light old-fashioned art and complicated terrain, my mind flies the way I can know how my reality affects my art.</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/eduxdux_" target="_blank" rel="noreferrer">Eduxdux</a></p>
                            <a href="https://sswo.link/2623" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Sightings} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Sightings</h2>
                            <p className="mt-2">Description: What's the scanner picking up? What is this? Originally made with Aerialod.</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/misterreborn" target="_blank" rel="noreferrer">MisterReborn</a></p>
                            <a href="https://sswo.link/2894" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={Thor}
                                poster={ThorPoster}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: NUMBSKULL REMIX</h2>
                            <p className="mt-2">Description: Remixed version of objkt.link/112861</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/vjthor" target="_blank" rel="noreferrer">VJThor</a></p>
                            <a href="https://sswo.link/2162" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={TimesUp}
                                poster={TimesUpPoster}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: TIMES UP</h2>
                            <p className="mt-2">Description: <em>null</em></p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/here_et" target="_blank" rel="noreferrer">sweetabidding</a></p>
                            <a href="https://sswo.link/1754" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <img className="h-96" src={Butter} alt="Delta by X3r0ne" />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Trash Foods #7 - Butter</h2>
                            <p className="mt-2">Description: Picture of a stick of butter glitched and manipulated in Krita.</p>
                            <p className="mt-2">Artist: Anonymous</p>
                            <a href="https://sswo.link/3087" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center w-full h-screen snap-start">
                    <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
                        <div className="col-span-5 col-start-2">
                            <ReactVideo 
                                src={Undone}
                                poster={UndonePoster}
                                autoPlay
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-3 col-start-8">
                            <h2 className="font-black">Title: Undone 2.0</h2>
                            <p className="mt-2">Description: UNDONE 2.0: Lost in the abyss. Mapping of venous flow in a human skull. MP4 with audio, 29 seconds, 27.6 MB by @dehiscenceart</p>
                            <p className="mt-2">Artist: <a className="underline" href="https://twitter.com/dehiscenceart" target="_blank" rel="noreferrer">DehiscenceArt</a></p>
                            <a href="https://sswo.link/2903" target="_blank" rel="noreferrer" className="mt-2 text-xs underline">View Object &rarr;</a>
                            <a href="/gallery" className="mt-2 text-xs underline">&larr; Back to Main Menu</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default SSWGallery;
