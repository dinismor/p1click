import axios from "axios";
import jwt from "jwt-decode";
import AuthService from "./auth.service";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarRender {
  handleLogout = async (e) => {
    e.preventDefault();
    AuthService.logout();
    window.location.href = "/login";
  };

  loadNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light csNav">
        <a className="navbar-brand" href="..">
          <span className="centrod">Centro de Saúde</span>{" "}
          <p className="p_nav">Sátão</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link class="nav-link" to="../">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="../menu_consultas">
                Marcações
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="../perfil_utente">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="../sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="../contactos">
                Contactos
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="../admin_inicial">
                {" "}
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" onClick={this.handleLogout}>
                {" "}
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default new NavbarRender();
