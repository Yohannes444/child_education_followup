import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const TableDropdownColumn = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select value={selectedOption} onChange={handleSelectChange}>
     { console.log(props.options)}
      {props.options.map((option) => {
        
        return <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      })}
    </Select>
  );
};
