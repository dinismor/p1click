import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";

class AdminEndConsulta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid tudo">
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
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/admin_lista_utentes"}>
                  Lista de Utentes
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <span className="selection_medico">Editar Utente</span>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/editar_tempo"}>
                  Gerir Atrasos
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/admin_end_consulta"}>
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
                <span className="administracao_medico">Administração</span>
              </div>
            </div>
          </div>
        </div>
        {/* FIM MENU ADMIN*/}
        <div className="Menu_listaadmin">
          <div className="row">
            <div className="col-10 offset-2 ">
              <table className="table table-striped">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Primeiro Nome</th>
                    <th scope="col">Apelido</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>António</td>
                    <td>Almeida</td>
                    <td>
                      <Link
                        className="btn_lt btn-info"
                        to={"/admin_listar_consultas"}
                      >
                        Visualizar
                      </Link>
                      <Link
                        className="btn_lt btn-success"
                        to={"/admin_editar_consulta/"}
                      >
                        Concluir
                      </Link>{" "}
                      {/* OVERLAY CONSULTA CONCLUÍDA*/}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Asdrúbal</td>
                    <td>Matos</td>
                    <td>
                      <Link
                        className="btn_lt btn-info"
                        to={"/admin_listar_consultas"}
                      >
                        Visualizar
                      </Link>
                      <Link
                        className="btn_lt btn-success"
                        to={"/admin_editar_consulta/"}
                      >
                        Concluir
                      </Link>{" "}
                      {/* OVERLAY CONSULTA CONCLUÍDA*/}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Alice</td>
                    <td>Fonseca</td>
                    <td>
                      <Link
                        className="btn_lt btn-info"
                        to={"/admin_lista_consulta_edit_delete"}
                      >
                        Visualizar
                      </Link>
                      <Link
                        className="btn_lt btn-success"
                        to={"/admin_editar_consulta/"}
                      >
                        Concluir
                      </Link>{" "}
                      {/* OVERLAY CONSULTA CONCLUÍDA*/}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminEndConsulta;
