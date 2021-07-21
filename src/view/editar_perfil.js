import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import navbar_render from "./navbar_render";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class EditarPerfil extends React.Component {
  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        {/* Formulário */}
        <main className="container-fluid">
          <div className="row">
            <div
              className="col-md-12"
              style={{ backgroundColor: "rgb(255, 0, 0)" }}
            ></div>
          </div>
          <section className="text-center">
            <div className="row">
              <div className="col-md-12">
                <p style={{ paddingLeft: "10px" }}>
                  <br />
                </p>
              </div>
            </div>
            <div className="container-utente">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <img
                  src="img/icon_utente.png"
                  className="rounded"
                  alt="Utente"
                />
                <p>Utente</p>
              </div>
            </div>
          </section>
          <div className="csBoxCont">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="csTextoT">Nome</p>
                  <p className="csTextoL">José Pinheiro</p>
                  <p className="csTextoT">Data de Nascimento</p>
                  <p className="csTextoL">21-10-1930</p>
                </div>
                <div className="col">
                  <p className="csTextoT">Nº Utente de Saúde</p>
                  <p className="csTextoL">211019303</p>
                  <p className="csTextoT">Morada</p>
                  <p className="csTextoL">Rua 345</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col">
                <form className="csFormEdit">
                  <div className="form-group">
                    <label htmlFor="text" id="cdColorEdit">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control mb-4"
                      placeholder="pinheiro123@gmail.com"
                      id="numero"
                      required
                    />
                    <label htmlFor="type" id="cdColorEdit">
                      Nome de utilizador
                    </label>
                    <input
                      type="text"
                      className="form-control  mb-4"
                      placeholder="josé.pinheiro"
                      id="numero"
                      required
                    />
                    <label htmlFor="type" id="cdColorEdit">
                      Número de telefone
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+351- 917015201"
                      id="numero"
                      required
                    />
                  </div>
                  <br></br>
                  <input
                    type="submit"
                    defaultValue="Guardar"
                    className="btn btn-primary btn-lg"
                    id="btn_submit"
                  />
                </form>
              </div>
              <div className="col">
                <form className="formfinal">
                  <div className="form-group">
                    <label htmlFor="text" id="cdColorEdit">
                      Morada
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Rua"
                      required
                    />
                    <input
                      type="number"
                      className="form-control mb-2"
                      placeholder="Número de porta"
                      required
                    />
                    <input
                      type="number"
                      className="form-control mb-2"
                      placeholder="Código Postal"
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Concelho"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    defaultValue="Guardar"
                    className="btn btn-primary btn-lg "
                    id="csSubmitEdit2"
                  />
                </form>
              </div>
            </div>
          </div>
        </main>
        <br></br>
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

export default EditarPerfil;
