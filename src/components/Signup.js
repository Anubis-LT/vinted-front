import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

   const [username, setUserName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [checkbox, setCheckbox] = useState();

   const history = useHistory();

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
               username: username,
               email: email,
               password: password,
            }
         );

         alert(response)

         history.push("/");
      } catch (error) {
         return error.message;
      }
   };
   return (
      <div>
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="login">
                  <span>S'inscrire</span>

                  <input
                     onChange={(event) => setUserName(event.target.value)}
                     type="text"
                     value={username}
                     placeholder="Nom d'utilisateur"
                  />
                  <input
                     onChange={(event) => setEmail(event.target.value)}
                     type="text"
                     value={email}
                     placeholder="Adresse Email"
                  />
                  <input
                     onChange={(event) => setPassword(event.target.value)}
                     type="password"
                     value={password}
                     placeholder="Mot de Passe"
                  />
                  <div className="newsletterInscription">
                     <input type="checkbox" checked={checkbox} />
                     S'incrire à notre newsletter
                  </div>
                  <p></p>
                  <p>
                     En m'inscrivant je confirme avoir lu et accepte les Termes
                     & Conditions Politique de Confidentialité de Vinted; Je
                     confirme avoir au moins 18 ans.
                  </p>
                  <button type="submit">S'inscrire</button>
                  <p>
                     <Link to="/login">
                        Tu as déja un compte ? Connecte toi !
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;
