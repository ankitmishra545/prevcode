import React, { useState } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";
import "./customer.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import CustomerGridTable from "./CustomerGridTable";
import { GridSaveDialog, ImportDialog } from "./assets/CustomerDialog";

const divisionData = [
  {
    Name: "Mac Cattanach",
    Address: "Room 1947",
    City: "Mapalacsiao",
    Country: "Philippines",
    State: null,
    Zip: "2826",
  },
  {
    Name: "Skye Tremblet",
    Address: "PO Box 33127",
    City: "Albarraque",
    Country: "Portugal",
    State: "11",
    Zip: "2635-012",
  },
  {
    Name: "Andromache Spurgeon",
    Address: "Apt 1472",
    City: "Kelmė",
    Country: "Lithuania",
    State: null,
    Zip: "86001",
  },
  {
    Name: "Sydney Whitehead",
    Address: "Room 514",
    City: "Huyuan",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Andreana Howat",
    Address: "Suite 52",
    City: "Moita da Roda",
    Country: "Portugal",
    State: "10",
    Zip: "2425-839",
  },
  {
    Name: "Danell Assante",
    Address: "3rd Floor",
    City: "Kaliterus",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Alexandr Hastie",
    Address: "Suite 68",
    City: "Panggulan",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Carita Pinke",
    Address: "2nd Floor",
    City: "Ledenice",
    Country: "Czech Republic",
    State: null,
    Zip: "373 11",
  },
  {
    Name: "Paxton Deporte",
    Address: "Suite 17",
    City: "Gyōda",
    Country: "Japan",
    State: null,
    Zip: "369-0137",
  },
  {
    Name: "Daisi Kilpatrick",
    Address: "6th Floor",
    City: "Taltal",
    Country: "Chile",
    State: null,
    Zip: null,
  },
  {
    Name: "George Grealey",
    Address: "Room 532",
    City: "Gamovo",
    Country: "Russia",
    State: null,
    Zip: "614513",
  },
  {
    Name: "Bernie Tomkies",
    Address: "PO Box 22915",
    City: "Tochigi",
    Country: "Japan",
    State: null,
    Zip: "697-1201",
  },
  {
    Name: "Gabi Gravenall",
    Address: "Room 633",
    City: "Tula",
    Country: "Russia",
    State: null,
    Zip: "300999",
  },
  {
    Name: "Wendell Tambling",
    Address: "Room 1059",
    City: "Huangben",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Madeline Picard",
    Address: "Suite 38",
    City: "Sarilhos Grandes",
    Country: "Portugal",
    State: "15",
    Zip: "2870-514",
  },
  {
    Name: "Flossy Baybutt",
    Address: "Room 1592",
    City: "Hengtanggang",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Stacie Murkin",
    Address: "Room 731",
    City: "Huo’erqi",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Sara-ann Sloss",
    Address: "Apt 1827",
    City: "Aygeshat",
    Country: "Armenia",
    State: null,
    Zip: null,
  },
  {
    Name: "Arnuad McGrowther",
    Address: "PO Box 7363",
    City: "Ternopil’",
    Country: "Ukraine",
    State: null,
    Zip: null,
  },
  {
    Name: "Audry Blaxlande",
    Address: "Room 993",
    City: "Roissy Charles-de-Gaulle",
    Country: "France",
    State: "A8",
    Zip: "95711 CEDEX 1",
  },
  {
    Name: "Cherri Redwall",
    Address: "13th Floor",
    City: "Hidalgo",
    Country: "Mexico",
    State: "CHP",
    Zip: "26060",
  },
  {
    Name: "Tess Spears",
    Address: "Room 931",
    City: "Gaopu",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Katey Strowthers",
    Address: "5th Floor",
    City: "Luxor",
    Country: "Egypt",
    State: null,
    Zip: null,
  },
  {
    Name: "Hymie MacGinlay",
    Address: "Apt 1299",
    City: "Kambing",
    Country: "Philippines",
    State: null,
    Zip: "4430",
  },
  {
    Name: "Madel Calow",
    Address: "7th Floor",
    City: "Nanqiao",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Vivien Cruz",
    Address: "Suite 41",
    City: "Cuispes",
    Country: "Peru",
    State: null,
    Zip: null,
  },
  {
    Name: "Cori Faherty",
    Address: "8th Floor",
    City: "Loma Bonita",
    Country: "Mexico",
    State: "MEX",
    Zip: "52740",
  },
  {
    Name: "Elizabeth Schaffel",
    Address: "Room 1653",
    City: "Tamnag",
    Country: "Philippines",
    State: null,
    Zip: "9803",
  },
  {
    Name: "Shel Conquest",
    Address: "PO Box 65548",
    City: "Atuntaqui",
    Country: "Ecuador",
    State: null,
    Zip: null,
  },
  {
    Name: "Lukas Goss",
    Address: "Apt 754",
    City: "Otoka",
    Country: "Bosnia and Herzegovina",
    State: null,
    Zip: null,
  },
  {
    Name: "Suzette Hexam",
    Address: "Suite 45",
    City: "Nesebar",
    Country: "Bulgaria",
    State: null,
    Zip: "8217",
  },
  {
    Name: "Drake Cruikshank",
    Address: "Room 71",
    City: "Berlin",
    Country: "Germany",
    State: "BE",
    Zip: "10409",
  },
  {
    Name: "Abey Willmont",
    Address: "PO Box 52192",
    City: "Klagen",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Theresita Smitham",
    Address: "Apt 51",
    City: "Lifuta",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Saundra Iorizzi",
    Address: "Apt 1793",
    City: "Sindangheula",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Cly Skinner",
    Address: "Room 1772",
    City: "Ledeunu",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Ferris Segebrecht",
    Address: "Apt 1414",
    City: "Dalazi",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Lib Casbon",
    Address: "Room 984",
    City: "Pomerode",
    Country: "Brazil",
    State: null,
    Zip: "89107-000",
  },
  {
    Name: "Ki Maddison",
    Address: "Suite 39",
    City: "Złota",
    Country: "Poland",
    State: null,
    Zip: "32-859",
  },
  {
    Name: "Kassia McClaurie",
    Address: "5th Floor",
    City: "Sacramento",
    Country: "United States",
    State: "CA",
    Zip: "94207",
  },
  {
    Name: "Alexi Bilton",
    Address: "9th Floor",
    City: "Serednye",
    Country: "Ukraine",
    State: null,
    Zip: null,
  },
  {
    Name: "Reese Genike",
    Address: "Room 1263",
    City: "Minjian",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Tallulah Vassel",
    Address: "Room 1343",
    City: "Talovyy",
    Country: "Russia",
    State: null,
    Zip: "346536",
  },
  {
    Name: "Luelle Olufsen",
    Address: "Apt 999",
    City: "Besuki Dua",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Stanwood Mattek",
    Address: "Room 1430",
    City: "Fentange",
    Country: "Luxembourg",
    State: null,
    Zip: "L-5891",
  },
  {
    Name: "Amii Jeffels",
    Address: "Suite 19",
    City: "Santa Maria",
    Country: "Philippines",
    State: null,
    Zip: "8011",
  },
  {
    Name: "Janella Skelhorne",
    Address: "PO Box 13006",
    City: "Batouri",
    Country: "Cameroon",
    State: null,
    Zip: null,
  },
  {
    Name: "Fulvia Vint",
    Address: "PO Box 48865",
    City: "Gande",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Elianore Mollatt",
    Address: "Apt 481",
    City: "Cuiabá",
    Country: "Brazil",
    State: null,
    Zip: "78000-000",
  },
  {
    Name: "Kalindi Libero",
    Address: "17th Floor",
    City: "Tolotangga",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Remington Stemp",
    Address: "Suite 80",
    City: "Wutumeiren",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Cart Hubach",
    Address: "Suite 61",
    City: "Hikone",
    Country: "Japan",
    State: null,
    Zip: "526-0826",
  },
  {
    Name: "Ruby Donnison",
    Address: "Suite 42",
    City: "Andou",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Jereme Patron",
    Address: "7th Floor",
    City: "Liski",
    Country: "Russia",
    State: null,
    Zip: "397920",
  },
  {
    Name: "Theadora Chipperfield",
    Address: "18th Floor",
    City: "Alor Setar",
    Country: "Malaysia",
    State: "KDH",
    Zip: "05622",
  },
  {
    Name: "Ruperta McCrystal",
    Address: "Apt 909",
    City: "Simpang",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Bathsheba Glader",
    Address: "Room 1696",
    City: "Kadujangkung",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Glenna Toma",
    Address: "Suite 83",
    City: "Muaralembu",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Sigismundo Littlemore",
    Address: "8th Floor",
    City: "Río Ceballos",
    Country: "Argentina",
    State: null,
    Zip: "5113",
  },
  {
    Name: "Urson Kristiansen",
    Address: "Room 1320",
    City: "Kauhan",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Tessy Georgescu",
    Address: "Apt 1371",
    City: "Kepel",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Dorrie McIlory",
    Address: "4th Floor",
    City: "Kota Bharu",
    Country: "Malaysia",
    State: "KTN",
    Zip: "15540",
  },
  {
    Name: "Ofella Ogdahl",
    Address: "4th Floor",
    City: "Kushovë",
    Country: "Albania",
    State: null,
    Zip: null,
  },
  {
    Name: "Sollie Sumnall",
    Address: "Apt 277",
    City: "Castelo",
    Country: "Portugal",
    State: "18",
    Zip: "3620-132",
  },
  {
    Name: "Dennet Otton",
    Address: "Suite 93",
    City: "Kerrouchen",
    Country: "Morocco",
    State: null,
    Zip: null,
  },
  {
    Name: "Edith Olivet",
    Address: "11th Floor",
    City: "Sukamulia",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Fair Ingyon",
    Address: "Room 1692",
    City: "Działdowo",
    Country: "Poland",
    State: null,
    Zip: "13-210",
  },
  {
    Name: "Starlin Benit",
    Address: "4th Floor",
    City: "Kainan",
    Country: "Japan",
    State: null,
    Zip: "649-6326",
  },
  {
    Name: "Terra Bottell",
    Address: "Apt 752",
    City: "Suileng",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Emile Grieg",
    Address: "Room 1584",
    City: "Mali",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Clari Windrass",
    Address: "Suite 86",
    City: "Dajabón",
    Country: "Dominican Republic",
    State: null,
    Zip: "10115",
  },
  {
    Name: "Ronny McMurtyr",
    Address: "Apt 1673",
    City: "Mrganush",
    Country: "Armenia",
    State: null,
    Zip: null,
  },
  {
    Name: "Brigham Gregson",
    Address: "1st Floor",
    City: "Caeté",
    Country: "Brazil",
    State: null,
    Zip: "34800-000",
  },
  {
    Name: "Evey Trusty",
    Address: "PO Box 65359",
    City: "Ngawi",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Kippar Ferriere",
    Address: "PO Box 33336",
    City: "Guadalupe",
    Country: "Mexico",
    State: "PUE",
    Zip: "72124",
  },
  {
    Name: "Nessie Cordero",
    Address: "17th Floor",
    City: "Fatumnasi",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Karna Camelli",
    Address: "PO Box 70063",
    City: "Capulaan",
    Country: "Philippines",
    State: null,
    Zip: "5516",
  },
  {
    Name: "Twila Parsall",
    Address: "Apt 1136",
    City: "Muquiyauyo",
    Country: "Peru",
    State: null,
    Zip: null,
  },
  {
    Name: "Jorrie Jerdan",
    Address: "Room 531",
    City: "Huilong",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Lise Castagne",
    Address: "5th Floor",
    City: "Cerrito",
    Country: "Colombia",
    State: null,
    Zip: "681509",
  },
  {
    Name: "Maggee Wiggam",
    Address: "Suite 78",
    City: "Thala",
    Country: "Tunisia",
    State: null,
    Zip: null,
  },
  {
    Name: "Zaria Shalloo",
    Address: "Apt 1950",
    City: "'Ali Sabieh",
    Country: "Djibouti",
    State: null,
    Zip: null,
  },
  {
    Name: "Rudd Elsy",
    Address: "Room 896",
    City: "Plaza de Caisán",
    Country: "Panama",
    State: null,
    Zip: null,
  },
  {
    Name: "Sutton Tabary",
    Address: "19th Floor",
    City: "Rodniki",
    Country: "Russia",
    State: null,
    Zip: "155252",
  },
  {
    Name: "Sawyer Gurnell",
    Address: "Room 255",
    City: "Torkanivka",
    Country: "Ukraine",
    State: null,
    Zip: null,
  },
  {
    Name: "Tim Hedney",
    Address: "Room 1935",
    City: "Gołkowice",
    Country: "Poland",
    State: null,
    Zip: "44-341",
  },
  {
    Name: "Wallache McDunlevy",
    Address: "PO Box 1495",
    City: "Mabusag",
    Country: "Philippines",
    State: null,
    Zip: "2904",
  },
  {
    Name: "Aldwin Roxby",
    Address: "Suite 4",
    City: "Marmárion",
    Country: "Greece",
    State: null,
    Zip: null,
  },
  {
    Name: "Rasla Riddiford",
    Address: "PO Box 37805",
    City: "Międzyrzecz",
    Country: "Poland",
    State: null,
    Zip: "66-302",
  },
  {
    Name: "Marcela Boar",
    Address: "PO Box 3878",
    City: "Moutfort",
    Country: "Luxembourg",
    State: null,
    Zip: "L-5341",
  },
  {
    Name: "Wandie Booley",
    Address: "Apt 1864",
    City: "Wajak",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Tasia Palke",
    Address: "Apt 1634",
    City: "Yanzhou",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Harland Phillp",
    Address: "PO Box 59959",
    City: "Santa Marcela",
    Country: "Philippines",
    State: null,
    Zip: "3811",
  },
  {
    Name: "Brander Wahner",
    Address: "PO Box 66118",
    City: "Banjar Buahan",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Linnie Grazier",
    Address: "PO Box 56573",
    City: "Wenfang",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Sinclair Jehu",
    Address: "Apt 965",
    City: "Gaotieling",
    Country: "China",
    State: null,
    Zip: null,
  },
  {
    Name: "Krystal Lammers",
    Address: "11th Floor",
    City: "Tempaling",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Misha Plaistowe",
    Address: "Suite 11",
    City: "Lancar",
    Country: "Indonesia",
    State: null,
    Zip: null,
  },
  {
    Name: "Ignace Stanbro",
    Address: "18th Floor",
    City: "Merton",
    Country: "United Kingdom",
    State: "ENG",
    Zip: "SW19",
  },
  {
    Name: "Olva Etherton",
    Address: "Room 211",
    City: "Yanggan",
    Country: "China",
    State: null,
    Zip: null,
  },
];

