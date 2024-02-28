import useLocalStorage from "use-local-storage";
import UserClass from "./UserClass";
const About = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div
      className="about-container min-h-[calc(100svh-67px)] flex items-center justify-center"
      data-theme={isDark ? "dark" : "light"}
    >
      <UserClass name={"Satish Kumar"} location={"Patna"} />
    </div>
  );
};
export default About;
