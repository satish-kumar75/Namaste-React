import useLocalStorage from "use-local-storage";
const ContactUs = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div
      className="main-menu-container min-h-[calc(100svh-67px)]"
      data-theme={isDark ? "dark" : "light"}
    >
      <h1>This is contact us page</h1>
    </div>
  );
};

export default ContactUs;
