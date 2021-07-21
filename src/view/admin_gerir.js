import React, { Component, useEffect, useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";

import navbar_render from "./navbar_render";

const baseUrl = "http://localhost:3000";

class Gerir extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      
      time:"",
      c:""
     
    };
  }
componentDidMount() {

  const url = "http://localhost:3000/tempo/get_tempo/1";
  axios
    .get(url)
    .then((res) => {
      

      console.log(res.data);
      if (res.data.success) {
        const data = res.data.data;
     
        console.log(data)
       
        this.setState({c:data.time})
        
        
      } else {
        alert("Erro Serviço Web!");
      }
    })
    .catch((error) => {
      alert(error);
    });

}

  render() {
    return (

<div>
        {/* Formulário Editar Utente*/}
        <br></br>
        <div className="container">
          <div class="row">
            <aside className="aside_medico col-2 px-0 ">
              <p className="medico">
                <b>Médico</b>
              </p>
              <a href="#">
                <div className="box_selection_medico">
                  <Link
                    className="selection_medico"
                    to={"/admin_marcar_consulta"}
                  >
                    Marcar Consulta
                  </Link>
                </div>
              </a>

              <a href="#">
                <div className="box_selection_medico">
                  <Link
                    className="selection_medico"
                    to={"/admin_lista_utentes"}
                  >
                    Lista de Utentes
                  </Link>{" "}
                </div>
              </a>

              <a href="#">
                <div className="box_selection_medico ">
                  <Link className="selection_medico" to={"/admin_utentes"}>
                    Editar Utente
                  </Link>
                </div>
              </a>

              <a href="#">
              <div className="box_selected_medico">
                <Link className="selected_medico" to={"/editar_tempo"}>
                  Gerir Atrasos
                </Link>
              </div>
            </a>

              <a href="#">
                <div className="box_selection_medico">
                  <Link className="selection_medico" to={"/medico_sair"}>
                    Sair
                  </Link>{" "}
                  {/* TESTE DE PÁGINA */}
                </div>
              </a>
            </aside>

            <div className="col-10 offset-2 ">

            <div className="row mb-5">
                <div className="text-right" id="logo_medico">
                  <span id="CENTRO_DE_SADE_medico">CENTRO DE SAÚDE</span>
                  <br/>

                  <div id="Sto_medico">
                    <span>Sátão</span>
                  </div>
                  <div className="administracao_medico">
                    <Link className=" btn-info btn_lt" to={"/Administrador"}>
                      Administrador
                    </Link>
                  </div>
                </div>
              </div>


     
          <div className="row">
            <div className="col">
              <br />

              <div className="shadow-sm p-3 mb-5" id="txt_timer"><span id="minutos">{this.state.c}</span> minutos</div>
              <br />
              <label className="tempo " htmlfor="text">
                Insira tempo de atraso das próximas consultas
              </label>
              <br />
              <br />
              
              <input type="number" min="0" max="60" className="form-control"  value={this.state.time} onChange={(value)=> this.setState({time:value.target.value})}/>
              
              <Link className="btn btn-primary" onClick={()=>this.sendUpdate()} >Editar</Link>
              
            </div>
            <div className="col"></div>
          </div>
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

  sendUpdate() {
   
   
  
    const url = "http://localhost:3000/tempo/edit_tempo/1";
   
    const datapost = {
      time: this.state.time,
      c: this.state.time
    };
   

    axios
      .post(url, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
           
        } else {
          alert("Erro");
        }
      })
      .catch((error) => {
        alert("Erro 34 " + error);
      });
     window.location.reload();
  }


}

export default Gerir;
