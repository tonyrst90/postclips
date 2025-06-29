import { useState } from 'react'
import LTR from './LTR';
import RTL from './RTL';
import BoxLayout from './BoxLayout';
import ConfigDB from '@/Config/ThemeConfig';
import { Layout_Type } from '@/Constant';

const LayoutType = () => {
  const localStorageLayout = ConfigDB.data.settings.layout_type;
  const [layout_type, setLayout_type] = useState(localStorageLayout);

  const handleLayout = (layout: string) => {
    setLayout_type(layout);
    if (layout === "rtl") {
        document.body.classList.add("rtl");
        document.body.classList.remove("ltr");
        document.body.classList.remove("box-layout");
        document.documentElement.dir = "rtl";
        ConfigDB.data.settings.layout_type = "rtl"
    } else if (layout === "ltr") {
        document.body.classList.add("ltr");
        document.body.classList.remove("rtl");
        document.body.classList.remove("box-layout");
        document.documentElement.dir = "ltr";
        ConfigDB.data.settings.layout_type = "ltr"
    } else if (layout === "box-layout") {
        document.body.classList.remove("ltr");
        document.body.classList.remove("rtl");
        document.body.classList.add("box-layout");
        document.body.classList.remove("offcanvas");
        document.documentElement.dir = "ltr";
        ConfigDB.data.settings.layout_type = "box-layout";
    }
  };

  return (
    <>
      <h6>{Layout_Type}</h6>
      <ul className="main-layout d-flex align-items-center layout-grid">
        <LTR handleLayout={handleLayout} layout_type={layout_type}/>
        <RTL handleLayout={handleLayout} layout_type={layout_type}/>
        <BoxLayout handleLayout={handleLayout} layout_type={layout_type}/>
      </ul>
    </>
  )
}

export default LayoutType