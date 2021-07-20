import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class ConsultaUtente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camputente: 0,
      camptipo_consulta: "",
      camphora_consulta: 0,
      campdia_consulta: "",
      camputente_prioritario: 0,
      campemail_temp: "",
      camptelefone_temp: 0,
    };
  }
  render() {
    return (
      <div>
        {/*ELIMINAR NAVBAR PARA NAO DUPLICAR AO INTERAGIR*/}
        {/* Formulário marcar consulta */}
        <Link
          type="button"
          id="btn_submit_bt"
          class="btn btn-primary"
          to="../menu_consultas"
        >
          <BsChevronLeft />
          &nbsp;Voltar
        </Link>
        <div className="container-utente">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <img src="img/icon_utente.png" className="rounded" alt="Utente" />
            <p>José Pinheiro</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
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
                        this.setState({ camptipo_consulta: value.target.value })
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
export default ConsultaUtente;
