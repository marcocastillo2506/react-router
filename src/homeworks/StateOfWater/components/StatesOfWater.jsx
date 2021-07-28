import { useState } from "react";

const StatesOfWater = () => {
    const [currentTemp, setCurrentTemp] = useState(18);

    let stateOfMatter;
    let stateCss = "liquid";
  
    if (currentTemp <= 0) {
      stateOfMatter = "Solid";
      stateCss = "solid";
    } else if (currentTemp >= 100) {
      stateOfMatter = "Gas";
      stateCss = "gas";
    } else {
      stateOfMatter = "Liquid";
      stateCss = "liquid";
    }
  
    return (
      <div>
        <center><input
          type="text"
          onChange={(event) => setCurrentTemp(event.target.value)}
          value={currentTemp}
        /></center>
        <div className={stateCss}>
          At {currentTemp}°C, water is considered to be a "{stateOfMatter}" state
          of matter.
        </div>
      </div>
    );
  }  

export default StatesOfWater;
