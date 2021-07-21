import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { Link } from "react-router-dom";
import authHeader from "./auth-header";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class listComponent extends React.Component {
  loadUtilizador() {
    const url = "http://localhost:3000/utilizador/list";
    axios
      .get(url, { headers: authHeader() })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ listUtilizador: data });
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  sendDelete(userId) {
    const baseUrl = "http://localhost:3000/utilizador/delete";
    axios
      .post(baseUrl, { headers: authHeader(), id: userId })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          this.loadUtilizador();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}
export default listComponent;
