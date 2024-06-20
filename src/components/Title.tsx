import TypeIt from "typeit-react";

interface ChildProps {
    handleAnimation: (finishedAnim: boolean) => void;
}

const Title: React.FC<ChildProps> = ({handleAnimation}) => {
return (
        <>
            <TypeIt
                as={"h1"}
                getBeforeInit={(instance) => {
                    instance
                        .type("Hey")
                        .pause(750)
                        .type(", I'm <b><i>Annam Tran</i></b>");
                    return instance;
                }}
                options={{
                    speed: 75,
                    afterComplete: (instance) => {
                        instance.destroy();
                        handleAnimation(true);
                    },
                }}
                className='font-medium text-6xl md:text-8xl'
            />
        </>
    );
};

export default Title;
