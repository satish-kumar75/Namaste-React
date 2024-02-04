import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container">
      <h1>This is about us page</h1>
      <UserClass name={"Satish Kumar"} location={"Patna"} />
    </div>
  );
};
export default About;
