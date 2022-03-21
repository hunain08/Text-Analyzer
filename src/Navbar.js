import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ALert from '../src/Alert'
import Toggle from './Toggle';
import './App.css'

export default function SearchAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          Text Analyzer
          </Typography>   
  <div className='align-right'></div><Toggle checked={props.checked} toggle={props.toggle} />       
          </Toolbar>
      </AppBar>
     <ALert checked={props.checked}/>
      </Box>
  );
}
