import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
//import MetaTags from "react-meta-tags";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class AdminConsultaEditDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consulta_lista: [],
    };
  }
  componentDidMount() {
    this.loadConsulta();
  }

  render() {
    return (
      <div className="container-fluid tudo">
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
                  </Link>{" "}
                  {/* CLICAR DUAS VEZES PARA VER PÁGINA POR CAUSA DE PÁGINA TESTE NA NAVBAR SAIR */}
                </div>
              </a>

              <a href="#">
                <div className="box_selection_medico">
                  <span className="selection_medico">Editar Utente</span>
                </div>
              </a>

              <a href="#">
                <div className="box_selection_medico">
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
          {/* FIM MENU ADMIN*/}
          <div className="col-10 offset-2 ">
            <div className="row mb-5">
              <div className="shadow-sm_admin p-3 mb-5">15 minutos</div>{" "}
              {/* ADICIONAR TEMPO DE ESPERA */}
              <table className="table table-striped">
                <thead className="table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tipo Consulta</th>
                    <th scope="col">Dia Consulta</th>
                    <th scope="col">Hora Consulta</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.loadFillData()}</tbody>
              </table>
            </div>
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
      </div>
    );
  }

  loadFillData() {
    return this.state.consulta_lista.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id_consulta}</td>
          <td>{data.tipo_consulta}</td>
          <td>{data.dia_consulta}</td>
          <td>{data.hora_consulta}</td>
          <Link
            className="btn_ btn-info"
            to={"/admin_editar_consulta/" + data.id_consulta}
          >
            Editar
          </Link>

          <button
            className="btn_ btn-danger"
            onClick={() => this.onDelete(data.id_consulta)}
          >
            Eliminar
          </button>
        </tr>
      );
    });
  }

  loadConsulta() {
    const url = "http://localhost:3000/consulta/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ consulta_lista: data });
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  onDelete(id) {
    Swal.fire({
      title: "Pretende eliminar a Consulta?",
      text: "No final da operação a consulta será definitivamente cancelada!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelada", "A sua consulta continua marcada", "error");
      }
    });
  }
  sendDelete(id_consulta) {
    // url do backend
    const baseUrl = "http://localhost:3000/consulta/delete";
    // network
    axios
      .post(baseUrl, {
        id: id_consulta,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Eliminada", "A sua consulta foi cancelada.", "success");
          this.loadConsulta();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}

export default AdminConsultaEditDelete;
