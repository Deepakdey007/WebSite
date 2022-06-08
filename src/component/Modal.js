import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Paper} from '@mui/material';
import Login from './Login';
import SignUp from "./SignUp";

  
export default function Modal() {

   const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const paStyled={width:520, margin:"20px auto", height:"auto"}
  
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }


  return (
    <>
      <div className="/">
          <div>
            <div className="modal fade"
              id="staticBackdrop"data-bs-backdrop="static"
              data-bs-keyboard="false"tabIndex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                  <Paper style={paStyled}>
                   <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                   <Tab label="Sign-In"  />
                   <Tab label="Sign-Up" />
                   </Tabs>
                   <TabPanel value={value} index={0}>
                      <Login />
                   </TabPanel>
                   <TabPanel value={value} index={1}>
                   <SignUp />
                   </TabPanel>
                   </Paper>
                  </div>
                  </div>
              </div>
          </div> 
          </div>
        </div> 
      
           
    </>
  );
}