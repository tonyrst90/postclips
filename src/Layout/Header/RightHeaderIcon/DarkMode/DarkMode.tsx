import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setDarkMode } from "@/Redux/Reducers/Layout/LayoutSlice";

const DarkMode = () => {
  const { darkMode } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
    if (darkMode) {
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
    } else {
      document.body.classList.add("dark-only");
      document.body.classList.remove("light");
    }
  };

  return (
    <li onClick={handleDarkMode}>
      <div className={`mode ${darkMode ? "active" : ""}`}>
        <SVG iconId="fill-dark" />
      </div>
    </li>
  );
};
export default DarkMode;