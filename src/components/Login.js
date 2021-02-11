import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const history = useHistory();

   const handleSubmit = (event) => {
      event.preventDefault();
      const fetchData = async () => {
         try {
            const response = await axios.post(
               "https://lereacteur-vinted-api.herokuapp.com/user/login",
               {
                  email: email,
                  password: password,
               }
            );
            console.log(response);
            alert(response.data.token);
            const token = response.data.token;
            setUser(token);
            history.push("/");
         } catch (error) {
            console.log(error.message);
            alert(error.message);
         }
      };
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
