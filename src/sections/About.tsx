import { star, resume_fr } from "../assets";
import Topbar from "../components/Topbar";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";

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
                        text-xl md:text-3xl'
                        >
                            <h2>{t("FullStackDeveloper")}</h2>
                            <img
                                src={star}
                                alt='star'
                                className='h-full'
                            />
                            <h2>{t("ProjectManager")}</h2>
                        </div>
                        <p className='md:text-justify min-w-full w-min font-extralight text-sm'>
                            <Trans i18nKey='About.Description' />
                        </p>
                        {/* //TODO: Add eng resume */}
                        <a href={resume_fr} target="_blank" className='md:self-start relative inline-flex overflow-hidden rounded-xl p-px'>
                            <span className='absolute inset-[-1000%] animate-spinCustom bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]' />
                            <span className='inline-flex gap-2 h-full w-full items-center justify-center rounded-[11px] bg-neutral-950 px-3 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                                <Icon icon="qlementine-icons:resume-16"></Icon>
                                {t('About.Resume')}
                            </span>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;
