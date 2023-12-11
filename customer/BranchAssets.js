import { Button } from "@progress/kendo-react-buttons";
import React, { useState } from "react";
import { GridSaveDialog } from "./assets/CustomerDialog";
import { useNavigate } from "react-router-dom";
import CustomerGridTable from "./CustomerGridTable";

const columns = [
  {
    title: "Category",
    field: "Category",
    show: true,
    filter: "text",
  },
  {
    title: "Name",
    field: "Name",
    show: true,
    isColumnMenu: false,
  },
  {
    title: "Product Category",
    field: "ProductCategory",
    show: true,
    filter: "text",
  },
  {
    title: "Product",
    field: "Product",
    show: true,
    filter: "text",
  },
  {
    title: "Capacity/Odometer",
    field: "Capacity",
    show: true,
    filter: "numeric",
  },
  {
    title: "Bar Code",
    field: "BarCode",
    show: true,
    filter: "text",
  },
  {
    title: "Image",
    field: "Image",
    show: true,
    filter: "text",
  },
  {
    title: "Is Active",
    field: "IsActive",
    show: true,
    filter: "boolean",
  },
];

const BranchAssets = () => {
  const navigate = useNavigate();
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
    <div style={{ padding: "18px 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "190px",
          }}
        >
          <span>TANKS/EQUIPMENT FOR</span>
          <span
            className="k-icon k-i-zoom k-icon-lg primary_btn"
            style={{ marginLeft: "30px" }}
          />
        </div>
        <div>
          <Button
            icon="k-icon k-i-arrow-left k-icon-lg"
            className="primary_btn"
            onClick={() => navigate(`/Dashboard/CreateBranch/${1}`)}
          >
            Manage Delivery Location
          </Button>
          <Button
            icon="k-icon k-i-plus"
            className="primary_btn"
            onClick={() => navigate("/Dashboard/CreateBranchAsset")}
          >
            Add Asset
          </Button>
          <Button
            icon="k-icon  k-i-arrow-left k-icon-lg"
            className="primary_btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <Button
            icon="k-icon k-i-user k-icon-lg "
            className="primary_btn"
            onClick={() => {
              savingGridData();
            }}
          >
            <span className="k-icon k-i-gear  k-icon-xs mergedIcon" />
          </Button>
        </div>

        {gridSaveDailog && (
          <GridSaveDialog dialogProps={closingGridSaveDialog} />
        )}
      </div>
      <hr />
      <CustomerGridTable data={[]} columns={columns} />
    </div>
  );
};

export default BranchAssets;
