import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { setExpandedState, setGroupIds } from '@progress/kendo-react-data-tools';
import products from '../Product.json';

const initialDataState = {
  group: [
    {field: 'CustomerName'},
    {field: 'VendorName'},
    {field: 'ShipToName'},
    {field: 'Addr1'},
    {field: 'CityName'},
    {field: 'StateCode'},
    {field: 'LocationType'},
    {field: 'OrderNumber'}
  ]
};

const aggregates = [{
  field: 'ProductPrice',
  aggregate: 'sum'
}, {
  field: 'TaxPrice',
  aggregate: 'sum'
}, {
  field: 'Fees',
  aggregate: 'sum'
}, {
  field: 'ProductUnitPrice',
  aggregate: 'sum'
}, {
  field: 'TaxUnitPrice',
  aggregate: 'sum'
}, {
  field: 'OtherFee',
  aggregate: 'sum'
}, {
  field: 'DeliveryFee',
  aggregate: 'sum'
}, {
  field: 'EnvironmentalFee',
  aggregate: 'sum'
}];

const processWithGroups = (data, dataState) => {
  const groups = dataState.group;
  if (groups) {
    groups.map(group => group.aggregates = aggregates);
  }
  dataState.group = groups;
  const newDataState = process(data, dataState);
  setGroupIds({
    data: newDataState.data,
    group: dataState.group
  });
  return newDataState;
};

const Aggre = () => {
  const [dataState, setDataState] = React.useState(initialDataState);
  const [collapsedState, setCollapsedState] = React.useState([]);

  const cellRender = (tdElement, cellProps) => {

    if (cellProps.rowType === 'groupFooter') {

      if (cellProps.field === 'ProductPrice') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                  {cellProps.dataItem.aggregates.ProductPrice.sum}
                </td>;
      } else if (cellProps.field === 'TaxPrice') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                  {cellProps.dataItem.aggregates.TaxPrice.sum}
                </td>;
      } else if (cellProps.field === 'Fees') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                  {cellProps.dataItem.aggregates.Fees.sum}
                </td>;
      } else if (cellProps.field === 'ProductUnitPrice') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                  {cellProps.dataItem.aggregates.ProductUnitPrice.sum}
                </td>;
      } else if (cellProps.field === 'TaxUnitPrice') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                  {cellProps.dataItem.aggregates.TaxUnitPrice.sum}
                </td>;
      } else if (cellProps.field === 'OtherFee') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                   {cellProps.dataItem.aggregates.OtherFee.sum}
                </td>;
      } else if (cellProps.field === 'DeliveryFee') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                   {cellProps.dataItem.aggregates.DeliveryFee.sum}
                </td>;
      } else if (cellProps.field === 'EnvironmentalFee') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                   {cellProps.dataItem.aggregates.EnvironmentalFee.sum}
                </td>;
      } else if (cellProps.field === 'OrderNumber') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                   SubTotal
                </td>;
      }
    }
    return tdElement;
  };

  const newData = setExpandedState({
    data: processWithGroups(products, initialDataState).data,
    collapsedIds: collapsedState
  });

  return <Grid style={{
    height: '600px'
  }} groupable={{
    footer: 'visible'
  }} data={newData} {...dataState} cellRender={cellRender}>
  {/* <Column field="count" title="#" width="50px"/> */}
  <Column field='CustomerName' title='Customer Name' width="150px"/>
  <Column field='VendorName' title='Vendor Name' width="150px" />
  <Column field="ShipToName" title="Ship To Name" width="150px"/>
  <Column field="Addr1" title="Address" width="150px"/>
  <Column field="CityName" title="CityName" width="140px"/>
  <Column field="StateCode" title="StateCode" width="100px"/>
  <Column field="LocationType" title="Location Type" width="130px"/>
  <Column field="OrderNumber" title="Order Id" width="120px"/>
  <Column field="ProdDesc" title="Product Description" width="150px"/>
  <Column field="DeliveryDate" title="Delivery Date" width="120px"/>
  <Column field="FileName" title="File" width="250px"/>
  <Column field="Gallons" title="Gallons" width="100px"/>
  <Column field="ProductPrice" title="Product Price" width="140px"/>
  <Column field="TaxPrice" title="Tax Price" width="120px"/>
  <Column field="Latitude" title="Latitude" width="120px"/>
  <Column field="Longitude" title="Longitude" width="120px"/>
  <Column field="Fees" title="Fees" width="120px"/>
  <Column field="AverageGross" title="Average Gross" width="120px"/>
  <Column field="ProductID" title="Product ID" width="120px"/>
  <Column field="ProductUnitPrice" title="Product Unit Price" width="120px"/>
  <Column field="TaxUnitPrice" title="Tax Unit Price" width="120px"/>
  <Column field="OtherFee" title="Other Fee" width="120px"/>
  <Column field="DeliveryFee" title="Delivery Fee" width="120px"/>
  <Column field="EnvironmentalFee" title="Environmental Fee" width="150px"/>
  <Column field="PageNumber" title="Page Number" width="120px"/>
  <Column field="TerminalGroupID" title="Terminal GroupID" width="150px"/>
  <Column field="LoadingTime" title="Loading Time" width="120px"/>
  <Column field="SiteSetupTime" title="SiteSetupTime" width="120px"/>
  <Column field="CustomerID" title="Customer ID" width="120px"/>
    </Grid>;
};

export default Aggre