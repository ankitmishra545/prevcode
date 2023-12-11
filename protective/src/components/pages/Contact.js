import React from "react";
import { menu } from "../MenuData";
import { PanelMenu } from "primereact/panelmenu";
import Main from "../../formarray/Main";
import GridEditor from "../../editorgrid/GridEditor";

function Contact() {
  const menuData = menu;

  const result = menuData.filter((object) => {
    return object.isparent === 1 && object.parentid === null;
  });

  const getChildren = (id) => {
    const childData = menuData.filter((obj) => {
      return obj.parentid === id;
    });
    if (childData.length !== 0) {
      return childData.map((obje) => {
        return {
          label: obje.text,
          items: getChildren(obje.id),
        };
      });
    }
  };

  //   const items = result.map((object)=> {
  //     return {label: object.text,
  //       items: menuData.filter((obj) => {
  //         return object.id === obj.parentid
  //       }).map((obje) =>{
  //         return {label: obje.text,
  //           items: menuData.filter((objec) => {
  //             return obje.id === objec.parentid;
  //           }).map((item1) => {
  //             return {label: item1.text,
  //               items: menuData.filter((f1) => {
  //                 return f1.parentid === item1.id
  //               }).map((item2) => {
  //                 return {label: item2.text}
  //               })
  //             }
  //           })
  //         }
  //       }),
  //     }
  // })

  const items = result.map((object) => {
    return { label: object.text, items: getChildren(object.id) };
  });
  // console.log(items);

  return (
    <div className="d-flex">
      <div className="menuBar">
        <PanelMenu model={items} className="w-full md:w-25rem" />
      </div>
      <div>
        {/* <Main /> */}
        <GridEditor />
      </div>
    </div>
  );
}

export default Contact;
