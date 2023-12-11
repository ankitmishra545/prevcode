import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Tooltip } from "@progress/kendo-react-tooltip";
import { process } from "@progress/kendo-data-query";
import "./defaultterminal.css";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import products from "./sample.json";
import CommandButtons from "../../seller/shared/commandButtons";
import { CustomColumnMenu } from "../../seller/shared/customColumnMenuSeller";
import CustomFilterUI from "./customfilterUI";

const sampleProducts = products;
const columns = [
  {
    title: "Product Name",
    text: "Terminal Market State",
    field: "ProductName",
    show: true,
    filter: "text",
  },

  {
    title: "Unit Price",
    text: "Terminal Market",
    field: "UnitPrice",
    show: true,
    filter: "text",
  },
  {
    title: "Units In Stock*",
    text: "Default Terminal",
    field: "UnitsInStock",
    show: true,
    filter: "text",
  },
];

const initialDataState = {
  skip: 0,
  take: 10,
};

const DropDownCell = (props) => {
  const { dataItem } = props;
  const field = props.field || "";
  let item;
  if (field === "ProductName") {
    item = [...sampleProducts.map((x) => x[field])];
  } else if (field === "UnitPrice") {
    item = [...sampleProducts.map((x) => x[field])].filter(
      (x) => x !== dataItem.UnitPrice
    );
  } else {
    item = [...sampleProducts.map((x) => x[field])].filter(
      (x) => x !== dataItem.UnitsInStock
    );
  }

  const [value, setValue] = React.useState();
  let dataValue = dataItem[field];

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange && e.target.value !== "--Select--") {
      props.onChange({
        dataIndex: 0,
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.target.value,
      });
    }
  };
  return (
    <td>
      {dataItem.inEdit ? (
        <>
          {field === "ProductName" ? (
            <DropDownList
              id="dropdown"
              style={{
                width: "auto-content",
                backgroundColor: "transparent",
                border: "1px solid red",
                boxShadow: "0 0 0 0",
                fontSize: "25px",
              }}
              defaultItem="--Select--"
              data={item}
              value={dataItem[field]}
              disabled={false}
              onChange={handleChange}
              title={`${field} is required`}
            />
          ) : (
            <DropDownList
              style={{
                width: "auto-content",
                backgroundColor: "transparent",
                border: "1px solid red",
                boxShadow: "0 0 0 0",
                fontSize: "25px",
              }}
              defaultItem="--Select--"
              data={item}
              disabled={
                dataItem.ProductName
                  ? field === "UnitPrice"
                    ? false
                    : dataItem.UnitPrice
                    ? false
                    : true
                  : true
              }
              onChange={handleChange}
              title={`${field} is required`}
              id={field === "UnitPrice" ? "dropdownSecond" : "dropdownThird"}
            />
          )}
        </>
      ) : (
        dataValue.toString()
      )}
    </td>
  );
};

const headercell = (cell) => {
  return cell.props.children[1] === undefined ? (
    <span {...cell.props}>{cell.props.children[0]}</span>
  ) : (
    <span {...cell.props}>
      <span style={{ marginRight: "auto", paddingLeft: "10px" }}>
        {cell.props.children[0]}
        <span style={{ color: "#f05050" }}>*</span>
      </span>
      {cell.props.children[1]}
    </span>
  );
};

const createDataState = (dataState, data) => {
  return {
    result: process(data.slice(0), { ...dataState, take: 30 }),
    dataState: dataState,
  };
};

