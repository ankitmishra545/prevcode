import React from 'react'
import { Grid, GridColumn } from "@progress/kendo-react-grid";

const products = [{
    "ProductID" : 1,
    "ProductName" : "Chai",
    "SupplierID" : 1,
    "CategoryID" : 1,
    "QuantityPerUnit" : "10 boxes x 20 bags",
    "UnitPrice" : 18.0000,
    "UnitsInStock" : 39,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 10,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 1,
        "CategoryName" : "Beverages",
        "Description" : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID" : 2,
    "ProductName" : "Chang",
    "SupplierID" : 1,
    "CategoryID" : 1,
    "QuantityPerUnit" : "24 - 12 oz bottles",
    "UnitPrice" : 19.0000,
    "UnitsInStock" : 17,
    "UnitsOnOrder" : 40,
    "ReorderLevel" : 25,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 1,
        "CategoryName" : "Beverages",
        "Description" : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ProductID" : 3,
    "ProductName" : "Aniseed Syrup",
    "SupplierID" : 1,
    "CategoryID" : 2,
    "QuantityPerUnit" : "12 - 550 ml bottles",
    "UnitPrice" : 10.0000,
    "UnitsInStock" : 13,
    "UnitsOnOrder" : 70,
    "ReorderLevel" : 25,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID" : 4,
    "ProductName" : "Chef Anton's Cajun Seasoning",
    "SupplierID" : 2,
    "CategoryID" : 2,
    "QuantityPerUnit" : "48 - 6 oz jars",
    "UnitPrice" : 22.0000,
    "UnitsInStock" : 53,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID" : 5,
    "ProductName" : "Chef Anton's Gumbo Mix",
    "SupplierID" : 2,
    "CategoryID" : 2,
    "QuantityPerUnit" : "36 boxes",
    "UnitPrice" : 21.3500,
    "UnitsInStock" : 0,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : true,
    "Category" : {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID" : 6,
    "ProductName" : "Grandma's Boysenberry Spread",
    "SupplierID" : 3,
    "CategoryID" : 2,
    "QuantityPerUnit" : "12 - 8 oz jars",
    "UnitPrice" : 25.0000,
    "UnitsInStock" : 120,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 25,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID" : 7,
    "ProductName" : "Uncle Bob's Organic Dried Pears",
    "SupplierID" : 3,
    "CategoryID" : 7,
    "QuantityPerUnit" : "12 - 1 lb pkgs.",
    "UnitPrice" : 30.0000,
    "UnitsInStock" : 15,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 10,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 7,
        "CategoryName" : "Produce",
        "Description" : "Dried fruit and bean curd"
    }
}, {
    "ProductID" : 8,
    "ProductName" : "Northwoods Cranberry Sauce",
    "SupplierID" : 3,
    "CategoryID" : 2,
    "QuantityPerUnit" : "12 - 12 oz jars",
    "UnitPrice" : 40.0000,
    "UnitsInStock" : 6,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 2,
        "CategoryName" : "Condiments",
        "Description" : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ProductID" : 9,
    "ProductName" : "Mishi Kobe Niku",
    "SupplierID" : 4,
    "CategoryID" : 6,
    "QuantityPerUnit" : "18 - 500 g pkgs.",
    "UnitPrice" : 97.0000,
    "UnitsInStock" : 29,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : true,
    "Category" : {
        "CategoryID" : 6,
        "CategoryName" : "Meat/Poultry",
        "Description" : "Prepared meats"
    }
}, {
    "ProductID" : 10,
    "ProductName" : "Ikura",
    "SupplierID" : 4,
    "CategoryID" : 8,
    "QuantityPerUnit" : "12 - 200 ml jars",
    "UnitPrice" : 31.0000,
    "UnitsInStock" : 31,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 8,
        "CategoryName" : "Seafood",
        "Description" : "Seaweed and fish"
    }
}, {
    "ProductID" : 11,
    "ProductName" : "Queso Cabrales",
    "SupplierID" : 5,
    "CategoryID" : 4,
    "QuantityPerUnit" : "1 kg pkg.",
    "UnitPrice" : 21.0000,
    "UnitsInStock" : 22,
    "UnitsOnOrder" : 30,
    "ReorderLevel" : 30,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 4,
        "CategoryName" : "Dairy Products",
        "Description" : "Cheeses"
    }
}, {
    "ProductID" : 12,
    "ProductName" : "Queso Manchego La Pastora",
    "SupplierID" : 5,
    "CategoryID" : 4,
    "QuantityPerUnit" : "10 - 500 g pkgs.",
    "UnitPrice" : 38.0000,
    "UnitsInStock" : 86,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 4,
        "CategoryName" : "Dairy Products",
        "Description" : "Cheeses"
    }
}, {
    "ProductID" : 13,
    "ProductName" : "Konbu",
    "SupplierID" : 6,
    "CategoryID" : 8,
    "QuantityPerUnit" : "2 kg box",
    "UnitPrice" : 6.0000,
    "UnitsInStock" : 24,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 5,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 8,
        "CategoryName" : "Seafood",
        "Description" : "Seaweed and fish"
    }
}, {
    "ProductID" : 14,
    "ProductName" : "Tofu",
    "SupplierID" : 6,
    "CategoryID" : 7,
    "QuantityPerUnit" : "40 - 100 g pkgs.",
    "UnitPrice" : 23.2500,
    "UnitsInStock" : 35,
    "UnitsOnOrder" : 0,
    "ReorderLevel" : 0,
    "Discontinued" : false,
    "Category" : {
        "CategoryID" : 7,
        "CategoryName" : "Produce",
        "Description" : "Dried fruit and bean curd"
    }
},]

const initialDataState = {
    skip: 0,
    take: 1,
  };

const Table = () => {
    const [page, setPage] = React.useState(initialDataState);
    const [pageSizeValue, setPageSizeValue] = React.useState();

    const pageChange = (event) => {
        const targetEvent = event.targetEvent;
        const take = targetEvent.value === "All" ? 77 : event.page.take;
        if (targetEvent.value) {
          setPageSizeValue(targetEvent.value);
        }
        setPage({
          ...event.page,
          take,
        });
      };

  return (
    <div>
              <Grid
        style={{
          height: "400px",
        }}
        data={products.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={products.length}
        pageable={{
          buttonCount: 1,
          pageSizes: [5, 10, 15, "All"],
          pageSizeValue: pageSizeValue,
        }}
        onPageChange={pageChange}
      >
        <GridColumn field="ProductID" />
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Unit Price" />
      </Grid>
    </div>
  )
}

export default Table