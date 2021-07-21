import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class AdminListarConsultas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consulta_lista: [],
    };
  }
  componentDidMount() {
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
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico">
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
        <div className="row">
          <div className="col-10 offset-2 ">
            <Link
              type="button"
              id="btn_submit_bt_"
              class="btn btn-outline-primary"
              to="../admin_end_consulta"
            >
              <BsChevronLeft />
              &nbsp;Voltar
            </Link>
            <div className="shadow-sm_admin p-3 mb-5">15 minutos</div>
            {/* ADICIONAR TEMPO DE ESPERA */}
            <table className="table table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tipo Consulta</th>
                  <th scope="col">Dia Consulta</th>
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
    );
  }

  loadFillData() {
    return this.state.consulta_lista.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.tipo_consulta}</td>
          <td>{data.dia_consulta}</td>
        </tr>
      );
    });
  }
}
export default AdminListarConsultas;
