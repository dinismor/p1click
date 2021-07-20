import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../view/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import { async } from "regenerator-runtime";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo é de preenchimento obrigatório!
      </div>
    );
  }
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      n_utente_saude: "",
      palavra_passe: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({ n_utente_saude: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ palavra_passe: e.target.value });
  }
  
  handleLogin = async(e) => {
    e.preventDefault();
    this.setState({ message: "", loading: true });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.n_utente_saude, this.state.palavra_passe).then(() => {
        this.props.history.push("/home");
        window.location.reload();
      });
      this.setState({
        loading: false,
        message: "Login Errado",
      });
    }
  }
  render() {
    return (
      <div className="global-container csLogin">
        <div className="login-form">
          <div className="body">
            <img src="img/logo.png" className="img-fluid" alt="Logo" />
            <h5 className="card-title text-center">Centro de Saúde</h5>
            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <div className="form-group">
                <label htmlFor="username">Nome de Utilizador</label>
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  name="username"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="xxx xxx xxx"
                  value={this.state.n_utente_saude}
                  onChange={this.onChangeUsername}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Palavra-Passe</label>
                <Input
                  type="password"
                  className="form-control form-control-sm"
                  tounaqtiii
                  name="password"
                  id="exampleInputPassword1"
                  placeholder="********"
                  value={this.state.password}
                  onChange={ this.onChangePassword} 
                  validations={[required]}
                />

                <Link className="link1" to="/recuperar_password">
                  Recuperar palavra-passe
                </Link>
                <Link className="link2" to="/registo">
                  Criar nova conta
                </Link>
                <br />
                <br />
              </div>

              <div className="form-group">
                {/* href="http://localhost:3001/login" */}
                <button
                  id="btn_submit"
                  className="btn btn-primary btn-lg"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
                <Link
                  type="button"
                  id="btn_submit_temp"
                  className="btn btn-outline-primary btn-lg"
                  to="/consulta_temporaria"
                >
                  Criar QRCode temporário
                </Link>
              </div>
              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
            <br></br>
          </div>
        </div>
      </div>

      /*
    
 
   
        <div className="global-container csLogin">
          <div className="login-form">
            <div className="body">
              <img src="img/logo.png" className="img-fluid" alt="Logo" />
              <h5 className="card-title text-center">Centro de Saúde</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Nº de Utente de Saúde
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="xxx xxx xxx"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Palavra-passe</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="exampleInputPassword1"
                    placeholder="********"
                  />
                  <a className="link1" href="#">
                    Recuperar palavra-passe
                  </a>
                  <a className="link2" href="#">
                    Criar nova conta
                  </a>
                  <br />
                  <br />
                </div>
               
                  

                 

                   //<a className="btn_login btn-primary btn-lg" href="http://localhost:3001/login">Login</a>
                   <button
                     type="button"
                     className="btncriar btn-outline-primary btn-lg"
                   >
                     Criar QRCode temporário
                   </button>
                
               </form>
             </div>
           </div>
         </div>
  

    
    */
    );
  }
}
