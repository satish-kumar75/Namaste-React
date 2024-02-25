import "./Toggle.scss";
import { Icon } from "@iconify/react";
import featherSun from "@iconify-icons/feather/sun";
import featherMoon from "@iconify-icons/feather/moon";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <label className="toggle-container">
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={handleChange}
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
