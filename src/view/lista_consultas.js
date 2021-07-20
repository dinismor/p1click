import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa"; //ICON LISTA
import { BsChevronLeft } from "react-icons/bs"; //ICON BOTÃO VOLTAR

class ListaConsultas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consulta_lista: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost:3000/consulta/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ consulta_lista: data });
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <Link
          type="button"
          id="btn_submit_bt"
          class="btn btn-outline-primary"
          to="../menu_consultas"
        >
          <BsChevronLeft />
          &nbsp;Voltar
        </Link>
        <p className="p_history">
          <FaRegListAlt />
          &nbsp;Consultas
        </p>
        <br></br>
        <br></br>
        <br></br>
        <table className="table table-striped">
          <thead className="table-light">
            <tr>
              <th scope="col" className="tab">
                ID
              </th>
              <th scope="col" className="tab">
                Tipo Consulta
              </th>
              <th scope="col" className="tab">
                Dia Consulta
              </th>
              <th scope="col" className="tab">
                Hora Consulta
              </th>
            </tr>
          </thead>
          <tbody>{this.loadFillData()}</tbody>
        </table>
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

  loadFillData() {
    return this.state.consulta_lista.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id_consulta}</td>
          <td>{data.tipo_consulta}</td>
          <td>{data.dia_consulta}</td>
          <td>{data.hora_consulta}</td>
        </tr>
      );
    });
  }
}
export default ListaConsultas;
