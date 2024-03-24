import "./Login.scss";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.webp";
import email from "../../assets/email.svg";
import password from "../../assets/lock.svg";
import hide from "../../assets/hide.svg";
const Login = () => {
  return (
    <div className="login-container">
      <img src={food1} alt="" />
      <img src={food2} alt="" />
      <img src={food3} alt="" />
      <h1>Login</h1>
    </div>
  );
};

export default Login;
