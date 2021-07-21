import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";
import navbar_render from "./navbar_render";
import { BiMap } from "react-icons/bi"; //ICON HISTORICO
import { Link } from "react-router-dom";

class Sobre extends React.Component {
  render() {
    return (
      <div>
        {navbar_render.loadNav()}
        {/* Formulário */}
        <div>
          <img src="img/Sobre.jpg" className="imagem_sobre" alt="Sobre" />
          <br></br>
          <br></br>
          <div className="Menu_sobre">
            <p className="p_sobre">
              Estamos disponíveis para responder a qualquer necessidade da sua
              saúde para si com:
              <br />
              - médicos de medicina geral;
              <br />- enfermeiros.
            </p>
            <div className="margem_titulo_sobre">
              <p className="titulo_pagina_sobre">
                <BiMap className="icon_local" />
                &nbsp;Localização
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9711979818417!2d-7.731467184634127!3d40.740659279328774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3cb44d372feca3%3A0x27add71f1847c816!2zQ2VudHJvIGRlIFNhw7pkZSAtIFPDoXTDo28!5e0!3m2!1spt-PT!2spt!4v1620385760170!5m2!1spt-PT!2spt"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>{" "}
          {/*GOOGLE MAPS COM LOCALIZAÇÃO DO CENTRO DE SAUDE*/}
        </div>
        <br></br>
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
        {/* Footer */}
      </div>
    );
  }
}

export default Sobre;
