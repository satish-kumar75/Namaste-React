import useLocalStorage from "use-local-storage";
import UserClass from "./UserClass";
const About = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div className="about-container" data-theme={isDark ? "dark" : "light"}>
      <h1>This is about us page</h1>
      <UserClass name={"Satish Kumar"} location={"Patna"} />
    </div>
  );
};
export default About;
