import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import { Link } from "react-router-dom";
import navbar_render from "./navbar_render";

import axios from "axios";

class PerfilUtente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      utente_lista: [],
    };
  }
  componentDidMount() {
    this.loadUtente();
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

  loadFillData() {
    return this.state.utente_lista.map((data, index) => {
      return (
        <Link
          type="button"
          className="btn btn-primary text-left"
          id="btn_submit1"
          to={"/alterar_password/" + data.id}
        >
          <span className="csSpanBut">Alterar palavra-passe</span>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        {/* Formulário */}
        <main className="perfil_utente">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <p style={{ paddingLeft: "10px" }}>
                  <br/> <br/> <br/>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="container">
                  <div className="card_isolate_nome">
                    <div className="card col-sm-12" id="shalow">
                      <div className="card-body_">
                        <img
                          className="csImagePerfil"
                          src="img/icon_utente.png"
                        />
                        <br></br>
                        <div className="csBox">
                          <div className="container">
                            <div className="row">
                              <div className="col-2 " />
                              <div className="col-3" id="n_ut">
                                <p className="csTextoT">Nome</p>
                                <p className="csTextoL">José Pinheiro</p>
                                <p className="csTextoT">Data de Nascimento</p>
                                <p className="csTextoL">21-10-1930</p>
                              </div>
                              <div className="col-2 " id="ut" />
                              <div className="col-3">
                                <p className="csTextoT">Nº Utente de Saúde</p>
                                <p className="csTextoL">211019303</p>
                                <p className="csTextoT">Morada</p>
                                <p className="csTextoL">Rua 345</p>
                              </div>
                              <div className="col-2" />
                            </div>
                          </div>
                          <div className="csBotaoPerfil">
                            <div className="container">
                              <div className="row">
                                <div className="col-3" />
                                <div className="col-6">
                                  <Link
                                    type="button"
                                    className="btn btn-primary"
                                    id="btn_submit"
                                    to={"/editar_perfil/"}
                                  >
                                    Editar perfil
                                  </Link>
                                  <br></br>
                                  <br></br>
                                </div>
                                <div className="col-3" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="now">
              <div className="row">
                <div className="col-lg-1 mx-3" id="btns_ut"></div>
                <div className="col-lg-4">
                  <Link
                    type="button"
                    className="btn btn-primary text-left"
                    id="btn_submit1"
                    to={"/alterar_password/"}
                  >
                    <span className="csSpanBut">Alterar palavra-passe</span>
                  </Link>
                </div>
                <div className="col-lg-1 mx-3"></div>
                <div className="col-lg-4">
                  <Link
                    type="button"
                    className="btn btn-primary text-left"
                    id="btn_submit1"
                    to={"/qrcode"}
                  >
                    <span className="csSpanBut">Ver QR Code</span>
                  </Link>
                </div>
                <div className="col-lg-12">&nbsp;</div>
              </div>
              <div className="col-lg-2" />
            </div>
          </div>
        </main>
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
}

export default PerfilUtente;
