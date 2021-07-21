import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3000";

class AdminConsultaEdit extends React.Component {
  render() {
    return (
      <div className="container-fluid tudo">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>

        <div class="row">
          <aside className="aside_medico col-2 px-0 ">
            <p className="medico">
              <b>Médico</b>
            </p>
            <a href="#">
              <div className="box_selection_medico">
                <Link
                  className="selection_medico"
                  to={"/admin_marcar_consulta"}
                >
                  Marcar Consulta
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/admin_lista_utentes"}>
                  Lista de Utentes
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico ">
                <Link className="selection_medico" to={"/admin_utentes"}>
                  Editar Utente
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <span className="selection_medico">Gerir Atrasos</span>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/medico_sair"}>
                  Sair
                </Link>
              </div>
            </a>
          </aside>

          <div className="col-10 offset-2 ">
            <div className="row mb-5">
              <div className="text-right" id="logo_medico">
                <span id="CENTRO_DE_SADE_medico">CENTRO DE SAÚDE</span>
                <br />

                <div id="Sto_medico">
                  <span>Sátão</span>
                </div>
                <div className="administracao_medico">
                  <Link className=" btn-info btn_lt" to={"/Administrador"}>
                    Administrador
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FIM MENU ADMIN*/}

        {/* Footer */}
        <footer
          className="bg-light text-center text-lg-start csFooter"
          id="barra_fundo_baixo"
        >
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

export default AdminConsultaEdit;
