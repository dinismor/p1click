import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bar5_atrasos from "../assets/Bar5_atrasos";
import Donut5 from "../assets/Donut5";
import Donut6 from "../assets/Donut6";
import Donut7 from "../assets/Donut7";
import Donut8 from "../assets/Donut8";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

class App_atrasos extends Component {
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
    document.title = "Média de Atrasos";
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
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/atrasos"}>
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
                  Afluencia
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
                <span className="h_desistencias">Média de Atrasos</span>
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

            <div className="row d_contentor_atrasos">
              <div className="bar_atrasos">
                <Bar5_atrasos/>
              </div>
            </div>

            <div className="row">
              <h2 className="col- 11 dias_d_semana_atrasos">Meses</h2>

              <div className="col-1"> </div>
            </div>

            <div className="row app1_atrasos">
              <div className="donut_go2">
                <Donut8/>
              </div>
              <Donut6/>
            </div>

            <div className="hagas1_atrasos">
              <h4 className="h_semana1">Semana 1</h4>
              <h4 className="h_semana2">Semana 2</h4>
            </div>

            <div className="row app2_atrasos ">
              <Donut5/>
              <div className="donut_go">
                <Donut7/>
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

export default App_atrasos;
