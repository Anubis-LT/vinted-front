import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
   const [errorMessage, setErrorMessage] = useState("");
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const history = useHistory();

   const handleSubmit = async (event) => {
      try {
         event.preventDefault();
         // Requête axios vers la route /login du back
         const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            {
               email: email,
               password: password,
            }
         );
         if (response.data.token) {
            setUser(response.data.token);
            // Naviguer vers la home page
            history.push("/");
         }
      } catch (error) {
         console.log(error.response.message);
      }
   };
   return (
      <div>
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="login">
                  <span>Se connecter</span>

                  <input
                     onChange={(event) => setEmail(event.target.value)}
                     type="text"
                     placeholder="Adresse Email"
                  />
                  <input
                     onChange={(event) => setPassword(event.target.value)}
                     type="password"
                     placeholder="Mot de Passe"
                  />
                  <button type="submit">Se connecter</button>
                  <p>
                     {" "}
                     <Link to="/signup">
                        Pas encore de compte ? inscris-toi !
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
