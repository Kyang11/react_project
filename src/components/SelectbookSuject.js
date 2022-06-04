import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topbook}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Select Book Subject" />}
    />
  );
}


const topbook = [
  { label: 'Think and Growth Rich'},
  { label: 'The Undefected Mind'},
  { label: 'The Mind of the Leader'},
  
];