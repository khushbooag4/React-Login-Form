import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Dialog } from 'material-ui';

export class Formpersonal extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    //For the Back Button
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values,handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                <Dialog 
                 open 
                 fullWidth
                 maxWidth = 'sm'>
               <React.Fragment>
                   <AppBar title="Enter User Details" /><br />
                       <TextField placeholder="Enter Occupation"
                        floatingLabelText = "Occupation"
                 
                       defaultValue = {values.occupation} /> 
                       <br />
                       <TextField placeholder="Enter City"
                       floatingLabelText = "City"
                       defaultValue = {values.city} /> 
                       <br />
                       <TextField placeholder="Enter Your Bio"
                       floatingLabelText = "Bio"
                      
                       defaultValue = {values.bio} /> 
                       <br />
                       <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style = {style.button}
                        onClick = {this.continue}
                       />
                       <RaisedButton
                            label = "Back"
                            secondary={true}
                            style = {style.button}
                            onClick={this.back}
                        />
                   
               </React.Fragment>
               </Dialog>
               </>
            </MuiThemeProvider>
           
        )
    }
}

const style = {
  button : {
      margin:'50px',
      width:'150px'
  }
}

export default Formpersonal;
