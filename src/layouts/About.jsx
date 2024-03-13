import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container min-h-[calc(100svh-67px)] flex items-center justify-center">
      <UserClass name={"Satish Kumar"} location={"Patna"} />
    </div>
  );
};
export default About;
