import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import {
  FormDropDownList,
  FormCheckbox,
  FormMaskedTextBox,
  FormInput,
} from "./assets/formComponent";
import "./customer.css";
import { useNavigate, useParams } from "react-router-dom";
import CustomerDivision from "./customerDetails/CustomerDivision";
import { Button } from "@progress/kendo-react-buttons";

const country = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

const ManageDivisionForm = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { userName } = params;

  const manageDivisionButtons = [
    {
      buttonName: "Accept",
      icon: "k-icon k-i-check k-icon-lg",
    },
    {
      buttonName: "Accept And Close",
      icon: "k-icon k-i-check k-icon-lg",
    },
    {
      buttonName: "Back",
      icon: "k-icon k-i-arrow-left k-icon-xl",
    },
  ];

  const manageDivisionFieldsArray = [
    {
      name: "buyer",
      label: "Buyer",
      type: FormDropDownList,
      placeholder: "",
      required: true,
      data: ["Select Buyer"],
      value: "Mansfield Oil Company",
    },
    {
      name: "divisionName",
      label: "Division Name",
      type: FormInput,
      placeholder: "Enter Division Name",
      required: true,
    },
    {
      name: "adress1",
      label: "Address 1",
      type: FormInput,
      placeholder: "Enter Address 1",
      required: true,
    },
    {
      name: "address2",
      label: "Address 2",
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
      name: "state",
      label: "State/Province",
      type: FormDropDownList,
      placeholder: "",
      required: false,
      data: country,
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
      label: "Zip Plus4",
      type: FormInput,
      placeholder: "Enter Zip Plus4",
      required: false,
    },
    {
      name: "mobileNumber",
      label: "Mobile Number",
      type: FormMaskedTextBox,
      placeholder: "Enter Mobile Number",
      required: false,
      mask: "000-000-0000",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: FormMaskedTextBox,
      placeholder: "Enter Phone Number",
      required: true,
      mask: "000-000-0000",
    },
    {
      name: "phoneExt",
      label: "Phone Ext",
      type: FormInput,
      placeholder: "Enter Phone Ext",
      required: false,
    },
    {
      name: "contactName",
      label: "Contact Name",
      type: FormInput,
      placeholder: "Enter Contact Name",
      required: false,
    },
    {
      name: "contactEmail",
      label: "Contact Email",
      type: FormInput,
      placeholder: "Enter Contact Email",
      required: false,
    },
    {
      name: "faxNumber",
      label: "Fax Number",
      type: FormMaskedTextBox,
      placeholder: "Enter Fax Number",
      required: false,
      mask: "000-000-0000",
    },
    {
      name: "pricingVariance",
      label: "Pricing Variance",
      type: FormInput,
      placeholder: "Pricing Variance",
      required: false,
    },
    {
      name: "taxId",
      label: "TaxId",
      type: FormMaskedTextBox,
      placeholder: "Enter TaxId",
      required: false,
      mask: "00-0000000",
    },
    {
      name: "isActive",
      label: "is Active",
      type: FormCheckbox,
      placeholder: "",
      required: false,
    },
  ];

  return (
    <div
      style={{
        padding: "10px 20px",
        border: "1px solid gray",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
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
                <div className="customerTitle">MANAGE DIVISION</div>
                <div className="mansfieldCustomerButtonContainer">
                  {manageDivisionButtons.map((object, index) => {
                    return (
                      <Button
                        key={index}
                        icon={object.icon}
                        className="primary_btn"
                        onClick={() => {
                          navigate(-1);
                        }}
                      >
                        {object.buttonName}
                      </Button>
                    );
                  })}
                </div>
              </legend>
              <GridLayout
                gap={{ rows: 5, cols: 80 }}
                cols={[{ width: "25%" }, { width: "25%" }, { width: "25%" }]}
              >
                {manageDivisionFieldsArray.map((field, index) => {
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
                        mask={
                          field.type === FormMaskedTextBox ? field.mask : null
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
      <br />
      <br />
      {/* <hr /> */}
      {Number(userName) !== 0 && <CustomerDivision />}
    </div>
  );
};

export default ManageDivisionForm;
