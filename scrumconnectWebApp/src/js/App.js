import React, {Component} from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button"
import {Container,Row,Col} from "react-bootstrap"
import ComponentMenu from "./components/ComponentMenu"
import Main from "./components/Main"
import {BrowserRouter} from "react-router-dom"
import MDFooter from "./components/MDFooter"
import NavBarMaterial from "./components/NavBarMaterial"
export default class App extends React.Component{
    render(){

        return (<>
                <Container className="main-container" fluid="true">
                <Row className="navbar-main-row" noGutters={true}><Col md={12}><NavBarMaterial /></Col></Row>
                <Row id="main-menu-layout" className="component-menu-row">
                    <Main /> 
                </Row>
                <Row className="footer-row"><MDFooter className="footer-main"/></Row>
                </Container>
                </>

        );
    }
}
