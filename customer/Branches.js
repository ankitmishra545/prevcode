import { Button } from "@progress/kendo-react-buttons";
import React, { useState } from "react";
import { GridSaveDialog } from "./assets/CustomerDialog";
import CustomerGridTable from "./CustomerGridTable";

const columns = [
  {
    title: "",
    field: "",
    show: true,
    isColumnMenu: false,
  },
  {
    title: "Company",
    field: "Company",
    show: true,
    filter: "text",
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
    title: "Short Name",
    field: "ShortName",
    show: true,
    filter: "text",
  },
  {
    title: "Address 1",
    field: "Address",
    show: true,
    filter: "text",
  },
  {
    title: "Zip",
    field: "ZIp",
    show: true,
    filter: "text",
  },
  {
    title: "Active",
    field: "Active",
    show: true,
    filter: "boolean",
  },
];

const Branches = () => {
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
      <CustomerGridTable data={[]} columns={columns} />
    </div>
  );
};

export default Branches;
