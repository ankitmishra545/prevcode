import React, { useEffect, useState } from "react";
import {
  FormCheckbox,
  FormDropDownList,
  FormInput,
  FormTextArea,
} from "./assets/formComponent";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomerGridTable from "./CustomerGridTable";
import { GridSaveDialog } from "./assets/CustomerDialog";

const branchFields = [
  {
    name: "clearingAgency",
    label: "Clearing Agency",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: [
      "Comdata Corporation",
      "Fuel Clearing House",
      "FCH Audit",
      "Hughes Technology",
      "TCheck",
      "UPS AIMS",
      "Wright Express",
    ],
    value: "Select Clearing Agency",
  },
  {
    name: "deliveryLocationName",
    label: "Delivery Location Name",
    type: FormInput,
    placeholder: "Enter Delivery Location Name",
    required: true,
  },
  {
    name: "shortName",
    label: "Short Name",
    type: FormInput,
    placeholder: "Enter Short Name",
    required: true,
  },
  {
    name: "buyerMasterSeller",
    label: "Buyer/Master Seller",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: [
      "Select your Buyer/Master Seller",
      "Cary Oil",
      "Empire",
      "KC_1 Company New",
      "Sunbelt Rentals",
    ],
    value: "Mansfield Oil Company",
  },
  {
    name: "customer",
    label: "Customer/Division",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: ["", "Cary Oil", "Empire", "KC_1 Company New", "Sunbelt Rentals"],
    value: "Select your Customer/Division",
  },
  {
    name: "Address1",
    label: "Address 1",
    type: FormInput,
    placeholder: "Enter Address 1",
    required: true,
  },
  {
    name: "Address2",
    label: "Address2",
    type: FormInput,
    placeholder: "Enter Address 2",
    required: false,
  },
  {
    name: "city",
    label: "City",
    type: FormInput,
    placeholder: "Enter City",
    required: false,
  },
  {
    name: "country",
    label: "Country",
    type: FormDropDownList,
    placeholder: "",
    required: false,
    data: ["Canada", "Texas"],
    value: "USA",
  },
  {
    name: "country",
    label: "Country",
    type: FormDropDownList,
    placeholder: "",
    required: false,
    data: [
      "New York",
      "Albama",
      "New York",
      "Albama",
      "New York",
      "Albama",
      "New York",
      "Albama",
    ],
    value: "Select State/Province",
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: FormInput,
    placeholder: "Enter Zip Code",
    required: true,
  },
  {
    name: "zipPlus",
    label: "Zip Plus",
    type: FormInput,
    placeholder: "Enter Zip Plus",
    required: false,
  },
  {
    name: "cardNumber",
    label: "Card Number",
    type: FormInput,
    placeholder: "Enter Card Number",
    required: false,
  },
  {
    name: "cardPinNumber",
    label: "Card Pin Number",
    type: FormInput,
    placeholder: "Enter Card Pin Number",
    required: false,
  },
  {
    name: "accountNumber",
    label: "Delivery Location Account Number",
    type: FormInput,
    placeholder: "Delivery Location Account Number",
    required: false,
  },
  {
    name: "pricingVariance",
    label: "Pricing Variance",
    type: FormInput,
    placeholder: "Enter Pricing Variance",
    required: false,
  },
  {
    name: "taxId",
    label: "TaxId",
    type: FormInput,
    placeholder: "Enter TaxId",
    required: false,
  },
  {
    name: "businessPhone",
    label: "Business Phone",
    type: FormInput,
    placeholder: "Enter Business Phone",
    required: false,
  },
  {
    name: "notes",
    label: "Notes",
    type: FormTextArea,
    placeholder: "Enter Notes",
    required: false,
  },
  {
    name: "deliveryLocationApprovalEmail",
    label: "Delivery Location Approval Email",
    type: FormTextArea,
    placeholder: "Enter Delivery Location Approval Email",
    required: false,
  },
  {
    name: "deliveryLocationInvoiceEmail",
    label: "Delivery Location Invoice Email",
    type: FormTextArea,
    placeholder: "Enter Delivery Location Invoice Email",
    required: false,
  },
  {
    name: "faxNumber",
    label: "Fax Number",
    type: FormInput,
    placeholder: "Enter Fax Number",
    required: false,
  },
  {
    name: "currentSeller",
    label: "Current Seller",
    type: FormDropDownList,
    placeholder: "",
    required: false,
    data: [],
    value: "Select Current Seller",
  },
  //   label
  {
    name: "deliveryLocationCardNumber",
    label: "Delivery Location uses asset-level card numbers",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "isActive",
    label: "is Active",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "site",
    label: "Site #",
    type: FormInput,
    placeholder: "Enter Site",
    required: false,
  },
  {
    name: "customer",
    label: "Customer #",
    type: FormInput,
    placeholder: "Enter Customer",
    required: false,
  },
  {
    name: "location",
    label: "Location #",
    type: FormInput,
    placeholder: "Enter",
    required: false,
  },
  {
    name: "serviceType",
    label: "Service Type",
    type: FormInput,
    placeholder: "",
    required: true,
  },
  // options
  {
    name: "validatePrice",
    label: "Validate Price",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "validateAssets",
    label: "Validate Assets",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "validateCapacity",
    label: "Validate Capacity",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "deleiveryLocationApproval",
    label: "Deilivery Location Approval",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "requireApproval",
    label: "Require Approval #",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
  {
    name: "scacCodes",
    label: "Require SCAC Codes",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
];

const columns = [
  {
    title: "Entity Validation Rule Id",
    field: "EntityValidationId",
    show: false,
    filter: "text",
  },
  {
    title: "Validation Type Id",
    field: "ValidationId",
    show: false,
    filter: "text",
  },
  {
    title: "Entity Id",
    field: "EntityId",
    show: false,
    filter: "text",
  },
  {
    title: "Validation Type",
    field: "validationType",
    show: true,
    filter: "text",
  },
  {
    title: "Description",
    field: "Description",
    show: true,
    filter: "text",
  },
  {
    title: "IsValidate",
    field: "IsValidate",
    show: true,
    filter: "text",
  },
];

const contractsColumns = [
  {
    title: "Details",
    field: "Details",
    show: true,
    filter: "text",
  },
  {
    title: "Clearing Agency",
    field: "ClearingAgency",
    show: true,
    filter: "text",
  },
  {
    title: "Vendor",
    field: "Vendor",
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
    title: "Price as Product",
    field: "PriceAsProduct",
    show: true,
    filter: "text",
  },
  {
    title: "Index",
    field: "Index",
    show: true,
    filter: "text",
  },
  {
    title: "Margin",
    field: "Margin",
    show: true,
    filter: "text",
  },
  {
    title: "Start",
    field: "Start",
    show: true,
    filter: "text",
  },
  {
    title: "End",
    field: "End",
    show: true,
    filter: "text",
  },
  {
    title: "Can Auto Price",
    field: "CanAutoPrice",
    show: true,
    filter: "text",
  },
  {
    title: "Vendor Delivery Location Name",
    field: "VDLN",
    show: true,
    filter: "text",
  },
  {
    title: "Vendor Product Name",
    field: "VendorProductName",
    show: true,
    filter: "text",
  },
  {
    title: "Usage Fee",
    field: "UsageFee",
    show: true,
    filter: "text",
  },
  {
    title: "Fee Party",
    field: "FeeParty",
    show: true,
    filter: "text",
  },
  {
    title: "Fee Type",
    field: "FeeType",
    show: true,
    filter: "text",
  },
];

const assetsColumns = [
  {
    title: "Asset Id",
    field: "AssetId",
    show: true,
    filter: "text",
  },
  {
    title: "AssetNbr",
    field: "AssetNbr",
    show: true,
    filter: "text",
  },
  {
    title: "Status",
    field: "Status",
    show: true,
    filter: "text",
  },
  {
    title: "Gallons",
    field: "Gallons",
    show: true,
    filter: "text",
  },
  {
    title: "Category",
    field: "Category",
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
    title: "Asset Card Number",
    field: "AssetCardNumber",
    show: true,
    filter: "text",
  },
  {
    title: "Asset Pin Number",
    field: "AssetPinNumber",
    show: true,
    filter: "text",
  },
  {
    title: "Aleternate Asset Number",
    field: "AlternateAssetNumber",
    show: true,
    filter: "text",
  },
  {
    title: "Created Date",
    field: "CreatedDate",
    show: true,
    filter: "text",
  },
  {
    title: "Approved Date",
    field: "ApprovedDate",
    show: true,
    filter: "text",
  },
  {
    title: "Approver",
    field: "Approver",
    show: true,
    filter: "text",
  },
  {
    title: "Asset Detail1",
    field: "AssetDetail1",
    show: true,
    filter: "text",
  },
  {
    title: "Exception Date",
    field: "ExceptionDate",
    show: true,
    filter: "text",
  },
];

const BranchComponent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userDetail } = params;
  const [gridColumns, setGridColumns] = useState("");
  const [gridSaveDailog, setGridSaveDailog] = useState(false);

  const savingGridData = () => {
    setGridSaveDailog(true);
    setTimeout(() => {
      setGridSaveDailog(false);
    }, 1500);
  };

  return (
    <div
      style={{
        padding: "10px 20px",
        border: "1px solid gray",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      {gridSaveDailog && <GridSaveDialog />}
      <Form
        render={(formRenderProps) => (
          <FormElement
            style={{
              width: "100%",
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <legend
                className={"k-form-legend"}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px",
                }}
              >
                <div className="customerTitle">MANAGE DELIVERY LOCATION</div>
                <div className="mansfieldCustomerButtonContainer">
                  {Number(userDetail) !== 0 && (
                    <div>
                      <Button
                        className="primary_btn"
                        onClick={() => navigate("/Dashboard/BranchAssets")}
                      >
                        Manage Assets
                        <span className="k-icon k-i-arrow-chevron-right k-icon-xs" />
                        <span
                          className="k-icon k-i-arrow-chevron-right k-icon-xs"
                          style={{ position: "relative", right: "6px" }}
                        />
                      </Button>
                      <Button
                        className="primary_btn"
                        onClick={() => navigate("/Dashboard/BranchTaxes")}
                      >
                        Manage Taxes & Fees
                        <span className="k-icon k-i-arrow-chevron-right k-icon-xs" />
                        <span
                          className="k-icon k-i-arrow-chevron-right k-icon-xs"
                          style={{ position: "relative", right: "6px" }}
                        />
                      </Button>
                    </div>
                  )}
                  <Button
                    icon="k-icon k-i-check k-icon-lg"
                    className="primary_btn"
                    onClick={() => {}}
                  >
                    Save
                  </Button>
                  <Button
                    icon="k-icon k-i-arrow-left k-icon-lg"
                    className="primary_btn"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Back
                  </Button>
                </div>
              </legend>
              <GridLayout
                gap={{ rows: 5, cols: 80 }}
                cols={[{ width: "28%" }, { width: "28%" }, { width: "28%" }]}
              >
                {branchFields.map((field, index) => {
                  return (
                    <GridLayoutItem key={index}>
                      <Field
                        id={field.name}
                        name={field.name}
                        label={field.label}
                        component={field.type}
                        placeholder={field.placeholder}
                        data={
                          field.type === FormDropDownList ? field.data : null
                        }
                        defaultItem={
                          field.type === FormDropDownList ? field.value : null
                        }
                        hint={field.placeholder}
                        required={field.required}
                        disabled={
                          field.name === "pricingVariance" ? true : false
                        }
                        value={
                          field.name === "pricingVariance"
                            ? field.placeholder
                            : null
                        }
                      />
                    </GridLayoutItem>
                  );
                })}
              </GridLayout>
            </fieldset>
          </FormElement>
        )}
      />
      <hr
        style={{
          position: "relative",
          top: "16px",
          color: "#5c853e",
        }}
      />
      <CustomerGridTable data={[]} columns={columns} />
      {Number(userDetail) !== 0 && (
        <div
          style={{
            backgroundColor: "lightgray",
            marginTop: "10px",
            padding: "8px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "35px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontWeight: 700,
            }}
          >
            <button
              style={{
                backgroundColor: "inherit",
                border: "none",
                borderBottom:
                  gridColumns === "contracts" ? " 1px solid blue" : "none",
                fontWeight: 700,
              }}
              onClick={() => setGridColumns("contracts")}
            >
              Contracts
            </button>
            <button
              style={{
                backgroundColor: "inherit",
                border: "none",
                borderBottom:
                  gridColumns === "assets" ? "1px solid blue" : "none",
                fontWeight: 700,
              }}
              onClick={() => setGridColumns("assets")}
            >
              Assets
            </button>
          </div>
          {gridColumns === "contracts" ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "15px 8px 5px",
                }}
              >
                <div>DELIVERY LOCATION SERVICE LEVEL AGREEMENTS</div>
                <div>
                  <Button icon="k-icon k-i-plus" className="primary_btn">
                    Create
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
              </div>
              <CustomerGridTable key="1" data={[]} columns={contractsColumns} />
            </div>
          ) : gridColumns === "assets" ? (
            <CustomerGridTable key="2" data={[]} columns={assetsColumns} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default BranchComponent;
