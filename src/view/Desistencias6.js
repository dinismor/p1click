import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Donut from "../assets/Donut";
import Donut2 from "../assets/Donut2";
import Donut3 from "../assets/Donut3";
import Donut4 from "../assets/Donut4";
import Stackedbar from "../assets/stackedbar";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

class App_desistencias extends Component {
  constructor(props) {
    super(props);
    this.changeChart = this.changeChart.bind(this);
    this.state = {
      selectedChart: "line",
    };
  }

  changeChart(e) {
    this.setState({ selectedChart: e.target.value });
  }

  componentDidMount() {
    document.title = "DesistĂȘncias";
  }

  render() {
    return (
      <div className="container-fluid tudo">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>

        <div class="row">
          <aside className="aside_admin col-2 px-0 ">
            <p className="admin">
              <b>Administrador</b>
            </p>
            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/atrasos"}>
                  Atrasos
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/consultas"}>
                  Consultas
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/afluencia"}>
                  AfluĂȘncia
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/desistencias"}>
                  DesistĂȘncias
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/temporarias"}>
                  TemporĂĄrias
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/medico_sair"}>
                  Sair
                </Link>
              </div>
            </a>
          </aside>

          <div className="col-10 offset-2 ">
            <div className="row">
              <div className="text-right" id="logo_admin">
                <span id="CENTRO_DE_SADE">CENTRO DE SAĂDE</span>
                <br />

                <div id="Sto">
                  <span>SĂĄtĂŁo</span>
                </div>
                <div className="administracao_medico">
                  <Link className=" btn-info btn_lt" to="../admin_inicial">
                    MĂ©dico
                  </Link>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2">
                <span className="h_desistencias"> DesistĂȘncias </span>
              </div>
              <div className="col-1">
                <select
                  id="lang"
                  value={this.state.selectedChart}
                  onChange={this.changeChart}
                >
                  <option value="line">janeiro</option>
                  <option value="area">fevereiro</option>
                  <option value="bar">marĂ§o</option>
                  <option value="column">abril</option>
                  <option value="radialbar">maio</option>
                  <option value="donut">junho</option>
                  <option value="updateExample">julho</option>
                  <option value="updateExample">agosto</option>
                  <option value="updateExample">setembro</option>
                  <option value="updateExample">outubro</option>
                  <option value="updateExample">novembro</option>
                  <option value="updateExample">dezembro</option>
                </select>
              </div>
            </div>

            <div className="row d_contentor">
              <h2 className="d_consultas_desi">% de Consultas</h2>

              <div className="stacked_desi">
                <Stackedbar />
              </div>
            </div>

            <div className="row">
              <h2 className="col- 11 dias_d_semana_desi">Dias de Semana</h2>

              <div className="col-1"> </div>
            </div>
            <div className="row app1_atrasos">
              <div className="donut_go2">
                <Donut4/>
              </div>
              <Donut2/>
            </div>

            <div className="hagas1_atrasos">
              <h4 className="h_semana1">Semana 1</h4>
              <h4 className="h_semana2">Semana 2</h4>
            </div>

            <div className="row app2_atrasos ">
              <Donut3/>
              <div className="donut_go">
                <Donut/>
              </div>
            </div>

            <div className="hagas1_atrasos">
              <h4 className="h_semana1">Semana 3</h4>
              <h4 className="h_semana2">Semana 4</h4>
            </div>
          </div>
        </div>

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
      </div>
    );
  }
}

export default App_desistencias;
