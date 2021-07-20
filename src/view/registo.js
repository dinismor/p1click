import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class Registar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campnome: "",
      campapelido: "",
      campemail: "",
      campdatanasc: "",
      camppassword: "",
      camplocalidade: "",
      campcodigopostal: "",
      camptelefone: 0,
      campprioritario: 0,
      campautonomo: 0,
      campnutentesaude: 0,
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
        {/* Registar */}
        <div className="container">
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
                  <label htmlFor="nome">Código Postal</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder={2110919303}
                    id="codpost"
                    value={this.state.campcodigopostal}
                    onChange={(value) =>
                      this.setState({ campcodigopostal: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Nº de Utente de Saúde</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={2110919303}
                    id="numero"
                    value={this.state.campnutentesaude}
                    onChange={(value) =>
                      this.setState({ campnutentesaude: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Data Nascimento</label>
                  <input
                    type="date"
                    id="data"
                    name="datanasc"
                    value={this.state.campdatanasc}
                    onChange={(value) =>
                      this.setState({ campdatanasc: value.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="col">
              <form className="registar">
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
                <br></br>
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
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="type">Autónomo?</label>
                  <div className="input-group mb-3">
                    <select
                      className="custom-select"
                      id="inputGroupSelect03"
                      onChange={(value) =>
                        this.setState({ campautonomo: value.target.value })
                      }
                    >
                      <option value={"true"}>Sim</option>
                      <option value={"false"}>Não</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Palavra-passe</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="********"
                    id="pass"
                    value={this.state.camppassword}
                    onChange={(value) =>
                      this.setState({ camppassword: value.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">Confirmar Palavra-passe</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="********"
                    id="cpass"
                    value={this.state.camppassword}
                    onChange={(value) =>
                      this.setState({ camppassword: value.target.value })
                    }
                  />
                </div>
                <br></br>
                <button
                  type="button"
                  id="btn_submit"
                  className="btn btn-primary btn-lg"
                  onClick={() => this.sendSave()}
                >
                  Registar
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Fim de Registar */}
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
    if (this.state.campnome === "") {
      alert("Inserir Nome!");
    } else if (this.state.campapelido === "") {
      alert("Inserir Apelido!");
    } else if (this.state.campemail === "") {
      alert("Inserir Email!");
    } else if (this.state.camppassword === "") {
      alert("Inserir Password!");
    } else if (this.state.campdatanasc === 0) {
      alert("Inserir Data Nascimento!");
    } else if (this.state.camplocalidade === "") {
      alert("Inserir Localidade!");
    } else if (this.state.campcodigopostal === 0) {
      alert("Inserir Código Postal!");
    } else if (this.state.camptelefone === 0) {
      alert("Inserir Telefone!");
    } else if (this.state.camputente_prioritario === 0) {
      alert("Inserir Prioridade!");
    } else if (this.state.campautonomo === 0) {
      alert("Inserir Autonomia!");
    } else if (this.state.campnutentesaude === 0) {
      alert("Inserir Número de utente de saúde!");
    } else {
      const baseUrl = "http://localhost:3000/utente/registo_create";
      const datapost = {
        nome: this.state.campnome,
        apelido: this.state.campapelido,
        email: this.state.campemail,
        password: this.state.camppassword,
        data_nascimento: this.state.campcodigopostal,
        localidade: this.state.camplocalidade,
        codigo_postal: this.state.campcodigopostal,
        telefone: this.state.camptelefone,
        prioritario: this.state.campprioritario,
        autonomo: this.state.campautonomo,
        nutentesaude: this.state.campnutentesaude,
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
export default Registar;
