import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class ConsultaTemporaria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camputente_temp: 0,
      camptipo_consulta_temp: "",
      camphora_consulta_temp: 0,
      campdia_consulta_temp: "",
      camputente_prioritario_temp: 0,
      campemail_temp: "",
      camptelefone_temp: 0,
    };
  }
  render() {
    return (
      <div>
        <Link
          type="button"
          id="btn_submit_bt"
          class="btn btn-outline-primary"
          to="../login"
        >
          <BsChevronLeft />
          &nbsp;Voltar
        </Link>
        <br></br>
        <div className="container-utente">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <img
              src="img/temporaria.png"
              className="rounded_temp"
              alt="Temporária"
            />
            <h4 className="texto_temp">Conta temporária</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nº de Utente de Saúde</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={2110919303}
                    id="numero"
                    value={this.state.camputente_temp}
                    onChange={(value) =>
                      this.setState({ camputente_temp: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Tipo de Consulta</label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select"
                      id="inputGroupSelect03"
                      value={this.state.camptipo_consulta_temp}
                      onChange={(value) =>
                        this.setState({
                          camptipo_consulta_temp: value.target.value,
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
                  <label htmlFor="text">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="olamundo123@gmail.com"
                    id="email"
                    value={this.state.campemail_temp}
                    onChange={(value) =>
                      this.setState({ campemail_temp: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Dia da Consulta</label>
                  <input
                    type="date"
                    id="data"
                    name="datanasc"
                    value={this.state.campdia_consulta_temp}
                    onChange={(value) =>
                      this.setState({
                        campdia_consulta_temp: value.target.value,
                      })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="col">
              <form>
                <div className="form-group">
                  <label htmlFor="text">Número de telefone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+351-917739123"
                    id="numerotel"
                    value={this.state.camptelefone_temp}
                    onChange={(value) =>
                      this.setState({ camptelefone_temp: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Hora:</label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="15:30"
                    id="time"
                    value={this.state.camphora_consulta_temp}
                    onChange={(value) =>
                      this.setState({
                        camphora_consulta_temp: value.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Utente prioritário?</label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select"
                      id="inputGroupSelect03"
                      value={this.state.camputente_prioritario_temp}
                      onChange={(value) =>
                        this.setState({
                          camputente_prioritario_temp: value.target.value,
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
                </div>
              </form>
            </div>
          </div>
        </div>
        <br></br>
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
      </div>
    );
  }
  sendSave() {
    if (this.state.camputente_temp === 0) {
      alert("Inserir Número de Utente!");
    } else if (this.state.camptipo_consulta_temp === "") {
      alert("Seleciona Tipo Consulta!");
    } else if (this.state.camphora_consulta === 0) {
      alert("Seleciona Hora para a Consulta!");
    } else if (this.state.campdia_consulta_temp === 0) {
      alert("Seleciona Dia para a Consulta!");
    } else if (this.state.camputente_prioritario_temp === 0) {
      alert("Seleciona Prioridade!");
    } else if (this.state.campemail_temp === "") {
      alert("Inserir Email!");
    } else if (this.state.campemail_temp === 0) {
      alert("Inserir Telefone!");
    } else {
      const baseUrl = "http://localhost:3000/consulta/create";
      const datapost = {
        n_utente_saude: this.state.camputente_temp,
        tipo_consulta: this.state.camptipo_consulta_temp,
        hora_consulta: this.state.camphora_consulta_temp,
        dia_consulta: this.state.campdia_consulta_temp,
        utente_prioritario: this.state.camputente_prioritario_temp,
        email: this.state.campemail_temp,
        telefone: this.state.camptelefone_temp,
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
export default ConsultaTemporaria;
