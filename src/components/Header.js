import Logo from "../assets/Image/logo.png";
import Menu from "../components/Menu";
import Hook from "../components/Hook";
const Header = () => {
   return (
      <>
         <header className="container">
            <img className="logo" src={Logo} alt="Logo Vinted"></img>
         </header>
         <div className="sep"></div>
         <Menu />
         <Hook />
      </>
   );
};
export default Header;
