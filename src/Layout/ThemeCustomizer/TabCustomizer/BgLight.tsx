import { MixLayoutComponentProp } from '@/Types/ThemeCustomizer.type'
import CommonUL from './CommonUL'

const BgLight :React.FC<MixLayoutComponentProp> = ({ handleCustomizerMix_Background, mixLayout }) => {
  return (
    <li className={`color-layout ${mixLayout === "dark-sidebar" ? "active" : ""}`} data-attr="dark-sidebar" onClick={() => handleCustomizerMix_Background("dark-sidebar")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  )
}

export default BgLight