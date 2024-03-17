import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import featherSun from "@iconify-icons/feather/sun";
import featherMoon from "@iconify-icons/feather/moon";
import "./Toggle.scss";

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isDark") === "true",
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", isChecked ? "dark" : "light");
    localStorage.setItem("isDark", isChecked);
  }, [isChecked]);

  const toggleTheme = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <label className="toggle-container">
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={toggleTheme}
        checked={isChecked}
      />
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <Icon icon={featherSun} className="sun-icon" />
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <Icon icon={featherMoon} className="moon-icon" />
        </div>
      </div>
    </label>
  );
};

export default Toggle;
