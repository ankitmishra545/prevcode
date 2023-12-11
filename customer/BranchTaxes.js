import { Button } from "@progress/kendo-react-buttons";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GridSaveDialog } from "./assets/CustomerDialog";
import CustomerGridTable from "./CustomerGridTable";
import { FormInput } from "./assets/formComponent";
import { Checkbox } from "@progress/kendo-react-inputs";

const columns = [
  {
    title: "ID",
    field: "ID",
    show: true,
    filter: "numeric",
  },
  {
    title: "Tax Fee",
    field: "TaxFee",
    show: true,
    filter: "text",
  },
  {
    title: "Rate",
    field: "Rate",
    show: true,
    filter: "numeric",
  },
  {
    title: "Taxable",
    field: "Taxable",
    show: true,
    filter: "boolean",
  },
  {
    title: "Effective Date",
    field: "EffectiveDate",
    show: true,
    filter: "text",
  },
  {
    title: "Remove",
    field: "Remove",
    show: true,
    isColumnMenu: false,
  },
];

let data = [
  {
    ID: "",
    DataKey: 1,
    TaxFee: "USE",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 2,
    TaxFee: "FCH",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 3,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 4,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 5,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 6,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 7,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 8,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 9,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 10,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 11,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 12,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 13,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 14,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
  {
    ID: "",
    DataKey: 15,
    TaxFee: "Select Token",
    isFocused: false,
    Rate: "0",
    Taxable: false,
    EffectiveDate: "07/01/2023",
    Remove: "Delete",
  },
];

const BranchTaxes = () => {
  const navigate = useNavigate();
  const [gridSaveDailog, setGridSaveDailog] = useState(false);
  const [branchData, setBranchData] = useState(data);

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
    const { field, dataItem } = props;
    const updateRow = (value) => {
      const newData = data.map((object) => {
        if (object.DataKey === value) {
          return (object.isFocused = !object.isFocused);
        }
        return object;
      });
      setBranchData([...newData]);
    };

    const updateCheckboxValue = (value) => {
      const newData = data.map((object) => {
        if (object.DataKey === value) {
          return (object.Taxable = !object.Taxable);
        }
        return object;
      });
      setBranchData([...newData]);
    };

    if (field === "Taxable") {
      console.log(cell.props.children);
      return (
        <td {...cell.props} className="activeCell">
          <Checkbox
            checked={cell.props.children === "true"}
            onChange={() => updateCheckboxValue(dataItem.DataKey)}
          />
        </td>
      );
    } else if (field === "Remove") {
      return (
        <td {...cell.props} style={{ color: "#00B5DC", textAlign: "start" }}>
          <button
            style={{
              border: "none",
              backgroundColor: "inherit",
              color: "#00B5DC",
            }}
          >
            {cell.props.children}
          </button>
        </td>
      );
    } else if (field === "TaxFee") {
      return (
        <td {...cell.props} style={{ color: "#00B5DC" }}>
          {!dataItem.isFocused ? (
            <select
              style={{ width: "100%", height: "100%" }}
              onClick={() => {
                updateRow(dataItem.DataKey);
              }}
            >
              <option>{cell.props.children}</option>
            </select>
          ) : (
            <input
              type="text"
              style={{ width: "95%" }}
              value={
                cell.props.children === "Select Token"
                  ? null
                  : cell.props.children
              }
              onBlur={() => updateRow(dataItem.DataKey)}
            />
          )}
        </td>
      );
    } else if (["EffectiveDate", "Rate"].includes(field)) {
      return (
        <td {...cell.props} style={{ textAlign: "end" }}>
          {cell.props.children}
        </td>
      );
    }
    return <td {...cell.props}>{cell.props.children}</td>;
  };

  return (
    <div style={{ padding: "18px 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{`Branch Taxes >> 76 Food Mart : NC`}</div>
        <div>
          <Button
            icon="k-icon k-i-arrow-left k-icon-lg"
            className="primary_btn"
            onClick={() => navigate(`/Dashboard/CreateBranch/${1}`)}
          >
            Manage Delivery Location
          </Button>
          <Button
            icon="k-icon  k-i-arrow-left k-icon-lg"
            className="primary_btn"
            onClick={() => {
              navigate("/Dashboard/Branches");
            }}
          >
            Back
          </Button>
          <Button
            icon="k-icon k-i-check"
            className="primary_btn"
            onClick={() => navigate("/Dashboard/CreateBranchAsset")}
          >
            Save
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
      <div style={{ width: "400px", marginBottom: "20px" }}>
        <FormInput
          label="Tax Scope"
          required={true}
          value="Branch_347676"
          iconRequired={true}
        />
      </div>
      <CustomerGridTable
        data={data}
        columns={columns}
        cellRender={cellRender}
      />
    </div>
  );
};

export default BranchTaxes;
