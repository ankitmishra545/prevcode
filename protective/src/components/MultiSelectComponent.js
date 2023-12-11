import React, {useState, useMemo, useRef } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { MultiSelectTree } from "@progress/kendo-react-dropdowns";

import { filterBy } from "@progress/kendo-react-data-tools";
import { getter, setter } from "@progress/kendo-react-common";

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
    const {
      keyGetter,
      checkSetter,      
      valueMap,
    } = options;
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
    const {
      checkField = "checkField",
      dataItemKey,
      value,
      filter,
    } = options;
    const keyGetter = getter(dataItemKey);
    const filtering = Boolean(filter && filter.value);
    const [result] = mapMultiSelectTreeData(tree, {
      valueMap: getValueMap(value, keyGetter),
      keyGetter,
      checkSetter: setter(checkField),
    });
    const selectOption = {order: "Select All", id: 1, checkField: undefined}
    if(filtering){  
      let allFiltered = filterBy(result, [filter]);
      if(allFiltered.length){
        let checkAllCheckfield = allFiltered.some((check) => check.checkField === undefined);
        let checkInderminate = allFiltered.some((check) => check.checkField === true);
        if(checkAllCheckfield){
          if(checkInderminate){
            return [{...selectOption, checkIndeterminateField: true},...filterBy(result, [filter])];
          }else{
            return [{...selectOption},...filterBy(result, [filter])];
          }
        }else{
          return [{...selectOption, checkField: true},...filterBy(result, [filter])];
        }
      }else{
        return [];
      }
    }else{
      if(tree.length){            
        let checkAllCheckfield = result.some((check) => check.checkField === undefined);
        let checkInderminate = result.some((check) => check.checkField === true);
        if(checkAllCheckfield){
          if(checkInderminate){
            return [{...selectOption, checkIndeterminateField: true},...result];
          }else{
            return [{...selectOption},...result];
          }
        }else{
          return [{...selectOption, checkField: true},...result];
        }
      }else{
        return [];
      }
    }
};

const dataItemKey = "id";
const checkField = "checkField";
const textField = "order";
const fields = {
  dataItemKey,
  checkField,
  textField
}

