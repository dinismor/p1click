import React, { Component } from "react";
import navbar_render from "./navbar_render";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
class senha extends Component {
  constructor(props) {
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
    return (
      <div>
        {navbar_render.loadNav()}
      
        <div>
          <img
            src="img/Tempo_espera.png"
            className="imagem_tempo_espera"
            alt="Tempo_espera"
          />
         
          <div className="Menu">
            <div className="card-columns">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" id="blancc">Tempo de espera</h5>
                  <p className="card-text" id="blancc">{this.state.c + "    minutos"}</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" id="blancc">Consultas à sua frente</h5>
                  <p className="card-text" id="blancc">3</p>
                </div>
              </div>

              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title" id="blancc">Nº da sua senha</h5>
                  <p className="card-text" id="blancc">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default senha;
