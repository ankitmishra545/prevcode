import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Form, FieldArray, FormElement } from "@progress/kendo-react-form";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { NameCell, NumberCell } from "./Editor";
import { clone } from "@progress/kendo-react-common";

const sampleProducts = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10",
    UnitPrice: 18,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales",
    },
    FirstOrderedOn: new Date(1996, 8, 20),
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "24",
    UnitPrice: 19,
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales",
    },
    FirstOrderedOn: new Date(1996, 7, 12),
  },
];

export const FormGridEditContext = createContext({});

const DATA_ITEM_KEY = "ProductID";
const FORM_DATA_INDEX = "formDataIndex";

const CommandCell = (props) => {
  const { onRemove, onSave, onCancel, onEdit, editIndex } =
    useContext(FormGridEditContext);
  const isInEdit = props.dataItem[FORM_DATA_INDEX] === editIndex;
  const isNewItem = !props.dataItem[DATA_ITEM_KEY];
  // console.log(props.dataItem[DATA_ITEM_KEY], isNewItem, editIndex);
  const onRemoveClick = useCallback(
    (e) => {
      e.preventDefault();
      onRemove(props.dataItem);
    },
    [props.dataItem, onRemove]
  );

  const onEditClick = useCallback(
    (e) => {
      e.preventDefault();
      onEdit(props.dataItem, isNewItem);
    },
    [props.dataItem, onEdit, isNewItem]
  );

  const onSaveClick = useCallback(
    (e) => {
      e.preventDefault();
      onSave(props.dataItem);
    },
    [onSave]
  );

  const onCancelClick = useCallback(
    (e) => {
      e.preventDefault();
      onCancel();
    },
    [onCancel]
  );

  return isInEdit ? (
    <td>
      <button onClick={onSaveClick}>Update</button>{" "}
      <button onClick={onCancelClick}>Cancel</button>
    </td>
  ) : (
    <td>
      <button onClick={onEditClick}>Edit</button>{" "}
      <button onClick={onRemoveClick}>Remove</button>
    </td>
  );
};

const FormGrid = (fieldArrayRenderProps) => {
  const { validationMessage, visited, name, dataItemKey } =
    fieldArrayRenderProps;
  // console.log(fieldArrayRenderProps);
  const [editIndex, setEditIndex] = useState();
  const editItemCloneRef = useRef();
  const dataWithIndexes = fieldArrayRenderProps.value.map((item, index) => {
    return { ...item, [FORM_DATA_INDEX]: index };
  });

  const onAdd = useCallback(
    (e) => {
      e.preventDefault();
      fieldArrayRenderProps.onUnshift({
        value: {
          id: "",
          name: "",
        },
      });
      setEditIndex(0);
    },
    [fieldArrayRenderProps]
  );

  const onRemove = useCallback(
    (dataItem) => {
      fieldArrayRenderProps.onRemove({
        index: dataItem[FORM_DATA_INDEX],
      });
      setEditIndex(undefined);
    },
    [fieldArrayRenderProps]
  );

  const onEdit = useCallback((dataItem, isNewItem) => {
    if (!isNewItem) {
      editItemCloneRef.current = clone(dataItem);
    }
    setEditIndex(dataItem[FORM_DATA_INDEX]);
  }, []);

  const onCancel = useCallback(() => {
    if (editItemCloneRef.current) {
      fieldArrayRenderProps.onReplace({
        index: editItemCloneRef.current[FORM_DATA_INDEX],
        value: editItemCloneRef.current,
      });
    }
    editItemCloneRef.current = undefined;
    setEditIndex(undefined);
  }, [fieldArrayRenderProps]);

  const onSave = useCallback(() => {
    setEditIndex(undefined);
  }, [fieldArrayRenderProps]);

  return (
    <FormGridEditContext.Provider
      value={{
        parentField: name,
        editIndex,
        onRemove,
        onSave,
        onCancel,
        onEdit,
      }}
    >
      <Grid data={dataWithIndexes} dataItemKey={dataItemKey}>
        <GridToolbar>
          <button onClick={onAdd} disabled={editIndex !== undefined}>
            +Add row
          </button>
        </GridToolbar>
        <GridColumn
          field="ProductName"
          title="Product Name"
          cell={NameCell}
          width="150px"
        />
        <GridColumn
          field="QuantityPerUnit"
          title="Quantity Per Unit"
          cell={NumberCell}
          width="150px"
        />
        <GridColumn cell={CommandCell} width="150px" />
      </Grid>
    </FormGridEditContext.Provider>
  );
};

const Main = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem));
  return (
    <Form
      initialValues={{ products: sampleProducts }}
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <FieldArray
            name="products"
            dataItemKey={DATA_ITEM_KEY}
            component={FormGrid}
          />
        </FormElement>
      )}
    />
  );
};

export default Main;
