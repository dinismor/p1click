import { Component } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class AdminUtentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utente_lista: [],
    };
  }
  componentDidMount() {
    this.loadUtente();
  }

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
            <a>
              <div className="box_selection_medico">
                <Link
                  className="selection_medico"
                  to={"/admin_marcar_consulta"}
                >
                  Marcar Consulta
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/admin_lista_utentes"}>
                  Lista de Utentes
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/admin_marcar_consulta"}>
                  Editar Utente
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <span className="selection_medico">Gerir Atrasos</span>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/medico_sair"}>
                  Sair
                </Link>
                {/* TESTE DE PÁGINA */}
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

        <div className="Menu_listaadmin">
          <div className="row">
            <div className="col-10 offset-2 ">
              <table className="table table-striped">
                <thead className="table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Primeiro Nome</th>
                    <th scope="col">Apelido</th>
                    <th scope="col">Ações</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.loadFillData()}</tbody>
              </table>
              <br></br>
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  loadFillData() {
    return this.state.utente_lista.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.nome}</td>
          <td>{data.apelido}</td>
          <td>
            <Link
              className="btn_fiv btn-info"
              to={"/admin_editar_utente/" + data.id}
            >
              Editar
            </Link>
          </td>
        </tr>
      );
    });
  }

  loadUtente() {
    const url = "http://localhost:3000/utente/list_utente";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ utente_lista: data });
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}

export default AdminUtentes;
