import axios from "axios";
import jwt from "jwt-decode"

class AuthService {
  login(n_utente_saude, palavra_passe) {
    return axios
      .post("http://localhost:3000/utilizador/login", { n_utente_saude,palavra_passe })
      .then(
        (res) => {
          const token=res.data.token;
          const user=jwt(token);
          if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
//          return res.data;
        },
       // reason => { throw  Error(reason.response.data.message); }
        );
  }
  logout() {
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();
