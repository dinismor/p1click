import React, { Component } from "react";
import { Link } from "react-router-dom";
//import MetaTags from "react-meta-tags";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";

class AdminListaUtentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utente_lista: [],
    };
  }
  componentDidMount() {
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

  render() {
    return (
      <div className="container-fluid tudo">


        <div class="row">
          <aside className="aside_medico col-2 px-0 ">
            <p className="medico">
              <b>Médico</b>
            </p>
            <a href="#">
              <div className="box_selection_medico  ">
                <Link
                  className="selection_medico"
                  to={"/admin_marcar_consulta"}
                >
                  Marcar Consulta
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selected_medico ">
                <Link className="selected_medico" to={"/admin_lista_utentes"}>
                  Lista de Utentes
                </Link>{" "}
                {/* CLICAR DUAS VEZES PARA VER PÁGINA POR CAUSA DE PÁGINA TESTE NA NAVBAR SAIR */}
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico ">
                <span className="selection_medico">Editar Utente</span>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico ">
                <span className="selection_medico">Gerir Atrasos</span>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/admin_end_consulta"}>
                  Sair
                </Link>{" "}
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
                <span className="administracao_medico">Administração</span>
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
          </div>
        </div>
      </div>
    );
  }

  loadFillData() {
    return this.state.utente_lista.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id_utente}</td>
          <td>{data.nome}</td>
          <td>{data.apelido}</td>
          <td>
            <Link className="btn_lt btn-warning" to={"/admin_marcar_consulta"}>
              Marcar
            </Link>
            <Link
              className="btn_lt btn-info"
              to={"/admin_lista_consulta_edit_delete"}
            >
              Visualizar
            </Link>
            <Link
              className="btn_lt btn-danger"
              to={"/admin_editar_consulta/" + "data.id_utente"}
            >
              Eliminar
            </Link>
          </td>
          {/* OVERLAY SE DESEJA ELIMINAR UTENTE*/}
          <td></td>
          {/*<td>{data.email}</td>
                    <td>{data.data_nascimento}</td>
                     <td>{data.localidade}</td>
                     <td>{data.codigo_postal}</td>
                     <td>{data.telefone}</td>
                     <td>{data.prioritario}</td>
                     <td>{data.autonomo}</td>
                     <td>{data.n_utente_saude}</td>*/}
        </tr>
      );
    });
  }
}

export default AdminListaUtentes;
