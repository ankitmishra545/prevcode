import React, { createElement, useEffect, useRef, useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import products from "../Data.json";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import { Checkbox } from "@progress/kendo-react-inputs";

const allOrders = [
  ...new Set(
    products.map((object) => {
      return object.OrderNumber;
    })
  ),
];

function DropDownComponent() {
  const [value, setValue] = useState([]);
  const [data, setData] = useState(allOrders.slice());
  const [allSelected, setAllSelected] = useState(false);
  const selectAllCheckboxRef = useRef();
  const [dropDownOpen, setDropDownOpen] = useState(true);

  const filterData = (filter) => {
    const data = allOrders.slice();
    return filterBy(data, filter);
  };

  const filterChange = (event) => {
    let filteredData = filterData(event.filter);
    setData(filteredData);
    const isFilteredDataSelected = filteredData.every((order) => {
      return value.includes(order);
    });
    if (isFilteredDataSelected) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  };

  const itemRender = (li, itemProps) => {
    const itemChildren = (
      <span>
        {/* <Checkbox value={allSelected ? true : itemProps.selected} label={li.props.children}/> */}
        <input
          type="checkbox"
          checked={allSelected ? true : itemProps.selected}
        />
        {li.props.children}
      </span>
    );
    return React.cloneElement(li, li.props, itemChildren);
  };

  const valueRender = (element, value) => {
    if (!value) {
      return element;
    }
    const children = [<span key={2}>&nbsp; {element.props.children}</span>];
    return React.cloneElement(
      element,
      {
        ...element.props,
      },
      value.length <= 2
        ? children[0].props.children[1].props.children.slice(0, 2).join(", ")
        : `${children[0].props.children[1].props.children
            .slice(0, 2)
            .join(", ")} and ${value.length - 2} more...`,
      // createElement("button",{class: "clearButton"},
      <span
        class="k-icon k-i-close"
        style={value.length ? { display: "block" } : { display: "none" }}
        onClick={() => {
          clearAllSelection();
        }}
      ></span>
      // )
    );
  };

  const clearAllSelection = () => {
    setAllSelected(false);
    setValue([]);
  };

  const handleChange = (event) => {
    const newSelectedOrder = event.target.value;
    const isNewValuePresent = value.includes(newSelectedOrder);
    let nextValue;
    if (isNewValuePresent) {
      nextValue = value.filter((v) => v !== newSelectedOrder);
    } else {
      nextValue = [...value, newSelectedOrder];
    }
    const isAllSelected = data.every((order) => {
      return nextValue.includes(order);
    });
    if (isAllSelected) {
      setAllSelected(true);
      let allOrders = [...new Set([...value, ...data])];
      setValue(allOrders);
    } else {
      setAllSelected(false);
      setValue(nextValue);
    }
  };

  const selectingAllOrders = () => {
    if (allSelected) {
      let remainingOrders = value.filter((order) => {
        return !data.includes(order);
      });
      setValue(remainingOrders);
    } else {
      let allOrders = [...new Set([...value, ...data])];
      setValue(allOrders);
    }
    setAllSelected(!allSelected);
  };

  const onBlur = (event) => {
    if (event.syntheticEvent.relatedTarget === null) {
      setDropDownOpen(false);
    }
  };

  const onFocus = () => {
    setDropDownOpen(true);
  };

  if (
    data.some((v) => value.includes(v)) &&
    !data.every((v) => value.includes(v))
  ) {
    selectAllCheckboxRef.current = null;
  } else {
    selectAllCheckboxRef.current = allSelected;
  }

  return (
    <DropDownList
      style={{
        width: "320px",
        height: "40px",
        border: "none",
        backgroundColor: "white",
      }}
      data={data}
      value={value}
      onChange={handleChange}
      itemRender={itemRender}
      valueRender={valueRender}
      filterable={true}
      onFilterChange={filterChange}
      header={
        data.length ? (
          <span style={{ marginLeft: "10px", height: "30px" }}>
            <Checkbox
              value={selectAllCheckboxRef.current === null ? null : allSelected}
              label={"Select All"}
              onChange={selectingAllOrders}
            />
          </span>
        ) : null
      }
      opened={dropDownOpen}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

export default DropDownComponent;
