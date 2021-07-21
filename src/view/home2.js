import React, { Component, useEffect, useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import navbar_render from "./navbar_render";

import axios from "axios";

import {Link} from "react-router-dom";

import {minutos_atraso_consulta} from "./timer.js";
import {mostra_minutos_atraso} from "./timer.js";
import {save_atraso} from "./timer.js";
import {dia_semana} from "./timer.js";
import {dia_atual} from "./timer.js";
import {horas_atuais} from "./timer.js";



import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import {realtimeClock} from "./timer.js";


import "bootstrap/dist/css/website.css";
import { data } from "jquery";



class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
     
      
        time:"",
        c:""
    }
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


        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 500)

       
  
    }
    
 
 
  render() {
    
    setTimeout(mostra_minutos_atraso, 500);
    var nn= mostra_minutos_atraso();
  
    var y= nn;

    setTimeout(dia_semana,500);
    var xz= dia_semana();
    var ds= xz;


    setTimeout(dia_atual,500);
    var d_al= dia_atual();
    var d_atual = d_al;


    setTimeout(horas_atuais,500);
    var hr_at= horas_atuais();
    var hr_atual = hr_at;



    setTimeout(mostra_minutos_atraso, 500);
    var nn= mostra_minutos_atraso();
  
    var y= nn;

    setTimeout(dia_semana,500);
    var xz= dia_semana();
    var ds= xz;


    setTimeout(dia_atual,500);
    var d_al= dia_atual();
    var d_atual = d_al;


    setTimeout(horas_atuais,500);
    var hr_at= horas_atuais();
    var hr_atual = hr_at;


    return (
        
        

      <div>
 {navbar_render.loadNav()}
        
      
        {/* _________________________________________CARROSSEl____________________________________________________*/}
   
        <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="doutora.jpg" className="d-block  centralizar" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <p className="titulo_home">ESTAMOS AQUI POR SI</p>

      </div>
    </div>
    <div className="carousel-item">
      <img src="mulher_doutora.jpg" className="d-block   centralizar " alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <p className="titulo_home">ESTAMOS AQUI POR SI</p>

      </div>
    </div>
    <div className="carousel-item">
      <img src="vacina.jpg" className="d-block  centralizar " alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <p className="titulo_home">ESTAMOS AQUI POR SI</p>

      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
  </div>

        {/* _________________________________________ALERTA____________________________________________________*/}
        <section className="Menu_home2">
       
        <div className="magem_cartoes_home2">
            <div className="card_home2 text-center">
              <div className="card-body_home2">
                <h6 className="card-title" id="hoje_e">
                Hoje é {ds} dia {d_atual} e são {hr_atual} 
               
                </h6>
                <h3 className="Tempo_de_espera_home" id="media_e">
                  Média de tempo de espera
                </h3>
                <label className="Tempo_de_espera_1_home text-center" >{this.state.c + "    minutos"} </label>
              
                
                <Link className="btn btn-primary"  id="btn_verdetalhes" to="/senha" >
                      Ver detalhes
                      </Link>


            
              </div>
            </div>
        </div>

          
          {/* _________________________________________CARTÕES____________________________________________________*/}
          <div className="row row_wrap  row-cols-md-12 g-4">
            <div className="magem_cartoes">
              <div className="col">
                <div className="card">
                  <img
                    src="img/pexels-cottonbro-7578800.png"
                    className="card-img-top crop"
                    alt="imagem_marcacoes"
                  />
                  <div className="card-body_home">
                    <h3>Marcações</h3>
                    <h6>Marcar consulta / Histórico consulta</h6>
                    <h5>
                      Marque a sua consulta da forma mais simples de sempre!
                      Poderá aceder à lista de consultas e respetivo histórico.
                    </h5>
                    <div className="margem_botao_home">
                      <button type="button" className="btn_home btn-light">
                      <Link className="cor_botao" to={"../menu_consultas"}>
                  Saber mais
                </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="magem_cartoes">
              <div className="col">
                <div className="card">
                  <img
                    src="img/pexels-negative-space-48604.png"
                    className="card-img-top crop"
                    alt="..."
                  />
                  <div className="card-body_home">
                    <h3>Perfil</h3>
                    <h6>Dados pessoais</h6>
                    <h5>
                      Poderá aceder/editar os seus dados pessoais. Estes são
                      privados e visiveis, unicamente, ao o seu centro de saúde.
                    </h5>
                    <div className="margem_botao_home">
                      <button type="button" className="btn_home btn-light">
                      <Link className="cor_botao" to={"../perfil_utente"}>
                  Saber mais
                </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="magem_cartoes">
              <div className="col">
                <div className="card">
                  <img
                    src="img/world-diabetes-day.png"
                    className="card-img-top crop"
                    alt="..."
                  />
                  <div className="card-body_home">
                    <h3>Sobre</h3>
                    <h6>Sobre / Localização</h6>
                    <h5>
                      Encontrará todas as informações relativas ao seu centro de
                      saúde. Poderá aceder à localização via GPS.
                    </h5>
                    <div className="margem_botao_home">
                      <button type="button" className="btn_home btn-light">
                      <Link className="cor_botao" to={"/sobre"}>
                  Saber mais
                </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="magem_cartoes">
              <div className="col">
                <div className="card">
                  <img
                    src="img/portrait-of-a-doctor.png"
                    className="card-img-top crop"
                    alt="..."
                  />
                  <div className="card-body_home">
                    <h3>Contactos</h3>
                    <h6>Horários / Nº de telefone / E-mail / Morada</h6>
                    <h5>
                      Contacte-nos em caso de emergências ou para mais
                      informações. Aqui poderá encotrar outros meios de
                      comunicaçao.
                    </h5>
                    <div className="margem_botao_home">
                      <button type="button" className="btn_home btn-light">
                      <Link className="cor_botao" to={"../contactos"}>
                  Saber mais
                </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Home;
