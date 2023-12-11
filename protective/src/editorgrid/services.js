const sampleProducts = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10 boxes x 20 bags",
    UnitPrice: 18,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales",
    },
    FirstOrderedOn: new Date(1996, 8, 20),
  },
];

let data1 = [...sampleProducts];
const generateId = (data) =>
  data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;
const insertItem = (item) => {
  item.ProductID = generateId(data1);
  item.inEdit = false;
  data1.unshift(item);
  return data1;
};
const getItems = () => {
  return data1;
};
const updateItem = (item) => {
  let index = data1.findIndex((record) => record.ProductID === item.ProductID);
  data1[index] = item;
  return data1;
};
const deleteItem = (item) => {
  let index = data1.findIndex((record) => record.ProductID === item.ProductID);
  data1.splice(index, 1);
  return data1;
};
