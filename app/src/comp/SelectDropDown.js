import React from 'react';
// import {useState} from 'reinspect';
import Select from 'react-select';
import classes from './selectdropdown.module.css';
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
        <div className = {classes.DropDown}>
            <label> Choose todo priority:</label>
            <Select
                width = '50px'
                value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
                onChange={({ value }) => updateDropDown(value)}
                options = {options}
            />

        </div>    
    )
}

export default SelectDropDown