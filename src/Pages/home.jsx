import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <button onClick={() => i18next.changeLanguage("en")}>English</button>
        <button onClick={() => i18next.changeLanguage("pt")}>Portuguese</button>
      </div>
      <div className="lorem">{t("lorem")}</div>
    </div>
  );
};

export default Home;
