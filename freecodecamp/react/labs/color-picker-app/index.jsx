const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div     
      id="color-picker-container"
      style={{ backgroundColor: color }}
    >
      <p>Choose a color using the color input below:</p>
      <input id="color-input" type="color" value={color} onChange={handleColorChange}/>
    </div>
  );
};