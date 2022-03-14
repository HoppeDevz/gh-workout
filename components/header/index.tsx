import React from 'react';


export function Header() {

    return(
        <header
            className="fixed w-screen h-20 bg-pure-black flex flex-row justify-center items-center z-40"
        >

            <div
                className="w-4/6 h-20 flex flex-row justify-between items-center"
            >

                <div>

                    <img
                        width={150} 
                        src="/images/logos/WITHOUT-BKG-WHITE.png" 
                    />
                </div>

                <nav
                    className="flex flex-row justify-start items-start"
                >

                    <p
                        className="text-white text-lg hover:text-orange-peel font-normal font-['Teko'] cursor-pointer mx-4"
                    >
                        PLANOS
                    </p>

                    <p
                        className="text-white text-lg hover:text-orange-peel font-normal font-['Teko'] cursor-pointer mx-4"
                    >
                        CONTATO
                    </p>
                </nav>
            </div>
        </header>
    )
}