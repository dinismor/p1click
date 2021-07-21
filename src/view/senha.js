import React, { Component } from "react";
/*import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../view/auth.service";*/
import navbar_render from "./navbar_render";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class senha extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        {/* IMAGEM */}
        <div>
          <img
            src="img/Tempo_espera.png"
            className="imagem_tempo_espera"
            alt="Tempo_espera"
          />
          <img src="img/seta.png" className="icon_seta" alt="seta_para_tras" />
          <div className="Menu">
            <div className="card-columns">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tempo de espera</h5>
                  <p className="card-text">15 min</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Consultas à sua frente</h5>
                  <p className="card-text">3</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Nº da sua senha</h5>
                  <p className="card-text">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default senha;
