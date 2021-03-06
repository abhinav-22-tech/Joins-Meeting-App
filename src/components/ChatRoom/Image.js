import React, { useState, useEffect } from "react";
// import "./Image.css"

function Image(props) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(props.blob);
    reader.onloadend = function () {
      setImageSrc(reader.result);
    };
  }, [props.blob]);

  return (
    <img
      className="image"
      style={{ width: 150, height: "auto" }}
      src={imageSrc}
      alt={props.fileName}
    />
  );
}

export default Image;
