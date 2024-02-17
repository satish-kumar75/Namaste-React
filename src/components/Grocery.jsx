import useLocalStorage from "use-local-storage";

const Grocery = () => {
  const [isDark] = useLocalStorage("isDark");
  return (
    <div className="grocery-container" data-theme={isDark ? "dark" : "light"}>
      <h2>Please wait.... the store is not opened yet.</h2>
    </div>
  );
};

export default Grocery;
