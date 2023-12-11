import { Button } from "@progress/kendo-react-buttons";
import React, { useState } from "react";
import { GridSaveDialog } from "./assets/CustomerDialog";
import CustomerGridTable from "./CustomerGridTable";
import { Link } from "react-router-dom";
import { Checkbox } from "@progress/kendo-react-inputs";

const columns = [
  {
    title: "",
    field: "",
    show: true,
    isColumnMenu: false,
  },
  {
    title: "Division",
    field: "Division",
    show: true,
    filter: "text",
  },
  {
    title: "Delivery Location",
    field: "DeliveryLocation",
    show: true,
    filter: "text",
  },
  {
    title: "Address",
    field: "Address",
    show: true,
    filter: "text",
  },
  {
    title: "Total Count",
    field: "TotalCount",
    show: true,
    filter: "text",
  },
  {
    title: "Active Count",
    field: "ActiveCount",
    show: true,
    filter: "boolean",
  },
  {
    title: "Active",
    field: "Active",
    show: true,
    filter: "boolean",
  },
  {
    title: "Service Schedule",
    field: "ServiceSchedule",
    show: true,
    filter: "boolean",
  },
  {
    title: "Service Types",
    field: "ServiceTypes",
    show: true,
    filter: "boolean",
  },
];

const data = [
  {
    "": "Tanks/Equipment",
    Division: "DJ",
    DeliveryLocation: "0232",
    Address: "Otisville",
    TotalCount: 0,
    ActiveCount: 0,
    Active: true,
    ServiceSchedule: "",
    ServiceTypes: "",
  },
];

const AssetAdmin = () => {
  const [gridSaveDailog, setGridSaveDailog] = useState(false);
  const closingGridSaveDialog = (data) => {
    setGridSaveDailog(data);
  };

  const savingGridData = () => {
    setGridSaveDailog(true);
    setTimeout(() => {
      setGridSaveDailog(false);
    }, 1500);
  };

  const cellRender = (cell, props) => {
    const { field } = props;

    if (field === "Active") {
      return (
        <td {...cell.props} className="activeCell">
          <Checkbox checked />
        </td>
      );
    } else if (field === "") {
      return (
        <td {...cell.props} style={{ color: "#00B5DC" }}>
          <Link to={`/Dashboard/BranchAssets`}>{cell.props.children}</Link>
        </td>
      );
    }
    return <td {...cell.props}>{cell.props.children}</td>;
  };

  return (
    <div>
      <div className="pt-2 pl-2 flex flex-row panel-header">
        <div className="flex col-3 md align-items-center">
          <div className="k-font-weight-bold">
            <span style={{ fontSize: "16px", paddingTop: "5px" }}>
              Delivery Location Taxes
            </span>{" "}
          </div>
          <div>
            <span className="k-icon k-i-search primary_btn" />
          </div>
        </div>
        <div className="flex flex-end col-9 md justify-content-end align-items-center">
          <Button
            icon="k-icon k-i-user k-icon-lg "
            className="primary_btn"
            onClick={() => {
              savingGridData();
            }}
          >
            <span className="k-icon k-i-gear  k-icon-xs mergedIcon" />
          </Button>
          <Button className="primary_btn" icon="k-icon k-i-refresh"></Button>
        </div>
      </div>
      <br />
      {gridSaveDailog && <GridSaveDialog dialogProps={closingGridSaveDialog} />}
      <CustomerGridTable
        data={data}
        columns={columns}
        cellRender={cellRender}
      />
    </div>
  );
};

export default AssetAdmin;
