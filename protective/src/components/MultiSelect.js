import { filterBy } from "@progress/kendo-react-data-tools";
import { getter, setter } from "@progress/kendo-react-common";

export const getValueMap = (value, idGetter) => {
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
      checkIndeterminateSetter,
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
      // checkIndeterminateSetter(newItem, !isChecked);
      return newItem;
    });
    return [newData, hasChecked];
};

export const processMultiSelectTreeData = (tree, options) => {
    const {
      checkField = "checkField",
      checkIndeterminateField = 'checkIndeterminateField',
      dataItemKey,
      value,
      filter,
    } = options;
    // console.log("value", value)
    const keyGetter = getter(dataItemKey);
    const filtering = Boolean(filter && filter.value);
    const [result] = mapMultiSelectTreeData(tree, {
      valueMap: getValueMap(value, keyGetter),
      keyGetter,
      checkSetter: setter(checkField),
      checkIndeterminateSetter: setter(checkIndeterminateField)
    });
    const selectOption = {order: "Select All", id: 1, checkField: undefined}
    if(filtering){  
      let allFiltered = filterBy(result, [filter]);      
      // console.log("allFiltered",allFiltered)
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
      // console.log("result", result)      
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
    }
};
