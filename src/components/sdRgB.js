import React from 'react';
import Navbar from './Navbar';
import berries from '../images/sd[RgB].01.shivas.berries.divx.gif';
import vandal from '../images/sd[RgB].02.vandal.2096.wmv.gif';
import dogface from '../images/sd[RgB].03.dogface.flv.gif';

const sdRgB = () => {
    return (
        <div>
            <Navbar />
            <div className="container grid grid-cols-1 w-full m-auto p-4 lg:grid-cols-2 gap-3 xl:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary-light">
                    <img className="w-full" src={berries} alt="Berries" />
                    <div className="text-center py-6">
                        <div className="font-bold text-xl mb-2 text-accent-default">sd[RgB].01.shivas.berries.divx</div>
                        <p className="text-primary-dark text-base">
                            sd[RgB] Collection by SquintDev | #1 | 2021 | shivas.berries.divx | GIF 1088x1088
                        </p>
                        <div className="flex justify-between text-primary-dark px-4 mt-3">
                            <span><a href="https://www.screensaver.world/object/3217">View on ScreenSaver</a></span>
                            <span>View on OpenSea</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary-light">
                    <img className="w-full" src={vandal} alt="Berries" />
                    <div className="text-center py-6">
                        <div className="font-bold text-xl mb-2 text-accent-default">sd[RgB].02.vandal.2096.wmv</div>
                        <p className="text-primary-dark text-base">
                            sd[RgB] Collection by SquintDev | #2 | 2021 | vandal.2096.wmv | GIF 1088x1936
                        </p>
                        <div className="flex justify-between text-primary-dark px-4 mt-3">
                            <span>View on ScreenSaver</span>
                            <span>View on OpenSea</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary-light">
                    <img className="w-full" src={dogface} alt="Berries" />
                    <div className="text-center py-6">
                        <div className="font-bold text-xl mb-2 text-accent-default">sd[RgB].03.dogface.flv</div>
                        <p className="text-primary-dark text-base">
                            sd[RgB] Collection by SquintDev | #3 | 2021 | dogface.flv | GIF 1088x1088
                        </p>
                        <div className="flex justify-between text-primary-dark px-4 mt-3">
                            <span>View on ScreenSaver</span>
                            <span>View on OpenSea</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default sdRgB;
