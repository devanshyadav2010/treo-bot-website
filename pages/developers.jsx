
export default function Developers() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Developers
                </h1>
            </div>

             <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://dev-ansh.tech">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://i.imgur.com/4zM9Oni.jpg" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm Devansh,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                       I'm the developer and founder of treo. I know javascript, html, css. Click here to know about me
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/JaNCZvPxMQ">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://i.imgur.com/HQ2rOM8.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Heyo! I'm Toby,</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Hi, I'm the Developer of Treo . With 3 years of experience developing with discord.js and HTML CSS.
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
