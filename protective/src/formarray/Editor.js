import { useContext } from "react";
import { FormGridEditContext } from "./Main";
import { Field } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { NumericTextBox } from "@progress/kendo-react-inputs";

const FORM_DATA_INDEX = "formDataIndex";

const requiredValidator = (value) => (value ? "" : "The field is required");
const minValidator = (value) => (value >= 0 ? "" : "Minimum units 0");

const DisplayValue = (fieldRenderProps) => {
  return <>{fieldRenderProps.value}</>;
};

const NumericTextBoxWithValidation = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <NumericTextBox {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const TextInputWithValidation = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export const NameCell = (props) => {
  const { parentField, editIndex } = useContext(FormGridEditContext);
  const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;
  return (
    <td>
      <Field
        component={isInEdit ? TextInputWithValidation : DisplayValue}
        name={`${parentField}[${props.dataItem[FORM_DATA_INDEX]}].${props.field}`}
        validator={requiredValidator}
      />
    </td>
  );
};

export const NumberCell = (props) => {
  const { parentField, editIndex } = useContext(FormGridEditContext);
  const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;
  return (
    <td>
      <Field
        component={isInEdit ? NumericTextBoxWithValidation : DisplayValue}
        name={`${parentField}[${props.dataItem[FORM_DATA_INDEX]}].${props.field}`}
        validator={minValidator}
      />
    </td>
  );
};
