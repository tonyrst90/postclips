import { RTLBadges } from '@/Constant'
import CommonUL from './CommonUL'
import { Badge } from 'reactstrap'
import { LtrDataType } from '@/Types/ThemeCustomizer.type'

const RTL: React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li data-attr="rtl" className={`${layout_type === "rtl" ? "active" : ""}`} onClick={() => handleLayout("rtl")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-light body me-1">
            <Badge color="primary">{RTLBadges}</Badge>
          </li>
          <li className="bg-light sidebar" />
        </ul>
      </div>
    </li>
  )
}

export default RTL