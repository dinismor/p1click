import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bar5_atrasos_admin from "../assets/Bar5_atrasos_admin";
import Donut5_admin from "../assets/Donut5_admin";
import Donut6_admin from "../assets/Donut6_admin";
import Donut7_admin from "../assets/Donut7_admin";
import Donut8_admin from "../assets/Donut8_admin";
import Stackedbar_medias_admin from "../assets/stackedbar_medias_admin";
import Bar_aflu_admin from "../assets/Bar_aflu_admin";
import Bar2_aflu_admin from "../assets/Bar2_aflu_admin";
import Bar3_Aflu_admin from "../assets/Bar3_aflu_admin";
import Bar4_aflu_admin from "../assets/Bar4_aflu_admin";
import Donut_admin from "../assets/Donut_admin";
import Donut2_admin from "../assets/Donut2_admin";
import Donut3_admin from "../assets/Donut3_admin";
import Donut4_admin from "../assets/Donut4_admin";
import Stackedbar_admin from "../assets/stackedbar_admin";
import Bar_admin from "../assets/Bar_admin";
import Bar2_admin from "../assets/Bar2_admin";
import Bar3_admin from "../assets/Bar3_admin";
import Bar4_admin from "../assets/Bar4_admin";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

class Administrador extends Component {
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
    document.title = "Administrador";
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
              <div className="col-11 subtitle_2_admin">
                <span className="h_desistencias_admin">Média de Atrasos</span>
              </div>
            </div>

            <div className="row d_contentor_admin">
              <div className="bar_atrasos_admin">
                <Bar5_atrasos_admin/>

                <h2 className="dias_d_semana_atrasos_admin">Meses</h2>
              </div>
              <div className="donut_go2_admin">
                <div className=" dois_primeiros">
                  <Donut8_admin/>

                  <Donut6_admin/>
                </div>
                <div className="donut_go_admin">
                  <Donut5_admin/>
                  <Donut7_admin/>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2_admin">
                <span className="h_desistencias_admin">Média de Consultas</span>
              </div>
            </div>

            <div className="row d_contentor">
              <h2 className="d_consultas_medias" id="d_consultas_admin">
                % de Consultas
              </h2>

              <div className="stacked_medias_admin">
                <Stackedbar_medias_admin/>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2_admin">
                <span className="h_desistencias_admin">Alfuência</span>
              </div>
            </div>

            <div className="bar_admin">
              <Bar_aflu_admin/> <Bar2_aflu_admin/>
            </div>
            <div className="semanas_temporarias">
              <h4 className="dias_d_semana_temporarias_admin">Semana 1</h4>
              <h4 className="dias_d_semana_temporarias2_admin">Semana 2</h4>
            </div>

            <div className="bar_admin">
              <Bar3_Aflu_admin/> <Bar4_aflu_admin/>
            </div>
            <div className="semanas_temporarias">
              <h4 className="dias_d_semana_temporarias_admin">Semana 3</h4>
              <h4 className="dias_d_semana_temporarias2_admin">Semana 4</h4>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2_admin">
                <span className="h_desistencias_admin">Desistências</span>
              </div>
            </div>

            <div className="row d_contentor_admin">
              <h2 className="d_consultas_medias" id="desistencias_admin">
                % de Consultas
              </h2>
              <div className="bar_atrasos_admin">
                <Stackedbar_admin/>

                <h2 className="dias_d_semana_atrasos_admin" id="meses_admin">
                  Meses
                </h2>
              </div>
              <div className="donut_go2_admin" id="desce_donut">
                <div className=" dois_primeiros">
                  <Donut4_admin/>

                  <Donut2_admin/>
                </div>
                <div className="donut_go_admin">
                  <Donut3_admin/>
                  <Donut_admin/>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-11 subtitle_2_admin">
                <span className="h_desistencias_admin">
                  Consultas Temporárias
                </span>
              </div>
            </div>

            <div className="bar_admin">
              <Bar_admin></Bar_admin> <Bar2_admin></Bar2_admin>
            </div>
            <div className="semanas_temporarias">
              <h4 className="dias_d_semana_temporarias_admin">Semana 1</h4>
              <h4 className="dias_d_semana_temporarias2_admin">Semana 2</h4>
            </div>

            <div className="bar_admin">
              <Bar3_admin /> <Bar4_admin />
            </div>
            <div className="semanas_temporarias" id="espacamento_temporarias2">
              <h4 className="dias_d_semana_temporarias_admin">Semana 3</h4>
              <h4 className="dias_d_semana_temporarias2_admin">Semana 4</h4>
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

export default Administrador;
