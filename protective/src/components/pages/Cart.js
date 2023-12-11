import React, {useState, useMemo, cloneElement, useRef } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../Data.json';
// import { MultiSelectTree } from "@progress/kendo-react-dropdowns";
// import { processMultiSelectTreeData } from '../MultiSelect';
import MultiSelectComponent from '../MultiSelectComponent';


// const uniqueOrder = new Array(...new Set(products.map((object) => object.OrderNumber)))

const uniqueArray = new Array(...new Set(products.map((object) => {
  return JSON.stringify({
    CustomerName: object.CustomerName,
    VendorName: object.VendorName,
    Addr1: object.Addr1,
    ShipToName: object.ShipToName,
    StateCode: object.StateCode,
    LocationType: object.LocationType,
    CityName: object.CityName,
  })
})))

const finalArray = uniqueArray.map((object) => {
  const filteredArray = products.filter((obj) => {
    const infoData = JSON.stringify({
      CustomerName: obj.CustomerName,
      VendorName: obj.VendorName,
      Addr1: obj.Addr1,
      ShipToName: obj.ShipToName,
      StateCode: obj.StateCode,
      LocationType: obj.LocationType,
      CityName: obj.CityName
    })

    return object === infoData;
  })

  const parsedData = JSON.parse(object);
  const uniqueOrder = new Array(...new Set(filteredArray.map((object) => object.OrderNumber)))

  return { arrayData: parsedData, uniqueOrder: uniqueOrder }
})

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
  CustomerId: null
}

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
    EnvironmentalFee: 0
  }

  products.map((object) => {
    if (number === object.OrderNumber) {
      const dd = new Date(object.DeliveryDate);
      const date = `${dd.getMonth()}/${dd.getDate()}/${dd.getFullYear()}`;
      combineArray.push({ ...object, DeliveryDate: date, order: count++, });
      total.ProductPrice = total.ProductPrice + object.ProductPrice;
      total.TaxPrice = total.TaxPrice + object.TaxPrice;
      total.Fees = total.Fees + object.Fees;
      total.TaxUnitPrice = total.TaxUnitPrice + object.TaxUnitPrice;
      total.OtherFee = total.OtherFee + object.OtherFee;
      total.DeliveryFee = total.DeliveryFee + object.DeliveryFee;
      total.EnvironmentalFee = total.EnvironmentalFee + object.EnvironmentalFee;
    }
    return 1;
  })
  return total;
}

finalArray.map((object) => {
  object.uniqueOrder.map((order) => {
    const value = getOrderData(order);
    combineArray.push({ ...subTotal, CustomerName: object.arrayData.CustomerName, VendorName: object.arrayData.VendorName, ShipToName: object.arrayData.ShipToName, StateCode: object.arrayData.StateCode, CityName: object.arrayData.CityName, LocationType: object.arrayData.LocationType, Addr1: object.arrayData.Addr1, ProductPrice: value.ProductPrice, TaxPrice: value.TaxPrice, Fees: value.Fees, TaxUnitPrice: value.TaxUnitPrice, OtherFee: value.OtherFee, DeliveryFee: value.DeliveryFee, EnvironmentalFee: value.EnvironmentalFee })
    return 1;
  })
  return 1;
})

