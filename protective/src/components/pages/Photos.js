import React, { useState, useMemo, useRef } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import products from "../Data.json";
import { MultiSelectTree } from "@progress/kendo-react-dropdowns";

import { filterBy } from "@progress/kendo-react-data-tools";
import { getter, setter } from "@progress/kendo-react-common";
import DropDownComponent from "./DropDownComponent";

const getValueMap = (value, idGetter) => {
  const map = {};
  if (value && value.length) {
    value.forEach((item) => {
      map[idGetter(item)] = true;
    });
  }
  return map;
};

const mapMultiSelectTreeData = (data, options) => {
  const { keyGetter, checkSetter, valueMap } = options;
  if (!data || !data.length) {
    return [data, false];
  }
  let hasChecked = false;
  const newData = [...data].map((dataItem) => {
    const isChecked = valueMap[keyGetter(dataItem)];
    if (isChecked) {
      hasChecked = true;
    }
    const newItem = {
      ...dataItem,
    };
    checkSetter(newItem, isChecked);
    return newItem;
  });
  return [newData, hasChecked];
};

const processMultiSelectTreeData = (tree, options) => {
  const { checkField = "checkField", dataItemKey, value, filter } = options;
  const keyGetter = getter(dataItemKey);
  const filtering = Boolean(filter && filter.value);
  const [result] = mapMultiSelectTreeData(tree, {
    valueMap: getValueMap(value, keyGetter),
    keyGetter,
    checkSetter: setter(checkField),
  });
  const selectOption = { order: "Select All", id: 1, checkField: undefined };
  if (filtering) {
    let allFiltered = filterBy(result, [filter]);
    if (allFiltered.length) {
      let checkAllCheckfield = allFiltered.some(
        (check) => check.checkField === undefined
      );
      let checkInderminate = allFiltered.some(
        (check) => check.checkField === true
      );
      if (checkAllCheckfield) {
        if (checkInderminate) {
          return [
            { ...selectOption, checkIndeterminateField: true },
            ...filterBy(result, [filter]),
          ];
        } else {
          return [{ ...selectOption }, ...filterBy(result, [filter])];
        }
      } else {
        return [
          { ...selectOption, checkField: true },
          ...filterBy(result, [filter]),
        ];
      }
    } else {
      return [];
    }
  } else {
    let checkAllCheckfield = result.some(
      (check) => check.checkField === undefined
    );
    let checkInderminate = result.some((check) => check.checkField === true);
    if (checkAllCheckfield) {
      if (checkInderminate) {
        return [{ ...selectOption, checkIndeterminateField: true }, ...result];
      } else {
        return [{ ...selectOption }, ...result];
      }
    } else {
      return [{ ...selectOption, checkField: true }, ...result];
    }
  }
};

const uniqueOrder = new Array(
  ...new Set(products.map((object) => object.OrderNumber))
);

const uniqueArray = new Array(
  ...new Set(
    products.map((object) => {
      return JSON.stringify({
        CustomerName: object.CustomerName,
        VendorName: object.VendorName,
        Addr1: object.Addr1,
        ShipToName: object.ShipToName,
        StateCode: object.StateCode,
        LocationType: object.LocationType,
        CityName: object.CityName,
      });
    })
  )
);

const finalArray = uniqueArray.map((object) => {
  const filteredArray = products.filter((obj) => {
    const infoData = JSON.stringify({
      CustomerName: obj.CustomerName,
      VendorName: obj.VendorName,
      Addr1: obj.Addr1,
      ShipToName: obj.ShipToName,
      StateCode: obj.StateCode,
      LocationType: obj.LocationType,
      CityName: obj.CityName,
    });

    return object === infoData;
  });

  const parsedData = JSON.parse(object);
  const uniqueOrder = new Array(
    ...new Set(filteredArray.map((object) => object.OrderNumber))
  );

  return { arrayData: parsedData, uniqueOrder: uniqueOrder };
});

const subTotal = {
  CustomerName: "",
  VendorName: "",
  ShipToName: "",
  Addr1: "",
  CityName: "",
  StateName: "",
  LocationType: "",
  OrderNumber: "SubTotal",
  ProductDesc: null,
  DeliveryDate: null,
  FileName: null,
  Gallons: null,
  ProductPrice: null,
  TaxPrice: null,
  Latitude: null,
  Longitude: null,
  Fees: null,
  AverageGross: null,
  ProductID: null,
  ProductUnitPrice: null,
  TaxUnitPrice: null,
  OtherFee: null,
  DeliveryFee: null,
  EnvironmentalFee: null,
  PageNumber: null,
  TerminalGroupID: null,
  SiteSetupTime: null,
  CustomerId: null,
};

