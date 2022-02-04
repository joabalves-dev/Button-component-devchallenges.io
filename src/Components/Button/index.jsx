import React, { useEffect, useState } from "react";
import "./style.css";

function Button(props) {
  const [style, setStyle] = useState({});

  function notShadow(props) {
    if (props.disableShadow) {
      setStyle({
        ...style,
        boxShadow: "none",
      });
    }
  }

  function sizeButton(props) {
    if (props.size === "sm") {
      setStyle({
        ...style,
        padding: "6px 12px",
      });
    } else if (props.size === "md") {
      setStyle({
        ...style,
        padding: "8px 16px",
      });
    } else if (props.size === "lg") {
      setStyle({
        ...style,
        padding: "11px 22px",
      });
    }
  }

  useEffect(() => {
    notShadow(props);
    sizeButton(props);
  }, []);

  return (
    <div
      className={`Button ${props.startIcon || props.endIcon ? "icon" : ''}`}
    >
      {props.code ? <code>{props.code}</code> : false}
      <button
        className={`${props.variant ? props.variant : ""} ${
          props.color ? props.color : ""
        }`}
        style={style}
        disabled={props.disabled}
      >
        {props.startIcon ? (
          <span className="material-icons">{props.startIcon}</span>
        ) : (
          false
        )}
        {props.text}
        {props.endIcon ? (
          <span className="material-icons">{props.endIcon}</span>
        ) : (
          false
        )}
      </button>
    </div>
  );
}

export default Button;
