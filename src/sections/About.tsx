import { star } from "../assets";
import Topbar from "../components/Topbar";
import Title from "../components/Title";
import { useEffect, useState } from "react";

const About = () => {
    const [display, setDisplay] = useState(false);

    const handleDisplay = (finishedAnim: boolean) => {
        setDisplay(finishedAnim);
    };

    useEffect(() => {
        if (display) {
            const description = document.getElementById("description");
            if (description) {
                description.classList.remove("invisible");
                description.classList.add("animate-fade-up");
            }
        }
    }, [display]);

    return (
        <div
            id='about'
            className='mx-8 md:mx-16 h-screen flex flex-col'
        >
            <Topbar />
            <div className='flex flex-col flex-auto justify-center'>
                <section className='h-auto flex flex-col text-center md:text-left gap-2 text-white'>
                    <Title handleAnimation={handleDisplay} />

                    <div
                        id='description'
                        className='
                        invisible flex-col gap-3 
                        animate-once animate-ease-out animate-fill-forwards
                        '
                    >
                        <div className='flex flex-col md:flex-row items-center gap-3 text-2xl md:text-3xl'>
                            <h2>Fullstack Developer</h2>
                            <img
                                src={star}
                                alt='star'
                                className='h-full'
                            />
                            <h2>Project Manager</h2>
                        </div>
                        <p className='font-extralight text-justify md:w-1/3'>
                            I'm a junior web developer constantly on the{" "}
                            <b>lookout for new intercultural horizons</b> and
                            passionate about{" "}
                            <b>creating and managing projects </b> that bring
                            people together.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
