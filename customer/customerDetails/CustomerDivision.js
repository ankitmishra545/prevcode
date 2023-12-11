import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Checkbox } from "@progress/kendo-react-inputs";
import CustomerGridTable from "../CustomerGridTable";
import { GridSaveDialog, ImportDialog } from "../assets/CustomerDialog";
import { Link, useNavigate } from "react-router-dom";

const customerData = [
  {
    Customer: "Michaeline Dumphy",
    ID: 1,
    ShortName: "mdumphy0",
    Address1: "7th Floor",
    City: "Raposos",
    Country: "BR",
    State: null,
    Zip: "34400-000",
    Price: false,
    Asset: false,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Elmer Plummer",
    ID: 2,
    ShortName: "eplummer1",
    Address1: "Apt 1613",
    City: "Luxor",
    Country: "EG",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Bella Kubis",
    ID: 3,
    ShortName: "bkubis2",
    Address1: "PO Box 54130",
    City: "San Miguel",
    Country: "PY",
    State: null,
    Zip: null,
    Price: true,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Ulises Capponer",
    ID: 4,
    ShortName: "ucapponer3",
    Address1: "Suite 55",
    City: "Shancheng",
    Country: "CN",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Melody Maciocia",
    ID: 5,
    ShortName: "mmaciocia4",
    Address1: "Room 1214",
    City: "Powidz",
    Country: "PL",
    State: null,
    Zip: "62-430",
    Price: true,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Ginevra St Ange",
    ID: 6,
    ShortName: "gst5",
    Address1: "Suite 59",
    City: "Sayansk",
    Country: "RU",
    State: null,
    Zip: "662654",
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Yuma Lethby",
    ID: 7,
    ShortName: "ylethby6",
    Address1: "PO Box 49290",
    City: "Latung",
    Country: "PH",
    State: null,
    Zip: "1119",
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Julita Ogelsby",
    ID: 8,
    ShortName: "jogelsby7",
    Address1: "Suite 24",
    City: "Kangle",
    Country: "CN",
    State: null,
    Zip: null,
    Price: true,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Curr MacCawley",
    ID: 9,
    ShortName: "cmaccawley8",
    Address1: "Room 885",
    City: "Purut",
    Country: "ID",
    State: null,
    Zip: null,
    Price: true,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Aluin Tesyro",
    ID: 10,
    ShortName: "atesyro9",
    Address1: "Apt 1327",
    City: "Jiushe",
    Country: "CN",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Gwendolen Blanche",
    ID: 11,
    ShortName: "gblanchea",
    Address1: "7th Floor",
    City: "Ochota",
    Country: "PL",
    State: null,
    Zip: "05-090",
    Price: true,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Trina Elsip",
    ID: 12,
    ShortName: "telsipb",
    Address1: "Room 1511",
    City: "Whistler",
    Country: "CA",
    State: "BC",
    Zip: "N0K",
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Selestina Carnell",
    ID: 13,
    ShortName: "scarnellc",
    Address1: "Room 541",
    City: "Al Farwānīyah",
    Country: "KW",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Sigmund Devericks",
    ID: 14,
    ShortName: "sdevericksd",
    Address1: "Room 1738",
    City: "Genang",
    Country: "ID",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Rosene McGinney",
    ID: 15,
    ShortName: "rmcginneye",
    Address1: "Suite 62",
    City: "Bucaramanga",
    Country: "CO",
    State: null,
    Zip: "680011",
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Murry Van den Dael",
    ID: 16,
    ShortName: "mvanf",
    Address1: "2nd Floor",
    City: "Kafr Şūr",
    Country: "PS",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Doria Drain",
    ID: 17,
    ShortName: "ddraing",
    Address1: "Apt 524",
    City: "Jinshandian",
    Country: "CN",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Daloris Killimister",
    ID: 18,
    ShortName: "dkillimisterh",
    Address1: "PO Box 97244",
    City: "Bugo",
    Country: "PH",
    State: null,
    Zip: "9222",
    Price: false,
    Asset: true,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Katerine Dionisetto",
    ID: 19,
    ShortName: "kdionisettoi",
    Address1: "Apt 899",
    City: "Sibagat",
    Country: "PH",
    State: null,
    Zip: "8503",
    Price: false,
    Asset: false,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Aline Keating",
    ID: 20,
    ShortName: "akeatingj",
    Address1: "Apt 1398",
    City: "Nubl",
    Country: "SY",
    State: null,
    Zip: null,
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Antoni Froome",
    ID: 21,
    ShortName: "afroomek",
    Address1: "Room 808",
    City: "Jeffersonville",
    Country: "US",
    State: "IN",
    Zip: "47134",
    Price: true,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Annnora Battey",
    ID: 22,
    ShortName: "abatteyl",
    Address1: "Apt 1543",
    City: "Shigony",
    Country: "RU",
    State: null,
    Zip: "446729",
    Price: true,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Virginia Thorsen",
    ID: 23,
    ShortName: "vthorsenm",
    Address1: "Apt 92",
    City: "Auxerre",
    Country: "FR",
    State: "A1",
    Zip: "89024 CEDEX",
    Price: true,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Christie Matterson",
    ID: 24,
    ShortName: "cmattersonn",
    Address1: "PO Box 62685",
    City: "Saint-Denis",
    Country: "RE",
    State: "RE",
    Zip: "97487 CEDEX",
    Price: false,
    Asset: true,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Shurlocke Bertomieu",
    ID: 25,
    ShortName: "sbertomieuo",
    Address1: "Room 1152",
    City: "Ciparay",
    Country: "ID",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Mead Lilliman",
    ID: 26,
    ShortName: "mlillimanp",
    Address1: "Suite 38",
    City: "Rokytnice nad Jizerou",
    Country: "CZ",
    State: null,
    Zip: "513 01",
    Price: false,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Shanie Parram",
    ID: 27,
    ShortName: "sparramq",
    Address1: "Suite 90",
    City: "Patos Fshat",
    Country: "AL",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Gayle Pulman",
    ID: 28,
    ShortName: "gpulmanr",
    Address1: "Apt 24",
    City: "Tozeur",
    Country: "TN",
    State: null,
    Zip: null,
    Price: true,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Aurea Tulleth",
    ID: 29,
    ShortName: "atulleths",
    Address1: "Suite 87",
    City: "Odessa",
    Country: "US",
    State: "TX",
    Zip: "79764",
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Oliviero Bynold",
    ID: 30,
    ShortName: "obynoldt",
    Address1: "Apt 1054",
    City: "Rāmganj",
    Country: "BD",
    State: null,
    Zip: "3725",
    Price: true,
    Asset: true,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Alick Pateman",
    ID: 31,
    ShortName: "apatemanu",
    Address1: "PO Box 62153",
    City: "Rego",
    Country: "PT",
    State: "13",
    Zip: "4635-637",
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Nicolle Halesworth",
    ID: 32,
    ShortName: "nhalesworthv",
    Address1: "9th Floor",
    City: "Zyuzino",
    Country: "RU",
    State: null,
    Zip: "142817",
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Mata Shovelton",
    ID: 33,
    ShortName: "mshoveltonw",
    Address1: "Room 649",
    City: "Staryy Krym",
    Country: "UA",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Alphard Moncrieffe",
    ID: 34,
    ShortName: "amoncrieffex",
    Address1: "Room 1594",
    City: "Vila Franca do Campo",
    Country: "PT",
    State: "42",
    Zip: "9680-105",
    Price: true,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Hilarius Spragg",
    ID: 35,
    ShortName: "hspraggy",
    Address1: "5th Floor",
    City: "Damao",
    Country: "CN",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Dagny Pencost",
    ID: 36,
    ShortName: "dpencostz",
    Address1: "PO Box 51722",
    City: "Pacar",
    Country: "ID",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Gabriele Boutellier",
    ID: 37,
    ShortName: "gboutellier10",
    Address1: "Room 208",
    City: "Meukek",
    Country: "ID",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Toma Afield",
    ID: 38,
    ShortName: "tafield11",
    Address1: "Suite 100",
    City: "Esperança",
    Country: "BR",
    State: null,
    Zip: "58135-000",
    Price: true,
    Asset: false,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Devondra Ottiwill",
    ID: 39,
    ShortName: "dottiwill12",
    Address1: "19th Floor",
    City: "Tucuruí",
    Country: "BR",
    State: null,
    Zip: "68455-000",
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Tomas Blaiklock",
    ID: 40,
    ShortName: "tblaiklock13",
    Address1: "PO Box 81318",
    City: "Cibenda",
    Country: "ID",
    State: null,
    Zip: null,
    Price: true,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Adelind Sandbrook",
    ID: 41,
    ShortName: "asandbrook14",
    Address1: "Apt 599",
    City: "Landskrona",
    Country: "SE",
    State: "M",
    Zip: "261 45",
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Floyd Pohl",
    ID: 42,
    ShortName: "fpohl15",
    Address1: "PO Box 23559",
    City: "Bằng Lũng",
    Country: "VN",
    State: null,
    Zip: null,
    Price: true,
    Asset: true,
    DeliveryLocation: true,
    Active: true,
  },
  {
    Customer: "Mead Pickerill",
    ID: 43,
    ShortName: "mpickerill16",
    Address1: "Apt 256",
    City: "Rucava",
    Country: "LV",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Chan Sidworth",
    ID: 44,
    ShortName: "csidworth17",
    Address1: "PO Box 65923",
    City: "Nouakchott",
    Country: "MR",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Kevina Heddon",
    ID: 45,
    ShortName: "kheddon18",
    Address1: "Room 1542",
    City: "Niba",
    Country: "CN",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Frankie Ducaen",
    ID: 46,
    ShortName: "fducaen19",
    Address1: "Apt 1746",
    City: "Cinyawang",
    Country: "ID",
    State: null,
    Zip: null,
    Price: false,
    Asset: true,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Toby Ivashinnikov",
    ID: 47,
    ShortName: "tivashinnikov1a",
    Address1: "20th Floor",
    City: "Samran",
    Country: "TH",
    State: null,
    Zip: "46140",
    Price: false,
    Asset: false,
    DeliveryLocation: true,
    Active: false,
  },
  {
    Customer: "Elfrieda Severwright",
    ID: 48,
    ShortName: "eseverwright1b",
    Address1: "Suite 88",
    City: "Macaé",
    Country: "BR",
    State: null,
    Zip: "27900-000",
    Price: true,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
  {
    Customer: "Clemmy Craw",
    ID: 49,
    ShortName: "ccraw1c",
    Address1: "15th Floor",
    City: "Châu Thành",
    Country: "VN",
    State: null,
    Zip: null,
    Price: false,
    Asset: false,
    DeliveryLocation: false,
    Active: true,
  },
  {
    Customer: "Veradis Ambrozewicz",
    ID: 50,
    ShortName: "vambrozewicz1d",
    Address1: "Room 1801",
    City: "Dagohoy",
    Country: "PH",
    State: null,
    Zip: "6322",
    Price: true,
    Asset: false,
    DeliveryLocation: false,
    Active: false,
  },
];

const columns = [
  {
    title: "Customer",
    field: "Customer",
    show: true,
    filter: "text",
  },
  {
    title: "ID",
    field: "ID",
    show: true,
    filter: "text",
  },
  {
    title: "Short Name",
    field: "ShortName",
    show: true,
    filter: "text",
  },
  {
    title: "City",
    field: "City",
    show: true,
    filter: "text",
  },
  {
    title: "Country",
    field: "Country",
    show: true,
    filter: "text",
  },
  {
    title: "State/Province",
    field: "State",
    show: true,
    filter: "text",
  },
  {
    title: "Zip",
    field: "Zip",
    show: true,
    filter: "text",
  },
  {
    title: "Price",
    field: "Price",
    show: true,
    filter: "boolean",
  },
  {
    title: "Asset",
    field: "Asset",
    show: true,
    filter: "boolean",
  },
  {
    title: "Delivery Location",
    field: "DeliveryLocation",
    show: true,
    filter: "boolean",
  },
  {
    title: "Active",
    field: "Active",
    show: true,
    filter: "boolean",
  },
];

const CustomerDivision = () => {
  const navigate = useNavigate();

  const [divisionDailog, setDivisionDailog] = useState(false);
  const [gridSaveDailog, setGridSaveDailog] = useState(false);

  const closingDailog = (data) => {
    setDivisionDailog(data);
  };

  const closingGridSaveDialog = (data) => {
    setGridSaveDailog(data);
  };

  const savingGridData = () => {
    setGridSaveDailog(true);
    setTimeout(() => {
      setGridSaveDailog(false);
    }, 1500);
  };

  const cellRender = (cell, props) => {
    const { field } = props;
    if (["DeliveryLocation", "Asset", "Price", "Active"].includes(field)) {
      return (
        <td {...cell.props}>
          <Checkbox
            style={{ cursor: "not-allowed", marginLeft: "40px" }}
            checked={cell.props.children === "true"}
          />
        </td>
      );
    } else if (field === "Customer") {
      return (
        <td {...cell.props}>
          <Link to={`/Dashboard/CreateBranch/${cell.props.children}`}>
            {cell.props.children}
          </Link>
        </td>
      );
    }
    return <td {...cell.props}>{cell.props.children}</td>;
  };

  return (
    <div>
      <div className="mansfieldCustomerHeader">
        <div className="customerTitle">DELIVERY LOCATION</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "260px",
          }}
        >
          <Button
            icon="k-icon k-i-file-excel"
            className="primary_btn"
            onClick={() => {
              setDivisionDailog(true);
            }}
          >
            Import Location
          </Button>
          <Button
            icon="k-icon k-i-plus"
            className="primary_btn"
            onClick={() => {
              navigate(`/Dashboard/CreateBranch/${0}`);
            }}
          >
            Create
          </Button>
          <Button
            icon="k-icon k-i-user k-icon-lg "
            className="primary_btn"
            onClick={() => {
              savingGridData();
            }}
          >
            <span className="k-icon k-i-gear  k-icon-xs mergedIcon" />
          </Button>
        </div>
      </div>
      <hr />
      {divisionDailog && (
        <ImportDialog dialogProps={closingDailog} dialogName="IMPORT BRANCH" />
      )}
      {gridSaveDailog && <GridSaveDialog dialogProps={closingGridSaveDialog} />}
      <div>
        <CustomerGridTable
          data={customerData}
          columns={columns}
          cellRender={cellRender}
        />
      </div>
    </div>
  );
};

export default CustomerDivision;
