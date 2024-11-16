import { logo, github, linkedin } from "../assets";
import DropdownMenu from "./DropDownLanguage";

const Topbar = () => {
    return (
        <>
            <header className='flex items-center justify-between w-full pt-4'>
                <img
                    src={logo}
                    alt="CodeNam's Logo"
                    className='w-10 h-10'
                />

                <div className='flex items-center justify-center gap-5 mt-5 sm:mt-0'>
                    <DropdownMenu />
                    <a href='https://github.com/Code-Nam' target="_blank">
                        <img
                            src={github}
                            alt="CodeNam's Github"
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/annam-tran' target="_blank">
                        <img
                            src={linkedin}
                            alt="CodeNam's LinkedIn"
                        />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Topbar;
