import React, { Component } from "react";
import {Container,Row, Col} from "react-bootstrap"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getCountryList from './api/getCountryList';
import SummaryPage from "./SummaryPage";
import FormHelperText from '@material-ui/core/FormHelperText';

export default class ComponentMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          "name":'',
          "age":'',
          "country":'',
          "sex":'',
          "isValidAge":true,
          "isValidCountry":'',
          "isValidName":true,
          "isValidSex":'',
          "countries":["Loading"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCountryList = this.handleCountryList.bind(this);
        this.handleApplyButton = this.handleApplyButton.bind(this);
        this.getValidity = this.getValidity.bind(this);
        this.checkAgeValidity = this.checkAgeValidity.bind(this);
        this.checkCountryValidity = this.checkCountryValidity.bind(this);
        this.checkNameValidity = this.checkNameValidity.bind(this);
        this.checkSexValidity = this.checkSexValidity.bind(this);
      }

    getValidity(){
      if(this.state.name==''||this.state.age==''||this.state.sex==''||this.state.country==''){
        return false;
      }
      else return this.state.isValidName&&this.state.isValidAge&&this.state.isValidSex&&this.state.isValidCountry
    }
    checkNameValidity(){
      if(this.state.name==''||this.state.name==null||typeof this.state.name=='undefined'){
        this.setState({"isValidName":false})
      }
      else{
        this.setState({"isValidName":true})
      }
    }
    checkCountryValidity(){
      var country = this.state.country;
      if(typeof country!='undefined'&&null!=country&&country!=""){
        this.setState({"isValidCountry":true})
      }
      else{
        this.setState({"isValidCountry":false})
      }
    }
    checkSexValidity(){
      var sex = this.state.sex;
      if(typeof sex!='undefined'&&null!=sex&&sex!=""){
        this.setState({"isValidSex":true})
      }
      else{
        this.setState({"isValidSex":false})
      }
    }
    checkAgeValidity(){
      var age = this.state.age;
      if(age>0 && age<130){
        this.setState({"isValidAge":true})
      }
      else{
        this.setState({"isValidAge":false})
      }
    }
    handleChange(e){
      if(e.target.name=="sex"){
        this.setState({"sex":e.target.value},this.checkSexValidity)
      }
      else if(e.target.name=="name"){
        this.setState({"name":e.target.value},this.checkNameValidity)  
      }
      else if(e.target.name=="age"){
        this.setState({"age":e.target.value},this.checkAgeValidity)  
      }
      else if(e.target.name=="country"){
        this.setState({"country":e.target.value},this.checkCountryValidity)
      }
    }
    handleApplyButton(){
      console.log("saving info")
      console.log(this.state)
      this.setState({"summary":true})
    }
    handleCountryList(data){
      this.setState({"countries":data})
    }
    componentDidMount(){
         getCountryList(this.handleCountryList);
    }
    render(){
        return(<>{this.state.summary?<SummaryPage data={this.state}/>:
        <Container className="component-menu" fluid="true">
          <Row className="container-row">
            <FormControl required component="fieldset">
              {this.state.isValidName?<TextField required id="name" label="Name" onChange={this.handleChange} name="name" value={this.state.name}/>:<TextField required error id="name-error" name="name" value={this.state.name} helperText="Name can only contain alphabets, -, . and ," onChange={this.handleChange} />}
            </FormControl>
          </Row>
          <Row className="container-row">
          <FormControl required component="fieldset">
            <FormLabel component="legend">Sex</FormLabel>
              <RadioGroup row aria-label="sex" name="sex" value={this.state.sex} onChange={this.handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
          </FormControl>
          </Row>
          <Row className="container-row">
            <FormControl  required component="fieldset">
              {this.state.isValidAge?<TextField id="age" required label="Age" name="age" onChange={this.handleChange} value={this.state.age} />:<TextField error required id="age-error" name="age" value={this.state.age} helperText="Required. Age can only contain numbers between 1-130" onChange={this.handleChange} />}
            </FormControl>
          </Row>
          <Row className="container-row">
          <FormControl required>
          <FormLabel component="fieldset">Country</FormLabel>
              <Select
                labelId="country-label"
                id="country-label"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              >
            {this.state.countries.map((name) => (
              <MenuItem key={name} value={name} >
                {name}
              </MenuItem>
            ))}
              </Select>
          </FormControl>
          </Row>
          <Row className="container-row">
            <Button disabled={!this.getValidity()} name="apply" variant="contained" color="primary" onClick={this.handleApplyButton  }>
              Apply
            </Button>
          </Row>
          
            </Container>}</>);
    }
}