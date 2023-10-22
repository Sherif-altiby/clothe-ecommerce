import "./About.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector } from "react-redux";



const About = () => {

  const language = useSelector((state) => state.language);
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div className="about">
      <div className="text">
        <h1> {t('about-us')} </h1>
      
          {
            language === "en" ?   ( <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, hic
              unde ducimus minima excepturi quo voluptates! Quo modi nobis ducimus
              dolore repellendus perspiciatis illum repudiandae repellat nostrum,
              quam rerum? Blanditiis. </p> ) : (  <p> لوريم إيبسوم، مجموعة دولور أميت موصل اعتماد النخبة. ليبرو، هيك
              Unde ducimus minima Excepturi quo voluptates! اقتبس نوبيس دوسيموس
              دولوريس ريبيلينوس بيرسيبسياتيس إيلوم ريبودياناي طارد الأنف،
              كم من النقود؟ بلينتييس.</p> )
          }
      
      </div>
    </div>
  );
};

export default About;
  