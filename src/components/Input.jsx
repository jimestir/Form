import React from "react";
import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  Label,
  GroupInput,
  Input,
  LegendError,
  IconValidate,
} from "../elements/Form";

function ComponentInputs({
  state,
  setState,
  label,
  placeholder,
  type,
  name,
  legendError,
  regex,
  fn,
}) {
  const onChange = (e) =>
    setState({ ...state, countryside: e.target.value });

  const validation = () => {
    if (regex) {
      if (regex.test(state.countryside)) {
        setState({ ...state, validate: "true" });
      } else {
        setState({ ...state, validate: "false" });
      }
    }

    if (fn) return fn();
  };

  return (
    <div>
      <Label htmlFor={name} validate={state.validate}>
        {label}
      </Label>
      <GroupInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.countryside}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          validate={state.validate}
        />
        <IconValidate
          icon={state.validate === "true" ? faCircleCheck : faTimesCircle}
          validate={state.validate}
        />
      </GroupInput>
      <LegendError validate={state.validate}>{legendError}</LegendError>
    </div>
  );
}

export default ComponentInputs;
