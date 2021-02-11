import Logo from "../assets/Image/logo.png";
import { Link } from "react-router-dom";
const Header = ({ setUser, userToken }) => {
   return (
      <>
         <header className="container">
            <div className="btn_connection">
               <div>
                  <img className="logo" src={Logo} alt="Logo Vinted"></img>
               </div>
               <div>
                  {userToken ? (
                     <Link onClick={() => setUser(null)}>Se déconnecter</Link>
                  ) : (
                     <>
                        <Link to="/signup">S'inscrire</Link>
                        <Link to="/login">Se connecter</Link>
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
