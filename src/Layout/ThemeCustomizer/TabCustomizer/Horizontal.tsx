import ConfigDB from "@/Config/ThemeConfig";
import { useAppDispatch } from "@/Redux/Hooks";
import CommonUL from "./CommonUL";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";

const Horizontal = () => {
  const dispatch = useAppDispatch();
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout", layoutName);
    dispatch(setLayout(layoutName));
    ConfigDB.data.settings.layout_class = layoutName;
  };
  return (
    <li className={`border-0 ${localStorage.getItem("layout") === "compact-wrapper" ? "active" : ""}`} onClick={() => handleLayout("compact-wrapper")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar compact" />
          <li className="bg-light body" />
        </ul>
      </div>
    </li>
  );
};

export default Horizontal;