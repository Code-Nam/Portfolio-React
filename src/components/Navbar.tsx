import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";

type AnimatedTabsProps = {
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
};

export default function AnimatedTabs({
    containerClassName,
    activeTabClassName,
    tabClassName,
}: AnimatedTabsProps) {
    const [activeIdx, setActiveIdx] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { t } = useTranslation();
    
    const setTab = (tab: { title: string; href: string }) => {
        const section = document.querySelector(tab.href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    
    useEffect(() => {
        const onScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section, index) => {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight / 2) {
                    setActiveIdx(index);
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const tabs = [
        {
            title: t("About.Title"),
            icon: "mdi:about-circle-outline",
            href: "#about",
        },
        {
            title: t("Expertise"),
            icon: "ri:stack-line",
            href: "#expertise",
        },
        {
            title: t("Projects"),
            icon: "mdi:cube-outline",
            href: "#project",
        },
        {
            title: t("Contact.Title"),
            icon: "hugeicons:contact-01",
            href: "#contact",
        },
    ];

    return (
        <div className="grid place-items-center">
            <div
                className={cn(
                    "relative flex flex-wrap items-center justify-center bg-dark rounded-full w-fit",
                    containerClassName
                )}
            >
                {tabs.map((tab, index) => (
                    <button
                        key={tab.title}
                        onClick={() => setTab(tab)}
                        className={cn(
                            "group relative z-[1] rounded-full px-4 py-2",
                            { "z-0": activeIdx === index },
                            tabClassName
                        )}
                    >
                        {activeIdx === index && (
                            <motion.div
                                layoutId='clicked-button'
                                transition={{ duration: 0.2 }}
                                className={cn(
                                    "absolute inset-0 rounded-full bg-white",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span
                            className={cn(
                                "relative text-sm block font-medium duration-200",
                                activeIdx === index
                                    ? "text-black delay-100"
                                    : "text-white"
                            )}
                        >
                            {isMobile ? 
                                (<Icon icon={tab.icon} className='text-xl' />) :
                                tab.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
