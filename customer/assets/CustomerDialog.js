import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";

export const ImportDialog = (props) => {
  const { dialogName } = props;
  const closeImportDivision = () => {
    props.dialogProps(false);
  };

  return (
    <Dialog
      width={"96%"}
      height={400}
      style={{ overflow: "auto", paddingBottom: "15%" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "35%",
          }}
        >
          <h6>{dialogName}</h6>
          <div
            style={{
              backgroundColor: "#00B5DC",
              padding: "5px 10px",
              color: "white",
            }}
          >
            <input type="file" />
            <Button className="primary_btn">Import</Button>
          </div>
        </div>
        <Button
          className="buttonColor"
          icon="k-icon k-i-close k-icon-lg"
          size="large"
          onClick={() => {
            closeImportDivision();
          }}
        >
          <span className="customerButton">Close</span>
        </Button>
      </div>
      <hr />
      <div>
        <h6>STATUS MESSAGE</h6>
        <hr />
        <p>
          Please use the file selection tool above to select a file to import.
          Once you have selected the file, click on the import button to import
          the file. Download the latest consolidated template{" "}
          <a href="" style={{ textDecoration: "none" }}>
            here
          </a>
          .
        </p>
      </div>
      <div>
        <h6>ERROR MESSAGE</h6>
        <hr />
        <p style={{ color: "red" }}>Error </p>
        <hr style={{ opacity: 0.1 }} />
      </div>
    </Dialog>
  );
};

export const GridSaveDialog = (props) => {
  const closeGridDialog = () => {
    props.dialogProps(false);
  };
  return (
    <Dialog width={550} height={230}>
      <div style={{ border: "1px solid blue", height: "96%" }}>
        <div style={{ height: "35px", backgroundColor: "#373d40" }}>
          <span
            style={{
              color: "white",
              fontWeight: 700,
              marginLeft: "20px",
              fontSize: "1.2rem",
            }}
          >
            Alert
          </span>
        </div>
        <p
          style={{
            margin: "25px",
          }}
        >
          Grid settings have successfully been saved to your user profile
        </p>
        <Button
          themeColor="success"
          size="large"
          style={{
            position: "absolute",
            bottom: "40px",
            right: "45px",
            fontSize: "1rem",
          }}
          onClick={() => {
            closeGridDialog(false);
          }}
        >
          Ok
        </Button>
      </div>
    </Dialog>
  );
};
