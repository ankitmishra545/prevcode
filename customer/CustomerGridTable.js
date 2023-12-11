import React, { useEffect, useState } from "react";
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuItemGroup,
  GridColumnMenuItem,
  GridColumnMenuItemContent,
} from "@progress/kendo-react-grid";

const customFilterUI = (props) => {
  const onChange = (event) => {
    const value =
      event.target.value === "null" ? null : event.target.value === "true";

    const { firstFilterProps } = props;
    firstFilterProps.onChange({
      value,
      operator: "eq",
      syntheticEvent: event.syntheticEvent,
    });
  };
  const { firstFilterProps } = props;
  const value = firstFilterProps.value;
  return (
    <div>
      <label>&nbsp;Show items with value that: </label>
      <br />
      <input
        id="bool-true"
        name="boolean"
        type="radio"
        value="true"
        checked={value === true}
        onChange={onChange}
      />
      <label htmlFor="bool-true">
        &nbsp;<strong>Checked</strong>
      </label>
      <br />
      <input
        id="bool-false"
        name="boolean"
        type="radio"
        value="false"
        checked={value === false}
        onChange={onChange}
      />
      <label htmlFor="bool-false">
        &nbsp;<strong>Unchecked</strong>
      </label>
    </div>
  );
};

const CustomColumnMenu = (props) => {
  const [columns, setColumns] = React.useState(props.columns);
  const [columnsExpanded, setColumnsExpanded] = useState(false);
  const [filterExpanded, setFilterExpanded] = useState(false);

  const onToggleColumn = (id) => {
    const newColumns = columns.map((column, idx) => {
      return idx === id
        ? {
            ...column,
            show: !column.show,
          }
        : column;
    });
    setColumns(newColumns);
    props.onColumnsSubmit(newColumns);
  };

  const onMenuItemClick = () => {
    const value = !columnsExpanded;
    setColumnsExpanded(value);
    setFilterExpanded(value ? false : filterExpanded);
  };

  const onFilterExpandChange = (value) => {
    setFilterExpanded(value);
    setColumnsExpanded(value ? false : columnsExpanded);
  };

  const oneVisibleColumn = columns.filter((c) => c.show).length === 1;

  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuItemGroup>
        <GridColumnMenuItem
          title={"Columns"}
          iconClass={"k-i-columns"}
          onClick={onMenuItemClick}
          svgIcon={<span className="k-icon k-i-plus" />}
        />
        <GridColumnMenuItemContent show={columnsExpanded}>
          <div className={"k-column-list-wrapper"}>
            <div className={"k-column-list"}>
              {columns.map((column, idx) => (
                <div key={idx} className={"k-column-list-item"}>
                  <span>
                    <input
                      id={`column-visiblity-show-${idx}`}
                      className="k-checkbox k-checkbox-md k-rounded-md"
                      type="checkbox"
                      readOnly={true}
                      disabled={column.show && oneVisibleColumn}
                      checked={column.show}
                      onClick={() => {
                        onToggleColumn(idx);
                      }}
                    />
                    <label
                      htmlFor={`column-visiblity-show-${idx}`}
                      className="k-checkbox-label"
                      style={{
                        userSelect: "none",
                      }}
                    >
                      {column.title}
                    </label>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GridColumnMenuItemContent>
      </GridColumnMenuItemGroup>
      <GridColumnMenuFilter
        {...props}
        onExpandChange={onFilterExpandChange}
        expanded={filterExpanded}
        filterUI={props.column.filter === "boolean" ? customFilterUI : null}
        hideSecondFilter={true}
      />
    </div>
  );
};

const CustomerGridTable = (props) => {
  const { data, columns, cellRender } = props;

  const [gridData, setGridData] = useState(data);

  const createDataState = (dataState) => {
    return {
      result: process(gridData.slice(0), dataState),
      dataState: dataState,
    };
  };

  let initialState = createDataState({
    take: 10,
    skip: 0,
  });

  const [result, setResult] = useState(initialState.result);
  const [dataState, setDataState] = useState(initialState.dataState);
  const [stateColumns, setStateColumns] = useState(columns);
  const [pageSizeValue, setPageSizeValue] = useState(
    initialState.dataState.take
  );

  useEffect(() => {
    // setStateColumns(columns);
    setGridData(data);
  }, [columns]);

  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
    setPageSizeValue(updatedState.dataState.take);
  };

  const onColumnsSubmit = (columnsState) => {
    setStateColumns(columnsState);
  };

  return (
    <Grid
      data={result}
      {...dataState}
      onDataStateChange={dataStateChange}
      sortable={true}
      total={data.length}
      pageable={{
        buttonCount: 5,
        pageSizes: [10, 25, 50, 100, 150, 200],
        pageSizeValue: pageSizeValue,
      }}
      resizable={true}
      cellRender={cellRender}
      reorderable={true}
    >
      {stateColumns.map(
        (column, idx) =>
          column.show && (
            <Column
              key={idx}
              field={column.field}
              title={column.title}
              filter={column.filter}
              columnMenu={
                column.isColumnMenu !== false
                  ? (props) => {
                      return (
                        <CustomColumnMenu
                          {...props}
                          columns={stateColumns}
                          onColumnsSubmit={onColumnsSubmit}
                          filterOperators={{
                            text: [
                              {
                                text: "grid.filterContainsOperator",
                                operator: "contains",
                              },
                            ],
                            boolean: [
                              { text: "grid.filterEqOperator", operator: "eq" },
                            ],
                            numeric: [
                              { text: "grid.filterEqOperator", operator: "eq" },
                              {
                                text: "grid.filterNotEqOperator",
                                operator: "neq",
                              },
                              {
                                text: "grid.filterGteOperator",
                                operator: "gte",
                              },
                              { text: "grid.filterGtOperator", operator: "gt" },
                              {
                                text: "grid.filterLteOperator",
                                operator: "lte",
                              },
                              { text: "grid.filterLtOperator", operator: "lt" },
                              {
                                text: "grid.filterIsNullOperator",
                                operator: "isnull",
                              },
                              {
                                text: "grid.filterIsNotNullOperator",
                                operator: "isnotnull",
                              },
                            ],
                          }}
                        />
                      );
                    }
                  : null
              }
            />
          )
      )}
    </Grid>
  );
};

export default CustomerGridTable;
