import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stackedbar_medias from "../assets/stackedbar_medias";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

class App_media extends Component {
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
    document.title = "Média de Consultas";
  }
  render() {
    return (
      <div className="container-fluid app_temporarias">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>
        <div class="row ">
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
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/consultas"}>
                  Consultas
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/afluencia"}>
                  Afluência
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/desistencias"}>
                  Desistências
                </Link>
              </div>
            </a>

            <a>
              <div className="box_selection_medico">
                <Link className="selection_medico" to={"/temporarias"}>
                  Temporárias
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
                <span id="CENTRO_DE_SADE">CENTRO DE SAÚDE</span>
                <br />

                <div id="Sto">
                  <span>Sátão</span>
                </div>

                <div className="administracao_medico">
                  <Link className=" btn-info btn_lt" to="../admin_inicial">
                    Médico
                  </Link>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2">
                <span className="h_desistencias">Média de Consultas</span>
              </div>
              <div className="col-1">
                <select
                  id="lang"
                  value={this.state.selectedChart}
                  onChange={this.changeChart}
                >
                  <option value="line">janeiro</option>
                  <option value="area">fevereiro</option>
                  <option value="bar">março</option>
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
              <h2 className="d_consultas_medias">% de Consultas</h2>
              <div className="stacked_medias">
                <Stackedbar_medias />
              </div>
            </div>
            <div className="row">
              <span className="col- 11 dias_d_semana_media">
                Dias de Semana
              </span>
              <div className="col-1"> </div>
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

export default App_media;
