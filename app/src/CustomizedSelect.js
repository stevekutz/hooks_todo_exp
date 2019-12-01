// VS Code reports error: 'type arguments' can only be used in a .ts file.

// import React, { Component } from "react";
// import Select from "react-select";

// const State = {
//     ignoreCase: true,
//     ignoreAccents: true,
//     trim: true,
//     matchFrom: true
//   };
//   const filterOptions = (candidate, input) => {
//     if (input) {
//       return candidate.value === customOptions[1].value;
//     }
//     return true;
//   };
  
//   const selectOptions = [
//     { value: 'low', label: "Low" },
//     { value: 'medium', label: "Medium" },
//     { value: 'high', label: "High"}
// ];

//   const customOptions = [
//     {
//       value: 'custom',
//       label: 'Seeeeelect Priority Level',
//     },
//     ...selectOptions,
//   ];

//   export default class SelectCreateFilter extends Component<*, State> {
//     render() {
//       return (
//         <Select
//           defaultValue={customOptions[0]}
//           isClearable
//           isSearchable
//           options={customOptions}
//           filterOption={filterOptions}
//         />
//       );
//     }
//   }

// <Select
// width = '50px'
// value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
// getOptionLabel={({ label }) => label}
// getOptionValue={({ value }) => value}
// onChange={({ value }) => updateDropDown(value)}
// options = {options}
// />