import { DropDownList } from "@progress/kendo-react-dropdowns";
import React from "react";

export const DropdownCell = (props) => {
  const localizedData = [
    {
      text: "yes",
      value: true,
    },
    {
      text: "no",
      value: false,
    },
    {
      text: "empty",
      value: null,
    },
  ];
  const { dataItem } = props;
  const field = props.field || "";
  const dataValue = dataItem[field] === null ? " " : dataItem[field];
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange({
        dataIndex: 0,
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.target.value.value,
      });
    }
  };
  return (
    <td>
      {dataItem.inEdit ? (
        <DropDownList
          value={localizedData.find((c) => c.value === dataValue)}
          data={localizedData}
          onChange={handleChange}
          textField="text"
        />
      ) : (
        dataValue.toString()
      )}
    </td>
  );
};
