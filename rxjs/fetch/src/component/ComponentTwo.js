import React, { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

let count = 0;

const vendor$ = new BehaviorSubject(null);
const ComponentTwo = () => {
  const [state, setState] = useState();
  const VendorChangeService = {
    setVendor: (vendorId) => vendor$.next(vendorId),
    getVendor: () => vendor$.asObservable(),
  };
  const onChange = (e) => {
    VendorChangeService.setVendor(e.target.value);
  };

  //   console.log("outer", state);
  console.log(state, count);
  useEffect(() => {
    console.log("state", state);

    VendorChangeService.getVendor().subscribe((res) => {
      console.log("res", res);
      setState(res);
      count++;
    });
    if (state !== null) {
      console.log("stateIsNotNull", state);
    }
  }, [state]);
  return (
    <div>
      <select onChange={onChange}>
        <option>121</option>
        <option>122</option>
        <option>123</option>
        <option>124</option>
        <option>125</option>
      </select>
    </div>
  );
};

export default ComponentTwo;
