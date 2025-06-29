import ColorComponent from './ColorComponent'
import ColorDarkLayout from './ColorDarkLayout'
import ColorLightLayout from './ColorLightLayout'
import LayoutType from './LayoutType'
import MixLayoutComponent from './MixLayoutComponent'
import SidebarIconType from './SidebarIconType'
import SidebarType from './SidebarType'

const SidebarCustomizer = () => {
  return (
    <>
      <LayoutType />
      <SidebarType />
      <SidebarIconType />
      <ColorComponent />
      <ColorLightLayout />
      <ColorDarkLayout />
      <MixLayoutComponent />
    </>
  )
}

export default SidebarCustomizer