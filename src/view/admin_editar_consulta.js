import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3000";

class AdminConsultaEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataconsulta: {},
      camputente: 0,
      camptipo_consulta: "",
      camphora_consulta: 0,
      campdia_consulta: "",
      camputente_prioritario: 0,
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    const url = baseUrl + "/consulta/get/" + id;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          this.setState({
            dataconsulta: data,
            camputente: data.camputente,
            camptipo_consulta: data.camptipo_consulta,
            camphora_consulta: data.hora_consulta,
            campdia_consulta: data.dia_consulta,
            camputente_prioritario: data.utente_prioritario,
          });
          console.log(
            JSON.stringify(
              data.camptipo_consulta,
              data.hora_consulta,
              data.dia_consulta,
              data.utente_prioritario
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
        {/* Formulário consulta*/}
        <div className="container">
          <div className="col-10 offset-2">
            <div className="row mb-5">
              <div className="col">
                <form>
                  <br></br>
                  
                  <div className="form-group">
                    <label htmlFor="text">Nº de Utente de Saúde</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={2110919303}
                      value={this.state.camputente}
                      onChange={(value) =>
                        this.setState({
                          camputente: value.target.value,
                        })
                      }
                      id="numero"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Tipo de Consulta</label>
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        id="inputGroupSelect03"
                        onChange={(value) =>
                          this.setState({
                            camptipo_consulta: value.target.value,
                          })
                        }
                      >
                        <option value={"Consulta geral"}>Consulta geral</option>
                        <option value={"Vacinação"}>Vacinação</option>
                        <option value={"Curativo"}>Curativo</option>
                      </select>
                    </div>
                  </div>
                 
                  <div className="form-group">
                  <label htmlFor="type">Data da Consulta</label>
                    <input
                      type="date"
                      id="data"
                      name="dataconsulta"
                      value={this.state.campdia_consulta}
                      onChange={(value) =>
                        this.setState({ campdia_consulta: value.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="time">Hora:</label>
                    <input
                      type="time"
                      className="form-control"
                      placeholder="15:30"
                      id="time"
                      value={this.state.camphora_consulta}
                      onChange={(value) =>
                        this.setState({ camphora_consulta: value.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Utente prioritário?</label>
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        id="inputGroupSelect03"
                        onChange={(value) =>
                          this.setState({
                            camputente_prioritario: value.target.value,
                          })
                        }
                      >
                        <option value={"true"}>Sim</option>
                        <option value={"false"}>Não</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn_editaradmin btn-primary btn-lg"
                      onClick={() => this.sendUpdate()}
                    >
                      Editar consulta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

  sendUpdate() {
    //id
    let id = this.props.match.params.id;
    // urlbackend
    const url = "http://localhost:3000/consulta/update/" + id;
    const datapost = {
      n_utente_saude: this.state.camputente,
      tipo_consulta: this.state.camptipo_consulta,
      hora_consulta: this.state.camphora_consulta,
      dia_consulta: this.state.campdia_consulta,
      utente_prioritario: this.state.camputente_prioritario,
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

export default AdminConsultaEdit;
