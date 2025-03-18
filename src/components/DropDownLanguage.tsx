import { useState, useEffect, useMemo, useCallback } from "react";
import { CircleFlag } from "react-circle-flags";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
];

const DropDownLanguage = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string>(language);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleLanguageChange = useCallback(
        (lang: string) => {
            changeLanguage(lang);
            setCurrentLanguage(lang);
            setIsOpen(false);
        },
        [changeLanguage]
    );

    // useEffect for closing the dropdown when clicking outside
    const LANGUAGE_SELECTOR_ID: string = "language-selector";
    useEffect(() => {
        const handleWindowClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.id === LANGUAGE_SELECTOR_ID) return;
            setIsOpen(false);
        };
        window.addEventListener("click", handleWindowClick);
        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    const flagIcon = useMemo(() => {
        return (
            <CircleFlag
                countryCode={currentLanguage === "en" ? "uk" : currentLanguage}
                width='24'
            />
        );
    }, [currentLanguage]);

    const ArrowIcon = useMemo(() => {
        return (
            <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
            >
                <path
                    fillRule='evenodd'
                    d='M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z'
                    clipRule='evenodd'
                />
            </svg>
        );
    }, []);

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                id={LANGUAGE_SELECTOR_ID}
                className='inline-flex justify-center gap-2 uppercase cursor-none hover:cursor-pointer'
                aria-expanded={isOpen}
            >
                {flagIcon}
                {currentLanguage}
                {ArrowIcon}
            </button>
            {isOpen && (
                <div
                    className='absolute flex flex-col justify-start w-32 gap-3 p-3 bg-white text-dark text-sm rounded-md shadow-lg mt-2 z-10'
                    aria-labelledby={LANGUAGE_SELECTOR_ID}
                    aria-orientation='vertical'
                    role='menu'
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            type='button'
                            className='flex items-center gap-2 cursor-none hover:cursor-pointer'
                            role='menuitem'
                        >
                            <CircleFlag
                                countryCode={lang.code === "en" ? "uk" : lang.code}
                                width='24'
                            />
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownLanguage;
