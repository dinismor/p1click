import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import { Link } from "react-router-dom";

class MenuConsultas extends React.Component {
  render() {
    return (
      <div>
        {/*ELIMINAR NAVBAR PARA NAO DUPLICAR AO INTERAGIR*/}
        {/* Formulário */}
        <div>
          <img
            src="img/imagem_inicial.png"
            className="img-fluid_"
            alt="Médico"
          />
          <br></br>
          <br></br>
          <Link
            type="button"
            id="btn_submit_"
            className="btn btn-primary btn-lg"
            to="/lista_consultas"
          >
            Lista de Consultas
          </Link>
          {/*vai para a lista de consulta-confirmação de cancelar consulta (pediatira, vacinação, consulta geral)*/}
          <Link
            type="button"
            id="btn_submit_"
            className="btn btn-primary btn-lg"
            to="/consulta_utente"
          >
            Nova Consulta
          </Link>
          {/*vai para a marcar consulta utente */}
          <Link
            type="button"
            id="btn_submit_"
            className="btn btn-primary btn-lg"
            to="../historico"
          >
            Histórico de Consulta
          </Link>{" "}
          {/*vai para o histórico das consultas*/}
        </div>
        <br></br>
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
        {/* Footer */}
      </div>
    );
  }
}

export default MenuConsultas;
