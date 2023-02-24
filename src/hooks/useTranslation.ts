import { useRouter } from "next/router";
import en from "../constants/traductions/en.json";
import es from "../constants/traductions/es.json";

type langType = { [n: string]: unknown };

const useTranslation = () => {
  const { locale, asPath } = useRouter();
  const isEnglish = locale === "en";
  const lang: langType = isEnglish ? en : es;
  const t = (value: string) => {
    const valueSplit = value.split(".");
    let findValue;
    valueSplit.reduce((acumulator: langType, key, index, array): langType => {
      if (index === array.length - 1) {
        findValue = acumulator[key];
        return acumulator;
      }
      return (acumulator[key] as langType) || "";
    }, lang);

    return findValue || "";
  };
  return { t, language: locale, asPath, changeTo: isEnglish ? "es" : "en" };
};

export default useTranslation;
