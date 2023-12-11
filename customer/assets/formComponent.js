import React, { useRef } from "react";
import { FieldWrapper } from "@progress/kendo-react-form";
import {
  Input,
  MaskedTextBox,
  Checkbox,
  TextArea,
} from "@progress/kendo-react-inputs";
import { Label, Error, Hint } from "@progress/kendo-react-labels";
import { DropDownList } from "@progress/kendo-react-dropdowns";

export const FormDropDownList = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    required,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const editorRef = useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  const labelId = label ? `${id}_label` : "";
  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        className="formLabel"
      >
        {label}
        {required ? <span className="requiredLabelMarks">*</span> : null}
      </Label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DropDownList
          ariaLabelledBy={labelId}
          ariaDescribedBy={`${hintId} ${errorId}`}
          ref={editorRef}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
        />
        <span
          className="k-icon k-i-question k-icon-lg"
          style={{ marginLeft: "7px" }}
        />
      </div>
      {showHint && <Hint id={hintId}>{hint}</Hint>}
      {showValidationMessage && <Error id={errorId}>{label} is required</Error>}
    </FieldWrapper>
  );
};

export const FormCheckbox = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    id,
    valid,
    disabled,
    hint,
    optional,
    label,
    visited,
    modified,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  return (
    <FieldWrapper style={{ marginTop: "50px" }}>
      <div style={{ display: "flex", alignItems: "center", fontWeight: 700 }}>
        <Checkbox
          ariaDescribedBy={`${hintId} ${errorId}`}
          label={label}
          labelOptional={optional}
          valid={valid}
          id={id}
          defaultChecked
          disabled={disabled}
          {...others}
        />
        <span
          className="k-icon k-i-question k-icon-lg"
          style={{ marginLeft: "7px" }}
        />
      </div>
      {showHint && <Hint id={hintId}>{hint}</Hint>}
      {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
    </FieldWrapper>
  );
};

export const FormMaskedTextBox = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    required,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && required;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        optional={optional}
        className="formLabel"
      >
        {label}
        {required ? <span className="requiredLabelMarks">*</span> : null}
      </Label>
      <div className={"k-form-field-wrap"}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MaskedTextBox
            ariaDescribedBy={`${hintId} ${errorId}`}
            valid={valid}
            id={id}
            size="large"
            rounded="small"
            {...others}
          />
          <span
            className="k-icon k-i-question k-icon-lg"
            style={{ marginLeft: "7px" }}
          />
        </div>
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{label} is required</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

export const FormInput = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    required,
    value,
    study,
    iconRequired,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && required;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
        className="formLabel"
      >
        {label}
        {required ? <span className="requiredLabelMarks">*</span> : null}
      </Label>
      <div className={"k-form-field-wrap"}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            // className="input-item"
            valid={valid}
            type={type}
            id={id}
            value={value}
            disabled={disabled}
            required={required}
            ariaDescribedBy={`${hintId} ${errorId}`}
            // validationMessage="Enter Correct "
            {...others}
            style={
              label === "Pricing Variance" ? { backgroundColor: "#f0f0f0" } : {}
            }
          />
          {iconRequired ? null : (
            <span
              className="k-icon k-i-question k-icon-lg"
              style={{ marginLeft: "7px" }}
            />
          )}
        </div>
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{label} is required</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

export const FormTextArea = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    disabled,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} optional={optional}>
        {label}
      </Label>
      <TextArea
        valid={valid}
        id={id}
        disabled={disabled}
        ariaDescribedBy={`${hintId}`}
        {...others}
        rows={5}
        autoSize={true}
      />
      {showHint && <Hint id={hintId}>{hint}</Hint>}
    </FieldWrapper>
  );
};
