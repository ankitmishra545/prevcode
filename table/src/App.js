import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';

import products from './Product.json';
import Span from './components/Span';
import Aggre from './components/Aggre';

// const uniqueArray = new Array(...new Set(products.map((object) => {
//   return JSON.stringify({
//     CustomerName: object.CustomerName,
//     VendorName: object.VendorName,
//     Addr1: object.Addr1,
//     ShipToName: object.ShipToName,
//     StateCode: object.StateCode,
//     LocationType: object.LocationType,
//     CityName: object.CityName
//   })
// })))

// const finalArray = uniqueArray.map((object) => {
//   const filteredArray = products.filter((obj)=> {
//     const infoData = JSON.stringify({
//       CustomerName: obj.CustomerName,
//       VendorName: obj.VendorName,
//       Addr1: obj.Addr1,
//       ShipToName: obj.ShipToName,
//       StateCode: obj.StateCode,
//       LocationType: obj.LocationType,
//       CityName: obj.CityName
//     })

//     return object === infoData;
//   })

//   const parsedData = JSON.parse(object);

//   return {...parsedData, spanValue: filteredArray.length}
// })

function App() {

    return (
      <div>
        <Span/>
        {/* <Aggre/> */}
      </div>
    );
}
export default App