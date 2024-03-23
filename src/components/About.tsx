import { logo, github, mail } from "../assets";

const About = () => {
    return (
        <>
            <div className='flex items-center w-full py-4 px-8'>
                <img
                    src={logo}
                    alt="CodeNam's Logo"
                    className='w-10 h-10'
                />

                <a href=''>
                    <img
                        src={github}
                        alt="CodeNam's Github"
                    />
                </a>
                <a href=''>
                    <img
                        src={mail}
                        alt="CodeNam's Email"
                    />
                </a>
            </div>
        </>
    );
};

export default About;
