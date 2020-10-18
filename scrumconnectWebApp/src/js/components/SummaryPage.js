import React, { Component } from "react";
import {Container,Row, Col} from "react-bootstrap";
import saveUserData from "./api/saveUserData"

export default class ComponentMenu extends React.Component {

    constructor(props) {
        super(props);
      }
    componentDidMount(){
        saveUserData(this.props.data)
        console.log(this.props.data);
    }
    render(){
        return(
            <Container>
                <Row>
                    <h2>Application Complete!</h2>
                </Row>
                <Row>
                    <p>{this.props.data.name+", Thank you for applying to UK Employment Exchange Program"}</p>
                </Row>
                <Row>
                    <p>You may close this window.</p>
                </Row>

            </Container>
        )
    }

}