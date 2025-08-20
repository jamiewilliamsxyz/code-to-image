import "./Dropdown.css";
import { themes } from "../themes";

export const ThemeDropdown = ({ theme, setTheme }) => {
  return (
    <div>
      <label>Themes</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};
