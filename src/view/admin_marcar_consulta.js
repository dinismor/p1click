import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import axios from "axios";
//import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

class AdminMarcarConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camputente: 0,
      camptipo_consulta: "",
      camphora_consulta: 0,
      campdia_consulta: "",
      camputente_prioritario: 0
    };
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
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/admin_marcar_consulta"}>
                  Marcar Consulta
                </Link>
              </div>
            </a>

            <a href="#">
              <div className="box_selection_medico ">
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

          <div className="col-10 offset-2">
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
        <div className="container">
          <div className="col-10 offset-2">
            <div className="row mb-5">
              <div className="col">
                <form>
                  <div className="form-group">
                    <label htmlFor="text">Nº de Utente de Saúde</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={2110919303}
                      value={this.state.camputente}
                      onChange={(value) =>
                        this.setState({ camputente: value.target.value })
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
                  <br />
                  <div className="form-group">
                    <label htmlFor="nome">Dia da Consulta</label>
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
                  <br></br>
                  <br></br>
                </form>
              </div>
              <div className="col">
                <form>
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
                      id="btn_submit"
                      className="btn btn-primary btn-lg"
                      onClick={() => this.sendSave()}
                    >
                      Marcar consulta
                    </button>
                    <br></br>
                    <br></br>
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
  sendSave() {
    if (this.state.camputente === 0) {
      alert("Seleciona Utente!");
    } else if (this.state.camptipo_consulta === "") {
      alert("Seleciona Tipo Consulta!");
    } else if (this.state.camphora_consulta === 0) {
      alert("Seleciona Hora para a Consulta!");
    } else if (this.state.campdia_consulta === 0) {
      alert("Seleciona Dia para a Consulta!");
    } else if (this.state.camputente_prioritario === 0) {
      alert("Seleciona Prioridade!");
    } else {
      const baseUrl = "http://localhost:3000/consulta/create";
      const datapost = {
        n_utente_saude: this.state.camputente,
        tipo_consulta: this.state.camptipo_consulta,
        hora_consulta: this.state.camphora_consulta,
        dia_consulta: this.state.campdia_consulta,
        utente_prioritario: this.state.camputente_prioritario,
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
}
export default AdminMarcarConsulta;
