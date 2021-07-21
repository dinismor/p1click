import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import navbar_render from "./navbar_render";
import { Link } from "react-router-dom";
import axios from "axios";
import QRCod from "qrcode";

class QRCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.state = {
      author: localStorage.getItem("user") || "",
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  generateQrCode = async () => {
    try {
      var split = JSON.stringify(this.parseJwt(this.state.author)).split("{");
      var infoQRCode = split[1];
      var split2 = infoQRCode.split("}");
      var infoQRCode_2 = split2[0];
      var split3 = infoQRCode_2.split("\u0022");
      var n_utente = split3[3];
      console.log(n_utente);

      String = "Número de utente: " + n_utente;
      const qrc = await QRCod.toDataURL(String);
      this.setState({
        campqrcode: qrc,
      });
      console.log(this.state.campqrcode);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.generateQrCode();
    console.log(JSON.stringify(this.parseJwt(this.state.author)));
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        <div className="global-container">
          <div className="qr-form">
            <div className="body">
              <br></br>
              <br></br>
              <h6 className="titulo">O seu QRCode</h6>
              <img
                src={this.state.campqrcode}
                className="img-fluidqr"
                alt="QRCode"
              />
            </div>
          </div>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        {/* Footer */}
        <footer className="bg-light text-center text-lg-start csFooter">
          {/* Copyright */}
          <div className="text-light text-center p-3">
            powered by:
            <a className="text-light" href="#">
              por1click
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    );
  }
}

export default QRCode;
