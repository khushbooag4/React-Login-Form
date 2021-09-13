import React, { Component } from 'react';
import Formpersonal from './Formpersonal';
import Formuser from './Formuser';
import Confirm from './Confirm';
import Success from './Success';


export class Userform extends Component {
    // This stores the current state
    state = {
         step:1,
         firstname:'',
         lastname:'',
         email:'',
         address:'',
         occupation:'',
         city:'',
         bio:''
    };
    //This moves to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    //Previous Step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };
    //Handle fields change
    handlechange = input => e =>{
        this.setState({ [input]: e.target.value });
    };

    render() {
        const {step} = this.state;
        const { firstname,lastname,email,address,occupation,city,bio } = this.state;
        const values = {firstname,lastname,email,address,occupation,city,bio};
        switch(step){
            case 1:
                return (
                   
                <Formuser
                nextStep = {this.nextStep} 
                handlechange = {this.handlechange}
                values = {values} />
                    
                );
            case 2: 
              return (
                  <Formpersonal 
                  values = {values}
                  handleChange={this.handleChange}
                  nextStep = {this.nextStep}
                  prevStep = {this.prevStep}/>
              );
            case 3:
                return(
                  <Confirm
                   nextStep = {this.nextStep}
                  prevStep = {this.prevStep}
                  values = {values}
                  handleChange={this.handleChange} />

                );
            case 4:
                return <Success />;
            default:
                (console.log('Form Completed'))
        }
        
    }
}

export default Userform;
