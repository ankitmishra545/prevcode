import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import React, { useState } from "react";
import { MyCommandCell } from "./myCommandCell";
import { DropdownCell } from "./myDropDownCell";
import { insertItem, getItems, updateItem, deleteItem } from "./services";

const sampleProducts = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10 boxes x 20 bags",
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
];

const GridEditor = () => {
  const editField = "inEdit";
  const [data, setData] = useState(sampleProducts);
  const CommandCell = (props) => {
    return (
      <MyCommandCell
        {...props}
        edit={enterEdit}
        add={add}
        remove={remove}
        discard={discard}
        update={update}
        cancel={cancel}
        editField={editField}
      />
    );
  };

  const remove = (dataItem) => {
    const newData = deleteItem(dataItem);
    setData(newData);
  };

  const add = (dataItem) => {
    dataItem.inEdit = true;
    const newData = insertItem(dataItem);
    setData(newData);
  };

  const update = (dataItem) => {
    dataItem.inEdit = false;
    const newData = updateItem(dataItem);
    setData(newData);
  };

  const discard = (dataItem) => {
    const newData = [...data];
    newData.splice(0, 1);
    setData(newData);
  };

  const cancel = (dataItem) => {
    const originalItem = getItems().find(
      (p) => p.ProductID === dataItem.ProductID
    );
    const newData = data.map((item) =>
      item.ProductID === originalItem.ProductID ? originalItem : item
    );
    setData(newData);
  };

  const enterEdit = (dataItem) => {
    let newData = data.map((item) =>
      item.ProductID === dataItem.ProductID ? { ...item, inEdit: true } : item
    );
    setData(newData);
  };

  const addNew = () => {
    const newDataItem = {
      inEdit: true,
      Discontinued: false,
      ProductID: new Date().getMilliseconds(),
    };
    setData([newDataItem, ...data]);
  };

  const itemChange = (event) => {
    const field = event.field || "";
    const newData = data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? { ...item, [field]: event.value }
        : item
    );
    setData(newData);
  };
  return (
    <Grid
      data={data}
      editField={editField}
      dataItemKey={"ProuctID"}
      onItemChange={itemChange}
    >
      <GridToolbar>
        <button onClick={addNew}>+Add new</button>
      </GridToolbar>
      <GridColumn title="Id" field="ProductID" editable={false} />
      <GridColumn title="Product Name" field="ProductName" />
      <GridColumn
        title="First Ordered"
        field="FirstOrderedOn"
        editor="date"
        format="{0:d}"
      />
      <GridColumn title="Units" field="UnitsInStock" editor="numeric" />
      <GridColumn
        title="Discontinued"
        field="Discontinued"
        cell={DropdownCell}
      />
      <GridColumn cell={CommandCell} />
    </Grid>
  );
};

export default GridEditor;
