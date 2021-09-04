import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Input.css"

const Input = (props, { type, placeholder, style, onChange }) => {
  return (
    <div className="form-group has-search">
      <span>
        <FontAwesomeIcon
          icon={faSearch}
          className="form-control-feedback mt-2 ml-2"
        />
      </span>
      <input
        className="form-control"
        value={props.value}
        type={type}
        style={style}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;