import React, { PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import { dictionaryList, LanguageEnum } from "../languages/dictionaryList";

const i18n: typeof i18next = createI18NInstance();

/**
 * @public
 */
function LanguageProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
export { LanguageProvider };

function createI18NInstance(): typeof i18next {
  const i18n = i18next.createInstance();

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: dictionaryList,
      lng: LanguageEnum.en,
      react: {
        useSuspense: true, // wait for translations to be loaded before they get rendered
      },
    })
    .then(
      () => {},
      () => {}
    );
  return i18n;
}
