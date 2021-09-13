import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Dialog } from 'material-ui';

export class Formuser extends Component {
    continue = e => {
        e.preventDefault();
        //Backend Setup Code Here//
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                <Dialog 
                 open 
                 fullWidth
                 maxWidth = 'sm' >
               <React.Fragment>
                   <AppBar title="Enter User Details" /><br/>
                       <TextField placeholder="Enter First Name"
                            //onChange ={handleChange('firstname')}
                            defaultValue = {values.firstName} 
                           // margin = "normal"
                            fullWidth/> 
                       <br />
                       <TextField  placeholder="Enter Last Name"
                            label="Last Name"
                            //onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            // margin="normal"
                            fullWidth/> 
                       <br />
                       <TextField placeholder="Enter Email Address"
                            hintStyle="fontsize:2rem"
                            label="Email"
                            //onChange={handleChange('email')}
                            defaultValue={values.email}
                            // margin="normal"
                            fullWidth /> 
                       <br />
                       <TextField placeholder="Enter Address"
                            label="Address"
                            //onChange={handleChange('address')}
                            defaultValue={values.address}
                            // margin="normal"
                            fullWidth /> 
                       <br />
                       <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {style.button}
                        onClick = {this.continue}
                       />
                
               </React.Fragment>
               </Dialog>
               </>
            </MuiThemeProvider>
           
        );
    }
}

const style = {
  button : {
      margin:'50px',
      width:'170px',
      
    //   paddingLeft:'50px',
      marginRight:''

  }
};

export default Formuser;
