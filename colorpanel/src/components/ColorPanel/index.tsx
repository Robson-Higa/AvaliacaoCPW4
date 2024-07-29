import { useEffect, useState } from "react";

type Props = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
const ColorPanel = ({ red, green, blue, alpha }: Props) => {
  const colorStyle = {
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
    width: '100px',
    height: '100px',
    border: '1px solid #000'
  };

  return <div style={colorStyle}></div>;
};

export default ColorPanel;
