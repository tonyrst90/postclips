import ConfigDB from '@/Config/ThemeConfig'
import { useAppDispatch } from '@/Redux/Hooks'
import CommonUL from './CommonUL'
import { setLayout } from '@/Redux/Reducers/ThemeCustomizerSlice'

const Vertical = () => {

  const dispatch = useAppDispatch()
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout", layoutName)
    dispatch(setLayout(layoutName))
    ConfigDB.data.settings.layout_class = layoutName;
  }
  return (
    <li data-attr="normal-sidebar" className={`border-0 ${localStorage.getItem("layout") === "horizontal-wrapper" ? "active" : ""}`} onClick={() => handleLayout("horizontal-wrapper")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar" />
          <li className="bg-light body" />
        </ul>
      </div>
    </li>
  )
}

export default Vertical