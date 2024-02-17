import useLocalStorage from "use-local-storage";

const ContactUs = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div className="contact-contaienr" data-theme={isDark ? "dark" : "light"}>
      <h1>This is contact us page</h1>
    </div>
  );
};

export default ContactUs;
