import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './App.css'
export default function SwitchesSize(props) {
 
  
  return (
    
    <FormGroup>
      <FormControlLabel
        control={<Switch size="small" checked={props.checked}  onChange={props.toggle} className="align-right"  color={props.checked ? "secondary": "primary"}/>}
        label = {props.checked ? " Dark Mode" :" Light Mode" } color = "#fff"
      />
    </FormGroup>
    
    
  );
}
