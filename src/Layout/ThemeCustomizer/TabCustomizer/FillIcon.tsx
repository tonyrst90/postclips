import { Fill } from '@/Constant'
import CommonUL from './CommonUL'
import { SidebarIconProp } from '@/Types/ThemeCustomizer.type'
import { Badge } from 'reactstrap'

const FillIcon :React.FC<SidebarIconProp> = ({ handleSideBarIconType, sideBarIconType }) => {
  return (
    <li data-attr="fill-svg" className={`border-0 ${sideBarIconType === "fill" ? "active" : ""}`} onClick={() => handleSideBarIconType("fill")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badge color="primary">{Fill}</Badge>
      </div>
    </li>
  )
}

export default FillIcon