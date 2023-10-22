import "./Search.scss";
import SearchItem from "../../components/serchItem/SearchItem ";
import cards from "../../components/data/Data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Search = () => {
  const theme = useSelector((state) => state.theme);
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([]);

  const language = useSelector((state) => state.language);
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const search = (val) => {
    setResult(
      cards.filter((item) => JSON.stringify(item).toLowerCase().includes(val))
    );
  };

  useEffect(() => {
    search(input);
  }, [input]);

  return (
    <div className={theme === "dark" ? "search" : "search light"}>
      <section className="search_main">
        <h1>{t("search")}</h1>
      </section>
      <section className="search_content">
        <div className="head">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="search_counter">"{t('all')}"({result.length})</div>
        </div>
        <div className="all_search_items">
          {result.length > 0 ? (
            result.map((item) => <SearchItem item={item} key={item.key} />)
          ) : (
            <h1 className="no_result"> {t('no-result')} </h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
