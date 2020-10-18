import App from "./js/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'
import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
const wrapper = document.getElementById("start");

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, wrapper);