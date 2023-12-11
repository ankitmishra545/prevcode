import React, { useState,useRef, useEffect } from 'react'
import products from '../Data.json';
import MultiSelectComponent from '../MultiSelectComponent'
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from "@progress/kendo-react-buttons";

function Reviews() {

  const textAreaValueRef = useRef();
  const childtextAreaRef = useRef();
  const [data, setData] = useState(null);
  let [keys, setKeys] = useState([]);
  const [keyValue, setKeyValue] = useState("");  
  const [value, setValue] = useState("");
  const dropdownRef = useRef();

const divStyleInReview = {
  margin: "40px"
}

const submittingTextAreaValue = () => {
  setKeyValue("");
  setValue([]);
  setData(JSON.parse(textAreaValueRef.current.value));
}

useEffect(() => {
  data && setKeys(Object.keys(data[0]))
},[data])

const onChange = (event) => {
  setKeyValue(event.value);
  setValue(event.value)  
  console.log(dropdownRef)
}

const valueRender = (element, value) => {
  if (!value) {
    return element;
  }
  const children = [
    <span key={2}>&nbsp; {element.props.children}</span>,
  ];
  return React.cloneElement(
    element,
    {
      ...element.props,
    },
    children
  );
};

return (
  <div className='accordianDiv linksContent' style={{display:"flex", flexDirection: "column", justifyContent: "start", alignItems: "center"}}>
    <div>
      <div>
        <textarea rows={10} cols={90} ref={textAreaValueRef}/>
        <textarea  rows={6} cols={90} ref={childtextAreaRef}/>
      </div>      
      <div style={{width: "685px", display:"flex", justifyContent:"space-around", marginTop:"20px"}}>      
        <Button themeColor={"primary"}  onClick={() => {submittingTextAreaValue()}} >Submit</Button>
      </div>
    </div>
    <div style={{display: "flex"}}>
      <div style={divStyleInReview}>
        {data && <DropDownList
          data={keys}
          style={{width: "300px", height: "45px"}}
          onChange={onChange}
          value={value}
          valueRender={valueRender}
          ref={dropdownRef}
        />}
      </div>
      <div style={divStyleInReview}>
        {data && <MultiSelectComponent Products= {data} Keys= {keyValue} SelectedItem={childtextAreaRef.current.value}/>}
      </div>
    </div>
  </div>
)
}

export default Reviews