import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class RecuperarPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <div>
        <Link
          type="button"
          id="btn_submit_bt"
          class="btn btn-primary"
          to="../login"
        >
          <BsChevronLeft />
          &nbsp;Voltar
        </Link>
        <div className="global-container">
          <div className="login-form">
            <div className="body">
              <img src="img/logo.png" className="img-fluid" alt="Logo" />
              <h5 className="card-title text-center">Centro de Saúde</h5>
              {/*<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
              <form>
                {/* to error: add class "has-danger" */}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">E-mail</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="pinheiro123@gmail.com"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    id="btn_submit"
                  >
                    Enviar e-mail
                  </button>
                  <Link className="link3" to="/login">
                    Já tenho Conta
                  </Link>
                  {/*vai para a página do login*/}
                </div>
              </form>
            </div>
          </div>
        </div>
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
}

export default RecuperarPass;
