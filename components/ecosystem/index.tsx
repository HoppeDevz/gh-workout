

export function EcoSystem() {

    return(

        <div
            className="bg-gallery py-12"
        >

            <div
                className="w-full flex flex-col justify-center items-center"
            >
                <h2
                    className="text-shark font-bold text-3xl"
                >
                    Tudo o que você <span className="text-orange-peel">precisa</span>
                </h2>

                <p
                    className="text-shark font-normal text-xl text-center pt-4 px-4 md:px-0"
                >
                    Um ecossistema fitness que oferece mais liberdade na hora de treinar.
                </p>
            </div>

            <div className="w-full flex justify-center items-center py-12">
                
                <div
                    className="w-5/6 flex flex-col xl:flex-row justify-center xl:justify-between items-center"
                >

                    <div
                        style={{
                            width:"300px",
                            height:"300px",

                            backgroundImage: "url('images/assets/muscle.jpg')",
                            backgroundSize: "cover",

                            backgroundPositionX: "-120px"
                        }}
                        className="relative bg-pure-black my-8 xl:py-0"
                    >
                        
                        <div
                            className="w-full absolute bottom-0 left-0 flex justify-center items-center"
                        >
                            <p
                                className="text-gallery font-['Teko'] my-4 bg-orange-peel px-2"
                            >
                                MUSCULAÇÃO
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width:"300px",
                            height:"300px",

                            backgroundImage: "url('images/assets/workout.jpg')",
                            backgroundSize: "cover"
                        }}
                        className="relative bg-pure-black my-8 xl:py-0"
                    >
                        
                        <div
                            className="w-full absolute bottom-0 left-0 flex justify-center items-center"
                        >
                            <p
                                className="text-gallery font-['Teko'] my-4 bg-orange-peel px-2"
                            >
                                FUNCIONAL
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            width:"300px",
                            height:"300px",

                            backgroundImage: "url('images/assets/cardio.jpg')",
                            backgroundSize: "cover",

                            backgroundPositionX: "-120px"
                        }}
                        className="relative bg-pure-black my-8 xl:py-0"
                    >
                        
                        <div
                            className="w-full absolute bottom-0 left-0 flex justify-center items-center"
                        >
                            <p
                                className="text-gallery font-['Teko'] my-4 bg-orange-peel px-2"
                            >
                                CARDIO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}