import { star } from "../assets";
import Topbar from "../components/Topbar";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
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
        <section
            id='about'
            className='flex flex-col h-screen'
        >
            <Topbar />
            <article className='grid place-items-center h-full gap-2 text-center md:text-left'>
                <div className='flex flex-col gap-3 items-center md:items-start'>
                    <Title handleAnimation={handleDisplay} />
                    <div
                        id='description'
                        className='
                        inline-flex flex-col items-center gap-3
                        invisible animate-once animate-ease-out animate-fill-forwards'
                    >
                        <div
                            className='
                        flex flex-col items-center gap-3 md:flex-row
                        w-fit
                        text-2xl md:text-3xl'
                        >
                            <h2>{t("FullStackDeveloper")}</h2>
                            <img
                                src={star}
                                alt='star'
                                className='h-full'
                            />
                            <h2>{t("ProjectManager")}</h2>
                        </div>
                        <p className='text-justify min-w-full w-min font-extralight'>
                            <Trans i18nKey='About.Description' />
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;
