import Logo from "../assets/Image/logo.png";

const Header = () => {
   return (
      <>
         <header className="container">
            <img className="logo" src={Logo} alt="Logo Vinted"></img>
         </header>
         <div className="sep"></div>
      </>
   );
};
export default Header;
