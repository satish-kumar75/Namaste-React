import nointernet from "../../assets/NoConnection.svg";
import "./NoInternet.scss";
const NoInternet = () => {
  return (
    <div className="lost-internet">
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
