import useLocalStorage from "use-local-storage";
import nointernet from "../../assets/NoConnection.svg";
import "./NoInternet.scss";
const NoInternet = () => {
  const [isDark] = useLocalStorage("isDark");

  return (
    <div className="lost-internet mt-28" data-theme={isDark ? "dark" : "light"}>
      <img src={nointernet} alt="no internet connection" />
      <div>
        <h3 className="text-center mb-3">Lost Connection</h3>
        <p className="text-center">
          Whoops, no internet connection found. Please check your connection.
        </p>
      </div>
    </div>
  );
};

export default NoInternet;
