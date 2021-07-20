import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";

//--------------------------------------------------------IMPORTS VIEWS---------------------------------------------------------------------

import AuthService from "./view/auth.service";
import Login from "./view/login"; // VIEW LOGIN
import Registar from "./view/registo"; // IMPORTA VIEW DO REGISTO
import RecuperarPass from "./view/recuperar_password"; // IMPORTA VIEW RECUPERAR PASSWORD
import ConsultaTemporaria from "./view/consulta_temporaria"; // IMPORTA VIEW CONSULTA TEMPORÁRIA
import MenuConsultas from "./view/menu_consultas"; //IMPORTA VIEW PAGINA MENU CONSULTAS, 3 BOTOES NOVA CONSULTA, LISTA E HISTÓRICO
import ListaConsultas from "./view/lista_consultas"; //IMPORTA VIEW PAGINA LISTA CONSULTAS UTENTE
import ConsultaUtente from "./view/consulta_utente"; // IMPORTA VIEW DO MARCAR CONSULTA UTENTE
import Historico from "./view/historico"; // IMPORTA VIEW DO HISTORICO DE CONSULTAS
import AlterarPassword from "./view/alterar_password"; //IMPORTA VIEW PAGINA ALTERAR PASSWORD
import PerfilUtente from "./view/perfil_utente"; //IMPORTA VIEW PAGINA PERFIL UTENTE
import EditarPerfil from "./view/editar_perfil"; //IMPORTA VIEW PAGINA EDITAR PERFIL UTENTE
import Sobre from "./view/sobre"; //IMPORTA VIEW PAGINA SOBRE
import Contactos from "./view/contactos"; //IMPORTA VIEW PAGINA ADMIN QUE LISTA CONSULTAS

//------------------------------------------------ IMPORTS VIEWS ADMINISTRAÇÃO-----------------------------------------------------------------

import AdminConsultaEditDelete from "./view/admin_lista_consulta_edit_delete"; // IMPORTA VIEW PAGINA ADMIN LISTA CONSULTA COM OPÇOES EDIT E DELETE
import AdminConsultaEdit from "./view/admin_editar_consulta"; //IMPORTA VIEW PAGINA ADMIN PARA EDITAR CONSULTA
import AdminListarConsultas from "./view/admin_listar_consultas"; //IMPORTA VIEW PAGINA ADMIN QUE LISTA CONSULTAS
import AdminMarcarConsulta from "./view/admin_marcar_consulta"; //IMPORTA VIEW PAGINA ADMIN DE MARCAR CONSULTAS
import AdminEndConsulta from "./view/admin_end_consulta"; //IMPORTA VIEW PAGINA ADMIN DE CONCLUSÃO E VISUALIZAÇÃO DE CONSULTAS
import AdminListaUtentes from "./view/admin_lista_utentes"; //IMPORTA VIEW PAGINA ADMIN DE LISTAR UTENTES

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = { currentUser: { n_utente_saude: "Anonimo" } };
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div className="App">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light csNav">
            <a className="navbar-brand" href="#">
              Centro de Saúde <p className="p_nav">Sátão</p>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link class="nav-link" to="../">
                    {" "}
                    {/* COLOCAR HOME */}
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="../menu_consultas">
                    Marcações
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="../perfil_utente">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="../sobre">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="../contactos">
                    Contactos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    class="nav-link"
                    to="../admin_lista_consulta_edit_delete"
                  >
                    {" "}
                    {/* TESTE PARA ADMIN  E APARECE LOGO ESSA PÁGINA */}
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* Navbar */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route exact path="/login" component={Login} />
            {/*<Link className="btn_login btn-primary btn-lg" to={"/login/"} >Login</Link>*/}
            <Route path="/registo" component={Registar} />
            <Route path="/recuperar_password" component={RecuperarPass} />
            <Route path="/consulta_temporaria" component={ConsultaTemporaria} />
            <Route path="/menu_consultas" component={MenuConsultas} />
            <Route path="/lista_consultas" component={ListaConsultas} />
            <Route path="/consulta_utente" component={ConsultaUtente} />
            <Route path="/historico" component={Historico} />
            <Route path="/alterar_password" component={AlterarPassword} />
            <Route path="/perfil_utente" component={PerfilUtente} />
            <Route path="/editar_perfil" component={EditarPerfil} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contactos" component={Contactos} />
            <Route
              path="/admin_lista_consulta_edit_delete"
              component={AdminConsultaEditDelete}
            />
            <Route
              path="/admin_editar_consulta"
              component={AdminConsultaEdit}
            />
            <Route
              path="/admin_listar_consultas"
              component={AdminListarConsultas}
            />
            <Route
              path="/admin_marcar_consulta"
              component={AdminMarcarConsulta}
            />
            <Route path="/admin_end_consulta" component={AdminEndConsulta} />
            <Route path="/admin_lista_utentes" component={AdminListaUtentes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
