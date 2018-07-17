import React from 'react';


const dropDownCountries = (props) => {

  return (
    <div>
      <select>{props.countries.map((item) =>
        <option key={item.name}>{item.name}</option>
      )
    })}</select></div>
  )
};

export default dropDownCountries;
