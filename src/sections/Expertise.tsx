import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const techStack = [
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "C#",
        icon: "cs",
    },
    {
        name: "React",
        icon: "react-dark",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwindcss-dark",
    },
    {
        name: "Node.js",
        icon: "nodejs-dark",
    },
    {
        name: "Express.js",
        icon: "expressjs-dark",
    },
    {
        name: "ASP.NET",
        icon: "dotnet",
    },
    {
        name: "MySQL",
        icon: "mysql-dark",
    },
    {
        name: "Kafka",
        icon: "kafka",
    },
    {
        name: "Docker",
        icon: "docker",
    },
    {
        name: "GitHub Actions",
        icon: "githubactions-dark",
    },
    {
        name: "Github",
        icon: "github-dark",
    },
    {
        name: "Figma",
        icon: "figma-dark",
    },
];

const Expertise = () => {
    const { t } = useTranslation();
    return (
        <section
            id='expertise'
            className='relative grid place-items-center h-dvh'
        >
            <h2 className='absolute font-mono top-5 text-4xl drop-shadow-[0_1px_1px_rgba(255,255,255)] md:text-[144px] text-black opacity-50 italic font-semibold'>
                {t("Expertise")}
            </h2>
            <article className='flex flex-wrap justify-center w-2/3 gap-2'>
                {techStack.map((tech) => (
                    <div
                        key={tech.name}
                        className='flex items-center hover:scale-110 transition ease-in-out duration-300 gap-2 border border-gray-500 bg-dark rounded-2xl p-3'
                    >
                        <Icon
                            icon={"skill-icons:" + tech.icon}
                            className='drop-shadow-glow'
                        />
                        <h3 className='hidden md:inline text-sm drop-shadow-glow'>
                            {tech.name}
                        </h3>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default Expertise;
