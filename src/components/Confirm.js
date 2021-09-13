import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Dialog } from 'material-ui';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Backend Setup Code Here//
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { 
            values: {firstname,lastname, email, address, occupation, city, bio}
        } = this.props;
        return (
            <MuiThemeProvider>
                <>
                <Dialog 
                 open 
                 fullWidth
                 maxWidth = 'sm' >
                   <AppBar title="Confirm User Data" /><br/>
                       <List>
                           <ListItem 
                                primaryText = "First Name"
                                secondaryText = {firstname}/>
                           <ListItem 
                                primaryText = "Last Name"
                                secondaryText = { lastname }/>
                           <ListItem 
                                primaryText = "Email Address"
                                secondaryText = { email }/>
                           <ListItem 
                                primaryText = "Address"
                                secondaryText = { address }/>
                           <ListItem 
                                primaryText = "Occupation"
                                secondaryText = { occupation }/>
                           <ListItem 
                                primaryText = "City"
                                secondaryText = { city }/>
                           <ListItem 
                                primaryText = "Bio"
                                secondaryText = { bio }/>
                        </List>
                        <br/>
                       <RaisedButton 
                        label = "Continue & Confirm"
                        primary = {true}
                        style = {style.button}
                        onClick = {this.continue}
                       />
                       <RaisedButton 
                        label = "Back"
                        primary = {false}
                        style = {style.button}
                        onClick = {this.back}
                       />
                  <br />
               </Dialog>
               </>
            </MuiThemeProvider>
           
        )
    }
}

const style = {
  button : {
      margin:'50px',
      
      
    //   paddingLeft:'50px',
      marginRight:''

  }
}

export default Confirm;
