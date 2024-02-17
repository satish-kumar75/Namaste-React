import useLocalStorage from "use-local-storage";
import MenuShimmer from "./MenuShimmer";

const ContactUs = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div className="contact-contaienr" data-theme={isDark ? "dark" : "light"}>
      <h1>This is contact us page</h1>
      <MenuShimmer />
    </div>
  );
};

export default ContactUs;
