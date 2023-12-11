import React from "react";
import {
  FormDropDownList,
  FormCheckbox,
  FormInput,
  FormTextArea,
} from "./assets/formComponent";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";

const createBranchFields = [
  {
    name: "name",
    label: "Name",
    type: FormInput,
    placeholder: "",
    required: true,
  },
  {
    name: "category",
    label: "Category",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: ["Mobile Unit", "Tank"],
    value: "--Select--",
  },
  {
    name: "productCategory",
    label: "Product Category",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: ["Additive", "Gasoline", "Jet Fuel"],
    value: "--Select--",
  },
  {
    name: "product",
    label: "Product",
    type: FormDropDownList,
    placeholder: "",
    required: true,
    data: ["Additive", "Gasoline", "Jet Fuel"],
    value: "--Select--",
  },
  {
    name: "capacity",
    label: "Capacity/Odometer",
    type: FormInput,
    placeholder: "0",
    required: false,
  },
  {
    name: "barCode",
    label: "BarCode",
    type: FormInput,
    placeholder: "Enter Barcode",
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
    name: "isActive",
    label: "is Active",
    type: FormCheckbox,
    placeholder: "",
    required: false,
  },
];

const CreateBranchAsset = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "18px 12px", height: "500px" }}>
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
                <div className="customerTitle">MANAGE TANK/EQUIPMENT:</div>
                <div className="mansfieldCustomerButtonContainer">
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
                    icon="k-icon k-i-check k-icon-lg"
                    className="primary_btn"
                  >
                    Save
                  </Button>
                </div>
              </legend>
              <GridLayout
                gap={{ rows: 5, cols: 80 }}
                cols={[{ width: "25%" }, { width: "25%" }, { width: "25%" }]}
              >
                {createBranchFields.map((field, index) => {
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
                <GridLayoutItem style={{ marginTop: "45px" }}>
                  <input type="file" />
                </GridLayoutItem>
              </GridLayout>
            </fieldset>
          </FormElement>
        )}
      />
    </div>
  );
};

export default CreateBranchAsset;
