import { useTranslation } from "react-i18next";

const projects = [
    {
        title: "Project 1",
        description: "Project 1 description",
        image: "project1.png",
    },
    {
        title: "Project 2",
        description: "Project 2 description",
        image: "project2.png",
    },
    {
        title: "Project 3",
        description: "Project 3 description",
        image: "project3.png",
    },
];

//TODO: Add the Projects
const Project = () => {
    const { t } = useTranslation();
    return (
        <section
            id='project'
            //TODO: adjust height once projects are finished
            className='grid place-items-center h-screen'
        >
            <h2 className='text-4xl drop-shadow-[0_1px_1px_rgba(255,255,255)] md:text-[144px] text-black opacity-50 italic font-semibold'>
                {t("Projects")}
            </h2>
            {projects.map((project, index) => (
                <article
                    key={index}
                    className={`${
                        index % 2 == 0 ? "justify-start" : "justify-end"
                    } flex items-center h-full w-full`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`order-${index % 2 == 0 ? 1 : 2}`}
                    />
                    <div className='order-1'>
                        <h3 className='text-4xl'>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Project;
