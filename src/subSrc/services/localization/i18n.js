import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en as ENGLISH } from "./en";
import { fr  as FRENCH } from "./fr";
import { es as SPANISH } from "./es";
import { de as GERMANY } from "./de";

const DETECTION_OPTIONS = {
    order: ['navigator']
  };

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: ENGLISH
            },
            fr: {
                translation: FRENCH
            },
            es: {
                translation: SPANISH
            },
            de: {
                translation: GERMANY
            }
        },
        detection: DETECTION_OPTIONS,
        fallbackLng: 'en',
    });

// i18n.changeLanguage("en");