let looped = 1
let number = 1;
for (let i = 0; i < combineArray.length; i += looped) {
  let rowSpan = 1;
  looped = 1;
  for (let j = i + 1; j < combineArray.length; j++) {
    if (combineArray[i].CustomerName === combineArray[j].CustomerName && combineArray[i].VendorName === combineArray[j].VendorName && combineArray[i].ShipToName === combineArray[j].ShipToName && combineArray[i].CityName === combineArray[j].CityName && combineArray[i].StateCode === combineArray[j].StateCode && combineArray[i].LocationType === combineArray[j].LocationType && combineArray[i].Addr1 === combineArray[j].Addr1) {
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

// let id=2;
// const orderArray = uniqueOrder.map((object) => {
//   return {order: object, id: id++};
// });

// const dataItemKey = "id";
// const checkField = "checkField";
// const textField = "order";
// const checkIndeterminateField = 'checkIndeterminateField';
// const fields = {
//   dataItemKey,
//   checkField,
//   textField,
//   checkIndeterminateField
// }

function Cart() {

  const [accord, setAccord] = useState(false);
  const [value, setValue] = useState([]);
  const [gridData, setGridData] = useState(combineArray);
  const [topAccord, setTopAccord] = useState(true);
  // const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  // const loadingTimeOutRef = useRef(false)
  
  let ordersInValue = [];
  // let prevFilteredValueRef = useRef(0);

  // let allOptionData = [...orderArray]

// const tagStyle = {
//   fontWeight: 600, 
//   fontSize: "15px", 
//   marginTop: "10px", 
//   marginLeft:"4px",
// }
  
// const Tag = props => {
//   const {
//     tagData,
//   } = props;
//   return  <span style={tagStyle}>{tagData.text}</span>     
// };

// const selectItemStyle = {
//   fontSize: "18px",
//   fontWeight: 600,
//   paddingBottom: "3px",
// }

// const Item = (props) => {
//   return (
//       <span style={props.item.order === "Select All" ? selectItemStyle : {paddingLeft: "5px"}}>
//       {props.item.order}
//       </span>
//   );
// };

  // const orderFilter = (event) => {
  //   prevFilteredValueRef.current = true;
  //   clearTimeout(loadingTimeOutRef.current);
  //   loadingTimeOutRef.current = setTimeout(() => {
  //     setFilter(event.filter);
  //     setLoading(false);
  //   }, 500);
  //   setLoading(true);
  // };

  // const onChange = (event) => {
  //   if(event.operation !== 'clear'){
  //     let orderMapArray = allOptionData.map((obj) => {
  //       return obj.order;
  //     })
  //     let updatedValue = [...value];
  //     if(prevFilteredValueRef.current){
  //       let allOrdersInValue = updatedValue.map((object) => {
  //         return object.order;
  //       })
  //       let removingSelectOrder = orderMapArray.filter((v) => v !== "Select All")
  //       let checkAllSelected = removingSelectOrder.every((order) => {
  //         return allOrdersInValue.includes(order);
  //       })
  //       if(!checkAllSelected){
  //         updatedValue = updatedValue.filter((object) => object.order !== "Select All");
  //       }else{
  //         updatedValue = updatedValue.filter((object) => object.order !== "Select All");
  //         updatedValue = [{order: "Select All", id: 1},...updatedValue];
  //       }
  //     }
  //     prevFilteredValueRef.current = false;
  //     const currentSelectAll = updatedValue.some((v) => v.order === "Select All");
  //     let nextValue;
  //     const ordersInValue = updatedValue.map((object) => {
  //       return object.order;
  //     })
  //     const orderIncluded = ordersInValue.includes(event.items[0].order);
  //     if(orderIncluded){
  //       nextValue = updatedValue.filter((object) => object.order !== event.items[0].order)
  //     }else{
  //       nextValue = [...updatedValue, event.items[0]]
  //     }
  //     const nextSelectAll = nextValue.some((v) => v.order === "Select All");
  //     allOptionData = allOptionData.map((object) => {
  //       return {order: object.order, id: object.id}
  //     })
  //     const remainingLenght = nextValue.filter((object) => {
  //       return !orderMapArray.includes(object.order);
  //     }).length;
  //     const currentCount = updatedValue.length - remainingLenght;
  //     const nextCount = nextValue.length - remainingLenght;
  //     let newValue = [...nextValue];
  //     if(nextCount > currentCount && !currentSelectAll && !nextSelectAll && allOptionData.length - 1 === nextCount){
  //       let localArray = nextValue.filter((v) => v.order !== "Select All");
  //       newValue = [{order: "Select All", id: 1}, ...localArray];
  //     }else if(nextCount < currentCount && currentSelectAll && nextSelectAll && currentCount === allOptionData.length){
  //       newValue = newValue.filter((v) => v.order !== "Select All");
  //     }else if(!currentSelectAll && nextSelectAll){
  //       let localArray = nextValue.filter((v) => v.order !== "Select All");
  //       let localArray2 = [...localArray,...allOptionData];
  //       let localOrders = new Array(...new Set(localArray2.map((object) => {
  //         return object.order;
  //       })));
  //       let finalValue = orderArray.filter((object) => {
  //         return localOrders.includes(object.order);
  //       })
  //       newValue = [{order: "Select All", id: 1}, ...finalValue];
  //     }else if(currentSelectAll && !nextSelectAll){
  //       let localArray = updatedValue.filter((object) => {
  //         return !orderMapArray.includes(object.order);
  //       })
  //       newValue = localArray;
  //     }
  //     setValue(newValue);
  //   }else{
  //     setValue([]);
  //   }
  // }

  // const treeData = useMemo(
  //   () =>
  //     processMultiSelectTreeData(allOptionData, {
  //       value,
  //       filter,
  //       ...fields,
  //     }),
  //   [value, filter]
  // );

  // allOptionData = [...treeData];

  const accordianChange = () => {
    setAccord(!accord);
  }

  const topAccordianChange = () => {
    setTopAccord(!topAccord);
  }

  const cellWithOrderNumber = (props) => {
    const style = {
      textAlign: "center",
      fontWeight: 600
    };
    const field = props.field || "";
    return (
      <td style={style} title={props.dataItem.order}>
        {props.dataItem[field]}
      </td>
    );
  };

  const headerStyle = (props) => {
    return (
      <span style={{ fontWeight: 700 }}>{props.title}</span>
    )
  }

  const rowRender = (trElement, props) => {
    const available = props.dataItem.OrderNumber === "SubTotal";
    const red = {
      color: "orange",
      fontWeight: 600
    };
    const trProps = {
      style: available ? red : null,
    };
    return cloneElement(
      trElement,
      {
        ...trProps,
      },
      trElement.props.children
    );
  };
  
  const cellRender = (cell, props) => {
    const { dataItem, field } = props;
  
    if (field === 'CustomerName' || field === 'VendorName' || field === 'ShipToName' || field === 'Addr1' ||
      field === 'CityName' || field === 'StateCode' || field === 'LocationType' || field === "count") {
      if (dataItem.discontinuedCellRowSpan) {
        return (
          <td
            {...cell.props}
            rowSpan={dataItem.discontinuedCellRowSpan}
            // className={dataItem.className || dataItem.discontinuedClassName}
            title={cell.props.children}
          >
            {cell.props.children}
          </td>
        );
  
      } else {
        return null;
      }
    }
  
    return (
      <td
        {...cell.props}
        className={dataItem.className}
        colSpan={props.colSpan}
        title={cell.props.children}
      >
        {field === "FileName" && dataItem.OrderNumber!=="SubTotal" ? <span className="k-icon k-i-file-pdf k-icon-xl" style={{color: "red"}}></span> : cell.props.children}
  
      </td>
    );
  };

  const multiSelectStyle = {
    width: "300px",
    fontSize: "1.2rem",
    height: "40px",
  };

  const multiSelectDivStyle = {
    margin: "15px", 
    color: "black", 
    fontWeight: 700, 
    display: "inline-block",
  }

  let tabelData = useMemo(() => {
    return <Grid
      style={{ height: "100%", width: "100%" }}
      data={gridData}
      cellRender={cellRender}
      rowRender={rowRender}
    >
      <Column field="count" title="#" width="80px" headerCell={headerStyle}/>
      <Column field='CustomerName' locked title='Customer Name' width="150px" headerCell={headerStyle} />
      <Column field='VendorName' locked title='Vendor Name' width="150px" headerCell={headerStyle} />
      <Column field="ShipToName" title="Ship To Name" width="150px" headerCell={headerStyle} />
      <Column field="Addr1" locked title="Address" width="150px" headerCell={headerStyle} />
      <Column field="CityName" title="City Name" width="140px" headerCell={headerStyle} />
      <Column field="StateCode" title="State Code" width="100px" headerCell={headerStyle} />
      <Column field="LocationType" locked title="Location Type" width="130px" headerCell={headerStyle} />
      <Column field='order' title='Order Number' width="150px" headerCell={headerStyle} cell={cellWithOrderNumber} />
      <Column field='OrderNumber' title="Order Id" width="120px" headerCell={headerStyle} />
      <Column field="ProdDesc" title="Product Description" width="180px" headerCell={headerStyle} />
      <Column field="DeliveryDate" title="Delivery Date" width="120px" headerCell={headerStyle} />
      <Column field="FileName" title="File" width="80px" headerCell={headerStyle} />
      <Column field="Gallons" title="Gallons" width="100px" headerCell={headerStyle} />
      <Column field="ProductPrice" title="Product Price" width="140px" headerCell={headerStyle} />
      <Column field="TaxPrice" title="Tax Price" width="120px" headerCell={headerStyle} />
      <Column field="Latitude" title="Latitude" width="120px" headerCell={headerStyle} />
      <Column field="Longitude" title="Longitude" width="120px" headerCell={headerStyle} />
      <Column field="Fees" title="Fees" width="100px" headerCell={headerStyle} />
      <Column field="AverageGross" title="Average Gross" width="120px" headerCell={headerStyle} />
      <Column field="ProductID" title="Product ID" width="120px" headerCell={headerStyle} />
      <Column field="ProductUnitPrice" title="Product Unit Price" width="150px" headerCell={headerStyle} />
      <Column field="TaxUnitPrice" title="Tax Unit Price" width="120px" headerCell={headerStyle} />
      <Column field="OtherFee" title="Other Fee" width="120px" headerCell={headerStyle} />
      <Column field="DeliveryFee" title="Delivery Fee" width="120px" headerCell={headerStyle} />
      <Column field="EnvironmentalFee" title="Environmental Fee" width="150px" headerCell={headerStyle} />
      <Column field="PageNumber" title="Page Number" width="120px" headerCell={headerStyle} />
      <Column field="TerminalGroupID" title="Terminal GroupID" width="150px" headerCell={headerStyle} />
      <Column field="LoadingTime" title="Loading Time" width="120px" headerCell={headerStyle} />
      <Column field="SiteSetupTime" title="SiteSetupTime" width="120px" headerCell={headerStyle} />
      <Column field="CustomerID" title="Customer ID" width="120px" headerCell={headerStyle} />
    </Grid>
  }, [gridData]);

  value.map((object) => {
    return object.order !== "Select All" ? ordersInValue.push(object.order) : null;
  })

  return (
    <div className='accordianDiv linksContent'>
      <div className={accord ? 'verticalAccordian' : 'verticalAccordianCollapse'}>
        <div className='vericalAccordianHeader'>
          <button onClick={() => { accordianChange() }} style={{margin: "2px 2px"}}>{accord ? <span className="k-icon k-i-arrow-chevron-left  k-icon-xl"></span> : <span className="k-icon k-i-arrow-chevron-right  k-icon-xl"></span>}</button>
        </div>
      </div>
      <div style={accord ? topAccord ? { width: "85vw", height: "66vh" } : { width: "85vw", height: "78vh" } : topAccord ? { width: "90vw", height: "66vh" } : { width: "90vw", height: "78vh" }}>
        <div style={{ marginBottom: "10px" }}>
          <div className={topAccord ? 'topAccordian' : 'topAccordianCollapse'}>
            <div className='topAccordianButton'>
              <button onClick={() => { topAccordianChange() }}>{topAccord ? <span className="k-icon k-i-arrow-chevron-up k-icon-xl"></span> : <span className="k-icon k-i-arrow-chevron-down  k-icon-xl"></span>}</button>
            </div>
            <div style={topAccord ? {display: "block"} : {display: "none"} }  className='selectDiv'>
              <div style={multiSelectDivStyle}>              
                <div>Select Order:</div>
                  <MultiSelectComponent Products = {products}/>
                {/* <MultiSelectTree
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
                  loading={loading}                  
                  item={Item}
                  checkIndeterminateField={checkIndeterminateField}
                  tag={Tag}
                  tags={value.length >= 3 ?
                    [ {
                        text: `${ordersInValue.slice(0,2)} and ${ordersInValue.length - 2} more...`
                      }
                    ]
                    : [ {
                         text: `${ordersInValue}`
                        }
                      ]
                  } */}
              </div>
            </div>
          </div>
        </div>
        {tabelData}
      </div>
    </div>
  )
}

export default Cart