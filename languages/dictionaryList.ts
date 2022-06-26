import { danishDictionary } from "./danish";
import { englishDictionary } from "./english";

export enum LanguageEnum {
  da = "da",
  en = "en",
}

export type IDictionary = typeof englishDictionary;

export type IDictionaryList = {
  [key in LanguageEnum]: { translation: IDictionary };
};

const dictionaryList: IDictionaryList = {
  [LanguageEnum.da]: { translation: danishDictionary },
  [LanguageEnum.en]: { translation: englishDictionary },
};
export { dictionaryList };
