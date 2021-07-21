import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import navbar_render from "./navbar_render";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class AlterarPassword extends React.Component {
  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        <div className="container-fluid">
          <br></br>
          <div className="container-utente">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <img src="img/icon_utente.png" className="rounded" alt="Utente" />
              <p>José Pinheiro</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4">
              <br></br>
              <div className="form-group">
                <label htmlFor="text">Palavra-passe atual</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="text">Nova Palavra-passe</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="repetir_pw">
                <br></br>
                <div className="form-group">
                  <label htmlFor="text">Repetir palavra-passe</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <br></br>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={() => this.sendSave()}
                  id="btn_submit"
                >
                  Guardar
                </button>
                {/* FAZER UPDATE DA PASSWORD */}
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
        {/* Footer */}
      </div>
    );
  }
}

export default AlterarPassword;
