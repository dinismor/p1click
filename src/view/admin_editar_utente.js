import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:3000";

class AdminUtenteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datautente: {},
      campnome: "",
      campapelido: "",
      campemail: "",
      camplocalidade: "",
      camptelefone: 0,
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    const url = baseUrl + "/utente/get_utente/" + id;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          this.setState({
            datautente: data,
            campnome: data.campnome,
            campapelido: data.campapelido,
            campemail: data.campemail,
            camplocalidade: data.camplocalidade,
            camptelefone: data.camptelefone,
          });
          console.log(
            JSON.stringify(
              data.campnome,
              data.campapelido,
              data.campemail,
              data.camplocalidade,
              data.camptelefone
            )
          );
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      });
  }
  render() {
    return (
      <div>
        {/* Formulário Editar Utente*/}
        <br></br>
        <div className="container">
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
                  <Link
                    className="selection_medico"
                    to={"/admin_lista_utentes"}
                  >
                    Lista de Utentes
                  </Link>{" "}
                </div>
              </a>

              <a href="#">
                <div className="box_selected_medico ">
                  <Link className="selected_medico" to={"/admin_utentes"}>
                    Editar Utente
                  </Link>
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
                  <Link className="selection_medico" to={"/medico_sair"}>
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
                  <br/>

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
              <div className="row">
                <div className="col">
                  <form>
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="António"
                        id="nome"
                        value={this.state.campnome}
                        onChange={(value) =>
                          this.setState({ campnome: value.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nome">Apelido</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pinheiro"
                        id="apelido"
                        value={this.state.campapelido}
                        onChange={(value) =>
                          this.setState({ campapelido: value.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nome">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="pinheiro123@gmail.com"
                        id="email"
                        value={this.state.campemail}
                        onChange={(value) =>
                          this.setState({ campemail: value.target.value })
                        }
                      />
                    </div>
                  </form>
                </div>
                <div className="col">
                  <form>
                    <div className="form-group">
                      <label htmlFor="nome">Localidade</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Viseu"
                        id="localidade"
                        value={this.state.camplocalidade}
                        onChange={(value) =>
                          this.setState({ camplocalidade: value.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nome">Número de telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+351-917015201"
                        id="numtel"
                        value={this.state.camptelefone}
                        onChange={(value) =>
                          this.setState({ camptelefone: value.target.value })
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="btn_editaradmin btn-primary btn-lg"
                      onClick={() => this.sendUpdate()}
                    >
                      Editar Utente
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  sendUpdate() {
    //id
    let id = this.props.match.params.id;
    // urlbackend
    const url = "http://localhost:3000/utente/update_utente/" + id;
    const datapost = {
      nome: this.state.campnome,
      apelido: this.state.campapelido,
      email: this.state.campemail,
      localidade: this.state.camplocalidade,
      telefone: this.state.camptelefone,
    };
    axios
      .post(url, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}

export default AdminUtenteEdit;
