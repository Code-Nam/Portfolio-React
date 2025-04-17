import { clamcarte, pixelwar, undercover } from "../assets";
// import { achaka } from "../assets";
import { useTranslation } from "react-i18next";

const Project = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Undercover",
            description: t("Projects.Undercover.Description"),
            image: undercover,
            tags: [
                t("Projects.Undercover.Type"),
                "React",
                "Socket.io",
                "Flask",
                "Docker",
                "Github Actions",
            ],
        },
        {
            title: "Pixel War",
            description: t("Projects.PixelWar.Description"),
            image: pixelwar,
            tags: [
                t("Projects.PixelWar.Type"),
                "React",
                "Socket.io",
                "Node.js",
                "Express",
                "MySQL",
                "Docker",
                "Github Actions",
            ],
        },
        {
            title: "Clam'Carte Back-Office",
            description: t("Projects.ClamCarte.Description"),
            image: clamcarte,
            tags: [
                t("Projects.ClamCarte.Type"),
                "React",
                "Node.js",
                "Express",
                "MySQL",
            ],
        },
        // {
        //     title: "Achaka Project",
        //     description: t("Projects.Achaka.Description"),
        //     image: achaka,
        //     tags: [
        //         t("Projects.Achaka.Type"),
        //         "Wordpress",
        //         "PHP",
        //         "Elementor",
        //         "Hostinger",
        //     ],
        // },
    ];

    return (
        <section
            id='project'
            className='relative grid place-items-center gap-12 h-fit'
        >
            <h2 className='text-4xl font-mono drop-shadow-[0_1px_1px_rgba(255,255,255)] md:text-[144px] text-black opacity-50 italic font-semibold'>
                {t("Projects.Title")}
            </h2>
            {projects.map((project, index) => (
                <>
                    <article
                        key={index}
                        className={`${
                            index % 2 == 0 ? "justify-start" : "justify-end"
                        } flex flex-col md:flex-row gap-5 items-center w-full`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`order-first ${
                                index % 2 == 0 ? "md:order-1" : "md:order-2"
                            } w-full md:w-1/2 h-52 object-contain md:object-cover`}
                        />
                        <div className='order-1'>
                            <h3 className='text-4xl font-mono font-bold'>
                                {project.title}
                            </h3>
                            <p className='text-sm text-justify mb-5'>
                                {project.description}
                            </p>
                            {project.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className={`inline-flex animate-shine items-center justify-center rounded-full border border-neutral-800
                                    ${
                                        index == 0
                                            ? "bg-gradient-primary"
                                            : "bg-gradient-secondary"
                                    }
                                bg-[length:200%_100%] px-3 py-1 text-xs font-medium text-neutral-400 transition-colors`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </article>
                    {index < projects.length - 1 && <hr className="w-full" />}
                </>
            ))}
        </section>
    );
};

export default Project;