const combineArray = [];
let count = 1;

const getOrderData = (number) => {
  const total = {
    ProductPrice: 0,
    TaxPrice: 0,
    Fees: 0,
    TaxUnitPrice: 0,
    OtherFee: 0,
    DeliveryFee: 0,
    EnvironmentalFee: 0,
  };

  products.map((object) => {
    if (number === object.OrderNumber) {
      const dd = new Date(object.DeliveryDate);
      const date = `${dd.getMonth()}/${dd.getDate()}/${dd.getFullYear()}`;
      combineArray.push({ ...object, DeliveryDate: date, order: count++ });
      total.ProductPrice = total.ProductPrice + object.ProductPrice;
      total.TaxPrice = total.TaxPrice + object.TaxPrice;
      total.Fees = total.Fees + object.Fees;
      total.TaxUnitPrice = total.TaxUnitPrice + object.TaxUnitPrice;
      total.OtherFee = total.OtherFee + object.OtherFee;
      total.DeliveryFee = total.DeliveryFee + object.DeliveryFee;
      total.EnvironmentalFee = total.EnvironmentalFee + object.EnvironmentalFee;
    }
    return 1;
  });
  return total;
};

finalArray.map((object) => {
  object.uniqueOrder.map((order) => {
    const value = getOrderData(order);
    combineArray.push({
      ...subTotal,
      CustomerName: object.arrayData.CustomerName,
      VendorName: object.arrayData.VendorName,
      ShipToName: object.arrayData.ShipToName,
      StateCode: object.arrayData.StateCode,
      CityName: object.arrayData.CityName,
      LocationType: object.arrayData.LocationType,
      Addr1: object.arrayData.Addr1,
      ProductPrice: value.ProductPrice,
      TaxPrice: value.TaxPrice,
      Fees: value.Fees,
      TaxUnitPrice: value.TaxUnitPrice,
      OtherFee: value.OtherFee,
      DeliveryFee: value.DeliveryFee,
      EnvironmentalFee: value.EnvironmentalFee,
    });
    return 1;
  });
  return 1;
});

let looped = 1;
let number = 1;
for (let i = 0; i < combineArray.length; i += looped) {
  let rowSpan = 1;
  looped = 1;
  for (let j = i + 1; j < combineArray.length; j++) {
    if (
      combineArray[i].CustomerName === combineArray[j].CustomerName &&
      combineArray[i].VendorName === combineArray[j].VendorName &&
      combineArray[i].ShipToName === combineArray[j].ShipToName &&
      combineArray[i].CityName === combineArray[j].CityName &&
      combineArray[i].StateCode === combineArray[j].StateCode &&
      combineArray[i].LocationType === combineArray[j].LocationType &&
      combineArray[i].Addr1 === combineArray[j].Addr1
    ) {
      looped++;
      rowSpan++;
    } else {
      break;
    }
  }

  combineArray[i].discontinuedCellRowSpan =
    rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
  combineArray[i].count = number++;
}

let id = 2;
const orderArray = uniqueOrder.map((object) => {
  return { order: object, id: id++ };
});

const dataItemKey = "id";
const checkField = "checkField";
const textField = "order";
const fields = {
  dataItemKey,
  checkField,
  textField,
};