const DefaultTerminal = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [page, setPage] = React.useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState();
  const [stateColumns, setStateColumns] = React.useState(columns);
  const [item, setItem] = React.useState();
  const [visible, setVisible] = React.useState(false);
  let initialState = createDataState(initialDataState, data);
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);
  const [value, setValue] = React.useState(null);
  const [changeDep, setChangeDep] = React.useState(false);
  const element = React.useRef(null);
  const [targetElement, settargetElement] = React.useState(null);
  const [originalData, setOriginaldata] = React.useState(sampleProducts);

  React.useEffect(() => {
    let dropDownElement = document.getElementById("dropdown");
    settargetElement(dropDownElement);
  }, [changeDep]);

  const toggleDialog = (dataItem) => {
    setVisible(!visible);
    setItem(dataItem);
  };

  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState, data);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  const onColumnsSubmit = (columnsState) => {
    setStateColumns(columnsState);
  };

  const pageChange = (event) => {
    const targetEvent = event.targetEvent;
    const take =
      targetEvent.value === "All" ? result.data.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };

  const editField = "inEdit";

  const remove = React.useCallback(
    (dataItem) => {
      setVisible(!visible);
      setItem(dataItem);
      let index = data.findIndex(
        (record) =>
          record.ProductName === dataItem.ProductName &&
          record.UnitPrice === dataItem.UnitPrice &&
          record.UnitsInStock === dataItem.UnitsInStock
      );
      data.splice(index, 1);
      setResult({ data: [...data] });
      setData([...data]);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [visible]
  );

  const update = React.useCallback(
    (dataItem) => {
      setValue(null);
      target(dataItem);
      if (dataItem.Discontinued) {
        let newData = result.data.map((item) =>
          item.ProductName === dataItem.ProductName &&
          item.ProductID === dataItem.ProductID
            ? {
                ...dataItem,
                inEdit: false,
                Discontinued: false,
              }
            : item
        );
        setData(newData);
        setOriginaldata(newData);
        setResult({ data: newData });
        createDataState(dataState, newData);
      } else {
        if (
          dataItem.ProductName &&
          dataItem.UnitPrice &&
          dataItem.UnitPrice !== "--Select--" &&
          (dataItem.UnitsInStock ||
            dataItem.UnitsInStock === 0 ||
            dataItem.UnitsInStock !== "--Select--")
        ) {
          dataItem.inEdit = false;
          const newItem = [...result.data];
          setOriginaldata(data);
          setData(newItem);
          setResult({ data: newItem });
          setChangeDep(false);
          createDataState(dataState, newItem);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [result]
  );

  const cancel = React.useCallback(
    (dataItem) => {
      console.log(dataItem);
      console.log(originalData);
      setChangeDep(false);
      if (dataItem.inEdit) {
        if (dataItem.ProductName && dataItem.Discontinued) {
          let newData = originalData.map((item) =>
            item.ProductName === dataItem.ProductName &&
            item.ProductID === dataItem.ProductID
              ? {
                  ...item,
                  inEdit: false,
                  Discontinued: false,
                }
              : item
          );
          setOriginaldata(newData);
          setData(newData);
          setResult({ ...result, data: newData });
        } else {
          const newData = data.filter((x) => !x.inEdit);
          setData(newData);
          setResult({ ...result, data: newData });
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [originalData]
  );

  const enterEdit = React.useCallback(
    (dataItem) => {
      let newData = data.map((item) =>
        item.ProductID === dataItem.ProductID &&
        item.ProductName === dataItem.ProductName &&
        item.UnitPrice === dataItem.UnitPrice &&
        item.UnitsInStock === dataItem.UnitsInStock
          ? {
              ...item,
              inEdit: true,
              Discontinued: true,
              ProductName: dataItem.ProductName,
            }
          : item
      );
      setData(newData);
      setOriginaldata(newData);
      setValue(dataItem.ProductName);
      setResult({ ...result, data: newData });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [data]
  );

  const CommandCell = (props) => {
    return (
      <CommandButtons
        {...props}
        edit={enterEdit}
        update={update}
        cancel={cancel}
        toggleShow={toggleDialog}
        editField={editField}
      />
    );
  };

  const itemChange = (event) => {
    const field = event.field || "";
    const newData = data.map((item) =>
      // item.ProductID === event.dataItem.ProductID && item.ProductName === event.dataItem.ProductName
      item.inEdit
        ? {
            ...item,
            [field]: event.value,
          }
        : item
    );
    setData(newData);
    setResult({ ...result, data: newData });
    setValue(null);
    if (field === "ProductName") {
      let dropDownElement = document.getElementById("dropdownSecond");
      settargetElement(dropDownElement);
    } else if (field === "UnitPrice") {
      let dropDownElement = document.getElementById("dropdownThird");
      settargetElement(dropDownElement);
    } else if (field === "UnitsInStock") {
      settargetElement(null);
    } else {
      let dropDownElement = document.getElementById("dropdown");
      settargetElement(dropDownElement);
    }
  };

  const target = (dataItem) => {
    if (dataItem.ProductName) {
      let dropDownElement = document.getElementById("dropdownSecond");
      settargetElement(dropDownElement);
      if (dataItem.UnitPrice) {
        let dropDownElement = document.getElementById("dropdownThird");
        settargetElement(dropDownElement);
      }
    } else {
      let dropDownElement = document.getElementById("dropdown");
      settargetElement(dropDownElement);
    }
  };

  const addNew = () => {
    setChangeDep(true);
    if (!data[0] || !data[0].inEdit) {
      const newDataItem = {
        inEdit: true,
        Discontinued: false,
      };
      setData([newDataItem, ...data]);
      setResult({ data: [newDataItem, ...data] });
    }
  };

  return (
    <>
      <Tooltip
        open={value === null || 0 ? true : false}
        openDelay={1}
        tooltipStyle={{ backgroundColor: "red" }}
        anchorElement="target"
        targetElement={targetElement}
        appendTo={element.current}
        position={"bottom"}
      >
        <div ref={element}>
          <Grid
            data={result.data.slice(page.skip, page.take + page.skip)}
            {...dataState}
            skip={page.skip}
            take={page.take}
            total={data.length}
            pageable={{
              // buttonCount: 3,
              pageSizes: [5, 10, 15, "All"],
              pageSizeValue: pageSizeValue,
            }}
            onPageChange={pageChange}
            onItemChange={itemChange}
            headerCellRender={headercell}
            editField={editField}
            resizable={true}
            reorderable={true}
            sortable={true}
            style={{
              height: "fit-content",
              maxHeight: "400px",
            }}
            onDataStateChange={dataStateChange}
          >
            <GridToolbar className="grid-bar">
              <button
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary changeBtnColor "
                onClick={addNew}
              >
                <span className="k-icon k-i-plus"></span>
                Add Default Terminal
              </button>
              <button
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary changeBtnColor"
                style={{ width: "40px" }}
              >
                <span>
                  <i className="fa fa  fa-floppy-o"></i>
                </span>
              </button>
            </GridToolbar>
            {stateColumns.map((x, idx) => {
              if (x.show) {
                return (
                  <Column
                    field={x.field}
                    title={x.text}
                    cell={DropDownCell}
                    filter={x.filter}
                    key={idx}
                    columnMenu={(props) => (
                      <CustomColumnMenu
                        {...props}
                        columns={stateColumns}
                        onColumnsSubmit={onColumnsSubmit}
                        sortActive
                        filterActive={x.field !== "UnitPrice" ? true : false}
                        component={CustomFilterUI}
                      />
                    )}
                  />
                );
              }
              return null;
            })}
            <Column field="Commands" cell={CommandCell} width="240px" />
          </Grid>
        </div>
      </Tooltip>
      {visible && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Are you sure you want to continue?
          </p>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              style={{ backgroundColor: "#f05050", color: "white" }}
              onClick={toggleDialog}
            >
              No
            </button>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              style={{
                backgroundColor: "green",
                opacity: "0.6",
                color: "white",
              }}
              onClick={() => remove(item)}
            >
              Yes
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
    </>
  );
};

export default DefaultTerminal;
