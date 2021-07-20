import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/website.css";

class Contactos extends React.Component {
  render() {
    return (
      <div>
        {/*ELIMINAR NAVBAR PARA NAO DUPLICAR AO INTERAGIR*/}
        <div>
          <div className="box_img">
            <img className="img_contactos" src="img/contactos_img.jpg" />
          </div>
          <div className="content_sobre">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4" id="content_contact_1">
                  <div className="padding-left_mqueries">
                    <p className="txt_sobre">
                      {" "}
                      <img src="img/info-circle.svg" />
                      <span className="carateres">
                        De 2ª a domingo: 08:00 às 20:00
                      </span>
                    </p>
                    <p className="txt_sobre" id="tele_txt">
                      <img src="img/telephone-fill.svg" />
                      <span className="carateres">232 980 120</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4" id="content_contact_2">
                  <p
                    className="txt_sobre"
                    id="txt_sobre_mail"
                    mailto="ucsp.satao@arscentro.min-saude.pt"
                  >
                    <img src="img/at.svg" />
                    <span className="carateres">
                      ucsp.satao@arscentro.min-saude.pt
                    </span>
                  </p>
                  <p className="txt_sobre" id="location_satao_sobre">
                    <img src="img/geo-alt-fill.svg" />
                    <span className="carateres">R. Miusã 41, Sátão</span>
                  </p>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
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

export default Contactos;
