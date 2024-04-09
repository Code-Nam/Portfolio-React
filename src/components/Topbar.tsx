import { logo, github, mail } from "../assets";

const Topbar = () => {
    return (
        <>
            <header className='flex items-center justify-between w-full py-4'>
                <img
                    src={logo}
                    alt="CodeNam's Logo"
                    className='w-10 h-10'
                />

                <div className='flex items-center gap-5 mt-5 sm:mt-0'>
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
            </header>
        </>
    );
};

export default Topbar;
