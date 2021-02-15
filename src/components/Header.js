import Logo from "../assets/Image/logo.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = ({ setUser, userToken, fetchData }) => {
   const [search, setSearch] = useState(null);
   const history = useHistory();
   let req = "";
   const handleSubmit = (event) => {
      event.preventDefault();

      // On construit la requete
      let request = [];
      if (search !== "") {
         request.push("title=" + search);
      }

      if (request.length === 1) {
         req = "?" + request[0];
      } else if (request.length > 1) {
         req = "?" + request.join("&");
      }

      fetchData(req);
   };

   return (
      <>
         <header className="container">
            <div className="btn_connection">
               <div>
                  <img className="logo" src={Logo} alt="Logo Vinted"></img>
               </div>
               <form onSubmit={handleSubmit}>
                  <input
                     onChange={(event) => setSearch(event.target.value)}
                     type="text"
                     placeholder="Recherche des articles"
                  />
                  <div> Creer une checkbox de prix </div>
               </form>
               <div>
                  {userToken ? (
                     <>
                        <Link onClick={() => setUser(null)}>
                           Se déconnecter
                        </Link>
                        <button
                           onClick={() => {
                              history.push("/publish");
                           }}
                           className="header-button button-sold"
                        >
                           Vends tes articles
                        </button>
                     </>
                  ) : (
                     <>
                        <Link to="/signup">S'inscrire</Link>
                        <Link to="/login">Se connecter</Link>
                        <button
                           onClick={() => {
                              history.push("/publish");
                           }}
                           className="header-button button-sold"
                        >
                           Vends tes articles
                        </button>
                     </>
                  )}
               </div>
            </div>
         </header>
         <div className="sep"></div>
      </>
   );
};
export default Header;