const columns = [
  {
    title: "Name",
    field: "Name",
    show: true,
    filter: "text",
  },
  {
    title: "Address 1",
    field: "Address",
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
    title: "Active",
    field: "Active",
    show: true,
    filter: "boolean",
  },
];

const CustomerTable = () => {
  const navigate = useNavigate();

  const [divisionDailog, setDivisionDailog] = useState(false);
  const [gridSaveDailog, setGridSaveDailog] = useState(false);

  const cellRender = (cell, props) => {
    const { field } = props;

    if (field === "Active") {
      return (
        <td {...cell.props} className="activeCell">
          <Checkbox checked />
        </td>
      );
    } else if (field === "Name") {
      return (
        <td {...cell.props} className="activeCell" style={{ color: "#00B5DC" }}>
          <Link to={`/Dashboard/CreateDivision/${cell.props.children}`}>
            {cell.props.children}
          </Link>
        </td>
      );
    }
    return <td {...cell.props}>{cell.props.children}</td>;
  };

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

  return (
    <div>
      <div className="mansfieldCustomerHeader">
        <div className="customerTitle">DIVISION</div>
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
            Import Division
          </Button>
          <Button
            icon="k-icon k-i-plus"
            className="primary_btn"
            onClick={() => {
              navigate(`/Dashboard/CreateDivision/${0}`);
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
      {divisionDailog && (
        <ImportDialog
          dialogProps={closingDailog}
          dialogName="IMPORT DIVISION"
        />
      )}
      {gridSaveDailog && <GridSaveDialog dialogProps={closingGridSaveDialog} />}
      <CustomerGridTable
        data={divisionData}
        columns={columns}
        cellRender={cellRender}
      />
      <br />
    </div>
  );
};

export default CustomerTable;
