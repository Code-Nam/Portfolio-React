import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section
            id='contact'
            className='relative grid place-items-center h-dvh'
        >
            <div className="absolute font-mono top-20 flex flex-col items-center gap-5 ">
                <h2 className='text-4xl drop-shadow-[0_1px_1px_rgba(255,255,255)] md:text-[144px] text-black opacity-50 italic font-semibold'>
                    {t("Contact.Title")}
                </h2>
                <h3 className='text-4xl md:text-8xl'>
                    {t("Contact.Reach")} <span className='text-purple'>{t('Contact.Me')}</span>
                </h3>
            </div>
            <div className="flex flex-col items-center gap-4 mt-28 text-base md:text-2xl">
                <div className="flex flex-col md:flex-row items-center gap-2 font-light">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:annampierretran@gmail.com" className="hover:text-purple cursor-none hover:cursor-pointer transition-colors">annampierretran@gmail.com</a>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 font-light">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+33 (0)7 68 35 03 75</span>
                    <span className="text-purple font-medium">WhatsApp</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
