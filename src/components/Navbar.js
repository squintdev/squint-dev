import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="bg-accent-default text-secondary-dark text-3xl font-bold flex justify-between">
                <div className="px-4 py-6 flex-1">
                    <Link to="/">
                        <h1 className="text-5xl">squint.dev</h1>
                    </Link>
                </div>

                <nav className="mx-auto flex items-center justify-between monotype text-base">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a className="text-secondary-dark hover:text-primary-dark" href="https://opensea.io/SquintDev?tab=created" target="_blank" rel="noreferrer">OpenSea</a>
                                        <a className="text-secondary-dark hover:text-primary-dark" href="https://objkt.com/profile/tz1N9VQ5c1k5n6XPN23GhdWkDG53p12DcULd/created" target="_blank" rel="noreferrer">Objkt.com</a>
                                        <a className="text-secondary-dark hover:text-primary-dark" href="https://hicetnunc.art/SquintDev" target="_blank" rel="noreferrer">HEN</a>
                                        <a className="text-secondary-dark hover:text-primary-dark" href="https://ssw.wtf/squintdev" target="_blank" rel="noreferrer">Screensaver</a>
                                        <a className="text-secondary-dark hover:text-primary-dark" href="https://twitter.com/burb8873" target="_blank" rel="noreferrer">@</a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    
                        <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {(ref) => (
                                <div className="md:hidden" id="mobile-menu">
                                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 monotype">
                                        <a className="text-secondary-dark hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium" href="https://opensea.io/SquintDev?tab=created" target="_blank" rel="noreferrer">OpenSea</a>
                                        <a className="text-secondary-dark hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium" href="https://objkt.com/profile/tz1N9VQ5c1k5n6XPN23GhdWkDG53p12DcULd/created" target="_blank" rel="noreferrer">Objkt.com</a>
                                        <a className="text-secondary-dark hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium" href="https://hicetnunc.art/SquintDev" target="_blank" rel="noreferrer">HEN</a>
                                        <a className="text-secondary-dark hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium" href="https://ssw.wtf/squintdev" target="_blank" rel="noreferrer">Screensaver</a>
                                        <a className="text-secondary-dark hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium" href="https://twitter.com/burb8873" target="_blank" rel="noreferrer">Follow Me</a>
                                    </div>
                                </div>
                            )}
                        </Transition>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;