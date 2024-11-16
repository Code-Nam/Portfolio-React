import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section
            id='contact'
            className='relative grid place-items-center h-screen'
        >
            <div className="absolute top-20 flex flex-col items-center gap-5 ">
                <h2 className='text-4xl drop-shadow-[0_1px_1px_rgba(255,255,255)] md:text-[144px] text-black opacity-50 italic font-semibold'>
                    {t("Contact.Title")}
                </h2>
                <h3 className='text-4xl md:text-8xl'>
                    {t("Contact.Reach")} <span className='text-purple'>{t('Contact.Me')}</span>
                </h3>
            </div>
            <p className='font-light text-lg md:text-4xl'>
                annampierretran@gmail.com <br />
                +33 (0)7 68 35 03 75
            </p>
        </section>
    );
};

export default Contact;
