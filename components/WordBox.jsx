import React, { useState, useEffect } from "react";

const WordBox = ({ title }) => {
  const [color, setColor] = useState("");
  function getRandomGreenColor() {
    // Define the range of green colors
    const greenColors = ["#00ff00", "#00cc00", "#009900", "#006600"];

    // Generate a random index within the range
    const randomIndex = Math.floor(Math.random() * greenColors.length);

    // Return the color at the random index
    return greenColors[randomIndex];
  }

  const returnFirstLetter = (word) => {
    return word.charAt(0);
  };

  useEffect(() => {
    setColor(getRandomGreenColor());
  }, []);
  return (
    <>
      {color && (
        <div
          className={`bg-white mr-4 mb-4 w-16 h-16 text-primary flex justify-center items-center rounded-md`}
        >
          <p className="text-xs font-semibold">{returnFirstLetter(title)}</p>
        </div>
      )}
    </>
  );
};

export default WordBox;
