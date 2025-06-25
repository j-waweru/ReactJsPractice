import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handlecolorchange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p1>Selected Color : {color}</p1>
      </div>
      <label >Select a color</label>
      <input type="color" value={color} onChange={handlecolorchange} />
    </div>
  );
}
export default ColorPicker;
