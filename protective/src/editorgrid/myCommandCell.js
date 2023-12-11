import React from "react";

export const MyCommandCell = (props) => {
  const { dataItem } = props;
  // console.log(props);
  // console.log(dataItem);
  const inEdit = dataItem[props.editField];
  const isNewItem = dataItem.ProductID === undefined;
  return inEdit ? (
    <td>
      <button
        onClick={() =>
          isNewItem ? props.add(dataItem) : props.update(dataItem)
        }
      >
        {isNewItem ? "Add" : "Update"}
      </button>{" "}
      <button
        onClick={() =>
          isNewItem ? props.discard(dataItem) : props.cancel(dataItem)
        }
      >
        {isNewItem ? "Discard" : "Cancel"}
      </button>
    </td>
  ) : (
    <td>
      <button onClick={() => props.edit(dataItem)}>Edit</button>{" "}
      <button onClick={() => props.remove(dataItem)}>Remove</button>
    </td>
  );
};
