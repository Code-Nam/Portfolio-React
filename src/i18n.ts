import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

import enJSON from "./locale/en.json";
import frJSON from "./locale/fr.json";

i18n

.use(initReactI18next)
.use(languageDetector)
.init({
    resources: {
        en: { ...enJSON },
        fr: { ...frJSON },
    },
    fallbackLng: "en",
});
