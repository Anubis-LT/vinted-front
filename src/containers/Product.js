import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Product = (props) => {
   const { id } = useParams();

   return (
      <>
         <div>
            <Header />
            <div className="container">id : {id}</div>
            <Footer />
         </div>
      </>
   );
};

export default Product;
