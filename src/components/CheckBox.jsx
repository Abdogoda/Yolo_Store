import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
  const inputRef = React.useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="checkbox__checkmark">
        <i className="fa fa-check"></i>
      </span>
      {props.label}
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
