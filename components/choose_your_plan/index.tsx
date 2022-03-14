import React from 'react';

export function ChooseYourPlan() {

    return(
        <div
            className="py-12"
        >
            <div
                className="w-screen flex flex-col justify-center items-center pt-0 pb-12"
            >
                <h1
                    className="text-3xl text-white font-bold"
                >
                    Escolha <span className="text-orange-peel">seu plano</span>
                </h1>

                <p
                    className="text-white text-lg max-w-3xl text-center py-2 px-4 md:px-0"
                >
                    Treine o quanto quiser com nossos planos. 
                    <br></br>Todos oferecem áreas de musculação, aeróbico, aulas especiais e de ginástica
                </p>
            </div>

            <div
                className="w-screen flex flex-row flex-wrap justify-center items-start"
            >

                <div
                    className="flex flex-col px-4 pb-12 md:py-0"
                >
                    
                    <div
                        style={{
                            maxWidth: "300px",
                            width: "300px",

                            height: "120px"
                        }}
                        className="flex flex-col justify-start items-center bg-pure-black"
                    >
                        <h2
                            className="text-white text-md pt-4"
                        >
                            PLANO
                        </h2>

                        <h3
                            className="text-orange-peel font-bold text-3xl"
                        >
                            BLACK
                        </h3>
                    </div>
                    
                    <div
                        style={{
                            width:"300px",
                            height:"50px"
                        }}
                        className="relative w-full flex justify-center items-center bg-gallery"
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "80px",

                                top: "-30px"
                            }}
                            className="absolute flex flex-col justify-center items-center bg-orange-peel"
                        >
                            <p
                                className="text-white font-bold"
                            >
                                A PARTIR DE
                            </p>
                            <p>
                                <s>R$89,90*</s>
                            </p>
                            <p>
                                <span className="text-white">por</span>
                                <span className="text-pure-black font-bold ml-1">R$59,90</span>
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width:"300px",
                            height:"80px"
                        }}
                        className="relative w-full flex justify-center items-center bg-gallery"
                    >
                        <p
                            className="text-center"
                        >
                            Levando um amigo você paga apenas R$59,90!
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col px-4"
                >
                    
                    <div
                        style={{
                            maxWidth: "300px",
                            width: "300px",

                            height: "120px"
                        }}
                        className="flex flex-col justify-start items-center bg-orange-peel"
                    >
                        <h2
                            className="text-white text-md pt-4"
                        >
                            PLANO
                        </h2>

                        <h3
                            className="text-pure-black font-bold text-3xl"
                        >
                            WORKOUT
                        </h3>
                    </div>
                    
                    <div
                        style={{
                            width:"300px",
                            height:"50px"
                        }}
                        className="relative w-full flex justify-center items-center bg-gallery"
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "80px",

                                top: "-30px"
                            }}
                            className="absolute flex flex-col justify-center items-center bg-pure-black"
                        >
                            <p
                                className="text-white font-bold"
                            >
                                A PARTIR DE
                            </p>
                            <p
                                className="text-orange-peel"
                            >
                                <s>R$89,90*</s>
                            </p>
                            <p>
                                <span className="text-white">por</span>
                                <span className="text-orange-peel font-bold ml-1">R$69,90</span>
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width:"300px",
                            height:"80px"
                        }}
                        className="relative w-full flex justify-center items-center bg-gallery"
                    >
                        <p
                            className="text-center"
                        >
                            Começando sozinho você paga apenas R$69,90!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}