import React from 'react';
// import {useState} from 'reinspect';
import Select from 'react-select';

const options = [
    { value: 'Low', label: "Low" },
    { value: 'Medium', label: "Medium" },
    { value: 'High', label: "High"}
];


const SelectDropDown = ({dropDownVal, setDropDownVal}) => {


    const updateDropDown = value => {
        setDropDownVal({...dropDownVal, selectedKey: value});  
    }


    return (
        <React.Fragment>
            <label> Choose todo priority:</label>
            <Select
                width = '50px'
                value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
                onChange={({ value }) => updateDropDown(value)}
                options = {options}
            />

        </React.Fragment>    
    )
}

export default SelectDropDown