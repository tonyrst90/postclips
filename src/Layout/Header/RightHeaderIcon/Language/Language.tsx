import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/Redux/Hooks";
import ConfigDB from "@/Config/ThemeConfig";
import { LanguageDataType } from "@/Types/Layout.type";
import { languageData } from "@/Data/Layout/Header";

const Language = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const [selectedLang, setSelectedLang] = useState<any>({});
  const Language = Cookies.get("i18next");
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");
  const dispatch = useAppDispatch();

  const changeLanguage = (lng: LanguageDataType) => {
    setLang(lng.languageParameter);
    setFlag(lng.languageIconClassName);
    i18n.changeLanguage(lng.languageParameter);
    setOpen(false);
  };
  const LanguageSelection = (open: boolean) => {
    if (open) {
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const defaultLanguage = languageData.find((data) => data.languageParameter == currentLanguage);
    setSelectedLang(defaultLanguage);
    router.refresh();
  }, [currentLanguage, router]);

  useEffect(() => {
    if (Language === "ae") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "rtl";
      ConfigDB.data.settings.layout_type = "rtl";
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "ltr";
      ConfigDB.data.settings.layout_type = "ltr";
    }
  }, [Language, dispatch]);

  return (
    <li className="language-nav" onClick={() => LanguageSelection(open)}>
      <div className={`translate_wrapper ${open ? "active" : ""}`}>
        <div className="current_lang">
          <div className="lang">
            <span className="lang-txt m-0">{Language}</span>
          </div>
        </div>
        <div className={`more_lang ${open ? "active" : ""}`}>
          {languageData.map((data, index) => (
            <div className="lang selected" key={index} onClick={() => changeLanguage(data)}>
              <i className={`flag-icon fi flag-icon-${data.languageIconClassName}`}></i>
              <span className="lang-txt ms-1">
                {data.languageName}
                {data.subTitle && <span> ({data.subTitle})</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Language;
