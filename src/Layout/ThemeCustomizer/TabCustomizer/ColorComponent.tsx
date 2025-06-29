/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Apply, UnlimitedColor } from '@/Constant';
import { Button, Input } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import ConfigDB from '@/Config/ThemeConfig';
import { setColorBackground1, setColorBackground2 } from '@/Redux/Reducers/ThemeCustomizerSlice';

const ColorComponent = () => {
    const {colorBackground1,colorBackground2} = useAppSelector((state)=>state.themeCustomizer)
    const dispatch = useAppDispatch()
  
    useEffect(() => {
      document.documentElement.style.setProperty("--theme-default", colorBackground1);
      document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
      ConfigDB.data.color.primary_color = colorBackground1;
      ConfigDB.data.color.secondary_color = colorBackground2;
    }, []);
  
    const addColor = (default_color: string, secondary_color: string) => {
      ConfigDB.data.color.primary_color = default_color;
      ConfigDB.data.color.secondary_color = secondary_color;
    };
  
    const handleUnlimitedColor1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(setColorBackground1(value));
    };
  
    const handleUnlimitedColor2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(setColorBackground2(value));
    };
  
    const OnUnlimitedColorClick = () => {
      addColor(colorBackground1, colorBackground2);
      document.documentElement.style.setProperty("--theme-default", colorBackground1);
      document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    };
    
    return (
      <>
        <h6>{UnlimitedColor}</h6>
        <ul className="layout-grid unlimited-color-layout">
          <Input className="p-0" type="color" name="Color-Background1" value={colorBackground1} onChange={(e) => handleUnlimitedColor1Change(e)}/>
          <Input className="p-0" type="color" name="Color-Background2" value={colorBackground2} onChange={(e) => handleUnlimitedColor2Change(e)}/>
          <Button color="primary" className="color-apply-btn color-apply-btn" onClick={OnUnlimitedColorClick}>{Apply}</Button>
        </ul>
      </>
    );
}

export default ColorComponent