function Cart() {
  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState(null);

  let ordersInValue = [];

  let allOptionData = [...orderArray];
  let prevFilteredValueRef = useRef(false);

  const tagStyle = {
    fontWeight: 600,
    fontSize: "15px",
    marginTop: "10px",
    marginLeft: "4px",
  };

  const Tag = (props) => {
    const { tagData } = props;
    return (
      <div>
        <span style={tagStyle}>{tagData.text}</span>
        <span></span>
      </div>
    );
  };

  const selectItemStyle = {
    fontSize: "18px",
    fontWeight: 600,
    paddingBottom: "3px",
  };

  const Item = (props) => {
    return (
      <span
        style={
          props.item.order === "Select All"
            ? selectItemStyle
            : { paddingLeft: "5px" }
        }
      >
        {props.item.order}
      </span>
    );
  };

  const orderFilter = (event) => {
    prevFilteredValueRef.current = true;
    setFilter(event.filter);
  };

  const onChange = (event) => {
    if (event.operation !== "clear") {
      let orderMapArray = allOptionData.map((obj) => {
        return obj.order;
      });
      let updatedValue = [...value];
      if (prevFilteredValueRef.current) {
        let allOrdersInValue = updatedValue.map((object) => {
          return object.order;
        });
        let removingSelectOrder = orderMapArray.filter(
          (v) => v !== "Select All"
        );
        let checkAllSelected = removingSelectOrder.every((order) => {
          return allOrdersInValue.includes(order);
        });
        if (!checkAllSelected) {
          updatedValue = updatedValue.filter(
            (object) => object.order !== "Select All"
          );
        } else {
          updatedValue = updatedValue.filter(
            (object) => object.order !== "Select All"
          );
          updatedValue = [{ order: "Select All", id: 1 }, ...updatedValue];
        }
      }
      prevFilteredValueRef.current = false;
      const currentSelectAll = updatedValue.some(
        (v) => v.order === "Select All"
      );
      let nextValue;
      const ordersInValue = updatedValue.map((object) => {
        return object.order;
      });
      const orderIncluded = ordersInValue.includes(event.items[0].order);
      if (orderIncluded) {
        nextValue = updatedValue.filter(
          (object) => object.order !== event.items[0].order
        );
      } else {
        nextValue = [...updatedValue, event.items[0]];
      }
      const nextSelectAll = nextValue.some((v) => v.order === "Select All");
      allOptionData = allOptionData.map((object) => {
        return { order: object.order, id: object.id };
      });
      const remainingLenght = nextValue.filter((object) => {
        return !orderMapArray.includes(object.order);
      }).length;
      const currentCount = updatedValue.length - remainingLenght;
      const nextCount = nextValue.length - remainingLenght;
      let newValue = [...nextValue];
      if (
        nextCount > currentCount &&
        !currentSelectAll &&
        !nextSelectAll &&
        allOptionData.length - 1 === nextCount
      ) {
        let localArray = nextValue.filter((v) => v.order !== "Select All");
        newValue = [{ order: "Select All", id: 1 }, ...localArray];
      } else if (
        nextCount < currentCount &&
        currentSelectAll &&
        nextSelectAll &&
        currentCount === allOptionData.length
      ) {
        newValue = newValue.filter((v) => v.order !== "Select All");
      } else if (!currentSelectAll && nextSelectAll) {
        let localArray = nextValue.filter((v) => v.order !== "Select All");
        let localArray2 = [...localArray, ...allOptionData];
        let localOrders = new Array(
          ...new Set(
            localArray2.map((object) => {
              return object.order;
            })
          )
        );
        let finalValue = orderArray.filter((object) => {
          return localOrders.includes(object.order);
        });
        newValue = [{ order: "Select All", id: 1 }, ...finalValue];
      } else if (currentSelectAll && !nextSelectAll) {
        let localArray = updatedValue.filter((object) => {
          return !orderMapArray.includes(object.order);
        });
        newValue = localArray;
      }
      setValue(newValue);
    } else {
      setValue([]);
    }
  };

  const treeData = useMemo(
    () =>
      processMultiSelectTreeData(allOptionData, {
        value: value.filter((object) => object.order !== "Select All"),
        filter,
        ...fields,
      }),
    [value, filter]
  );

  allOptionData = [...treeData];

  const multiSelectStyle = {
    width: "300px",
    fontSize: "1.2rem",
    height: "40px",
  };

  value.map((object) => {
    return object.order !== "Select All"
      ? ordersInValue.push(object.order)
      : null;
  });

  const [label, setLabel] = useState(true);

  return (
    <div className="accordianDiv linksContent">
      <MultiSelectTree
        data={treeData}
        value={value}
        // opened
        filterable={true}
        onChange={onChange}
        onFilterChange={orderFilter}
        checkField={checkField}
        dataItemKey={dataItemKey}
        textField={textField}
        style={multiSelectStyle}
        tag={Tag}
        item={Item}
        tags={
          value.length >= 3
            ? [
                {
                  text: `${ordersInValue.slice(0, 2)} and ${
                    ordersInValue.length - 2
                  } more...`,
                },
              ]
            : [{ text: `${ordersInValue}` }]
        }
      />
      <div style={{ height: "20px" }}></div>
      <br />
      <div style={{ margin: "100px" }}>
        <DropDownComponent />
      </div>
    </div>
  );
}

export default Cart;
