import "./Dropdown.css";
import { languages } from "../languages";

export const LanguageDropdown = ({ language, setLanguage }) => {
  return (
    <div>
      <label>Languages</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {Object.keys(languages).map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};
