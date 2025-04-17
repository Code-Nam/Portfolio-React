import TypeIt from "typeit-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

interface ChildProps {
    handleAnimation: (finishedAnim: boolean) => void;
}

const Title: React.FC<ChildProps> = ({handleAnimation}) => {
    const { t } = useTranslation();
    const textRef = useRef<HTMLHeadingElement>(null);
    const [animationComplete, setAnimationComplete] = useState<boolean>(false);

    useEffect(() => {
        // Update the displayed text without restarting the animation
        if (textRef.current && animationComplete) {
            textRef.current.innerHTML = `${t("About.Hey")}${t("About.Name")}`;
        }
    }, [animationComplete, t]);

return (
        <h1
        className='text-4xl font-mono font-medium md:text-7xl w-fit'
        ref={textRef}
        >
            <TypeIt
                getBeforeInit={(instance) => {
                    instance
                        .type(t('About.Hey'))
                        .pause(750)
                        .type(t('About.Name'));
                    return instance;
                }}
                options={{
                    speed: 75,
                    afterComplete: (instance: { destroy: () => void; }) => {
                        instance.destroy();
                        setAnimationComplete(true);
                        handleAnimation(true);
                    },
                }}
            />
        </h1>
    );
};

export default Title;