function MultiSelectComponent(props) {
    const uniqueOrder = props.Keys === "" ? [] : new Array(...new Set(props.Products.map((object) => object[props.Keys])))

    let id=2;
    const orderArray = uniqueOrder.map((object) => {
      return {order: object, id: id++};
    });

  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState(null);
  
  
  let ordersInValue = [];

  let allOptionData = [...orderArray];
  let prevFilteredValueRef = useRef(false);
  const lengthOfValueRef = useRef(0);
  const lengthCountRef = useRef(0);
  
  const lastKeyValueRef = useRef();
  if(lastKeyValueRef.current !== props.Keys){
      allOptionData = [];
      if(props.SelectedItem){
        let childTextArray = JSON.parse(props.SelectedItem);
        let selectedObject = [...new Set(childTextArray.map((object) => {
          return object[props.Keys]
        }))];
        let selectedValue = orderArray.filter((element) => {
          return selectedObject.includes(element.order);
        })
        setValue(selectedValue);
      }else{
        setValue([]);
      }
  }
  lastKeyValueRef.current = props.Keys;

const tagStyle = {
  fontWeight: 600, 
  fontSize: "15px", 
  marginTop: "10px", 
  marginLeft:"4px",
}
  
const Tag = props => {
  const {
    tagData,
  } = props;
    return  <span style={tagStyle}>{tagData.text}</span>
};

const selectItemStyle = {
  fontSize: "18px",
  fontWeight: 600,
  paddingBottom: "3px",
}

const Item = (props) => {
  return (
      <span style={props.item.order === "Select All" ? selectItemStyle : {paddingLeft: "5px"}}>
      {props.item.order}
      </span>
  );
};

const orderFilter = (event) => {
  prevFilteredValueRef.current = true;
    setFilter(event.filter);
};

const onChange = (event) => {
  if(event.operation !== 'clear'){
    let orderMapArray = allOptionData.map((obj) => {
      return obj.order;
    })
    let updatedValue = [...value];
    if(prevFilteredValueRef.current){
      let allOrdersInValue = updatedValue.map((object) => {
        return object.order;
      })
      let removingSelectOrder = orderMapArray.filter((v) => v !== "Select All")
      let checkAllSelected = removingSelectOrder.every((order) => {
        return allOrdersInValue.includes(order);
      })
      if(!checkAllSelected){
        updatedValue = updatedValue.filter((object) => object.order !== "Select All");
      }else{
        updatedValue = updatedValue.filter((object) => object.order !== "Select All");
        updatedValue = [{order: "Select All", id: 1},...updatedValue];
      }
    }
    prevFilteredValueRef.current = false;
    const currentSelectAll = updatedValue.some((v) => v.order === "Select All");
    let nextValue;
    const ordersInValue = updatedValue.map((object) => {
      return object.order;
    })
    const orderIncluded = ordersInValue.includes(event.items[0].order);
    if(orderIncluded){
      nextValue = updatedValue.filter((object) => object.order !== event.items[0].order)
    }else{
      nextValue = [...updatedValue, event.items[0]]
    }
    const nextSelectAll = nextValue.some((v) => v.order === "Select All");
    allOptionData = allOptionData.map((object) => {
      return {order: object.order, id: object.id}
    })
    const remainingLenght = nextValue.filter((object) => {
      return !orderMapArray.includes(object.order);
    }).length;
    const currentCount = updatedValue.length - remainingLenght;
    const nextCount = nextValue.length - remainingLenght;
    let newValue = [...nextValue];
    if(nextCount > currentCount && !currentSelectAll && !nextSelectAll && allOptionData.length - 1 === nextCount){
      let localArray = nextValue.filter((v) => v.order !== "Select All");
      newValue = [{order: "Select All", id: 1}, ...localArray];
    }else if(nextCount < currentCount && currentSelectAll && nextSelectAll && currentCount === allOptionData.length){
      newValue = newValue.filter((v) => v.order !== "Select All");
    }else if(!currentSelectAll && nextSelectAll){
      let localArray = nextValue.filter((v) => v.order !== "Select All");
      let localArray2 = [...localArray,...allOptionData];
      let localOrders = new Array(...new Set(localArray2.map((object) => {
        return object.order;
      })));
      let finalValue = orderArray.filter((object) => {
        return localOrders.includes(object.order);
      })
      newValue = [{order: "Select All", id: 1}, ...finalValue];
    }else if(currentSelectAll && !nextSelectAll){
      let localArray = updatedValue.filter((object) => {
        return !orderMapArray.includes(object.order);
      })
      newValue = localArray;
    }
    setValue(newValue);
  }else{
    setValue([]);
  }
  
}

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
    return object.order !== "Select All" ? ordersInValue.push(object.order) : null;
  })

  if(value.length){
    lengthCountRef.current = 0;
    for(let i=0; i<value.length /*&& value[i].order !== null*/; i++){
      lengthOfValueRef.current = lengthOfValueRef.current + value[i].order.toString().length;
      if(lengthOfValueRef.current < 21){
        lengthCountRef.current = lengthCountRef.current + 1;
      }
    }
    lengthOfValueRef.current = 0;
  }

  return (
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
        // label={'Select Order'}
        tag={Tag}
        item={Item}
        tags={value.length >= lengthCountRef.current + 1 ?
          [ { text: lengthCountRef.current !== 0 ? `${ordersInValue.slice(0,lengthCountRef.current)} and ${ordersInValue.length - lengthCountRef.current} more...` : `${ordersInValue[0].slice(0,20)}... and ${ordersInValue.length - 1} more...`}]
          : [ { text: `${ordersInValue}`}]
        }
      />
  )
}

export default MultiSelectComponent