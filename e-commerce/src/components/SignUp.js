import React,{ useEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { SelectButton } from 'primereact/selectbutton';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";

function SignUp() {
    
    const options = ['Male', 'Female'];
    const [value, setValue] = useState(options[0]);
    const [age, setAge] = useState("")
    const [date, setDate] = useState(null);
    const [selectedLanguages, setSelectedLanguages] = useState([])

    const languages = [
        {name: "Hindi", key: "H"},
        {name: "Telugu", key: "T"},
        {name: "English", key: "E"},
        {name: "Marathi", key: "M"}
    ]

    const updateValue =(value) => {
        let dob = new Date(value.value);        
        let time = Date.now()-dob.getTime();
        setAge(Math.trunc(time/(365*24*60*60*1000))+"years")
    }

    const languageChange = (e) => {
        let _selectedLanguage = [...selectedLanguages];

        if(e.checked){
            _selectedLanguage.push(e.value);
        }else{
            _selectedLanguage = _selectedLanguage.filter(() =>)
        }

    }

  return (
    <div className='form grid signUpDiv'>
    <div className="card flex justify-content-center field col-6">
        <span className="p-float-label ">
            <InputText id="firstName"/>
            <label htmlFor="firstName">First Name</label>
        </span>
    </div>
    <div className="card flex justify-content-center field col-6">
        <span className="p-float-label">
            <InputText id="lastName"/>
            <label htmlFor="lastName">Last Name</label>
        </span>
    </div>
    <div className="card flex justify-content-center field col-12">
        <span className="p-float-label">
            <InputText id="email"/>
            <label htmlFor="email">Email</label>
        </span>
    </div>
    <div className="card flex justify-content-center field col-6">
        <span className="p-float-label">
            <InputMask id="phoneNumber" mask="999 999 9999" />
            <label htmlFor="phoneNumber">Phone</label>
        </span>
    </div>
    <div className="card flex justify-content-centervfield col-6">
        <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
    </div>
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar inputId="birth_date" value={date} onChange={(e) => {updateValue(e)}} />
                <label htmlFor="birth_date">Birth Date</label>
            </span>
        </div>        
        <div className="card flex justify-content-center">
            <span>{age}</span>
        </div>
        <div className='card flex justify-content-center'>
            <div className='flex flex-column gap-3'>
                {languages.map((language) => {
                    return (
                        <div key={language.key} className='flex align-item-center'>
                            <Checkbox inputId={language.key} name={language} value={language} onChange={languageChange} checked={selectedLunguages.some((lang) => {lang.key === languages.key   })}/>
                            <label htmlFor={language.key} className=',ml-2'>{language.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SignUp