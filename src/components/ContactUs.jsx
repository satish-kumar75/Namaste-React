import useLocalStorage from "use-local-storage";

const ContactUs = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  return (
    <div className="contact-contaienr" data-theme={isDark ? "dark" : "light"}>
      <h1>This is contact us page</h1>
    </div>
  );
};

export default ContactUs;
